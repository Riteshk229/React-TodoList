const API_Root = "https://jsonplaceholder.typicode.com";

export const setUserID = () => {
    return Math.ceil(Math.random() * 9);
}

export const getTasks = async(userID) => {
    return await fetch(`${API_Root}/users/${userID}/todos`)
        .then((response) => response.json())
        .then((data) => {
            // console.log("data in fetch", data);
            return data;
        });
}