<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';

	const { profile_id, _id }: Character = $page.data.character;
	const objectKey = `${$modal.key}.${$modal.index}`;
</script>

<input type="hidden" name="profile_id" value={profile_id} />
<input type="hidden" name="id" value={_id} />
<input type="hidden" name="objectKey" value={objectKey} />
