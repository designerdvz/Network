import * as axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b3cafb9b-bf5e-4072-8f8b-250f4ea89ec2"
    }
})

export const userAPI = {
      getUser (currentPage =1 , pageSize = 7) {
        return instance.get(`users?page=
             ${currentPage}&count=${pageSize}`)
            .then(response => {
                return  response.data
            })
    }
}

export const authAPI = {
    authGet () {
        return instance.get(`auth/me`, {
            withCredentials: true })
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    followDelete (id)  {
        return  instance.delete(`follow/${id}` ).then(response => {
            return response.data
        })
    },

    followPost (id)  {
        return   instance.post(`follow/${id}`, {}, )
            .then(response => {
                return response.data
            })
    }


}



