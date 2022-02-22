type JsonResponse = {
    status :string, 
    message :string, 
    data :Array<any>
}

export default (
    status :string, 
    message :string, 
    data :Array<any>
) :JsonResponse => {
    return {
        "status": status,
        "message": message,
        "data": data
    }
}