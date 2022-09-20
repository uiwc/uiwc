import { i18n } from '../../../i18n/language';
import { useCallback, useEffect } from 'react';
import {
  useGroupBy,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { Empty, Pagination, Skeleton } from '../..';
import { Utils } from '../../..';
import { TableProps } from './constants';
import { IndeterminateCheckbox } from './IndeterminateCheckbox';
import { SortColumn } from './SortColumn';
import { TableStyled, TableWrapperStyled } from './styled';

export function Table({
  data = [],
  columns = [],
  loading = false,
  clickable = false,
  pageable = true,
  selectable = false,
  sortable = true,
  manualSorting = false,
  groupByField = '',
  defaultPageSize = 25,
  defaultPageIndex = 0,
  pageSizeOptions = [10, 25, 50, 75, 100],
  hideHeader = false,
  onSorting = () => {},
  onSelect = () => {},
  onPaging = () => {},
  onRowClick = (row: any) => {},
  ...rest
}: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    page,
    state: { sortBy, pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    pageCount,
  } = useTable(
    {
      columns,
      data,
      disableSortBy: !sortable,
      manualSortBy: manualSorting,
      initialState: {
        groupBy: [groupByField],
        pageSize: defaultPageSize,
        pageIndex: defaultPageIndex,
      },
    },
    useGroupBy,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks: any) => {
      if (!selectable) {
        return;
      }

      hooks.visibleColumns.push((columns: any[]) => [
        // Let's make a column for selection
        {
          id: '__selection__',
          disableSortBy: true,
          collapse: true,
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }: any) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  useEffect(() => {
    onSorting(sortBy);
  }, [onSorting, sortBy]);

  useEffect(() => {
    const first = selectedFlatRows[0];
    let result: any[] = selectedFlatRows;

    if (first?.isGrouped) {
      result = selectedFlatRows.reduce((acc: any[], act: any) => {
        return acc.concat(act.subRows);
      }, []);
    }

    onSelect(result.map((e) => e.original));
  }, [onSelect, selectedFlatRows]);

  useEffect(() => {
    onPaging({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  const handlePreviousPage = useCallback(() => {
    previousPage();
  }, [previousPage]);

  const handleNextPage = useCallback(() => {
    nextPage();
  }, [nextPage]);

  const handleGotoPage = useCallback(
    (page: number | ((pageIndex: number) => number)) => {
      gotoPage(page);
    },
    [gotoPage]
  );

  const handleSetPageSize = useCallback(
    (pageSize: number) => {
      setPageSize(pageSize);
    },
    [setPageSize]
  );

  const handleRowClick = useCallback(
    (row: any) => {
      if (row?.isGrouped) {
        onRowClick(row.subRows.map((e: any) => e.original));
        return;
      }

      onRowClick(row.original);
    },
    [onRowClick]
  );

  return (
    <>
      {loading ? (
        <Skeleton.Table columns={columns.length || 5} />
      ) : (
        <>
          <TableWrapperStyled
            className={Utils.joinClasses(hideHeader && 'without-header')}
          >
            <TableStyled {...getTableProps()} {...rest}>
              {hideHeader ? null : (
                <thead>
                  {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column: any) => {
                        return (
                          <th
                            className={Utils.joinClasses(
                              column.collapse && 'collapse'
                            )}
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            title={column.render('Header')}
                          >
                            {column.render('Header')}
                            <SortColumn {...column} />
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
              )}
              <tbody {...getTableBodyProps()}>
                {(pageable ? page : rows).map((row: any) => {
                  prepareRow(row);
                  return (
                    <tr
                      className={Utils.joinClasses(
                        row.isSelected && 'active',
                        clickable && 'clickable'
                      )}
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell: any) => {
                        let alignTop = row.subRows.length > 1;
                        const cellProps = {
                          ...cell.getCellProps(),
                          onClick:
                            cell.column.unclickable ||
                            cell.column.id === '__selection__'
                              ? undefined
                              : () => handleRowClick(row),
                        };

                        return (
                          <td
                            className={Utils.joinClasses(
                              alignTop && 'align-top',
                              cell.column.collapse && 'collapse'
                            )}
                            {...cellProps}
                          >
                            {cell.isGrouped
                              ? cell.render('Cell')
                              : cell.render('Aggregated')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </TableStyled>
            {!data?.length ? (
              <Empty>{i18n('ui.components.table.empty')}</Empty>
            ) : null}
          </TableWrapperStyled>

          {pageable ? (
            <Pagination
              align="center"
              className="my-4"
              pageCount={pageCount}
              pageSize={pageSize}
              pageIndex={pageIndex}
              onPreviousPage={handlePreviousPage}
              onNextPage={handleNextPage}
              onGotoPage={handleGotoPage}
              onSetPageSize={handleSetPageSize}
              pageSizeOptions={pageSizeOptions}
              disabled={loading}
            />
          ) : null}
        </>
      )}
    </>
  );
}
