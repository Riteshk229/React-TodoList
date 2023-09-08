import { useEffect, useState } from "react";
import styled from "../assets/styles/home.module.css";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';

const Task = (props) => {
    const { data } = props
    const [status, setStatus] = useState(data.completed);

    const handleChange = () => {
        setStatus(!status);
    }
    return (
        <tr className={styled.Rows}>
            {status
                ? <td className={styled.TaskDone}> {data.title}</td>
                : <td> {data.title}</td>
            }
            <td onClick={handleChange}>
                {status
                    ? <DoneAllIcon style={{color: "green"}}/>
                    : <CloseIcon style={{ color: "red" }} />
                }
            </td>
        </tr>
        
    );
}
export default Task;