<script>
	import { code, name } from "../assets/Data";
	export let index;
</script>

<svelte:head>
	<link href="./prism/prism.css" rel="stylesheet" />
	<script src="./prism/prism.js" defer></script>
</svelte:head>
<div class="box">
	<h1>
		{name[`${index}`]}
	</h1>
	<code>{code[`${index}`]}</code>
</div>

<style>
	div {
		position: absolute;
		left: 30%;
		top: 20%;
	}
	h1{
		position: relative;
		margin-bottom: 2rem;
		font-size: xx-large;
	}

	.box{
		padding: 3rem;
		background-color: black;
		border-color: red;
		border-width: .1rem;
		border-radius: 1rem;
	}
</style>
