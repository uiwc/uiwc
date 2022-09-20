import { i18n } from '../../../i18n/language';
import { useCallback, useEffect, useState } from 'react';
import { Utils } from '../../..';
import { Icons } from '../../general/icons';
import { Dropdown } from '../dropdown';
import { PaginationProps } from './constants';
import { getMinMax } from './helpers';
import { PaginationPagerStyled, PaginationStyled } from './styled';

export function Pagination({
  align = 'start',
  pageCount = 0,
  pageIndex = 0,
  pageSize = 25,
  pageSizeOptions = [10, 25, 50, 75, 100],
  onPreviousPage = () => {},
  onNextPage = () => {},
  onGotoPage = (updater: number | ((pageIndex: number) => number)) => {},
  onSetPageSize = (pageSize) => {},
  onUpdate = (data: any) => {},
  className,
  disabled = false,
  ...rest
}: PaginationProps) {
  const [innerPageCount, setInnerPageCount] = useState(pageCount);
  const [innerPageIndex, setInnerPageIndex] = useState(pageIndex);
  const [innerPageSize, setInnerPageSize] = useState(pageSize);

  const style = Utils.joinClasses(
    className,
    disabled && 'disabled',
    `justify-content-${align}`
  );

  const menu = pageSizeOptions.map((v) => ({
    label: i18n('ui.components.pagination.perPage', { value: v }),
    value: v,
  }));

  const { min, max } = getMinMax(innerPageIndex, innerPageCount);

  const handlePreviousPage = useCallback(() => {
    const index = Math.max(0, innerPageIndex - 1);
    setInnerPageIndex(index);
    onPreviousPage();
    onUpdate({
      pageIndex: index,
      pageSize: innerPageSize,
    });
  }, [innerPageIndex, innerPageSize, onPreviousPage, onUpdate]);

  const handleNextPage = useCallback(() => {
    const index = Math.min(innerPageCount - 1, innerPageIndex + 1);
    setInnerPageIndex(index);
    onNextPage();
    onUpdate({
      pageIndex: index,
      pageSize: innerPageSize,
    });
  }, [innerPageCount, innerPageIndex, innerPageSize, onNextPage, onUpdate]);

  const handlePageSize = useCallback(
    (value: number) => {
      setInnerPageIndex(0);
      onGotoPage(0);

      setInnerPageSize(value);
      onSetPageSize(value);
      onUpdate({
        pageIndex: 0,
        pageSize: value,
      });
    },
    [onGotoPage, onSetPageSize, onUpdate]
  );

  const handleGotoPage = useCallback(
    (value: number) => {
      setInnerPageIndex(value);
      onGotoPage(value);
      onUpdate({
        pageIndex: value,
        pageSize: innerPageSize,
      });
    },
    [innerPageSize, onGotoPage, onUpdate]
  );

  useEffect(() => {
    setInnerPageCount(pageCount);
  }, [pageCount]);

  useEffect(() => {
    setInnerPageIndex(pageIndex);
  }, [pageIndex]);

  useEffect(() => {
    setInnerPageSize(pageSize);
  }, [pageSize]);

  if (pageCount === 0) {
    return null;
  }

  return (
    <PaginationStyled className={style} {...rest}>
      <PaginationPagerStyled>
        <li
          onClick={handlePreviousPage}
          className={Utils.joinClasses(
            'move-btn',
            innerPageIndex === 0 && 'disabled'
          )}
        >
          <Icons.Chevron direction="left" />{' '}
          <span>{i18n('ui.components.pagination.prev')}</span>
        </li>

        <>
          {min !== 0 ? (
            <>
              <li
                onClick={() => handleGotoPage(0)}
                className={`number ${
                  innerPageIndex === 0 && !disabled ? 'active' : ''
                }`}
              >
                1
              </li>
              <li onClick={() => handleGotoPage(min - 1)}>...</li>
            </>
          ) : null}
          {Utils.range(min, max).map((page) => (
            <li
              key={page}
              onClick={() => handleGotoPage(page)}
              className={`number ${
                innerPageIndex === page && !disabled ? 'active' : ''
              }`}
            >
              {page + 1}
            </li>
          ))}
          {max !== innerPageCount - 1 ? (
            <>
              <li onClick={() => handleGotoPage(max + 1)}>...</li>
              <li
                onClick={() => handleGotoPage(innerPageCount - 1)}
                className={`number ${
                  innerPageIndex === innerPageCount - 1 && !disabled
                    ? 'active'
                    : ''
                }`}
              >
                {innerPageCount}
              </li>
            </>
          ) : null}
        </>

        <li
          onClick={handleNextPage}
          className={Utils.joinClasses(
            'move-btn',
            innerPageIndex === innerPageCount - 1 && 'disabled'
          )}
        >
          <span>{i18n('ui.components.pagination.next')}</span>{' '}
          <Icons.Chevron direction="right" />
        </li>
      </PaginationPagerStyled>

      <Dropdown
        className="dropdown"
        toggle={i18n('ui.components.pagination.perPage', {
          value: innerPageSize,
        })}
        caretClassName="text-primary"
        caret={true}
        position="top"
        align="right"
        disabled={disabled}
      >
        {menu.map(({ label, value }: any, index: number) => (
          <Dropdown.Item
            key={index}
            onClick={handlePageSize}
            value={value}
            active={innerPageSize === value}
          >
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </PaginationStyled>
  );
}
