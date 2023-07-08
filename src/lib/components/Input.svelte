<script lang="ts">
	export let iType: 'text' | 'password' | 'number', iLabel: string, iValue: string, iFor: string;
</script>

<div>
  <label for={iFor}>{iLabel}</label>
  <input type={iType} name={iFor} value={iValue} />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacing-12);

    &:not(:last-child) {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--spacing-24);
    }

    input {
      background: transparent;
      border: 1px solid var(--secondary-color);
      padding: var(--spacing-10) var(--spacing-14);

        &:focus {
        border: 1px solid var(--accent-color);
      }
    }

    label {
      margin-bottom: var(--spacing-08);
      transition: all 0.3s;
    }

    &:has(input:focus) > label {
      margin-left: var(--spacing-08);
    }
  }
</style>