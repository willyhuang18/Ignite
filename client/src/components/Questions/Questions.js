
//  question: 'It means the MOST to me if my partner...'
// Which of the following scenarios would make you feel the best?
// It's most meaningful when my partner ...

// (for each) and display an index for question 1.
// ex question 1's answers: loveTypeAnswers.physicalTouch[i]
// {loveTypeAnswers.qualityTime[i]}
// {loveTypeAnswers.actsOfService[i]}
// {loveTypeAnswers.wordsOfAffirmation[i]}
// {loveTypeAnswers.gifts[i]}

const loveTypeQuestions = [
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

// const loveTypeAnswers = [
//     {
//         physicalTouch: [
            // 'pulls me close and cuddles me while we watch a movie',
            // 'greets me with a long hug',
            // 'grabs my hand during a walk',
            // 'gives me a massage as I get ready for bed',
            // 'plays with my hair',
            // 'rested their head on my lap',
            // 'holds on to me while we walk together',
            // 'rests their hand on mine while we drive'
    //     ]
    // },
    // {
        // qualityTime: [
            // 'and I spend a weekend alone in a cabin',
            // 'sits near me while I finish up work',
            // 'plans a device free evening for us',
            // 'and I start a new tv series together',
            // 'buys ingredients so we can cook a meal together',
            // 'goes volunteering with me',
            // 'tried out a hobby that I love',
            // 'exercised with me'
    //     ]
    // },
    // {
    //     actsOfService: [
            // 'completes a task for me that I have been dreading for weeks',
            // 'cooks me dinner after a busy day',
            // 'wakes me up with breakfast in bed',
            // 'shows up to my job with a cup of my favorite coffee',
            // 'plans a date night for us',
            // 'takes care of my every need while I lay in bed sick',
            // 'tossed my towel in the dryer while I showered so I have a warm towel to use when I exit',
            // 'meal prepped all of our meals for the week'
    //     ]

    // },
    // {
    //     wordsOfAffirmation: [
            // 'leaves me a thoughtful note in my bag',
            // 'reminds me they are thinking of me in the middle of the day',
            // 'leaves a loving sticky note on my bathroom mirror',
            // 'speaks highly of me when introducing me to new friends',
            // 'told me how good looking I was on an average day',
            // 'asks me to help with mundane tasks because they feel everything is more fun when they are with me',
            // 'tells me the things they admire about me',
            // 'tells me why they appreciate me'
    //     ]
    // },
    // {
    //     gifts: [
            // 'surprises me with an item I had mentioned I wanted weeks ago',
            // 'buys concert tickets to go see my favorite artist',
            // 'gets me a unique drawing of my favorite city',
            // 'brings my cat/dog gourmet treats and toys',
            // 'created a playlist of songs that I might love',
            // 'made me a calendar full of pictures of our favorite memories',
            // 'gave me an inspirational poster to hang in my new office',
            // 'bought me new shoes after I shared that I wanted to start running'
//         ]
//     },
// ]