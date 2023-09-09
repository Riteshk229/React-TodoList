// importing Auth0
import { useAuth0 } from "@auth0/auth0-react";
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
    // De-structuring useAuth
    const { user, isAuthenticated } = useAuth0();
    // Radio button State
    const [radioSelect, setRadioSelect] = useState();
    // Variables State
    const [submit, setSubmiting] = useState(false);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(null);
    // Task object
    const task = {
        title: title,
        userId: userID,
        completed: status
    }

    // function to set task completion status
    const handleStatusSelect = (e) => {

        // if task is completed 
        if (e.target.value === "Completed") {
            setRadioSelect(e.target.value);
            setStatus(true);
        }
        
        // if task is not completed 
        if(e.target.value === "Not Completed") {
            setRadioSelect(e.target.value);
            setStatus(false);
        }
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
            setRadioSelect("");
            setStatus('');
            return setSubmiting(false);
        }
        
        // Task status should be provided
        if ( status === null) {
            // Warning notification Task status is not provided
            toast.warning("Please fill both details.!!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
                closeOnClick: true,
                theme: "dark",
                draggable: false
            })
            
            // reset the variable states and return
            setTitle(" ");
            setRadioSelect("");
            setStatus('');
            return setSubmiting(false);
        }

        // Create new Task
        const addedTask = await addTask(task);
        // Create new list
        const newState = [addedTask, ...state];
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

        // reset the variable states and return
        setTitle(" ");
        setRadioSelect("");
        setStatus('');

        setSubmiting(false);
    }

    return (
        <>
            {isAuthenticated && <h1> Welcome {user.name}</h1>}
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
                {/* Task Status */}
                <label htmlFor="status"> Status </label>
                {/* Radio Options */}
                <div className={styled.options}>
                    <input
                        type="radio"
                        name="status"
                        checked={radioSelect === "Completed"}
                        onChange={handleStatusSelect}
                        value="Completed"
                        /> Completed
                    <input
                        type="radio"
                        name="status"
                        onChange={handleStatusSelect}
                        checked={radioSelect === "Not Completed"}
                        value="Not Completed"
                    /> Not Completed
                </div>
                
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