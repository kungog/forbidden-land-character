<script lang="ts">
	export let objectKey: string;
	import { page } from '$app/stores';
	const { profile_id, _id }: Character = $page.data.character;
</script>

<input type="hidden" name="profile_id" value={profile_id} />
<input type="hidden" name="id" value={_id} />
<input type="hidden" name="objectKey" value={objectKey} />
