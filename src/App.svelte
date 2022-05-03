<script>
  import Counter from './lib/Counter.svelte'
  import './app.css'
  import Header from './lib/header.svelte'
  import Hero from './lib/hero.svelte'
  import Demotivation from './lib/demotivation.svelte'
  import Demotivator from './lib/demotivator.svelte'
  import UAtester from './lib/UAtester.svelte'
</script>

<main>
  <Header />
  <Hero />
  <div class="dark:bg-black dark:text-white bg-white text-black">
    <Demotivator />
    <Demotivation />
  </div>
  <!-- <UAtester /> -->
  
</main>