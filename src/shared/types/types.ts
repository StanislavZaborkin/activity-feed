export interface IActivityItem {
  createdAt: number;
  user: User;
  type: ActionType;
  message: string;
  id: number;
}

export interface NewActivityItem {
  type: ActionType;
  message: string;
}

export type ActionType =
  | 'Message'
  | 'Phone'
  | 'Coffee'
  | 'Beer'
  | 'Meeting Note';

export type User = {
  id: number;
  name: string;
};
