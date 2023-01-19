<script>
    export let title= "Random Generator"
</script>

<header>{title}</header>

<slot/>

<style>
    header {
        font-size: 3vw;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 1%;
        margin-bottom: 5%;
    }
</style>