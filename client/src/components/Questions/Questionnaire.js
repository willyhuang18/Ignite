import React from 'react';

export default function Questionnaire() {
    return (
        <>
            <div className="questionnaire">
                <div className="title">
                    Discover Your Love Type
                </div>

                <div id="question" className="question">
                    It means the MOST to me when my partner...
                </div>
                <label className="option">
                    <input type="radio" name="option" value="physicalTouchAnswer" />
                    <span className="option1">
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="qualityTimeAnswer" />
                    <span className="option2">
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="actsOfServiceAnswer" />
                    <span className="option3">
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="wordsOfAffirmationAnswer" />
                    <span className="option4">
                    </span>
                </label>
                <label className="option">
                    <input type="radio" name="option" value="giftsAnswer" />
                    <span className="option5">
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
}
