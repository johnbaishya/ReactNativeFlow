import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageKey } from '../Types/localStorage';


// to store the data to asyncStorage
export const storeLocalData = async(key:LocalStorageKey,value:Object)=>{
    try {
        const stringData = JSON.stringify(value);
        await AsyncStorage.setItem(key,stringData);
    } catch (error) {
        console.log('error from storeDataToLocal',error);
    }
};


// to ertrieve data from asyncStorage
export const getLocalData = (key:LocalStorageKey)=>{
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key)
        .then(data=>{
            let newData = null;
            if(data){
                newData = JSON.parse(data);
            }
            resolve(newData);
        })
        .catch(err=>{
            reject(err);
        });
    });
};

export const removeLocalData  = async(keys:LocalStorageKey[])=>{
    try {
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.log('error from remove localData',error);
    }
};
