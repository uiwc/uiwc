import { Utils } from '../../../utils';
import { Flex } from '../../layout/flex';
import { SkeletonTableProps } from './constants';
import { Skeleton } from './Skeleton';

const sizes = Array(50)
  .fill({})
  .map((_, i) => {
    return `${Utils.random(50, 95)}%`;
  });

export function SkeletonTable({
  columns = 5,
  rows = 6,
  ...rest
}: SkeletonTableProps) {
  return (
    <>
      <Flex>
        {Array(columns)
          .fill({})
          .map((_, i: number) => (
            <Flex key={i} basis={100} direction="column" className="mx-1">
              <Skeleton {...rest} height={35} />
            </Flex>
          ))}
      </Flex>

      {Array(rows)
        .fill({})
        .map((_, i: number) => (
          <Flex key={i} className="mt-2">
            {Array(columns)
              .fill({})
              .map((_, j: number) => (
                <Flex key={j} basis={100} direction="column" className="mx-1">
                  <Skeleton {...rest} width={sizes[i]} />
                </Flex>
              ))}
          </Flex>
        ))}
    </>
  );
}
