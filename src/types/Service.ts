export type ServiceStatus = 'new' | 'favorite' | 'unavailable' | 'default';

export type Service = {
  id: string;
  icon: string;         // Ionicons атауы
  iconColor: string;    // Иконка түсі
  title: string;
  description: string;
  color: string;        // Карточка фоны
  status?: ServiceStatus;
};