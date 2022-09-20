export function getKey(level: string | number, index: number) {
  return `${level}-${index}`;
}

export function isEveryChildChecked(
  node: any,
  childrenAttr: string = 'children'
) {
  return node[childrenAttr]?.every((child: any) => child.checked);
}

export function toggleChildren(
  node: any,
  state: boolean,
  childrenAttr: string = 'children'
) {
  node.checked = state;
  node[childrenAttr]?.forEach((n: any) => {
    toggleChildren(n, state, childrenAttr);
  });
}

export function toggleParents(node: any, state: boolean) {
  if (node) {
    node.checked = state;
    toggleParents(node.parent, state);
  }
}

export function toggleParentAndCheckChildren(
  node: any,
  childrenAttr: string = 'children'
) {
  if (node) {
    const everyChildChecked = isEveryChildChecked(node, childrenAttr);
    if (everyChildChecked) {
      node.checked = true;
    }
    toggleParentAndCheckChildren(node.parent, childrenAttr);
  }
}
