<script>
  import { formatTitle } from '$lib/format';
  import { page } from '$app/stores';

  /** @type {string} */
  export let title;
  /** @type {string} */
  export let tagline;
  /** @type {string?} */
  export let headerImage;
  /** @type {string} */
  export let published;

  $: formattedTitle = title ? formatTitle(title) : '';
  $: blogTitle = typeof tagline === 'string' ? 'blog | ' : '';
</script>

<svelte:head>
  <title>{blogTitle}{formattedTitle}</title>

  <meta property="og:url" content="https://www.kaiomagalhaes.com{$page.url.pathname}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title.replaceAll('(nbsp)', ' ')} />
  <meta
    property="og:image"
    content={headerImage
      ? `https://www.kaiomagalhaes.com${headerImage}`
      : 'https://www.kaiomagalhaes.com/assets/og-image.png'}
  />
  <meta property="og:description" content={tagline || 'A blog about (mostly) computery things'} />
  <meta name="publish_date" property="og:publish_date" content={published} />

  <meta
    property="twitter:image"
    content={headerImage
      ? `https://www.kaiomagalhaes.com${headerImage}`
      : 'https://www.kaiomagalhaes.com/assets/og-image.png'}
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@kaiomagalhaes" />
  <meta name="twitter:creator" content="@kaiomagalhaes" />
</svelte:head>

<div class="blog-content">
  <slot />
</div>
