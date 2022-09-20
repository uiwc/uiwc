import { Story, Meta } from '@storybook/react/types-6-0';
import { TestimonialsProps } from './constants';
import { Testimonials } from './Testimonials';

const TESTDATA = [
  {
    picture:
      'https://storage.googleapis.com/dawere-media/newFE/testimonials/8.png',
    author: 'Anna Chirinos',
    country: 'Venezuela',
    quote: '“Me motiva mucho que puedo estudiar y cuidar a mi bebe.”',
  },
  {
    picture:
      'https://storage.googleapis.com/dawere-media/newFE/testimonials/2.png',
    author: 'Diego Rondón',
    country: 'México',
    quote: '“Es como algo que quería pero no sabia que existía.”',
  },
  {
    picture: 'https://picsum.photos/100?random=3',
    author: 'Willian Escalona',
    country: 'USA',
    quote:
      '“Ustedes fueron una gran solución para que mi hijo continué estudiando.”',
  },
  {
    picture: 'https://picsum.photos/100?random=4',
    author: 'Mateo Martin',
    country: 'Rusia',
    quote: '“Me pareció interesante que uno puede estudiar desde su casa.”',
  },
  {
    picture: 'https://picsum.photos/100?random=5',
    author: 'Bruce Wayne',
    country: 'Venezuela',
    quote: '“Me motiva mucho que puedo estudiar y cuidar a mi bebe.”',
  },
  {
    picture: 'https://picsum.photos/100?random=6',
    author: 'Peter Parker',
    country: 'México',
    quote: '“Es como algo que quería pero no sabia que existía.”',
  },
  {
    picture: 'https://picsum.photos/100?random=7',
    author: 'Stephen King',
    country: 'USA',
    quote:
      '“Ustedes fueron una gran solución para que mi hijo continué estudiando.”',
  },
  {
    picture: 'https://picsum.photos/100?random=8',
    author: 'Kakaroto Goku',
    country: 'Rusia',
    quote: '“Me pareció interesante que uno puede estudiar desde su casa.”',
  },
];

export default {
  title: 'Data Display/Testimonials',
  component: Testimonials,
  argTypes: {},
} as Meta;

const Template: Story<TestimonialsProps> = (args: TestimonialsProps) => {
  return <Testimonials {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  entries: TESTDATA,
  autoplay: false,
  slidesToShow: 3,
};

export const Responsive = Template.bind({});
Responsive.args = {
  entries: TESTDATA,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
