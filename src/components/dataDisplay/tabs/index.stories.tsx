import { Story, Meta } from '@storybook/react/types-6-0';
import { TabListProps } from './constants';
import { Tab, Tabs, TabList, TabPanel } from './Tabs';

export default {
  title: 'Data Display/Tabs',
  component: Tabs,
  argTypes: {},
} as Meta;

const Template: Story<TabListProps> = (args: any) => {
  return (
    <Tabs>
      <TabList {...args}>
        <Tab>Title 1</Tab>
        <Tab>Long Long Text</Tab>
        <Tab disabled>Disabled</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          deleniti esse beatae ducimus cumque, repellendus vitae illum. Sequi
          odio nemo sit dolore architecto corporis laudantium nam consectetur,
          placeat, recusandae modi!
        </p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          deleniti esse beatae ducimus cumque, repellendus vitae illum. Sequi
          odio nemo sit dolore architecto corporis laudantium nam consectetur,
          placeat, recusandae modi!
        </p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel>
        <p>
          Repellendus vitae illum. Sequi odio nemo sit dolore architecto
          corporis laudantium nam consectetur, placeat, recusandae modi!
        </p>
      </TabPanel>
    </Tabs>
  );
};

export const Default = Template.bind({});

export const Pills = Template.bind({});
Pills.args = {
  type: 'pills',
};

export const Justify = Template.bind({});
Justify.args = {
  justify: true,
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  scrollable: true,
};

export const JustifyAndScrollable = Template.bind({});
JustifyAndScrollable.args = {
  justify: true,
  scrollable: true,
};

export const JustifyAndScrollablePills = Template.bind({});
JustifyAndScrollablePills.args = {
  justify: true,
  scrollable: true,
  type: 'pills',
};
