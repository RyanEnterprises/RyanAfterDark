<script>
    import '../app.css';
    let date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    function tick() {
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        setTimeout(tick, 1000);
    }
</script>

<div>
    <p class="text-center font-primary font-bold text-white text-5xl p-10" on:click={tick} >
        The date is {date} and the time is {time}
    </p>
</div>