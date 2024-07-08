export const getAsks = async() => {
    let data = fetch ("https://6674179975872d0e0a950e53.mockapi.io/todoList")
    return data;
}     
export const geTaskId = async(id) => {
    let data = fetch (`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`)
    return data;
}