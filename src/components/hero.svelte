<script>
    import logo from '/FullColorFavi.svg'
</script>
<div class="grid">
    <div class="tile">
        <h1 class="p-10 font-primary font-extrabold gradientText sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Pushing <br>
            Whats <br>
            Possible.
        </h1>
    </div>
    <div class="tile">
        <img src={logo} alt="">
    </div>
</div>


<style>
.grid {
    display:grid;
    grid-template-columns:1fr 1fr
}
.tile {
    padding: 50px;
    margin: 50px;
    border-radius:30px;
    text-align:left;
}
img {
    width: 35%;
}
</style>