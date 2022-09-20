import { SkeletonButtonProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonButton({
  width = 130,
  height = 45,
  ...rest
}: SkeletonButtonProps) {
  return <Skeleton height={height} width={width} {...rest} />;
}
