import { IActivityItem } from '../../../../shared/types/types';

export interface Props {
  item: IActivityItem;
  onDeleteClick: (id: number) => void;
}
