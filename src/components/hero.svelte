<script>
    import '../app.css';
    import Clock from './clock.svelte';
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const gradient = document.getElementById("gradient");
    // if the date is december 25th, change the background color to either red or green, chosen randomly
    if (date.getMonth() == 11 && date.getDate() == 25) {
        let random = Math.floor(Math.random() * 2);
        if (random == 0) {
            gradient.style.background = "linear-gradient(to right, #ff0000, #00ff00)";
        }
        else {
            gradient.style.background = "linear-gradient(to right, #00ff00, #ff0000)";
        }
    }
    else {
        console.log("not december 25th");
    }
</script>


<div id="hero">
    <div class="bg-gradient-to-tr from-primary to-blue-500 dark:bg-gradient-to-r dark:from-tertiary dark:to-tertiary" id="gradient">
        <h1 class="text-center font-primary font-bold text-white text-8xl p-10">
            THIS IS
            <br>
            RyanAfterDark
        </h1>
        <Clock />
    </div>
</div>