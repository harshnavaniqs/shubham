import React from 'react';
import Card from './Card';
import './KanbanBoard.css';

function KanbanBoard({ tickets, groupOption, orderOption }) {
  let groupedTickets = [...tickets];

  if (groupOption === 'status') {
    groupedTickets = tickets.reduce((groups, ticket) => {
      const status = ticket.status;
      if (!groups[status]) groups[status] = [];
      groups[status].push(ticket);
      return groups;
    }, {});
  } else if (groupOption === 'user') {
    groupedTickets = tickets.reduce((groups, ticket) => {
      const user = ticket.userId;
      if (!groups[user]) groups[user] = [];
      groups[user].push(ticket);
      return groups;
    }, {});
  } else if (groupOption === 'prioritygrouping') {
    groupedTickets = tickets.reduce((groups, ticket) => {
      const pri = ticket.priority;
      if (!groups[pri]) groups[pri] = [];
      groups[pri].push(ticket);
      return groups;
    }, {});
  }

  const orderedGroupedTickets = Object.keys(groupedTickets).reduce((sorted, key) => {
    sorted[key] = groupedTickets[key].sort((a, b) => {
      if (orderOption === 'priority') {
        return b.priority - a.priority;
      } else if (orderOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    return sorted;
  }, {});

  return (
    <div className="KanbanBoard">
      {Object.keys(orderedGroupedTickets).map((group) => (
        <div key={group} className="group">
          <h2>{getColumn(group)}</h2>
          <div className="card-group">
            {orderedGroupedTickets[group].map((ticket) => (
              <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                tag={ticket.tag}
                priority={ticket.priority}
                userId={ticket.userId}
                status={ticket.status}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

}

function getColumn(group) {
  switch (group) {
    case '0':
      return 'No Priority';
    case '1':
      return 'Low Priority';
    case '2':
      return 'Medium Priority';
    case '3':
      return 'High Priority';
    case '4':
      return 'Urgent Priority';
    default:
      return group;
  }
}


export default KanbanBoard;
