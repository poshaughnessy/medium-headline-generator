import {generateHeadline} from './headlineGenerator';

const headline = generateHeadline();

const headlineElement = document.getElementById('headline');
headlineElement.innerHTML = headline;

const tweetButton = document.getElementById('tweetButton');
tweetButton.href = `http://twitter.com/home?status=${encodeURIComponent(headline)} http://medium-headline-generator.herokuapp.com`;
