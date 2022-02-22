import { Request,Response } from "express"
import jsonResponse from "../helpers/jsonResponse";
import data from "../helpers/data";
import Task from '../models/Task'

export default async (request :Request, response :Response): Promise<any> => {
    try {
        const id = request.params.id;
        const params = {
            title: request.body.title,
            description: request.body.description
        }
    
        if (!id || !params.title || !params.description) {
            response.json(jsonResponse(
                data.status.error,
                data.message.requireParams,
                []
            ))
            
            return
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id, params, 
            {new: true});

        response.json(jsonResponse(
            data.status.success,
            data.message.createSuccess,
            updatedTask
        ))
    } catch (error) {
        response.json(jsonResponse(
            data.status.error,
            data.message.errorMessage,
            []
        ))
    }
}