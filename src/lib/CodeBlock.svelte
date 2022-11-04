<script>
	import { code } from "../assets/Data";
	export let index;
</script>

<svelte:head>
	<link href="./prism/prism.css" rel="stylesheet" />
	<script src="./prism/prism.js" defer></script>
</svelte:head>
<pre> 
	{#if index != undefined}
		<code>{code[`${index}`]}</code>
	{/if}
</pre>

<style>
	pre {
		position: fixed;
		right: 20%;
		top: 30%;
	}
</style>
