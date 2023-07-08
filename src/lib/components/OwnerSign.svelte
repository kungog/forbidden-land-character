<script lang="ts">
  export let string: string;
</script>

<div><p>{string}</p></div>

<style>
  div {
    background: var(--color-black);
    border-radius: var(--radius-04);
    padding: var(--spacing-10) var(--spacing-16);
    width: fit-content;
  }

  p {
    color: var(--color-white);
  }
</style>