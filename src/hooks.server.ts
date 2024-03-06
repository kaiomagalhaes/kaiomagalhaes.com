import type { Handle, HandleServerError } from '@sveltejs/kit';
import POST_META from '$virtual/post-meta.json';
import { Toucan } from 'toucan-js';

const REDIRECTS = [
  {
    from: '/thinking-with-autotracking-what-makes-a-good-reactive-system',
    to: '/blog/what-makes-a-good-reactive-system/',
    permanent: true,
  },
  {
    from: '/thinking-with-autotracking-what-is-reactivity',
    to: '/blog/what-is-reactivity/',
    permanent: true,
  },
  {
    from: '/coming-soon-in-ember-octane/',
    to: '/blog/coming-soon-in-ember-octane-part-4-modifiers',
    permanent: true,
  },

  ...POST_META.map((meta) => ({
    from: `/${meta.slug}`,
    to: `/blog/${meta.slug}`,
    permanent: true,
  })),
];

export const handle: Handle = async ({ event, resolve }) => {
  if (event.platform?.context) {
    event.locals.sentry = new Toucan({
      dsn: 'https://13586e4409df7a11e838f9aabab4f5fd@o433408.ingest.sentry.io/4506755938648064',
      request: event.request,
      context: event.platform.context,
    });

    event.locals.sentry.setUser({ id: event.request.headers.get('cf-connecting-ip') });
  }

  const res = await resolve(event);

  if (res.status === 404) {
    const redirect = REDIRECTS.find((r) => r.from === event.url.pathname);

    if (redirect) {
      return Response.redirect(`${event.url.origin}${redirect.to}`, redirect.permanent ? 301 : 302);
    } else {
      event.locals.sentry?.captureException(
        new Error(`Page not found: ${event.request.url.toString()}`),
      );
    }
  }

  return res;
};

export const handleError: HandleServerError = async ({ event, error }) => {
  console.log('ERROR', error);
  event.locals.sentry?.captureException(error);
};