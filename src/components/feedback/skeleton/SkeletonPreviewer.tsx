import { SkeletonPreviewerProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonPreviewer({ ...rest }: SkeletonPreviewerProps) {
  return (
    <>
      <Skeleton.Image height={200} className="mb-2" {...rest} />
      <Skeleton {...rest} />
    </>
  );
}
