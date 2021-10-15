import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * State: isBeingEdited: boolean
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  /** Toggle if this is being edited */

  // Goal flip is being edited, maybe safer call to just flip it, ternary
  // should never had side effects!!!!!!
  // Set to not edit  => (!edit)

  function toggleEdit() {
    isBeingEdited ? setIsBeingEdited(false) : setIsBeingEdited(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    console.log(
      formData.id,
      formData.title,
      formData.description,
      "formdata from EditiableTodo.js"
    );
    update(formData);
    toggleEdit();
  }

  return (
    <div className="EditableTodo">
      {isBeingEdited ? (
        <TodoForm initialFormData={todo} createTodo={handleSave} />
      ) : (
        <div className="mb-3">
          <div className="float-right text-sm-right">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
          <Todo
            id={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
          />
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
