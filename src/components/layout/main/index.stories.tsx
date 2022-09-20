import { Meta, Story } from '@storybook/react/types-6-0';
import { Utils } from '../../../utils';
import { Block } from '../block';
import { MainProps } from './constants';
import { Main } from './Main';

export default {
  title: 'Layout/Main',
  component: Main,
  argTypes: {},
} as Meta;

const Template: Story<MainProps> = (args: MainProps) => {
  return (
    <Main {...args}>
      <Block highlight narrow>
        <div>
          <h1>First block</h1>
          <p>{Utils.formatDate(new Date(), 'dd/mmm/yyyy')}</p>
          <p>{Utils.toCurrency(12399.55, 2)}</p>
          <p>{JSON.stringify(Utils.decodeJWT(null))}</p>
          <p>{JSON.stringify(Utils.decodeJWT(''))}</p>
          <p>
            {JSON.stringify(
              Utils.decodeJWT(
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
              )
            )}
          </p>
        </div>
      </Block>
      <Block narrow>
        <div>
          <h1>Second block</h1>
        </div>
      </Block>
      <Block narrow>
        <div>
          <h1>Third block</h1>
        </div>
      </Block>
    </Main>
  );
};

export const Default = Template.bind({});
