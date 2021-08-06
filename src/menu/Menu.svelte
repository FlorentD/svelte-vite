<script>
  import { Link } from 'svelte-routing';
  const menu = [
    {
      id: 'item1',
      label: 'Main',
      link: '',
    },
    {
      id: 'item2',
      label: 'Why',
      link: 'why',
    },
    {
      id: 'item3',
      label: 'About',
      link: 'about',
    },
    {
      id: 'item4',
      label: 'NoMatch',
      link: 'nomatch',
    },
    {
      id: 'item5',
      label: 'Filmz',
      link: 'films',
    },
    {
      id: 'item6',
      label: 'Lazy',
      link: 'lazy',
    },
  ];
</script>

<ul class="flex flex-col mt-4">
  {#each menu as item}
    <li>
      <Link
        class="block p-4 text-white visited:text-blue-100 font-bold hover:text-blue-200 text-xl"
        to={item.link}
      >
        {item.label}
      </Link>
    </li>
  {/each}
</ul>
