<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string | undefined = undefined;
  export let width: number = 800;
  export let height: number = 450;
</script>

<figure class="my-8">
  <div class="relative overflow-hidden rounded-lg">
    <img
      {src}
      {alt}
      {width}
      {height}
      class="w-full object-cover"
      sizes="(max-width: 768px) 100vw, 800px"
    />
  </div>
  {#if caption}
    <figcaption class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
      {caption}
    </figcaption>
  {/if}
</figure> 