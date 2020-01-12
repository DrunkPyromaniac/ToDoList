import React from 'react';

import ToDoList from './components/ToDoList';

function App()
	{
	const items = [
		{
		id: 1,
		title: "Test1",
		text: "Do Task 1",
		},
		{
		id: 2,
		title: "Test2",
		text: "Do Task 2",
		},
	];

	return (
		<ToDoList items={items} />
  );
	}

export default App;
