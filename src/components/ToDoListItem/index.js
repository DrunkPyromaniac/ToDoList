import React from 'react';

import styles from './styles.module.scss';

export class ToDoListItem extends React.Component
  {
	render()
		{
		return <div className={styles.container}>{this.props.title}</div>;
		}
	}

export default ToDoListItem;
