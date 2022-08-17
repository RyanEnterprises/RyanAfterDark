
<script>
    import '../app.css';
    import fullColorLogo from '../img/FullColor.svg'
    import darkLogo from '../img/Black.svg'
    import lightLogo from '../img/White.svg'
    import christmasLogo from '../img/christmas.png'
    const logo = {
        standard: fullColorLogo,
        dark: darkLogo,
        light: lightLogo,
        christmas: christmasLogo
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
    <div class="flex justify-between p-6 dark:bg-black text-primary dark:text-tertiary">
        <img src={logoUrl} alt="logo" />
        <a href="#extras" class="hover:text-blue-500">Extras</a>
    </div>
</header>