import React from 'react';
// import $ from 'jquery'
import './Questionnaire.css'


export default function Questionnaire(props) {
// create a variable for each love type
// display & iterate through each question
// if the user selects option1, sum 1 to PT variable, etc.
// At the end, the category with the most points will be chosen as the users love type
// If there is a tie, use math.random

    return (
        <>
        {/* {props}.forEach(function displayQuestion() { */}
            <div className="questionnaire">
                <div className="title">
                    Discover Your Love Type
                </div>

                <div id="question" className="question">
                    It means the MOST to me when my partner...
                    {/* Its most meaningful when my partner ... */}
                </div>
                <label className="option">
                    <input type="radio" name="option" value="physicalTouchAnswer" />
                    <span className="option1">
                        {props.physicalTouchAnswer}
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="qualityTimeAnswer" />
                    <span className="option2">
                        {props.qualityTimeAnswer}
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="actsOfServiceAnswer" />
                    <span className="option3">
                        {props.actsOfServiceAnswer}
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="wordsOfAffirmationAnswer" />
                    <span className="option4">
                        {props.wordsOfAffirmationAnswer}
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="giftsAnswer" />
                    <span className="option5">
                        {props.giftsAnswer}
                    </span>
                </label>
                {/* Buttons */}
                <div className="controls">
                    <button className="previous">Previous</button>
                    <button className="next">Next</button>
                </div>
            </div>

            <div className="result"> </div>
            
        </>
    )
    // )};
}
