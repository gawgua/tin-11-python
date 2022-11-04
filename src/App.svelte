<script>
	import { index } from "./lib/stores";
	import Sidebar from "./lib/Sidebar.svelte";
	import CodeBlock from "./lib/CodeBlock.svelte";

	let idx;
	index.subscribe((value) => (idx = value));
</script>

<main>
	<div class="sidebar">
		<Sidebar />
	</div>
	<CodeBlock index={idx} />
</main>

<style>
</style>
