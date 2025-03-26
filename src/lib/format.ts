export function formatTitle(title: string | undefined): string {
  if (!title) return '';
  return title.replace(/\s+/g, ' ').trim();
}

export const formatPublishDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
