import {useState} from 'react';

function ToDoForm (){
   const [task, setTask] = useState({
    id:0, 
    taskDescription:'',
    isCompleted:false});
   
   //create function which takes an event . This function will handle the adding of the tasks to the list of todos.
   const [todos, setTodos] = useState([])

   //This function will handle the adding of the tasks to the list of todos. This method will be executed when the “Add todo” button is clicked.
   function addTodos(event){
    //event.preventDefault() to prevent the form from submitting twice.
    event.preventDefault();
    // to add new task we will use the spread operator to append the reamining toDos on top of our list
    setTodos([
        ...todos,
        {
            id: todos.length + 1,
            taskDescription : task.taskDescription,
            isCompleted: false
        }
    
    ]);
     // reset the task
     setTask({
        id: 0,
        taskDescription: "",
        isCompleted: false
      });
   }

    return(
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={addTodos}>
            <label>
                Task
                <input type="text" value = {task.taskDescription} name = "taskDescription" onChange={(event) => setTask({taskDescription: event.target.value, isCompleted:false})}/>
            </label>
            <button >
                Add ToDo
            </button>
            </form>
 {/*Create some new markup for the todo list so that each task can be displayed  */}
            
            <div>
{todos.length > 0 ? (
<div>
{todos.map((t, index) => {
  return (
    <div id={t.id} key={index + t.id} value={t.id}>
      {t.isCompleted ? (
        //if it is completed it will strike out the task
        <strike>
          <p>{t.taskDescription}</p>
        </strike>
      ) : (
        //Otherwise, it will display the task to do.
        <div>
          <p>{t.taskDescription}</p>
        </div>
      )}
    </div>
  );
})}

</div>

) : (
    //if there is nothing in the todos will display the message "No tasks for today"
    <p>No tasks for today</p>
  )}
</div>
</div>
);
};

export default ToDoForm;