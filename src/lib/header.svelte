<script>
    import '../app.css';
    const logo = {
        standard: '../../img/standard.png',
        dark: '../../img/black.png',
        light: '../../img/white.png',
        christmas: '../../img/christmas.png'
    };
    // IF the user prefers dark mode, then the logo should be light
    // However, if the date is in the month of december, then the logo should be christmas
    // All other cases, the logo should be standard

    let logoUrl = logo.standard;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        logoUrl = logo.light;
    } else if (new Date().getMonth() === 11) {
        logoUrl = logo.christmas;
    }
</script>

<header>
    <div class="flex justify-between p-6 dark:bg-black text-primary dark:text-white">
        <img src={logoUrl} alt="logo" />
        <a href="#extras" class="hover:text-blue-500">Extras</a>
    </div>
</header>