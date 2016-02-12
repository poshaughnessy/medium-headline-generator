import {chooseOneAtRandom} from './utils';

/**
 * More headline styles coming soon!
 */
const HEADLINE_STYLES = {
  FORCED_CULTURAL_REFERENCE: 'FORCED_CULTURAL_REFERENCE',
  WHY_YOURE_WRONG_ABOUT: 'WHY_YOURE_WRONG_ABOUT'
  //AND_WHY_IT_MATTERS: 'AND_WHY_IT_MATTERS'
  //QTWTAIN: 'QTWTAIN',
  //THIS_IS_WHAT_HAPPENS: 'THIS_IS_WHAT_HAPPENS'
};

const SHORT_PITHY_QUOTES = [
  'Survival is Success',
  'Go Big Or Go Home',
  'What If You Weren\'t Afraid?',
  'Fail Fast',
  'Success Is Built On Failure',
  'Risking Nothing Risks Everything',
  'Innovate Or Die',
  'If You Change Nothing, Nothing Will Change',
  'Don\'t Dream Of Success, Work For It',
  'Minimising Risk',
  'Collaborate Or Die'
];

const TRENDY_CULTURAL_REFERENES = [
  'The Martian',
  'The Big Short',
  'Deadpool',
  'Batman v Superman',
  'Zoolander 2',
  'Star Trek Beyond',
  'The New Indepenedence Day Movie',
  'The New Jason Bourne Movie',
  'Justin Bieber',
  'Taylor Swift',
  'Kanye West',
  'The Gravitational Wave Discovery'
];

const BUSINESS_BUZZ_WORDS = [
  'Entrepreneurship',
  'Innovation',
  'Leadership',
  'Startups',
  'Industry Disruption',
  'Lean Startup',
  'Agile Software Development'
];

const CONTENTIOUS_THEMES = [
  'The Death of Twitter',
  'The Impending Robot Apocalypse',
  'Google\'s Tax Policy',
  'Silicon Valley Excess',
  'Donald Trump',
  'The Death of Privacy'
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

    /**
     * Why You're Wrong About $contentiousTheme
     */
    case HEADLINE_STYLES.WHY_YOURE_WRONG_ABOUT:

      const contentiousTheme = chooseOneAtRandom(CONTENTIOUS_THEMES);

      return `Why You're Wrong About ${contentiousTheme}`;

  }

}