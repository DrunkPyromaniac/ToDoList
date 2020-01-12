import React from 'react';

import ToDoListItem from 'components/ToDoListItem';

export class ToDoList extends React.Component
  {
	render()
		{
		return this.props.items.map((item) =>
			{
			return <ToDoListItem key={item.id} {...item} />;
			});
		}
	}

export default ToDoList;
