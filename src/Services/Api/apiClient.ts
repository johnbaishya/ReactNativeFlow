import axios, { AxiosResponse } from "axios"
import ApiUri from "../../Constants/uriConstants"

export const getApiRequest = (uri:string)=>{
    return new Promise<AxiosResponse>((resolve, reject) => {
        axios.get(ApiUri.ApiUri+uri)
        .then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err);
            console.log(err);
            if(err.response){
                console.log(err.response);
            }
        })
    })
}


export const postApiRequest = (uri:string,body:Object)=>{
    return new Promise<AxiosResponse>((resolve, reject) => {
        axios.post(ApiUri.ApiUri+uri,body)
        .then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
            console.log(err);
            if(err.response){
                console.log(err.response);
            }
        })
    })
}


export const putApiRequest = (uri:string,body:Object)=>{
    return new Promise<AxiosResponse>((resolve, reject) => {
        axios.put(ApiUri.ApiUri+uri,body)
        .then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
            console.log(err);
            if(err.response){
                console.log(err.response);
            }
        })
    })
}


export const deleteApiRequest = (uri:string)=>{
    return new Promise<AxiosResponse>((resolve, reject) => {
        axios.delete(ApiUri.ApiUri+uri)
        .then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err);
            console.log(err);
            if(err.response){
                console.log(err.response);
            }
        })
    })
}