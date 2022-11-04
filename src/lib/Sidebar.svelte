<script>
	import { index } from "./stores";
	import { name } from "../assets/Data";
	import MenuButton from "./MenuButton.svelte";
	import { horizontalSlide } from "./transition";
	let showChildren = false;
	let showSidebar = false;
	let switchState = () => {
		showSidebar = !showSidebar;
	};

	function update(event){
		index.update(v => event.target.id)
	}
</script>

<MenuButton onToggle={switchState} />
{#if showSidebar}
	<nav transition:horizontalSlide={{ duration: 500 }}>
		<ul>
			{#each Object.keys(name) as id}
				<li>
					<button on:click={update} id={id} >
						{name[id]}
					</button>
				</li>
			{/each}
			<li>
				<button on:click={() => (showChildren = !showChildren)}>About</button>
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
		z-index: 5;
	}

	a {
		display: block;
	}

	a:hover {
		filter: brightness(150%);
	}

	ul li {
		padding-left: 1rem;
		margin-left: 2rem;
		white-space: nowrap;
	}

	ul li:hover {
		backdrop-filter: brightness(80%);
	}

	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-thumb {
		background: rgb(133, 133, 133);
		border-radius: 15px;
	} 
</style>
