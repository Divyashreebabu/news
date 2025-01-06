const mongoose=require("mongoose");
const SigninSchema = mongoose. Schema ({
    email:String,
    password:String,
});
const SigninModel = mongoose.model("Signin",SigninSchema);
module.exports=SigninModel;