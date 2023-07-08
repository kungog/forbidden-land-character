<div>
  <slot />
</div>

<style>
  div {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    z-index: 2;
  }

  @media (max-width: 1200px) {
	div {
      padding: 0 var(--spacing-16);
    }
  }

  @media (max-width: 768px) {
    div {
      padding: 0 var(--spacing-12);
    }
  }
</style>