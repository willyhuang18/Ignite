// importing mongoose
const { Schema, model } = require("mongoose");

// Schema for Partner Goals
const GoalsForPartnerSchema = new Schema(
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
        // populating subdocument
        loveFilter:{
            type: String,
            required: false,
            maxlength: 50,
        }
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


// Initialize our User model
const GoalsForPartner = model('GoalsForPartner', GoalsForPartnerSchema);

module.exports = GoalsForPartner;