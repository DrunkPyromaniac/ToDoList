import React from 'react';

export class ToDoListItem extends React.Component
  {
	render()
		{
		return <div>{this.props.title}</div>;
		}
	}

export default ToDoListItem;
