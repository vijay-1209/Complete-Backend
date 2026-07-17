import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema(
    {
        username:{
            type: String,
            unique: true,
            lowercase: true,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String, // encrypted
            required: true
        },
        avatar:{
            type: String, // cloudinary url 
            required: true
        },
        coverImage:{
            type: String, // cloudinary url
            required: true
        },
        fullName:{
            type: String,
            required: true
        },
        watchHistory:[{
            type: Schema.Types.ObjectId,
            ref: "Video"
        }],
        refreshToken:{
            type: String,
        }
    },
    {timestamps: true}
)

export const user = mongoose.model("User", userSchema)