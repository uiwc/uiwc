import { Meta, Story } from '@storybook/react/types-6-0';
import { PaginationProps } from './constants';
import { Pagination } from './Pagination';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {},
} as Meta;

const Template: Story<PaginationProps> = (args: PaginationProps) => {
  return (
    <div className="pt-9">
      <Pagination {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  pageCount: 25,
  pageIndex: 1,
  pageSize: 10,
};

export const OnUpdate = Template.bind({});
OnUpdate.args = {
  pageCount: 5,
  pageIndex: 1,
  pageSize: 10,
  onUpdate: (data: any) => console.log(data),
};
