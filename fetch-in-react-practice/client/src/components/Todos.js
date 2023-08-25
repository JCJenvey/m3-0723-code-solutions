import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchTodos().then((json) => {
      setTodos(json);
      setIsLoading(false);
    });
  }, []);

  async function fetchTodos() {
    try {
      const response = await fetch(`/api/todos`);
      const statusCode = response.status;
      if (!response.ok) {
        throw new Error(statusCode);
      }
      const todosJSON = await response.json();
      return todosJSON;
    } catch (e) {
      setError(`Fetch failed with status code ${e}`);
    }
  }

  async function addTodo(newTodo) {
    try {
      const response = await fetch(`/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      const statusCode = response.status;
      if (!response.ok) {
        throw new Error(statusCode);
      }
      const result = await response.json();
      setTodos(todos.concat(result));
    } catch (e) {
      setError(`Fetch failed with status code ${e}`);
    }
  }

  async function toggleCompleted(todoId) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todoId === todoId) {
        const isCompletedSwitched = !todos[i].isCompleted;
        const switchCompleted = { isCompleted: isCompletedSwitched };
        try {
          const response = await fetch(`/api/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(switchCompleted),
          });
          const statusCode = response.status;
          if (!response.ok) {
            throw new Error(statusCode);
          }
          const result = await response.json();
          setTodos(
            todos.map((todo) => {
              if (todo.todoId === todoId) {
                return result;
              } else {
                return todo;
              }
            })
          );
        } catch (e) {
          setError(`Fetch failed with status code ${e}`);
        }
      }
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
