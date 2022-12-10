import { useState, useEffect } from 'react';

import { Todo } from './types';
import NewTodoForm from './components/NewTodoForm';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const removeTodo = (id: Todo['id']) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);
  };

  const updateTodoStatus = (id: Todo['id']) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <ul style={{ listStyleType: 'none' }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            style={{ border: '1px sold white' }}
            handleRemove={removeTodo}
            handleInputChange={updateTodoStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
