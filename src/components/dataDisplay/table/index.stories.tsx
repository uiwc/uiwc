import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Icons } from '../../general/icons';
import { Dropdown } from '../../navigation/dropdown';
import { Avatar } from '../avatar';
import { TableProps } from './constants';
import { Table } from './Table';

const data = [
  {
    id: 10,
    avatar: (
      <Avatar
        className="mr-2"
        size={30}
        src="https://pbs.twimg.com/media/DJjGHANUEAADO2c.jpg"
      />
    ),
    name: 'Christiam Mena',
    program: 'Bachillerato Virtual - Venezuela',
    period: '1er Año',
    calendar: 'Sep 2020 - Jul 2021',
    status: 'En curso',
  },
  {
    id: 20,
    avatar: <Avatar className="mr-2" size={30} icon="DB" />,
    name: 'Diego Barrera',
    program: 'Test of English as a Foreign Language',
    period: '5to Año',
    calendar: 'Feb 2020 - Jul 2021',
    status: 'Concluido',
  },
  {
    id: 30,
    avatar: <Avatar className="mr-2" size={30} icon="DB" />,
    name: 'Diego Barrera',
    program: 'Bachillerato Virtual - Venezuela',
    period: '4to Año',
    calendar: 'Ene 2020 - Jul 2021',
    status: 'Graduado',
  },
  {
    id: 35,
    avatar: <Avatar className="mr-2" size={30} icon="DB" />,
    name: 'Diego Barrera',
    program: 'Bachillerato Virtual - Dominicana',
    period: '1er Año',
    calendar: 'Ene 2019 - Jul 2021',
    status: 'En Curso',
  },
  {
    id: 40,
    avatar: <Avatar className="mr-2" size={30} icon="AD" />,
    name: 'Anita Dominguez',
    program: 'Bachillerato Virtual - Venezuela',
    period: '1er Año',
    calendar: 'Sep 2020 - Jul 2021',
    status: 'En curso',
  },
  {
    id: 45,
    avatar: <Avatar className="mr-2" size={30} icon="VF" />,
    name: 'Vicente Fernandez',
    program: 'Prepa Virtual - México',
    period: '1er Año',
    calendar: 'Sep 2020 - Jul 2021',
    status: 'En curso',
  },
  {
    id: 50,
    avatar: <Avatar className="mr-2" size={30} icon="VF" />,
    name: 'Vicente Fernandez',
    program: 'Inglés Avanzado - México',
    period: '1er Año',
    calendar: 'Sep 2020 - Jul 2021',
    status: 'En curso',
  },
  {
    id: 55,
    avatar: <Avatar className="mr-2" size={30} icon="BW" />,
    name: 'Bruce Wayne',
    program: 'Inglés Avanzado - USA',
    period: '3er Año',
    calendar: 'Sep 2020 - Jul 2021',
    status: 'En Duda',
  },
  {
    id: 60,
    avatar: <Avatar className="mr-2" size={30} icon="BW" />,
    name: 'Bruce Wayne',
    program: 'Espionaje Avanzado - USA',
    period: '5er Año',
    calendar: 'Sep 2020 - Jul 2021',
    status: 'Dominado',
  },
  {
    id: 65,
    avatar: <Avatar className="mr-2" size={30} icon="LR" />,
    name: 'Isabel II',
    program: 'Reinado Avanzado - UK',
    period: '5er Año',
    calendar: 'Sep 2020 - Jul 2021',
    status: 'Terminado',
  },
  {
    id: 70,
    avatar: <Avatar className="mr-2" size={30} icon="EZ" />,
    name: 'El Zorro',
    program: 'Montar a caballo - New Mexico',
    period: '2do Año',
    calendar: 'Sep 2017 - Jul 2021',
    status: 'Terminado',
  },
];

export default {
  title: 'Data Display/Table',
  component: Table,
  argTypes: {},
} as Meta;

