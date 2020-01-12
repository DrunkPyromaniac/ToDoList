import React from 'react';

import ToDoListItem from 'components/ToDoListItem';

import styles from './styles.module.scss';

export class ToDoList extends React.Component
	{
	constructor(props)
		{
		super(props);
		this.state =
			{
			newTask: "",
			};

		this.textChange = this.textChange.bind(this);
		this.handleKey  = this.handleKey.bind(this);
		}

	addItem(item)
		{
		const [title, text] = item.split("\n", 2);

		this.props.items.push(
			{
			title,
			text,
			category: 1,
			});
		}

	textChange(event)
		{
		this.setState({ newTask: event.target.value });
		}

	handleKey(event)
		{
		if (event.which === 13 && !event.shiftKey)
			{
			this.addItem(this.state.newTask);
			this.setState({ newTask: "" });
			event.preventDefault();
			}
		}

	render()
		{
		return (
			<div className={styles.container}>
				<textarea placeholder="Add Task..." value={this.state.newTask} onChange={this.textChange} onKeyPress={this.handleKey} rows={2} />
				{
				this.props.items.map(item =>
					{
					return <ToDoListItem key={item.id} {...item} categories={this.props.categories} />;
					})
				}
			</div>
		);
		}
	}

export default ToDoList;
