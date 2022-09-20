import { Icons } from '../../general/icons';

export function SortColumn({
  canSort = false,
  isSorted = false,
  isSortedDesc = false,
}) {
  return canSort ? (
    <>
      {isSorted ? (
        isSortedDesc ? (
          <Icons.Sort order="desc" />
        ) : (
          <Icons.Sort order="asc" />
        )
      ) : (
        <Icons.Sort />
      )}
    </>
  ) : null;
}
