import { Divider, Flex } from '../../layout';
import { SkeletonCalendarDayProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonCalendarDay({ count = 3 }: SkeletonCalendarDayProps) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index: number) => (
          <Flex key={index} direction="column">
            <Skeleton.Title />

            <Flex>
              <Skeleton width="145px" className="mr-3" />
              <Flex basis={100} direction="column">
                <Skeleton.Paragraph lines={3} />
                <Skeleton.Button />
              </Flex>
            </Flex>
            <Divider className="border-cultured" />
          </Flex>
        ))}
    </>
  );
}
