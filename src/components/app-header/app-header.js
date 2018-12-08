import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2><span className="more">{toDo} more to do</span> <span className="do">{done} done</span></h2>
    </div>
  );
};

export default AppHeader;
