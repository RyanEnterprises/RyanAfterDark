<script>
    import { insults } from 'demotivator';
    import FourOhFour from '../../components/fourOhFour.svelte';
    let insult = insults[Math.floor(Math.random() * insults.length)];
    import '../../app.css'
    import { robotStatus } from 'uadetect';
    import Thoughts from '../../components/thoughts.svelte';
    import Cute from '../../components/cute.svelte';

    if (robotStatus === 'ROBOT_controlled') {
        alert(`According to our robot status, ${robotStatus}, you are a robot`);
        alert("You are not allowed to visit this site");
        alert("🤖")
        window.location.href = 'https://www.google.com/';
    }
    else {
        console.log("Not a robot");
    }
    // after 15 seconds, redirect the user
    setTimeout(() => {
        window.location.href = 'https://ryanenterprises.github.io/RyanAfterDark';
    }, 15000);
</script>

<main>
    <div>
        <FourOhFour />
        <h3 class="text-center font-semibold text-3xl">
            The page you are looking for cannot be found.
        </h3>
        <p class="text-center sticky bottom-8 p-4 font-primary">
            <Thoughts />
        </p>
        <p class="text-center font-primary">
            Redirecting...
        </p>
        <Cute />
    </div>
</main>