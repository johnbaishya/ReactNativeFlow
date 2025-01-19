import { AxiosResponse } from "axios"
import ApiUri from "../../Constants/uriConstants"
import { LoginReqBody, RegisterReqBody } from "../../Types/apiReqBodyType"
import { postApiRequest } from "./apiClient"

export const loginApi = (body:LoginReqBody)=>{
    return new Promise<AxiosResponse>((resolve, reject) => {
       postApiRequest(ApiUri.login,body)
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        });
    });
};

export const registerApi = (body:RegisterReqBody)=>{
    return new Promise<AxiosResponse>((resolve, reject) => {
        postApiRequest(ApiUri.register,body)
         .then(res=>{
             resolve(res);
         })
         .catch(err=>{
             reject(err);
         });
     });
};
