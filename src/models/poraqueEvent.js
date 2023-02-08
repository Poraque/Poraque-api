import {model, Schema} from 'mongoose'

const poraque_event = model('poraque_event', new Schema({
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
        required: false
    },
    event_start_date:{
        type:Date,
        required:false
    },
    event_end_date:{
        type:Date,
        required:false
    },
    event_views:{
        type:Number,
        required:false
    },
    event_stars:{
        type:Number,
        required:true
    },
    event_local:{
        type:String,
        required:true
    },
    event_type:{
        type:String,
        required:true
    }
},
{ collection : 'poraque_event' }
))

export {poraque_event}