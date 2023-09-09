// importing Auth0
import { useAuth0 } from "@auth0/auth0-react";
// importing Hooks
import { useEffect, useState } from "react";
// importing functions
import { getTasks, setUserID } from "../assets/JS";
// importing styles and components
import styled from"../assets/styles/home.module.css";
import { AddTask, Loading, Task } from "../components";

const Home = () => {
    // De-structuring useAuth
    const { isLoading, isAuthenticated } = useAuth0();
    // To-do List
    const [data, setData] = useState([]);
    // Random User ID
    const [id,setID] = useState(setUserID());
    
    // Hooks to load Initial Data
    useEffect(() => {
        // function to get and set to-do list data
        const fetch = async () =>{
            const response = await getTasks(id);
            setData(response);
        };
        // Calling the fecth functioon
        fetch();
    },[]);

        // Loading Component while data is fetched
        if (isLoading) {
            return <Loading/>
    }
    
    return (
        <>
            {/* if not Logged in */}
            {!isAuthenticated && 
                // Default screen
                <main className={styled.homeScreen}>
                    <header>
                        <h3> Welcome to the TodoList App </h3>
                        <h1> Please Login To Use the ToDoList !!!</h1>
                    </header>
                </main>
            }
                
            {/* If logged in */}
            {isAuthenticated &&
                <main>
                    {/* Component to add tasks */}
                    <AddTask
                        userID={id}
                        state={data}
                        setState={setData}
                    />

                    {/* Table to dispaly the list */}
                    <table className={styled.Tasks}>
                        <thead>
                            {/* Table Headings */}
                            <tr>
                                <th className={styled.Activity}> Activity </th>
                                <th className={styled.Status}>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                        {/* Componet to diaplay Tasks in list */}
                        {data.map((entry, index) => (
                            <Task
                                key={index}
                                task={entry}
                                state={data}
                                setState={setData}
                            />
                        ))}
                        </tbody>

                    </table>

                </main>}
        </>
    );
}

// exporting components
export default Home;