const Template: Story<TableProps> = (args: TableProps) => {
  return <Table {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  data,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
  ],
};

export const WithoutPagination = Template.bind({});
WithoutPagination.args = {
  pageable: false,
  data,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
  ],
};

export const Grouping = Template.bind({});
Grouping.args = {
  selectable: true,
  groupByField: 'name',
  onSelect: (data: any) => console.log(data),
  data,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
      Cell: ({ value, row }: any) => {
        return (
          <div className="d-flex align-items-center">
            {row.subRows[0]?.original?.avatar}
            <span>{value}</span>
          </div>
        );
      },
    },
    {
      Header: 'Curso',
      accessor: 'program',
      disableSortBy: true,
      aggregate: (leafValues: any[], aggregatedValues: any[]) => {
        return aggregatedValues.map((v, idx: number) => (
          <div key={idx} className="aggregated">
            {v}
          </div>
        ));
      },
    },
    {
      Header: 'Periodo',
      accessor: 'period',
      disableSortBy: true,
      aggregate: (leafValues: any[], aggregatedValues: any[]) => {
        return aggregatedValues.map((v, idx: number) => (
          <div key={idx} className="aggregated">
            {v}
          </div>
        ));
      },
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
      disableSortBy: true,
      aggregate: (leafValues: any[], aggregatedValues: any[]) => {
        return aggregatedValues.map((v, idx: number) => (
          <div key={idx} className="aggregated">
            {v}
          </div>
        ));
      },
    },
    {
      Header: 'Estado',
      accessor: 'status',
      disableSortBy: true,
      aggregate: (leafValues: any[], aggregatedValues: any[]) => {
        return aggregatedValues.map((v, idx: number) => (
          <div key={idx} className="aggregated">
            {v}
          </div>
        ));
      },
    },
  ],
};

export const Events = Template.bind({});
Events.args = {
  selectable: true,
  onSorting: (data: any) => console.log(data),
  onSelect: (data: any) => console.log(data),
  onPaging: (data: any) => console.log(data),
  data,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
    {
      Header: '',
      accessor: 'id',
      disableSortBy: true,
      collapse: true,
      Cell: (x: any) => {
        return (
          <>
            <Dropdown
              toggle={<Icons.Dots className="anchor" />}
              align="right"
              fixed
            >
              <Dropdown.Item value="item-1">Item 01</Dropdown.Item>
              <Dropdown.Item value="item-2">Item 02</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item value="item-3" disabled>
                Item 03
              </Dropdown.Item>
            </Dropdown>
            {/* {x.value} */}
          </>
        );
      },
    },
  ],
};

export const Selectable = Template.bind({});
Selectable.args = {
  selectable: true,
  data,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
  ],
};

export const ClickableRow = Template.bind({});
ClickableRow.args = {
  clickable: true,
  onRowClick: (row: any) => console.log('click', row),
  data,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  data: [],
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
  ],
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  data,
  hideHeader: true,
  columns: [
    {
      Header: 'Nombre del estudiante',
      accessor: 'name',
    },
    {
      Header: 'Curso',
      accessor: 'program',
    },
    {
      Header: 'Periodo',
      accessor: 'period',
    },
    {
      Header: 'Calendario',
      accessor: 'calendar',
    },
    {
      Header: 'Estado',
      accessor: 'status',
    },
  ],
};

export const Mobile = Template.bind({});
Mobile.args = {
  data,
  columns: [
    {
      Header: 'Curso',
      accessor: 'program',
      Cell: (x: any) => {
        console.log(x);
        return (
          <div className="aggregated">
            {x.row.original.program}:
            <p className="fs-small text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quibusdam blanditiis quasi, dolorem cumque totam, ullam rem
              voluptas molestias adipisci animi ut? Nulla illo delectus maiores
              reiciendis? Voluptatibus, corporis nam!
            </p>
          </div>
        );
        return null;
      },
    },
  ],
};
