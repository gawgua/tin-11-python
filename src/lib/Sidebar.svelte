<script>
	import { horizontalSlide } from "./transition";
	export let showChildren = false;
	export let showSidebar = false;
</script>

<button class="bg-green rounded-lg top-2 block absolute left-6" on:click={() => (showSidebar = !showSidebar)}>show sidebar</button>
{#if showSidebar}
	<nav transition:horizontalSlide={{ duration: 500 }}>
		<ul>
			<li>
				<button class="top-10 bg-yellow border-spacing-1 hover:bg-blue" on:click={() => (showChildren = !showChildren)}>About</button>
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
		padding: 2rem 1rem 0.6rem;
		border-left: 3px solid #aaa;
		background: #fff;
		overflow-y: auto;
		width: 15rem;
		z-index: 1;
	}

	button {
		z-index: 2;
	}

	a {
		display: block;
	}
</style>
