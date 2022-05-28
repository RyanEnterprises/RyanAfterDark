<script>
    import Counter from './components/Counter.svelte'
    import './app.css'
    import Header from './components/header.svelte'
    import Hero from './components/hero.svelte'
    import Demotivation from './components/demotivation.svelte'
    import Demotivator from './components/demotivator.svelte'
    import UAtester from './components/UAtester.svelte'
    import { robotStatus } from 'uadetect';
    import { DEVICE_finiteType } from 'uadetect';
    import Cats from './components/cats.svelte'
import Cute from './components/cute.svelte'

    if (robotStatus === 'ROBOT_controlled') {
        alert(`According to our robot status, ${robotStatus}, you are a robot`);
        alert("You are not allowed to visit this site");
        alert("🤖")
        window.location.href = 'https://www.google.com/';
    }
    else {
        console.log("Not a robot");
    }

    if (DEVICE_finiteType == 'BlackBerry') {
        alert(`According to our device type, ${DEVICE_finiteType}, you are using a BlackBerry`);
        alert("You are not allowed to visit this site");
        window.location.href = 'https://www.google.com/';
    }
    else if (DEVICE_finiteType == 'Windows Phone') {
        alert(`According to our device type, ${DEVICE_finiteType}, you are using a Windows Phone`);
        alert("You are not allowed to visit this site");
        window.location.href = 'https://www.google.com/';
    }
    else if (DEVICE_finiteType == 'webOS') {
        console.log(`Hello, Smaert TV users! You are using a ${DEVICE_finiteType}`);
    }
    else {
        console.log("Not a BlackBerry or Windows Phone");
    }
</script>

<main>
  <Header />
  <Hero />
  <div class="dark:bg-black dark:text-white bg-white text-black">
    <Demotivator />
    <Demotivation />
  </div>
  <UAtester />
  <Cats />
  <Cute />
</main>