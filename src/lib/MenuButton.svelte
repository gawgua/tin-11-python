<script>
	export let onToggle;
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			onToggle();
		}
	});
</script>

<button on:click={onToggle()}>☰</button>

<style>
	button {
		padding: 5px 3px 5px 3px;
		font-size: 1.5rem;
		transform: scaleX(1.4);
		position: fixed;
		display: block;
		top: 1.5rem;
		left: 1.8rem;
	}

	button:hover {
		backdrop-filter: brightness(80%);
	}
</style>
