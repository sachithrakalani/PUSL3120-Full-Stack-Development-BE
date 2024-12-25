import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        moiveName:{
            type:String,
            required:[true,"Please enter Moive name"]
        },

        moiveDescription:{
            type:String,
            required:[true,"Please enter Moive Description"]
            
        },

        moiveImage:{
            type:String,
            required:[true,"Please enter Moive Image"]
            
        },

        moiveDescription:{
            type:String,
            required:[true,"Please enter Moive Description"]
            
        },

        moiveDescription:{
            type:String,
            required:[true,"Please enter Moive Description"]
            
        }
        
    },

    {
        Timestamp:true
    }
);

const Moives = mongoose.model("Moives", ProductSchema);
module.exports = Moives;