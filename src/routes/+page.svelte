<script>
	import { onMount } from 'svelte';
	export let data;
	onMount(async () => {});

	import refresh_svg from "$lib/assets/refresh.svg"
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
</script>

<div id="main" />
<div id="quote_container">
	<strong>{data.content[0].quote}</strong><br /><br />
	— {data.content[0].author} —<br /><br />
	Series: {data.content[0].series}<br /><br />
</div>
<button
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
		height: 25%;
		width: 60%;
		font-size: 2vw;
		text-align: center;
		color: black;
		font-weight: 700;
	}

	button {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin-top: 10%;
		height: 4vw;
		width: 4vw;
		background: transparent;
		border: transparent;
	}

	img {
		height: 100%;
		width: 100%;
	}
</style>
