import {MethodType, request} from "./promise";


const basicUrl = "http://localhost:8080/";

export const todoList = async () => {
    return await request(basicUrl, MethodType.GET)
}

export const updateTodo = async (id, body) => {
    let requestBody = JSON.stringify(body)
    return await request(basicUrl + "/" + id, MethodType.PUT, requestBody)
}

export const addTodo = async (body) => {
    let requestBody = JSON.stringify(body)
    return await request(basicUrl, MethodType.POST, requestBody)
}

export const deleteTodo = async (id) => {
    return await request(basicUrl + "/" + id, MethodType.DELETE)
}