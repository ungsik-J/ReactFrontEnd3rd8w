// TodoList.js
import React from 'react';
import TodoListItem from './TodoListItem';
import { v4 as uuidv4 } from 'uuid';

const listStyle = {
  minHeight: "320px",
  maxHeight: "513px",
  overflow: "auto"
};

const TodoList = React.memo(({ todos, onRemove, onChecked }) => {
  return (
    <div style={listStyle}>
      {todos.map(todo => (
        <TodoListItem
          key={uuidv4()}
          todo={todo}
          onRemove={onRemove}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
});

export default TodoList;