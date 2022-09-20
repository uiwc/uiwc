import { useState } from 'react';
import { TreeProps } from './constants';
import {
  getKey,
  toggleChildren,
  toggleParentAndCheckChildren,
  toggleParents,
} from './helpers';
import { TreeStyled } from './styled';
import { TreeNode } from './TreeNode';

export const Tree = ({
  nodes = [],
  childrenAttr = 'children',
  titleAttr = 'title',
  collapseIcon = <span>-</span>,
  expandIcon = <span>+</span>,
  render = (node) => <i>{node[titleAttr]}</i>,
  onNodeChange,
}: TreeProps) => {
  const [, redraw] = useState(false);

  const onCheck = (nodeInfo: any) => {
    nodeInfo.checked = !nodeInfo.checked;

    nodeInfo[childrenAttr]?.forEach((n: any) => {
      toggleChildren(n, nodeInfo.checked, childrenAttr);
    });

    if (!nodeInfo.checked) {
      toggleParents(nodeInfo.parent, false);
    }

    toggleParentAndCheckChildren(nodeInfo.parent, childrenAttr);

    onNodeChange(nodes);

    redraw((s) => !s);
  };

  const onExpand = (nodeInfo: any) => {
    nodeInfo.collapsed = !nodeInfo.collapsed;

    redraw((s) => !s);
  };

  const renderTreeNodes = (nodes: any[], parent: any = {}) => {
    const treeNodes = nodes.map((node, index) => {
      node.parent = parent;
      node.isParent =
        Array.isArray(node[childrenAttr]) && node[childrenAttr].length > 0;
      node.isLeaf = !node.isParent;
      node.checked = node.checked === undefined ? false : node.checked;
      node.collapsed = node.collapsed === undefined ? false : node.collapsed;

      const children = node.isParent
        ? renderTreeNodes(node[childrenAttr], node)
        : null;

      if (parent.collapsed) {
        return null;
      }

      return (
        <TreeNode
          key={getKey(node.id, index)}
          node={node}
          render={render}
          isCollapse={node.collapsed}
          checked={node.checked}
          isLeaf={node.isLeaf}
          isParent={node.isParent}
          collapseIcon={collapseIcon}
          expandIcon={expandIcon}
          onCheck={onCheck}
          onExpand={onExpand}
        >
          {children}
        </TreeNode>
      );
    });

    return <ol>{treeNodes}</ol>;
  };

  const treeNodes = renderTreeNodes(nodes);

  return <TreeStyled>{treeNodes}</TreeStyled>;
};
