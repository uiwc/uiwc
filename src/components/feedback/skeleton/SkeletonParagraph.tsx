import { Utils } from '../../../utils';
import { SkeletonParagraphProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonParagraph({
  count = 1,
  lines = 5,
  minLines = 2,
  maxLines = 5,
  ...rest
}: SkeletonParagraphProps) {
  return (
    <>
      <Skeleton count={Math.max(1, lines - 1)} {...rest} />
      <Skeleton className="mb-3" width="45%" {...rest} />

      {Array(Math.max(0, count - 1))
        .fill({})
        .map((_, index) => (
          <div key={index} className="mb-3">
            <Skeleton count={Utils.random(minLines, maxLines) - 1} {...rest} />
            <Skeleton width="45%" {...rest} />
          </div>
        ))}
    </>
  );
}
