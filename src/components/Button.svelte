<script>
  export let onClick = () => null;
</script>

<button
  class="rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm"
  on:click={onClick}><slot /></button
>
