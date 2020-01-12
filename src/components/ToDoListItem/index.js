import React from 'react';

import styles from './styles.module.scss';
import defaultImage from './default.png';

export class ToDoListItem extends React.Component
  {
	render()
		{
		return (
			<div className={styles.container}>
				<div className={styles.image}><img src={defaultImage} /></div>
				<div className={styles.title}>{this.props.title}</div>
				<div className={styles.category}>#octothorpe</div>
				<div className={styles.text}>{this.props.text}</div>
			</div>
		);
		}
	}

export default ToDoListItem;
