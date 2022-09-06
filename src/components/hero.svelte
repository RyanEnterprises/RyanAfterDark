<script>
    import logo from '/FullColorFavi.svg'
    import '../../node_modules/bootstrap/dist/css/bootstrap.css'
    import arrow from '../../node_modules/bootstrap-icons/icons/arrow-right.svg'
</script>
<div class="grid">
    <div class="tile">
        <h1 class="p-10 font-primary font-extrabold gradientText sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Pushing <br>
            Whats <br>
            Possible.
        </h1>
        <div class="m-auto">
            <a href="/blog" class="btn btn-primary flex content-center justify-between"> Learn More <img src={arrow} alt=""> </a>
            <alert class="alert alert-warning"><strong>WARN: </strong>It might blow your mind</alert>
        </div>
    </div>
    <div class="tile p-10">
        <img src={logo} alt="" class="hover:animate-spin">
    </div>
</div>


<style>
.grid {
    display:grid;
    grid-template-columns: 1fr 1fr;
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