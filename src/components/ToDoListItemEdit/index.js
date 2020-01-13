import React from 'react';

import styles from './styles.module.scss';
import defaultImage from './default.png';

export class ToDoListItem extends React.Component
	{
	constructor(props)
		{
		super(props);

		this.state =
			{
			title:    this.props.title    || '',
			text:     this.props.text     || '',
			category: this.props.category || 0,
			};
		}

	render()
		{
		const category = this.props.categories.find(x => x.id === this.props.category) || {};
		const save = this.props.save || (() => {});

		return (
			<div className={styles.container + (this.props.completed ? ' ' + styles.completed : '')}>
				<img src={defaultImage} alt="logo" className={styles.image} />
				<div className={styles.title}>
					<input type="text" value={this.state.title} placeholder="Title" onChange={ (event) => { this.setState({ title: event.target.value }); } } />
				</div>
				<div className={styles.category}>
					<select value={this.state.category} onChange={ (event) => { this.setState({ category: event.target.value }); } }>
						<option value={0}>...</option>
						{
						this.props.categories.map((category, i) =>
							{
							return <option value={category.id}>{category.name}</option>;
							})
						}
					</select>
				</div>
				<div className={styles.text}>
					<input type="text" value={this.state.text} placeholder="Notes" onChange={ (event) => { this.setState({ text: event.target.value }); } } />
				</div>
				<div className={styles.buttons}>
					<button className={styles.save} alt="Save" onClick={() => save(this.state)}>+</button>
				</div>
			</div>
		);
		}
	}

export default ToDoListItem;
