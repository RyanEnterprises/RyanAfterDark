<script>
    var year = new Date()
    import white from '../../img/white.png'
</script>


<footer class="bg-gray-900 dark:bg-black">
    <div class="flex justify-between content-center">
        <div class="flex justify-between flex-col">
            <img src={white} alt="Ryan Enterprises" id="logo">
            <hr />
            <p class="text-white p-4">Copyright &copy; {year.getFullYear()}, Ryan Enterprises. All Rights Reserved</p>
        </div>
        <div class="flex justify-between flex-col p-4 text-white underline">
            <a href="/RyanAfterDark/">Home</a><a href="/RyanAfterDark/blog">Blog</a><a href="https://ryanenterprises.github.io/">Ryan Enterprises</a>
        </div>
    </div>
</footer>

<style>
    #logo {
        width: 15rem;
        padding: 1rem;
    }
    a {
        color: white;
        text-decoration: underline;
    }
    a:hover {
        color: hsl(247, 79%, 32%)
    }
    hr {
        border: 1px solid white;
    }
    @media (prefers-color-scheme: dark) {
        a:hover {
            color: hsl(184, 66%, 28%);
        }
    }
</style>