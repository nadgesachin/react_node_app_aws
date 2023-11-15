import { cloudinary } from "../config/cloudinaryConfig.config"


export const uploadImageToCloudinary=(fileBuffer)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({
            resource_type:'auto'
        },
        (error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result.url);
            }
        }
        ).end(fileBuffer);
    })
}