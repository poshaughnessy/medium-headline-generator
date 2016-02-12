import {chooseOneAtRandom} from './utils';

/**
 * More headline styles coming soon!
 */
const HEADLINE_STYLES = {
  FORCED_CULTURAL_REFERENCE: 'FORCED_CULTURAL_REFERENCE'
  //QTWTAIN: 'QTWTAIN',
  //THIS_IS_WHAT_HAPPENS: 'THIS_IS_WHAT_HAPPENS',
  //AND_WHY_IT_MATTERS: 'AND_WHY_IT_MATTERS',
  //WHY_YOURE_WRONG_ABOUT: 'WHY_YOURE_WRONG_ABOUT'
};

const SHORT_PITHY_QUOTES = [
  'Survival is Success',
  'Go Big Or Go Home',
  'What If You Weren\'t Afraid?',
  'Fail Fast',
  'Success Is Built On Failure',
  'Risking Nothing Risks Everything',
  'To Dare Is To Do',
  'Innovate Or Die',
  'If You Change Nothing, Nothing Will Change',
  'Don\'t Dream Of Success. Work For It.'
];

const TRENDY_CULTURAL_REFERENES = [
  'The Martian',
  'The Big Short',
  'Deadpool',
  'Batman v Superman Dawn of Justice',
  'Zoolander 2',
  'Star Trek Beyond',
  'The New Indepenedence Day Movie',
  'The New Jason Bourne Movie'
];

const BUSINESS_BUZZ_WORDS = [
  'Entrepreneurship',
  'Innovation',
  'Leadership',
  'Startups',
  'Industry Disruption'
];

export function generateHeadline() {

  const headlineStyle = chooseOneAtRandom(HEADLINE_STYLES);

  switch (headlineStyle) {

    /**
     * $shortPithyQuote: What $trendyCulturalReference Teaches Us About $businessBuzzWord
     */
    case HEADLINE_STYLES.FORCED_CULTURAL_REFERENCE:

      const shortPithyQuote = chooseOneAtRandom(SHORT_PITHY_QUOTES);
      const trendyCulturalReference = chooseOneAtRandom(TRENDY_CULTURAL_REFERENES);
      const businessBuzzWord = chooseOneAtRandom(BUSINESS_BUZZ_WORDS);

      return `${shortPithyQuote}: What ${trendyCulturalReference} Teaches Us About ${businessBuzzWord}`;

  }

}