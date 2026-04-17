import type { CollectionEntry } from 'astro:content';

export function sortProjectsByOrder(
  projects: CollectionEntry<'projects'>[],
): CollectionEntry<'projects'>[] {
  return [...projects].sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }
    return a.id.localeCompare(b.id);
  });
}

/**
 * Next project in `order` sequence. After the last item, wraps to the first
 * so the block always shows (unless there is only one project).
 */
export function getNextProject(
  currentId: string,
  sorted: CollectionEntry<'projects'>[],
): CollectionEntry<'projects'> | null {
  if (sorted.length <= 1) {
    return null;
  }
  const index = sorted.findIndex((p) => p.id === currentId);
  if (index === -1) {
    return null;
  }
  return sorted[(index + 1) % sorted.length]!;
}
