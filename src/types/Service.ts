export type ServiceStatus = 'new' | 'favorite' | 'unavailable' | 'default';

export type Service = {
  id: string;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  color: string;
  status?: ServiceStatus;
};