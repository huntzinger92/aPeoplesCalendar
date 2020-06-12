//structure is as follows:
//eventLibrary is an object where keys are days of the year as MM-DD strings (no zero pad). Values are as follows:
//  each day has 6 categories - Revolution, Rebellion, Birthdays, Assasinations, publications, and other
//      each category has a list of events
//          each event has 7 props, all strings (category redundant, but may help) - category, date, title, description, img, infoSrc, and link

export const eventLibrary = {
  '1-1': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: '',
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: '',
        description: 'Tired of the awful shit from the first one, the people rose up and promptly re-created the conditions of the 1st Revolution - first improving, before declining into misery.',
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'January 1st, 1898',
        title: 'The Rebellion of January 1st',
        imgSrc: '',
        description: "Things were awful, so people rebelled. It didn't work, so they tried again next year.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'January 1st, 1898',
        title: 'The Labor Laws of January 1st',
        imgSrc: '',
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the Revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 1st, 1992',
        title: 'Someone Nice',
        imgSrc: '',
        description: "Someone Nice was born on this day in 1992. Here's a quote by him.",
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Birthdays',
        date: 'January 1st, 1991',
        title: 'Someone Mean',
        imgSrc: '',
        description: "Someone Mean was born on this day in 1992. Here's a quote by her.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assasinations': [
      {
        category: 'Assasinations',
        date: 'January 1st, 1898',
        title: 'The Assasination of January 1st',
        imgSrc: '',
        description: "Things were awful, so people assasinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
  }
};
