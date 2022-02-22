import { Request,Response } from "express"
import jsonResponse from "../helpers/jsonResponse";
import data from "../helpers/data";
import Task from '../models/Task'

export default async (request :Request, response :Response): Promise<any> => {
    try {
        const id = request.params.id;
    
        if (!id) {
            response.json(jsonResponse(
                data.status.error,
                data.message.requireParams,
                []
            ))
            
            return
        }

        const task = await Task.findById(id);

        response.json(jsonResponse(
            data.status.success,
            data.message.createSuccess,
            task
        ))
    } catch (error) {
        response.json(jsonResponse(
            data.status.error,
            data.message.errorMessage,
            []
        ))
    }
}