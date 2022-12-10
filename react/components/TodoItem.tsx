import React from 'react';
import { Todo } from '../types';

interface TodoItemProps extends Todo {
  style?: React.CSSProperties;
  handleRemove: (id: string) => void;
  handleInputChange: (id: string) => void;
}

const TodoItem = ({
  id,
  title,
  completed,
  style = {},
  handleRemove,
  handleInputChange,
}: TodoItemProps) => {
  const onChange = () => {
    handleInputChange(id);
  };

  const onClick = () => {
    handleRemove(id);
  };

  return (
    <li style={style}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onChange}
      />
      <span>{title}</span>
      <span onClick={onClick}>&times;</span>
    </li>
  );
};

export default TodoItem;
