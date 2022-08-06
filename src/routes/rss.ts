import type { RequestHandler } from '@sveltejs/kit';
import POST_META from '$virtual/post-meta-with-html.json';

const escapeString = (str: string) => {
  return str
    .replaceAll('(nbsp)', ' ')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('&', '&amp;');
};

export const get: RequestHandler = () => {
  const body = feed(POST_META);

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  };
  return {
    headers,
    body,
  };
};

const feed = (postMeta: typeof POST_META) => {
  const posts = postMeta.map((meta) => ({
    ...meta,
    published: new Date(meta.published),
    updated: new Date(meta.updated),
  }));

  return `<?xml version="1.0" encoding="UTF-8" ?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>kaiomagalhaes</title>
  <subtitle>a blog about (mostly) computery things</subtitle>
  <link rel="alternate" type="text/html" href="https://www.kaiomagalhaes.com/"/>
  <link rel="self" type="application/atom+xml" href="https://www.kaiomagalhaes.com/rss"/>
  <id>https://www.kaiomagalhaes.com/rss</id>
  <updated>${posts[0].published.toISOString()}</updated>
  <rights>Copyright © ${new Date().getFullYear()}, Chris Hewell Garrett</rights>
  ${posts
    .map(
      (post) => `
    <entry>
      <title>${escapeString(post.title)}</title>
      <id>https://www.kaiomagalhaes.com/blog/${post.slug}</id>
      <published>${post.published.toISOString()}</published>
      <updated>${post.updated.toISOString()}</updated>
      <author>
        <name>kaiomagalhaes</name>
        <uri>https://www.kaiomagalhaes.com</uri>
      </author>${post.tagline ? `<summary>${post.tagline}</summary>` : ''}
      <content type="html" xml:base="https://www.kaiomagalhaes.com" xml:lang="en">
      <![CDATA[ ${post.html} ]]>
      </content>
    </entry>
  `,
    )
    .join('')}
</feed>`;
};
