// API Urls
const API_Root = "https://jsonplaceholder.typicode.com";

// importing Axios to perform CRUD operations
import axios from "axios";

// Seting a random UserID
export const setUserID = () => {
    return Math.ceil(Math.random() * 9);
}

// Fetching the data to display using GET method
export const getTasks = async (userID) => {
    return await axios.get(`${API_Root}/users/${userID}/todos`)
        .then((response) => {
        return response.data
        })
    
    // Fetch API
    // return await fetch(`${API_Root}/users/${userID}/todos`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         // console.log("data in fetch", data);
    //         return data;
    //     });
}

// Adding Task to database using POST Method
export const addTask = async (task) => {
    return await axios.post(`${API_Root}/todos/`, { ...task })
    .then((response) => {
        return response.data
        }
    )
}

// Updating Task on database using PUT method
export const updateTask = async (editedtask) => {
    return await axios.put(`${API_Root}/todos/${editedtask.id}`, {...editedtask})
    .then((response) => {
        return response.data
        }
    )
}

// Deleting task in database using DELETE method
export const deleteTask = async (userID) => {
    return await axios.delete(`${API_Root}/todos/${userID}`);
}