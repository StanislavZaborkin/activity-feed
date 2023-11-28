import React, { JSX } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ActionType } from '../../../../shared/types/types';

export const Icons = {
  Message: <FontAwesomeIcon icon="message" />,
  Phone: <FontAwesomeIcon icon="phone" />,
  Coffee: <FontAwesomeIcon icon="coffee" />,
  Beer: <FontAwesomeIcon icon="beer" />,
  'Meeting Note': <FontAwesomeIcon icon="user" />,
} as Record<ActionType, JSX.Element>;
