import React from 'react';

import ToDoListItem from 'components/ToDoListItem';
import ToDoListItemEdit from 'components/ToDoListItemEdit';

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

		this.textChange   = this.textChange.bind(this);
		this.handleKey    = this.handleKey.bind(this);
		this.removeItem   = this.removeItem.bind(this);
		this.completeItem = this.completeItem.bind(this);
		}

	removeItem(id)
		{
		const item = this.props.items.find(x => x.id === id);
		item.removed = true;
		this.forceUpdate();
		}

	completeItem(id)
		{
		const item = this.props.items.find(x => x.id === id);
		item.completed = !item.completed;
		this.forceUpdate();
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
				<ToDoListItemEdit save={this.addItem} categories={this.props.categories} />
				{
				this.props.items.map(item =>
					{
					if (item.removed)
						return;

					return <ToDoListItem
						key={item.id}
						categories={this.props.categories}
						taskRemove={this.removeItem}
						taskComplete={this.completeItem}
						{...item} />;
					})
				}
			</div>
		);
		}
	}

export default ToDoList;
