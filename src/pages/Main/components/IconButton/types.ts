import { ActionType } from '../../../../shared/types/types';

type BaseType = {
  icon: ActionType;
};

export type DisplayButton = BaseType & {
  type: 'display';
};

export type ActionButton = BaseType & {
  type: 'action';
  selected: boolean;
  onClick: (t: ActionType) => void;
};

export type Props = ActionButton | DisplayButton;
