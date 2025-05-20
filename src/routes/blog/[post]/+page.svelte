<script lang="ts">
  import type { PageData } from './$types';
  import { formatTitle, formatPublishDate } from '$lib/format';
  import BlogLayout from '$lib/components/BlogLayout.svelte';
  export let data: PageData;
  let title = formatTitle(data.metadata.title);
  let published = formatPublishDate(data.metadata.published);
  let canonical = `https://www.kaiomagalhaes.com/blog/${data.metadata.slug}`;
</script>

<BlogLayout title={data.metadata.title} published={data.metadata.published} canonical={canonical}>
  <span class="text-secondary font-cursive relative -top-8 md:inline hidden">
    {published}
  </span>

  <h1 class="text-center">{title}</h1>

  <span class="text-secondary font-cursive relative block text-center text-sm md:hidden -mb-2 -mt-1">
    {published}
  </span>

  <hr />

  <svelte:component this={data.component} {published} />

  <hr />

  <div class="text-center text-link pt-8 pb-12">
    <a href="/"> read some more </a>
  </div>
</BlogLayout>
