import { SkeletonBreadcrumbsProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonBreadcrumbs({
  height = '.875rem',
  count = 2,
  separator = '/',
  ...rest
}: SkeletonBreadcrumbsProps) {
  return (
    <div className="mb-3 d-flex">
      {Array(count)
        .fill(0)
        .map((_, index: number) => {
          const isLast = index === count - 1;
          return (
            <div key={index}>
              <Skeleton height={height} width={75} {...rest} />
              {isLast ? null : (
                <span
                  className="text-platinium d-inline-block mx-1"
                  style={{ fontSize: height }}
                >
                  {separator}
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
}
