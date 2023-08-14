import React from 'react';
import './ButtonGroup.css';

function ButtonGroup({ groupOption, setGroupOption, orderOption, setOrderOption }) {
  const handleGroupOptionChange = (option) => {
    setGroupOption(option);
  };

  const handleOrderOptionChange = (option) => {
    setOrderOption(option);
  };

  return (
    <div className="ButtonGroup">
      <div className="dropdown">
        <label htmlFor="groupDropdown" className="dropdown-label">
          Group By:
        </label>
        <select
          id="groupDropdown"
          className="dropdown-select"
          value={groupOption}
          onChange={(e) => handleGroupOptionChange(e.target.value)}
        >
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="prioritygrouping">By Priority</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="orderDropdown" className="dropdown-label">
          Order By:
        </label>
        <select
          id="orderDropdown"
          className="dropdown-select"
          value={orderOption}
          onChange={(e) => handleOrderOptionChange(e.target.value)}
        >
          <option value="priority">Priority (Descending)</option>
          <option value="title">Title (Alphabetical)</option>
        </select>
      </div>
    </div>
  );
}

export default ButtonGroup;
