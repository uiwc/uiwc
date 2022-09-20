import { Story, Meta } from '@storybook/react/types-6-0';
import { BlockProps } from './constants';
import { Block } from './Block';
import { Col } from '../grid';
import { Button } from '../../general/button';

export default {
  title: 'Layout/Block',
  component: Block,
  argTypes: {},
} as Meta;

const Template: Story<BlockProps> = (args: BlockProps) => {
  return (
    <Block {...args}>
      <Col>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          delectus consequatur illo dicta aliquam, voluptatibus ab soluta
          excepturi iure perspiciatis debitis, omnis a necessitatibus, nulla
          quod dolor assumenda labore distinctio?
        </p>
        <Button block>Click me!</Button>
      </Col>
      <Col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id neque
          autem rerum non voluptatum voluptas excepturi molestiae deleniti quae,
          eius tempore rem quisquam est totam cum eveniet amet reprehenderit?
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            obcaecati.
          </li>
          <li>
            Praesentium nulla dignissimos obcaecati excepturi deserunt vel quia
            fuga beatae!
          </li>
          <li>Quae ad molestiae quia in ab, itaque odit! Eveniet, rerum?</li>
          <li>
            Voluptatem ad doloribus corporis commodi inventore temporibus
            molestiae optio fugit.
          </li>
          <li>
            Soluta necessitatibus, tempora mollitia quasi sunt aliquid culpa
            veniam ut.
          </li>
          <li>
            Sit eveniet omnis ducimus esse iusto? Ut aliquam quibusdam odio.
          </li>
        </ul>
      </Col>
    </Block>
  );
};

export const Default = Template.bind({});
