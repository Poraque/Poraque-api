import {model, Schema} from 'mongoose'

export const poraque_event = model('poraque_event', new Schema({
    event_title:{
        type: String,
        required:true
    },
    event_description:{
        type: String,
        required:true
    },
    event_img:{
        data:Buffer,
        contentType: String,
        required: true
    },
    event_working_days:{
        type:String,
        required:false
    },
    event_views:{
        type:Number,
        required:false
    }

}))

export {poraque_event}