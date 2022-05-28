<script>

const getCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    const catFact = data.fact;
    return catFact
}

let catPromise = getCatFact();


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

</main>