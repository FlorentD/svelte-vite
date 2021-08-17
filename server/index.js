const { ApolloServer } = require('apollo-server-fastify');
const { typeDefs, resolvers } = require('./apollo.js');
const path = require('path');
const fastify = require('fastify');
const svelteApp = require(path.join(__dirname, '../build/server/App.js'));
const manifest = require(path.join(__dirname, '../build/client/manifest.json'));

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = fastify();
  await app.register(require('fastify-express'));
  app.register(server.createHandler());
  app.register(require('fastify-static'), {
    root: path.join(__dirname, '../build/client/assets'),
    prefix: '/assets/',
  });
  app.get('*', async (request, reply) => {
    const { html } = svelteApp.default.render({ url: request.url });
    reply.type('text/html').code(200);
    const jsImports = manifest['index.html'].imports.map((entry) => {
      return `<link rel="modulepreload" href="${manifest[entry].file}">`;
    });
    const cssImports = manifest['index.html'].css.map((entry) => {
      return `<link rel="stylesheet" href="${entry}">`;
    });
    return `
    <html lang="fr">
      <body>
        <div id="app">${html}</div>
        <script type="module" crossorigin src=${manifest['index.html'].file}></script>
        ${jsImports}
        ${cssImports}
      </body>
    </html>
`;
  });
  await app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
