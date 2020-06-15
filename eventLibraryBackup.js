//structure is as follows:
//eventLibrary is an object where keys are days of the year as MM-DD strings (no zero pad). Values are as follows:
//  each day has 6 categories - Revolution, Rebellion, Labor, Birthdays, Assassinations, and other
//      each category has a list of events
//          each event has 7 props, all strings (category redundant, but may help) - category, date, title, description, img, infoSrc, and link


//generic empty entry:
/*
{
  category: 'Birthdays',
  date: 'November 28th, 1820',
  title: 'Friedrich Engels (1820-1895)',
  imgSrc: require('./assets/eventPhotos/Makhno.jpg'),
  description: ```Friedrich Engels was a German philosopher, historian, communist, social scientist, sociologist, journalist and businessman. His father was an owner of large textile factories in Salford, England, and Barmen, Prussia (now Wuppertal, Germany).\n\nEngels developed what is now known as Marxist theory together with Karl Marx and in 1845 he published The Condition of the Working Class in England, based on personal observations and research in English cities. In 1848, Engels co-authored The Communist Manifesto with Marx and also authored and co-authored (primarily with Marx) many other works. Later, Engels supported Marx financially, allowing him to do research and write Das Kapital. After Marx's death, Engels edited the second and third volumes of Das Kapital. Additionally, Engels organised Marx's notes on the Theories of Surplus Value, which were later published as the "fourth volume" of Das Kapital. In 1884, he published The Origin of the Family, Private Property and the State on the basis of Marx's ethnographic research.```,
  link: 'https://en.wikipedia.org/wiki/Friedrich_Engels',
  infoSrc: 'https://en.wikipedia.org/wiki/Friedrich_Engels',
},
*/


