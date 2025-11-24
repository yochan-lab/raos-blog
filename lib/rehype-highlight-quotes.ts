import { visit } from 'unist-util-visit';
import type { Root, Text, Element, ElementContent } from 'hast';

export default function rehypeHighlightQuotes() {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index: number | undefined, parent: Element | Root | undefined) => {
      if (!parent || typeof index !== 'number') return;
      if (!node.value.includes('"')) return;

      const value = node.value;
      const parts = value.split(/("[^"]+")/g);

      if (parts.length <= 1) return;

      const children: ElementContent[] = parts.map(part => {
        if (part.startsWith('"') && part.endsWith('"') && part.length >= 2) {
          return {
            type: 'element' as const,
            tagName: 'span',
            properties: {
              className: ['italic']
            },
            children: [{ type: 'text' as const, value: part }]
          };
        }
        return { type: 'text' as const, value: part };
      }).filter((node: any) => node.value !== '');

      parent.children.splice(index, 1, ...children);
      
      return index + children.length;
    });
  };
}

