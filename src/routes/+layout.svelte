<script>
  import "../app.css";
	let { children } = $props();
</script>

<main class="bg-layout p-2">
  {@render children()}
</main>