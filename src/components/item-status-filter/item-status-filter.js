import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All'},
    { name: 'active', label: 'Active'},
    { name: 'done', label: 'Done'}
  ];

  render() {

    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name; //определяем активна она сейчас или нет
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'; //Устанавливаем доп. css класс, в зависимости от того, активна она или нет
      return (
        <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterChange(name)}>
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
