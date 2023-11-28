import React, { useContext } from 'react';

import InputField from './components/InputField';
import ActivityItem from './components/ActivityItem';

import { UserContext } from '../../App';

import { IActivityItem, NewActivityItem } from '../../shared/types/types';

import './style.scss';

const MainPage = () => {
  const [activityItems, setActivityItems] = React.useState<IActivityItem[]>([]);
  const { currentUser } = useContext(UserContext);

  const submitNote = (item: NewActivityItem) => {
    if (!item.message) return;
    const createdAt = Date.now();
    setActivityItems((prev) => [
      { ...item, createdAt, user: currentUser, id: createdAt },
      ...prev,
    ]);
  };

  const handleDelete = (id: number) => {
    if (
      !confirm(
        'Are you sure you want to delete this item? This cannot be undone.',
      )
    )
      return;
    setActivityItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="main-page-wrapper">
      <div className="main-page-content">
        <div className="timeline-divider" />
        <InputField submit={submitNote} />
        {activityItems.map((item) => (
          <ActivityItem
            item={item}
            key={item.id}
            onDeleteClick={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
