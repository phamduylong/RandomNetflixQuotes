<script>
    let choices = [
        {id: 0, value: "Baby Names", href: "/babyname"},
        {id: 1, value: "Cocktail Recipes", href: "/cocktail"},
        {id: 2, value: "Dad Jokes", href: "/dadjokes"},
        {id: 3, value: "Facts", href: "/fact"},
        {id: 4, value: "Riddles", href: "/riddle"},
        {id: 5, value: "Lorem Ipsum", href: "/loremipsum"},
        {id: 6, value: "Password", href: "/password"},
    ];

    let selection=choices[3];
</script>

<div id="selector">
    <h1>What do you need to generate?</h1>
    <select bind:value={selection}>
        {#each choices as choice}
            <option value={choice}>
                {choice.value}
            </option>
        {/each}
    </select><br/>

    <a href={selection.href}><button>Select</button></a>


</div>

<style>

    #selector {
        position: absolute;
        top: 25%;
        left:50%;
        transform: translate(-50%, -50%);
        border: 2px solid cadetblue;
        height: 25%;
        width: 60%;
    }

    h1 {
        position: absolute;
        top: 15%;
        left:50%;
        transform: translate(-50%, -50%);
    }

    select {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 5%;
        margin-bottom: 5%;
        height: 15%;
        width: 50%;
        max-height: 20%;
        max-width: 50%;
        text-align: center;
    }

    button {
        position: absolute;
        top:60%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 20%;
        width: 20%;
        margin-top: 5%;
        margin-bottom: 5%;
    }

    option {
        background-color: coral;
    }

</style>
