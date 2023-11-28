import React from 'react';

import { Icons } from './constants';

import { Props, ActionButton } from './types';

import './style.scss';

const IconButton = (props: Props) => {
  const checkActionType = (p: unknown): p is ActionButton =>
    (p as ActionButton).type === 'action';

  const renderActionButton = () => {
    const { icon, onClick, selected } = props as ActionButton;
    return (
      <button
        type="button"
        onClick={() => onClick(icon)}
        className={`${selected ? 'selected' : ''} icon-btn`}>
        {Icons[icon]}
      </button>
    );
  };

  const renderDisplayButton = () => (
    <button type="button" className="icon-btn">
      {Icons[props.icon]}
    </button>
  );

  return checkActionType(props) ? renderActionButton() : renderDisplayButton();
};

export default IconButton;
