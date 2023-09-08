import { useAuth0 } from "@auth0/auth0-react";
import { AddTask, Loading, Task } from "../components";
import { useEffect, useState } from "react";
import { getTasks, setUserID } from "../assets/JS";
import styled from"../assets/styles/home.module.css";

const Home = () => {
    const { isLoading, isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);
    const id = setUserID();
    
    
    useEffect(() => {
       const fetch = async () =>{
            const response = await getTasks(id);
            setData(response);
        };
        fetch();
    },[]);
    console.log("data", data);
    console.log("type", typeof data);
        
        if (isLoading) {
            return <Loading/>
        }
    return (
        <>
            <main>
                {!isAuthenticated && 
                    <header>
                        <h3> Welcome to the TodoList App </h3>
                        <h1> Please Login To Use the ToDoList !!!</h1>
                    </header>
                }

                { isAuthenticated && <AddTask />}
                
                {isAuthenticated &&
                    <table className={styled.Tasks}>
                        <tr className={styled.Rows}>
                            <th className={styled.Activity}> Activity </th>
                            <th className={styled.Status}>Status</th>
                        </tr>
                        {data.map((task, index) => (
                            <Task
                                key={index}
                                data={task}
                            />
                        ))}
                    </table>
                }

            </main>
        </>
    );
}
export default Home;