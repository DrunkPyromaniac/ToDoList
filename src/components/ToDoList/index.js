import React from 'react';

export class ToDoList extends React.Component
  {
	render()
		{
		return this.props.items.map((item) =>
			{
			return <div>{item.title}</div>;
			});
		}
	}

export default ToDoList;
