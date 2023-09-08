import { useAuth0 } from "@auth0/auth0-react";
import styled from "../assets/styles/addtask.module.css"

const AddTask = () => {
    const { user, isAuthenticated} = useAuth0();
    return (
        <>
            {isAuthenticated && <h1> Welcome {user.name}</h1>} 
            <div className={styled.createTask}>
                <label htmlFor ="taskname"> Task Title </label>
                <input
                    className={styled.taskTitle}
                    id="taskname"
                />

                <label htmlFor ="taskDetails"> Task Description </label>
                <textarea
                    className={styled.taskDescription}
                    id="taskDetails"
                />
                <label htmlFor="status"> Status </label>
                <div className={styled.options}>
                 <input type="radio" name="status" /> Completed
                 <input type="radio" name="status" /> Not Completed
                </div>
                    
                <div className={styled.btn}>
                    <button>
                        Add Task
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddTask;