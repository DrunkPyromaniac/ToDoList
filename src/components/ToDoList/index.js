import React from 'react';

import ToDoListItem from 'components/ToDoListItem';

import styles from './styles.module.scss';

export class ToDoList extends React.Component
  {
	render()
		{
		return (
			<div className={styles.container}>
				{
				this.props.items.map(item =>
					{
					return <ToDoListItem key={item.id} {...item} />;
					})
				}
			</div>
		);
		}
	}

export default ToDoList;
