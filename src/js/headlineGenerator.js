import {chooseOneAtRandom} from './utils';

/**
 * More headline styles coming soon!
 */
const HEADLINE_STYLES = {
  FORCED_CULTURAL_REFERENCE: 'FORCED_CULTURAL_REFERENCE',
  YOURE_WRONG_ABOUT: 'YOURE_WRONG_ABOUT',
  HYPE_HYPE_HYPE: 'HYPE_HYPE_HYPE'
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
  'Collaborate Or Die',
  'Feel The Bern'
];

const TRENDY_CULTURAL_REFERENES = [
  'The Martian',
  'The Big Short',
  'Deadpool',
  'Batman v Superman',
  'Zoolander 2',
  'Star Trek Beyond',
  'The New Independence Day Movie',
  'The New Jason Bourne Movie',
  'The Gravitational Wave Discovery',
  'The Presidential Primary',
  'Valentines Day',
  'Immigration',
  'The 4th Industrial Revolution',
  'Blockchain Technology',
  'Game Of Thrones',
  'Justin Bieber',
  'Taylor Swift',
  'Kanye West',
  'Kim Kardashian',
  'Bernie Sanders',
  'Donald Trump'
];

const BUSINESS_BUZZ_WORDS = [
  'Entrepreneurship',
  'Innovation',
  'Leadership',
  'Startups',
  'Industry Disruption',
  'Lean Startup',
  'Agile Software Development',
  'Digital Transformation',
  'User Centric Design'
];

const CONTENTIOUS_THEMES = [
  'The Death of Twitter',
  'The Robot Apocalypse',
  'Google\'s Tax Policy',
  'Silicon Valley Excess',
  'Internet Privacy',
  'Remote Working',
  'The Internet of Things',
  'Self-Driving Cars'
];

export function generateHeadline() {

  const headlineStyle = chooseOneAtRandom(HEADLINE_STYLES);

  switch (headlineStyle) {

    case HEADLINE_STYLES.FORCED_CULTURAL_REFERENCE:

      const shortPithyQuote1 = chooseOneAtRandom(SHORT_PITHY_QUOTES);
      const trendyCulturalReference1 = chooseOneAtRandom(TRENDY_CULTURAL_REFERENES);
      const businessBuzzWord1 = chooseOneAtRandom(BUSINESS_BUZZ_WORDS);

      return `${shortPithyQuote1}: What ${trendyCulturalReference1} Teaches Us About ${businessBuzzWord1}`;

    case HEADLINE_STYLES.YOURE_WRONG_ABOUT:

      const trendyCulturalReference2 = chooseOneAtRandom(TRENDY_CULTURAL_REFERENES);
      const contentiousTheme2 = chooseOneAtRandom(CONTENTIOUS_THEMES);

      return `Why ${trendyCulturalReference2} Shows You're Wrong About ${contentiousTheme2}`;

    case HEADLINE_STYLES.HYPE_HYPE_HYPE:

        const trendyCulturalReference3 = chooseOneAtRandom(TRENDY_CULTURAL_REFERENES);
        const businessBuzzWord3 = chooseOneAtRandom(BUSINESS_BUZZ_WORDS);
        const randNumber3 = Math.floor((Math.random() * 20) + 2);

        return `${randNumber3} Ways That ${trendyCulturalReference3} Is Going To Change ${businessBuzzWord3}`;

  }

}
