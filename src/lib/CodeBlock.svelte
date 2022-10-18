<script>
	import './prism/prism.css'
	import { db } from "../assets/Data";
	let db_keys = Object.keys(db);
	$: index = "";
	let script = document.createElement("script");
	script.src = "./prism/prism.js";
	script.type = "text/javascript";
	script.setAttribute("defer", "true");
	document.querySelector("head").append(script);
</script>

<svelte:head>
	<link rel="stylesheet" href="./prism/prism.css" />
</svelte:head>
<select bind:value={index}>
	{#each db_keys as k}
		<option value="{k}">
			{k}
		</option>
	{/each}
</select>
<pre class="language-python"> 
	{#if index != undefined}
		<code>{db[`${index}`]}</code>
	{/if}
</pre>

<style>
	pre {
		position: fixed;
		left: 33rem;
		top: 40%;
	}
</style>
