import { Utils } from '../../../utils';
import { SkeletonListProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonList({ count = 5, ...rest }: SkeletonListProps) {
  return (
    <div className="mb-3">
      {Array(count)
        .fill({})
        .map((_, index) => (
          <div key={index}>
            <Skeleton
              circle
              width={16}
              height={16}
              style={{ marginRight: 10 }}
              {...rest}
            />
            <Skeleton
              style={{ width: `calc(${Utils.random(50, 90)}% - 26px)` }}
              {...rest}
            />
          </div>
        ))}
    </div>
  );
}
