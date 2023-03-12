<script>
	import { page } from '$app/stores';
	import { Toast } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
</script>

<div id="navbar">
	<a href="/Better Call Saul" target="_self">Better Call Saul</a> |
	<a href="/Lucifer" target="_self">Lucifer</a> |
	<a href="/Stranger Things" target="_self">Stranger Things</a> |
	<a href="/Breaking Bad" target="_self">Breaking Bad</a> |
	<a href="/" target="_self">Random</a>
</div>

<title>{$page.route.id ? $page.route.id.substr(1) + ' Quotes' : 'Quotes'}</title>

<Toast />

<slot />

<style>
	#navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		position: absolute;
		top: 5%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-decoration: none;
		font-size: 1.5vw;
		font-weight: bolder;
		text-shadow: 2px 2px #eaeaea;
		z-index: 1;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: 100%;
	}

	a {
		text-decoration: none;
		color: black;
		margin: 20px;
	}

	@media screen and (orientation: portrait) {
		#navbar {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			position: absolute;
			top: 5%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-decoration: none;
			font-size: 3vw;
			font-weight: bolder;
			text-shadow: .5px .5px #eaeaea;
			z-index: 1;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			max-width: 100%;
		}

		a {
			text-decoration: none;
			color: black;
			margin: 2.5px;
		}
	}
</style>
