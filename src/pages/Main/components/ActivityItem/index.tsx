import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '../IconButton';

import { UserContext } from '../../../../App';

import getDayDifference from './getDayDifference';

import { Texts } from './constants';

import { Props } from './types';

import './style.scss';

const ActivityItem = ({ item, onDeleteClick }: Props) => {
  const { currentUser, contactUser } = useContext(UserContext);
  const isYourNote = item.user.id === currentUser?.id;

  const difference = getDayDifference(new Date(item.createdAt));

  return (
    <div className="activity-item" data-testid="activity-item">
      <div className="timestamp">
        <span>{difference ? `${difference}d` : 'Today'}</span>
      </div>

      <IconButton icon={item.type} type="display" />
      <div className="item-content" data-testid="item-content">
        <span className="title">
          <span className="author">{isYourNote ? 'You' : item.user.name}</span>
          {Texts[item.type]}
          <span className="contact">
            {isYourNote ? contactUser.name : 'you'}
          </span>
        </span>
        <span className="subtitle">{item.message}</span>
        <div className="activity-item-btn">
          <FontAwesomeIcon icon="chevron-down" />

          <div className="btn-menu">
            <button
              data-testid="delete-activity-item-btn"
              onClick={() => onDeleteClick(item.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
