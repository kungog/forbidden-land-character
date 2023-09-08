<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import Textarea from '../Textarea.svelte';

	const { relations }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const relation = relations[$modal?.type] ?? '';
</script>

<Textarea iLabel={LABEL.relation} iValue={relation} iFor="relation" />
