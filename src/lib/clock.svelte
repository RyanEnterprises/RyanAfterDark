<script>
    import '../app.css';
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
</script>

<div>
    <p class="text-center font-primary font-bold text-white text-5xl p-10">
        The date is {date} and the time is {time}
    </p>
</div>