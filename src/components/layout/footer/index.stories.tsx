import { Story, Meta } from '@storybook/react/types-6-0';
import { Footer } from './Footer';
import { FooterProps } from './constants';
import { Col } from '../grid';
import { Logo } from '../../dataDisplay/logo';
import {
  FacebookIcon,
  MessagesIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../general/icons';
import { Headline } from '../../general/headline';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

const Template: Story<FooterProps> = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <Col className="mb-6 mb-lg-0" md={6} lg={3}>
        <Headline size={5} className="text-white mb-4">
          Dawere
        </Headline>
        <p>
          U.E.P.A Dawere - Registrados en el Ministerio del Poder Popular para
          la Educación bajo el permiso de funcionamiento Nº 05-698-20 como una
          institución de educación para adultos con el siguiente código de
          plantel: PN-18181519
        </p>
        <small>© 2021 Dawere</small>
      </Col>
      <Col className="mb-6 mb-lg-0" md={6} lg={3}>
        <Headline size={5} className="text-white mb-4">
          Empresa
        </Headline>
        <ul>
          <li>
            <a href=" ">Filosofía Dawere</a>
          </li>
          <li>
            <a href=" ">Cobertura De Medios</a>
          </li>
          <li>
            <a href=" ">Términos Y Condiciones</a>
          </li>
          <li>
            <a href=" ">Políticas De Privacidad</a>
          </li>
        </ul>
      </Col>
      <Col className="mb-6 mb-md-0" md={6} lg={3}>
        <Headline size={5} className="text-white mb-4">
          Recursos
        </Headline>
        <ul>
          <li>
            <a href=" ">Ayuda</a>
          </li>
          <li>
            <a href=" ">Blog</a>
          </li>
          <li>
            <a href=" ">Becas</a>
          </li>
          <li>
            <a href=" ">Colegios Virtuales</a>
          </li>
        </ul>
      </Col>
      <Col md={6} lg={3}>
        <Headline size={5} className="text-white mb-4">
          Conecta
        </Headline>
        <ul>
          <li>
            <a href=" ">
              <MessagesIcon className="mr-1" /> Contacto
            </a>
          </li>
          <li>
            <a href=" ">
              <InstagramIcon className="mr-1" /> Instagram
            </a>
          </li>
          <li>
            <a href=" ">
              <FacebookIcon className="mr-1" /> Facebook
            </a>
          </li>
          <li>
            <a href=" ">
              <TwitterIcon className="mr-1" />
              Twitter
            </a>
          </li>
          <li>
            <a href=" ">
              <YoutubeIcon className="mr-1" /> Youtube
            </a>
          </li>
        </ul>
      </Col>
    </Footer>
  );
};

export const Default = Template.bind({});
Default.args = {
  bottomSection: (
    <Col>
      <Logo negative full size={200} />
    </Col>
  ),
};
