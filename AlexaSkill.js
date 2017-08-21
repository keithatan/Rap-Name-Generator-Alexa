/**
 * This is a simple skill built with the Amazon Alexa Skill's nodejs skill development kit.
 * This skill generates a rap name.
 * Created by Keith Tan
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FIRST: [
                'Bad ',
                'Suga ',
                'Sir ',
                'Lil ',
                'Big ',
                'Master ',
                'ASAP ',
                'Kid ',
                'DJ ',
                'King ',
                'Wu ',
                'Fresh ',
                'Monster ',
                'Professor ',
                'Doctor ',
                'Crazy ',
                'Grandmaster ',
                'Captain ',
                'Cool ',
                'Slim ',
                'Goofy ',
                'Young ',
                'Murderous ',
            ],
            SECOND: [
                'Cruiser',
                'Jae',
                'Jackson',
                'Goon',
                'Convict',
                'General',
                'Goblin',
                'Kreme',
                'Crook',
                'the Rapper',
                'Bougie',
                'Killa',
                'Sterling',
                'Bone',
                'Dog',
                'Twist',
                'Fingers',
                'Beats',
                'Thrilla',
                'Rocky',
                'Boss',
                'Balla',
                'Tank',
                'Mac',
                'Flex',
                'Funk',
                'Assassin',
                'Wolf',
                'Wolfgang',
                'Tiger',
                'Masta',
                'Russel',
                'Fool',
                'Janitor',
            ],
            SKILL_NAME: 'Rap Name Generator',
            GET_NAME_MESSAGE: "Here's your rap name: ",
            HELP_MESSAGE: 'You can say give me a rap name, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
                    FIRST: [
                'Bad ',
                'Suga ',
                'Sir ',
                'Lil ',
                'Big ',
                'Master ',
                'ASAP ',
                'Kid ',
                'DJ ',
                'King ',
                'Wu ',
                'Fresh ',
                'Monster ',
                'Professor ',
                'Doctor ',
                'Crazy ',
                'Grandmaster ',
                'Captain ',
                'Cool ',
                'Slim ',
                'Goofy ',
                'Young ',
                'Murderous ',
            ],
            SECOND: [
                'Cruiser',
                'Jae',
                'Jackson',
                'Goon',
                'Convict',
                'General',
                'Goblin',
                'Kreme',
                'Crook',
                'the Rapper',
                'Bougie',
                'Killa',
                'Sterling',
                'Bone',
                'Dog',
                'Twist',
                'Fingers',
                'Beats',
                'Thrilla',
                'Rocky',
                'Boss',
                'Balla',
                'Tank',
                'Mac',
                'Flex',
                'Funk',
                'Assassin',
                'Wolf',
                'Wolfgang',
                'Tiger',
                'Masta',
                'Russel',
                'Fool',
                'Janitor',
            ],
            SKILL_NAME: 'Rap Name Generator',
        },
    },
    'en-GB': {
        translation: {
                    FIRST: [
                'Bad ',
                'Suga ',
                'Sir ',
                'Lil ',
                'Big ',
                'Master ',
                'ASAP ',
                'Kid ',
                'DJ ',
                'King ',
                'Wu ',
                'Fresh ',
                'Monster ',
                'Professor ',
                'Doctor ',
                'Crazy ',
                'Grandmaster ',
                'Captain ',
                'Cool ',
                'Slim ',
                'Goofy ',
                'Young ',
                'Murderous ',
            ],
            SECOND: [
                'Cruiser',
                'Jae',
                'Jackson',
                'Goon',
                'Convict',
                'General',
                'Goblin',
                'Kreme',
                'Crook',
                'the Rapper',
                'Bougie',
                'Killa',
                'Sterling',
                'Bone',
                'Dog',
                'Twist',
                'Fingers',
                'Beats',
                'Thrilla',
                'Rocky',
                'Boss',
                'Balla',
                'Tank',
                'Mac',
                'Flex',
                'Funk',
                'Assassin',
                'Wolf',
                'Wolfgang',
                'Tiger',
                'Masta',
                'Russel',
                'Fool',
                'Janitor',
            ],
            SKILL_NAME: 'Rap Name Generator',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetName');
    },
    'rapName': function () {
        this.emit('GetName');
    },
    'GetName': function () {
        // Generates a random rap name
        // Use this.t() to get corresponding language data
        const firstArr = this.t('FIRST');
        const secondArr = this.t('SECOND');
        const firstIndex = Math.floor(Math.random() * firstArr.length);
        const secondIndex = Math.floor(Math.random() * secondArr.length);
        const yourRapName = firstArr[firstIndex] + secondArr[secondIndex];

        // Create speech output
        const speechOutput = this.t('GET_NAME_MESSAGE') + yourRapName;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), yourRapName);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};