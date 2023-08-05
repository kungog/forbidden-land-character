<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import Textarea from '../Textarea.svelte';

	const { relations }: Character = $page.data.character;
	const LABELS = GENERAL_LABELS[$language];
	const relation = relations[$modal?.type] ?? '';
</script>

<Textarea iLabel={LABELS.relation} iValue={relation} iFor="relation" />
