<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import ImagePreview from "$lib/components/image-preview.svelte";
  import pics from "$lib/image-bank";

  var count = 0;

  const countUp = (/** @type {number} */ n) => {
    setTimeout(() => {
      count = n + 1;
      if (n + 1 < 1000) countUp(n + 1);
    }, 50);
  };

  onMount(() => {
    countUp(0);
  });


  const colCount = 5;
  const full_pics = [...pics.slice(0, 10), ...pics.slice(5), ...pics.slice(4)];
</script>

<div class="flex flex-row w-full gap-4 p-40">
  {#each [50, 200, 0, 100, 150] as h, i}
    {#if count > 10}
      <div
        class="flex flex-col gap-4 w-full"
        in:fade={{ duration: 500, delay: 200 }}
        out:fade={{ duration: 500, delay: 200 }}
      >
        <div
          style={`height: ${h * 2}px`}
          class="rounded-md w-full image-cover"
        ></div>
        {#each full_pics.slice((i * full_pics.length) / colCount, ((i + 1) * full_pics.length) / colCount) as pic, j}
          <ImagePreview {...pic} />
        {/each}
      </div>
    {/if}
  {/each}
</div>
