
// importing hooks
import { useState } from "react";
// importing styles
import styled from "../assets/styles/addtask.module.css"
// importing toastify
import { toast } from "react-toastify"
// importing functions
import { addTask} from "../assets/JS";


const AddTask = (props) => {
    // De-structuring props
    const { userID, state, setState } = props;

    // Variables State
    const [submit, setSubmiting] = useState(false);
    const [title, setTitle] = useState('');
    // Task object
    const task = {
        title: title,
        userId: userID,
        completed: false
    }

    // function to handle task Submission
    const handleSubmit = async() => {
        setSubmiting(true);

        // Task should have 6 or more characters
        if (title.length <= 6) {
            // Warning Notification Task is task length in inappropriate
            toast.warning("Task Title too short.!!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
                closeOnClick: true,
                theme: "dark",
                draggable: false
            })
            
            // reset the variable states and return
            setTitle(" ");
            return setSubmiting(false);
        }

        // Create new Task
        const response = await addTask(task);

        // on successfully adding task
        if (response.success) {
            // Create new list
            const newState = [response.data, ...state];
            // Update state with New List
            setState(newState);
    
            // Success notification on submission
            toast.success("Task added to the todoList..!!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
                closeOnClick: true,
                theme: "dark",
                draggable: false
            })
            
        } else {
            // on error
            // Error notification on submission
            toast.error("Error in adding task.!!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
                closeOnClick: true,
                theme: "dark",
                draggable: false
            })
        }


        // reset the variable states and return
        setTitle(" ");

        setSubmiting(false);
    }

    return (
        <>
            {/* Crate Task container */}
            <div className={styled.createTask}>
                {/* Task tile */}
                <label htmlFor ="taskname"> Task Title </label>
                <input
                    className={styled.taskTitle}
                    id="taskname"
                    value={task.title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                
                {/* Submit Button */}
                <div className={styled.btn}>
                    <button onClick={handleSubmit} disabled={submit}>
                        {submit ? "Adding Task" : " Add task" }
                    </button>
                </div>
            </div>
        </>
    );
}

// Exporting Components
export default AddTask;