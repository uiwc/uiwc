import { SkeletonAvatarProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonAvatar({
  size = 48,
  circle = true,
  ...rest
}: SkeletonAvatarProps) {
  return (
    <Skeleton
      height={size}
      width={size}
      circle={circle}
      className="mb-3"
      {...rest}
    />
  );
}
