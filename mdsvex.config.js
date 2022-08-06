import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const layout = `./src/lib/components/BlogLayout.svelte`;

export default {
  extensions: ['.svelte.md', '.md', '.svx'],
  layout,
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [
    [
      remarkGithub,
      {
        // Use your own repository
        repository: 'https://github.com/kaiomagalhaes/kaiomagalhaes.com',
      },
    ],
    remarkAbbr,
  ],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap',
      },
    ],
  ],
};
