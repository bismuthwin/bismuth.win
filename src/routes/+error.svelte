<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="error">
	<div class="status">{page.status}</div>
	<div class="message">{page.error?.message}</div>
</div>

<style>
	.error {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-weight: 900;
		gap: 0;
		line-height: 1;

		.status {
			font-size: 8rem;
		}

		.message {
			font-size: 6rem;
		}
	}
</style>
