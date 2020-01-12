import React from 'react';

import styles from './styles.module.scss';
import defaultImage from './default.png';

export class ToDoListItem extends React.Component
	{
	render()
		{
		const category = this.props.categories.find(x => x.id === this.props.category);
		const complete = this.props.taskComplete || (() => {});
		const remove   = this.props.taskRemove   || (() => {});

		return (
			<div className={styles.container + (this.props.completed ? ' ' + styles.completed : '')}>
				<img src={defaultImage} alt="logo" className={styles.image} />
				<div className={styles.title}>{this.props.title}</div>
				<div className={styles.category} style={{ color: category.color }}>{"#" + category.name}</div>
				<div className={styles.text}>{this.props.text}</div>
				<div className={styles.buttons}>
					<button className={styles.complete} onClick={() => complete(this.props.id)}>&#10004;</button>
					<button className={styles.remove} onClick={() => remove(this.props.id)}>&times;</button>
				</div>
			</div>
		);
		}
	}

export default ToDoListItem;
