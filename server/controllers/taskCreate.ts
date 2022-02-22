import { Request,Response } from "express"
import jsonResponse from "../helpers/jsonResponse";
import data from "../helpers/data";
import Task from '../models/Task'

export default async (request :Request, response :Response): Promise<any> => {
    try {
        const params = {
            title: request.body.title,
            description: request.body.description
        }
    
        if (!params.title || !params.description) {
            response.json(jsonResponse(
                data.status.error,
                data.message.requireParams,
                []
            ))
            
            return
        }

        const newTask = new Task(params);
        const savedTask = await newTask.save();

        response.json(jsonResponse(
            data.status.success,
            data.message.createSuccess,
            savedTask
        ))
    } catch (error) {
        response.json(jsonResponse(
            data.status.error,
            data.message.errorMessage,
            []
        ))
    }
}