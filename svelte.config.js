const adapter = require('@sveltejs/adapter-netlify');

module.exports = {
  kit: {
    adapter: adapter(), // currently the adapter does not take any options
    target: '#svelte',
  },
};
