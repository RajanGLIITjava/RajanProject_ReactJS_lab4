import axios from "axios"
import IdataList from "../models/IDataList"

const getDataFromServer =() =>{
    return axios.get<IdataList[]>('http://localhost:3000/items')
    .then(res =>res.data)
}

const pushDataToServer = (data:Omit<IdataList, 'id'>) =>{
    return axios.post<IdataList>('http://localhost:3000/items', data,
    {
        headers:{
            'Content-Type':'application/json'
        }
    }
).then(res =>res.data)
}

export{
    getDataFromServer, pushDataToServer
}
