<script>
  import Counter from './components/Counter.svelte'
  import './app.css'
  import Header from './components/header.svelte'
  import Hero from './components/hero.svelte'
  import Demotivation from './components/demotivation.svelte'
  import Demotivator from './components/demotivator.svelte'
  import UAtester from './components/UAtester.svelte'
</script>

<main>
  <Header />
  <Hero />
  <div class="dark:bg-black dark:text-white bg-white text-black">
    <Demotivator />
    <Demotivation />
  </div>
  <UAtester />
  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#201191" fill-opacity="1" d="M0,256L40,245.3C80,235,160,213,240,218.7C320,224,400,256,480,250.7C560,245,640,203,720,176C800,149,880,139,960,165.3C1040,192,1120,256,1200,240C1280,224,1360,128,1400,80L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
  <div class="bg-primary text-white p-4">
    
  </div> -->
  
</main>