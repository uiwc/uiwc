import { Flex } from '../../layout/flex';
import { SkeletonSubjectCardProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonSubjectCard({ ...rest }: SkeletonSubjectCardProps) {
  return (
    <>
      <Skeleton.Image
        height={180}
        style={{
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
        }}
        {...rest}
      />

      <div
        className="border border-cultured p-3"
        style={{
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px',
        }}
      >
        <Skeleton.Paragraph lines={2} />

        <Flex align="center" className="mb-3">
          <Flex shrink={false}>
            <Skeleton.Avatar size={40} className="mr-2" />
          </Flex>
          <Flex basis={100} direction="column">
            <Skeleton />
          </Flex>
        </Flex>

        <Skeleton />
      </div>
    </>
  );
}
