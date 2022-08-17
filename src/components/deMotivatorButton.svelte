
<script>
    import '../app.css';
    import { insults } from 'demotivator';
    let result = insults[Math.floor(Math.random() * insults.length)];
    const randomize = () => {
        result = insults[Math.floor(Math.random() * insults.length)];
    };
</script>

<main>
    <button class="text-center font-primary font-bold text-4xl p-10 bg-tertiary rounded-full text-white m-auto flex justify-center content-center" on:click={randomize}>
        Get Insult
    </button>
</main>