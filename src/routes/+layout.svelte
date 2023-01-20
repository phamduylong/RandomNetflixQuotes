<script>
    import { page } from "$app/stores";
</script>

<div id="navbar">
    <a href="/Better Call Saul" target="_self">Better Call Saul</a> |
    <a href="/Lucifer" target="_self">Lucifer</a> |
    <a href="/Stranger Things" target="_self">Stranger Things</a> |
    <a href="/" target="_self">Random</a>
</div>

    <title>{$page.route.id.substr(1) + " Quotes"}</title>


<slot>
</slot>

<style>
    #navbar {
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-decoration: none;
        font-size: 1.5vw;
        font-weight: bolder;
        text-shadow: 2px 2px #ffffff;
        z-index: 1;
    }

    a {
        text-decoration: none;
        color: black;
    }

    @media screen and (orientation: portrait) {

	}
</style>