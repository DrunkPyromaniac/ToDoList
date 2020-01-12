import React from 'react';

import ToDoList from './components/ToDoList';

function App()
	{
	const items = [
		{
		id: 1,
		title: "Test1",
		text: "Do Task 1",
		category: 2,
		},
		{
		id: 2,
		title: "Test2",
		text: "Do Task 2",
		category: 1,
		},
	];

	const categories = [
		{
		id: 1,
		name: 'Family',
		color: 'mediumorchid',
		},
		{
		id: 2,
		name: 'Hobbies',
		color: 'mediumturquoise',
		},
		{
		id: 3,
		name: 'Work',
		color: 'darkorange',
		},
	];

	return (
		<ToDoList items={items} categories={categories} />
  );
	}

export default App;
