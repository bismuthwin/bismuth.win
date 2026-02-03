<div class="logoOverlay"></div>

<style>
	.logoOverlay {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100vw;
		height: 100vh;
		background: url('/src/lib/assets/logo.svg') repeat center center;
		background-size: 25%;
		z-index: -1;
		opacity: 0.05;
		pointer-events: none;
		filter: blur(4px) invert(1);
	}
</style>
