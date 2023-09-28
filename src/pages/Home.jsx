// importing toastify
import { toast } from "react-toastify"
// importing Hooks
import { useEffect, useState } from "react";
// importing functions
import { getTasks, setUserID } from "../assets/JS";
// importing styles and components
import styled from"../assets/styles/home.module.css";
import { AddTask, Loading, Task } from "../components";

const Home = () => {
    // To-do List
    const [data, setData] = useState([]);
    // Random User ID
    const [id,setID] = useState(setUserID());
    // loading
    const [isLoading,setIsLoading] = useState(true);
    
    // Hooks to load Initial Data
    useEffect(() => {
        // function to get and set to-do list data
        const fetch = async () =>{
            const response = await getTasks(id);
            if (response.success) {
                setData(response.data);
            } else {
                toast.error("Error in  fetching list!", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000,
                    closeOnClick: true,
                    theme: "dark",
                    draggable: false
                })
            }
            setIsLoading(false);
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

                </main>
        </>
    );
}

// exporting components
export default Home;