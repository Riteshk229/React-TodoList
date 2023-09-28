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
    const response = await axios.get(`${API_Root}/users/${userID}/todos`)
        .then((response) => {
            return response.data;
        })
    
    return {
            success: true,
            data : response
    }

}

// Adding Task to database using POST Method
export const addTask = async (task) => {
    return await axios.post(`${API_Root}/todos/`, { ...task })
    .then((response) => {
        return {
            success: true,
            data: response.data
        }    
    })
}

// Updating Task on database using PUT method
export const updateTask = async (editedtask) => {
    const response  = await axios.put(`${API_Root}/todos/${editedtask.id}`, {...editedtask})
        .then((response) => {
            return {
                success: true,
                data: response.data
            }
        }).catch((err) => {
            if (err.toJSON().status === 500) {
                return {
                    success: true,
                    data :  editedtask
                }
            }
            else {
                return {
                    success: false,
                    data :  err.message
                }
            }
        })
    return response;
}

// Deleting task in database using DELETE method
export const deleteTask = async (userID) => {
    return await axios.delete(`${API_Root}/todos/${userID}`);
}