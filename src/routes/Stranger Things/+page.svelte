<script>
	export let data;
	import refresh_svg from '$lib/assets/refresh.svg';
	import clipboard_svg from '$lib/assets/clipboard.svg';
	import Clipboard from 'svelte-clipboard';
	import { toastStore } from '@skeletonlabs/skeleton';
	function triggerToast(toastConfig) {
		toastStore.trigger(toastConfig);
	}

	async function fetchNewQuote() {
		let api = 'https://strangerthings-quotes.vercel.app/api/quotes';
		const response = await fetch(api);

		const quote = await response.json();
		return { content: quote };
	}
</script>

<div id="main" />
<div id="quote_container">
	<Clipboard
		text={data.content[0].quote + ' - ' + data.content[0].author}
		let:copy
		on:copy={() => {
			triggerToast({
				message: 'Copied to clipboard 📋',
				preset: 'primary',
				autohide: true,
				timeout: 2500,
			});
		}}
		><button id="copy_btn" on:click={copy}>
			<img src={clipboard_svg} alt="copy svg" />
		</button></Clipboard
	>
	<div class="inline">
		<strong>{data.content[0].quote}</strong><br /><br />
		— {data.content[0].author} —
	</div>
</div>
<button
	id="refresh_btn"
	on:click={async () => {
		data = await fetchNewQuote();
	}}><img src={refresh_svg} alt="refresh" /></button>


<style>
	#main {
		position: relative;
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#main:before {
		content: '';
		background-image: url('$lib/assets/st_bg.jpg');
		background-size: cover;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}

	#quote_container {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-height: 40%;
		width: 60%;
		font-size: 2vw;
		text-align: center;
		color: black;
		font-weight: 700;
		background: rgba(255, 255, 255, 0.7);
		padding: 5%;
		border-radius: 20px;
		overflow-y: auto;
	}

	#refresh_btn {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin-top: 10%;
		height: 4vh;
		width: 4vh;
		background: rgba(255, 255, 255, 1);
		border: transparent;
	}

	#refresh_btn:hover {
		height: 6vh;
		width: 6vh;
	}

	#copy_btn {
		position: absolute;
		top: 9%;
		right: 0%;
		transform: translate(-50%, -50%);
		height: 3vh;
		width: 3vh;
		background: transparent;
		border: transparent;
	}

	img {
		height: 100%;
		width: 100%;
	}

	@media only screen and (orientation: portrait) and (max-width: 600px) {
		#main {
			position: relative;
			height: 100vh;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		#main:before {
			content: '';
			background-image: url('$lib/assets/st_bg_portrait.jpg');
			background-size: cover;
			position: absolute;
			top: 0px;
			right: 0px;
			bottom: 0px;
			left: 0px;
		}

		#quote_container {
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-height: 40%;
			width: 60%;
			font-size: 4vw;
			text-align: center;
			color: black;
			font-weight: 700;
		}

		#refresh_btn {
			position: absolute;
			top: 60%;
			left: 50%;
			transform: translate(-50%, -50%);
			margin-top: 10%;
			height: 6vh;
			width: 6vh;
			background: rgba(255, 255, 255, 1);
			border: transparent;
		}

		#copy_btn {
			position: absolute;
			top: 9%;
			right: 0%;
			transform: translate(-50%, -50%);
			height: 2vh;
			width: 2vh;
			background: transparent;
			border: transparent;
		}
	}
</style>
