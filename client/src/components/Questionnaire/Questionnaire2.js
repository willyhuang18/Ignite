
import React, { useState } from 'react';
import './Questionnaire.css'

const  Questionnaire2 = ({ setLoveFun }) => {

    
    const [loveLanguage, setLoveLanguage] = useState('')

    const [currentQuestion, setCurrentQuestion] = useState(0)
    setLoveFun(loveLanguage)
    

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


    const handleClick = (index) => {
        setCurrentQuestion(currentQuestion + 1)

        if (index === 1) {
            physicalTouch += 1
        }
        else if (index === 2) {
            qualityTime += 1
        }
        else if (index === 3) {
            actsOfService += 1
        }
        else if (index === 4) {
            wordsOfAffirmation += 1
        }
        else {
            gifts += 1
        }

        if (currentQuestion === questions.length - 1) {
            getLoveLanguage()
        }
    }

    const getLoveLanguage = () => {
        if (physicalTouch > qualityTime && physicalTouch > actsOfService && physicalTouch > wordsOfAffirmation && physicalTouch > gifts) {
            setLoveLanguage('Physical Touch')

            console.log('physicaaaaal');
        } else if (qualityTime > physicalTouch && qualityTime > actsOfService && qualityTime > wordsOfAffirmation && qualityTime > gifts) {
            setLoveLanguage('Quality Time');

            // setLoveLanguage2('Quality Time') 
            console.log('quaaaality');
        } else if (actsOfService > physicalTouch && actsOfService > qualityTime && actsOfService > wordsOfAffirmation && actsOfService > gifts) {
            setLoveLanguage('Acts of Service');
            // setLoveLanguage2('Acts of Service') 
            console.log('serviceeeeeee');
        } else if (wordsOfAffirmation > physicalTouch && wordsOfAffirmation > qualityTime && wordsOfAffirmation > actsOfService && wordsOfAffirmation > gifts) {
            setLoveLanguage('Words of Affirmation');
            // setLoveLanguage2('Words of Affirmation') 

            console.log('wordssssss');
        } else if (gifts > physicalTouch && gifts > qualityTime && gifts > actsOfService && gifts > wordsOfAffirmation) {
            setLoveLanguage('Gifts');
        }

        //console.log(setLoveFun)
        setLoveFun(loveLanguage)
        
    }

    return (
        <div>
            {currentQuestion === questions.length ? (
                <div>
                    <h3> Your Love Language is {loveLanguage}
                    </h3>
                </div>
            ) : (
                <div className="questionnaire">
                    <div className="questionTitle text-center">
                        <strong>
                            It's MOST meaningful when my partner...
                        </strong>
                    </div>
                    <br />
                    <div class="allAnswers">
                        {/* <button type="button" onClick={() => setLoggedIn(!loggedIn)}> */}
                        <button onClick={() => handleClick(1)} type="radio" className="my-3 option1">
                            <p>
                                {questions[currentQuestion].physicalTouchAnswer}
                            </p>
                        </button>

                        <button onClick={() => handleClick(2)} type="radio" className="my-3 option2">
                            <p>
                                {questions[currentQuestion].qualityTimeAnswer}
                            </p>
                        </button>

                        <button onClick={() => handleClick(3)} type="radio" name="my-3 option3">
                            <p>
                                {questions[currentQuestion].actsOfServiceAnswer}
                            </p>
                        </button>

                        <button onClick={() => handleClick(4)} type="radio" name="my-3 option4">
                            <p>
                                {questions[currentQuestion].wordsOfAffirmationAnswer}
                            </p>
                        </button>

                        <button onClick={() => handleClick(5)} type="radio" name="my-3 option5">
                            <p>
                                {questions[currentQuestion].giftsAnswer}
                            </p>
                        </button>
                    </div>




                </div>
            )}
        </div>
    )
}

export default Questionnaire2;