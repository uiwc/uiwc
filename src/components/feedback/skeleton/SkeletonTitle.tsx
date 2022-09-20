import { SkeletonTitleProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonTitle({
  height = '3rem',
  ...rest
}: SkeletonTitleProps) {
  return <Skeleton height={height} width="70%" className="mb-3" {...rest} />;
}
