import { Story, Meta } from '@storybook/react/types-6-0';
import { TreeProps } from './constants';
import { Tree } from './Tree';

const NODES = [
  {
    id: 1,
    title: 'Programas educativos',
    subcategories: [
      {
        id: 1,
        title: 'Bachillerato Virtual',
        resourceId: 1,
        resourceType: 'ResourceTypes.Program',
      },
    ],
  },
  {
    id: 2,
    title: 'Materias aisladas',
    subcategories: [
      {
        id: 1,
        title: '1er Período',
        subcategories: [
          {
            id: 1,
            title: 'Matemática',
            resourceId: 1,
            resourceType: 'ResourceTypes.Subject',
            subcategories: [
              {
                id: 1,
                title: 'Polinomios',
                url: '',
              },
              {
                id: 2,
                title: 'Ecuaciones',
                resourceId: 1,
                resourceType: 'ResourceTypes.Subject',
                subcategories: [
                  {
                    id: 1,
                    title: 'Ecuaciones de primer grado',
                    url: '',
                  },
                  {
                    id: 1,
                    title: 'Ecuaciones de segundo grado',
                    url: '',
                  },
                ],
              },
              {
                id: 3,
                title: 'Funciones',
                url: '',
              },
              {
                id: 4,
                title: 'Relaciones',
                url: '',
              },
            ],
          },
          {
            id: 2,
            title: 'Geografía y ciudadanía',
            url: '',
          },
          {
            id: 3,
            title: 'Componente idioma: Inglés',
            resourceId: 1,
            resourceType: 'ResourceTypes.Subject',
            subcategories: [
              {
                id: 1,
                title: 'Verbo to-be',
                url: '',
              },
            ],
          },
          {
            id: 4,
            title: 'Ciencias naturales: Biología',
            url: '',
          },
          {
            id: 5,
            title: 'Castellano y Literatura',
            url: '',
          },
          {
            id: 6,
            title: 'Componente participación e integración comunitaria',
            url: '',
          },
        ],
      },
      {
        id: 2,
        title: '2do Período',
        subcategories: [
          {
            id: 1,
            title: 'Matemática',
            url: '',
          },
          {
            id: 2,
            title: 'Geografía y ciudadanía',
            url: '',
          },
          {
            id: 3,
            title: 'Componente idioma: Inglés',
            url: '',
          },
          {
            id: 4,
            title: 'Ciencias naturales: Biología',
            url: '',
          },
          {
            id: 5,
            title: 'Castellano y Literatura',
            url: '',
          },
          {
            id: 6,
            title:
              'Componente participación e integración comunitaria especializada para Dawere y aliados comerciales disponibles en cada país 2',
            url: '',
          },
        ],
      },
      {
        id: 3,
        title: '3er Período',
        subcategories: [
          {
            id: 1,
            title: 'Matemática',
            url: '',
          },
          {
            id: 2,
            title: 'Geografía y ciudadanía',
            url: '',
          },
          {
            id: 3,
            title: 'Componente idioma: Inglés',
            url: '',
          },
          {
            id: 4,
            title: 'Ciencias naturales: Biología',
            url: '',
          },
          {
            id: 5,
            title: 'Castellano y Literatura',
            url: '',
          },
          {
            id: 6,
            title:
              'Componente participación e integración comunitaria especializada para Dawere y aliados comerciales disponibles en cada país 2',
            url: '',
          },
        ],
      },
      {
        id: 4,
        title: '4to Período',
        subcategories: [
          {
            id: 1,
            title: 'Matemática',
            url: '',
          },
          {
            id: 2,
            title: 'Geografía y ciudadanía',
            url: '',
          },
          {
            id: 3,
            title: 'Componente idioma: Inglés',
            url: '',
          },
          {
            id: 4,
            title: 'Ciencias naturales: Biología',
            url: '',
          },
          {
            id: 5,
            title: 'Castellano y Literatura',
            url: '',
          },
          {
            id: 6,
            title:
              'Componente participación e integración comunitaria especializada para Dawere y aliados comerciales disponibles en cada país 2',
            url: '',
          },
        ],
      },
      {
        id: 5,
        title: '5to Período',
        subcategories: [
          {
            id: 1,
            title: 'Matemática',
            url: '',
          },
          {
            id: 2,
            title: 'Geografía y ciudadanía',
            url: '',
          },
          {
            id: 3,
            title: 'Componente idioma: Inglés',
            url: '',
          },
          {
            id: 4,
            title: 'Ciencias naturales: Biología',
            url: '',
          },
          {
            id: 5,
            title: 'Castellano y Literatura',
            url: '',
          },
          {
            id: 6,
            title:
              'Componente participación e integración comunitaria especializada para Dawere y aliados comerciales disponibles en cada país 2',
            url: '',
          },
        ],
      },
      {
        id: 6,
        title: '6to Período',
        subcategories: [
          {
            id: 1,
            title: 'Matemática',
            url: '',
          },
          {
            id: 2,
            title: 'Geografía y ciudadanía',
            url: '',
          },
          {
            id: 3,
            title: 'Componente idioma: Inglés',
            url: '',
          },
          {
            id: 4,
            title: 'Ciencias naturales: Biología',
            url: '',
          },
          {
            id: 5,
            title: 'Castellano y Literatura',
            url: '',
          },
          {
            id: 6,
            title:
              'Componente participación e integración comunitaria especializada para Dawere y aliados comerciales disponibles en cada país 2',
            url: '',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Evaluaciones de convalidación',
    subcategories: [
      {
        id: 1,
        title: 'Primaria',
        url: '',
      },
      {
        id: 2,
        title: '1er periodo',
        url: '',
      },
      {
        id: 3,
        title: '2do periodo',
        url: '',
      },
      {
        id: 4,
        title: '3er periodo',
        url: '',
      },
      {
        id: 5,
        title: '4to periodo',
        url: '',
      },
    ],
  },
  {
    id: 4,
    title: 'Otros cursos',
    subcategories: [
      {
        id: 1,
        title: 'TOEFL',
        url: '',
      },
      {
        id: 2,
        title: 'English Course Level 1',
        url: '',
      },
      {
        id: 3,
        title: 'English Course Level 2',
        url: '',
      },
      {
        id: 4,
        title: 'English Course Level 3',
        url: '',
      },
      {
        id: 5,
        title: 'English Course Level 4',
        url: '',
      },
      {
        id: 6,
        title: 'English Course Level 5',
        url: '',
      },
      {
        id: 7,
        title: 'Olimpiada recreativa de Matemática para 3er y 4to grado',
        url: '',
      },
      {
        id: 8,
        title: 'Olimpiada recreativa de Matemática para 5to y 6to grado',
        url: '',
      },
    ],
  },
];

export default {
  title: 'Data Display/Tree',
  component: Tree,
  argTypes: {},
} as Meta;

const Template: Story<TreeProps> = (args: TreeProps) => {
  return <Tree {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  nodes: NODES,
  childrenAttr: 'subcategories',
  onChange: (nodes: any[]) => console.log(nodes),
};
