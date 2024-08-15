import React from 'react';
import './NotificationsPage.css';
import Notification from '../Notification/Notification';

const NotificationsPage = ({ notifications, toggleReadStatus, markAllAsRead, unreadCount }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h3>Notifications <span className="notiCount">{unreadCount}</span></h3>
          <h5 className="readAll" onClick={markAllAsRead}>
            {unreadCount === 0 ? 'Mark All As Unread' : 'Mark All As Read'}
          </h5>
        </header>
        <div className="notiContainer">
          {notifications.map((noti, index) => (
            <Notification
              key={noti.id}
              notification={noti}
              toggleReadStatus={() => toggleReadStatus(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;