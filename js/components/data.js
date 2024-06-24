export const getAsks = async() => {
    let data = fetch ("https://667846bd0bd45250561e1d21.mockapi.io/task")
    return data;
}     
export const geTaskId = async(id) => {
    let data = fetch (`https://667846bd0bd45250561e1d21.mockapi.io/task/${id}`)
    return data;
}