import { ActionType, NewActivityItem } from '../../../../shared/types/types';

export const ButtonTypes = [
  'Message',
  'Phone',
  'Coffee',
  'Beer',
  'Meeting Note',
] as const;

export const emptyActivityItem: NewActivityItem = {
  message: '',
  type: 'Message' as ActionType,
};
