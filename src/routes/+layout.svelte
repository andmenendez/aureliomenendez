<script>
  import { myGlobalState } from "$lib/state.svelte";
  import { fade } from "svelte/transition";
  import "../app.css";
  let { children } = $props();
</script>

<div class="bg-black bg-noise bg-repeat">
  <div class="bg-black/90">
    <main class="bg-gradient-to-b from-layout/80 to-layout/90 min-h-screen">
      <div class="flex flex-col pl-40 pt-20 h-[30vh] gap-2">
        <div class="flex flex-col h-full gap-2">
          <h1 class="text-8xl">Photographia</h1>
          <h2 class="text-xl">Aurelio Menendez</h2>
        </div>
      </div>
      {@render children()}
      {#if myGlobalState.image}
        <button 
        in:fade={{ duration: 250, delay: 50 }}
        out:fade={{ duration: 250, delay: 50 }}
        onclick={()=>myGlobalState.image = null} class="fixed flex justify-center items-center top-0 right-0 w-screen h-screen bg-black/50 backdrop-blur-sm">
          <img class="w-full max-w-[80%] rounded-lg border-2 border-white/30" src={myGlobalState.image?.src} alt={myGlobalState.image?.name} />
        </button>
      {/if}
    </main>
  </div>
</div>
