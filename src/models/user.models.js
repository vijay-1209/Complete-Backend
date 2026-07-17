import mongoose, {Schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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


userSchema.pre("save", async function (next){
    //check if password is change then only encrypt the password
    if(!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)
    next()
})


userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)}


export const user = mongoose.model("User", userSchema)