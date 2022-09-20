import { SkeletonImageProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonImage({ height = 300, ...rest }: SkeletonImageProps) {
  return <Skeleton height={height} {...rest} />;
}
