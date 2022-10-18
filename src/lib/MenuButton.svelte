<script>
	export let onToggle;
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			onToggle();
		}
	});
</script>

<button class="top-6 block fixed left-6" on:click={onToggle()}
	><div class="menu-button" />
	<div class="menu-button" />
	<div class="menu-button" />
</button>

<style>
	.menu-button {
		position: absolute;
		border-top: 2rem;
		width: 35px;
		height: 5px;
		background-color: #000;
		margin: 6px 0;
		z-index: 2;
		border-radius: 0.5rem;
	}
</style>
