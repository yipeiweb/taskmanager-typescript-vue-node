import { connect } from "mongoose"

export const startConnection =  async () => {
    try{
        const db = await connect('mongodb://127.0.0.1:27017/taskmanager-mevn-ts')
        console.log('connect in database: '+db.connection.name)
    }catch(error) {
        console.log('mongo error message: '+error)
    }
}

