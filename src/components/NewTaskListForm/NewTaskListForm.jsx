import { useState } from "react";

export default function NewTaskListForm({ addTaskList }) {
  showtaskitem
    const [newForm, setNewForm] = useState({
        name: "",
        tasks: []
    });

    function handleChange(evt) {
        setNewForm({ 
            ...newForm, 
            [evt.target.name]: evt.target.value 
        });
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        addTaskList(newForm);
        setNewForm({
            name: "",
            tasks: []
        });
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    value={newForm.name}
                    onChange={handleChange}
                />
                <button type="submit"> Add Task List</button>
            </form>
        </>
    );

  const [newForm, setNewForm] = useState({
    name: "",
    tasks: [],
  });

  function handleChange(evt) {
    setNewForm({
      ...newForm,
      [evt.target.name]: evt.target.value,
    });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    addTaskList(newForm);
    setNewForm({
      name: "",
      tasks: [],
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={newForm.name}
          onChange={handleChange}
        />
        <button type="submit"> Add Task List</button>
      </form>
    </>
  );
}
