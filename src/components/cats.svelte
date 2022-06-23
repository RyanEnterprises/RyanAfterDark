<script>

const getCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    const catFact = data.fact;
    return catFact
}

let catPromise = getCatFact();


const getCatGif = async () => {
    const respone = await fetch("https://cataas.com/cat/gif");
    const data = await respone.json();
    const catGif = data.gif;
    return catGif;
}
let catGifPromise = getCatGif();

</script>

<main>
    <h1 class="text-center font-primary text-8xl font-bold p-10">
        DO YOU LIKE CATS???
    </h1>
    <p class="text-center font-primary text-3xl font-bold">
        <strong>Here is a random cat fact:</strong> <br>
        {#await catPromise}
            <p class="text-center font-primary text-2xl">
                Loading...
            </p>
        {:then catFact} 
            <p class="text-center font-primary text-2xl">
                {catFact}
            </p>
        {/await}
    </p>
    <div class="m-auto">
        {#await catGifPromise}
            <p class="text-center font-primary text-2xl">
                Loading...
            </p>
        {:then catGif} 
            <img src="{catGif}" alt="a randomly generated cat GIF">
        {/await}
    </div>

</main>