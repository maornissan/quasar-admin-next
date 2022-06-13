export interface ILink {
  id: number;
  title: string;
  url: string;
  icon: string;
  children?: ILink[];
}

export const links: ILink[] = [
  {
    id: 1,
    title: 'Dashboard',
    url: '/',
    icon: 'dashboard',
  },
  {
    id: 2,
    title: 'WYSIWYG Editor',
    url: '/editor',
    icon: 'border_color',
  },
  {
    id: 2,
    title: 'Tables',
    url: '#',
    icon: 'table_chart',
    children: [
      {
        id: 21,
        title: 'Products',
        url: '/tables/products',
        icon: 'inventory',
      },
      {
        id: 22,
        title: 'Categories',
        url: '/tables/categories',
        icon: 'category',
      },
    ],
  },
  {
    id: 3,
    title: 'Form',
    url: '#',
    icon: 'check_box',
    children: [
      {
        id: 31,
        title: 'Profile',
        url: '/form/profile',
        icon: 'info',
      },
    ],
  },
];
