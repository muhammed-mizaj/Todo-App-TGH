const mongoose = require('mongoose')
const TodoSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        title:{
            type:String,
            required:true
        },
        priority:{
            type:Number,
            default:1
        },
        is_finished:{
            type:Boolean,
            default:false
        },
        is_cancelled:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("Todo",TodoSchema)