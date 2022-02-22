import { Response } from "express"
import jsonResponse from "../helpers/jsonResponse";
import data from "../helpers/data";
import Task from '../models/Task'

export default async (response :Response): Promise<any> => {

    try{
        const tasks = await Task.find()
        response.json(jsonResponse(
            data.status.success,
            data.message.createSuccess,
            tasks
        ))
    }catch(error) {
        response.json(jsonResponse(
            data.status.error,
            data.message.errorMessage,
            []
        ))
    }

}