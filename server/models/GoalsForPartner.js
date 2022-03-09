// importing mongoose
const { Schema, Types } = require("mongoose");

// Schema for Partner Goals
const partnerGoalsSchema = new Schema(
    // properties
    {
        goalTitle:{
            type: String,
            required: true,
            minlength: 2,
            maxlength: 100,
        },
        userRef:{
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    }
);