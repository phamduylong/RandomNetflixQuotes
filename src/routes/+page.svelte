<script>
	import { toastStore } from '@skeletonlabs/skeleton';
	export let data;
	import Clipboard from 'svelte-clipboard';

	import refresh_svg from '$lib/assets/refresh.svg';
	import clipboard_svg from '$lib/assets/clipboard.svg';
	async function fetchNewRandomQuote() {
		const urls = [
			'https://bcs-quotes.vercel.app/api/quotes',
			'https://lucifer-quotes.vercel.app/api/quotes',
			'https://strangerthings-quotes.vercel.app/api/quotes'
		];
		const rand_idx = Math.floor(Math.random() * urls.length);
		const rand_res = urls[rand_idx];
		const response = await fetch(rand_res);

		const quote = await response.json();
		switch (rand_idx) {
			case 0:
				quote[0].series = 'Better Call Saul (2015)';
				break;
			case 1:
				quote[0].series = 'Lucifer (2016)';
				break;
			case 2:
				quote[0].series = 'Stranger Things (2016)';
				break;
			default:
				quote[0].series = 'Unknown';
				break;
		}
		return { content: quote };
	}

	function triggerToast(toastConfig) {
		toastStore.trigger(toastConfig);
	}
</script>

<div id="quote_container">
	<Clipboard
		text={data.content[0].quote + ' - ' + data.content[0].author}
		let:copy
		on:copy={() => {
			triggerToast({
				message: 'Copied to clipboard 📋',
				preset: 'primary',
				autohide: true,
				timeout: 2000,
			});
		}}
		><button id="copy_btn" on:click={copy}>
			<img src={clipboard_svg} alt="copy svg" />
		</button></Clipboard
	>
	<div class="inline">
		<strong>{data.content[0].quote}</strong><br /><br />
		— {data.content[0].author} —<br /><br />
		Series: {data.content[0].series}
	</div>
</div>
<button
	id="refresh_btn"
	on:click={async () => {
		data = await fetchNewRandomQuote();
	}}><img src={refresh_svg} alt="refresh" /></button
>

<style>
	#quote_container {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-height: 50%;
		width: 60%;
		font-size: 2vw;
		text-align: center;
		color: black;
		font-weight: 700;
		background: rgba(0, 0, 0, 0.15);
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
