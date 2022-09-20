import { Flex } from '../../layout/flex';
import { SkeletonGradeCardProps } from './constants';
import { Skeleton } from './Skeleton';

export function SkeletonGradeCard({ ...rest }: SkeletonGradeCardProps) {
  return (
    <>
      <div
        className="border border-cultured p-3"
        style={{
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px',
        }}
      >
        <Skeleton.Paragraph lines={2} className="mb-0" />

        <Flex justify="center" className="my-4">
          <Skeleton.Avatar size={200} className="mr-2" />
        </Flex>

        <Skeleton.Paragraph lines={3} className="mb-0" />
      </div>
    </>
  );
}
