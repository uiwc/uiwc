import { useMatchMedia, Utils } from '../../..';
import { Flex } from '../../layout/flex';
import { SkeletonKanbanProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonKanban({ height = 380, ...rest }: SkeletonKanbanProps) {
  const { isMobile } = useMatchMedia();

  return (
    <div>
      <Flex>
        {Array(isMobile ? 1 : 5)
          .fill({})
          .map((_, i: number, arr: any[]) => (
            <Flex
              key={i}
              basis={100}
              direction="column"
              className={Utils.joinClasses(
                'mx-1 mb-1',
                i === arr.length - 1 && 'mr-0',
                i === 0 && 'ml-0'
              )}
            >
              <Skeleton {...rest} height={45} />
            </Flex>
          ))}
      </Flex>

      <Flex>
        {Array(isMobile ? 1 : 5)
          .fill({})
          .map((_, i: number, arr: any[]) => (
            <Flex
              key={i}
              basis={100}
              direction="column"
              className={Utils.joinClasses(
                'mx-1 mb-1',
                i === arr.length - 1 && 'mr-0',
                i === 0 && 'ml-0'
              )}
            >
              <Skeleton {...rest} height={height} />
            </Flex>
          ))}
      </Flex>
    </div>
  );
}
