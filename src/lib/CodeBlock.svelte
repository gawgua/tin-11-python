<script>
	import { code, name } from "../assets/Data";
	export let index;
</script>

<svelte:head>
	<link href="./prism/prism.css" rel="stylesheet" />
	<script src="./prism/prism.js" defer></script>
</svelte:head>
<div>
	<h1>
		{name[`${index}`]}
	</h1>
	<pre> 
		<code>{code[`${index}`]}</code>
	</pre>
</div>

<style>
	div {
		position: fixed;
		right: 20%;
		top: 30%;
	}
	h1{
		position: relative;
		transform: translate(-55%);
		font-size: xx-large;
	}
</style>
