// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userScheme = new mongoose.Schema(
//     {
//         name:{
//             type:String,
//             require: true,
//             trim:true,
//         },
//         email:{
//             tyep:String,
//             require: true,
//             unique: true,
//             trim: true,
//             match: [/.+\@.+\..+/, "Please enter a valid email adress"],
//         },
//         password:{
//             type:String,
//             require: true,
//             minLength:6,
//         },
//         role:{
//             type:String,
//             enum:["customer","admin"],
//             default: "customer",
//         },
//     },
//         {timestamps: true}
// );

// //pass hash middelware

// userScheme.pre("save", async function(next){
//     if(!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password,salt);
//     next();

// });

// //match user eneterd pass to hash passs


// userScheme.methods.matchPassword = async function (eneteredPassword) {
//     return await bcrypt.compare(eneteredPassword, this.password);
// };

// module.exports = mongoose.model("User",userScheme);


const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
    },
    { timestamps: true }
);

// Password hash middleware
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Match entered password to hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
