<script>
	import { index } from "./lib/stores";
	import Sidebar from "./lib/Sidebar.svelte";
	import CodeBlock from "./lib/CodeBlock.svelte";

</script>

<main>
	<div class="sidebar">
		<Sidebar />
	</div>
	<CodeBlock index={$index} />
</main>

<style>
</style>