//use this as your actual event library once you get up and running
export const eventLibrary = {
  '1-1': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: require('./assets/indigenousResistance.jpg'),
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
        imgSrc: require('./assets/LeninRev.jpg'),
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
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 1st, 1992',
        title: 'Someone Nice',
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Someone Nice was born on this day in 1992. Here's a quote by him.",
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Birthdays',
        date: 'January 1st, 1991',
        title: 'Someone Mean',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: "Someone Mean was born on this day in 1992. Here's a quote by her.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 1st, 1898',
        title: 'The Assassination of January 1st',
        imgSrc: require('./assets/Makhno.jpg'),
        description: "Things were awful, so people assassinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
  },
  '1-15': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: require('./assets/indigenousResistance.jpg'),
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
        imgSrc: require('./assets/LeninRev.jpg'),
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
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 1st, 1898',
        title: 'The Assassination of January 1st',
        imgSrc: require('./assets/Makhno.jpg'),
        description: "Things were awful, so people assassinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 15th, 1809',
        title: 'Pierre-Joseph Proudhon (1820-1865)',
        imgSrc: require('./assets/eventPhotos/proudhon.jpg'),
        description: ```Pierre-Joseph Proudhon was a French politician, philosopher and the founder of mutualist philosophy. He was the first person to declare himself an anarchist, using that term, and is widely regarded as one of the ideology's most influential theorists. Proudhon is even considered by many to be the "father of anarchism". He became a member of the French Parliament after the Revolution of 1848, whereafter he referred to himself as a federalist.\n\nProudhon favored workers' associations or co-operatives as well as individual worker/peasant possession over private ownership or the nationalization of land and workplaces. He considered social revolution to be achievable in a peaceful manner. In The Confessions of a Revolutionary, Proudhon asserted that "Anarchy is Order Without Power", the phrase which much later inspired in the view of some the anarchist circled-A symbol, today "one of the most common graffiti on the urban landscape". He unsuccessfully tried to create a national bank, to be funded by what became an abortive attempt at an income tax on capitalists and shareholders. Similar in some respects to a credit union, it would have given interest-free loans.```,
        link: 'https://en.wikipedia.org/wiki/Pierre-Joseph_Proudhon',
        infoSrc: 'https://en.wikipedia.org/wiki/Pierre-Joseph_Proudhon',
      },
    ],
  },
  '4-22': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: require('./assets/indigenousResistance.jpg'),
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
        imgSrc: require('./assets/LeninRev.jpg'),
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
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 1st, 1898',
        title: 'The Assassination of January 1st',
        imgSrc: require('./assets/Makhno.jpg'),
        description: "Things were awful, so people assassinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 22nd, 1870',
        title: 'Vladimir Lenin (1870-1924)',
        imgSrc: require('./assets/eventPhotos/LeninRev.jpg'),
        description: ```Vladimir Ilyich Ulyanov, better known by his alias Lenin, was a Russian revolutionary, politician, and political theorist. He served as head of government of Soviet Russia from 1917 to 1924 and of the Soviet Union from 1922 to 1924. Under his administration, Russia and then the wider Soviet Union became a one-party communist state governed by the Russian Communist Party. Ideologically a communist, he developed a variant of Marxism known as Leninism.\n\nWidely considered one of the most significant and influential figures of the 20th century, Lenin was the posthumous subject of a pervasive personality cult within the Soviet Union until its dissolution in 1991. He became an ideological figurehead behind Marxism–Leninism and thus a prominent influence over the international communist movement. A controversial and highly divisive historical figure, Lenin is viewed by supporters as a champion of socialism and the working class, while critics on both the left and right emphasize his role as founder and leader of an authoritarian regime responsible for political repression and mass killings.```,
        link: 'https://en.wikipedia.org/wiki/Vladimir_Lenin',
        infoSrc: 'https://en.wikipedia.org/wiki/Vladimir_Lenin',
      },
    ],
  },
  '5-5': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: require('./assets/indigenousResistance.jpg'),
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
        imgSrc: require('./assets/LeninRev.jpg'),
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
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 1st, 1898',
        title: 'The Assassination of January 1st',
        imgSrc: require('./assets/Makhno.jpg'),
        description: "Things were awful, so people assassinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 5th, 1818',
        title: 'Karl Marx (1818-1883)',
        imgSrc: require('./assets/eventPhotos/karlMarx.jpg'),
        description: ```Born in Trier, Germany, Marx studied law and philosophy at university. He married Jenny von Westphalen in 1843. Due to his political publications, Marx became stateless and lived in exile with his wife and children in London for decades, where he continued to develop his thought in collaboration with German thinker Friedrich Engels and publish his writings, researching in the reading room of the British Museum. His best-known titles are the 1848 pamphlet, The Communist Manifesto, and the three-volume Das Kapital (1867–1883). His political and philosophical thought had enormous influence on subsequent intellectual, economic and political history, and his name has been used as an adjective, a noun and a school of social theory.\n\nMarx's critical theories about society, economics and politics – collectively understood as Marxism – hold that human societies develop through class conflict. In capitalism, this manifests itself in the conflict between the ruling classes (known as the bourgeoisie) that control the means of production and the working classes (known as the proletariat) that enable these means by selling their labour power in return for wages. Employing a critical approach known as historical materialism, Marx predicted that, like previous socio-economic systems, capitalism produced internal tensions which would lead to its self-destruction and replacement by a new system known as socialism.```,
        link: 'https://en.wikipedia.org/wiki/Karl_Marx',
        infoSrc: 'https://en.wikipedia.org/wiki/Karl_Marx'
      },
    ],
  },
  '5-30': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: require('./assets/indigenousResistance.jpg'),
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
        imgSrc: require('./assets/LeninRev.jpg'),
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
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 1st, 1898',
        title: 'The Assassination of January 1st',
        imgSrc: require('./assets/Makhno.jpg'),
        description: "Things were awful, so people assassinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 30th, 1814',
        title: 'Mikhail Bakunin (1814-1876)',
        imgSrc: require('./assets/eventPhotos/mikhailBakunin.jpg'),
        description: ```Mikhail Alexandrovich Bakunin was a Russian revolutionary anarchist and founder of collectivist anarchism. He is considered among the most influential figures of anarchism and a major founder of the social anarchist tradition. Bakunin's prestige as an activist also made him one of the most famous ideologues in Europe, gaining substantial influence among radicals throughout Russia and Europe.\n\nBakunin is remembered as a major figure in the history of anarchism, an opponent of Marxism, especially of the dictatorship of the proletariat, and for his predictions that Marxist regimes would be one-party dictatorships over the proletariat, not by the proletariat. His book, God and the State, has been widely translated and remains in print. Bakunin continues to influence anarchists such as Noam Chomsky. His biographer Mark Leier wrote that, "Bakunin had a significant influence on later thinkers, ranging from Peter Kropotkin and Errico Malatesta to the Wobblies and Spanish anarchists in the Civil War to Herbert Marcuse, E.P. Thompson, Neil Postman, and A.S. Neill, down to the anarchists gathered these days under the banner of 'anti-globalization.'"```,
        link: 'https://en.wikipedia.org/wiki/Mikhail_Bakunin',
        infoSrc: 'https://en.wikipedia.org/wiki/Mikhail_Bakunin',
      },
    ],
  },
  '6-14': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: require('./assets/indigenousResistance.jpg'),
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
        imgSrc: require('./assets/LeninRev.jpg'),
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
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 1st, 1992',
        title: 'Someone Nice',
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Someone Nice was born on this day in 1992. Here's a quote by him.",
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Birthdays',
        date: 'January 1st, 1991',
        title: 'Someone Mean',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: "Someone Mean was born on this day in 1992. Here's a quote by her.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 1st, 1898',
        title: 'The Assassination of January 1st',
        imgSrc: require('./assets/Makhno.jpg'),
        description: "Things were awful, so people assassinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
  },
  '11-28': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1899',
        title: 'The Revolution of January 1st',
        imgSrc: require('./assets/LeninRev.jpg'),
        description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
        link: 'link will go here',
        infoSrc: ''
      },
      {
        category: 'Revolution',
        date: 'January 1st, 1951',
        title: 'The Second Revolution of January 1st',
        imgSrc: require('./assets/indigenousResistance.jpg'),
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
        imgSrc: require('./assets/LeninRev.jpg'),
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
        imgSrc: require('./assets/indigenousResistance.jpg'),
        description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 1st, 1898',
        title: 'The Assassination of January 1st',
        imgSrc: require('./assets/Makhno.jpg'),
        description: "Things were awful, so people assassinated. They managed to kill him, but it didn't make anything better.",
        link: 'link will go here',
        infoSrc: ''
      },
    ],
    'Other': [

    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 28th, 1820',
        title: 'Friedrich Engels (1820-1895)',
        imgSrc: require('./assets/eventPhotos/friedrichEngels.jpg'),
        description: ```Friedrich Engels was a German philosopher, historian, communist, social scientist, sociologist, journalist and businessman. His father was an owner of large textile factories in Salford, England, and Barmen, Prussia (now Wuppertal, Germany).\n\nEngels developed what is now known as Marxist theory together with Karl Marx and in 1845 he published The Condition of the Working Class in England, based on personal observations and research in English cities. In 1848, Engels co-authored The Communist Manifesto with Marx and also authored and co-authored (primarily with Marx) many other works. Later, Engels supported Marx financially, allowing him to do research and write Das Kapital. After Marx's death, Engels edited the second and third volumes of Das Kapital. Additionally, Engels organised Marx's notes on the Theories of Surplus Value, which were later published as the "fourth volume" of Das Kapital. In 1884, he published The Origin of the Family, Private Property and the State on the basis of Marx's ethnographic research.```,
        link: 'https://en.wikipedia.org/wiki/Friedrich_Engels',
        infoSrc: 'https://en.wikipedia.org/wiki/Friedrich_Engels',
      },
    ],
  },
};
