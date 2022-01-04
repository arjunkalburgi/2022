<script>
	export let gridspace = 50;
	export let height;
	let w;
	$: dotsHorizontal = Math.floor(w / gridspace);
	$: dotsVertical = Math.floor(height / gridspace);

	var scrolling, scrollingTimeout;
	function scroll(_) {
		scrolling = true;
		window.clearTimeout(scrollingTimeout);
		scrollingTimeout = setTimeout(function () {
			scrolling = false;
		}, 66);
	}
</script>

<svelte:window bind:innerWidth={w} on:scroll={scroll} />

<div class="top">
	{#each Array(dotsVertical || 200) as _}
		<span />
	{/each}
</div>
<div class="left">
	{#each Array(dotsVertical || 200) as _}
		<span />
	{/each}
</div>
<div class="grid" class:scrolling style="height: {height}px; padding-left: {(w % gridspace) / 2}px">
	{#each Array(dotsHorizontal * dotsVertical || 200) as _}
		<span />
	{/each}
</div>

<style>
	span {
		position: relative;

		-webkit-transition: border 0.5s ease-in-out;
		-moz-transition: border 0.5s ease-in-out;
		-o-transition: border 0.5s ease-in-out;
		transition: border 0.5s ease-in-out;
	}

	@media (prefers-reduced-motion) {
		span {
			transition: none;
		}
	}

	/* dots */
	.grid {
		position: absolute;
		z-index: -1;
		width: 100%;
		display: grid;
		grid-auto-rows: 50px;
		grid-template-columns: repeat(auto-fit, 50px);
	}
	.grid::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 3px;
		width: 3px;
		background-color: #d3d3d3;
	}
	.grid span::after {
		content: '';
		position: absolute;
		bottom: -1.5px;
		right: -1.7px;
		height: 3px;
		width: 3px;
		background-color: #d3d3d3;
	}

	.top {
		display: grid;
		grid-template-columns: repeat(auto-fill, 50px);
		position: absolute;
		width: 100%;
	}
	.top span::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		height: 3px;
		width: 3px;
		background-color: #d3d3d3;
	}

	.left {
		display: grid;
		grid-template-rows: repeat(auto-fill, 50px);
		position: absolute;
		height: 100%;
	}
	.left span::after {
		content: '';
		position: absolute;
		bottom: -1.5px;
		left: 0;
		height: 3px;
		width: 3px;
		background-color: #d3d3d3;
	}

	/* scroll effect */
	.grid span {
		border: 0.5px solid #fff;
	}
	.grid.scrolling span {
		border: 0.5px solid #d3d3d3;
	}
</style>
