<script>
    import '../app.css';
    import DeMotivatorButton from './deMotivatorButton.svelte';
    import { insults } from 'demotivator'
    let result = insults[Math.floor(Math.random() * insults.length)]
    const randomize = () => {
        result = insults[Math.floor(Math.random() * insults.length)]
    }
</script>
<div>
    <div>
        <button class="text-center font-primary font-bold text-4xl p-10 bg-tertiary rounded-full text-white m-auto flex justify-center content-center" on:click={randomize}>
            Get Insult
        </button>
    </div>
    <p class="text-center font-primary text-4xl p-10">
        {result}
    </p>
</div>