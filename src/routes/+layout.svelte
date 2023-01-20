<script>
    export const trailingSlash = 'always';    
</script>

<div id="navbar">
    <a href="/bettercallsaul" target="_self">Better Call Saul</a> |
    <a href="/lucifer" target="_self">Lucifer</a> |
    <a href="/strangerthings" target="_self">Stranger Things</a> |
    <a href="/" target="_self">Random</a>
</div>

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
        z-index: 1;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>