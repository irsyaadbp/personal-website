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

function isExternalLink(href: unknown): boolean {
  if (typeof href !== "string") return false;
  // anggap eksternal kalau mulai dengan http/https
  return /^https?:\/\//i.test(href);
}

function createArrowUpRightIcon(): Node {
  // Inline SVG mirip lucide "ArrowUpRight"
  return {
    type: "element",
    tagName: "svg",
    properties: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: [
        "h-4",
        "w-4",
        "transition-transform",
        "group-hover:translate-x-0.5",
        "group-hover:-translate-y-0.5",
      ],
      "aria-hidden": "true",
      focusable: "false",
    },
    children: [
      // diagonal arrow
      {
        type: "element",
        tagName: "path",
        properties: { d: "M7 17L17 7" },
        children: [],
      },
      // top horizontal
      {
        type: "element",
        tagName: "path",
        properties: { d: "M7 7h10" },
        children: [],
      },
      // right vertical
      {
        type: "element",
        tagName: "path",
        properties: { d: "M17 7v10" },
        children: [],
      },
    ],
  };
}

function wrapLinkNode(node: Node) {
  const props = node.properties || {};
  const href = props.href;

  // tambahkan atribut target/rel untuk semua link eksternal;
  // kalau mau paksa semua link, hapus kondisi isExternalLink
  if (isExternalLink(href)) {
    props.target = "_blank";
    props.rel = "noopener noreferrer";
  }

  // kelas Tailwind sesuai yang kamu mau
  props.className = mergeClassName(props.className, [
    "inline-flex",
    "items-center",
    "gap-0.5",
    "text-foreground",
    "hover:text-primary",
    "transition-colors",
    "underline",
    "underline-offset-8",
    "decoration-1 decoration-dashed",
    "hover:decoration-2 hover:decoration-solid",
    "group font-bold",
  ]);

  // bungkus children lama ke dalam <span>, lalu tambahkan ikon
  const originalChildren = node.children ?? [];
  node.children = [
    {
      type: "element",
      tagName: "span",
      properties: {},
      children: originalChildren,
    },
    createArrowUpRightIcon(),
  ];

  node.properties = props;
}

/**
 * Rekursif traversal untuk memodifikasi <a> dimanapun posisinya.
 */
function visitAndTransformLinks(node: Node) {
  // console.log("transforming link", node);
  if (node.type === "element" && node.tagName === "a") {
    wrapLinkNode(node);
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) visitAndTransformLinks(child);
  }
}

export function markdownRender() {
  return (tree: Root) => {
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
        console.log("pushing node", node);
        newChildren.push(node);
      }
    }

    if (section) newChildren.push(section);
    tree.children = newChildren;

    
    // --- tahap 2: transform semua <a> jadi versi custom ---
    for (const child of tree.children) {
      visitAndTransformLinks(child);
    }
  };
}
