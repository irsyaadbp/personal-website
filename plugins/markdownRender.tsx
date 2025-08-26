type Node = {
  type: string;
  tagName?: string;
  properties?: Record<string, any>;
  children?: Node[];
};

type Root = {
  type: "root";
  children: Node[];
};

function mergeClassName(existing: unknown, add: string[] = []): string[] {
  if (Array.isArray(existing)) return [...existing, ...add];
  if (typeof existing === "string")
    return [...existing.split(/\s+/).filter(Boolean), ...add];
  return [...add];
}

export function markdownRender() {
  return (tree: Root) => {
    console.log({ tree });
    const newChildren: Node[] = [];
    let section: Node | null = null;

    const headingClasses: Record<number, string[]> = {
      1: ["text-3xl", "font-bold"],
      2: ["text-2xl", "font-bold"],
      3: ["text-xl", "font-semibold"],
      4: ["text-lg", "font-semibold"],
      5: ["text-base", "font-medium"],
      6: ["text-sm", "font-medium"],
    };

    for (const node of tree.children ?? []) {
      const isHeading =
        node.type === "element" &&
        !!node.tagName &&
        /^h[1-6]$/.test(node.tagName);

      if (isHeading) {
        if (section) newChildren.push(section);

        const level = Number(node.tagName!.slice(1));
        const cls = mergeClassName(node.properties?.className, [
          ...(headingClasses[level] ?? []),
          "text-zinc-500",
        ]);

        // clone heading + tambahkan class
        const heading: Node = {
          ...node,
          properties: {
            ...(node.properties || {}),
            className: cls,
          },
        };

        // buat section baru, heading jadi child pertama
        section = {
          type: "element",
          tagName: "section",
          properties: { className: ["space-y-4"] },
          children: [heading],
        };
      } else if (section) {
        section.children!.push(node);
      } else {
        newChildren.push(node);
      }
    }

    if (section) newChildren.push(section);
    tree.children = newChildren;
  };
}
