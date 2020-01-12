import React from 'react';

import styles from './styles.module.scss';
import defaultImage from './default.png';

export class ToDoListItem extends React.Component
  {
	render()
		{
		const category = this.props.categories.find(x => x.id === this.props.category);
		return (
			<div className={styles.container}>
				<img src={defaultImage} alt="logo" className={styles.image} />
				<div className={styles.title}>{this.props.title}</div>
				<div className={styles.category} style={{ color: category.color }}>{"#" + category.name}</div>
				<div className={styles.text}>{this.props.text}</div>
			</div>
		);
		}
	}

export default ToDoListItem;
