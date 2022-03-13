import React, { useState } from 'react';
import $ from 'jquery'
import './Questionnaire.css'


export default function Questionnaire() {
    const [selectedQuestion, setSelectedQuestion] = useState(0);

    const questions = [
        {
            'physicalTouchAnswer': 'pulls me close and cuddles me while we watch a movie',
            'qualityTimeAnswer': 'and I spend a weekend alone in a cabin',
            'actsOfServiceAnswer': 'completes a task for me that I have been dreading for weeks',
            'wordsOfAffirmationAnswer': 'leaves me a thoughtful note in my bag',
            'giftsAnswer': 'surprises me with an item I had mentioned I wanted weeks ago'
        },
        {
            'physicalTouchAnswer': 'greets me with a long hug',
            'qualityTimeAnswer': 'sits near me while I finish up work',
            'actsOfServiceAnswer': 'cooks me dinner after a busy day',
            'wordsOfAffirmationAnswer': 'reminds me they are thinking of me in the middle of the day',
            'giftsAnswer': 'buys concert tickets to go see my favorite artist'
        },
        {
            'physicalTouchAnswer': 'grabs my hand during a walk',
            'qualityTimeAnswer': 'plans a device free evening for us',
            'actsOfServiceAnswer': 'wakes me up with breakfast in bed',
            'wordsOfAffirmationAnswer': 'leaves a loving sticky note on my bathroom mirror',
            'giftsAnswer': 'gets me a unique drawing of my favorite city'
        },
        {
            'physicalTouchAnswer': 'gives me a massage as I get ready for bed',
            'qualityTimeAnswer': 'and I start a new tv series together',
            'actsOfServiceAnswer': 'shows up to my job with a cup of my favorite coffee',
            'wordsOfAffirmationAnswer': 'speaks highly of me when introducing me to new friends',
            'giftsAnswer': 'brings my cat/dog gourmet treats and toys'
        },
        {
            'physicalTouchAnswer': 'plays with my hair',
            'qualityTimeAnswer': 'buys ingredients so we can cook a meal together',
            'actsOfServiceAnswer': 'plans a date night for us',
            'wordsOfAffirmationAnswer': 'told me how good looking I was on an average day',
            'giftsAnswer': 'creates a playlist of songs that I might love'
        },
        {
            'physicalTouchAnswer': 'rested their head on my lap',
            'qualityTimeAnswer': 'goes volunteering with me',
            'actsOfServiceAnswer': 'takes care of my every need while I lay in bed sick',
            'wordsOfAffirmationAnswer': 'asks me to help with mundane tasks because they feel everything is more fun when they are with me',
            'giftsAnswer': 'makes me a calendar full of pictures of our favorite memories together'
        },
        {
            'physicalTouchAnswer': 'holds on to me while we walk together',
            'qualityTimeAnswer': 'tried out a hobby that I love',
            'actsOfServiceAnswer': 'tossed my towel in the dryer while I showered so I have a warm towel to use when I exit',
            'wordsOfAffirmationAnswer': 'tells me the things they admire about me',
            'giftsAnswer': 'gave me an inspirational poster to hang in my new office'
        },
        {
            'physicalTouchAnswer': 'rests their hand on mine while we drive',
            'qualityTimeAnswer': 'exercised with me',
            'actsOfServiceAnswer': 'meal prepped all of our meals for the week',
            'wordsOfAffirmationAnswer': 'tells me why they appreciate me',
            'giftsAnswer': 'bought me new shoes after I shared that I wanted to start running'
        }
    ]

    let physicalTouch = 0;
    let qualityTime = 0;
    let actsOfService = 0;
    let wordsOfAffirmation = 0;
    let gifts = 0;

        // create a variable for each love type
    // When the user clicks on an answer, the associated love language sum will increase by 1
    // At the end, the category with the most points will be chosen as the users love type
    // If there is a tie, use math.random


    function nextQuestion(index) {

        // when the user clicks an answer, 1 point will be added to the corresponding love language

        // -------------------------------------------------------------------------------------------------------------------------- 
        // THIS WAY, ONLY PHYSICAL TOUCH INCREMENTS TO 1 AND STAYS AT ONE
        // if ($('.option1').on('click')) {
        //     physicalTouch+= 1
        // }
        // else if ($('.option2').on('click')) { 
        //     qualityTime+=1
        // }
        // else if ($('.option3').on('click')) {
        //     actsOfService+=1
        // }
        // else if ($('.option4').on('click')) {
        //     wordsOfAffirmation+=1
        // }
        // else {
        //     gifts+=1
        // }
        // -------------------------------------------------------------------------------------------------------------------------- 


        // -------------------------------------------------------------------------------------------------------------------------- 
        // THIS WAY EVERYTHING SHOWS UP AS 0  
        // $('.option1').on('click', function(){
        //     physicalTouch += 1
        // });
        // $('.option1').on('click', function(){
        //     qualityTime += 1
        // });
        // $('.option1').on('click', function(){
        //     actsOfService += 1
        // });
        // $('.option1').on('click', function(){
        //     wordsOfAffirmation += 1
        // });
        // $('.option1').on('click', function(){
        //     gifts += 1
        // });
        // -------------------------------------------------------------------------------------------------------------------------- 

        // -------------------------------------------------------------------------------------------------------------------------- 
        // This way, everything changes to 1 (even though it's not the proper syntax.)
        // $('.option1').on('click', physicalTouch++)
        // $('.option2').on('click',qualityTime++)
        // $('.option3').on('click',actsOfService++)
        // $('.option4').on('click',wordsOfAffirmation++)
        // $('.option5').on('click',gifts++)
        // -------------------------------------------------------------------------------------------------------------------------- 

        console.log('physical touch equals');
        console.log(physicalTouch)

        console.log('quality time equals');
        console.log(qualityTime)

        console.log('acts of service equals');
        console.log(actsOfService)

        console.log('words equals');
        console.log(wordsOfAffirmation)

        console.log('gifts equals');
        console.log(gifts)

        // setSelectedQuestion(selectedQuestion + 1);
        // if the user is on the last question display the 'submit' button
    //     if (index === [7]) {
    //         $('.submit').style.display = 'block';
    //     }
    // }

    // When the submit button is clicked, display the result
    // function submitQuestionnaire() {

    // }

    return (
        <>
            <div className="questionnaire">
                <div className="questionTitle text-center">
                    <strong>
                        It's MOST meaningful when my partner...
                    </strong>
                </div>
                <br />

                {/* QUESTIONNAIRE BEGINS */}
                {questions.map((question, index) => {
                    if (index === selectedQuestion) {
                        return (
                            <>
                                <div class="allAnswers">
                                    <button onClick={nextQuestion} type="radio" className="my-3 option1" value="physicalTouchAnswer">
                                        <p>
                                            {question.physicalTouchAnswer}
                                        </p>
                                    </button>

                                    <button onClick={nextQuestion} type="radio" className="my-3 option2" value="qualityTimeAnswer">
                                        <p>
                                            {question.qualityTimeAnswer}
                                        </p>
                                    </button>

                                    <button onClick={nextQuestion} type="radio" name="my-3 option3" value="actsOfServiceAnswer">
                                        <p>
                                            {question.actsOfServiceAnswer}
                                        </p>
                                    </button>

                                    <button onClick={nextQuestion} type="radio" name="my-3 option4" value="wordsOfAffirmationAnswer">
                                        <p>
                                            {question.wordsOfAffirmationAnswer}
                                        </p>
                                    </button>

                                    <button onClick={nextQuestion} type="radio" name="my-3 option5" value="giftsAnswer">
                                        <p>
                                            {question.giftsAnswer}
                                        </p>
                                    </button>
                                </div>
                                <br />
                            </>
                        )
                    }
                })}

                {/* Buttons */}
                <div className="controls mt-5">
                    <button className="submit">Submit</button>
                    {/* onClick={submitQuestionnaire} */}
                </div>
            </div>

            <div className="result"> </div>

        </>
    )
    // )};
}
