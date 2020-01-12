import React from 'react';

import styles from './styles.module.scss';

export class ToDoListItem extends React.Component
  {
	render()
		{
		return (
			<div className={styles.container}>
				<div className={styles.image}>A picture</div>
				<div className={styles.title}>{this.props.title}</div>
				<div className={styles.category}>#octothorpe</div>
				<div className={styles.text}>{this.props.text}</div>
			</div>
		);
		}
	}

export default ToDoListItem;
