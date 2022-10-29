<script>
	import MenuButton from "./MenuButton.svelte";
	import { horizontalSlide } from "./transition";
	export let showChildren = false;
	export let showSidebar = false;
	export let switchState = () => {
		showSidebar = !showSidebar;
	};
</script>

<MenuButton onToggle={switchState} />
{#if showSidebar}
	<nav transition:horizontalSlide={{ duration: 500 }}>
		<ul>
			<li>
				<button class="top-10 bg-yellow border-spacing-1 hover:bg-blue " on:click={() => (showChildren = !showChildren)}
					>About</button
				>
				<a style:visibility={showChildren ? "visible" : "hidden"} href="https://gawgua.github.io">wah</a>
			</li>
		</ul>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		padding: 5rem 3rem 0.6rem;
		border-left: 3px solid #aaa;
		background: rgb(70, 68, 68);
		overflow-y: auto;
		width: 18rem;
		z-index: 0;
	}

	a {
		display: block;
	}
</style>
