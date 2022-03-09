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
        },

    },
    // Mongoose supports transforming Objects after querying MongoDb: toJSON 
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    {
        toJSON: {
            virtuals: true,
            getters: true,
          },
          id: false,
    }
);
// |--- To Be disccussed but the idea is open ----|
// partnerGoalsSchema
// .virtual('GoalCounter')
// //getter
// .get()
