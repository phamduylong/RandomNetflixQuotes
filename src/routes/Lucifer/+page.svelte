<script>
	export let data;
	import refresh_svg from "$lib/assets/refresh.svg"
	async function fetchNewQuote() {
		let api = 'https://lucifer-quotes.vercel.app/api/quotes';
		const response = await fetch(api);

		const quote = await response.json();
		return { content: quote };
	}
</script>

<div id="main" />
<div id="quote_container">
	<strong>{data.content[0].quote}</strong><br /><br />
	— {data.content[0].author} —<br />
</div>
<button
	on:click={async () => {
		data = await fetchNewQuote();
	}}><img src={refresh_svg} alt="refresh" /></button
>

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
		background-image: url('$lib/assets/lucifer_bg.jpg');
		background-size: cover;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		opacity: 0.7;
	}

	@media screen and (orientation: portrait) {
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
			background-image: url('$lib/assets/lucifer_bg_portrait.jpg');
			background-size: cover;
			position: absolute;
			top: 0px;
			right: 0px;
			bottom: 0px;
			left: 0px;
			opacity: 0.7;
		}
	}

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
		height: 4vh;
		width: 4vh;
		background: transparent;
		border: transparent;
	}

	img {
		height: 100%;
		width: 100%;
	}
</style>
