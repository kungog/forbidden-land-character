<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
  import SignInButton from "$lib/components/SignInButton.svelte"
  import { signIn } from "@auth/sveltekit/client"


  let unValue = ''
  let pValue = ''
  let loading = false

</script>
<div class='content'>
  <h1>Login</h1>
  <Input iType='text' iFor='username' iLabel='Username' iValue={unValue} />
  <Input iType='password' iFor='password' iLabel='Password' iValue={pValue} />
  <Button handleClick={() => signIn('google')} loading={loading}>Submit</Button>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  h1 {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 36px;
    text-transform: uppercase;
  }
</style>