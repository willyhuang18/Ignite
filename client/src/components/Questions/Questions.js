
//  question1: 'It means the MOST to me if my partner...'

// (for each) and display an index for question 1.
// ex question 1's answers: loveTypeAnswers.physicalTouch[i]
// {loveTypeAnswers.qualityTime[i]}
// {loveTypeAnswers.actsOfService[i]}
// {loveTypeAnswers.wordsOfAffirmation[i]}
// {loveTypeAnswers.gifts[i]}
const loveTypeQuestions = [
    {
        'physical touch': 'pulls me close and cuddles me while we watch a movie',
        'quality time': 'and I spend a weekend alone in a cabin',
        'acts of service': 'completes a task for me that I have been dreading for weeks',
        'words of affirmation': 'leaves me a thoughtful note in my bag',
        'gifts': 'surprises me with an item I had mentioned I wanted weeks ago'
    },
    {
        'physical touch': 'greets me with a long hug',
        'quality time': 'sits near me while I finish up work',
        'acts of service': 'cooks me dinner after a busy day',
        'words of affirmation': 'reminds me they are thinking of me in the middle of the day',
        'gifts': 'buys concert tickets to go see my favorite artist'
    },
    {
        'physical touch': 'grabs my hand during a walk',
        'quality time': 'plans a device free evening for us',
        'acts of service': 'wakes me up with breakfast in bed',
        'words of affirmation': 'leaves a loving sticky note on my bathroom mirror',
        'gifts': 'gets me a unique drawing of my favorite city'
    },
    {
        'physical touch': 'gives me a massage as I get ready for bed',
        'quality time': 'and I start a new tv series together',
        'acts of service': 'shows up to my job with a cup of my favorite coffee',
        'words of affirmation': 'speaks highly of me when introducing me to new friends',
        'gifts': 'brings my cat/dog gourmet treats and toys'
    },
    {
        'physical touch': 'plays with my hair',
        'quality time': 'buys ingredients so we can cook a meal together',
        'acts of service': 'plans a date night for us',
        'words of affirmation': 'told me how good looking I was on an average day',
        'gifts': 'creates a playlist of songs that I might love'
    },
    {
        'physical touch': 'rested their head on my lap',
        'quality time': 'goes volunteering with me',
        'acts of service': 'takes care of my every need while I lay in bed sick',
        'words of affirmation': 'asks me to help with mundane tasks because they feel everything is more fun when they are with me',
        'gifts': 'makes me a calendar full of pictures of our favorite memories together'
    },
    {
        'physical touch': 'holds on to me while we walk together',
        'quality time': 'tried out a hobby that I love',
        'acts of service': 'tossed my towel in the dryer while I showered so I have a warm towel to use when I exit',
        'words of affirmation': 'tells me the things they admire about me',
        'gifts': 'gave me an inspirational poster to hang in my new office'
    },
    {
        'physical touch': 'rests their hand on mine while we drive',
        'quality time': 'exercised with me',
        'acts of service': 'meal prepped all of our meals for the week',
        'words of affirmation': 'tells me why they appreciate me',
        'gifts': 'bought me new shoes after I shared that I wanted to start running'
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