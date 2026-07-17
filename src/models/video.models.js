import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required: true
        },
        thumbnail:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true,
            lowercase: true
        },
        description:{
            type: true,
            required: true,
            lowercase: true
        },
        duration:{
            type: Number
        },
        views:{
            type: Number
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        isPublished:{
            type: Boolean
        }
    },
    {timestamps: true}
)

export const Video = mongoose.model("Video", videoSchema)