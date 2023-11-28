import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from '../IconButton';

import { UserContext } from '../../../../App';

import { ButtonTypes, emptyActivityItem } from './constants';

import { ActionType, NewActivityItem } from '../../../../shared/types/types';
import { Props } from './types';

import './style.scss';

const InputField = ({ submit }: Props) => {
  const { contactUser } = useContext(UserContext);

  const [activityItem, setActivityItem] = useState<NewActivityItem>({
    ...emptyActivityItem,
  });

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setActivityItem((prev) => ({
      ...prev,
      message: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(activityItem);
    setActivityItem({ ...emptyActivityItem });
  };

  const onButtonClick = (type: ActionType) => {
    setActivityItem((prev) => ({
      ...prev,
      type,
    }));
  };

  return (
    <div className="form-wrapper" data-testid="form-wrapper">
      <div className="icon-btn">
        <FontAwesomeIcon icon="list" />
      </div>
      <form onSubmit={onSubmit}>
        <textarea
          required
          data-testid="textarea"
          value={activityItem.message}
          onChange={handleMessageChange}
          placeholder={`Add a note about ${contactUser.name}...`}
        />
        <div className="form-actions">
          <div className="actions-buttons">
            {ButtonTypes.map((buttonType) => (
              <IconButton
                type="action"
                key={buttonType}
                icon={buttonType}
                onClick={() => onButtonClick(buttonType)}
                selected={activityItem.type === buttonType}
              />
            ))}
          </div>

          <button data-testid="submit-note-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputField;
