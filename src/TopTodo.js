import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * State: none
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo -> Todo
 */

// Be more clear in Doc what components are doing

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  let top = todos.reduce(
    (acc, cur) => (cur.priority < acc.priority ? cur : acc),
    todos[0]
  );

  // King of the hill algo w/ reduce
  return (
    <Todo
      id={top.id}
      title={top.title}
      description={top.description}
      priority={top.priority}
    />
  );
}

export default TopTodo;

//loop
