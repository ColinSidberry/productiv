import React, { useState } from "react";

const INITIAL_DATA = {
  title: "",
  description: "",
  priority: 1,
};

/** Form for adding.
 *
 * State: - formData object of initialFormData { title, description, priority }
 *
 * Props:
 * - initialFormData
 * - createTodo: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

// Give more generic name NOT createTodo, you're not just creating, handleSave

function TodoForm({ initialFormData = INITIAL_DATA, createTodo }) {
  const [formData, setFormData] = useState(initialFormData);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  // Look at evt object evt.target
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData.title, "formdata from TodoForm");
    createTodo(formData);
    setFormData(initialFormData);
  }

  // BUG encounter had an onClick on createTodo that interferred with updateTodo

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
        />
      </div>

      <div className="form-group">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="form-group d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority" className="d-inline-flex">
            Priority:&nbsp;&nbsp;
          </label>
          <select
            id="newTodo-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-??ber</option>
            <option value={2}>??ber</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          G??!
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
