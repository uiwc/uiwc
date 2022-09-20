import { TreeNodeProps } from './constants';
import { TreeNodeActionStyled, TreeNodeStyled } from './styled';

export const TreeNode = ({
  children,
  isLeaf,
  isParent,
  checked,
  isCollapse,
  collapseIcon,
  expandIcon,
  onCheck,
  onExpand,
  render,
  node,
}: TreeNodeProps) => {
  return (
    <TreeNodeStyled className={isLeaf ? 'leaf' : ''}>
      {!isLeaf ? (
        <TreeNodeActionStyled onClick={() => onExpand(node)}>
          {isCollapse ? expandIcon : collapseIcon}
        </TreeNodeActionStyled>
      ) : null}
      <input type="checkbox" checked={checked} onChange={() => onCheck(node)} />{' '}
      {render(node)}
      {children}
    </TreeNodeStyled>
  );
};
