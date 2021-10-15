import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({todo, update, remove}) {

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit(evt) { 
    isBeingEdited ? 
      setIsBeingEdited(false) : 
      setIsBeingEdited(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete(todo) {
    remove(todo.id);
   }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) { 
    //FIXME
  }

  return (
      <div className="EditableTodo">

                EITHER {/*FIXME either or pattern */}

                <TodoForm toggleEdit={toggleEdit} />
                {/*Question: Do we need to pass through createTodo?*/}

                OR

                <div className="mb-3">
                  <div className="float-right text-sm-right">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo /> {/**FIXME: add props */}
                </div>

      </div>
  );
}

export default EditableTodo;
