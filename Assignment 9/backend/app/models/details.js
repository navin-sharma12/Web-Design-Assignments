import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator';

const detailsSchema = new mongoose.Schema({
    detailsid: Number,

    fullname: {
        type: String,
        required: [true, "fullName is required"],
        unique: [true, "fullName already exists in the database"],
        validate: [
        (username) => validator.isAlpha(username, "en-US", { ignore: " " }),
        "Usernames must be alphanumeric"],
    },

    emailid: {
        type: String,
        require: [true, "email address is required."],
        unique: [true, "That email address is already taken."],
        lowercase: true,
        validate: [
            (emailid) => {
                let emptyEmail = validator.isEmail;
                let validEmail = /\w+\.\w+\@northeastern\.edu/.test(emailid);

                return emptyEmail && validEmail;
            },
            "Invalid email id"
        ]
    },

    password: {
        type: String,
        required: [true, "password is required."],
        validate: [
            (password) => {
                let min = password.length >= 8;
                let upper = /[A-Z]/.test(password);
                let lower = /[a-z]/.test(password);
                let special = /[#?!@$%^&*-]/.test(password);
                let number = /[0-9]/.test(password);

                return min && lower && upper && special && number;
            },
            "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one special character and one number",
        ],
    }
});

detailsSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

const Details = mongoose.model('Details', detailsSchema);

export default Details;