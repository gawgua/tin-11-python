<script>
	import { code } from "../assets/Data";
	let keys = Object.keys(code);
	$: index = "";
</script>

<svelte:head>
	<link href="./prism/prism.css" rel="stylesheet" />
	<script src="./prism/prism.js" defer></script>
</svelte:head>
<select bind:value={index}>
	{#each keys as k}
		<option value={k}>
			{k}
		</option>
	{/each}
</select>
<pre> 
	{#if index != undefined}
		<code>{code[`${index}`]}</code>
	{/if}
</pre>

<style>
	pre {
		display: flex;
		align-content: center;
		justify-content: center;
	}
</style>
