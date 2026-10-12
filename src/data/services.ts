import { Service } from '../types/Service';

export const services: Service[] = [
  {
    id: 'library',
    icon: 'book',
    iconColor: '#0B66E4',
    title: 'Кітапхана',
    description: 'Кітаптар мен оқу орындарына қолжетімділік.',
    color: '#FFFFFF',
    status: 'default',
  },
  {
    id: 'schedule',
    icon: 'calendar',
    iconColor: '#0B66E4',
    title: 'Кесте',
    description: 'Сабақтар мен емтихандар күні.',
    color: '#FFFFFF',
    status: 'default',
  },
  {
    id: 'transport',
    icon: 'bus',
    iconColor: '#0B66E4',
    title: 'Көлік',
    description: 'Маршруттар мен автобус кестесі.',
    color: '#FFFFFF',
    status: 'default',
  },
];