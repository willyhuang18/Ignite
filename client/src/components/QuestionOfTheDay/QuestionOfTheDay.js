import React from 'react';

export default function QuestionOfTheDay() {
    const questions = [
      {
        "question": "If you could go back in time, what time period would you go to?"
      },
      {
        "question": "Describe your perfect morning?"
      },
      {
        "question": "What are three things you love about yourself?"
      },
      {
        "question": "What is something you would love to do as a couple?"
      },
      {
        "question": "What is something your partner did recently that you are grateful for?"
      },
      {
        "question": "What is something on your bucket list?"
      },
      {
        "question": "What do you think works well about our relationship?"
      },
      {
        "question": "Given the choice of anyone in the world, whom would you want as a dinner guest?"
      },
      {
        "question": "Would you like to be famous? If so, in what way?"
      },
      {
        "question": "What would constitute an awesome night for you?"
      },
      {
        "question": "If you could change anything about the way you were raised, what would it be?"
      },
      {
        "question": "What is the greatest accomplishment of your life?"
      },
      {
        "question": "What do you value most in a friendship?"
      },
      {
        "question": "What is your most treasured memory?"
      },
      {
        "question": "What is your most terrible memory?"
      },
      {
        "question": "What is something you would like to do together that we have never done before?"
      },
      {
        "question": "When did you know you were in love with me?"
      },
      {
        "question": "What are three qualities about me that you were first attracted to?"
      },
      {
        "question": "What was your favorite date that we ever had? What made it so special for you?"
      },
      {
        "question": "Do you have a favorite adventure that we took together? What made it your favorite?"
      },
      {
        "question": "What would be the first thing you'd do if you won the lottery?"
      },
      {
        "question": "What is the best gift you have ever received?"
      },
      {
        "question": "What is the worst gift you have ever received, and what did you do about it?"
      },
      {
        "question": "If you could do it all over again, would you pursue the same career? Why or why not?"
      },
      {
        "question": "How do you de-stress?"
      },
      {
        "question": "What is your favorite holiday?"
      },
      {
        "question": "What is your go-to karaoke song?"
      },
      {
        "question": "What is one of your go-to songs to listen to while driving?"
      },
      {
        "question": "Which Hogwarts house would you be in and why?"
      },
      {
        "question": "Do you think it is ok to pee in the shower?"
      },
      {
        "question": "What is the most illegal or risky thing you did growing up?"
      },
      {
        "question": "What is one thing that would make your day better right now?"
      },
      {
        "question": "What was your first impression of me?"
      },
      {
        "question": "what is the best decision you made this past year?"
      },
      {
        "question": "What is a fact about you that nobody would guess?"
      },
      {
        "question": "What fashion trend did you once love, but makes you cringe now?"
      },
      {
        "question": "What is something that everyone else seems to love - that you do not understand?"
      },
      {
        "question": "What is the best piece of advice you have ever received?"
      },
      {
        "question": "If you could instantly learn any skill, what would it be?"
      },
      {
        "question": "If you were an Olympic athlete, what would be your sport?"
      },
      {
        "question": "What year of your life has been your favorite so far?"
      },
      {
        "question": "What is one thing you want to do with your family?"
      },
      {
        "question": "What would you name your boat if you owned one?"
      },
      {
        "question": "You can have an unlimited supply of one thing for the rest of your life, what is it?"
      },
      {
        "question": "If you won the lottery but only had one day to spend the money, what would you buy?"
      },
      {
        "question": "What do you remember thinking to yourself the first time you saw me?"
      }
    ]

    const randomNum = Math.floor(Math.random() * questions.length);
    console.log('randomNum: ', randomNum);
  
    const randomQuestion = questions[randomNum].question;
    console.log('randomQuestion: ', randomQuestion);

    return (
        <>
           {randomQuestion}
        </>
        
    )
}