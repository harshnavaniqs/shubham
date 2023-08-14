import React from 'react';
import './KanbanBoard.css';

const Card = ({ title, tag, priority, userName, status }) => (
  <div className="card">
    <div className="card-content">
      <h4 className="card-title">
        <span className="bullet-icon">•</span>
        <b>{title}</b>
      </h4>
      <div className="card-tag">
        <span className="bullet-icon">•</span> {tag}
      </div>
      <p className="card-details">
        {priority} | {userName} | {status}
      </p>
    </div>
  </div>
);

export default Card;
