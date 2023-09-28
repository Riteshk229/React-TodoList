// importing hooks
import { useEffect, useState } from "react";
// impoorting Toastify
import { toast } from "react-toastify"
// importing icons
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
// importing styles
import styled from "../assets/styles/home.module.css";
// importing functions
import { deleteTask, updateTask } from "../assets/JS";

const Task = (props) => {
    // De-structuring props
    const { task, state, setState } = props
    // Variables states
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    // reloading the state
    useEffect(() => { 
        setTitle(task.title);
        setStatus(task.completed);
    }, [task]);

    // Edited Task object
    const editedTask = {
        title: title,
        completed: status,
        id: task.id,
        userId: task.userId
    }

    // function to change status of task whe edit mode is on 
    const handleStatusChange = () => {
        setStatus(!status);
    }

    // Function to delte a task from the list
    const handleDelete = async () => {
        // sending req to delete task from list to the API
        const deleted = await deleteTask(task.userId);
        // Creating a new updated state
        const newState = state.filter(entry => entry.id != task.id);
        // Updating the state with updated State
        setState(newState);

        // Succes Notification 
        toast.success("Task successfully deteled from the list.", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 3000,
            closeOnClick: true,
            theme: "dark",
            draggable: false
            })
    };

    // Function to edit tasks 
    const handleEditSubmit = async () => {
        // Sending data to add task to the Api by PUT method
        const response = await updateTask(editedTask);
        if (response.success) {
        
            // Creating a new updated state       
            const newState = state.map((entry) => {
                if (entry.id == task.id) {
                    entry = response.data;
                }
                return entry
            })

            // Updating the state with updated State
            setState(newState);

        
            // Succes Notification
            toast.success("Task successfully Updated.", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
                closeOnClick: true,
                theme: "dark",
                draggable: false
            })

        } else {    
            toast.error("Error in Editting task.!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
                closeOnClick: true,
                theme: "dark",
                draggable: false
            })  
        }
        
        // Exiting Edit Mode
        setEditMode(false);
    }

    return (
        <>
            <tr className={styled.Rows}>
                {/* Show diffrent UI depending on Edit mode*/}
                {editMode
                    // Edit mode Active
                    ? <>
                        <td>
                            {/* Edit the task title */}
                            <input
                                className={styled.EditInput}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </td>
                        {/* Edit the task status */}
                        <td onClick={handleStatusChange}>
                            {status
                                ? <DoneAllIcon style={{color: "green"}}/>
                                : <CloseIcon style={{ color: "red" }} />}
                        </td>
                        {/* Save the edit task */}
                        <td>
                            <SaveIcon onClick={handleEditSubmit} />
                        </td>
                    </>
                    // 
                    : <>
                        {/* Task Tilte */}
                        <td className={styled.Task}>
                            {task.title}
                        </td>
                        {/* Task status */}
                        <td>
                            {status
                                ? <DoneAllIcon style={{color: "green"}}/>
                                : <CloseIcon style={{ color: "red" }} />
                            }
                        </td>
                        {/* Action buttons */}
                        <td className={styled.Actions}>
                            {/* Enable Edit Mode */}
                            <EditIcon onClick={() => setEditMode(true)} />
                            {/* Delte a task */}
                            <DeleteIcon onClick={handleDelete} />
                        </td>
                      </>}
            </tr>
        </>
    );
}
// expoting components
export default Task;