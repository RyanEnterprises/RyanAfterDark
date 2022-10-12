<script>
    import logo from '/FullColorFavi.svg'
    import arrow from 'bootstrap-icons/icons/arrow-right.svg'
    import 'bootstrap/dist/css/bootstrap.css'
</script>
<div class="grid grid-cols-2 portrait:flex portrait:content-center portrait:justify-center p-10">
    <div class="">
        <slot>
        
        </slot>
        <div class="m-auto">
            <a href="/RyanAfterDark/blog" class="btn btn-primary flex content-center justify-between"> Learn More <img src={arrow} alt=""> </a>
        </div>
    </div> 
    <div class="p-10 portrait:hidden">
        <img src={logo} alt="" class="hover:animate-spin motion-safe:hover:animate-none">
    </div>
</div>


<style>
img {
    width: 35%;
}
</style>