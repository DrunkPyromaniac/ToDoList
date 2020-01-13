import React from 'react';

import styles from './styles.module.scss';
import defaultImage from './default.png';

export class ToDoListItem extends React.Component
	{
	render()
		{
		const category = this.props.categories.find(x => x.id === this.props.category) || {};
		const save = this.props.save || (() => {});

		return (
			<div className={styles.container + (this.props.completed ? ' ' + styles.completed : '')}>
				<img src={defaultImage} alt="logo" className={styles.image} />
				<div className={styles.title}>{this.props.title}</div>
				<div className={styles.category} style={{ color: category.color }}>{"#" + category.name}</div>
				<div className={styles.text}>{this.props.text}</div>
				<div className={styles.buttons}>
					<button className={styles.complete} alt="Save" onClick={() => save(this.props)}>+</button>
				</div>
			</div>
		);
		}
	}

export default ToDoListItem;
