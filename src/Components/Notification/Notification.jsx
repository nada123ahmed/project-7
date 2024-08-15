import React from 'react';
import './Notification.css';

const Notification = ({ notification, toggleReadStatus }) => {
  return (
    <div
      className={`noti ${notification.privateMsg ? 'privateNoti' : ''}`}
      onClick={toggleReadStatus}
      style={{ backgroundColor: notification.read ? 'white' : 'hsl(210, 60%, 98%)' }}
    >
      <img src={notification.imgSrc} alt={notification.name} />
      <div className="notiInfo">
        <div className={`notiText ${notification.read ? 'read' : 'unread'}`}>
          <p>
            <span className="name">{notification.name}</span> {notification.action}
            {notification.extraDetail && <span className="extraDetail"> {notification.extraDetail}</span>}
            {!notification.read && <span className="dot">●</span>}
          </p>
        </div>
        <p className="time">{notification.time}</p>
      </div>
      {notification.imgComment && <img src={notification.imgComment} alt="Comment" />}
      {notification.privateMsg && (
        <div className="privateMsg">
          <p>{notification.privateMsg}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;