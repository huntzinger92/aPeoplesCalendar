//structure is as follows:
//eventLibrary is an object where keys are days of the year as MM-DD strings (no zero pad). Values are as follows:
//  each day has 6 categories - Revolution, Rebellion, Labor, Birthdays, Assassinations, and other
//      each category has a list of events
//          each event has 7 props, all strings (category redundant, but may help) - category, date, title, description, img, infoSrc, and link
//category, description, and date are displayed in specific event view, title is displayed in the main calendarDisplay. infoSrc is the link of a button marked "Source", and link prop is a link to a button titled "readMore"

export const eventLibrary = {
  '1-1': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 1st, 1791',
        title: 'Haitian Independence (1804)',
        imgSrc: require('./assets/eventPhotos/Events/haitianRevolution.jpg'),
        description: `The Haitian Revolution was a successful insurrection by self-liberated slaves against French colonial rule in Saint-Domingue, now the sovereign state of Haiti. The revolt began on August 22nd, 1791, and Haiti didn't achieve independence from France until this day in 1804. The Haitian Revolution was the only slave uprising that led to the founding of a state which was both free from slavery, and ruled by non-whites and former captives.\n\nThe revolt began when thousands of slaves began to kill their masters and plunged the colony into civil war after a well-attended vodou ceremony. Within the next ten days, slaves had taken control of the entire Northern Province in an unprecedented slave revolt. The slaves sought revenge on their masters through "pillage, rape, torture, mutilation, and death". Over 200,000 black people died from the initial uprising until independence.\n\nToussaint Louverture was a notable military leader of the revolution, but died shortly before independence was won. His former lieutenant Jean-Jacques Dessalines became the first leader of the newly independent nation on January 1st, 1804.`,
        link: 'https://en.wikipedia.org/wiki/Haitian_Revolution',
        infoSrc: 'https://en.wikipedia.org/wiki/Haitian_Revolution'
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'January 1st, 1994',
        title: 'Zapatista Uprising (1994)',
        imgSrc: require('./assets/eventPhotos/Events/zapatistaUprising.jpg'),
        description: `On this day in 1994, the Zapatista Army of National Liberation (EZLN), an indigenous armed organisation, declared war on the Mexican Government, demanding "work, land, housing, food, health, education, independence, liberty, democracy, justice and peace." This action was taken at least partly in response to the enactment of the North American Free Trade Agreement (NAFTA), which was perceived as a threat to the lives of indigenous people in Chiapas.\n\nFollowing this war declaration, armed indigenous rebels seized four towns in Chiapas, Mexico, releasing nearly 200 predominantly indigenous prisoners and destroying land records. The fighting lasted eleven days and estimates of those killed range from 300-400. The EZLN remains active to this day.`,
        link: 'http://www.internationalaffairs.org.au/news-item/the-zapatista-movement-the-fight-for-indigenous-rights-in-mexico/',
        infoSrc: 'https://libcom.org/history/1994-the-zapatista-uprising'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 3rd, 1793',
        title: 'Lucretia Mott (1793 - 1880)',
        imgSrc: require('./assets/eventPhotos/Individuals/lucretiaMott.jpg'),
        description: `Lucretia Mott was a U.S. Quaker, abolitionist, women's rights activist, pacifist, and social reformer. She had formed the idea of reforming the position of women in society when she was amongst the women excluded from the World Anti-Slavery Convention in 1840. In 1848 she was invited by Jane Hunt to a meeting that led to the first meeting about women's rights. Mott helped write the Declaration of Sentiments during the 1848 Seneca Falls Convention.\n\nWhen slavery was outlawed in 1865, she advocated giving former slaves who had been bound to slavery laws within the boundaries of the United States, whether male or female, the right to vote. She remained a central figure in the abolition and suffrage movement until her death in 1880.`,
        link: 'https://en.wikipedia.org/wiki/Lucretia_Mott',
        infoSrc: 'https://en.wikipedia.org/wiki/Lucretia_Mott'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'January 3rd, 1973',
        title: 'Ellsberg Charged With Espionage (1973)',
        imgSrc: require('./assets/eventPhotos/Individuals/danielEllsberg.jpg'),
        description: `Daniel Ellsberg is an American economist, activist and former United States military analyst who, while employed by the RAND Corporation, precipitated a national political controversy in 1971 when he released the Pentagon Papers, a top-secret Pentagon study of the U.S. government decision-making in relation to the Vietnam War.\n\nOn this day in 1973, Ellsberg was charged under the Espionage Act of 1917 along with other charges of theft and conspiracy, carrying a total maximum sentence of 115 years. Due to governmental misconduct and illegal evidence-gathering he was dismissed of all charges against Ellsberg on May 11, 1973.`,
        link: 'https://www.npr.org/2018/01/19/579101965/daniel-ellsberg-explains-why-he-leaked-the-pentagon-papers',
        infoSrc: 'https://en.wikipedia.org/wiki/Daniel_Ellsberg'
      },
    ],
  },
  '1-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 5th, 1855',
        title: 'Dundalli (1820 - 1855)',
        imgSrc: require('./assets/eventPhotos/Individuals/dundalli.jpg'),
        description: `Dundalli (1820- 1855) was an Aboriginal lawman who figured prominently in accounts of conflict between European settlers and indigenous aboriginal peoples in the area of Brisbane in South East Queensland. Traditionally described as a murderer, savage and terrorist, he is now thought variously to have been a guerilla leader or to have coordinated a decade-long resistance to white colonization the area.\n\nIn the escalating tensions between indigenous people and settlers around Brisbane, Dundalli's role as a tribal elder led to widespread speculation as to his instigation of various violent conflicts. Despite this perception, modern historians note that he had not exacted revenge for his brother's murder at the hands of a settler and rival tribe, and had saved at least one settler's life in a raid, suggesting Dundalli had adopted a more conciliatory policy of moderation rather than "savage" violence.\n\nIn 1854, Dundalli entered Brisbane to be paid for removing a felled tree, and was arrested by the police. Tried and convicted for murder on flimsy evidence, he was hanged a few months later, on January 5th.`,
        link: 'https://eprints.usq.edu.au/7257/2/Connors_ANZLH_2006_PV.pdf',
        infoSrc: 'https://en.wikipedia.org/wiki/Dundalli'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 10th, 1929',
        title: 'Julio Mella (1903 - 1929)',
        imgSrc: require('./assets/eventPhotos/Individuals/julioMella.jpg'),
        description: `Julio Antonio Mella McPartland was an activist and is known as one of the founders of the "internationalized" Cuban Communist Party, in 1925 by leaders of the party in Moscow, Soviet Union. After becoming a political activist, Mella had studied law in the University of Havana but was expelled in 1925.\n\nAt the time of his murder, he was working as a Cuban Marxist revolutionary in Mexico, working with other exiles and supporters to organize the overthrow of General Gerardo Machado in Cuba. Mella was assassinated on January 10, 1929, while walking home at night. It is unknown who killed Mella, as both Machado and the Cuban Communist Party, which was afraid Mella had come under the influence of Trotsky (who lived in Mexico at the time), had cause to assassinate him.`,
        link: 'https://en.wikipedia.org/wiki/Julio_Antonio_Mella',
        infoSrc: 'https://en.wikipedia.org/wiki/Julio_Antonio_Mella'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 11th, 1907',
        title: 'Abraham Joshua Heschel (1907 - 1972)',
        imgSrc: require('./assets/eventPhotos/Individuals/joshuaHeschel.jpg'),
        description: `Rabbi Abraham Joshua Heschel, born on this day in 1907, was a Polish-born American rabbi and one of the leading Jewish theologians and Jewish philosophers of the 20th century.\n\nHeschel was active in the civil rights movement, marching with him in Selma, Alabama. At the Vatican Council II, as representative of American Jews, Heschel was also responsible for persuading the Catholic Church to remove anti-Semitic language from its doctrine, including references to "deicide" and expectations of conversion to Christianity.`,
        link: 'https://www.youtube.com/watch?v=FEXK9xcRCho',
        infoSrc: 'https://en.wikipedia.org/wiki/Abraham_Joshua_Heschel'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 26th, 1944',
        title: 'Angela Davis (1944 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/angelaDavis.jpg'),
        description: `Angela Yvonne Davis is an American political activist, philosopher, academic, and author. She is a professor emerita at the University of California, Santa Cruz. Ideologically a Marxist, Davis was a member of the Communist Party USA until 1991, after which she joined the breakaway Committees of Correspondence for Democracy and Socialism. She is the author of over ten books on class, feminism, and the U.S. prison system.\n\nBorn to an African American family in Birmingham, Alabama, Davis studied French at Brandeis University and philosophy at the University of Frankfurt in West Germany. Back in the U.S., she joined the Communist Party and, as a Marxist feminist, involved herself in a range of leftist causes, including the second-wave feminist movement, the Black Panther Party, and the campaign against the Vietnam War.\n\nIn 1970, UCLA's governing Board of Regents soon fired her due to her Communist Party membership; after a court ruled this illegal, the university fired her again, this time for her use of inflammatory language.\n\nPraised by many Marxists and others on the left, Davis has received various awards, including the Lenin Peace Prize. Davis has been inducted into the National Women's Hall of Fame. Davis was Time magazine's "Woman of the Year" for 1971 in its 2020 "100 Women of the Year" edition.`,
        link: 'https://www.theguardian.com/us-news/2020/jun/15/angela-davis-on-george-floyd-as-long-as-the-violence-of-racism-remains-no-one-is-safe',
        infoSrc: 'https://en.wikipedia.org/wiki/Angela_Davis'
      },
      {
        category: 'Birthdays',
        date: 'January 12th, 1920',
        title: 'James Farmer (1920 - 1999)',
        imgSrc: require('./assets/eventPhotos/Individuals/jamesFarmer.jpg'),
        description: `James Leonard Farmer Jr. was an American civil rights activist and leader in the Civil Rights Movement who pushed for nonviolent protest to dismantle segregation, and served alongside Martin Luther King Jr.\n\nHe was the initiator and organizer of the first Freedom Ride in 1961, which eventually led to the desegregation of interstate transportation in the United States.`,
        link: 'https://en.wikipedia.org/wiki/James_Farmer',
        infoSrc: 'https://en.wikipedia.org/wiki/James_Farmer'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'January 13th, 1949',
        title: 'Durban Riots (1949)',
        imgSrc: require('./assets/eventPhotos/Events/durbanRiots.jpg'),
        description: `The Durban riots were an anti-Indian pogrom that began on this day in 1949, primarily by African people targeting poor Indians in Durban, South Africa. The two days of rioting were exceptionally violent, resulting in rape, immolation, and massacre of Indians and the looting and burning of their properties, claiming 142 lives and creating 40,000 Indian refugees.\n\nAlthough this incident was the worst anti-Indian violence in the region, Durban continued to have ethnic tensions and episodes of violence between Indians and native Africans for the next several decades.`,
        link: 'https://www.iol.co.za/thepost/this-month-marks-70-years-since-the-horrific-1949-race-riots-18783849',
        infoSrc: 'https://en.wikipedia.org/wiki/Durban_riots'
      },
    ],
  },
  '1-14': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 14th, 2011',
        title: 'Tunisian Revolution (2011)',
        imgSrc: require('./assets/eventPhotos/Events/tunisianRevolution.jpg'),
        description: `The Tunisian Revolution was an intensive 28-day campaign of civil resistance. It included a series of street demonstrations which took place in Tunisia and led to the president Zine El Abidine Ben Ali's 23-year reign on this day in January 2011. The revolution has brought a thorough democratisation of the country's political process.\n\nThe protests were sparked by the self-immolation of Mohamed Bouazizi, a disgruntled street merchant whose wares had been seized, on 17 December 2010. 28 days later, Ben Ali fled to Saudi Arabia and officially resigned from his post. Notably, the police and army defected from the state and sided with protestors after Ben Ali was ousted from power. Labor unions also played an integral role in the protests.`,
        link: 'https://www.aljazeera.com/indepth/inpictures/2015/12/tunisian-revolution-151215102459580.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Tunisian_Revolution'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 14th, 1921',
        title: 'Murray Bookchin (1921 - 2006)',
        imgSrc: require('./assets/eventPhotos/Individuals/murrayBookchin.jpg'),
        description: `Murray Bookchin was an American social theorist, author, orator, historian, and political philosopher. A pioneer in the environmental movement, Bookchin formulated and developed the theory of social ecology and urban planning, within anarchist, libertarian socialist, and environmental philosophy.\n\nHe was the author of two dozen books covering topics in politics, philosophy, history, urban affairs, and social ecology. Among the most important were "Our Synthetic Environment", "Post-Scarcity Anarchism", and "The Ecology of Freedom". In the late 1990s he became disenchanted with what he saw as an increasingly apolitical "lifestylism" of the contemporary anarchist movement, stopped referring to himself as an anarchist, and founded his own libertarian socialist ideology called "Communalism", which seeks to reconcile Marxist and anarchist thought.\n\nBookchin was a prominent anti-capitalist and advocate of social decentralisation along ecological and democratic lines. His ideas have influenced social movements since the 1960s, including the New Left, the anti-nuclear movement, the anti-globalization movement, Occupy Wall Street, and, most notably, Abdullah Öcalan's concept of democratic confederalism and its application in Rojava.`,
        link: 'https://reason.com/1979/10/01/interview-with-murray-bookchin/',
        infoSrc: 'https://en.wikipedia.org/wiki/Murray_Bookchin'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'January 15th, 1919',
        title: 'Rosa Luxemburg (1871 - 1919)',
        imgSrc: require('./assets/eventPhotos/Individuals/rosaLuxemburg.jpg'),
        description: `Rosa Luxemburg was a Polish Marxist, philosopher, economist, anti-war activist and revolutionary socialist who became a naturalized German citizen at the age of 28. Successively, she was a member of the Social Democracy of the Kingdom of Poland and Lithuania (SDKPiL), the Social Democratic Party of Germany (SPD), the Independent Social Democratic Party (USPD) and the Communist Party of Germany (KPD).\n\nIn 1918-19, Luxemberg publicly supported a violent rebellion against the German state. She was captured and summarily executed by the Freikorps, government-sponsored paramilitary groups consisting mostly of World War I veterans. Her body was thrown in the Landwehr Canal in Berlin.\n\nDue to her pointed criticism of both the Leninist and the more moderate social democratic schools of socialism, Luxemburg's legacy is a radical, non-Leninist school of revolutionary socialist thought.`,
        link: 'https://www.versobooks.com/blogs/4203-the-many-interpretations-of-rosa-luxemburg-s-legacy',
        infoSrc: 'https://en.wikipedia.org/wiki/Rosa_Luxemburg'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 15th, 1809',
        title: 'Pierre-Joseph Proudhon (1820 - 1865)',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: `Pierre-Joseph Proudhon was a French politician, philosopher and the founder of mutualist philosophy. He was the first person to declare himself an anarchist, using that term, and is widely regarded as one of the ideology's most influential theorists. Proudhon is even considered by many to be the "father of anarchism". He became a member of the French Parliament after the Revolution of 1848, whereafter he referred to himself as a federalist.\n\nProudhon favored workers' associations or co-operatives as well as individual worker/peasant possession over private ownership or the nationalization of land and workplaces. In The Confessions of a Revolutionary, Proudhon asserted that "Anarchy is Order Without Power", the phrase which much later inspired in the view of some the anarchist circled-A symbol, today "one of the most common graffiti on the urban landscape".\n\nIt is worth noting that, despite his egalitarian beliefs in other respects, Proudhon was an avowed sexist and anti-semite. One notorious (unpublished) quote reads "The Jew is the enemy of the human race. This race must be sent back to Asia, or exterminated."\n\nProudhon also unsuccessfully tried to create a national bank, to be funded by what became an abortive attempt at an income tax on capitalists and shareholders. Similar in some respects to a credit union, it would have given interest-free loans.`,
        link: 'https://en.wikipedia.org/wiki/Pierre-Joseph_Proudhon',
        infoSrc: 'https://en.wikipedia.org/wiki/Pierre-Joseph_Proudhon',
      },
      {
        category: 'Birthdays',
        date: 'January 15th, 1929',
        title: 'MLK Jr. (1929 - 1968)',
        imgSrc: require('./assets/eventPhotos/Individuals/mlkJr.jpg'),
        description: `Martin Luther King Jr. was an American Christian minister and activist who became the most visible spokesperson and leader in the civil rights movement from 1955 until his assassination in 1968. King is best known for advancing civil rights through nonviolence and civil disobedience, inspired by his Christian beliefs and the nonviolent activism of Mahatma Gandhi.\n\nOn October 14, 1964, King won the Nobel Peace Prize for combating racial inequality through nonviolent resistance. In 1965, he helped organize the Selma to Montgomery marches. In his final years, he expanded his focus to include opposition towards poverty, capitalism, and the Vietnam War.\n\nFor his activism, he was the target of multiple assassination attempts, arrested 23 times, and surveilled and harassed by the police. In particular, FBI Director J. Edgar Hoover harassed Dr. King by making him a target of COINTELPRO, a secret program where FBI agents spied on, infiltrated, and attempted to discredit "subversive" political movements.\n\nIn 1968, King and the Southern Christian Leadership Conference organized the "Poor People's Campaign" to address issues of economic justice. King traveled the country to assemble "a multiracial army of the poor" that would march on Washington to engage in nonviolent civil disobedience at the Capitol until Congress created an "economic bill of rights" for poor Americans.\n\nBefore the plans for the march could come to fruition, however, King was assassinated in Memphis, Tennessee while supporting striking black sanitation workers. James Earl Rey was convicted for the murder, but speculation of government involvement has persisted for decades after his death.`,
        link: 'https://en.wikipedia.org/wiki/COINTELPRO',
        infoSrc: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.'
      },
    ],
  },
  '1-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 16th, 1900',
        title: 'Juan Sanchez (1900 - 1972)',
        imgSrc: require('./assets/eventPhotos/Individuals/juanSanchez.jpg'),
        description: `Juan López Sanchez was a Spanish construction worker, anarchist and member of the Confederación Nacional del Trabajo (CNT), and one of the founders of the Federación Sindicalista Libertaria. During the Spanish Civil War (1936–39) he was Minister of Commerce under Francisco Largo Caballero.\n\nAfter the fascists won the civil war, Sanchez spent several years in exile before returning to Spain where he lived without persecution and participated in the "vertical" trade union movement authorized by the dictatorship of General Francisco Franco.`,
        link: 'https://en.wikipedia.org/wiki/Juan_L%C3%B3pez_S%C3%A1nchez',
        infoSrc: 'https://en.wikipedia.org/wiki/Juan_L%C3%B3pez_S%C3%A1nchez'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'January 17th, 1935',
        title: 'Zunyi Conference Ends (1935)',
        imgSrc: require('./assets/eventPhotos/Events/zunyiConference.jpg'),
        description: `The Zunyi Conference was a three day meeting of the Communist Party of China (CPC) that ended on this day in 1935, during the Long March (a retreat of Chinese Communist Party forces from an attacks of a nationalist military). This meeting involved a power struggle between the leadership of Bo Gu and the opposition, led by Mao Zedong. The result was in Mao's favor, and he left the meeting in position to take over military command and become the leader of the Communist Party.\n\nThe Red Army had been fleeing their overwhelmed base of operations at Jiangxi-Fujian for several months by this point, and this conference involved the debate/accountability of CPC leadership for various tactical and strategic failures. The CPC went on to achieve a new base of operations in Shaanxi Province, and continued its revolutionary activity from there.\n\nThe Zunyi Conference was completely unacknowledged until the 1950s and still no detailed descriptions were available until the fiftieth anniversary in 1985, and has beocome a popular tourist destination in China.`,
        link: 'http://en.chinaculture.org/library/2008-02/15/content_34014.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/Zunyi_Conference'
      },
    ],
  },
  '1-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 20th, 1901',
        title: 'Juan García Oliver',
        imgSrc: require('./assets/eventPhotos/Individuals/juanGarcia.jpg'),
        description: `Juan García Oliver (1901–1980) was a Spanish anarcho-syndicalist revolutionary, affiliated with the Confederación Nacional del Trabajo (CNT) and Minister of Justice of the Second Spanish Republic.\n\nHe was a leading figure of anarchism in Spain and fought on the side of the republic against fascists in the Spanish Civil War.`,
        link: 'https://en.wikipedia.org/wiki/Juan_Garc%C3%ADa_Oliver',
        infoSrc: 'https://en.wikipedia.org/wiki/Juan_Garc%C3%ADa_Oliver'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'January 22nd, 1932',
        title: 'La Matanza (1932)',
        imgSrc: require('./assets/eventPhotos/Events/laMatanza.jpg'),
        description: `La Matanza ("The Massacre") was a peasant and communist uprising that occurred in the El Salvador on this day in 1932. The Salvadoran army, being vastly superior in terms of weapons and soldiers, executed those who stood against it. Although both peasants and communist rebels (led by Farabundo Martí) rebelled at the same time, it is not confirmed that the two uprisings were coordinated.\n\nRegardless, the Salvadoran government did not make a distinction between either movement and violently repressed agitation from both groups. The rebellion was a mixture of protest and insurrection which ended in ethnocide, claiming the lives of an estimated 30,000 people, many of them indigenous Pipil people.`,
        link: 'https://www.zinnedproject.org/news/tdih/la-matanza',
        infoSrc: 'https://en.wikipedia.org/wiki/La_Matanza'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'January 22nd, 1891',
        title: 'Antonio Gramsci (1891 - 1937)',
        imgSrc: require('./assets/eventPhotos/Individuals/antonioGramsci.png'),
        description: `Antonio Francesco Gramsci was an Italian Marxist philosopher and communist politician. He wrote on political theory, sociology and linguistics. He attempted to break from the economic determinism of traditional Marxist thought and so is considered a key neo-Marxist.\n\nHe was a founding member and one-time leader of the Communist Party of Italy and was imprisoned by Benito Mussolini's Fascist regime.`,
        link: 'https://revisesociology.com/2016/06/23/gramscis-humanist-marxism/',
        infoSrc: 'https://en.wikipedia.org/wiki/Antonio_Gramsci'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'January 23rd, 2014',
        title: 'South Africa Platinum Strike (2014)',
        imgSrc: require('./assets/eventPhotos/Events/southAfrica2014Strike.jpg'),
        description: `On this day in 2014, the longest wage strike in South African history began. Almost 70 000 platinum mine workers went on strike to demand large wage increases. The majority of these mine workers belong to a newly formed trade union, Association of Mines and Construction Union (AMCU), under the leadership of Joseph Mathunjwa.\n\nThe strike lasted five months, and on June 23rd, 2014, both the platinum companies and AMCU settled for a pay increase spread over three years. Notably, several mine assets were sold off by the companies due to the burden of the strike.`,
        link: 'https://en.wikipedia.org/wiki/2014_South_African_platinum_strike',
        infoSrc: 'https://www.sahistory.org.za/article/2014-south-african-platinum-strike-longest-wage-strike-south-africa'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-25': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'January 25th, 2011',
        title: `Egyptian "Day of Anger" (2011)`,
        imgSrc: require('./assets/eventPhotos/Events/tahrirSquare.jpg'),
        description: `On this day in 2011, known as the "Day of Anger" in Egypt, millions of Egyptians took the streets in protests that took place in different cities across Egypt, including Cairo, Alexandria, Suez and Ismaïlia. The protests began weeks of civil disobedience that successfully ousted Hosni Mubarak from power on February 11th.\n\nJournalist and activist Hossam el-Hamalawy gave this statement to Al-Jazeera:\n\n"People are fed up of Mubarak and of his dictatorship and of his torture chambers and of his failed economic policies. If Mubarak is not overthrown tomorrow then it will be the day after. If it's not the day after it's going to be next week."\n\n`,
        link: 'https://english.alaraby.co.uk/english/blog/2017/1/28/egypts-day-of-rage-six-years-on',
        infoSrc: 'https://en.wikipedia.org/wiki/Timeline_of_the_Egyptian_revolution_of_2011#25_January_%E2%80%93_Day_of_Anger'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '1-31': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'February 1st, 1960',
        title: 'Greensboro Sit-ins Begin (1960)',
        imgSrc: require('./assets/eventPhotos/Events/greensboroSitin.jpg'),
        description: `On this day in 1960, the "Greensboro Four" sat down at the 66-seat L-shaped stainless steel lunch counter inside the F. W. Woolworth Company store in Greensboro, North Carolina. The four men had purchased toothpaste and other products from a desegregated counter at the store with no problems, but were then refused service at the store's lunch counter when they each asked for a cup of coffee.\n\nThe four students returned the next day, and within a few days the protest included hundreds of students. The Greensboro Sit-in sparked a movement of sit-in protests against segregation across the country, continuing into the summer and expanding to other places of discrimination, such as swimming pools, parks, and art galleries.\n\nOn July 25th, the Greensboro Woolworth's finally ended its discriminatory policies. Four years later, the Civil Rights Act of 1964 mandated desegregation in public accommodations.`,
        link: 'https://www.blackpast.org/african-american-history/greensboro-sit-ins-1960/',
        infoSrc: 'https://en.wikipedia.org/wiki/Greensboro_sit-ins'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 1st, 1901',
        title: 'Langston Hughes (1901 - 1967)',
        imgSrc: require('./assets/eventPhotos/Individuals/langstonHughes.jpg'),
        description: `James Mercer Langston Hughes was an American poet, social activist, novelist, playwright, and columnist from Joplin, Missouri. He moved to New York City as a young man, where he made his career. One of the earliest innovators of the then-new literary art form called jazz poetry, Hughes is best known as a leader of the Harlem Renaissance.\n\nHughes was a communist sympathizer - his poetry was frequently published in the CPUSA newspaper and he was involved in initiatives supported by Communist organizations, such as the drive to free the Scottsboro Boys, a group of black teens falsely accused of rape. During the Spanish Civil War, Hughes traveled there as a correspondent for the Baltimore Afro-American.\n\nAfter being compelled to testify for a Senate Committee led by Joseph McCarthy, Hughes distanced himself from leftist politics, saying "[My not joining the Communist Party] was based on strict discipline and the acceptance of directives that I, as a writer, did not wish to accept."`,
        link: 'https://en.wikipedia.org/wiki/Langston_Hughes',
        infoSrc: 'https://en.wikipedia.org/wiki/Langston_Hughes'
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'February 1st, 1931',
        title: 'Farabundo Martí (1893 - 1931)',
        imgSrc: require('./assets/eventPhotos/Individuals/farabundoMarti.jpg'),
        description: `Agustín Farabundo Martí Rodríguez, popularly known as Farabundo Martí, was a Marxist-Leninist activist and a revolutionary leader in El Salvador during the 1932 Salvadoran peasant massacre. Martí is also known for co-founding of the Communist Party of Central America, as well as helping lead a communist alternative to the Red Cross known as "International Red Aid".\n\nIn 1931, Martí returned to El Salvador and helped start a guerrilla revolt of indigenous farmers. The Communist-led peasant uprising against dictator Maximiliano Hernández Martínez, fomented by collapsing coffee prices, enjoyed some initial success, but was soon drowned in a bloodbath, being crushed by the Salvadoran military ten days after it had begun. Over 30,000 indigenous people were killed at what was to be a "peaceful meeting" in 1932; this became known as "La Matanza" ("The Slaughter").\n\nFor his role in the uprising, Martí was executed by Salvadoran President Hernández Martínez.`,
        link: 'https://en.wikipedia.org/wiki/La_Matanza',
        infoSrc: 'https://en.wikipedia.org/wiki/Farabundo_Mart%C3%AD'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 3rd, 1821',
        title: 'Elizabeth Blackwell (1821 - 1910)',
        imgSrc: require('./assets/eventPhotos/Individuals/elizabethBlackwell.jpg'),
        description: `Elizabeth Blackwell, born on this day in 1821, was a British physician, notable as the first woman to receive a medical degree in the United States, and the first woman on the Medical Register of the General Medical Council. Blackwell played an important role in both the United States and the United Kingdom as a social awareness and moral reformer, and pioneered in promoting education for women in medicine.\n\nBlackwell also founded the "New York Dispensary for Indigent Women and Children" to, in her words, "give poor women an opportunity of consulting physicians of their own sex". Her contributions remain celebrated with the Elizabeth Blackwell Medal, awarded annually to a woman who has made significant contribution to the promotion of women in medicine.`,
        link: 'https://en.wikipedia.org/wiki/NewYork-Presbyterian_Lower_Manhattan_Hospital',
        infoSrc: 'https://en.wikipedia.org/wiki/Elizabeth_Blackwell'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 4th, 1869',
        title: 'Big Bill Haywood (1869 - 1928)',
        imgSrc: require('./assets/eventPhotos/Individuals/billHaywood.jpg'),
        description: `William Dudley "Big Bill" Haywood (February 4, 1869 – May 18, 1928) was a founding member and leader of the Industrial Workers of the World (IWW) and a member of the executive committee of the Socialist Party of America. During the first two decades of the 20th century, Haywood was involved in several important labor battles, including the Colorado Labor Wars, the Lawrence Textile Strike, and other textile strikes in Massachusetts and New Jersey.\n\nHaywood was an advocate of industrial unionism, a labor philosophy that favors organizing all workers in an industry under one union, regardless of the specific trade or skill level. He believed that workers of all ethnicities should be united, and favored direct action over political action.\n\nHaywood was renowned for leading strikes in times of crisis. When martial law was declared during the Lawrence Textile Strike, Haywood traveled to the strike and implemented many innovative tactics to help the workers involved. One such ploy was to very publicly send the hungry children of striking workers to host families in other states, garnering good press for the working families.\n\nIn 1917, Big Bill Haywood was arrested for esponsiage, along with 164 other members of the IWW. He was convicted, and, while temporarily released from prison due to an appeal, fled to the Soviet Union, where he served as labor advisor to Vladimir Lenin, and where would spend the rest of life.`,
        link: 'https://en.wikipedia.org/wiki/Bill_Haywood',
        infoSrc: 'https://en.wikipedia.org/wiki/Bill_Haywood'
      },
      {
        category: 'Birthdays',
        date: 'February 4th, 1913',
        title: 'Rosa Parks (1913 - 2005)',
        imgSrc: require('./assets/eventPhotos/Individuals/rosaParks.jpg'),
        description: `Rosa Louise McCauley Parks was an American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. The United States Congress has called her "the first lady of civil rights" and "the mother of the freedom movement".\n\nParks was not the first person to resist bus segregation, but the National Association for the Advancement of Colored People (NAACP) believed that she was the best candidate for seeing through a court challenge after her arrest for civil disobedience in violating Alabama segregation laws.\n\nParks' prominence in the community and her willingness to become a controversial figure inspired the black community to boycott the Montgomery buses for over a year, the first major direct action campaign of the post-war civil rights movement.\n\nParks' act of defiance and the Montgomery bus boycott became important symbols of the movement. She became an international icon of resistance to racial segregation.`,
        link: 'http://teacher.scholastic.com/rosa/interview.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/Rosa_Parks'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'February 4th, 1793',
        title: 'Fugitive Slave Act (1793)',
        imgSrc: require('./assets/eventPhotos/Events/fugitiveSlaveAct.jpg'),
        description: `The Fugitive Slave Act of 1793 was an Act of the United States Congress to give effect to the Fugitive Slave Clause of the US Constitution (Article 4, Section 2, Clause 3), which was later overruled by the Thirteenth Amendment. The former guaranteed a right for a slaveholder to recover an escaped slave, and declared that the children of any escaped slave were still property of the slaveowner\n\nNotably, George Washington used the Fugitive Slave Act twice to try and recover one of his escaped slaves, named Oney Judge. Oney later gave an interview in the 1840s, stating that, even fifty years after escaping, she and her child could still be claimed as the legal property of Washington's descendants due to this law.`,
        link: 'http://marthawashington.us/items/show/4',
        infoSrc: 'https://en.wikipedia.org/wiki/Fugitive_Slave_Act_of_1793'
      },
    ],
  },
  '2-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'February 5th, 1919',
        title: 'La Canadenca Strike (1919)',
        imgSrc: require('./assets/eventPhotos/Events/canadencaStrike.jpg'),
        description: `The Canadenca strike was a general strike that began on this day in 1919, in Catalonia, Spain. The strike was initiated after an energy company, La Canadenca, reduced wages and fired over one hundred striking workers who were protesting the pay cuts. This and the curbing of labour rights prompted the rest of the workers at La Canadenca to go on strike and demand the readmission of those sacked and wage increases.\n\nThe strike soon spread to other companies in the sector via the CNT’s union for water, gas and electricity workers. The lack of electricity in the city affected transport, hampering the provision of supplies and paralysing 70% of factories in the province of Barcelona.\n\nA state of war was declared by the government and over 3,000 workers were detained. Despite this, the strike ended after two days on the conditions of no reprecussions for participating workers, an increase in wages, and, most notably, an 8 hour work day.`,
        link: 'https://books.google.com/books?id=iN8I1fl9hl0C&pg=PT215&lpg=PT215&dq=La+Canadenca+strike&source=bl&ots=GCbBklHEAI&sig=ACfU3U2vuyLI-PjXZOCWwChMk7LJqALpHg&hl=en&sa=X&ved=2ahUKEwjAx7n-iZzqAhVOGs0KHQU1DUI4ChDoATABegQIChAB#v=onepage&q=La%20Canadenca%20strike&f=false',
        infoSrc: 'https://www.barcelona.cat/infobarcelona/en/barcelona-marks-the-centenary-of-the-canadenca-strike_797743.html'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'February 6th, 1919',
        title: 'Seattle General Strike (1919)',
        imgSrc: require('./assets/eventPhotos/Events/seattleGeneralStrike.jpg'),
        description: `The Seattle General Strike of 1919 was a five-day general work stoppage by more than 65,000 workers in the city of Seattle, Washington from February 6 to 11. Dissatisfied workers in several unions began the strike to gain higher wages after two years of World War I wage controls. Government officials, the press, and much of the public viewed the strike as a radical attempt to subvert American institutions.\n\nDuring the strike, a cooperative body made up of rank and file workers from all the striking locals was formed, called the General Strike Committee. It acted as a "virtual counter-government for the city." The committee organized to provide essential services for the people of Seattle during the work stoppage. A system of food distribution was also established, which distributed as many as 30,000 meals each day.\n\nArmy veterans created an alternative to the police in order to maintain order. A group called the "Labor War Veteran's Guard" forbade the use of force and did not carry weapons, and used "persuasion only." Major General John F. Morrison, stationed in Seattle, claimed that he had never seen "a city so quiet and orderly."\n\nImmediately following the general strike's end, thirty-nine IWW members were arrested as "ringleaders of anarchy", despite their playing a marginal role in the development of events.`,
        link: 'http://depts.washington.edu/labhist/strike/index.shtml',
        infoSrc: 'https://en.wikipedia.org/wiki/Seattle_General_Strike'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 8th, 1805',
        title: 'Auguste Blanqui (1805 - 1881)',
        imgSrc: require('./assets/eventPhotos/Individuals/louisBlanqui.jpg'),
        description: `Louis Auguste Blanqui was a French socialist and political activist, notable for his revolutionary theory of Blanquism and being elected president of the Paris Commune while imprisoned.\n\nBlanqui was a non-Marxist socialist who believed in immediate, violent revolution to overturn the capitalist order. Because of his unrelenting radicalism, he spent 33 years of his life in prison, leading to the nickname "l’enfermé", or "the locked-up one".`,
        link: 'https://en.wikipedia.org/wiki/Blanquism',
        infoSrc: 'https://www.britannica.com/biography/Auguste-Blanqui'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'February 8th, 1887',
        title: 'The Dawes Act (1887)',
        imgSrc: require('./assets/eventPhotos/Events/dawesAct.jpg'),
        description: `The Dawes Act of 1887 authorized the U.S. to subdivide Native American tribal communal landholdings into allotments for Native American heads of families and individuals. This would convert traditional systems of land tenure into a state-imposed systems of private property by forcing Native Americans to "assume a capitalist and proprietary relationship with property" that did not previously exist in their cultures. The act declared remaining lands after allotment as "surplus" and available for sale, including to non-Natives.\n\nBetween 1887 and 1934, Native Americans "lost control of about 100 million acres of land" or about "two-thirds of the land base they held in 1887" as a result of the act. The loss of land and the break-up of traditional leadership of tribes produced negative cultural and social effects that have since prompted scholars to refer to the act as one of the most destructive U.S. policies for Native Americans in history.`,
        link: 'https://www.history.com/this-day-in-history/cleveland-signs-the-dawes-severalty-act',
        infoSrc: 'https://en.wikipedia.org/wiki/Dawes_Act'
      },
    ],
  },
  '2-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 12th, 1961',
        title: 'David Graeber (1961 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/davidGraeber.jpg'),
        description: `David Rolfe Graeber is an American anthropologist, anarchist activist and author known for his books "Debt: The First 5000 Years", "The Utopia of Rules", and "Bullshit Jobs: A Theory". He is currently a professor of anthropology at the London School of Economics.\n\nGraeber's parents were self-taught working-class intellectuals in New York. His father was a member of the Youth Communist Leaugue, and fought in the Spanish Civil War. Graeber has stated that he has been an anarchist since the age of 16.\n\nAside from his scholarship, Graeber has been active in the Global Justice movement, and played an early and influential role in the Occupy Wall Street protests.`,
        link: 'https://en.wikipedia.org/wiki/David_Graeber',
        infoSrc: 'https://www.theguardian.com/books/2015/mar/21/books-interview-david-graeber-the-utopia-of-rules'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'February 13th, 1960',
        title: 'Nashville Sit-ins Begin (1960)',
        imgSrc: require('./assets/eventPhotos/Events/nashvilleSitins.jpg'),
        description: `The Nashville sit-ins began on this day in 1960. The protest was part of a nonviolent direct action campaign to end racial segregation at lunch counters in downtown Nashville, Tennessee. The sit-in campaign, coordinated by the Nashville Student Movement and the Nashville Christian Leadership Council, was notable for its early success and its emphasis on disciplined nonviolence in the face of harassment and assault by counter-protestors.\n\nThe Nashville sit-ins, along with the Greensboro sit-ins, became part of a broader movement on civil disobedience against discriminatory policies that spread across the southern United States. The Nashville sit-ins ended on May 10th, when six downtown stores began serving black customers for the first time.`,
        link: 'https://www.blackpast.org/african-american-history/nashville-sit-ins-1960/',
        infoSrc: 'https://en.wikipedia.org/wiki/Nashville_sit-ins'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 15th, 1820',
        title: 'Susan B. Anthony (1820 - 1906)',
        imgSrc: require('./assets/eventPhotos/Individuals/susanAnthony.png'),
        description: `Susan B. Anthony was an American social reformer and women's rights activist who played a pivotal role in the women's suffrage movement. Born into a Quaker family committed to social equality, she collected anti-slavery petitions at the age of 17. In 1856, she became the New York state agent for the American Anti-Slavery Society.\n\nIn 1872, Anthony was arrested for voting in her hometown of Rochester, New York, and convicted in a widely publicized trial. Although she refused to pay the fine, the authorities declined to take further action. In 1878, Anthony and Stanton arranged for Congress to be presented with an amendment giving women the right to vote.\n\nIt was eventually ratified as the Nineteenth Amendment to the U.S. Constitution in 1920, colloquially known as the Susan B. Anthony Amendment,.`,
        link: 'https://en.wikipedia.org/wiki/Trial_of_Susan_B._Anthony',
        infoSrc: 'https://en.wikipedia.org/wiki/Susan_B._Anthony'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 17th, 1942',
        title: 'Huey Newton (1942 - 1989)',
        imgSrc: require('./assets/eventPhotos/Individuals/hueyNewton.jpg'),
        description: `Huey Percy Newton was an African-American political activist and Marxist-Leninist revolutionary who, along with fellow Merritt College student Bobby Seale, co-founded the Black Panther Party (1966–1982). Together with Seale, Newton created a ten-point program which laid out guidelines for how the African-American community could achieve liberation.\n\nIn the 1960s, under Newton's leadership, the Black Panther Party founded over 60 community support programs (renamed survival programs in 1971) including food banks, medical clinics, HIV support groups, sickle cell anemia tests, prison busing for families of inmates, legal advice seminars, clothing banks, housing cooperates, and their own ambulance service.\n\nThe most famous of these programs was the Free Breakfast for Children program which fed thousands of impoverished children daily during the early 1970s. Newton also co-founded the Black Panther newspaper service which became one of America's most widely distributed African-American newspapers. In 1967, he was involved in a shootout which led to the death of the police officer John Frey. Although arrested for the murder of Frey, the charges were eventually dismissed.\n\nDespite graduating from high school not knowing how to read, he taught himself literacy by reading Plato's Republic and earned a Ph.D. in social philosophy from the University of California at Santa Cruz's History of Consciousness program in 1980. In 1989, he was murdered in Oakland, California by Tyrone Robinson, a member of the Black Guerrilla Family.`,
        link: 'https://en.wikipedia.org/wiki/Huey_P._Newton',
        infoSrc: 'https://en.wikipedia.org/wiki/Huey_P._Newton'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 18th, 1887',
        title: 'Juan Peiró',
        imgSrc: require('./assets/eventPhotos/Individuals/juanPeiro.jpg'),
        description: `Joan Peiró i Belis (sometimes Juan Peiró) was a Catalan anarchist activist, writer, editor of the anarchist newspaper Solidaridad Obrera, two-time Secretary General of the Confederación Nacional del Trabajo (CNT) and Minister of Industry of the Second Spanish Republic during the Spanish Civil War.\n\nFollowing the fall of the republic in 1939, Peiró fled to France, where he was turned over to Nazi Germany by the Vichy Regime in France. He was executed after the Gestapo turned him over to the Franco government in Spain.`,
        link: 'https://en.wikipedia.org/wiki/Joan_Peir%C3%B3',
        infoSrc: 'https://en.wikipedia.org/wiki/Joan_Peir%C3%B3'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'February 19th, 1910',
        title: 'Philadelphia General Strike (1910)',
        imgSrc: require('./assets/eventPhotos/Events/philadelphiaGeneralStrike.jpg'),
        description: `The General Strike of 1910 was a labor strike by trolley workers of the Philadelphia Rapid Transit Company (PRT) that grew to a citywide riot and general strike in Philadelphia, Pennsylvania.\n\nOn February 19, 1910, PRT fired 173 workers, all of them members of the union, "for the good of the service" and hired replacement workers from New York City. Immediately after the firings, the union leadership ordered the strike, taking their respective trolley cars off the streets effective at 1:00 that afternoon.\n\nWith the union threatening a general strike to hobble the city if strike breakers were brought in, PRT brought in 600 strike breakers, while denying they had done so. The final straw for calling a general strike was the National Guard entering the city to provide protection for PRT's few remaining workers. Members of other unions throughout the city saw this as a clear signal that the city and state governments were uniting in favor of the companies against the unions, and the entire city began a general strike.\n\nThe tactic was successful, and eventually brought PRT to the negotiating table.`,
        link: 'https://en.wikipedia.org/wiki/Philadelphia_general_strike_(1910)',
        infoSrc: 'https://en.wikipedia.org/wiki/Philadelphia_general_strike_(1910)'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 20th, 1805',
        title: 'Angelina Grimké (1805 - 1879)',
        imgSrc: require('./assets/eventPhotos/Individuals/angelinaGrimke.jpg'),
        description: `Angelina Emily Grimké Weld (February 20, 1805 – October 26, 1879) was an American abolitionist, political activist, women's rights advocate, and supporter of the women's suffrage movement. She and her sister Sarah Moore Grimké are the only white Southern women who became abolitionists.\n\nHere is an excerpt from a speech she gave at an integrated abolitionist meeting at Pennsylvania Hall in Philadelphia:\n\n"Those voices without ought to awaken and call out our warmest sympathies. Deluded beings! "they know not what they do." They know not that they are undermining their own rights and their own happiness, temporal and eternal. Do you ask, "what has the North to do with slavery?" Hear it -- hear it. Those voices without tell us that the spirit of slavery is here, and has been roused to wrath by our abolition speeches and conventions"\n\nBy the next day, Pennsylvania Hall was destroyed by arson. Angelina was the final speaker in the Hall.`,
        link: 'https://www.womenshistory.org/education-resources/biographies/angelina-grimke-weld',
        infoSrc: 'https://en.wikipedia.org/wiki/Angelina_Grimk%C3%A9'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'February 21st, 1965',
        title: 'Malcolm X (1925 - 1965)',
        imgSrc: require('./assets/eventPhotos/Individuals/malcolmX.jpg'),
        description: `El-Hajj Malik El-Shabazz, born Malcolm Little, was an American Muslim minister and human rights activist who was a popular figure during the civil rights movement. He is best known for his staunch and controversial black racial advocacy, and for his time spent as a vocal spokesman for the Nation of Islam.\n\nHis policy of allowing for violent self-defense (i.e., achieving freedom "by any means necessary") and opposition to integration stood in stark contrast to his contemporary Martin Luther King Jr., whom Malcolm referred to as a "chump".\n\nOn February 21, 1965, he was preparing to address the Organization of Afro-American Unity in Manhattan's Audubon Ballroom when a quarrel broke out. As Malcolm X and his bodyguards tried to quell the disturbance, a man rushed forward and shot him once in the chest with a sawed-off shotgun and two other men charged the stage firing semi-automatic handguns. Malcolm X was pronounced dead at 3:30 pm, shortly after arriving at Columbia Presbyterian Hospital. The gunman were identified as members of Nation of Islam and convicted of murder.`
      },
      {
        category: 'Assassinations',
        date: 'February 21st, 1934',
        title: 'Augusto Sandino (1895 - 1934)',
        imgSrc: require('./assets/eventPhotos/Individuals/augustoSandino.jpg'),
        description: `Augusto C. Sandino was a Nicaraguan revolutionary and leader of a rebellion between 1927 and 1933 against the U.S. military occupation of Nicaragua.\n\nAlthough he was called a "bandit" by the United States government, his guerilla style warfare against U.S. forces made him a hero throughout much of Latin America, where he became a symbol of resistance to United States domination. His life served as an inspiration to both Che Guevara and Fidel Castro\n\nOn February 21, 1934, Sandino attended a round of talks with Sacasa, the Nicaraguan President. On leaving Sacasa's Presidential Palace, Sandino and five others were stopped in their car at the main gate by local National Guardsmen and were ordered to leave their car. They took Sandino, his brother Socrates, and his two generals to a crossroads section in Larreynaga and executed them.`,
        link: 'https://www.nicaragua.com/blog/nicaragua-augusto-sandino-national-hero/',
        infoSrc: 'https://en.wikipedia.org/wiki/Augusto_C%C3%A9sar_Sandino'
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'February 21st, 1848',
        title: 'Communist Manifesto Published (1848)',
        imgSrc: require('./assets/eventPhotos/Books/communistManifesto.jpg'),
        description: `On February 21st, 1848, The Communist Manifesto, written by Karl Marx with the assistance of Friedrich Engels, was published in London by a group of German-born revolutionary socialists known as the Communist League.\n\nThe famous political pamphlet actually fell into obscurity on its initial publishing, only becoming influential decades later as Marx became more well-known due to his support for the Paris Commune and leadership in the First International.\n\nIn the Manifesto, Marx and Engels succinctly state the materialist and class-centric conception of history characteristic of Marxism, and call for a forcible overthrow of the existing capitalist order.`,
        link: 'https://www.marxists.org/archive/marx/works/1848/communist-manifesto/',
        infoSrc: 'https://www.history.com/this-day-in-history/marx-publishes-manifesto'
      },
    ],
  },
  '2-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 23rd, 1868',
        title: 'W.E.B. Dubois (1868 - 1963)',
        imgSrc: require('./assets/eventPhotos/Individuals/webDubois.jpg'),
        description: `William Edward Burghardt Du Bois was an American sociologist, socialist, historian, civil rights activist, Pan-Africanist, author, writer and editor. Du Bois grew up in a relatively tolerant and integrated community, and after completing graduate work at the University of Berlin and Harvard, where he was the first African American to earn a doctorate. He was also one of the founders of the National Association for the Advancement of Colored People (NAACP).\n\nDu Bois was a prolific author. His collection of essays, "The Souls of Black Folk", is a seminal work in African-American literature; and his 1935 magnum opus, "Black Reconstruction in America", challenged the prevailing orthodoxy that blacks were responsible for the failures of the Reconstruction Era. Borrowing a phrase from Frederick Douglass, he popularized the use of the term "color line" to represent the injustice of the separate but equal doctrine prevalent in American social and political life.\n\nDu Bois believed that capitalism was a primary cause of racism, and he was generally sympathetic to socialist causes throughout his life. Because of this, he was spied upon by the U.S. government, who eventually indicted him for acting as an agent of a foreign state while advocating for nuclear disarmament. Notably, the NAACP did not support Dubois during his trial, which ultimately failed to convict him.`,
        link: 'http://bostonreview.net/race-politics/andrew-lanham-when-w-e-b-du-bois-was-un-american',
        infoSrc: 'https://en.wikipedia.org/wiki/W._E._B._Du_Bois'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'February 24th, 1875',
        title: 'William Bross Lloyd (1875 - 1946)',
        imgSrc: require('./assets/eventPhotos/Individuals/williamLloyd.jpg'),
        description: `William Bross Lloyd (February 24, 1875 – June 30, 1946) was an American attorney and political activist. The oldest son of the muckraking journalist Henry Demarest Lloyd and Jessie Bross, daughter of Chicago Tribune founder William Bross, William Bross Lloyd is best remembered as a founding member and financial angel of the fledgling Communist Labor Party of America, forerunner of the Communist Party USA.\n\nLloyd would be one of 20 Communists tried for conspiring to overthrow the US government in a major Chicago trial, which was prosecuted by future Chicago judge Frank D. Comerford and defended by celebrated attorney Clarence Darrow. The trial, which ran from May 10 to August 2, 1920, resulted in convictions for all of the defendants.\n\nLloyd received a sentence of from 1 to 5 years in prison but remained free on bail pending resolution of the appeal process. Though the appeals process was exhausted in 1922, Lloyd was no longer seen as a threatening advocate of communism by that date and his sentence was accordingly commuted.`,
        link: 'https://en.wikipedia.org/wiki/William_Bross_Lloyd',
        infoSrc: 'https://en.wikipedia.org/wiki/William_Bross_Lloyd'
      },
      {
        category: 'Birthdays',
        date: 'February 24th, 1954',
        title: 'Aurora Levins Morales (1954 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/auroraMorales.jpg'),
        description: `Aurora Levins Morales (born February 24, 1954) is a Puerto Rican Jewish writer and poet. She is significant within Latina feminism and Third World feminism as well as other social justice movements.\n\nIn her collection of essays "Medicine Stories: History, Culture, and the Politics of Integrity", Levins Morales questions traditional accounts of American history and their consistent exclusion of people of color. She argues that traditional historical narratives have had devastating effects on those it has silenced, and oppressed. In an attempt to “heal” this historical trauma of oppression, she designs a “medicinal” history that gives centrality to the marginalized, particularly Puerto Rican women.\n\nLevins Morales strives to make visible those who have been absent from history books while also emphasizing resistance efforts.`,
        link: 'http://www.auroralevinsmorales.com/blog',
        infoSrc: 'https://en.wikipedia.org/wiki/Aurora_Levins_Morales'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'February 25th, 1946',
        title: 'Columbia Race Riot (1946)',
        imgSrc: require('./assets/eventPhotos/Events/columbiaRaceRiot.jpg'),
        description: `The Columbia Race Riot began on this day in 1946, in Columbia, Tennessee. Like other outbreaks of violence in the South in the immediate postwar era, this incident involved military veterans who were unwilling to accept prevailing racial norms upon returning to their hometowns.\n\nIt began when a young white male clerk began harassing the black mother of WWII veteran James Stephenson. Stephenson and the clerk began to fight and the veteran threw the clerk through a window. He and his mother were arrested for disturbing the peace.\n\nThat night, a white mob began to gather outside of the black-owned businesses part of town, called "Mink Side". Rumors were that Stephenson may be lynched, and an armed black crowd began to gather as well. Four policemen tried to enter Mink Side, and, after refusing to heed commands to stop from the black community, were wounded by gunfire.\n\nThe next day, several officers stormed the district, firing randomly into buildings, stealing cash and goods, searching homes without warrants, and took any guns, rifles, and shotguns they could find. When the sweep was over, more than one hundred blacks had been arrested, and about three hundred weapons from the black community had been confiscated.\n\nIn a highly publicized trial, lawyers from the NAACP managed to acquit 23 of 25 blacks of attempted murder charges, and the remaining charges were dropped by prosecutors.`,
        link: 'https://www.blackpast.org/african-american-history/the-columbia-race-riot-1946/',
        infoSrc: 'https://tennesseeencyclopedia.net/entries/columbia-race-riot-1946/'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'February 25th, 1956',
        title: 'Khrushchev Denounces Stalin (1956)',
        imgSrc: require('./assets/eventPhotos/Individuals/nikitaKhrushchev.jpg'),
        description: `"On the Cult of Personality and Its Consequences" was a report delivered by Soviet leader Nikita Khrushchev to the 20th Congress of the Communist Party of the Soviet Union on this day in 1956. Khrushchev's speech was sharply critical of the reign of the deceased Joseph Stalin, particularly with respect to the purges which had especially marked the last years of the 1930s.\n\nThe speech was a decisive turning point in not just Soviet history, but international communist history more broadly. It led, in part, to the Sino-Soviet Split (deterioration of relations between the USSR and communist China) and the so called "Khrushchev Thaw", a relaxation of censorship and gulag-detention policies by the Soviet state.`,
        link: 'https://www.britannica.com/event/Khrushchevs-secret-speech',
        infoSrc: 'https://en.wikipedia.org/wiki/On_the_Cult_of_Personality_and_Its_Consequences'
      },
    ],
  },
  '2-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '2-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'March 1st, 1921',
        title: 'Kronstadt Rebellion (1921)',
        imgSrc: require('./assets/eventPhotos/Events/kronstadtRebellion.jpg'),
        description: `The Kronstadt rebellion was an insurrection of the Soviet sailors, soldiers and civilians of the port city of Kronstadt against the Bolshevik government of the Russian SFSR. It was the last major revolt against the Bolshevik regime on Russian territory during the Russian Civil War.\n\nLed by Stepan Petrichenko, the rebels, including many Communists disappointed in the direction of the Bolshevik government, demanded a series of reforms, such as the election of new soviets, freedom of press and organization for anarchists and trade unionists, end persecution of the peasant class, and the dissolution of the bureaucratic organs of government created during the civil war.\n\nThe revolt began on March 1st and was crushed by force on March 18th by the Red Army. Although there are no reliable figures for rebel battle losses, historians estimate that from 1,200–2,168 persons were executed after the revolt and a similar number were detained in the Solovki Prison Camp.`,
        link: 'https://libcom.org/history/1921-the-kronstadt-rebellion',
        infoSrc: 'https://en.wikipedia.org/wiki/Kronstadt_rebellion'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'March 5th, 1871',
        title: 'Rosa Luxemburg (1871 - 1919)',
        imgSrc: require('./assets/eventPhotos/Individuals/rosaLuxemburg.jpg'),
        description: `Rosa Luxemburg was a Polish Marxist, philosopher, economist, anti-war activist and revolutionary socialist who was born on this day in 1871. Successively, she was a member of the Social Democracy of the Kingdom of Poland and Lithuania (SDKPiL), the Social Democratic Party of Germany (SPD), the Independent Social Democratic Party (USPD) and the Communist Party of Germany (KPD).\n\nIn 1918-19, Luxemberg publicly supported a violent rebellion against the German state. She was captured and summarily executed by the Freikorps, government-sponsored paramilitary groups consisting mostly of World War I veterans. Her body was thrown in the Landwehr Canal in Berlin.\n\nDue to her pointed criticism of both the Leninist and the more moderate social democratic schools of socialism, Luxemburg's legacy is a radical, non-Leninist school of revolutionary socialist thought.`,
        link: 'https://www.versobooks.com/blogs/4203-the-many-interpretations-of-rosa-luxemburg-s-legacy',
        infoSrc: 'https://en.wikipedia.org/wiki/Rosa_Luxemburg'
      },
      {
        category: 'Birthdays',
        date: 'March 5th, 1871',
        title: 'John R. Lawson (1871)',
        imgSrc: require('./assets/eventPhotos/Individuals/johnLawson.jpg'),
        description: `John Rankin Lawson was a Colorado union leader and businessman born on this day in 1871. He was the leader of District 15 of the United Mine Workers of America (UMWA) at the time of the Colorado Coalfield War and the Ludlow Massacre (a brutal and violent suppression of a coal worker's strike).\n\nAlthough there were dozens of people were killed during the Ludlow Massacre, Lawson was the only convicted of murder, for the death of a deputy sheriff who died at Ludlow. He was sentenced to a life of hard labor, but was freed on appeal to the Colorado Supreme Court.`,
        link: 'https://history.denverlibrary.org/colorado-biographies/john-r-lawson-1871-1945',
        infoSrc: 'https://en.wikipedia.org/wiki/John_R._Lawson'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'March 6th, 1984',
        title: "UK Miners' Strike (1984-85)",
        imgSrc: require('./assets/eventPhotos/Events/britishMinersStrike.jpg'),
        description: `The miners' strike of 1984-85 was a major industrial action to shut down the British coal industry in an attempt to prevent colliery closures. It was led by Arthur Scargill of the National Union of Mineworkers (NUM) against the National Coal Board (NCB), a government agency. Opposition to the strike was led by the Conservative government of Prime Minister Margaret Thatcher, who wanted to reduce the power of the trade unions.\n\nThe BBC called it "the most bitter industrial dispute in British history". The number of person-days of work lost to the strike was over 26 million, making it the largest since the 1926 general strike.labor The journalist Seumas Milne said of the strike, "it has no real parallel – in size, duration and impact – anywhere in the world"`,
        link: 'http://news.bbc.co.uk/onthisday/hi/dates/stories/march/12/newsid_3503000/3503346.stm',
        infoSrc: 'https://en.wikipedia.org/wiki/UK_miners%27_strike_(1984%E2%80%9385)'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'March 7th, 1965',
        title: `"Bloody Sunday" in Selma (1965)`,
        imgSrc: require('./assets/eventPhotos/Events/bloodySunday.jpeg'),
        description: `Bloody Sunday was an attack by police on civil rights protestors that happened on this day in 1965. The several hundred protestors were making their first of three attempts to march 54 miles, from Selma, Alabama to the state capitol, Montgomery, in protest of voting discrimination and segregationist repression.\n\nThe protest went according to plan until the marchers crossed the Edmund Pettus Bridge, where they encountered a wall of state troopers and county posse waiting for them on the other side. The police began assaulting the demonstrators, knocking many to the ground and beating them with nightsticks. Another detachment of troopers fired tear gas, and mounted troopers charged the crowd on horseback. One marcher, a fourteen year old girl, required 28 stiches in the back of her head.\n\nThis assault ended the first attempt of protestors to march to Montgomery, but it brought international attention to the protest. On March 21st, a third attempt was made to march to Montgomery, this one successful and culminating in 25,000 people marching to the State Capitol Building. The protest was a watershed moment in the civil rights struggle, and, by the next year, 11,000 black people successfully registered to vote in Selma.`,
        link: 'http://digital.wustl.edu/e/eop/eopweb/you0015.0111.115revandrewyoung.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Selma_to_Montgomery_marches#%22Bloody_Sunday%22_events'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'March 11th, 1926',
        title: 'Ralph Abernathy (1926 - 1990)',
        imgSrc: require('./assets/eventPhotos/Individuals/ralphAbernathy.jpg'),
        description: `Ralph David Abernathy Sr. was an American civil rights activist and Baptist minister, born on this day in 1926. As a leader of the Civil Rights Movement, he was a close friend and mentor of Martin Luther King Jr. He collaborated with King to create the Montgomery Improvement Association which led to the Montgomery bus boycott and co-founded the Southern Christian Leadership Conference (SCLC).\n\nAbernathy is noted for leading, among other demonstrations, the Poor People's Campaign in Washington, D.C., testifying in Congress in favor of the Voting Rights Act of 1982, and brokering a deal between Native Americans and the U.S. government during the Wounded Knee Incident of 1973. His tombstone reads "I tried".`,
        link: 'https://www.wnyc.org/story/dr-and-mrs-ralph-abernathy-interview/',
        infoSrc: 'https://en.wikipedia.org/wiki/Ralph_Abernathy'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-13': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'March 13th, 1979',
        title: 'Revolution in Grenada (1979)',
        imgSrc: require('./assets/eventPhotos/Events/grenadaRevolution.jpg'),
        description: `On this day in 1979, The People's Revolutionary Government (PRG) was proclaimed after the New Jewel Movement overthrew the government of Grenada in a socialist revolution. Maurice Bishop, leader of the New Jewel Movement, became Prime Minister.\n\nThe regime was particularly active in developing social policies: a Centre for Popular Education was established to coordinate government initiatives in education, including literacy campaigns. The learning of Grenada Creole was allowed at school. In the health sector, medical consultations were made free of charge with the help of Cuba, which provided doctors, and milk was distributed to pregnant women and children. The government also began setting up a system of financial loans and equipment for farmers, and agricultural cooperatives were being set up to develop the activity.\n\nThe government ruled by decree, having suspended the constitution the previous regime, until a factional conflict broke out, which resulted in Maurice Bishop's exeuction. Ronald Reagan launched an invasion a few weeks later, in October of 1983.`,
        link: 'https://www.jacobinmag.com/2019/09/grenada-revolution-maurice-bishop-reagan',
        infoSrc: 'https://en.wikipedia.org/wiki/People%27s_Revolutionary_Government_(Grenada)'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'March 17th, 1912',
        title: 'Bayard Rustin (1912 - 1987)',
        imgSrc: require('./assets/eventPhotos/Individuals/bayardRustin.jpg'),
        description: `Bayard Rustin was an American leader in social movements for civil rights, socialism, nonviolence, and gay rights.\n\nRustin worked with A. Philip Randolph on the March on Washington Movement in 1941 to press for an end to racial discrimination in employment. Rustin later organized Freedom Rides and helped to organize the Southern Christian Leadership Conference to strengthen Martin Luther King Jr.'s leadership, teaching King about nonviolence and later serving as an organizer for the March on Washington for Jobs and Freedom.\n\nDuring the 1970s and 1980s, Rustin served on many humanitarian missions, such as aiding refugees from Communist Vietnam and Cambodia. At the time of his death in 1987, he was on a humanitarian mission in Haiti.`,
        link: 'https://en.wikipedia.org/wiki/Bayard_Rustin',
        infoSrc: 'https://www.nps.gov/people/bayard-rustin.htm'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-18': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'March 28th, 1871',
        title: 'Paris Commune Begins (1871)',
        imgSrc: require('./assets/eventPhotos/Events/parisCommune.jpg'),
        description: `The Paris Commune was a radical socialist and revolutionary government that formed in Paris on this day in 1871. A hotbed of working-class radicalism, the Paris Commune was a watershed moment in revolutionary left history. A few months after it was formed, the commune was attacked and defeated by the French National Army on May 21st, 1871, beginning the so-called "Bloody Week".\n\nThe government of the Paris Commune developed a set of policies that tended towards a progressive, secular, and highly democratic social democracy, although its existence was too brief to implement all of them. Among these policies were the separation of church and state, abolition of child labour, abolishment of interest on some forms of debt, as well as the right of employees to take over and run an enterprise if it was deserted by its original owner.\n\nThe Paris Commune was analyzed by many communist thinkers, most notably Karl Marx, who called it a "dictatorship of the proletariat." Vladimir Lenin danced in the snow when the newly formed Bolshevik goverment lasted longer than the Paris Commune. It inspired similar revolutionary attempts around the world, including in Moscow (1905), Petrograd (1917), Shanghai (1927 and 1967), and Seattle (2020).`,
        link: 'https://www.jacobinmag.com/2015/05/kristin-ross-communal-luxury-paris-commune/',
        infoSrc: 'https://en.wikipedia.org/wiki/Paris_Commune'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'March 21st, 1965',
        title: `Selma-Montgomery March (1965)`,
        imgSrc: require('./assets/eventPhotos/Events/selmaMarch.jpg'),
        description: `The Selma to Montgomery marches were three protest marches, held in 1965, along the 54-mile highway from Selma, Alabama, to the state capitol of Montgomery. The marches were organized by nonviolent activists to demonstrate the desire of African-American citizens to exercise their constitutional right to vote, in defiance of segregationist repression. By highlighting racial injustice, they contributed to passage that year of the Voting Rights Act, a landmark federal achievement of the civil rights movement.\n\nThe first attempt to make the march happened on March 7th. After attempting to cross the Edmund Pettus Bridge, police began assaulting the demonstrators, knocking many to the ground, beating them with nightsticks, and firing teargas. One marcher, a fourteen year old girl, required 28 stiches in the back of her head.\n\nThis assault ended the first attempt of protestors to march to Montgomery, but it brought international attention to the protest. After a federal court ruled that the march was legal, finally, on this day in 1965, a third and successful attempt to march to Montgomery. By its end, 25,000 people marched to steps of the State Capitol Building in Montgomery. The protest was a watershed moment in the civil rights struggle, and, by the next year, 11,000 black people successfully registered to vote in Selma.`,
        link: 'http://digital.wustl.edu/e/eop/eopweb/you0015.0111.115revandrewyoung.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Selma_to_Montgomery_marches#%22Bloody_Sunday%22_events'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'March 21st, 1961',
        title: 'Yanis Varoufakis (1961 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/yanisVaroufakis.jpg'),
        description: `Ioannis "Yanis" Varoufakis is a Greek economist, academic, philosopher and politician. He has been Secretary-General of DiEM25, a left-wing political party, since he founded it in 2018.\n\nIn January 2015, Varoufakis was appointed Greek Minister of Finance. He led tense negotiations with Greece's creditors during the government-debt crisis. He failed, however, to reach an agreement with the European troika (European Commission, European Central Bank, and International Monetary Fund) leading to the 2015 bailout referendum. The referendum rejected the troika bailout terms, and the day afterwards Varoufakis resigned as Minister of Finance, being replaced by Euclid Tsakalotos.\n\nVaroufakis has since appeared in numerous debates, lectures and interviews, describing in detail what he sees as corruption and anti-democratic governance within the European Union.\n\nIn February 2016, he launched the Democracy in Europe Movement 2025 (DiEM25) In the 2019 legislative election, DiEM25 was the sixth most voted-for party, amassing nine parliamentary seats, with Varoufakis himself returning to the Hellenic Parliament. In December 2018, Varoufakis launched the Progressive International with United States Senator Bernie Sanders.`,
        link: 'https://www.theguardian.com/books/2017/may/03/yanis-varoufakis-greece-greatest-political-memoir',
        infoSrc: 'https://en.wikipedia.org/wiki/Yanis_Varoufakis'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'March 21st, 1960',
        title: 'Sharpeville Massacre (1960)',
        imgSrc: require('./assets/eventPhotos/Events/sharpevilleMassacre.jpg'),
        description: `The Sharpeville massacre, which happened on this day in 1960, occured at the police station in the South African township of Sharpeville. After a day of demonstrations against segregation laws, a crowd of about 7,000 protesters went to the police station. The South African Police opened fire on the crowd, killing 69 people and injuring 180 others. 29 children were casualties of the violence, and many people were shot in the back as they fled.\n\nA storm of international protest followed the Sharpeville shootings, including sympathetic demonstrations in many countries and condemnation by the United Nations. Sharpeville marked a turning point in South Africa's history; the country found itself increasingly isolated in the international community.\n\nThe Sharpeville massacre contributed to the banning of the PAC and ANC (anti-apartheid groups) as illegal organisations. The massacre was one of the catalysts for a shift from passive resistance to armed resistance by these organisations.`,
        link: 'https://www.sahistory.org.za/article/sharpeville-massacre-21-march-1960',
        infoSrc: 'https://en.wikipedia.org/wiki/Sharpeville_massacre'
      },
    ],
  },
  '3-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'March 25th, 1903',
        title: 'Julio Mella (1903 - 1929)',
        imgSrc: require('./assets/eventPhotos/Individuals/julioMella.jpg'),
        description: `Julio Antonio Mella McPartland was an activist and is known as one of the founders of the "internationalized" Cuban Communist Party, in 1925 by leaders of the party in Moscow, Soviet Union. After becoming a political activist, Mella had studied law in the University of Havana but was expelled in 1925.\n\nAt the time of his murder, he was working as a Cuban Marxist revolutionary in Mexico, working with other exiles and supporters to organize the overthrow of General Gerardo Machado in Cuba. Mella was assassinated on January 10, 1929, while walking home at night. It is unknown who killed Mella, as both Machado and the Cuban Communist Party, which was afraid Mella had come under the influence of Trotsky (who lived in Mexico at the time), had cause to assassinate him.`,
        link: 'https://en.wikipedia.org/wiki/Julio_Antonio_Mella',
        infoSrc: 'https://en.wikipedia.org/wiki/Julio_Antonio_Mella'
      },
      {
        category: 'Birthdays',
        date: 'March 25th, 1873',
        title: 'Rudolf Rocker (1873 - 1958)',
        imgSrc: require('./assets/eventPhotos/Individuals/rudolfRocker.jpg'),
        description: `Johann Rudolf Rocker, born on this day in 1873, was a German anarchist writer and activist. Though often described as an anarcho-syndicalist, he was a self-professed anarchist without adjectives, believing that anarchist schools of thought represented "only different methods of economy" and that the first objective for anarchists was "to secure the personal and social freedom of men".\n\nRocker was involved in helping organize a number of labor strikes and represented the federation at the International Anarchist Congress in Amsterdam in 1907. Rocker also wrote a number of important texts on the history and practice of anarchism, and he was well-read in his lifetime - his readers included figures Thomas Mann, Albert Einstein, Herbert Read, and Bertrand Russell.`,
        link: 'https://libcom.org/library/london-years-rudolf-rocker',
        infoSrc: 'https://en.wikipedia.org/wiki/Rudolf_Rocker'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '3-31': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'March 31st, 1927',
        title: 'César Chávez (1927 - 1993)',
        imgSrc: require('./assets/eventPhotos/Individuals/cesarChavez.jpg'),
        description: `César Estrada Chávez was an American labor leader, community organizer, and Latino American civil rights activist. Along with Dolores Huerta, he co-founded the National Farm Workers Association (NFWA), which later merged to become the United Farm Workers (UFW) union. Ideologically, his world-view combined leftist politics with Roman Catholic social teachings.\n\nIn the early 1970s, Chavez sought to expand the UFW's influence outside California by opening branches in other U.S. states. He also pushed a campaign against illegal immigration into the U.S., which generated violence along the U.S.-Mexico border. Interested in co-operatives as a form of organization, he established a remote commune in the foothills of the Tehachapi Mountains.\n\nA controversial figure, UFW critics raised concerns about Chavez's firm personal control of the union, the purges of those he deemed disloyal, and the personality cult built around him, while farm-owners considered him a communist subversive. For organized labor and leftist groups in the U.S. he became an icon and he posthumously became a "folk saint" among Mexican Americans.`,
        link: 'https://en.wikipedia.org/wiki/Cesar_Chavez',
        infoSrc: 'https://www.bloomsbury.com/us/the-crusades-of-cesar-chavez-9781608197101/'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 1st, 1942',
        title: 'Richard Wolff (1942 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/richardWolff.jpg'),
        description: `Richard David Wolff (born April 1, 1942) is an American economist, known for his work on economic methodology and class analysis. He is Professor Emeritus of Economics at the University of Massachusetts Amherst, and currently a Visiting Professor in the Graduate Program in International Affairs of the New School University in New York.\n\nIn 1988, Wolff co-founded "Rethinking Marxism", a still running academic journal dedicated to Marxist analyses of economics, culture, and society.\n\nToday, Wolff hosts the weekly 30-minute-long program Economic Update, which is produced by the non-profit Democracy at Work, which he co-founded. Wolff is featured regularly in television, print, and internet media; the New York Times Magazine has named him "America's most prominent Marxist economist".`,
        link: 'https://www.democracyatwork.info/',
        infoSrc: 'https://en.wikipedia.org/wiki/Richard_D._Wolff'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 2nd, 1950',
        title: 'Ruth Wilson Gilmore (1950 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/ruthGilmore.jpg'),
        description: `Ruth Wilson Gilmore is an a prison abolitionist and prison scholar. She is the Director of the Center for Place, Culture, and Politics and professor of geography in Earth and Environmental Sciences at The City University of New York. She has been credited with "more or less single-handedly" inventing the study of carceral geography.\n\nShe is a cofounder of many social justice organizations, including California Prison Moratorium Project. In 1998, she was one of the cofounders of Critical Resistance along with Angela Davis. In 2003, she cofounded Californians United for a Responsible Budget (CURB) to fight jail and prison construction and currently serves on its board.\n\nGilmore has been a leading scholar and speaker on topics including prisons, decarceration, racial capitalism, oppositional movements, and state-making.`,
        link: 'https://www.nytimes.com/2019/04/17/magazine/prison-abolition-ruth-wilson-gilmore.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Ruth_Wilson_Gilmore'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'April 3rd, 1964',
        title: `"The Ballot or The Bullet" Speech (1964)`,
        imgSrc: require('./assets/eventPhotos/Events/ballotBullet.jpg'),
        description: `On this day in 1964, Malcolm X delivered the famous "The Ballot or the Bullet" speech at Cory Methodist Church in Cleveland, Ohio. Malcolm X advised African Americans to judiciously exercise their right to vote, but he cautioned that, if the government continued to prevent African Americans from attaining full equality, it might be necessary for them to take up arms. Here is a brief excerpt:\n\n"I went to a white school over here in Mason, Michigan. The white man made the mistake of letting me read his history books. He made the mistake of teaching me that Patrick Henry was a patriot, and George Washington – wasn't nothing non-violent about ol' Pat, or George Washington. 'Liberty or death' is was what brought about the freedom of whites in this country from the English.\n\nThis is why I say it's the ballot or the bullet. It's liberty or it's death. It's freedom for everybody or freedom for nobody.\n\n...\n\nA revolution is bloody, but America is in a unique position. She's the only country in history in the position actually to become involved in a bloodless revolution. All she's got to do is give the Black man in this country everything that's due him. Everything."`,
        link: 'http://www.digitalhistory.uh.edu/disp_textbook.cfm?smtid=3&psid=3624',
        infoSrc: 'https://en.wikipedia.org/wiki/The_Ballot_or_the_Bullet'
      },
    ],
  },
  '4-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 4th, 1947*',
        title: 'Abdullah Öcalan (1947 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/abdullahOcalan.png'),
        description: `*Although some records claim Öcalan was born on April 4th, Öcalan himself claims to not know the exact date of his birth, beyond knowing it was in the years 1946 or 1947.\n\nAbdullah Öcalan, also known as Apo (short for both Abdullah and "uncle" in Kurdish), is a Kurdish leftist political theoretician, political prisoner and one of the founding members of the militant Kurdistan Workers' Party (PKK). Öcalan helped found the PKK in 1978, and led it into the Kurdish-Turkish conflict in 1984. For most of his leadership, he was based in Syria, which provided sanctuary to the PKK until the late 1990s.\n\nAfter being forced to leave Syria, Öcalan was abducted in Nairobi in 1999 by the Turkish National Intelligence Agency (MIT) (with the support of the CIA) and taken to Turkey, where he was sentenced to death under Article 125 of the Turkish Penal Code, which concerns the formation of armed organisations. From prison, Öcalan has published several books. Jineology, also known as the science of women, is a form of feminism advocated by Öcalan and subsequently a fundamental tenet of the Kurdistan Communities Union.\n\nÖcalan's philosophy of democratic confederalism, which draws heavily from Murray Bookchin's concept of "communalism", is a strong influence on the political structures of Rojava, an autonomous polity formed in Syria in 2011.`,
        infoSrc: 'https://web.archive.org/web/20131017171527/http://www.chris-kutschera.com/A/Ocalan%20Last%20Interview.htm',
        link: 'https://en.wikipedia.org/wiki/Abdullah_%C3%96calan'
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'April 4th, 1968',
        title: 'MLK Jr. (1929 - 1968)',
        imgSrc: require('./assets/eventPhotos/Individuals/mlkJr.jpg'),
        description: `Martin Luther King Jr. was an American Christian minister and activist who became the most visible spokesperson and leader in the civil rights movement from 1955 until his assassination in 1968. King is best known for advancing civil rights through nonviolence and civil disobedience, inspired by his Christian beliefs and the nonviolent activism of Mahatma Gandhi.\n\nOn October 14, 1964, King won the Nobel Peace Prize for combating racial inequality through nonviolent resistance. In 1965, he helped organize the Selma to Montgomery marches. In his final years, he expanded his focus to include opposition towards poverty, capitalism, and the Vietnam War.\n\nFor his activism, he was the target of multiple assassination attempts, arrested 23 times, and surveilled and harassed by the police. In particular, FBI Director J. Edgar Hoover harassed Dr. King by making him a target of COINTELPRO, a secret program where FBI agents spied on, infiltrated, and attempted to discredit "subversive" political movements.\n\nIn 1968, King and the Southern Christian Leadership Conference organized the "Poor People's Campaign" to address issues of economic justice. King traveled the country to assemble "a multiracial army of the poor" that would march on Washington to engage in nonviolent civil disobedience at the Capitol until Congress created an "economic bill of rights" for poor Americans.\n\nBefore the plans for the march could come to fruition, however, King was assassinated in Memphis, Tennessee while supporting striking black sanitation workers. James Earl Rey was convicted for the murder, but speculation of government involvement has persisted for decades after his death.`,
        link: 'https://kinginstitute.stanford.edu/encyclopedia/assassination-martin-luther-king-jr',
        infoSrc: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 7th, 1931',
        title: 'Daniel Ellsberg (1931 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/danielEllsberg.jpg'),
        description: `Daniel Ellsberg is an American economist, activist and former United States military analyst who, while employed by the RAND Corporation, precipitated a national political controversy in 1971 when he released the Pentagon Papers, a top-secret Pentagon study of the U.S. government decision-making in relation to the Vietnam War.\n\nOn January 3, 1973, Ellsberg was charged under the Espionage Act of 1917 along with other charges of theft and conspiracy, carrying a total maximum sentence of 115 years. Due to governmental misconduct and illegal evidence-gathering he was dismissed of all charges against Ellsberg on May 11, 1973.`,
        link: 'https://www.npr.org/2018/01/19/579101965/daniel-ellsberg-explains-why-he-leaked-the-pentagon-papers',
        infoSrc: 'https://en.wikipedia.org/wiki/Daniel_Ellsberg'
      },
      {
        category: 'Birthdays',
        date: 'April 7th, 1925',
        title: 'Edward Herman (1925 - 2017)',
        imgSrc: require('./assets/eventPhotos/Individuals/edwardHerman.jpg'),
        description: `Edward Samuel Herman was an American economist, media scholar and social critic. Herman is known for his media criticism, in particular his propaganda model hypothesis developed with Noam Chomsky, a frequent co-writer.\n\nTheir most well-known work together is "Manufacturing Consent".`,
        link: 'https://en.wikipedia.org/wiki/Edward_S._Herman',
        infoSrc: 'https://en.wikipedia.org/wiki/Edward_S._Herman'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 9th, 1898',
        title: 'Paul Robeson (1898 - 1976)',
        imgSrc: require('./assets/eventPhotos/Individuals/paulRobeson.jpg'),
        description: `Paul Leroy Robeson was an American bass baritone concert artist and stage and film actor who became famous both for his cultural accomplishments and for his political activism.\n\nHis political activities began with his involvement with unemployed workers and anti-imperialist students whom he met while studying in London, and continued with support for the Republican cause in the Spanish Civil War and his opposition to fascism.\n\nIn the United States, he also became active in the Civil Rights Movement and other social justice campaigns. His sympathies for the Soviet Union and for communism, and his criticism of the United States government and its foreign policies, caused him to be blacklisted during the McCarthy era.`,
        link: 'https://en.wikipedia.org/wiki/Paul_Robeson',
        infoSrc: 'https://en.wikipedia.org/wiki/Paul_Robeson'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'April 10th, 1919',
        title: 'Emiliano Zapata (1879 - 1919)',
        imgSrc: require('./assets/eventPhotos/Individuals/emilianoZapata.jpg'),
        description: `Emiliano Zapata Salazar was a leading figure in the Mexican Revolution, the main leader of the peasant revolution in the state of Morelos, and the inspiration of the agrarian movement called Zapatismo.\n\nZapata was born in the rural village of Anenecuilco in Morelos State, where peasant communities were under increasing pressure from the small landowning class who monopolized land and water resources for sugar cane production with the support of dictator Porfirio Díaz.\n\nEarly on, Zapata participated in political movements against Diaz and the landowning hacendados, and when the Revolution broke out in 1910 he was positioned as a central leader of the peasant revolt in Morelos. Zapata was responsible for defeating and ousting various invading armies from Morelos on multiple occasions.\n\nOn April 10, 1919, Jesús Guajardo invited Zapata to a meeting, intimating that he intended to defect to the revolutionaries. When Zapata arrived at the meeting, however, Guajardo's men riddled him with bullets instead.`,
        link: 'https://en.wikipedia.org/wiki/Plan_of_Ayala',
        infoSrc: 'https://en.wikipedia.org/wiki/Emiliano_Zapata'
      },
      {
        category: 'Assassinations',
        date: 'April 10th, 1993',
        title: 'Chris Hani (1942 - 1993)',
        imgSrc: require('./assets/eventPhotos/Individuals/chrisHani.jpg'),
        description: `Chris Hani, born Martin Thembisile Hani, was the leader of the South African Communist Party and chief of staff of uMkhonto we Sizwe, the armed wing of the African National Congress (ANC). He received military training in the Soviet Union and served in campaigns in the Zimbabwean War of Liberation, also called the Rhodesian Bush War.\n\nHani was a fierce opponent of the apartheid government, but supported the suspension of the ANC's armed struggle in favour of negotiations after becoming head of the party in 1991. He was assassinated by Janusz Walus, an anti-communist Polish immigrant, on 10 April 1993.`,
        link: 'https://web.archive.org/web/20170225112546/http://www.sacp.org.za/main.php?ID=2294',
        infoSrc: 'https://en.wikipedia.org/wiki/Chris_Hani'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'April 12th, 1921',
        title: 'Shanghai Massacre (1921)',
        imgSrc: require('./assets/eventPhotos/Events/shanghaiMassacre.jpg'),
        description: `The Shanghai massacre of April 12th, 1927 was the violent suppression of Communist Party of China (CPC) organizations in Shanghai by the military forces of Generalissimo Chiang Kai-shek and conservative factions in the Kuomintang. Following the incident, those conservative forces carried out a full-scale purge of Communists in all areas under their control, and even more violent suppression occurred in Guangzhou and Changsha.\n\nBefore dawn on April 12th, nationalist troops began to attack district offices controlled by the union workers. Under an emergency decree, Chiang ordered the 26th Army to disarm the workers' militias. The union workers organized a mass meeting denouncing Chiang Kai-shek the next day, and thousands of workers and students went to the headquarters of the 2nd Division of the 26th Army to protest. Soldiers opened fire, killing 100 and wounding many more.\n\nThis incident marked the beginning of a prolonged purge of communists from the Wuhan province, and the ensuing violence killed over 300,000 people in less than three years. Notably, Stalin sent a telegram to the Chinese communists on June 1st, urging them to organize militarily against the government.`,
        link: 'https://en.wikipedia.org/wiki/Shanghai_massacre',
        infoSrc: 'https://www.socialistalternative.org/2017/04/12/china-90-years-chiang-kai-sheks-shanghai-massacre/'
      },
    ],
  },
  '4-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 13th, 1957',
        title: 'Amy Goodman (1957 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/amyGoodman.png'),
        description: `Amy Goodman is an American broadcast journalist, syndicated columnist, investigative reporter, and author. Her investigative journalism career includes coverage of the East Timor independence movement and Chevron Corporation's actions in Nigeria. Goodman has been arrested when covering anti-war protests at the RNC, as well as charged with riot for covering attacks on Dakota Pipeline Access protestors.\n\nSince 1996, she has been the main host of Democracy Now!, a progressive global news program broadcast daily on radio, television and the Internet. She is the recipient of numerous awards, including the Thomas Merton Award in 2004, a Right Livelihood Award in 2008, and an Izzy Award in 2009 for "special achievement in independent media".`,
        link: 'https://www.democracynow.org/2017/5/22/watch_tavis_smiley_interviews_amy_goodman',
        infoSrc: 'https://en.wikipedia.org/wiki/Amy_Goodman'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'April 15th, 1949',
        title: 'Pacifica Radio 1st Broadcast (1949)',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: `Pacifica Foundation is an American non-profit organization based out of Berkeley, California, which owns five independently operated, non-commercial, listener-supported radio stations.\n\nPacifica Network, operated by the foundation, was the first public radio network in the United States and it is the world's oldest listener-funded radio network. Today, two of its most well-known programs are Democracy Now! and Free Speech Radio News. Its first broadcast was on this day, in 1949.\n\nThe Pacifica Radio Archives, housed at station KPFK in Los Angeles, is the oldest public radio archive in the United States documenting more than five decades of grassroots political, cultural, and performing arts history, including interviews with John Coltrane, James Baldwin, and Langston Hughes.`,
        link: 'https://pacifica.org/about_history.php',
        infoSrc: 'https://pacifica.org/'
      },
    ],
  },
  '4-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'April 18th, 1912',
        title: 'Paint Creek Strike (1912)',
        imgSrc: require('./assets/eventPhotos/Events/paintCreek.png'),
        description: `The Paint Creek–Cabin Creek Strike was a confrontation between striking coal miners and coal operators in Kanawha County, West Virginia, centered on the area enclosed by two streams, Paint Creek and Cabin Creek. It is considered part of the "Coal Wars", a series of armed conflicts between workers and coal companies from the 1890s - 1930s.\n\nThe strike lasted from April 18, 1912 through July 1913 and over 5,000 workers participated. The confrontation directly caused perhaps fifty violent deaths, as well as many more deaths indirectly caused by starvation and malnutrition among the striking miners. In terms of casualties, it counts among the worst conflicts in American labor union history.`,
        link: 'https://www.wvencyclopedia.org/articles/1798',
        infoSrc: 'https://en.wikipedia.org/wiki/Paint_Creek%E2%80%93Cabin_Creek_strike_of_1912'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'April 19th, 1960',
        title: 'Looby House Bombing (1960)',
        imgSrc: require('./assets/eventPhotos/Events/loobyBombing.jpg'),
        description: `Z. Alexander Looby was a Nashville politician and famous civil rights attorney who worked with the NAACP. He is notable for his defense of the 25 black men charged with murder as part of the 1946 Columbia Race Riots and supporting the students participating in the Nashville Sit-ins of 1960.\n\nOn this day in 1960, a bundle of dynamite was lobbed towards the front of the house of Z. Alexander Looby, a Nashville councilman and famed civil rights attorney. Rolling onto the home’s concrete foundation, it detonated, the blast destroying the front of the house.\n\nLooby survived, and the bombing was the catalyst for a march held later that day, in which nearly 3,000 people marched to City Hall in total silence. Once the crowd converged on City Hall, they were met on the steps of the plaza by Mayor Ben West, who admitted to the crowd that he supported desgregating the lunch counters.`,
        link: 'https://en.wikipedia.org/wiki/Z._Alexander_Looby',
        infoSrc: 'https://www.atlasobscura.com/places/site-of-the-looby-house-bombing'
      },
    ],
  },
  '4-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'April 20th, 1914',
        title: 'Ludlow Massacre (1914)',
        imgSrc: require('./assets/eventPhotos/Events/ludlowMassacre.jpg'),
        description: `The Ludlow Massacre was a massacre perpetrated by anti-striker militia during the Colorado Coalfield War. The Colorado National Guard and Colorado Fuel and Iron Company guards attacked a tent colony of 1,200 striking coal miners and their families in Ludlow, Colorado, on April 20, 1914, with the National Guard using machine guns to fire into the colony.\n\nApproximately 21 people, including miners' wives and children, were killed. The chief owner of the mine, John D. Rockefeller, Jr., was widely excoriated for having orchestrated the massacre. In retaliation for the massacre at Ludlow, the miners armed themselves and attacked dozens of anti-union establishments over the next ten days, destroying property and engaging in several skirmishes with the Colorado National Guard along a 40-mile front from Trinidad to Walsenburg.\n\nAn estimated 69 to 199 deaths occurred during the strike. Historian Thomas G. Andrews has called it the "deadliest strike in the history of the United States", and the entire series of events is commonly known as the Colorado Coalfield War. Although the strikers' demands were not met, the event electrified national discussions of labor and had a positive impact on labor rights in the long run.`,
        link: 'https://www.zinnedproject.org/news/tdih/ludlow-massacre/',
        infoSrc: 'https://en.wikipedia.org/wiki/Ludlow_Massacre'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 22nd, 1870',
        title: 'Vladimir Lenin (1870 - 1924)',
        imgSrc: require('./assets/eventPhotos/Individuals/LeninRev.jpg'),
        description: `Vladimir Ilyich Ulyanov, better known by his alias Lenin, was a Russian revolutionary, politician, and political theorist. He served as head of government of Soviet Russia from 1917 to 1924 and of the Soviet Union from 1922 to 1924. Under his administration, Russia and then the wider Soviet Union became a one-party communist state governed by the Russian Communist Party. Ideologically a communist, he developed a variant of Marxism known as Leninism.\n\nWidely considered one of the most significant and influential figures of the 20th century, Lenin was the posthumous subject of a pervasive personality cult within the Soviet Union until its dissolution in 1991. He became an ideological figurehead behind Marxism–Leninism and thus a prominent influence over the international communist movement. \n\nA controversial and highly divisive historical figure, Lenin is viewed by supporters as a champion of socialism and the working class, while critics on both the left and right emphasize his role as founder and leader of an authoritarian regime responsible for political repression and mass killings.`,
        link: 'https://en.wikipedia.org/wiki/Vladimir_Lenin',
        infoSrc: 'https://en.wikipedia.org/wiki/Vladimir_Lenin',
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-24': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'April 24th, 1916',
        title: 'Easter Rising (1916)',
        imgSrc: require('./assets/eventPhotos/Events/easterRising.jpg'),
        description: `The Easter Rising was an armed insurrection in Ireland that began on this day in 1916. The Rising was launched by Irish republicans to end British rule in Ireland and establish an independent Irish Republic while the United Kingdom was fighting the First World War. It was the most significant uprising in Ireland since the rebellion of 1798 and the first armed action of the Irish revolutionary period.\n\nThe rebellion was a collaboration of multiple militant Irish organizations, including the Irish Volunteers, the Irish Citizen Army, and Cumann na mBan, an Irish women's paramilitary force. Notable leaders include schoolmaster and Irish language activist Patrick Pearse and socialist James Connolly. Together, they seized strategically important buildings in Dublin and proclaimed an Irish Republic.\n\nThe Easter Rising lasted for six days and killed nearly 500 people, wounding 2,600 more. Sixteen of the Rising's leaders were executed in May 1916, but the insurrection, the nature of the executions, and subsequent political developments ultimately contributed to an increase in popular support for Irish independence.`,
        link: 'http://www.easter1916.net/',
        infoSrc: 'https://en.wikipedia.org/wiki/Easter_Rising'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'April 24th, 1954',
        title: 'Mumia Abu-Jamal (1954 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/mumiaJamal.jpg'),
        description: `Mumia Abu-Jamal is a political activist and journalist who was convicted of murder and sentenced to death in 1982 for the murder of Philadelphia police officer Daniel Faulkner. The trial has become very controversial - Amnesty International issued a statement in 2000, saying "the proceedings used to convict and sentence Mumia Abu-Jamal to death were in violation of minimum international standards that govern fair trial procedures and the use of the death penalty".\n\nAbu-Jamal became widely known while on death row for his writings and commentary on the criminal justice system in the United States. He is also a journalist with Prison Radio. After numerous appeals, his death penalty sentence was overturned by a Federal court. In 2011, the prosecution agreed to a sentence of life imprisonment without parole. He entered the general prison population early the following year.`,
        link: 'https://www.democracynow.org/2016/10/7/mumia_abu_jamal_on_mass_incarceration',
        infoSrc: 'https://en.wikipedia.org/wiki/Mumia_Abu-Jamal'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '4-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'May 1st',
        title: 'May Day',
        imgSrc: require('./assets/eventPhotos/Events/mayDay.jpg'),
        description: `International Workers' Day, also known as labor Day or May Day, is a celebration of laborers and the working classes that is promoted by the international labor movement, and occurs every year on May 1st. The date was chosen in 1889 by the Second International to commemorate a notable campaign for the eight-hour day, which culminated in the deadly Haymarket Affair in Chicago on May 4th, 1886. May Day subsequently became an annual event.\n\nThe Haymarket Affair began with a general strike that demanded an eight-hour day. On May 4th, the police acted to disperse a public assembly in support of the strike when an unidentified person threw a bomb. The police responded by firing on the crowd of protestors. The ensuing violence led to the deaths of seven police officers, four to eight civilians, and wounded approximately one hundred people on either side.\n\nHundreds of labor leaders and sympathizers were later rounded-up and four were executed by hanging after conviction in a trial widely perceived as a miscarriage of justice. The following day in Milwaukee Wisconsin, state militia fired on a crowd of strikers killing seven, including a schoolboy and a man feeding chickens in his yard.`,
        link: 'https://archive.iww.org/history/library/misc/origins_of_mayday/',
        infoSrc: 'https://en.wikipedia.org/wiki/International_Workers%27_Day'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'May 3rd, 1926',
        title: 'Salford General Strike (1926)',
        imgSrc: require('./assets/eventPhotos/Events/salfordStrike.jpg'),
        description: `The Salford General Strike began on this day in 1926. It was a planned due to coal mine owners proposing drastic reductions in pay for the miners in June of 1925. The strike included workers from mines, shipyards, mill workers, and engineers, and is one of the first general strikes in UK history.\n\nThe dockers firmly refused to allow any movement of goods on the docks, causing a bread shortage. The government tried to forcibly move flour and grain to bakeries, but were prevented from doing so by the mill workers and dockers.`,
        link: 'https://libcom.org/history/general-strike-salford-1911-edmund-ruth-frow',
        infoSrc: 'http://www.salfordstar.com/article.asp?id=100'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'May 4th, 1919',
        title: 'May 4th Movement (1919)',
        imgSrc: require('./assets/eventPhotos/Events/may4thMovement.jpg'),
        description: `The May Fourth Movement began on this day in 1919, growing out student protests in Beijing. The demonstrations sparked nation-wide protests and spurred an upsurge in Chinese nationalism, a shift towards political mobilization, a shift away from cultural activities, a move towards a mass base and a move away from traditional intellectual and political elites.\n\nOn the afternoon of May 4, over 4,000 students of Yenching University, Peking University and other schools marched from many points to gather in front of Tiananmen. They shouted such slogans as "struggle for the sovereignty externally, get rid of the national traitors at home", "do away with the Twenty-One Demands", and "don't sign the Versailles Treaty".\n\nThe next day, students in Beijing as a whole went on strike and in the larger cities across China, students, patriotic merchants, and workers joined protests. The demonstrators skillfully appealed to the newspapers and sent representatives to carry the word across the country. In Shanghai, a general strike of merchants and workers nearly devastated the entire Chinese economy.\n\nIn the years that followed, many Chinese political thinkers turned to leftist politics in the wake of the political upheaval of the May 4th Movement. In 1939, Mao Zedong claimed that the May Fourth Movement was a stage leading toward the fulfillment of his own communist revolution.`,
        link: 'https://www.britannica.com/event/May-Fourth-Movement',
        infoSrc: 'https://en.wikipedia.org/wiki/May_Fourth_Movement'
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'May 4th, 1886',
        title: 'The Haymarket Affair (1886)',
        imgSrc: require('./assets/eventPhotos/Events/haymarketAffair.jpg'),
        description: `The Haymarket affair (also known as the Haymarket massacre, Haymarket riot, or Haymarket Square riot) was the aftermath of a bombing that took place at a labor demonstration on May 4, 1886, at Haymarket Square in Chicago.\n\nIt began as a peaceful rally in support of workers striking for an eight-hour work day, the day after police killed one and injured several workers. After police began trying to disperse the rally, an unknown person threw a dynamite bomb at the police. The bomb blast and ensuing gunfire resulted in the deaths of seven police officers, four to eight civilians, and wounded approximately one hundred people on either side.\n\nIn the internationally publicized legal proceedings that followed, eight anarchists were convicted of conspiracy. Seven were sentenced to death and one to a term of 15 years in prison. Illinois Governor Richard J. Oglesby commuted two of the sentences to terms of life in prison; another committed suicide in jail rather than face the gallows. The other four were hanged on November 11, 1887.\n\nAmong supporters of the labor movement in the United States and abroad and others, the trial was widely believed to have been unfair, and even a serious miscarriage of justice. The Haymarket Affair was commemorated by the creation of the holiday "May Day", which honors the struggles of the working classes and is celebrated on May 1st of every year.`,
        link: 'https://en.wikipedia.org/wiki/Haymarket_affair',
        infoSrc: 'https://www.britannica.com/event/Haymarket-Affair'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 4th, 1952',
        title: 'Ruth First (1952 - 1982)',
        imgSrc: require('./assets/eventPhotos/Individuals/ruthFirst.jpg'),
        description: `Ruth First was a South African anti-apartheid activist and scholar.\n\nAs an anti-apartheid activist, First had been harassed for years by the South African government. In 1956, First, alongside 155 other activists, were all charged and acquitted of treason in the country's infamous "Treason Trial".\n\nAfter the state of emergency that followed the Sharpeville massacre in 1960, she was banned from political participation. First could not attend meetings, publish, and or be quoted. In 1963, she was imprisoned and held in isolation without charge for 117 days under the Ninety-Day Detention Law, the first white woman to be detained under this law.\n\nIn August of 1982, First was assassinated by South African police in Mozambique, where she was working in exile.`,
        link: 'https://www.sahistory.org.za/people/ruth-heloise-first',
        infoSrc: 'https://en.wikipedia.org/wiki/Ruth_First'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'May 5th, 1931',
        title: 'Battle of Evarts (1931)',
        imgSrc: require('./assets/eventPhotos/Events/battleOfEvarts.jpg'),
        description: `The Battle of Evarts occurred in Harlan, Kentucky during the Harlan County Wars. The coal miners went on strike for improved working conditions, higher wages, and more housing options for their families.\n\nThe titular battle began when armed miners confronted a motorcade of supplies being delivered to scabs. The shooting only lasted 15 minutes, but killed four people, including Jim Daniels, one of the most hated anti-union deputies in the county, and wounded several more.\n\nThe strike ended when the Kentucky National Guard was called in to put an end to the violence.`,
        link: 'https://en.wikipedia.org/wiki/Battle_of_Evarts',
        infoSrc: 'https://parallelnarratives.com/remembering-bloody-harlan/'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 5th, 1818',
        title: 'Karl Marx (1818 - 1883)',
        imgSrc: require('./assets/eventPhotos/Individuals/karlMarx.jpg'),
        description: `Born in Trier, Germany, Marx studied law and philosophy at university. His best-known works are the "The Communist Manifesto" and the three-volume "Das Kapital". His political and philosophical thought had enormous influence on subsequent intellectual, economic and political history, and his name has been used as an adjective, a noun and a school of social theory.\n\nMarx's critical theories about society, economics and politics – collectively understood as Marxism – hold that human societies develop through class conflict. In capitalism, this manifests itself in the conflict between the ruling classes (known as the bourgeoisie) that control the means of production and the working classes (known as the proletariat) that enable these means by selling their labor power in return for wages. \n\nEmploying a critical approach known as historical materialism, Marx predicted that, like previous socio-economic systems, capitalism produced internal tensions which would lead to its self-destruction and replacement by a new system known as socialism.`,
        link: 'https://en.wikipedia.org/wiki/Karl_Marx',
        infoSrc: 'https://en.wikipedia.org/wiki/Karl_Marx'
      },
      {
        category: 'Birthdays',
        date: 'May 5th, 1893',
        title: 'Farabundo Martí (1893 - 1931)',
        imgSrc: require('./assets/eventPhotos/Individuals/farabundoMarti.jpg'),
        description: `Agustín Farabundo Martí Rodríguez, popularly known as Farabundo Martí, was a Marxist-Leninist activist and a revolutionary leader in El Salvador during the 1932 Salvadoran peasant massacre. Martí is also known for co-founding of the Communist Party of Central America, as well as helping lead a communist alternative to the Red Cross known as "International Red Aid".\n\nIn 1931, Martí returned to El Salvador and helped start a guerrilla revolt of indigenous farmers. The Communist-led peasant uprising against dictator Maximiliano Hernández Martínez, fomented by collapsing coffee prices, enjoyed some initial success, but was soon drowned in a bloodbath, being crushed by the Salvadoran military ten days after it had begun. Over 30,000 indigenous people were killed at what was to be a "peaceful meeting" in 1932; this became known as "La Matanza" ("The Slaughter").\n\nFor his role in the uprising, Martí was executed by Salvadoran President Hernández Martínez.`,
        link: 'https://en.wikipedia.org/wiki/La_Matanza',
        infoSrc: 'https://en.wikipedia.org/wiki/Farabundo_Mart%C3%AD'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'May 9th, 1934',
        title: 'West Coast Waterfront Strike (1934)',
        imgSrc: require('./assets/eventPhotos/Events/waterfrontStrike.jpg'),
        description: `In the spring and summer of 1934, over 12,000 longshoremen on the West Coast of the United States went out on strike from their waterfront jobs for 83 days. The ranks of longshoremen were soon strengthened by the other craft workers in the marine industries, including sailors, engineers, firemen, and more.\n\nAt its height, almost 35,000 West Coast maritime workers participated in the strike, and, for four days in July, 130,000 workers in San Francisco held a general strike in solidarity with the maritime workers.\n\nThe strike lasted until October of 1934, and labor unions were granted significantly more power over the hiring and working conditions of the docks. During the striking months, nine people were killed, hundreds were arrested, and the clampdown on shipping cost the waterfront employers an estimated $45 million.\n\nThe ILWU continues to recognize "Bloody Thursday" (July 5th, when police officers shot into a crowd of strikers) by shutting down all West Coast ports in honor of all the workers killed by police during the strike.`,
        link: 'https://en.wikipedia.org/wiki/1934_West_Coast_waterfront_strike',
        infoSrc: 'https://depts.washington.edu/dock/34strikehistory_intro.shtml'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 9, 1877',
        title: 'Peter Maurin (1877-1949)',
        imgSrc: require('./assets/eventPhotos/Individuals/peterMaurin.jpg'),
        description: `Peter Maurin was a French Catholic social activist, theologian, and De La Salle Brother who founded the anarchist Catholic Worker Movement in 1933 with Dorothy Day.\n\nAside from his writings in the publication "Catholic Worker", Maurin expressed his philosophy through short pieces of verse that became known as Easy Essays.`,
        link: 'https://en.wikipedia.org/wiki/Peter_Maurin',
        infoSrc: 'https://en.wikipedia.org/wiki/Peter_Maurin'
      },
      {
        category: 'Birthdays',
        date: 'May 9th, 1800',
        title: 'John Brown (1800 - 1859)',
        imgSrc: require('./assets/eventPhotos/Individuals/johnBrown.jpg'),
        description: `John Brown was an American abolitionist. Brown advocated the use of armed insurrection to overthrow the institution of slavery in the United States. He first gained national attention when he led small groups of volunteers during the Bleeding Kansas crisis of 1856. He was dissatisfied with the pacifism of the organized abolitionist movement: "These men are all talk. What we need is action—action!"\n\nIn October 1859, Brown led a raid on the federal armory at Harpers Ferry, Virginia (today West Virginia), intending to start a slave liberation movement that would spread south through the mountainous regions of Virginia and North Carolina. He seized the armory, but seven people were killed, and ten or more were injured. Brown intended to arm slaves with weapons from the armory, but only a small number of local slaves joined his revolt. Within 36 hours, those of Brown's men who had not fled were killed or captured by local farmers, militiamen, and U.S. Marines, the latter led by Robert E. Lee.\n\nBrown was hastily tried for treason against the Commonwealth of Virginia, the murder of five men, and inciting a slave insurrection; he was found guilty on all counts and was hanged. He was the first person executed for treason in the history of the United States.`,
        link: 'https://en.wikipedia.org/wiki/John_Brown_(abolitionist)',
        infoSrc: 'https://en.wikipedia.org/wiki/John_Brown_(abolitionist)'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'May 11th, 1894',
        title: 'Pullman Strike',
        imgSrc: require('./assets/eventPhotos/Events/pullmanStrike.jpg'),
        description: `The Pullman Strike was a nationwide railroad strike in the United States that lasted from May 11 to July 20, 1894, and a turning point for US labor law. It pitted the American Railway Union (ARU) against the Pullman Company, the main railroads, and the federal government of the United States under President Grover Cleveland.\n\nThe conflict began in Pullman, Chicago, on May 11 when nearly 4,000 factory employees of the Pullman Company began a wildcat strike in response to recent reductions in wages. After a federal injuction to stop the strike was ignored, 12,000 troops were sent in to forcibly break the strike. All in all, 30 strikers were killed, 57 were wounded, and property damage exceeded $80 million.\n\nThe Pullman Strike was a watershed moment in American labor history - Eugene V. Debs, who led the strike, was arrested and imprisoned, greatly radicalizing his politics, and the political aftermath led President Cleveland to declare "Labor Day" a national holiday in an effort to appease organized labor.`,
        link: 'https://www.britannica.com/event/Pullman-Strike',
        infoSrc: 'https://en.wikipedia.org/wiki/Pullman_Strike'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 11th, 1973',
        title: 'Ellsberg Charged With Espionage (1973)',
        imgSrc: require('./assets/eventPhotos/Individuals/danielEllsberg.jpg'),
        description: `Daniel Ellsberg is an American economist, activist and former United States military analyst who, while employed by the RAND Corporation, precipitated a national political controversy in 1971 when he released the Pentagon Papers, a top-secret Pentagon study of the U.S. government decision-making in relation to the Vietnam War.\n\nOn January 3rd, 1973, Ellsberg was charged under the Espionage Act of 1917 along with other charges of theft and conspiracy, carrying a total maximum sentence of 115 years. Due to governmental misconduct and illegal evidence-gathering he was dismissed of all charges against Ellsberg on on this day in 1973.`,
        link: 'https://www.npr.org/2018/01/19/579101965/daniel-ellsberg-explains-why-he-leaked-the-pentagon-papers',
        infoSrc: 'https://en.wikipedia.org/wiki/Daniel_Ellsberg'
      },
    ],
  },
  '5-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 12th, 1968',
        title: "Poor People's March (1968)",
        imgSrc: require('./assets/eventPhotos/Events/poorPeoplesMarch.jpg'),
        description: `The Poor People's Campaign, or Poor People's March on Washington, was a 1968 effort to gain economic justice for poor people in the United States. It was organized by Martin Luther King, Jr. and the Southern Christian Leadership Conference (SCLC), and carried out under the leadership of Ralph Abernathy in the wake of King's assassination.\n\nAfter presenting an organized set of demands to Congress and executive agencies, participants set up a 3,000-person protest camp on the Washington Mall, where they stayed for six weeks in the spring of 1968. Among those demands was a proposal for an "economic bill of rights" that included a commitment to full employment, a guaranteed annual income measure, and more low-income housing. for poor Americans of all races.`,
        link: 'https://www.theatlantic.com/politics/archive/2018/04/mlk-last-march/555953/',
        infoSrc: 'https://en.wikipedia.org/wiki/Poor_People%27s_Campaign'
      },
    ],
  },
  '5-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 13th, 1985',
        title: 'MOVE Bombing (1985)',
        imgSrc: require('./assets/eventPhotos/Events/moveBombing.jpg'),
        description: `In Philadelphia, Pennsylvania, on May 13, 1985, the Philadelphia Police bombed a residential home occupied by the black militant anarcho-primitivist group MOVE, and the Philadelphia Fire Department let the subsequent fire burn out of control following a standoff. The standoff with MOVE, a black liberation organization, was initiated by the Philadelphia police to serve an eviction notice. Ten people, including 4 children, died in the fire.\n\nEyewitnesses claim that the victims were prevented from fleeing the fire by police gunfire upon escape. Police Commissioner Sambor infamously ordered the fire department to "let the fire burn", destroying 65 nearby homes. Althought an investigation found that the law enforcement and fire department actions were negligent, no criminal charges were filed.`,
        link: 'https://en.wikipedia.org/wiki/1985_MOVE_bombing',
        infoSrc: 'https://www.theguardian.com/us-news/2020/may/10/move-1985-bombing-reconciliation-philadelphia'
      },
    ],
  },
  '5-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 15th, 1891*',
        title: 'Sid Hatfield (1891 - 1921)',
        imgSrc: require('./assets/eventPhotos/Individuals/sidHatfield.jpg'),
        description: `*1891 or 1893\n\nWilliam "Sid" Hatfield was Police Chief of Matewan, West Virginia who was supportive of coal miners' attempts to unionize and helped them resist the efforts of the union-busting Baldwin-Felts Detective Agency.\n\nHe is most known for his role in "The Battle of Matewan", a shootout between Hatfield, armed miners, and Baldwin-Felts agents that killed ten people. The shootout occured when Hatfield and Albert Felts tried to arrest each other, which culminated in Hatfield killing Felts.\n\nHatfield was later assassinated by Baldwin-Felts agents while standing trial for murder, which increased the tensions between coal miners and company owners.`,
        link: 'https://www.wvencyclopedia.org/articles/1576',
        infoSrc: 'https://en.wikipedia.org/wiki/Sid_Hatfield'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'May 16th, 1771',
        title: 'Battle of Alamance (1771)',
        imgSrc: require('./assets/eventPhotos/Events/alamance.jpg'),
        description: `The War of the Regulation, also known as Regulator Movement, was an uprising in British America's Carolina colonies, lasting from about 1765 to 1771, in which citizens took up arms against colonial officials, whom they viewed as corrupt, saying their "highest study is the promotion of their wealth". Historian Howard Zinn considered this a form of class conflict, as the Regulators described themselves as poor peasants, oppressed by the wealthier classes.\n\nOn this day in 1771, these tensions came to a head in the Battle of Alamance, which was fought between several thousand rebel Regulators and a North Carolina milita. Approximately two dozen men were killed. Notably, most ex-Regulators did not support the American government in the Revolutionary War that began five years later.`,
        link: 'https://en.wikipedia.org/wiki/War_of_the_Regulation',
        infoSrc: 'https://www.historyisaweapon.com/defcon1/zinntyr4.html'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 18th, 1895',
        title: 'Augusto Sandino (1895 - 1934)',
        imgSrc: require('./assets/eventPhotos/Individuals/augustoSandino.jpg'),
        description: `Augusto C. Sandino was a Nicaraguan revolutionary and leader of a rebellion between 1927 and 1933 against the U.S. military occupation of Nicaragua.\n\nAlthough he was called a "bandit" by the United States government, his guerilla style warfare against U.S. forces made him a hero throughout much of Latin America, where he became a symbol of resistance to United States domination. His life served as an inspiration to both Che Guevara and Fidel Castro\n\nOn February 21, 1934, Sandino attended a round of talks with Sacasa, the Nicaraguan President. On leaving Sacasa's Presidential Palace, Sandino and five others were stopped in their car at the main gate by local National Guardsmen and were ordered to leave their car. They took Sandino, his brother Socrates, and his two generals to a crossroads section in Larreynaga and executed them.`,
        link: 'https://www.nicaragua.com/blog/nicaragua-augusto-sandino-national-hero/',
        infoSrc: 'https://en.wikipedia.org/wiki/Augusto_C%C3%A9sar_Sandino'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'May 19th, 1920',
        title: 'The Battle of Matewan (1920)',
        imgSrc: require('./assets/eventPhotos/Events/battleOfMatewan.jpg'),
        description: `The Battle of Matewan (also known as the Matewan massacre) was a shootout in the town of Matewan in Mingo County and the Pocahontas Coalfield mining district, in southern West Virginia. It occurred on May 19, 1920 between local coal miners, including Matewan Police Chief Sid Hatfield, and the Baldwin–Felts Detective Agency.\n\nThe Baldwin-Felts agents had come to Matewan to evict several families from their homes that morning. When they tried to leave, Hatfield confronted the agents and a gunfight broke out, killing ten people, including seven of the Baldwin-Felts detectives.\n\nHatfield survived and was immediately regarded as a hero by the coal miners. He was later assassinated while standing trial for murder by other Baldwin-Felts agents, increasing the tensions between coal company workers and owners.`,
        link: 'https://www.wvencyclopedia.org/articles/1576',
        infoSrc: 'https://en.wikipedia.org/wiki/Battle_of_Matewan'
      },
      {
        category: 'Rebellion',
        date: 'May 19th, 1713',
        title: 'Boston Bread Riots (1713)',
        imgSrc: require('./assets/eventPhotos/Events/bostonBreadRiots.jpg'),
        description: `In the early 1710s, Andrew Belcher, a wealthy merchant, had been exporting grain to the Caribbean because the profit was greater there. In 1713, Boston experienced a severe food shortage crisis.\n\nOn this day in 1713, two hundred people rioted on the Boston Common. They then attacked Belcher's ships, broke into his warehouses looking for corn, and shot the lieutenant governor when he tried to interfere.`,
        link: 'https://en.wikipedia.org/wiki/Boston_Bread_riot',
        infoSrc: 'https://www.historyisaweapon.com/defcon1/zinnvil3.html'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 19th, 1890',
        title: 'Hồ Chí Minh (1890 - 1969)',
        imgSrc: require('./assets/eventPhotos/Individuals/hoChiMinh.jpg'),
        description: `Hồ Chí Minh, born Nguyễn Sinh Cung and also known as Bác Hồ ("Uncle Ho"), was a North Vietnamese revolutionary and politician. He served as Prime Minister of North Vietnam from 1945 to 1955 and President from 1945 to 1969. Ideologically a Marxist–Leninist, he served as Chairman and First Secretary of the Workers' Party of Vietnam.\n\nBecause he spent 30 years traveling the world in his youth, Hồ could speak fluently as well as read and write professionally in French, English, Russian, Cantonese and Mandarin as well as his mother tongue Vietnamese. In addition, he was reported to speak conversational Esperanto. In the 1920s, he was bureau chief/editor of many newspapers which he established to criticize French Colonial Government of Indochina and serving communism propaganda purposes. Examples are Le Paria (The Pariah), plublished in Paris, and Thanh Nien (Youth).\n\nHồ Chí Minh led the Việt Minh independence movement from 1941 onward, establishing the Communist-ruled Democratic Republic of Vietnam (North Vietnam) in 1945 and defeating the French Union in 1954 at the Battle of Điện Biên Phủ, ending the First Indochina War. He was a key figure in the People's Army of Vietnam and the Việt Cộng during the Vietnam War, which lasted from 1955 to 1975. North Vietnam was victorious and was reunified with the Republic of South Vietnam (South Vietnam) in 1976.`,
        link: 'https://en.wikipedia.org/wiki/Ho_Chi_Minh',
        infoSrc: 'https://en.wikipedia.org/wiki/Ho_Chi_Minh'
      },
      {
        category: 'Birthdays',
        date: 'May 19th, 1925',
        title: 'Malcolm X (1925 - 1965)',
        imgSrc: require('./assets/eventPhotos/Individuals/malcolmX.jpg'),
        description: `El-Hajj Malik El-Shabazz, born Malcolm Little, was an American Muslim minister and human rights activist who was a popular figure during the civil rights movement. He is best known for his staunch and controversial black racial advocacy, and for his time spent as a vocal spokesman for the Nation of Islam.\n\nHis policy of allowing for violent self-defense (i.e., achieving freedom "by any means necessary") and opposition to integration stood in stark contrast to his contemporary Martin Luther King Jr., whom Malcolm referred to as a "chump".\n\nDuring his 1964 pilgrimage to Mecca, he witnessed Muslims of "all colors, from blue-eyed blonds to black-skinned Africans" treat each other as equals in worship. Because of this, Malcolm X became convinced that Islam could be used as a means to achieve racial equality. He was assassinated the next year by agents of The Nation of Islam.`,
        link: 'https://web.archive.org/web/20120114124627/http://www.usnews.com/usnews/culture/articles/921123/archive_018698.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/Malcolm_X'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 20th, 1743',
        title: 'Toussaint Louverture (1743 - 1803)',
        imgSrc: require('./assets/eventPhotos/Individuals/toussaintLouverture.jpg'),
        description: `François-Dominique Toussaint Louverture was a Haitian general and best-known leader of the Haitian Revolution. This revolution was the first successful slave uprising in the Americas, and Haiti was the first country in the region to outlaw slavery.\n\nLouverture's history in the revolution was complicated - first fought for the Spanish against the French; then for France against Spain and Great Britain; and finally, he fought on behalf of independence of Saint-Domingue in the era of Napoleonic France.\n\nInitially, Louverture was only supportive of fighting for better living conditions for slaves, but, after committing to the full abolition of slavery in 1791, he issued a famous proclamation at Camp Turel of St. Domingue: "Brothers and friends, I am Toussaint Louverture; perhaps my name has made itself known to you. I have undertaken vengeance. I want Liberty and Equality to reign in St Domingue. I am working to make that happen. Unite yourselves to us, brothers and fight with us for the same cause."\n\nLouverture was eventually tricked into being arrested by Brunet, a French General, and deported to France, where he died of unknown causes while imprisoned. Shortly thereafter, the colony finally achieved independence under the leadership of Jean-Jacques Dessalines.`,
        link: 'https://en.wikipedia.org/wiki/Toussaint_Louverture',
        infoSrc: 'https://en.wikipedia.org/wiki/Haitian_Revolution'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-21': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'May 21st, 1871',
        title: 'Paris Commune Dissolves (1871)',
        imgSrc: require('./assets/eventPhotos/Events/parisCommune.jpg'),
        description: `The Paris Commune was a radical socialist and revolutionary government that formed in Paris on March 18th, 1871. A hotbed of working-class radicalism, the Paris Commune was a watershed moment in revolutionary left history. A few months after it was formed, the commune was attacked and defeated by the French National Army on this day in 1871, beginning the so-called "Bloody Week".\n\nAfter crushing the rebellion, the French government imprisoned almost 44,000 for their role in the uprising, and estimated deaths from the fighting are around 20,000.\n\nThe government of the Paris Commune developed a set of policies that tended towards a progressive, secular, and highly democratic social democracy, although its existence was too brief to implement all of them. Among these policies were the separation of church and state, abolition of child labour, abolishment of interest on some forms of debt, as well as the right of employees to take over and run an enterprise if it was deserted by its original owner.\n\nThe Paris Commune was analyzed by many communist thinkers, most notably Karl Marx, who called it a "dictatorship of the proletariat." Vladimir Lenin danced in the snow when the newly formed Bolshevik goverment lasted longer than the Paris Commune. It inspired similar revolutionary attempts around the world, including in Moscow (1905), Petrograd (1917), Shanghai (1927 and 1967), and Seattle (2020).`,
        link: 'https://www.jacobinmag.com/2015/05/kristin-ross-communal-luxury-paris-commune/',
        infoSrc: 'https://en.wikipedia.org/wiki/Paris_Commune'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 22nd, 1942',
        title: 'Richard Oakes (1942 - 1972)',
        imgSrc: require('./assets/eventPhotos/Individuals/richardOakes.jpg'),
        description: `Richard Oakes was a Mohawk Native American activist. He spurred Native American studies in university curricula and is credited for helping to change US federal government Termination policies of Native American peoples and culture. Oakes led a 19-month occupation of Alcatraz Island with LaNada Means, approximately 50 California State University students, and 37 others.\n\nIn 1972, Oakes was shot and killed in Sonoma, California, by Michael Morgan, a YMCA camp manager. Oakes allegedly violently confronted him, and Morgan responded by drawing a handgun and fatally shooting Oakes. Oakes was unarmed when he was shot. Morgan claimed he acted in self-defense and was acquitted on charges of voluntary manslaughter.`,
        link: 'https://www.npr.org/sections/thetwo-way/2017/05/22/529504340/richard-oakes-who-occupied-alcatraz-for-native-rights-gets-a-birthday-honor',
        infoSrc: 'https://en.wikipedia.org/wiki/Richard_Oakes_(activist)'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 23rd, 1926',
        title: 'Joe Slovo (1926 - 1995)',
        imgSrc: require('./assets/eventPhotos/Individuals/joeSlovo.jpg'),
        description: `Joe Slovo was a South African politician and opponent of the apartheid system born on this day in 1926. A Marxist-Leninist, he was a long-time leader and theorist in the South African Communist Party (SACP), a leading member of the African National Congress (ANC), and a commander of the ANC's military wing Umkhonto we Sizwe (MK).\n\nSlovo was married to Ruth First, another prominent South African anti-apartheid activist who was assassinated by the government. He, along with First, was arrested and detained for two months during the Treason Trial of 1956, and lived in exile from 1963 to 1990, conducting operations against the apartheid régime from the United Kingdom, Angola, Mozambique, and Zambia.`,
        link: 'https://www.sahistory.org.za/people/joe-slovo',
        infoSrc: 'https://en.wikipedia.org/wiki/Joe_Slovo'
      },
      {
        category: 'Birthdays',
        date: 'May 23rd, 1810',
        title: 'Margaret Fuller (1810 - 1850)',
        imgSrc: require('./assets/eventPhotos/Individuals/margaretFuller.jpg'),
        description: `Sarah Margaret Fuller Ossoli, born on this day in 1810, was an American journalist, editor, critic, translator, and women's rights advocate associated with the American transcendentalism movement. She was the first American female war correspondent, writing for Horace Greeley's New-York Tribune.\n\nHer book "Woman in the Nineteenth Century" is considered the first major feminist work in the United States, and later feminists like Susan B. Anthony cited her as an inspiration. Fuller was also an advocate of abolishing slavery and prison reform.`,
        link: 'https://www.biography.com/writer/margaret-fuller',
        infoSrc: 'https://en.wikipedia.org/wiki/Margaret_Fuller'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 26th, 1938',
        title: 'House Committee on Un-American Activities (1938)',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: `On May 26, 1938, the House Committee on Un-American Activities (HUAC) was established as a special investigating committee, reorganized from its previous incarnations as the Fish Committee and the McCormack-Dickstein Committee, to investigate alleged disloyalty and subversive activities on the part of private citizens, public employees, and those organizations suspected of having communist or fascist ties. It became a permenant committee in 1948.\n\nThe HUAC is perhaps most notorious for causing de facto media censorship among artists suspected of having communist sympathies. Blacklisted artists whose careers were damaged by the committee included Charlie Chaplin, Orson Welles, Alan Lomax, Paul Robeson, and Yip Harburg.`,
        link: 'https://en.wikipedia.org/wiki/House_Un-American_Activities_Committee',
        infoSrc: 'https://en.wikipedia.org/wiki/House_Un-American_Activities_Committee'
      },
    ],
  },
  '5-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 27th, 1818',
        title: 'Amelia Bloomer (1818 - 1894)',
        imgSrc: require('./assets/eventPhotos/Individuals/ameliaBloomer.png'),
        description: `Amelia Jenks Bloomer, born on this day in 1818, was an American women's rights advocate. Even though she did not create the women's clothing reform style known as bloomers, her name became associated with it because of her early and strong advocacy.\n\nBy publishing the maganize "The Lily", she became the first woman to own, operate and edit a newspaper for women. Notably, Bloomer also introduced Susan B. Anthony and Elizabeth Cady Stanton to each other.`,
        link: 'https://en.wikipedia.org/wiki/The_Lily_(newspaper)',
        infoSrc: 'https://en.wikipedia.org/wiki/Amelia_Bloomer'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '5-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 28th, 1830',
        title: 'Indian Removal Act (1830)',
        imgSrc: require('./assets/eventPhotos/Events/indianRemovalAct.jpg'),
        description: `The Indian Removal Act was signed into law on this day in 1830 by United States President Andrew Jackson. The law authorized the president to negotiate with southern Native American tribes for their removal to federal territory west of the Mississippi River in exchange for white settlement of their ancestral lands.\n\nThe law is considered unitary act of systematic genocide because it discriminated against an ethnic group in such a way as to effectively guarantee the death of vast numbers of its population. The Act was signed by Andrew Jackson and it was strongly enforced by his and his successor's administrations.\n\nThe enforcement of this law directly led to the infamous "Trail of Tears", which killed over 10,000 indigenous peoples. Although some tribes left peacefully, other tribes fought back, leading to the Second Seminole War of 1835.`,
        link: 'https://www.britannica.com/topic/Indian-Removal-Act',
        infoSrc: 'https://en.wikipedia.org/wiki/Indian_Removal_Act'
      },
    ],
  },
  '5-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 29th, 1944',
        title: 'Maurice Bishop (1944 - 1983)',
        imgSrc: require('./assets/eventPhotos/Individuals/mauriceBishop.jpg'),
        description: `Maurice Rupert Bishop was a Grenadian revolutionary and the leader of New Jewel Movement – popular efforts in the areas of socio-economic development, education, and black liberation. Bishop headed the People's Revolutionary Government of Grenada from 1979 to 1983, when he was dismissed from his post and shot in a coup, leading to civil unrest and a US invasion of the country.\n\nAlthough Bishop grew up in Grenada, he left to study in London as a young adult. While there, Bishop acquired a law degree and studied the works of Lenin, Mao Zedong, and Julius Nyerere.\n\nIn 1970, he returned to Grenada and was active politically, representing striking nurses in court and leading the "New Jewel Movement", which ultimately put him in power. In 1979, the New Jewel Movement successfully led a coup against Eric Gairy and made Bishop the Prime Minister of Grenada.\n\nAmong Bishop's core principles were workers' rights, women's rights, and the struggle against racism and apartheid. Women were given equal pay and paid maternity leave, and sex discrimination was made illegal. Organisations for education, health care, youth affairs, and literacy were also established. Due to his efforts, illiteracy and unemployment greatly declined.\n\nIn 1983, disputes within the party culminated in Bishop, along with seven members of his cabinet, being captured and executed. After his assassination, the Organization of Eastern Caribbean States (OECS) and Grenada's governor-general Paul Scoon appealed to the United States for help. Within the month, Ronald Reagan launched an invasion of Grenada.`,
        link: 'https://www.zinnedproject.org/news/tdih/grenada-revolution/',
        infoSrc: 'https://en.wikipedia.org/wiki/Maurice_Bishop'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 29th, 1851',
        title: `"Ain't I a Woman?" Speech (1851)`,
        imgSrc: require('./assets/eventPhotos/Individuals/sojournerTruth.jpg'),
        description: `Sojourner Truth was an American abolitionist and women's rights activist. Truth was born into slavery in Swartekill, New York, but escaped with her infant daughter to freedom in 1826. After going to court to recover her son in 1828, she became the first black woman to win such a case against a white man.\n\nOn this day in 1851, she gave what's now known as the "Ain't I a Woman?" speech, which was delivered to the Women's Convention in Akron, Ohio. Here is a short excerpt (from Marius Robinson's transcription):\n\n"I want to say a few words about this matter. I am a woman's rights. [sic] I have as much muscle as any man, and can do as much work as any man. I have plowed and reaped and husked and chopped and mowed, and can any man do more than that? I have heard much about the sexes being equal. I can carry as much as any man, and can eat as much too, if I can get it. I am as strong as any man that is now.\n\nAs for intellect, all I can say is, if a woman have a pint, and a man a quart – why can't she have her little pint full? You need not be afraid to give us our rights for fear we will take too much, – for we can't take more than our pint'll hold."`,
        link: 'https://en.wikipedia.org/wiki/Sojourner_Truth',
        infoSrc: 'https://en.wikipedia.org/wiki/Ain%27t_I_a_Woman%3F'
      },
    ],
  },
  '5-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'May 30th, 1814',
        title: 'Mikhail Bakunin (1814 - 1876)',
        imgSrc: require('./assets/eventPhotos/Individuals/mikhailBakunin.jpg'),
        description: `Mikhail Alexandrovich Bakunin was a Russian revolutionary anarchist and founder of collectivist anarchism. He is considered among the most influential figures of anarchism and a major founder of the social anarchist tradition. Bakunin's prestige as an activist also made him one of the most famous ideologues in Europe, gaining substantial influence among radicals throughout Russia and Europe.\n\nBakunin is remembered as a major figure in the history of anarchism, an opponent of Marxism, especially of the dictatorship of the proletariat, and for his predictions that Marxist regimes would be one-party dictatorships over the proletariat, not by the proletariat. His book, God and the State, has been widely translated and remains in print. Bakunin continues to influence anarchists such as Noam Chomsky.\n\nIt is worth noting that Bakunin espoused anti-Semitic views in some of his works, writing "...and where there is centralisation of the state, there must necessarily be a central bank, and where such a bank exists, the parasitic Jewish nation, speculating with the labor of the people, will be found."\n\nHis biographer Mark Leier wrote that, "Bakunin had a significant influence on later thinkers, ranging from Peter Kropotkin and Errico Malatesta to the Wobblies and Spanish anarchists in the Civil War to Herbert Marcuse, E.P. Thompson, Neil Postman, and A.S. Neill, down to the anarchists gathered these days under the banner of 'anti-globalization.'"`,
        link: 'https://en.wikipedia.org/wiki/Mikhail_Bakunin',
        infoSrc: 'https://en.wikipedia.org/wiki/Mikhail_Bakunin',
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 30th, 1741',
        title: 'The New York Conspiracy Panic (1741)',
        imgSrc: require('./assets/eventPhotos/Events/nyConspiracy.jpg'),
        description: `The Conspiracy of 1741, also known as the Negro Plot of 1741 or the Slave Insurrection of 1741, was a purported plot by slaves and poor whites in the British colony of New York in 1741 to revolt and level New York City with a series of fires. Historians disagree as to whether such a plot existed and, if there was one, its scale.\n\nThe city of New York was hysterical with paranoia over poor whites and slaves collaborating to burn the city down. During the court cases, the prosecution kept changing the grounds of accusation and repeatedly ignored the alibis proferred by slaveowners for their slaves' non-involvement. At its height, over half of the city's male slaves over the age of 16 were implicated in the plot and jailed.\n\nOn this day in 1741, the first two victims, two slaves named Kofi and Quaco, were hanged. After the hysteria ended, eighteen slaves were hanged, thirteen burned alive, four whites were executed, and dozens of people had been deported out of the city.`,
        link: 'https://www.britannica.com/event/New-York-slave-rebellion-of-1741',
        infoSrc: 'https://en.wikipedia.org/wiki/New_York_Conspiracy_of_1741'
      },
    ],
  },
  '5-31': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'May 31st, 1921',
        title: 'Tulsa Race Massacre (1921)',
        imgSrc: require('./assets/eventPhotos/Events/tulsaMassacre.jpg'),
        description: `The Tulsa Race Massacre took place on May 31 and June 1, 1921, when mobs of white residents attacked black residents and businesses of the Greenwood District in Tulsa, Oklahoma. It has been called "the single worst incident of racial violence in American history", with estimates ranging from 75-300 people killed, 800 wounded, and 10,000 black families made homeless from the destruction of property.\n\nThe massacre began over Memorial Day weekend after 19-year-old Dick Rowland, a black shoeshiner, was accused of assaulting Sarah Page, the 17-year-old white elevator operator of the nearby Drexel Building. An armed group of black men showed up to the jail to counter the lynch mob had been formed, and shots rang out as a white member of the mob tried to disarm one of the black men. The initial violence left ten people dead, and a mob of enraged white people stormed black neighborhoods, indiscriminately killing people and destroying property.\n\nFor 75 years (until 1996), the massacre was largely omitted from local, state, and national histories. It was not recognized in the Tulsa Tribune feature of "Fifteen Years Ago Today" or "Twenty-five Years Ago Today", and a 2017 report detailing the history of the Tulsa Fire Department from 1897 until the date of publication makes no mention of the 1921 fire.`,
        link: 'https://www.nytimes.com/2020/06/19/opinion/tulsa-race-riot-massacre-graves.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Tulsa_race_massacre'
      },
    ],
  },
  '6-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 2nd, 1953',
        title: 'Cornel West (1953 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/cornelWest.jpg'),
        description: `Cornel Ronald West (born June 2, 1953) is an American philosopher, political activist, social critic, author, and public intellectual. The son of a Baptist minister, West focuses on the role of race, gender, and class in American society and the means by which people act and react to their "radical conditionedness". A radical democrat and advocate for social democracy, West draws intellectual contributions from multiple traditions, including Christianity, the black church, Marxism, and transcendentalism. Among his most influential books are Race Matters (1994) and Democracy Matters (2004).\n\nWest has described himself as a "non-Marxist socialist" (partly because he does not view Marxism and Christianity as reconcilable) and serves as honorary chair of the Democratic Socialists of America, which he has described as "the first multiracial, socialist organization close enough to my politics that I could join". He also described himself as a "radical democrat, suspicious of all forms of authority" in the Matrix-themed documentary The Burly Man Chronicles.\n\nWest was arrested on October 13, 2014, while protesting against the shooting of Michael Brown and participating in Ferguson October, and again on August 10, 2015, while demonstrating outside a courthouse in St. Louis on the one-year anniversary of Brown's death.`,
        link: 'https://en.wikipedia.org/wiki/Cornel_West',
        infoSrc: 'https://en.wikipedia.org/wiki/Cornel_West'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 5th, 1868',
        title: 'James Connolly (1868 - 1916)',
        imgSrc: require('./assets/eventPhotos/Individuals/jamesConnolly.jpg'),
        description: `James Connolly was a Scottish-born Irish republican and socialist leader. He was a member of the Industrial Workers of the World and founder of the Irish Socialist Republican Party. With James Larkin, he was centrally involved in the Dublin lock-out of 1913, as a result of which the two men formed the Irish Citizen Army (ICA) that year.\n\nHe opposed British rule in Ireland, and was one of the leaders of the Easter Rising of 1916. He was executed by firing squad following the Rising.`,
        link: 'https://en.wikipedia.org/wiki/Easter_Rising',
        infoSrc: 'https://en.wikipedia.org/wiki/James_Connolly'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'June 6th, 1835',
        title: 'Philadelphia General Strike (1835)',
        imgSrc: require('./assets/eventPhotos/Events/philadelphiaGeneralStrike1.jpg'),
        description: `The 1835 Philadelphia general strike took place in Philadelphia, Pennsylvania. It was the first general strike in North America and involved some 20,000 workers who struck for a ten-hour workday and increased wages. The strike ended in complete victory for the workers and paved the way for a ten-hour day in the American and European labor movements more broadly.\n\nInfluenced by labor agitation in Boston, in 1835 unskilled Irish workers on the Schuylkill River coal wharves went on strike for a ten-hour day. The coal heavers were soon joined by workers from many other trades, including leather dressers, printers, carpenters, bricklayers, masons, house painters, bakers, and city employees.\n\nOn June 6, a mass meeting of workers, lawyers, doctors, and a few businessmen, was held in the State House courtyard. The meeting unanimously adopted a set of resolutions giving full support to the workers' demand for wage increases and a shorter workday, as well as increased wages for women workers and a boycott of any coal merchant who worked his men more than ten hours.\n\nThe strike quickly came to a close after city public works employees joined the action. The Philadelphia city government announced that the "hours of labor of the working men employed under the authority of the city corporation would be from 'six to six' during the summers season, allowing one hour for breakfast, and one for dinner." On June 22, three weeks after the coal heavers initially struck, the ten-hour system and an increase in wages for piece-workers was adopted in the city.`,
        link: 'https://journals.psu.edu/pmhb/article/view/30723/30478',
        infoSrc: 'https://en.wikipedia.org/wiki/1835_Philadelphia_general_strike'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'June 12th, 1963',
        title: 'Medgar Evers (1925 - 1963)',
        imgSrc: require('./assets/eventPhotos/Individuals/medgarEvers.jpg'),
        description: `Medgar Wiley Evers was an American civil rights activist in Mississippi, the state's field secretary for the NAACP, and a World War II veteran who had served in the United States Army. He worked to overturn segregation at the University of Mississippi, end the segregation of public facilities, and expand opportunities for African Americans, which included the enforcement of voting rights.\n\nEvers was assassinated in 1963 by Byron De La Beckwith, a member of the White Citizens' Council in Jackson, Mississippi. His murder and the resulting trials inspired civil rights protests; his life and these events inspired numerous works of art, music, and film. All-white juries failed to reach verdicts in the first two trials of Beckwith in the 1960s. He was convicted in 1994 in a new state trial based on new evidence.`,
        link: 'https://web.archive.org/web/20130611071827/http://mememorial.org/medgar-w-evers-civil-rights-activist/',
        infoSrc: 'https://en.wikipedia.org/wiki/Medgar_Evers'
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'June 12th, 1901',
        title: 'Ratification of the Platt Amendment (1901)',
        imgSrc: require('./assets/eventPhotos/Events/plattAmendment.jpg'),
        description: `In 1901, the U.S. refused to withdraw occupying troops from Cuba (leftover from the Spanish-American War) until the seven conditions of the Platt Amendment were ratified in the new Cuban constitution. These conditions defined the terms of Cuban–U.S. relations to be an unequal one of U.S. dominance over Cuba, both politically and economically.\n\nFollowing acceptance of the amendment, the United States ratified a tariff that gave Cuban sugar preference in the U.S. market and protection to select U.S. products in the Cuban market. Over $200 million was spent by American companies on Cuban sugar between 1903 and 1913, and this investment into sugar led to land being concentrated into the hands of the largest sugar mills, with estimates that 20% of all Cuban land was owned by these mills.`,
        link: 'https://www.historyisaweapon.com/defcon1/zinnempire12.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Platt_Amendment'
      },
    ],
  },
  '6-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'June 13th, 1971',
        title: 'Pentagon Papers (1971)',
        imgSrc: require('./assets/eventPhotos/Individuals/danielEllsberg.jpg'),
        description: `The Pentagon Papers were a leaked document detailing the United States Department of Defense history of the United States' political and military involvement in Vietnam from 1945 to 1967. The papers were released by Daniel Ellsberg, who had worked on the study.\n\nThey were first brought to the attention of the public on the front page of The New York Times on this day in 1971. A 1996 article in The New York Times said that the Pentagon Papers had demonstrated, among other things, that the Johnson Administration "systematically lied, not only to the public but also to Congress."\n\nOn January 3, 1973, Ellsberg was charged under the Espionage Act of 1917 along with other charges of theft and conspiracy, carrying a total maximum sentence of 115 years. Due to governmental misconduct and illegal evidence-gathering he was dismissed of all charges against Ellsberg on May 11, 1973.`,
        link: 'https://www.nytimes.com/1971/06/13/archives/vietnam-archive-pentagon-study-traces-3-decades-of-growing-u-s.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Pentagon_Papers'
      },
    ],
  },
  '6-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 14th, 1928',
        title: 'Che Guevara (1928 - 1967)',
        imgSrc: require('./assets/eventPhotos/Individuals/cheGuevara.jpg'),
        description: `Ernesto "Che" Guevara was an Argentine Marxist revolutionary, physician, author, guerrilla leader, diplomat, and military theorist. A major figure of the Cuban Revolution, his stylized visage has become a ubiquitous countercultural symbol of rebellion and global insignia in popular culture.\n\nFollowing the Cuban Revolution, Guevara performed a number of key roles in the new government. These included reviewing the appeals and firing squads for those convicted as war criminals during the revolutionary tribunals, instituting agrarian land reform as minister of industries, helping spearhead a successful nationwide literacy campaign, serving as both national bank president and instructional director for Cuba's armed forces, and traversing the globe as a diplomat on behalf of Cuban socialism.\n\nHis life experiences and studying of Marxism–Leninism led him to posit that the Third World's underdevelopment and dependence was an intrinsic result of imperialism, neocolonialism and monopoly capitalism, with the only remedy being proletarian internationalism and world revolution. Guevara left Cuba in 1965 to foment revolution abroad, first unsuccessfully in Congo-Kinshasa and later in Bolivia, where he was captured by CIA-assisted Bolivian forces and summarily executed.`,
        link: 'https://en.wikipedia.org/wiki/Che_Guevara',
        infoSrc: 'https://en.wikipedia.org/wiki/Che_Guevara'
      },
      {
        category: 'Birthdays',
        date: 'June 14th, 1811',
        title: 'Harriet Beecher Stowe (1811 - 1896)',
        imgSrc: require('./assets/eventPhotos/Individuals/harrietStowe.jpg'),
        description: `Harriet Elisabeth Beecher Stowe, born on this day in 1811, was an American abolitionist and author.\n\nShe is best known for her novel Uncle Tom's Cabin (1852), which was incredibly influential within the Northern anti-slavery movement.`,
        link: 'https://www.womenshistory.org/education-resources/biographies/harriet-beecher-stowe',
        infoSrc: 'https://en.wikipedia.org/wiki/Harriet_Beecher_Stowe'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'June 15th, 1917',
        title: 'Espionage Act (1917)',
        imgSrc: require('./assets/eventPhotos/Events/espionageAct.jpg'),
        description: `The Espionage Act of 1917 is a United States federal law passed on June 15, 1917, shortly after the U.S. entry into World War I. Within a month of the law's passing, the Department of Justice used it as a justification to raid International Worker's of the World (IWW) headquarters, seizing property and arresting over one hundred members on various charges.\n\nAmong those charged with offenses under the Act are Victor L. Berger, Eugene V. Debs, Emma Goldman, Alexander Berkman, Julius and Ethel Rosenberg, Daniel Ellsberg, Chelsea Manning, Julian Assange, and Edward Snowden.\n\nA 2015 study by the PEN American Center found that almost all of the non-government representatives they interviewed, including activists, lawyers, journalists and whistleblowers, "thought the Espionage Act had been used inappropriately in leak cases that have a public interest component." PEN wrote, "experts described it as 'too blunt an instrument,' 'aggressive, broad and suppressive,' a 'tool of intimidation,' 'chilling of free speech,' and a 'poor vehicle for prosecuting leakers and whistleblowers.'"`,
        link: 'https://pen.org/sites/default/files/Secret%20Sources%20report.pdf',
        infoSrc: 'https://en.wikipedia.org/wiki/Espionage_Act_of_1917'
      },
    ],
  },
  '6-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 18th, 1804',
        title: 'George Thompson (1804 - 1878)',
        imgSrc: require('./assets/eventPhotos/Individuals/georgeThompson.jpg'),
        description: `George Donisthorpe Thompson, born on this day in 1804, was a British anti-slavery orator and activist who toured giving lectures and worked for legislation while serving as a Member of Parliament. He was arguably one of the most important abolitionists and human rights lecturers in the United Kingdom and the United States.\n\nThompson grew up in a household that directly profited from the slave trade. His father worked on ships that transported enslaved Africans to the Caribbean and the Americas, and these stories convinced him slavery had to be abolished. He was friends with Frederick Douglass, and, on one visit to the United States, had to flee the country due to threats of violence from pro-slavery parties.`,
        link: 'https://en.wikipedia.org/wiki/George_Thompson_(abolitionist)',
        infoSrc: 'http://frederickdouglassinbritain.com/abolitionists/GeorgeThompson/'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 19th, 1957',
        title: 'Subcomandante Marcos (1957 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/rafaelVicente.jpg'),
        description: `Rafael Sebastián Guillén Vicente, widely known by his previous nom de guerre as "Subcomandante Marcos", is a Mexican insurgent, former military leader, and spokesman for the Zapatista Army of National Liberation (EZLN) in the ongoing Chiapas conflict. Before joining the EZLN, Vicente was a college professor at the Metropolitan Autonomous University in Mexico.\n\nThe EZLN was founded in the Lacandon Jungle in 1983, initially functioning as a self-defense unit dedicated to protecting Chiapas' Mayan people from evictions and capitalist encroachment on their land. While not Mayan himself, Marcos has often served as the group's spokeman.\n\nMarcos led the EZLN during the 1994 revolt and the subsequent peace negotiations, during a counter-offensive by the Mexican Army in 1995, and throughout the decades that followed. In 2001, he led a group of Zapatista leaders into Mexico City to meet with President Vicente Fox, attracting widespread public and media attention.`,
        link: 'https://books.google.com/books?id=iPaZ-CIHOxUC&pg=PR11#v=onepage&q&f=false',
        infoSrc: 'https://en.wikipedia.org/wiki/Subcomandante_Marcos'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'June 19th, 1865',
        title: 'Juneteenth (1865)',
        imgSrc: require('./assets/eventPhotos/Events/juneteenth.jpg'),
        description: `Juneteenth (a portmanteau of June and nineteenth) is a holiday celebrating the emancipation of those who had been enslaved in the United States. Originating in Texas, it is now celebrated annually on the 19th of June throughout the United States, with varying official recognition.\n\nSpecifically, it commemorates Union army general Gordon Granger announcing federal orders in Galveston, Texas, on this day in 1865, proclaiming that all slaves in Texas were free. Juneteenth is the oldest nationally celebrated commemoration of the ending of slavery in the United States.`,
        link: 'https://en.wikipedia.org/wiki/Juneteenth',
        infoSrc: 'https://www.juneteenth.com/history.htm'
      },
    ],
  },
  '6-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 21st, 1983',
        title: 'Edward Snowden (1983 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/edwardSnowden.jpg'),
        description: `Edward Joseph Snowden is an American whistleblower who copied and leaked highly classified information from the National Security Agency (NSA) in 2013 when he was a CIA employee and subcontractor. His disclosures revealed numerous global surveillance programs, many run by the NSA and the Five Eyes Intelligence Alliance with the cooperation of telecommunication companies and European governments, and prompted a cultural discussion about national security and individual privacy.\n\nIn 2013, the United States Department of Justice unsealed charges against Snowden of two counts of violating the Espionage Act of 1917 and theft of government property and revoked his passport. Two days later, he flew into a Moscow Airport, where Russian authorities noted that his U.S. passport had been cancelled, and he was restricted to the airport terminal for over one month. Russia later granted Snowden the right of asylum with an initial visa for residence for one year, and he continues to reside there on extension today.`,
        link: 'https://www.theguardian.com/us-news/ng-interactive/2019/sep/13/edward-snowden-interview-whistleblowing-russia-ai-permanent-record',
        infoSrc: 'https://en.wikipedia.org/wiki/Edward_Snowden'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'June 22nd, 1945',
        title: 'Nigerian General Strike (1945)',
        imgSrc: require('./assets/eventPhotos/Individuals/michaelImoudu.jpg'),
        description: `In 1945, a general strike involving tens of thousands of workers began with railway workers, then spread to other nationalised industries including dock and civil service workers, with workers at private firms supporting the strike and refusing to cross picket lines.\n\nEstimates of involvement range between 42,000 to 200,000 workers making it one of the largest strikes in colonial Africa up until that point. The general strike took off on June 22 and went on for 45 days. Nigerian labor leader Michael Imoudu played a key role in initiating the strike.`,
        link: 'https://en.wikipedia.org/wiki/Michael_Imoudu',
        infoSrc: 'https://libcom.org/library/1945-nigerian-general-strike?fbclid=IwAR0jkREpLgiYuTbQmpvfcMycRnBhR2njPGEV5LcUqWLU6V5RI3ixzLk8Vtk'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'June 23rd, 1947',
        title: 'Taft-Hartley Act (1947)',
        imgSrc: require('./assets/eventPhotos/Events/taftHartley.jpg'),
        description: `The Labor Management Relations Act of 1947, better known as the Taft–Hartley Act, is a United States federal law that restricts the activities and power of labor unions. It was enacted by the 80th United States Congress over the veto of President Harry S. Truman, becoming law on June 23, 1947.\n\nTaft-Hartley was introduced in the aftermath of a major strike wave in 1945 and 1946. Though it was enacted by the Republican-controlled 80th Congress, the law received significant support from congressional Democrats, many of whom joined with their Republican colleagues in voting to override Truman's veto.\n\nThe Taft–Hartley Act prohibits unions from engaging in several "unfair labor practices." Among the practices prohibited by the act are jurisdictional strikes, wildcat strikes, solidarity or political strikes, secondary boycotts, secondary and mass picketing, closed shops, and monetary donations by unions to federal political campaigns. The NLRA also allowed states to pass right-to-work laws banning union shops.`,
        link: 'https://jacobinmag.com/2017/12/taft-hartley-unions-right-to-work',
        infoSrc: 'https://en.wikipedia.org/wiki/Taft%E2%80%93Hartley_Act'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'June 24th, 1976',
        title: 'Radom Riots (1976)',
        imgSrc: require('./assets/eventPhotos/Events/radomRiots.jpg'),
        description: `Occurring on this day in 1976, the Radom riots were related to the nationwide workers' protest against the government decision to implement a previously unannounced increase in the prices of food and meat. They took the form of a spontaneous demonstration by workers on the city streets, a demonstration during which some public office buildings were severely damaged and many shops were looted. A similar demonstration also took place in a large tractor factory in Ursus, near Warsaw.\n\nAlthough the authorities arrested and prosecuted many hundreds of protesters, within 24 hours, the price raises were reversed. Viewed in retrospect, the 1976 workers' protest against official economic policy was a turning point in Poland for both the process of government decision-making and in the evolution of a social movement of self-assertion.`,
        link: 'https://en.wikipedia.org/wiki/June_1976_protests',
        infoSrc: 'https://libcom.org/library/poznan-1956-radom-1976'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'June 25th, 1876',
        title: 'Battle of Little Bighorn (1876)',
        imgSrc: require('./assets/eventPhotos/Events/littleBighorn.jpg'),
        description: `The Battle of the Little Bighorn, known to the Lakota and other Plains Indians as the Battle of the Greasy Grass, was an armed engagement between combined forces of the Lakota, Northern Cheyenne, and Arapaho tribes and the 7th Cavalry Regiment of the United States Army. The battle, which resulted in the defeat of U.S. forces, was the most significant action of the Great Sioux War.\n\nIt began on this day in 1876 when Colonel Custer, who was killed in the fighting, led an attack against an encampment of combined tribes. His strategy was to seize as many "non-combatants" as possible (i.e., women, the disabled, and children), and force the men to surrender to protect their families. Custer drastically underestimated the amount of Native Americans present, however, and no member of his attacking battalion survived their charge on the Native Americans.\n\nUnfortunately, the Native American victory did not have momentum in their battle against the seizure of their lands. Days later, Crazy Horse (a leader in the Sioux resistance) surrendered to the government and died in custody. As a result of the battle, the U.S. government threatened to withhold all food aid to reservations if the Sioux did not cease hostilities and cede South Dakota land. Threatened with starvation, they complied in 1877.`,
        link: 'https://www.zinnedproject.org/news/tdih/battle-little-big-horn/',
        infoSrc: 'https://en.wikipedia.org/wiki/Battle_of_the_Little_Bighorn'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 25th, 1903',
        title: 'George Orwell (1903 - 1950)',
        imgSrc: require('./assets/eventPhotos/Individuals/georgeOrwell.jpg'),
        description: `Eric Arthur Blair, better known by his pen name George Orwell, was an English novelist and essayist, journalist, and critic, born on this day in 1903. His work is characterised by lucid prose, biting social criticism, opposition to totalitarianism, and outspoken support of democratic socialism.\n\nAs a writer, Orwell produced literary criticism and poetry, fiction and polemical journalism; and is best known for his allegory for the Soviet Union "Animal Farm" (1945) and the dystopian novel "Nineteen Eighty-Four" (1949). Orwell should also be noted for his first hand-account of the Spanish Civil War, "Homage to Catalonia" (1938).\n\nIn "Homage to Catalonia", Orwell writes about fighting for the Republican faction, describing in detail the ways in which the anarchist movement re-structured their economony and military to be more egalitarian. He was eventually shot in the throat, declared unfit for service, and returned to England to recover.\n\nOrwell's experiences in Catalonia made him a vehement anti-Stalinist, but he still remained a democratic socialist throughout the rest of his life.`,
        link: 'https://www.pakistantoday.com.pk/2013/02/18/1984-an-interview-with-george-orwell/',
        infoSrc: 'https://en.wikipedia.org/wiki/George_Orwell'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'June 26th, 1975',
        title: 'AIM-FBI Shootout (1975)',
        imgSrc: require('./assets/eventPhotos/Events/aimFBI.jpg'),
        description: `On this day in 1975, there was a shootout at Pine Ridge Reservation in South Dakota between two FBI agents, who drove in with unmarked cars, and several members of the American Indian Movement (AIM), a Native American rights group operating out of the reservation at the time. Both FBI agents were wounded by gunfire before appearing to be shot execution-style, and a member of AIM, Joseph Stuntz, was also fatally shot.\n\nAfter being extradited from Canada through a false witness statement, indigenous rights activist Leonard Peltier was convicted in a controversial 1977 trial and sentenced to two consecutive terms of life imprisonment for first-degree for the killing of the agents. As detailed in the book "In the Spirit of Crazy Horse", his trials and conviction are considered highly controversial and Amnesty International has raised concerns about their fairness.`,
        link: 'https://montanapioneer.com/an-interview-with-leonard-peltier/',
        infoSrc: 'https://reason.com/2015/06/26/40th-anniversary-of-pine-ridge-shootout/'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 26th, 1908',
        title: 'Salvador Allende (1908 - 1973)',
        imgSrc: require('./assets/eventPhotos/Individuals/salvadorAllende.jpg'),
        description: `Salvador Allende was a Chilean socialist politician and physician born on this day in 1908. Allende was President of Chile from 1970 until 1973, and head of the Popular Unity political coalition government; on November 3rd, 1970, he was Latin America's first ever Marxist to become the elected leader of a liberal democracy.\n\nAs president, Allende sought to nationalize major industries, expand education and improve the living standards of the working class. Specific examples of his policies include giving educational grants to indigenous children, literacy programs in impovershied areas, and establishing a minimum wage for workers of all ages.\n\nOn 11 September 1973, the military moved to oust Allende in a coup d'état assisted by the Henry Kissinger and the CIA. As troops surrounded La Moneda Palace, he gave his last speech vowing not to resign. Later that day, Allende died of suicide with a gun, according to an investigation conducted by a Chilean court with the assistance of international experts in 2011.`,
        link: 'https://jacobinmag.com/2019/09/salvador-allende-chile-revolucion-democratica-frente-amplio',
        infoSrc: 'https://en.wikipedia.org/wiki/Salvador_Allende'
      },
      {
        category: 'Birthdays',
        date: 'June 26th, 1952',
        title: 'Olive Morris (1952 - 1979)',
        imgSrc: require('./assets/eventPhotos/Individuals/oliveMorris.jpg'),
        description: `Morris, Olive Elaine, activist was born on this day in 1952, in Harewood, St Catherine’s, Jamaica. When she was nine years old, she, and her brother, Basil, left their maternal grandmother and joined her mother and father in Lavender Hill, south London.\n\nOlive became a member of the youth section of the Black Panther Movement (later the Black Workers Movement), along with others such as Linton Kwesi Johnson, Clovis Reid and Farrukh Dhondy. Olive was also a founding member of the Brixton Black Women’s Group. She died prematurely from non-Hodgkinson's lymphoma at the age of 27.`,
        link: 'http://libcom.org/history/morris-olive-elaine-1952-1979',
        infoSrc: 'http://libcom.org/history/morris-olive-elaine-1952-1979'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'June 27th, 1905',
        title: 'Founding of the IWW (1905)',
        imgSrc: require('./assets/eventPhotos/Organizations/IWW.png'),
        description: `The Industrial Workers of the World (IWW), members of which are commonly termed "Wobblies", is an international labor union that was founded in 1905 in Chicago, Illinois, in the United States. The IWW promotes the concept of "One Big Union", and contends that all workers should be united as a social class to supplant capitalism and wage labor with industrial democracy.\n\nThe IWW was officially founded in Chicago, Illinois in June 1905. A convention was held of 200 socialists and radical trade unionists from all over the United States who strongly opposed the policies of the American Federation of Labor (AFL). The IWW opposed the American Federation of Labor's acceptance of capitalism and its refusal to include unskilled workers in craft unions.\n\nThe IWW's founders included many historically important labor activists and socialist thinkers, including Big Bill Haywood, James Connolly, Daniel De Leon, Eugene V. Debs, Thomas Hagerty, Lucy Parsons, Mary Harris "Mother" Jones, Frank Bohn, William Trautmann, Vincent Saint John, Ralph Chaplin, and others.`,
        link: 'https://iww.org/',
        infoSrc: 'https://en.wikipedia.org/wiki/Industrial_Workers_of_the_World'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 27th, 1869',
        title: 'Emma Goldman (1869 - 1940)',
        imgSrc: require('./assets/eventPhotos/Individuals/emmaGoldman.jpg'),
        description: `Emma Goldman was an anarchist political activist and writer. She played a pivotal role in the development of anarchist political philosophy in North America and Europe in the first half of the 20th century.\n\nAttracted to anarchism after the Haymarket affair, Goldman became a writer and a renowned lecturer. She and anarchist writer Alexander Berkman, her lover and lifelong friend, planned to assassinate industrialist and financier Henry Clay Frick as an act of "propaganda of the deed". Frick survived the attempt on his life, and Berkman was sentenced to 22 years in prison. Goldman was imprisoned several times in the years that followed for "inciting to riot" and illegally distributing information about birth control.\n\nAfter their release from prison, Goldman and Berkman were again arrested and deported to Russia. Initially supportive of that country's October Revolution that brought the Bolsheviks to power, Goldman changed her opinion in the wake of the Kronstadt rebellion; she denounced the Soviet Union for its violent repression of independent voices. She left the Soviet Union and in 1923 published a book about her experiences, My Disillusionment in Russia.\n\nDuring her life, Goldman was lionized as a freethinking "rebel woman" by admirers, and denounced by detractors as an advocate of politically motivated murder and violent revolution. Her writing and lectures spanned a wide variety of issues, including prisons, atheism, freedom of speech, militarism, capitalism, marriage, free love, and homosexuality.`,
        link: 'https://en.wikipedia.org/wiki/Emma_Goldman',
        infoSrc: 'https://en.wikipedia.org/wiki/Emma_Goldman'
      },
      {
        category: 'Birthdays',
        date: 'June 27th, 1880',
        title: 'Helen Keller (1880 - 1968)',
        imgSrc: require('./assets/eventPhotos/Individuals/helenKeller.jpg'),
        description: `Helen Adams Keller, born on this day in 1880, was an American author, socialist, anti-racist, and disability rights advocate. She was the first deaf-blind person to earn a Bachelor of Arts degree.\n\nIn 1909, Keller joined the American Socialist Party and campaigned for its candidates, including Eugene Debs, the SP leader who ran for U.S. president from his prison cell in 1920. She supported striking workers, including those murdered the 1914 Colorado Ludlow Massacre, and called owner John D. Rockefeller a “monster of capitalism.” She defined herself as a “militant suffragist,” campaigning for women’s right to vote because she believed this was linked to the struggle for socialism.\n\nContemporary critics lambasted Keller for her socialism. In a 1924 letter to a U.S. Senator, she wrote “So long as I confine my activities to social service and the blind, they compliment me extravagantly, calling me ‘arch priestess of the sightless,’ ‘wonder woman,’ and a ‘modern miracle.’ But when it comes to a discussion of poverty, and I maintain that it is the result of wrong economics — that the industrial system under which we live is at the root of much of the physical deafness and blindness in the world — that is a different matter!”\n\nBy the time Keller died in 1968 at 87, the FBI had kept her under surveillance for most of her adult life.`,
        link: 'https://www.workers.org/2016/03/24250/',
        infoSrc: 'https://www.workers.org/2016/03/24250/'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'June 28th, 1956',
        title: 'The Poznan Revolt (1956)',
        imgSrc: require('./assets/eventPhotos/Events/poznanRevolt.jpg'),
        description: `The Poznan Revolt began on this day in 1956, in Poznan, Poland. It was a workers' revolt that took the form of large-scale street demonstrations. It arose from the failure of the political authorities to take action on the various economic grievances of workers in a large machinery plant against local management decisions. In the course of the march to the town square, many workers from other factories joined in as a sign of solidarity.\n\nThe purpose of the demonstration was not to revolt against the authorities, however, but rather to bring home to the public the poor working conditions in the factory and to appeal to officialdom for some improvement. Commenting subsequently on the character of the demonstration, a perceptive eyewitness observed that it had been "reminiscent of the January 1905 Petersburg march [on the Czar's palace] rather than the activities of workers in the second half of the 20th century."\n\nAfter being shot at by police, the peaceful protest turned into a riot, with various shops and official buildings being destroyed. Approximately seventy-five people were reported to have been killed, several hundreds were wounded, and uncounted numbers of others were subject to beatings and physical abuse.\n\nThe Poznan Revolt shattered the image of the party's and government's seemingly indisputable authority, and it became the catalyst for a large movement toward social and political change throughout Poland.`,
        link: 'https://en.wikipedia.org/wiki/Pozna%C5%84_protests_of_1956',
        infoSrc: 'https://libcom.org/library/poznan-1956-radom-1976'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 28th, 1947',
        title: 'Mark Clark (1947 - 1969)',
        imgSrc: require('./assets/eventPhotos/Individuals/markClark.jpg'),
        description: `Mark Clark was an American activist and member of the Black Panther Party (BPP). After decided to join the Black Panther Party after reading their literature and the Ten Point Program, later organizing a local Peoria chapter.\n\nAt the age of 22, he, along with Fred Hampton, was assassinated when the Chicago Police Department committed a raid against BPP headquarters. He was shot in the heart and died instantly.`,
        link: 'https://en.wikipedia.org/wiki/Mark_Clark_(activist)',
        infoSrc: 'https://en.wikipedia.org/wiki/Mark_Clark_(activist)'
      },
      {
        category: 'Birthdays',
        date: 'June 28th, 1942',
        title: 'Chris Hani (1942 - 1993)',
        imgSrc: require('./assets/eventPhotos/Individuals/chrisHani.jpg'),
        description: `Chris Hani, born Martin Thembisile Hani, was the leader of the South African Communist Party and chief of staff of uMkhonto we Sizwe, the armed wing of the African National Congress (ANC). He received military training in the Soviet Union and served in campaigns in the Zimbabwean War of Liberation, also called the Rhodesian Bush War.\n\nHani was a fierce opponent of the apartheid government, but supported the suspension of the ANC's armed struggle in favour of negotiations after becoming head of the party in 1991. He was assassinated by Janusz Walus, an anti-communist Polish immigrant, on 10 April 1993.`,
        link: 'https://web.archive.org/web/20170225112546/http://www.sacp.org.za/main.php?ID=2294',
        infoSrc: 'https://en.wikipedia.org/wiki/Chris_Hani'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'June 29th, 1941',
        title: 'Stokely Carmichael (1941 - 1998)',
        imgSrc: require('./assets/eventPhotos/Individuals/stokelyCarmichael.jpeg'),
        description: `Kwame Ture, born Stokely Standiford Churchill Carmichael, was a prominent Trinidadian organizer in the civil rights movement in the United States and the global Pan-African movement. He eventually developed the Black Power movement, first while leading the Student Nonviolent Coordinating Committee (SNCC), later serving as the "Honorary Prime Minister" of the Black Panther Party (BPP), and lastly as a leader of the All-African People's Revolutionary Party (A-APRP).\n\nCarmichael was one of the original SNCC freedom riders of 1961 under Diane Nash's leadership. He became a major voting rights activist in Mississippi and Alabama after being mentored by Ella Baker and Bob Moses.\n\nThe FBI harassed and slandered him through its COINTELPRO program, and Carmichael fled to Africa in 1968. There, he first re-established himself in Ghana, and then Guinea by 1969. He adopted the new name of Kwame Ture and began campaigning internationally for revolutionary socialist Pan-Africanism.`,
        link: 'https://en.wikipedia.org/wiki/All-African_People%27s_Revolutionary_Party',
        infoSrc: 'https://en.wikipedia.org/wiki/Stokely_Carmichael'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '6-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'July 2nd, 1951',
        title: 'Sylvia Rivera (1951 - 2002)',
        imgSrc: require('./assets/eventPhotos/Individuals/sylviaRivera.jpg'),
        description: `Sylvia Rivera was a Latina American gay liberation and transgender rights activist and community worker in New York. Rivera, who identified as a drag queen, participated in demonstrations with the Gay Liberation Front. With her close friend Marsha P. Johnson, Rivera co-founded the Street Transvestite Action Revolutionaries (STAR), a socialist group dedicated to helping homeless young drag queens, gay youth, and trans women.\n\nAt different times in her life, Rivera battled substance abuse and lived on the streets, largely in the gay homeless community at the Christopher Street docks. Her experiences made her more focused on advocacy for those who, in her view, mainstream society and the assimilationist sectors of the lesbian, gay, bisexual, and transgender (LGBT) communities were leaving behind. Rivera sought to empower these groups. She fought for herself but also for the rights of people of color and low-income LGBT people. As someone who suffered from systematic poverty and racism, Rivera used her voice for unity, sharing her stories, pain, and struggles to show her community they are not alone.\n\nRivera died during the dawn hours of February 19, 2002, at St. Vincent's Hospital, of complications from liver cancer. Activist Riki Wilchins said this of her: "In many ways, Sylvia was the Rosa Parks of the modern transgender movement, a term that was not even coined until two decades after Stonewall".`,
        link: 'https://www.workers.org/2006/us/lavender-red-73/',
        infoSrc: 'https://en.wikipedia.org/wiki/Sylvia_Rivera'
      },
      {
        category: 'Birthdays',
        date: 'July 2nd, 1925',
        title: 'Medgar Evers (1925 - 1963)',
        imgSrc: require('./assets/eventPhotos/Individuals/medgarEvers.jpg'),
        description: `Medgar Wiley Evers was an American civil rights activist in Mississippi, the state's field secretary for the NAACP, and a World War II veteran who had served in the United States Army. He worked to overturn segregation at the University of Mississippi, end the segregation of public facilities, and expand opportunities for African Americans, which included the enforcement of voting rights.\n\nEvers was assassinated in 1963 by Byron De La Beckwith, a member of the White Citizens' Council in Jackson, Mississippi. His murder and the resulting trials inspired civil rights protests; his life and these events inspired numerous works of art, music, and film. All-white juries failed to reach verdicts in the first two trials of Beckwith in the 1960s. He was convicted in 1994 in a new state trial based on new evidence.`,
        link: 'https://web.archive.org/web/20130611071827/http://mememorial.org/medgar-w-evers-civil-rights-activist/',
        infoSrc: 'https://en.wikipedia.org/wiki/Medgar_Evers'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'July 7th, 1834',
        title: 'Tappan Riot (1834)',
        imgSrc: require('./assets/eventPhotos/Events/tappanRiots.jpg'),
        description: `On this day in 1834, New York City was torn by a huge antiabolitionist riot (known as the Farren or Tappan Riot) that lasted for nearly a week until it was put down by military force. The riot arose from tensions in the city as abolitionists became more politically active, blacks demanded more dignity and freedom for themselves, and the city experienced a large immigration of Irish people.\n\nWhite mobs, thousands strong, destroyed homes of black people and white abolitionists. At times, the rioters controlled whole sections of the city. The riot was forcbily ended by the New York National Guard.`,
        link: 'https://en.wikipedia.org/wiki/New_York_anti-abolitionist_riots_(1834)',
        infoSrc: 'https://www.blackpast.org/african-american-history/events-african-american-history/the-anti-abolition-riots-1834/'
      },
    ],
  },
  '7-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'July 9th, 1882',
        title: 'C. E. Ruthenberg (1882 - 1927)',
        imgSrc: require('./assets/eventPhotos/Individuals/ceRuthenberg.jpg'),
        description: `Charles Emil Ruthenberg (July 9, 1882 – March 1, 1927) was an American Marxist politician and a founder and head of the Communist Party USA (CPUSA), an organization which still exists today. Ruthenberg was an organizer for and, later, secretary of Local Cuyahoga County from 1909 to 1919. In addition, Ruthenberg contributed material to the official organ of the Socialist Party of Ohio, The Ohio Socialist and edited various socialist newspapers. During this time Ruthenberg traveled to many cities throughout the American Northeast and Midwest, speaking to labor groups, trade union organizations, and anti-war groups, building a network of contacts.\n\nAfter American entry into World War I, Ruthenberg continued to publicly attack the imperialist conflict and America's participation in it. He was charged with violating the Espionage Act, accused of obstructing the draft in connection with a speech given at a rally on May 17, 1917. Shortly after his release from prison, he participated in the 1919 Cleveland May Day march, attended by over 20,000 people. The police attacked the protestors, killing two and injuring hundreds.`,
        link: 'https://www.peoplesworld.org/article/charles-e-ruthenberg-the-first-leader-of-the-communist-party-usa/',
        infoSrc: 'https://en.wikipedia.org/wiki/C._E._Ruthenberg'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'July 14th, 1877',
        title: 'The Great Railroad Strike of 1877',
        imgSrc: require('./assets/eventPhotos/Events/greatRailroadStrike.jpg'),
        description: `The Great Railroad Strike of 1877 began on July 14 in Martinsburg, West Virginia, after the Baltimore and Ohio Railroad (B&O) cut wages for the third time in a year. This strike finally ended some 69 days later, after it was put down by unofficial militias, the National Guard, and federal troops.\n\nBecause of economic problems and pressure on wages by the railroads, workers in numerous other cities, including New York, Pennsylvania, Maryland, Illinois, and Missouri, also went out on strike.\n\nAn estimated 100 people were killed in the unrest across the country, and more than one hundred million dollars worth of property was damaged. In Martinsburg, Pittsburgh, Philadelphia and other cities, workers burned down and destroyed both physical facilities and the rolling stock of the railroads - engines and railroad cars.\n\nDue to this unrest and other labor efforts, the B&O became the first major employer to offer a pension plan in 1884.`,
        link: 'https://en.wikipedia.org/wiki/Great_Railroad_Strike_of_1877',
        infoSrc: 'https://libcom.org/history/1877-the-great-railroad-strike'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'July 14th, 1889',
        title: 'Second International Founded (1889)',
        imgSrc: require('./assets/eventPhotos/Organizations/secondInternational.jpg'),
        description: `The Second International was an organisation of socialist and labour parties formed at a Paris meeting in which delegations from twenty countries participated. The Second International continued the work of the dissolved First International, though excluding the powerful anarcho-syndicalist movement and trade unions.\n\nNotable members included Vladimir Lenin, Rosa Luxemburg, Karl Kautsky, and Jean Jaurès.\n\nAmong the Second International's most famous actions were its 1889 declaration of May 1st as International Workers' Day (also known as Labor Day) and its 1910 declaration of the International Women's Day on the 8th of March, after the main day of the women's marches in 1917 during the Russian Revolution. It also initiated the international campaign for the eight-hour working day.`,
        link: 'https://www.jacobinmag.com/2017/07/second-international-bernstein-rosa-luxemburg-unions-world-war',
        infoSrc: 'https://en.wikipedia.org/wiki/Second_International'
      },
    ],
  },
  '7-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'July 16th, 1947',
        title: 'Assata Shakur (1947 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/assataShakur.jpg'),
        description: `Assata Olugbala Shakur (born JoAnne Deborah Byron) is a former member of the Black Liberation Army (BLA), an underground Black Power organization that engaged against guerrilla warfare against the United States government from 1970 to 1981. Shakur was one of the targets of the FBI's COINTELPRO program, directed against black Power movement groups and activists.\n\nAfter being involved in a shootout with New Jersey police officers, Shakur was convicted on multiple counts of assault and murder and imprisoned. In 1979, BLA members freed her in a dramatic, but bloodless, prison escape. Shakur successfully sought political asylum in Cuba, where she still lives today.`,
        link: 'https://en.wikipedia.org/wiki/Black_Liberation_Army',
        infoSrc: 'https://en.wikipedia.org/wiki/Assata_Shakur'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'July 18th, 1918',
        title: 'Nelson Mandela (1918 - 2013)',
        imgSrc: require('./assets/eventPhotos/Individuals/nelsonMandela.jpg'),
        description: `Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader and philanthropist who served as President of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election.\n\nHis government focused on dismantling the legacy of apartheid by tackling institutionalised racism and fostering racial reconciliation. Ideologically an African nationalist and socialist, he served as the president of the African National Congress (ANC) party from 1991 to 1997.\n\nAlthough initially committed to non-violent protest, in association with the SACP he co-founded the militant Umkhonto we Sizwe in 1961 and led a sabotage campaign against the government. He was arrested and imprisoned in 1962, and subsequently sentenced to life imprisonment for conspiring to overthrow the state following the Rivonia Trial. Mandela served 27 years in prison.\n\nAmid growing domestic and international pressure, and with fears of a racial civil war, President F. W. de Klerk released him in 1990. Mandela and de Klerk led efforts to negotiate an end to apartheid, which resulted in the 1994 multiracial general election in which Mandela led the ANC to victory and became president.`,
        link: 'https://en.wikipedia.org/wiki/Nelson_Mandela',
        infoSrc: 'https://en.wikipedia.org/wiki/Nelson_Mandela'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'July 19th, 1877',
        title: 'The Pittsburgh Railroad Strike (1877)',
        imgSrc: require('./assets/eventPhotos/Events/pittsburghRailroadStrike.jpg'),
        description: `The Pittsburgh railway strike occurred in Pittsburgh, Pennsylvania, as part of the Great Railroad Strike of 1877. It was one of many incidents of strikes, labor unrest and violence in cities across the United States, including several in Pennsylvania. An estimated 53 civilians were killed and 109 were injured. Eight soldiers were killed in clashes, and another 15 were wounded.\n\nThe stirke began on July 19 when one crew, led by Conductor Ryan, sent word that they would not take out their train. Striking workers refused to cede control of the trains to the company, and by midnight up to 1,400 strikers had gathered in the Pennsylvania Railroad rail yards, stopping the movement of some 1,500 cars.\n\nBy the morning of the 21st, it had become clear that many of the Pittsburgh police and local militia had sided with the strikers and were refusing to take action against them. The Pennsylvania National Guard were sent in to forcibly quell the rebellion, and the protest turned into a riot after troops shot into a crowd of people for ten minutes, killing women and children. Rioters began looting, setting fire to the train cars, and exchanged fire with the national guard soldiers.`,
        link: 'https://www.heinzhistorycenter.org/blog/western-pennsylvania-history/picturing-protest-great-railroad-strike-1877',
        infoSrc: 'https://en.wikipedia.org/wiki/Pittsburgh_railroad_strike_of_1877'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'July 19th, 1848',
        title: 'Seneca Falls Convention (1848)',
        imgSrc: require('./assets/eventPhotos/Events/senecaFalls.jpg'),
        description: `On this day, the Seneca Falls Convention was began. It was the first women's rights convention and advertised itself as "a convention to discuss the social, civil, and religious condition and rights of woman". Held in the Wesleyan Chapel of the town of Seneca Falls, New York, it spanned two days and became a national, annual event in 1850 (held in Worcester, Massachusetts).\n\nNotable speakers at the convention include Lucretia Mott, Elizabeth Cady Stanton, and Frederick Douglass, who was the meeting's only black member. At its conclusion, the convention issued a "Declaration of Sentiments", which became "the single most important factor in spreading news of the women's rights movement around the country in 1848 and into the future", according to historian Judith Wellman.`,
        link: 'https://www.history.com/topics/womens-rights/seneca-falls-convention',
        infoSrc: 'https://en.wikipedia.org/wiki/Declaration_of_Sentiments'
      },
    ],
  },
  '7-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'July 20th, 1591',
        title: 'Anne Hutchinson (1591 - 1643)',
        imgSrc: require('./assets/eventPhotos/Individuals/anneHutchinson.jpg'),
        description: `Anne Hutchinson was a Puritan spiritual advisor, religious reformer, and an important participant in the Antinomian Controversy which shook the infant Massachusetts Bay Colony from 1636 to 1638. Hutchinson was known for being a powerful speaker, and insisted on the ability of women to read the bible for themselves, among other "unauthorized" interpretations of the gospel.\n\nOn November 7th, 1637, Hutchinson was brought to trial, where she was called a heretic and an instrument of the devil, and was exiled from the Puritan community for her beliefs. Thirty-five families, supporters of Hutchinson, followed her to settle Long Island.\n\nHutchinson is a key figure in the history of religious freedom in England's American colonies and the history of women in ministry, challenging the authority of the ministers. She has been called "the most famous - or infamous - English woman in colonial American history".`,
        link: 'https://www.historyisaweapon.com/defcon1/zinnint6.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Anne_Hutchinson'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-21': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'July 21st, 1936',
        title: 'Revolutionary Catalonia (1936)',
        imgSrc: require('./assets/eventPhotos/Events/catalonia.jpg'),
        description: `Revolutionary Catalonia was the part of Catalonia (an autonomous region in northeast Spain) controlled by various anarchist, communist, and socialist trade unions, parties, and militias of the Spanish Civil War period. On this day in 1936, the "Central Committee of Anti-Fascist Militas of Catalonia" was founded and it became the main governing body of the region.\n\nThe growing influence of the Marxist-Leninist Spanish Communist Party government and their desire to nationalize revolutionary committees and militias brought it into conflict with the anarchist CNT, resulting in the eventual replacement of the CNT by the PCE as the dominant political force in Catalonia until the arrival of the fascists. Notably, this conflict left writer George Orwell bitter about the role that Marxist-Leninist groups played in suppressing anarchist movements, and he was a committed anti-Stalinist for the rest of his life.\n\nThis anarchist period of Catalonia was deeply rooted in the ideas of anarcho-syndicalism and anarcho-communism. Catalonia was the first and only territory in Spanish history that has been rooted in these ideas, and its existence has been influential in socialist history. This revolution was influenced by the ideas of Peter Kropotkin and his book The Conquest of Bread, a seminal anarcho-communist text.`,
        link: 'https://www.jacobinmag.com/2017/05/george-orwell-spain-barcelona-may-days',
        infoSrc: 'https://en.wikipedia.org/wiki/Revolutionary_Catalonia'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'July 22nd, 1877',
        title: 'St. Louis General Strike (1877)',
        imgSrc: require('./assets/eventPhotos/Events/stlGeneralStrike.jpg'),
        description: `The 1877 St. Louis general strike was one of the first general strikes in the United States. It grew out of the Great Railroad Strike of 1877, which was a national period of strikes and rioting due to economic depression. The St. Louis strike was largely organized by the Knights of Labor and the Marxist-leaning Workingmen's Party, the main radical political party of the era.\n\nIn East St. Louis, Illinois, on July 22, train workers held a secret meeting, resolved to call for an increase in wages, and strike if their demands were not met. The demand was made and rejected that same night, and so, effective at midnight, the strike began in East St. Louis. Within hours, strikers virtually controlled the city.\n\nAlthough the strike was mostly bloodless, the protestors seized the city's Union Depot, stopped freight and some passenger trains from passing through the city, and destroyed much property, including flour mills, sugar refineries, and dismantling over forty factories. The strike ended when the National Guard and U.S. Marshals began to successfully break up demonstrations by force five days later.`,
        link: 'https://en.wikipedia.org/wiki/1877_St._Louis_general_strike',
        infoSrc: 'https://www.stltoday.com/news/archives/look-back-250-class-conflict-erupts-on-st-louis-streets-in-1877-general-strike/article_10ecf069-5795-5664-a745-4057509378af.html'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'July 23rd, 1877',
        title: 'Scranton General Strike (1877)',
        imgSrc: require('./assets/eventPhotos/Events/scrantonStrike.jpg'),
        description: `The Scranton general strike was a widespread work stoppage in 1877 by workers in Scranton, Pennsylvania, which took place as part of the Great Railroad Strike, and was the last in a number of violent outbreaks across Pennsylvania.\n\nThe strike began on July 23 when railroad workers walked off the job in protest of recent wage cuts and continued into mid-November. By July 26th, it grew to include perhaps thousands of workers from a variety of industries.\n\nViolence erupted on August 1st after angry strikers attacked the town's mayor and then clashed with local militia. The militia shot into the crowd, leaving four dead and many more wounded.\n\nThe next day, state national guard arrived to Scranton and imposed martial law. Comparatively minor acts of violence continued throughout the strike.`,
        link: 'https://www.nytimes.com/1877/07/25/archives/a-general-strike-at-scranton-the-employes-of-the-lackawanna-iron.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Scranton_general_strike'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'July 29th, 1992',
        title: 'Tavio Amorin (1958 - 1992)',
        imgSrc: require('./assets/eventPhotos/Individuals/tavioAmorin.jpg'),
        description: `Tavio Ayao Tobias Amorin was a socialist Togolese politician committed to the cause of human rights. He led the Togolese Pan-African Socialist Party, whose politics were influenced by previous pan-African leaders like Kwame Nkrumah.\n\nTavio was relentless in his criticisms of the government. In his role as the Chair of Political Affairs, Human Rights, and Liberties Commission, he worked to expose the human rights abuses in Togo.\n\nHe was eventually assassinated by state police for his outspoken criticisms of the state, and no one has yet been brought to justice for his murder.`,
        link: 'https://en.wikipedia.org/wiki/Tavio_Amorin',
        infoSrc: 'https://www.huffpost.com/entry/tavio-amorin_b_5a061f6be4b0cc46c52e6a64'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-26': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'July 26th, 1953',
        title: 'Cuban Revolution (1953-58)',
        imgSrc: require('./assets/eventPhotos/Events/cubanRevolution.jpg'),
        description: `The Cuban Revolution was an armed revolt conducted by Fidel Castro's revolutionary 26th of July Movement and its allies against the U.S.-backed dictatorship of Cuban President Fulgencio Batista. The revolution began on this day in 1953, and continued sporadically until the rebels finally ousted Batista on the 31st of December, 1958, replacing his government with a revolutionary socialist state.\n\nThe Cuban Revolution had powerful domestic and international repercussions. In particular, it made Cuba's relationship with the United States significantly more antagonistic. In the immediate aftermath of the revolution, Castro's government began a program of nationalization, centralization of the press and political consolidation that transformed Cuba's economy and civil society. The revolution also ushered in an era of Cuban intervention in foreign military conflicts, perhaps most notably siding with anti-apartheid fighters against the government in South Africa (1962-74).\n\nToday is celebrated in Cuba as the Day of the Revolution (Dia de la Revolución). Castro's 26th of July Movement later reformed along communist lines, becoming the Communist Party in October of 1965.`,
        link: 'https://www.jacobinmag.com/2015/06/cuban-revolution-fidel-che-raul-castro/',
        infoSrc: 'https://en.wikipedia.org/wiki/Cuban_Revolution'
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'July 26th, 1909',
        title: 'Tragic Week (1909)',
        imgSrc: require('./assets/eventPhotos/Events/tragicWeek.jpg'),
        description: `The Tragic Week was a series of violent confrontations between the Spanish army and anarchists, socialists and republicans of Barcelona and other cities in Catalonia, Spain, that began on this day in 1909. It was caused by the calling-up of reserve troops by Premier Antonio Maura to be sent as reinforcements when Spain renewed military-colonial activity in Morocco. Many of these reservists were the only breadwinners for their families, while the wealthy were able to hire substitutes.\n\nThese actions, coupled with anarchist, anti-militarist, and anti-colonial philosophies shared by many in the city, resulted in the calling of a general strike against Maura's attempt at conscription. By the next day, workers had occupied much of central Barcelona, halting troop trains and overturning trams. Just a few days later, there was street fighting, with a general eruption of riots, strikes, and the burnings of convents.\n\nThe Spanish government declared a "state of war" and used the national army to put down the rebellion by force. Over one hundred civilians were killed and more than 1,700 individuals were indicted in military courts for "armed rebellion"`,
        link: 'https://libcom.org/files/The%20tragic%20week,%20Spain%201909.pdf',
        infoSrc: 'https://en.wikipedia.org/wiki/Tragic_Week_(Spain)'
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'July 26th, 1877',
        title: 'The Chicago Railroad Strike (1877)',
        imgSrc: require('./assets/eventPhotos/Events/chicagoRailroadStrike.png'),
        description: `The Chicago railroad strike of 1877 was a series of work stoppages and civil unrest in Chicago, Illinois, which occurred as part of the larger national strikes and rioting of the Great Railroad Strike of 1877.\n\nOn July 24th and 25th various industries began to go on strike, and Chicago's local government prepared for unrest as other cities across the nation grappled with general strikes and rioting. Large crowds, up to 25,000 people, began to gather and demand various labor reforms. On July 26th, violent clashes between protestors and police reached a fever ptich in the "Battle of the Viaduct", police and members of the crowd exchanged gunfire.\n\nBy that evening, the police had successfully dispersed crowds throughout the city. 14 to 30 rioters were dead or dying, and 35 to 100 civilians and 9 to 13 policemen were wounded.`,
        link: 'http://www.encyclopedia.chicagohistory.org/pages/1037.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Chicago_railroad_strike_of_1877'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '7-31': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'July 31st, 1921',
        title: 'Whitney Young Jr. (1921 - 1971)',
        imgSrc: require('./assets/eventPhotos/Individuals/whitneyYoung.jpg'),
        description: `Whitney Moore Young Jr. was an American civil rights leader born on this day in 1921.\n\nHe spent most of his career working to end employment discrimination in the United States and turning the National Urban League from a relatively passive civil rights organization into one that aggressively worked for equitable access to socioeconomic opportunity for the historically disenfranchised.`,
        link: 'https://en.wikipedia.org/wiki/Whitney_Young',
        infoSrc: 'https://en.wikipedia.org/wiki/Whitney_Young'
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'July 31st, 1914',
        title: 'Jean Jaurès (1859 - 1914)',
        imgSrc: require('./assets/eventPhotos/Individuals/jeanJaures.jpg'),
        description: `Auguste Marie Joseph Jean Léon Jaurès, commonly referred to as Jean Jaurès, was a French Socialist leader. Initially a moderate republican, he was later one of the first social democrats, eventually becoming the leader of the French Socialist Party, which opposed Jules Guesde's revolutionary Socialist Party of France. The two parties merged in 1905 in the French Section of the Workers' International (SFIO).\n\nToday, a key aspect his legacy was his antimilitarism. Jaurès was an early opponent of the draft and desperately tried to prevent war between France and Germany before World War I, going so far as to try and organize a general strike in both countries to force their leaders to negotiate diplomatically.\n\nIn 1914, Jaurès returned to Paris from a diplomatic meeting in Brussels to advocate against the coming war. He was assassinated by a French nationalist at the outbreak of World War I, and remains one of the main historical figures of the French Left.`,
        link: 'https://en.wikipedia.org/wiki/Jean_Jaur%C3%A8s',
        infoSrc: 'https://en.wikipedia.org/wiki/Jean_Jaur%C3%A8s'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 1st, 1837',
        title: 'Mother Jones (1837 - 1930)',
        imgSrc: require('./assets/eventPhotos/Individuals/motherJones.jpg'),
        description: `Mary G. Harris Jones, known as Mother Jones from 1897 onwards, was an Irish-born American schoolteacher and dressmaker who became a prominent union organizer, community organizer, and activist. She helped coordinate major strikes and co-founded the Industrial Workers of the World.\n\nFighting to abolish child labor was one of her flagship issues. In 1903, Jones organized children who were working in mills and mines to participate in a "Children's Crusade", a march from Kensington, Philadelphia to Oyster Bay, New York, the hometown of President Theodore Roosevelt with banners demanding "We want to go to school and not the mines!"\n\nMother Jones was present during the Paint Creek–Cabin Creek strike of 1912 in West Virginia, speaking and organizing despite a shooting war between United Mine Workers members and the private army of the mine owners. Jones was arrested on 13 February 1913, brought before a military court, and accused of conspiring to commit murder among other charges. She was sentenced to twenty years in the state penitentiary, but released after eighty-five days.`,
        link: 'https://en.wikipedia.org/wiki/Paint_Creek%E2%80%93Cabin_Creek_strike_of_1912',
        infoSrc: 'https://en.wikipedia.org/wiki/Mother_Jones'
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'August 1st, 1921',
        title: 'Sid Hatfield (1891 - 1921)',
        imgSrc: require('./assets/eventPhotos/Individuals/sidHatfield.jpg'),
        description: `William "Sid" Hatfield was Police Chief of Matewan, West Virginia who was supportive of coal miners' attempts to unionize and helped them resist the efforts of the union-busting, family-evicting Baldwin-Felts Detective Agency.\n\nHe is most knowm for his role in "The Battle of Matewan", a shootout between Hatfield, armed miners, and Baldwin-Felts agents that killed ten people. The shootout occured when Hatfield and Albert Felts tried to arrest each other, which culminated in Hatfield killing Felts.\n\nHatfield was later assassinated by Baldwin-Felts agents while standing trial for murder, which increased the tensions between coal miners and company owners.`,
        link: 'https://www.wvencyclopedia.org/articles/1576',
        infoSrc: 'https://en.wikipedia.org/wiki/Sid_Hatfield'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 2nd, 1924',
        title: 'James Baldwin (1924 - 1987)',
        imgSrc: require('./assets/eventPhotos/Individuals/jamesBaldwin.jpg'),
        description: `James Arthur Baldwin was an American novelist, playwright, essayist, poet, and activist. His essays, as collected in Notes of a Native Son (1955), explore intricacies of racial, sexual, and class distinctions in Western society, most notably in regard to the mid-twentieth-century United States.\n\nIn 1963 he conducted a lecture tour of the South for Congress of Racial Equality (CORE), traveling to locations such as Durham and Greensboro in North Carolina, and New Orleans, Louisiana. During the tour, he lectured to students, white liberals, and anyone else listening about his racial ideology, an ideological position between the "muscular approach" of Malcolm X and the nonviolent program of Martin Luther King, Jr.\n\nBaldwin also expressed the hope that socialism would take root in the United States.`,
        link: 'https://en.wikipedia.org/wiki/James_Baldwin',
        infoSrc: 'https://en.wikipedia.org/wiki/James_Baldwin'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'August 3rd, 1981',
        title: 'PATCO Strike (1981)',
        imgSrc: require('./assets/eventPhotos/Events/patcoStrike.jpg'),
        description: `After negotiations between the union and the FAA broke down, the Professional Air Traffic Controllers Organization (PATCO) declared a strike on August 3, 1981, seeking better working conditions, better pay, and a 32-hour workweek. In striking, the union violated a law which prohibits strikes by federal government employees.\n\nDespite supporting PATCO's effort in his 1980 campaign, Ronald Reagan declared the PATCO strike a "peril to national safety" and ordered them back to work under the terms of the Taft–Hartley Act. Reagan demanded those remaining on strike return to work within 48 hours or officially forfeit their positions.\n\nOnly 1,300 of the nearly 13,000 controllers returned to work. PATCO also disobeyed a federal court injunction ordering an end to the strike and to return to work. On August 5, following the PATCO workers' refusal to return to work, Reagan fired the 11,345 striking air traffic controllers who had ignored the order and banned them from federal service for life. PATCO was also decertified by the Federal Labor Relations Authority a few months later.`,
        link: 'https://www.wnycstudios.org/podcasts/takeaway/segments/164690-strike-changed-american-labor',
        infoSrc: 'https://en.wikipedia.org/wiki/Professional_Air_Traffic_Controllers_Organization_(1968)#August_1981_strike'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-4': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'August 4th, 1984',
        title: 'Burkina Faso Founded (1984)',
        imgSrc: require('./assets/eventPhotos/Individuals/thomasSankara.jpg'),
        description: `On this day in 1984, the country of Upper Volta, a French colonial name, became Burkina Faso, which means "Land of the Upright People". This was declared by the National Council of the Revolution (NCR), led by Thomas Sankara, the new head of state of Burkina Faso.\n\nHis administration was known for refusing all foreign aid to remain politically independent, nationalizing all land and mineral wealth, and promoting literarcy, women's rights, and public health, including vaccinating over two and a half million children against meningitis, yellow fever and measles.\n\nOn 15 October 1987, Sankara was assassinated by troops led by Blaise Compaoré, who assumed leadership of the state shortly after having Sankara killed. A week before his assassination, Sankara declared: "While revolutionaries as individuals can be murdered, you cannot kill ideas".`,
        link: 'https://en.wikipedia.org/wiki/Burkina_Faso',
        infoSrc: 'https://www.jacobinmag.com/2015/05/thomas-sankara-burkina-faso-assassination/'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 4th, 1922',
        title: 'Sheldon Wolin (1922 - 2015)',
        imgSrc: require('./assets/eventPhotos/Individuals/sheldonWolin.jpg'),
        description: `Sheldon Sanford Wolin was an American political theorist and writer on contemporary politics. A political theorist for fifty years, Wolin became Professor of Politics, Emeritus, at Princeton University, where he taught from 1973 to 1987.\n\nWolin's political thought is particularly concerned with the fate of democracy at the hands of bureaucratic imperatives, elitism, and managerial principles and practices. His concepts of “inverted totalitarianism” and “fugitive democracy” are particularly well-known.`,
        link: 'https://en.wikipedia.org/wiki/Inverted_totalitarianism',
        infoSrc: 'https://en.wikipedia.org/wiki/Sheldon_Wolin'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthday',
        date: 'August 5th, 1938',
        title: 'James Cone (1958 - 2018)',
        imgSrc: require('./assets/eventPhotos/Individuals/jamesCone.jpg'),
        description: `James Hal Cone was an American theologian, best known for his advocacy of black theology and black liberation theology. His 1969 book Black Theology and Black Power provided a new way to comprehensively define the distinctiveness of theology in the black church.\n\nDistilled, his message was that Black Power, defined as black people asserting the humanity that white supremacy denied, was the gospel in America. Jesus came to liberate the oppressed, advocating the same thing as Black Power. He argued that white American churches preached a gospel based on white supremacy, antithetical to the gospel of Jesus.`,
        link: 'https://archive.org/details/TheBlackChurchAndMarxismWhatDoTheyHaveToSayToEachOther/mode/2up',
        infoSrc: 'https://en.wikipedia.org/wiki/James_H._Cone'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 7th, 1890',
        title: 'Elizabeth Gurley Flynn (1890 - 1964)',
        imgSrc: require('./assets/eventPhotos/Individuals/elizabethFlynn.jpg'),
        description: `Elizabeth Gurley Flynn was a labor leader, activist, and feminist who played a leading role in the Industrial Workers of the World (IWW). Flynn was a vigorous proponent of women's rights, birth control, and women's suffrage. She joined the Communist Party USA in 1936 and late in life, in 1961, became its chairwoman. She died during a visit to the Soviet Union, where she was accorded a state funeral with processions in the Red Square attended by over 25,000 people.\n\nFlynn was also a founding member of the American Civil Liberties Union, but was expelled in 1940 during purge of all communists from ACLU leadership. This decision was reversed twelve years after her death, in 1976.\n\nIn 1948, she was arrested, along with eleven other prominent members of the Communist Party, for violating the Smith Act. She served two years in prison, and continued her political activism after her release.`,
        link: 'https://www.nytimes.com/1976/06/22/archives/aclu-reverses-ouster-of-elizabeth-gurley-flynn.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Elizabeth_Gurley_Flynn'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 8th, 1879',
        title: 'Emiliano Zapata (1879 - 1919)',
        imgSrc: require('./assets/eventPhotos/Individuals/emilianoZapata.jpg'),
        description: `Emiliano Zapata Salazar was a leading figure in the Mexican Revolution, the main leader of the peasant revolution in the state of Morelos, and the inspiration of the agrarian movement called Zapatismo.\n\nZapata was born in the rural village of Anenecuilco in Morelos State, where peasant communities were under increasing pressure from the small landowning class who monopolized land and water resources for sugar cane production with the support of dictator Porfirio Díaz.\n\nEarly on, Zapata participated in political movements against Diaz and the landowning hacendados, and when the Revolution broke out in 1910 he was positioned as a central leader of the peasant revolt in Morelos. Zapata was responsible for defeating and ousting various invading armies from Morelos on multiple occasions.`,
        link: 'https://en.wikipedia.org/wiki/Plan_of_Ayala',
        infoSrc: 'https://en.wikipedia.org/wiki/Emiliano_Zapata'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'August 9th, 1814',
        title: 'Treaty of Fort Jackson (1814)',
        imgSrc: require('./assets/eventPhotos/Events/jacksonTreaty.png'),
        description: `The Treaty of Fort Jackson (also known as the Treaty with the Creeks) was signed on this day in 1814 at Fort Jackson in Alabama. The treaty was agreed upon in the aftermath of defeat of the Red Stick (Upper Creek) resistance by U.S. forces at the Battle of Horseshoe Bend.\n\nThe treaty was the "largest single Indian cession of southern American land", according to historian Michael Rogin - around 23 million acres in Alabama and Georgia. Notably, the U.S. forces won with the battle with the help of allied Cherokee and Lower Creek forces friendly to the American side.\n\nThe terms of various treaties with the Creek nation would go on to be consistently violated by Americans colonizing the south.`,
        link: 'https://www.nps.gov/articles/treaty-of-fort-jackson.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/Treaty_of_Fort_Jackson'
      },
    ],
  },
  '8-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'August 12th, 1946',
        title: 'South Africa Miner Strike (1946)',
        imgSrc: require('./assets/eventPhotos/Events/southAfricaMiners.jpg'),
        description: `On this day in 1946, nearly 100,000 black South African mine workers of the Witwatersrand went on strike in support of a demand for higher wages - 10 shillings a day. They continued the strike for a week in the face of the most savage police terror, in which officially 1,248 workers were wounded and a very large number - officially only 9 - were killed.\n\nLawless police and army violence smashed the strike. The resources of the racist state were mobilised, almost on a war footing, against the unarmed workmen. A profound result of the strike was the effect it had on the thinking of the national liberation movement - almost immediately it shifted significantly from a policy of concession to more dynamic and militant forms of struggle.`,
        link: 'https://en.wikipedia.org/wiki/1946_African_Mine_Workers%27_Union_strike',
        infoSrc: 'https://www.sahistory.org.za/article/1946-african-mineworkers-strike'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 12th, 1936',
        title: 'Mario Santucho (1936 - 1976)',
        imgSrc: require('./assets/eventPhotos/Individuals/marioSantucho.jpg'),
        description: `Mario Roberto Santucho was an Argentine revolutionary and guerrilla combatant, founder of the Partido Revolucionario de los Trabajadores (Workers' Revolutionary Party, PRT) and leader of Argentina's largest Marxist guerrilla group, the Ejército Revolucionario del Pueblo (People's Revolutionary Army, ERP).\n\nSantucho and a significant part of the PRT leadership were killed on July 19, 1976, as part of a covert ambush carried out by a paramilitary task force connected to the Argentine Armed Forces. His and his wife's remains were never found.\n\nThis attack was part of the "Dirty War" perpetrated by the US-backed Argentinian dictatorship against left-wing dissidents (including students, guerrilla fighters, labor activists, and journalists). It is estimated that around 30,000 people were murdered due to this persecution.`,
        link: 'https://en.wikipedia.org/wiki/Dirty_War',
        infoSrc: 'https://en.wikipedia.org/wiki/Mario_Roberto_Santucho'
      },
      {
        category: 'Birthdays',
        date: 'August 12th, 1861',
        title: 'Luigi Galleani (1861 - 1931)',
        imgSrc: require('./assets/eventPhotos/Individuals/luigiGalleani.jpg'),
        description: `Luigi Galleani was an Italian anarchist active in the United States from 1901 to 1919. He is best known for his enthusiastic advocacy of "propaganda of the deed", i.e. the use of violence to eliminate those he viewed as tyrants and oppressors and to act as a catalyst to the overthrow of existing government institutions.\n\nFrom 1914 to 1932, Galleani's followers in the United States (known as i Galleanisti) carried out a series of bombings and assassination attempts against institutions and persons they viewed as class enemies. After Galleani was deported from the United States to Italy in June 1919, his colleagues are alleged to have carried out the Wall Street bombing of 1920, which resulted in the deaths of 38 people.`,
        link: 'https://en.wikipedia.org/wiki/Luigi_Galleani',
        infoSrc: 'https://en.wikipedia.org/wiki/Luigi_Galleani'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 13th, 1926',
        title: 'Fidel Castro (1926 - 2016)',
        imgSrc: require('./assets/eventPhotos/Individuals/fidelCastro.png'),
        description: `Fidel Alejandro Castro Ruz was a Cuban revolutionary and politician who served as Prime Minister of Cuba from 1959 to 1976 and President from 1976 to 2008. Ideologically a Marxist-Leninist and Cuban nationalist, he also served as the First Secretary of the Communist Party of Cuba from 1961 until 2011. Under his administration the Republic of Cuba became a one-party communist state; industry and business were nationalized, and state socialist reforms were implemented throughout society.\n\nThe longest-serving non-royal head of state in the 20th and 21st centuries, Castro polarized opinion throughout the world. His supporters view him as a champion of socialism and anti-imperialism whose revolutionary regime advanced economic and social justice while securing Cuba's independence from US hegemony. Critics view him as a tyrannical dictator whose administration oversaw human-rights abuses, the exodus of many Cubans, and the impoverishment of the country's economy.`,
        link: 'https://en.wikipedia.org/wiki/Fidel_Castro',
        infoSrc: 'https://en.wikipedia.org/wiki/Fidel_Castro'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'August 16th, 2012',
        title: 'Marikana Massacre (2012)',
        imgSrc: require('./assets/eventPhotos/Events/marikanaMassacre.jpeg'),
        description: `On this day in 2012, The Marikana massacre took place in South Africa. It was the most lethal use of force by South African security forces against civilians since 1976. The shootings to the Sharpeville massacre in 1960 (also another instance of police firing on crowds in South Africa). The incident took place on the 25-year anniversary of a nationwide South African miners' strike\n\nThe Marikana massacre started as a wildcat strike at a mine owned by Lonmin in the Marikana area, close to Rustenburg, South Africa. Although there had been a few violent clashes before August 16th, it was on this day that striking workers gathered, armed with machetes. After clashes with police, shooting between both parties began. From this day alone, over 34 miners were killed and 76 were injured.`,
        link: 'https://www.theguardian.com/world/2015/may/19/marikana-massacre-untold-story-strike-leader-died-workers-rights',
        infoSrc: 'https://en.wikipedia.org/wiki/Marikana_massacre'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'August 17th, 1982',
        title: 'Ruth First (1952 - 1982)',
        imgSrc: require('./assets/eventPhotos/Individuals/ruthFirst.jpg'),
        description: `Ruth First was a South African anti-apartheid activist and scholar.\n\nAs an anti-apartheid activist, First had been harassed for years by the South African government. In 1956, First, alongside 155 other activists, were all charged and acquitted of treason in the country's infamous "Treason Trial".\n\nAfter the state of emergency that followed the Sharpeville massacre in 1960, she was banned from political participation. First could not attend meetings, publish, and or be quoted. In 1963, she was imprisoned and held in isolation without charge for 117 days under the Ninety-Day Detention Law, the first white woman to be detained under this law.\n\nIn August of 1982, First was assassinated by South African police in Mozambique, where she was working in exile.`,
        link: 'https://www.sahistory.org.za/people/ruth-heloise-first',
        infoSrc: 'https://en.wikipedia.org/wiki/Ruth_First'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'August 18th, 1944',
        title: 'Ernst Thälmann (1886 - 1944)',
        imgSrc: require('./assets/eventPhotos/Individuals/ernstThalmann.jpg'),
        description: `Ernst Thälmann was a German communist politician. He was leader of the Communist Party of Germany (KPD) from 1925 to 1933. A committed Stalinist, Thälmann played a major role during the political instability of the Weimar Republic. Especially in its final years, when the KPD explicitly sought the overthrow of the liberal democracy of the republic.\n\nAfter the Reichstag Fire on 27th February, 1933, the Nazi Party launched a new wave of violence and arrests against members of the KPD and other left-wing opponents of the regime. This included Thälmann, who was arrested, tortured, and imprisoned on 3rd March 1933. He was kept in solitary confinement for eleven years, before finally being executed at the Buchenwald concentration camp in 1944.`,
        link: 'https://en.wikipedia.org/wiki/Ernst_Th%C3%A4lmann',
        infoSrc: 'https://en.wikipedia.org/wiki/Ernst_Th%C3%A4lmann'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'August 21, 1831',
        title: "Nat Turner's Rebellion (1831)",
        imgSrc: require('./assets/eventPhotos/Events/natTurnerRebellion.jpg'),
        description: `Nat Turner's Rebellion was a rebellion of black slaves that took place in Southampton County, Virginia, in August 1831, led by Nat Turner. Fugitive enslaved people killed from 55 to 65 people, at least 51 being white. The group spared a few homes "because Turner believed the poor white inhabitants 'thought no better of themselves than they did of negroes.'"\n\nThe state executed 56 slaves accused of being part of the rebellion, and many non-participant slaves were punished in the frenzy. Approximately 120 slaves and free blacks were murdered by militias and mobs in the area. State legislatures passed new laws prohibiting education of slaves and free black people, restricting rights of assembly and other civil liberties for free black people, and requiring white ministers to be present at all worship services.`,
        link: 'https://www.jacobinmag.com/2016/10/birth-of-a-nation-nat-turner-nate-parker',
        infoSrc: 'https://en.wikipedia.org/wiki/Nat_Turner%27s_slave_rebellion'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'August 21st, 1940',
        title: 'Leon Trotsky (1879 - 1940)',
        imgSrc: require('./assets/eventPhotos/Individuals/leonTrotsky.jpg'),
        description: `Leon Trotsky was a Soviet revolutionary, Marxist theorist and politician whose particular strain of Marxist thought is known as Trotskyism. Key characteristics of Trotskyist thought include the concepts of "Permanent Revolution" and the "United Front" of revolutionaries and reformers against common enemies.\n\nTrotsky joined the Bolshevik Party a few weeks before the October Revolution and immediately became a leader within the party, thus also playing a key role in the October Revolution. Trotsky became more prominent from March 1918 to January 1925 as the leader of the Red Army in the post of Commissar for Military and Naval Affairs. He was also a vital leading figure in the Red victory in the Russian Civil War and one of the seven members of the first Politburo.\n\nAfter the rise of Joseph Stalin, Trotsky was removed from his positions and eventually expelled from the Soviet Union in February 1929. He spent the rest of his life in exile, and was assassinated in 1940 in Mexico City by Ramón Mercader, a Soviet agent.`,
        link: 'https://www.britannica.com/biography/Leon-Trotsky',
        infoSrc: 'https://en.wikipedia.org/wiki/Leon_Trotsky'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-22': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'August 22nd, 1791',
        title: 'Haitian Revolution Begins (1791)',
        imgSrc: require('./assets/eventPhotos/Events/haitianRevolution.jpg'),
        description: `The Haitian Revolution was a successful insurrection by self-liberated slaves against French colonial rule in Saint-Domingue, now the sovereign state of Haiti. The revolt began on this day in 1791, and Haiti didn't achieve independence from France until 1804. The Haitian Revolution was the only slave uprising that led to the founding of a state which was both free from slavery, and ruled by non-whites and former captives.\n\nThe revolt began when thousands of slaves began to kill their masters and plunged the colony into civil war after a well-attended vodou ceremony. Within the next ten days, slaves had taken control of the entire Northern Province in an unprecedented slave revolt. The slaves sought revenge on their masters through "pillage, rape, torture, mutilation, and death". Over 200,000 black people died from the initial uprising until independence.\n\nToussaint Louverture was a notable military leader of the revolution, but died shortly before independence was won. His former lieutenant Jean-Jacques Dessalines became the first leader of the newly independent nation in 1804.`,
        link: 'https://en.wikipedia.org/wiki/Haitian_Revolution',
        infoSrc: 'https://en.wikipedia.org/wiki/Haitian_Revolution'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 24th, 1945',
        title: 'Marsha P. Johnson (1945 - 1992)',
        imgSrc: require('./assets/eventPhotos/Individuals/marshaJohnson.jpg'),
        description: `Marsha P. Johnson was an American gay liberation activist and self-identified drag queen. Known as an outspoken advocate for gay rights, Johnson was one of the prominent figures in the Stonewall uprising of 1969. A founding member of the Gay Liberation Front, Johnson co-founded the socialist activist group Street Transvestite Action Revolutionaries (S.T.A.R.), alongside close friend Sylvia Rivera. A popular figure in New York City's gay and art scene, Johnson modeled for Andy Warhol, and performed onstage with the drag performance troupe Hot Peaches. Known for decades as a welcoming presence in the streets of Greenwich Village, Johnson was known as the "mayor of Christopher Street". From 1987 through 1992, Johnson was an AIDS activist with ACT UP.\n\nJohnson was one of the first drag queens to go to the Stonewall Inn, after they began allowing women and drag queens inside; it was previously a bar for only gay men. On the early morning hours of June 28, 1969, the Stonewall uprising occurred. While the first two nights of rioting were the most intense, the clashes with police would result in a series of spontaneous demonstrations and marches through the gay neighborhoods of Greenwich Village for roughly a week afterwards. Johnson denied starting the uprising. In 1987, Johnson recalled arriving at around "2:00 [that morning]", that "the riots had already started" by that time and that the Stonewall building "was on fire" after cops set it on fire.\n\nShortly after a pride parade in 1992, Johnson's body was discovered floating in the Hudson River. Police initially ruled the death a suicide, but Johnson's friends and other members of the local community insisted Johnson was not suicidal and noted that the back of Johnson's head had a massive wound. Several people came forward to say they had seen Johnson harassed by a group of "thugs" who had also robbed people. According to Wicker, a witness saw a neighborhood resident fighting with Johnson on July 4, 1992. During the fight he used a homophobic slur, and later bragged to someone at a bar that he had killed a drag queen named Marsha. The witness was not successful in relaying this information to the police. Other locals stated later that law enforcement was not interested in investigating Johnson's death, stating that the case was about a "gay black man" and wanting little to do with at the time.\n\nJohnson was cremated and, following a funeral at a local church, friends released Johnson's ashes over the river.`,
        link: 'https://en.wikipedia.org/wiki/Marsha_P._Johnson',
        infoSrc: 'https://en.wikipedia.org/wiki/Marsha_P._Johnson'
      },
      {
        category: 'Birthdays',
        date: 'August 24th, 1922',
        title: 'Howard Zinn (1922 - 2010)',
        imgSrc: require('./assets/eventPhotos/Individuals/howardZinn.jpg'),
        description: `Howard Zinn was an American historian, playwright, and socialist thinker. He was chair of the history and social sciences department at Spelman College, and a political science professor at Boston University. Zinn wrote over 20 books, including his best-selling and influential book "A People's History of the United States", which was the inspiration for making this calendar.\n\nIn the 1960s, as a result of Zinn's campaigning against the Vietnam War and his influence on Martin Luther King, Jr., the FBI designated him a high security risk to the country by adding him to the Security Index, a listing of American citizens who could be summarily arrested if a state of emergency were to be declared. The FBI memos also show that they were concerned with Zinn's repeated criticism of the FBI for failing to protect blacks against white mob violence. Zinn's daughter said she was not surprised by the files; "He always knew they had a file on him."\n\nZinn described himself as "something of an anarchist, something of a socialist. Maybe a democratic socialist." He wrote extensively about the Civil Rights Movement, the anti-war movement and labor history of the United States. His memoir, You Can't Be Neutral on a Moving Train (Beacon Press, 2002), was also the title of a 2004 documentary about Zinn's life and work. Zinn died of a heart attack in 2010, at age 87.`,
        link: 'https://en.wikipedia.org/wiki/Howard_Zinn',
        infoSrc: 'https://en.wikipedia.org/wiki/Howard_Zinn'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'August 25th, 1921',
        title: 'Battle of Blair Mountain (1921)',
        imgSrc: require('./assets/eventPhotos/Events/battleOfBlairMountain.jpg'),
        description: `The Battle of Blair Mountain was the largest labor uprising in United States history and the largest armed uprising since the American Civil War. The conflict occurred in Logan County, West Virginia, as part of the Coal Wars, a series of early-20th-century labor disputes in Appalachia. Up to 100 people were killed, and nearly one thousand miners were arrested on multiple charges, including murder and treason.\n\nFor five days, from late August to early September 1921, some 10,000 armed coal miners confronted 3,000 lawmen and strikebreakers who were backed by coal mine operators during the miners' attempt to unionize the southwestern West Virginia coalfields. The battle ended after approximately one million rounds were fired, aerial bombardment of the miners, and the United States Army, intervening on orders from the president.`,
        link: 'https://www.history.com/news/americas-largest-labor-uprising-the-battle-of-blair-mountain',
        infoSrc: 'https://en.wikipedia.org/wiki/Battle_of_Blair_Mountain'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'August 27th, 1832',
        title: 'Black Hawk Surrenders (1832)',
        imgSrc: require('./assets/eventPhotos/Individuals/blackHawk.jpg'),
        description: `Black Hawk (1767 – 1838) was a band leader and warrior of the Sauk Native American tribe in what is now the Midwest of the United States. Although he had inherited an important historic sacred bundle from his father, he was not a hereditary civil chief.\n\nBlack Hawk earned his status as a war chief or captain by his actions; leading raiding and war parties as a young man, and then a band of Sauk warriors during the Black Hawk War of 1832, which was an apparent attempt by Black Hawk to resettle indigenous land lost in the disputed Treaty of St. Louis thirty years prior.\n\nOn August 1st, the Battle of Bad Axe, which was effectively a massacre. When Sauk people attempted to surrender, they were gunned down by American soldiers instead. Many Sauk, including children, were shot or drowned while attempting to cross the Mississippi River into safety. Although Black Hawk successfuly fled the massacre, on this day in 1832, he surrendered to the American government and was imprisoned.`,
        link: 'https://en.wikipedia.org/wiki/Black_Hawk_(Sauk_leader)',
        infoSrc: 'https://en.wikipedia.org/wiki/Battle_of_Bad_Axe'
      },
    ],
  },
  '8-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'August 28th, 1963',
        title: `"I Have a Dream" Speech (1963)`,
        imgSrc: require('./assets/eventPhotos/Events/dreamSpeech.jpg'),
        description: `On this day in 1963, Martin Luther King Jr. gave the "I Have a Dream" speech to over 250,000 civil rights supporters from the steps of the Lincoln Memorial, during the March on Washington for Jobs and Freedom in Washington, D.C. The speech was a defining moment of the civil rights movement and among the most iconic speeches in American history. Here is a brief excerpt:\n\n"In a sense we've come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the 'unalienable Rights' of 'Life, Liberty and the pursuit of Happiness.'\n\nIt is obvious today that America has defaulted on this promissory note, insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "'insufficient funds.'"`,
        link: 'https://www.americanrhetoric.com/speeches/mlkihaveadream.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/I_Have_a_Dream'
      },
    ],
  },
  '8-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'August 29th, 1786',
        title: "Shay's Rebellion (1786)",
        imgSrc: require('./assets/eventPhotos/Events/shaysRebellion.jpg'),
        description: `Shays' Rebellion was an armed uprising in Western Massachusetts in opposition to a debt crisis among the citizenry and the state government's increased efforts to collect taxes both on individuals and their trades. American Revolutionary War veteran Daniel Shays led four thousand rebels (called Shaysites) in a protest against economic and civil rights injustices.\n\nThe rebellion stoked some anti-democratic sentiment during the 1787 Constitutional Convention, which was dominated by strong-government advocates. Notably, Delegate Oliver Ellsworth of Connecticut argued that because the people could not be trusted (as exemplified by Shays' Rebellion), the members of the federal House of Representatives should be chosen by state legislatures, not by popular vote.`,
        link: 'https://www.zinnedproject.org/news/tdih/shays-rebellion',
        infoSrc: 'https://en.wikipedia.org/wiki/Shays%27_Rebellion'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'August 30th, 1948',
        title: 'Fred Hampton (1948 - 1969)',
        imgSrc: require('./assets/eventPhotos/Individuals/fredHampton.jpg'),
        description: `Fredrick Allen Hampton was an American activist and revolutionary socialist. He came to prominence in Chicago as chairman of the Illinois chapter of the Black Panther Party (BPP), and deputy chairman of the national BPP. In this capacity, he founded a prominent multicultural political organization, the Rainbow Coalition that initially included the Black Panthers, Young Patriots and the Young Lords, and an alliance among major Chicago street gangs to help them end infighting, and work for social change.\n\nIn 1967, Hampton was identified by the Federal Bureau of Investigation as a radical threat. The FBI tried to subvert his activities in Chicago, sowing disinformation among these groups and placing a counterintelligence operative in the local Panthers. In December 1969, Hampton was assassinated in his bed during a predawn raid at his Chicago apartment by a tactical unit of the Cook County State's Attorney's Office in conjunction with the Chicago Police Department and the Federal Bureau of Investigation; during the raid, another Panther was killed and several seriously wounded.\n\nAt a press conference the next day, the police announced the arrest team had been attacked by the "violent" and "extremely vicious" Panthers and had defended themselves accordingly. In a second press conference on December 8, the police leadership praised the assault team for their "remarkable restraint", "bravery", and "professional discipline" in not killing all the Panthers present. Photographic evidence was presented of bullet holes allegedly made by shots fired by the Panthers, but this was soon challenged by reporters. It was later found that all but one of nearly 100 shots were fired by police.`,
        link: 'https://en.wikipedia.org/wiki/Fred_Hampton',
        infoSrc: 'https://en.wikipedia.org/wiki/Fred_Hampton'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '8-31': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'September 3rd, 2016',
        title: 'Dakota Access Protestors (2016)',
        imgSrc: require('./assets/eventPhotos/Events/dakotaPipelineDog.jpg'),
        description: `The Dakota Access Pipeline protests were grassroots movements that began in early 2016 in reaction to the approved construction of Energy Transfer Partners' Dakota Access Pipeline in the northern United States. Many in the Standing Rock tribe and surrounding communities considered the pipeline and its intended crossing beneath the Missouri River to constitute a threat to the region's drinking and irrigation water, as well as to cultural sites of historic importance.\n\nOn this day in 2016, the Dakota Access Pipeline company used bulldozers to dig up part of the pipeline route that contained possible Native graves and burial artifacts; the land was subject to a pending legal injunction. Protestors stormed the land and were attacked by a private security firm, armed with attack dogs and pepper spray.\n\nAmy Goodman, journalist with Democracy Now!, followed the protestors and recorded them being attacked by the firm. Goodman was later issued an arrest warrant by a state prosecutor for her actions.`,
        link: 'https://www.youtube.com/watch?v=kuZcx2zEo4k',
        infoSrc: 'https://en.wikipedia.org/wiki/Dakota_Access_Pipeline_protests#Security_firm_use_of_dogs_and_pepper_spray_against_protesters'
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'September 3rd, 2013',
        title: 'South Africa Miners Strike (2013)',
        imgSrc: require('./assets/eventPhotos/Events/southAfrica2013Strike.jpg'),
        description: `On this day in 2013, an estimated 80,000 - 90,000 gold miners went on strike in South Africa, demanding a 60% wage increase to $775 per month.\n\nMining in South Africa has a troubled past, with colonizers enforcing de facto slave labor in the early 20th century to the government using live ammunition to massacre 34 striking miners just a year prior to this strike. The year 2013 was called "The Year of the Strike" in South Africa by reporter Alec Hogg, with over tens of thousands of auto manufacturing, agricultural, and construction workers also going on strike in the same year.`,
        link: 'https://theweek.com/articles/460495/everything-need-know-about-south-african-gold-miners-strike',
        infoSrc: 'https://www.theguardian.com/world/2013/sep/03/south-africa-gold-miners-strike'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 3rd, 1859',
        title: 'Jean Jaurès (1859 - 1914)',
        imgSrc: require('./assets/eventPhotos/Individuals/jeanJaures.jpg'),
        description: `Auguste Marie Joseph Jean Léon Jaurès, commonly referred to as Jean Jaurès, was a French Socialist leader. Initially a moderate republican, he was later one of the first social democrats, eventually becoming the leader of the French Socialist Party, which opposed Jules Guesde's revolutionary Socialist Party of France. The two parties merged in 1905 in the French Section of the Workers' International (SFIO).\n\nToday, a key aspect his legacy was his antimilitarism. Jaurès was an early opponent of the draft and desperately tried to prevent war between France and Germany before World War I, going so far as to try and organize a general strike in both countries to force their leaders to negotiate diplomatically.\n\nIn 1914, Jaurès returned to Paris from a diplomatic meeting in Brussels to advocate against the coming war. He was assassinated by a French nationalist at the outbreak of World War I, and remains one of the main historical figures of the French Left.`,
        link: 'https://en.wikipedia.org/wiki/Jean_Jaur%C3%A8s',
        infoSrc: 'https://en.wikipedia.org/wiki/Jean_Jaur%C3%A8s'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'September 5th, 1917',
        title: 'DoJ raids IWW HQ (1917)',
        imgSrc: require('./assets/eventPhotos/Individuals/haywoodMugshot.jpg'),
        description: `Using the newly passed Espionage Act of 1917 as justification, the Department of Justice raided forty-eight IWW meeting halls on September 5, 1917. The Department of Justice, with the approval of President Woodrow Wilson, then proceeded to arrest 165 IWW members for "conspiring to hinder the draft, encourage desertion, and intimidate others in connection with labor disputes."\n\nAmong those arrested was the well-known "Big Bill" Haywood, a radical labor organizer. He was successfully convicted, and skipped bail before his sentencing, fleeing to the Soviet Union and acting as a labor advisor to Vladimir Lenin.`,
        link: '',
        infoSrc: 'https://depts.washington.edu/iww/justice_dept.shtml'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 7th, 1902',
        title: 'Michael Imoudu (1902 - 2005)',
        imgSrc: require('./assets/eventPhotos/Individuals/michaelImoudu.jpg'),
        description: `Michael Athokhamien Imoudu was a Nigerian labour union leader. Imoudu started labour union activities as a member of the Railway Workers Union (RWU), which became one of the most militant unions in the country during the colonial period. The union was formed in 1931 at a time where many trade organizations were more similar to social undertakings than an industrial movement.\n\nImoudu was released from prison by the government in 1945, presumably as a means to de-escalate labor tensions. A large rally was held to welcome him back to Lagos, however, and on 21 and 22 June 1945, Imoudu led a radical wing of the organized union to organize a general strike that became an important moment in Nigeria's history.`,
        link: 'https://libcom.org/library/1945-nigerian-general-strike?fbclid=IwAR0jkREpLgiYuTbQmpvfcMycRnBhR2njPGEV5LcUqWLU6V5RI3ixzLk8Vtk',
        infoSrc: 'https://en.wikipedia.org/wiki/Michael_Imoudu'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'September 9th, 1971',
        title: 'Attica Prison Riot (1971)',
        imgSrc: require('./assets/eventPhotos/Events/atticaPrisonRiot.jpg'),
        description: `The Attica Prison uprising, also known as the Attica Prison rebellion or Attica Prison riot, occurred at the Attica Correctional Facility in Attica, New York, United States, on this day in 1971. Based upon prisoners' demands for better living conditions and political rights, the uprising was one of the most well-known and significant flashpoints of the Prisoners' Rights Movement.\n\nThe rebellion began two weeks after the killing of George Jackson at San Quentin State Prison, when the 1,281 of the Attica prison's approximately 2,200 inmates rioted and took control of the prison, taking 42 staff hostage. After four days of fruitless negotiations and escalating tensions between prisoners and police, Gov. Nelson Rockefeller (who refused to come to the scene in person) ordered that the prison be retaken; 39 people were killed in a 15-minute assault by state police.`,
        link: 'https://www.zinnedproject.org/materials/attica-prison-uprising/',
        infoSrc: 'https://en.wikipedia.org/wiki/Attica_Prison_riot'
      },
      {
        category: 'Rebellion',
        date: 'September 9th, 1739',
        title: 'Stono Slave Rebellion (1739)',
        imgSrc: require('./assets/eventPhotos/Events/stonoRebellion.jpg'),
        description: `The Stono Rebellion was a slave rebellion that began on this day in 1739, in the colony of South Carolina. It was the largest slave uprising in the British mainland colonies, with 25 colonists and 35 to 50 Africans killed. The uprising was led by native Africans who were likely from the Central African Kingdom of Kongo, as some of the rebels spoke Portuguese.\n\nThe slaves were making their way to Spanish Florida, as the Spanish had promised freedom to any slave who managed to escape from the British colonies. As the slaves made their way south, they killed approximately two dozen white people and seized weapons and ammunition, before being attacked by a well-armed milita.\n\nAround 50 slaves and 25 militiamen were killed in the fighting, and the rebellion was quelled. The Stono Rebellion was directly responsible for the "Negro Act of 1740", which slave freedom of movement and education in South Carolina.`,
        link: 'https://www.blackpast.org/african-american-history/stono-rebellion-1739/',
        infoSrc: 'https://en.wikipedia.org/wiki/Stono_Rebellion'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 9th, 1918',
        title: 'Col. Stone Johnson (1918 - 2012)',
        imgSrc: require('./assets/eventPhotos/Individuals/stoneJohnson.jpg'),
        description: `Colonel Stone Johnson was a black activist in the Civil Rights Movement. A railway worker and union representative by trade, he got involved in the civil rights movement in Birmingham, Alabama in the mid 1950s, working with Fred Shuttlesworth. He started a civil rights organization called the Civil Rights Guards that protected homes and business involved in the movement, usually while armed.\n\nJohnson may be best known for having helped to carry a Ku Klux Klan bomb away from Bethel Baptist Church in Birmingham, AL and serving as a bodyguard to Martin Luther King Jr. He also provided armed protection to nonviolent activists in Anniston, Alabama during the 1961 Freedom Rides, rescuing them from a segregationist mob.\n\nAn oft-repeated remark of Johnson, when asked how he'd managed to protect civil rights leaders given his commitment to nonviolence, Johnson replied, "With my nonviolent .38 special."`,
        link: 'https://www.al.com/spotnews/2012/01/birmingham_civil_rights_activi.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Colonel_Stone_Johnson'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'September 11th, 1973',
        title: 'Salvador Allende (1908 - 1973)',
        imgSrc: require('./assets/eventPhotos/Individuals/salvadorAllende.jpg'),
        description: `Salvador Allende was a Chilean socialist politician and physician, President of Chile from 1970 until 1973, and head of the Popular Unity political coalition government; he was Latin America's first ever Marxist to be elected president in a liberal democracy.\n\nAs president, Allende sought to nationalize major industries, expand education and improve the living standards of the working class. He clashed with the right-wing parties that controlled Congress and with the judiciary.\n\nOn 11 September 1973, the military moved to oust Allende in a coup d'état assisted by the Henry Kissinger and the CIA. As troops surrounded La Moneda Palace, he gave his last speech vowing not to resign. Later that day, Allende died of a gunshot wound, which the new government claimed was self-inflicted. Although this conclusion was supported by later investigations, speculations of Allende being murdered continue to this day.\n\nFollowing Allende's death, General Augusto Pinochet refused to return authority to a civilian government, and Chile was later ruled by a military junta that was in power up until 1990. This junta dissolved the Congress of Chile, suspended the Constitution, and began a persecution of alleged dissidents, in which at least 3,095 civilians disappeared or were killed.`,
        link: 'https://www.jacobinmag.com/2016/09/chile-coup-santiago-allende-social-democracy-september-11-2',
        infoSrc: 'https://en.wikipedia.org/wiki/Salvador_Allende'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 12th, 1944',
        title: 'Leonard Peltier (1944)',
        imgSrc: require('./assets/eventPhotos/Individuals/leonardPeltier.jpg'),
        description: `Leonard Peltier, born on this day in 1944, is an American indigenous rights activist and an enrolled member of the Turtle Mountain Chippewa, and is of Lakota and Dakota descent. After being extradited from Canada through a false witness statement, he was convicted in a controversial 1977 trial and sentenced to two consecutive terms of life imprisonment for first-degree murder of murdering two Federal Bureau of Investigation (FBI) agents in a shooting on the Pine Ridge Indian Reservation in South Dakota.\n\nAs detailed by In the Spirit of Crazy Horse, his trials and conviction are considered highly controversial and Amnesty International has raised concerns about their fairness. On January 18, 2017, the Office of the Pardon Attorney announced that President Barack Obama had denied Peltier's application for clemency.`,
        link: 'https://montanapioneer.com/an-interview-with-leonard-peltier/',
        infoSrc: 'https://en.wikipedia.org/wiki/Leonard_Peltier'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 13th, 1947',
        title: 'Geronimo Pratt (1947 - 2011)',
        imgSrc: require('./assets/eventPhotos/Individuals/geronimoPratt.jpg'),
        description: `Elmer "Geronimo" Pratt, also known as Geronimo Ji-Jaga and Geronimo Ji-Jaga Pratt, was a decorated military veteran and a high-ranking member of the Black Panther Party in the United States in the late 1960s and early 1970s. He moved to Los Angeles, where he studied at UCLA under the GI Bill and joined the Black Panther Party. Pratt was also a target of the FBI's COINTEL program, which sought to subvert black power movements.\n\nIn 1972, Pratt was wrongfully convicted for murder and served 27 years in prison, eight of which were in solitary confinement. Pratt was freed in 1997 when his conviction was vacated due to the prosecution concealing wiretaps that proved he was not at the scene of the murder.`,
        link: 'https://en.wikipedia.org/wiki/Black_Panther_Party',
        infoSrc: 'https://en.wikipedia.org/wiki/Geronimo_Pratt'
      },
      {
        category: 'Birthdays',
        date: 'September 13th, 1964',
        title: 'Tavis Smiley (1964 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/tavisSmiley.jpg'),
        description: `Tavis Smiley, born on this day in 1964, is an American talk show host and author. Smiley was born in Gulfport, Mississippi, and grew up in Bunker Hill, Indiana. From 2010 to 2013, Smiley and Cornel West worked together to host their own radio talk show, Smiley & West.\n\nIn 2012, Smiley participated in a "Poverty Tour" with Princeton University professor Cornel West to promote their book The Rich and the Rest of Us: A Poverty Manifesto. The stated aim of the tour was to highlight the plight of the impoverished population of the United States prior to the 2012 presidential election, whose candidates Smiley and West stated had ignored the plight of the poor.`,
        link: 'https://pnhp.org/news/smiley-and-west-the-rich-and-the-rest-of-us/',
        infoSrc: 'https://en.wikipedia.org/wiki/Tavis_Smiley'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'September 15th, 1845',
        title: 'Allegheny Strike (1845)',
        imgSrc: require('./assets/eventPhotos/Events/alleghenyStrike.jpg'),
        description: `On this day, the Allegheny Textile Strike of 1845 began in Pittsburgh, Pennsylvania. The strike was led by women and children, and part of a series of strikes that took place between 1845-1848.\n\nMore than 400 textile workers struck to push for a ten hour day without a pay cut from their typical 12 hour day. In October, some workers began flinging mud and destroying factory fences with axes, presumably to scare off some scabs that had replaced them. This behavior scandalized the strike and damaged some public support of it.\n\nThe strike was initially unsuccessful, but, following a similar strike in 1848, a law was passed limiting the working day to 10 hours. Unfortunately, this achievement was undercut by an amendment that allowed workers to sign a contract allowing the workday to increase back to 12 hours.`,
        link: 'https://explorepahistory.com/hmarker.php?markerId=1-A-BD',
        infoSrc: 'https://en.wikipedia.org/wiki/Allegheny_Textile_Strikes_of_1845_and_1848'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 15th, 1940',
        title: 'Anne Moody (1940 - 2015)',
        imgSrc: require('./assets/eventPhotos/Individuals/anneMoody.jpg'),
        description: `Anne Moody was an American author who wrote about her experiences growing up poor and black in rural Mississippi, and her involvement in the Civil Rights Movement through the NAACP, Congress of Racial Equality (CORE), and Student Nonviolent Coordinating Committee (SNCC). Moody fought racism and segregation from when she was a little girl in Centreville, Mississippi, and continued throughout her adult life around the American South.\n\nAfter graduating from Tougaloo College, Moody became a full-time worker in the civil rights movement, participating in a variety of different protests such as marches and a sit-ins. Moody participated in a sit-in at a Woolworth's lunch counter in Jackson and a mob attacked her. She was also arrested in Jackson, Mississippi for attempting to protest inside of a post office with 13 other protesters, including Joan Trumpauer, Doris Erskine, Jeanette King, and Lois Chaffee.\n\nShortly after this, Anne Moody went quietly moved to New York and wrote her autobiography, "Coming of Age in Mississippi".`,
        link: 'https://en.wikipedia.org/wiki/Anne_Moody',
        infoSrc: 'https://en.wikipedia.org/wiki/Anne_Moody'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'September 16th, 1973',
        title: 'Víctor Jara (1932 - 1973)',
        imgSrc: require('./assets/eventPhotos/Individuals/victorJara.jpg'),
        description: `Víctor Lidio Jara Martínez was a Chilean teacher, theater director, poet, singer-songwriter and communist political activist. He developed Chilean theater by directing a broad array of works, ranging from locally produced plays to world classics, as well as the experimental work of playwrights such as Ann Jellicoe. He also played a pivotal role among neo-folkloric musicians who established the Nueva Canción Chilena (New Chilean Song) movement. This led to an uprising of new sounds in popular music during the administration of President Salvador Allende.\n\nJust a few days after the coup that ousted Allende from power, Jara was arrested, tortured, and killed by the dictatorship of Augusto Pincochet. Jara is one of many "desaparecidos", people who vanished under the Pinochet government and were most likely tortured and killed. Thirty-six years after his first burial, he received a full funeral on 3 December 2009 in Santiago.`,
        link: 'https://en.wikipedia.org/wiki/Nueva_Canci%C3%B3n_Chilena',
        infoSrc: 'https://en.wikipedia.org/wiki/V%C3%ADctor_Jara'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'September 17th, 2011',
        title: 'Occupy Wall Street (2011)',
        imgSrc: require('./assets/eventPhotos/Events/occupyWallStreet.jpg'),
        description: `Occupy Wall Street (OWS) was a protest movement against economic inequality that began on this day in Zuccotti Park, located in New York City's Wall Street financial district, in 2011. It gave rise to the wider Occupy movement in the United States and other countries.\n\n The OWS slogan, "We are the 99%", refers to income and wealth inequality in the U.S. between the wealthiest 1% and the rest of the population. To achieve their goals, protesters acted on consensus-based decisions made in general assemblies which emphasized redress through direct action.`,
        link: 'https://www.rferl.org/a/what_does_the_occupy_wall_street_movement_want/24356295.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Occupy_Wall_Street'
      },
      {
        category: 'Rebellion',
        date: 'September 17th, 1849',
        title: 'Harriet Tubman Escapes (1849)',
        imgSrc: require('./assets/eventPhotos/Individuals/harrietTubman.jpg'),
        description: `Harriet Tubman (1822 – 1913) was an American abolitionist and political activist. On this day in 1849, she escaped from slavery and subsequently made some 13 missions to rescue approximately 70 enslaved people, including family and friends, using the network of antislavery activists and safe houses known as the Underground Railroad.\n\nDuring the American Civil War, she served as an armed scout and spy for the Union Army. In her later years, Tubman was an activist in the struggle for women's suffrage. She was friends with both John Brown and Frederick Douglass, and was a renowned for her heroism in her lifetime.`,
        link: 'https://www.womenshistory.org/education-resources/biographies/harriet-tubman',
        infoSrc: 'https://en.wikipedia.org/wiki/Harriet_Tubman'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 18th, 1956',
        title: 'Chris Hedges (1956 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/chrisHedges.jpg'),
        description: `Christopher Lynn Hedges is an American journalist, Presbyterian minister, and visiting Princeton University lecturer. His books include "War Is a Force That Gives Us Meaning" (2002), "Empire of Illusion: The End of Literacy and the Triumph of Spectacle, Death of the Liberal Class" (2010), "Days of Destruction, Days of Revolt (2012)", "Wages of Rebellion: The Moral Imperative of Revolt" (2015), and, most recently, "America: The Farewell Tour (2018)".\n\nHedges was an early critic of the Iraq War. In May 2003, he delivered a commencement address at Rockford College in Rockford, Illinois, saying: "We are embarking on an occupation that, if history is any guide, will be as damaging to our souls as it will be to our prestige and power and security." His speech was received with boos and his microphone was shut off three minutes after he began speaking. The New York Times, his employer, criticized his statements and issued him a formal reprimand for "public remarks that could undermine public trust in the paper's impartiality". Shortly after the incident, Hedges left The New York Times to become a senior fellow at The Nation Institute, and a columnist at Truthdig, in addition to writing books and teaching inmates at a New Jersey correctional institution.\n\nHedges has taught college credit courses for several years in New Jersey prisons. He teaches a course through Princeton University in which the class is composed of half prisoners and half Princeton undergraduates. He has described himself as a socialist identifying with Catholic activist Dorothy Day in particular.`,
        link: 'https://en.wikipedia.org/wiki/Chris_Hedges',
        infoSrc: 'https://en.wikipedia.org/wiki/Chris_Hedges'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'September 18th, 1918',
        title: 'Eugene V. Debs Sentencing (1918)',
        imgSrc: require('./assets/eventPhotos/Events/debsStatement.jpg'),
        description: `Eugene V. Debs was a prominent labor organizer and socialist politician in early twentieth century America. His speeches critical of the Woodrow Wilson administration and the war earned the enmity of President Woodrow Wilson, who later called Debs a "traitor to his country". On June 16, 1918, Debs made a speech in Canton, Ohio urging resistance to the military draft of World War I. He was arrested on June 30 and charged with ten counts of sedition.\n\nHe was found guilty on September 12th. At his sentencing hearing on the 18th, Debs gave a speech to the court that is now a classic of socialist literature. Here is a short excerpt:\n\n"Your Honor, years ago I recognized my kinship with all living beings, and I made up my mind that I was not one bit better than the meanest on earth. I said then, and I say now, that while there is a lower class, I am in it, and while there is a criminal element I am of it, and while there is a soul in prison, I am not free."`,
        link: 'https://en.wikipedia.org/wiki/Eugene_V._Debs',
        infoSrc: 'https://www.marxists.org/archive/debs/works/1918/court.htm'
      },
    ],
  },
  '9-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 20th, 1878',
        title: 'Upton Sinclair (1878 - 1968)',
        imgSrc: require('./assets/eventPhotos/Individuals/uptonSinclair.jpg'),
        description: `Upton Beall Sinclair Jr. was an American writer who wrote nearly 100 books and other works in several genres. Sinclair was an outspoken socialist, and his books are particularly notable for depicting the scandalous working conditions of the laboring class, particularly in the book "The Jungle".\n\nSinclair was inspired to write "The Jungle" after spending six months researching the Chicago meatpacking industry. His descriptions of the unsanitary and inhumane conditions that workers suffered served to shock and galvanize readers. Jack London called Sinclair's book "the Uncle Tom's Cabin of wage slavery", and it caused the domestic and foreign purchases of American meat fell by half, leading to federal regulation of the meat industry.\n\nIt is worth noting that Sinclair was a racist. With the income from "The Jungle", he founded the utopian community Helicon Home Colony in Englewood, New Jersey, which excluded black and Jewish people. The colony burned down under suspicious circumstances within a year.\n\nIn the 1920s, Sinclair moved to Monrovia, California (near Los Angeles), where he founded the state's chapter of the American Civil Liberties Union. In 1934, Sinclair ran in the California gubernatorial election as a Democrat. Sinclair's platform, known as the End Poverty in California movement (EPIC), galvanized the support of the Democratic Party. Sinclair gained its nomination, but was defeated by the incumbent Frank Merriam.`,
        link: 'https://en.wikipedia.org/wiki/Upton_Sinclair',
        infoSrc: 'https://en.wikipedia.org/wiki/Upton_Sinclair'
      },
      {
        category: 'Birthdays',
        date: 'September 20th, 1758',
        title: 'Jean-Jacques Dessalines (1758 - 1806)',
        imgSrc: require('./assets/eventPhotos/Individuals/jacquesDessalines.jpg'),
        description: `Jean-Jacques Dessalines was a leader of the Haitian Revolution and the first ruler of an independent Haiti under the 1805 constitution. Under Dessalines, Haiti became the first country in the Americas to permanently abolish slavery.\n\nThe Haitian Revolution was the only slave uprising that led to the founding of a state which was both free from slavery and ruled by non-whites and former captives. Initially regarded as governor-general, Dessalines was later named Emperor of Haiti as Jacques I (1804–1806) by the generals of the Haitian Revolution Army. He is regarded as one of the founding fathers of Haiti.\n\nAs the slave rebellions developed into a revolutionary movement, he served as principal lieutenant to the movement's leader, Toussaint Louverture, helping lead the Haitian armies to many victories in battle over the French.\n\nAfter Louverture's betrayal and death, Dessalines became the leader of the Haitian Revolution in 1802, eventually leading the colony to its independence. In 1804, he ordered mass killings of all the French remaining on the island, leading to the deaths of 3000-5000 French people of all ages and sexes.\n\nAfter achieving freedom from France, Dessalines imposed a strict regimen of labor on the Haitian population, leading to widespread resentment of his rule. Eventually, he was assassinated by his own people in 1806, leading to civil war on the island.`,
        link: 'https://en.wikipedia.org/wiki/Haitian_Revolution',
        infoSrc: 'https://en.wikipedia.org/wiki/Jean-Jacques_Dessalines'
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'September 20th, 1972',
        title: 'Richard Oakes (1942 - 1972)',
        imgSrc: require('./assets/eventPhotos/Individuals/richardOakes.jpg'),
        description: `Richard Oakes was a Mohawk Native American activist. He spurred Native American studies in university curricula and is credited for helping to change US federal government Termination policies of Native American peoples and culture. Oakes led a 19-month occupation of Alcatraz Island with LaNada Means, approximately 50 California State University students, and 37 others.\n\nOn this day in 1972, Oakes was shot and killed in Sonoma, California, by Michael Morgan, a YMCA camp manager. Oakes allegedly violently confronted him, and Morgan responded by drawing a handgun and fatally shooting Oakes. Oakes was unarmed when he was shot. Morgan claimed he acted in self-defense and was acquitted on charges of voluntary manslaughter.`,
        link: 'https://www.npr.org/sections/thetwo-way/2017/05/22/529504340/richard-oakes-who-occupied-alcatraz-for-native-rights-gets-a-birthday-honor',
        infoSrc: 'https://en.wikipedia.org/wiki/Richard_Oakes_(activist)'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 21st, 1909',
        title: 'Kwame Nkrumah (1909 - 1972)',
        imgSrc: require('./assets/eventPhotos/Individuals/kwameNkrumah.jpg'),
        description: `Kwame Nkrumah was a Ghanaian politician and revolutionary. He was the first Prime Minister and President of Ghana, having led the Gold Coast to independence from Britain in 1957. An influential advocate of pan-Africanism, Nkrumah was a founding member of the Organization of African Unity and winner of the Lenin Peace Prize from the Soviet Union in 1962.\n\nIn 1960, Ghanaians approved a new constitution and elected Nkrumah President. His administration funded national industrial and energy projects, developed a strong national education system and promoted a pan-Africanist culture. Under Nkrumah, Ghana played a leading role in African international relations during the decolonization period.\n\nIn 1964, a constitutional amendment made Ghana a one-party state, with Nkrumah as president for life of both the nation and its party. Nkrumah was deposed in 1966 by the National Liberation Council which under the supervision of international financial institutions privatized many of the country's state corporations. John Stockwell, a former CIA agent, wrote that the CIA was intimately involved in the coup that ousted him from power.\n\nNkrumah lived the rest of his life in Guinea, of which he was named honorary co-president.`,
        link: 'https://www.jstor.org/stable/2934320',
        infoSrc: 'https://en.wikipedia.org/wiki/Kwame_Nkrumah'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 22nd, 1928',
        title: 'James Lawson (1928 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/jamesLawson.jpg'),
        description: `James Morris Lawson, Jr. (born on this day in 1928) is an American activist and university professor. He was a leading theoretician and tactician of nonviolence within the Civil Rights Movement. During the 1960s, he served as a mentor to the Nashville Student Movement and the Student Nonviolent Coordinating Committee.\n\nLawson was expelled from Vanderbilt University for his role in organizing the Nashville Sit-ins in 1960. He later served as a pastor in Los Angeles, California, for 25 years.`,
        link: 'http://repository.wustl.edu/concern/videos/mp48sf472',
        infoSrc: 'https://en.wikipedia.org/wiki/James_Lawson_(activist)'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'September 28th, 1864',
        title: 'First International Founded (1864)',
        imgSrc: require('./assets/eventPhotos/Organizations/firstInternational.png'),
        description: `The International Workingmen's Association (IWA), often called the First International, was an international organisation which aimed at uniting a variety of different left-wing ideologies and trade unions that were based on the working class and class struggle. It was founded in 1864 in a workmen's meeting held in St. Martin's Hall, London.\n\nNotable members of the IWA included Pierre-Joseph Proudhon, Wilhelm Liebknecht, Louis Auguste Blanqui, Karl Marx, and Mikhail Bakunin. The organization was polarized on the issue of state power (followers of Bakunin and Proudhon categorically opposed state power and considered Marx's ideas inherently authoritarian), and split on this basis after its Fifth Congress in 1872.`,
        link: 'https://www.marxists.org/archive/steklov/history-first-international/index.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/International_Workingmen%27s_Association'
      },
    ],
  },
  '9-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '9-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'September 30th, 1933*',
        title: 'Michael Parenti (1933 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/michaelParenti.jpg'),
        description: `*This exact day of birth is still unconfirmed\n\nMichael John Parenti (born 1933) is an American political scientist and cultural critic. He has taught at American and international universities and has been a guest lecturer before campus and community audiences.\n\nParenti is particularly notable for his scholarly work "Blackshirts & Reds: Rational Fascism and the Overthrow of Communism", which details political and living conditions in the Soviet Bloc, and "To Kill a Nation: The Attack on Yugoslavia", which vehemently condemned the NATO bombing of the country.`,
        link: 'http://www.michaelparenti.org/',
        infoSrc: 'https://en.wikipedia.org/wiki/Michael_Parenti'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'October 2nd, 1968',
        title: 'Tlatelolco Massacre (1968)',
        imgSrc: require('./assets/eventPhotos/Events/tlatelolcoMassacre.jpg'),
        description: `On this day in 1968, around 10,000 university and high school students gathered in the Plaza de las Tres Culturas to protest the government's actions and listen peacefully to speeches. The crowd, which also included non-students such as residential neighbors, bystanders, and children, was fired upon by the Mexican military that evening.\n\nAlthough the Mexican government said gunfire from the surrounding apartments prompted the army's attack, multiple eyewitness accounts claim they saw a military flare go up as a sign to begin firing on the crowd. The government also had hidden soldiers with machine guns in the apartment buildings they claimed they were fired upon from.\n\nEstimates of the total killed range from 300-400, and over 1,300 people were arrested. The event radicalized Subcomandante Marcos, who later became a prominent member of the Zapatistas, an indigenous group that seeks liberation from the Mexican government.`,
        link: 'https://www.npr.org/templates/story/story.php?storyId=97546687',
        infoSrc: 'https://en.wikipedia.org/wiki/Tlatelolco_massacre'
      },
    ],
  },
  '10-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'October 4th, 1984',
        title: 'Sankara U.N. Speech (1984)',
        imgSrc: require('./assets/eventPhotos/Events/sankaraSpeech.jpg'),
        description: `Thomas Sankara (1949 – 1987) was a militant social justice campaigner and President of Burkina Faso from 1983 to 1987. A Marxist–Leninist and pan-Africanist, he was viewed by supporters as a charismatic and iconic figure of revolution and is sometimes referred to as "Africa's Che Guevara".\n\nOn this day in 1984, he gave a notable speech at the United Stations. Sankara had been in power for just over a year by this point. Here is an excerpt from the speech where he expresses international solidarity with oppressed peoples all over the world:\n\n"Let me say to those who are listening to me now that I speak not only on behalf of Burkina Faso, my country which I love so much, but also on behalf of all those who suffer, wherever they may be.\n\nI speak on behalf of those millions of human beings who are in ghettos because their skin is black, or because they have a different kind of culture, those whose status is hardly higher than that of an animal.\n\nI suffer, too, on behalf of those Indians who have been massacred, trampled on and humiliated and who, for centuries, have been confined to reservations, so that they do not have any aspirations to any rights whatsoever, so that their culture cannot become enriched through contact with other cultures, including that of the invader.\n\nI speak out on behalf of those who are unemployed because of a structurally unjust system which has now been completely disrupted, the unemployed who have been reduced to seeing their lives as only the reflection of the lives of those who have more than themselves.\n\nI speak on behalf of women throughout the entire world who suffer from a system of exploitation imposed on them by men".`,
        link: 'https://en.wikipedia.org/wiki/Thomas_Sankara',
        infoSrc: 'https://www.marxists.org/archive/sankara/1984/october/04.htm'
      },
    ],
  },
  '10-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'October 5th, 1813',
        title: 'Battle of the Thames (1813)',
        imgSrc: require('./assets/eventPhotos/Events/battleThames.png'),
        description: `Tecumseh (1768 – 1813) was a Native American Shawnee warrior and chief who became the primary leader of a large, multi-tribal confederacy in the early 19th century. Growing up during the American Revolutionary War and the Northwest Indian War, Tecumseh was exposed to warfare and envisioned the establishment of an independent Native American nation east of the Mississippi River under British protection, and established a confederacy of tribes to fight off colonization efforts.\n\nOn this day in 1813, Tecumseh and his second in command Roundhead were killed in The Battle of the Thames, fought as part of the War of 1812 between America and Tecumseh's Confederacy and British allies. Tecumseh's death resulted in the dissoluion of his tribal alliances, and many Native Americans began to move West, across the Mississippi River.`,
        link: 'https://en.wikipedia.org/wiki/Tecumseh',
        infoSrc: 'https://en.wikipedia.org/wiki/Battle_of_the_Thames'
      },
    ],
  },
  '10-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'October 6th, 1917',
        title: 'Fannie Lou Hamer (1917 - 1977)',
        imgSrc: require('./assets/eventPhotos/Individuals/fannieLouHamer.jpg'),
        description: `Fannie Lou Hamer was an American voting and women's rights activist, community organizer, and a leader in the civil rights movement. She was the co-founder and vice-chair of the Freedom Democratic Party, which she represented at the 1964 Democratic National Convention. She was also a co-founder of the National Women's Political Caucus, an organization created to recruit, train, and support women of all races who wish to seek election to government office.\n\nWhile having surgery in 1961 to remove a tumor, 44-year-old Hamer was also given a hysterectomy without consent by a white doctor; this was a frequent occurrence under Mississippi's compulsory sterilization plan to reduce the number of poor blacks in the state. Hamer is credited with coining the phrase "Mississippi appendectomy" as a euphemism for the involuntary or uninformed sterilization of black women, common in the South in the 1960s.\n\nHamer was extorted, threatened, harassed, shot at, and assaulted by white supremacists and police while trying to register for and exercise her right to vote. She later helped and encouraged thousands of African-Americans in Mississippi to become registered voters, and helped hundreds of disenfranchised people in her area through her work in programs like the Freedom Farm Cooperative, which she formed to subvert state oppression of black people in the agricultural industry.`,
        link: 'https://en.wikipedia.org/wiki/Fannie_Lou_Hamer',
        infoSrc: 'https://en.wikipedia.org/wiki/Fannie_Lou_Hamer'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'October 7th, 2019',
        title: 'Chilean Protests and Strikes (2019-20)',
        imgSrc: require('./assets/eventPhotos/Events/chileProtests.jpg'),
        description: `On this day in 2019, protests and riots began throughout Chile in response to a raise in the Santiago Metro's subway fare, the increased cost of living, privatisation and inequality prevalent in the country. The protests have been considered the "worst civil unrest" having occurred in Chile since the end of Augusto Pinochet's military dictatorship due to the scale of damage to public infrastructure, the number of protesters, and the measures taken by the government.\n\nOn the 25th of October, over a million people took to the streets throughout Chile to protest against President Piñera, demanding his resignation. As of December 29th, 2019, 29 people have died, nearly 2,500 have been injured, and 2,840 have been arrested. Human rights organisations have received several reports of violations conducted against protesters by security forces, including torture, sexual abuse and sexual assault.`,
        link: 'https://en.wikipedia.org/wiki/2019%E2%80%932020_Chilean_protests',
        infoSrc: 'https://en.wikipedia.org/wiki/2019%E2%80%932020_Chilean_protests'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'October 7th, 1967',
        title: 'Michelle Alexander (1967 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/michelleAlexander.jpg'),
        description: `Michelle Alexander is a writer, civil rights advocate, and visiting professor at Union Theological Seminary. She is best known for her 2010 book "The New Jim Crow: Mass Incarceration in the Age of Colorblindness" and is an opinion columnist for The New York Times.\n\nIn "The New Jim Crow", Alexander describes how oppressed minorities are "subject to legalized discrimination in employment, housing, public benefits, and jury service, just as their parents, grandparents, and great-grandparents once were". Alexander makes a compelling case for how "people whose only crime is drug addiction or possession of a small amount of drugs for recreational use" find themselves permanently locked out of the mainstream society, as well as the racial biases of how the drug war has been waged.`,
        link: 'https://www.americanswhotellthetruth.org/portraits/michelle-alexander',
        infoSrc: 'https://en.wikipedia.org/wiki/Michelle_Alexander'
      },
      {
        category: 'Birthdays',
        date: 'October 7th, 1931',
        title: 'Desmond Tutu (1931 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/desmondTutu.jpg'),
        description: `Desmond Mpilo Tutu, born on this day in 1931, is a South African Anglican cleric and theologian known for his work as an anti-apartheid and human rights activist.\n\nHe was the Bishop of Johannesburg from 1985 to 1986 and then the Archbishop of Cape Town from 1986 to 1996, in both cases being the first black African to hold the position. Theologically, he sought to fuse ideas from black theology with African theology.`,
        link: 'https://www.pbs.org/wgbh/pages/frontline/shows/mandela/interviews/tutu.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Desmond_Tutu'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'October 10th, 2013',
        title: 'SRA Founded (2013)',
        imgSrc: require('./assets/eventPhotos/Organizations/SRA.png'),
        description: `The Socialist Rifle Association (SRA) is an American socialist firearm organization that is dedicated to "providing working class people the information they need to be effectively armed for self and community defense".\n\nThe SRA describes the mission of their organization as "to provide an alternate to the mainstream, toxic, right-wing, and non-inclusive gun culture that has dominated the firearms community for decades. We seek to provide a safe, inclusive, and left-leaning platform for talking about gun rights and self defense, free from racist and reactionary prejudices, while providing a platform for the working class to obtain the skills necessary for all aspects of community defense".`,
        link: 'https://socialistra.org/',
        infoSrc: 'https://en.wikipedia.org/wiki/Socialist_Rifle_Association'
      },
    ],
  },
  '10-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'October 12th, 1898',
        title: 'The Battle of Virden (1898)',
        imgSrc: require('./assets/eventPhotos/Events/battleOfVirden.jpg'),
        description: `The Battle of Virden, also known as the Virden Massacre, was a labor union conflict in central Illinois that occurred on October 12, 1898. After a local chapter of the United Mine Workers of America began striking at a mine in Virden, Illinois, the Chicago-Virden Coal Company hired black strikebreakers from Birmingham, Alabama and shipped them to Virden by train.\n\nThe company hired armed detectives or security guards to accompany the strikebreakers. An armed conflict broke out when armed miners surrounded the train as it arrived in town. The detectives shot first, but strikers the were also armed. A total of four detectives and seven striking mine workers were killed, with five guards, thirty miners, and an unrecorded number of strikebreakers wounded.\n\nAfter this incident, Illinois Governor John Tanner ordered the national guard to prevent any more strikebreakers from coming into the state by force. The next month, the Chicago-Virden Coal Company relented and allowed the unionization of its workers.`,
        link: 'https://en.wikipedia.org/wiki/Battle_of_Virden',
        infoSrc: 'https://en.wikipedia.org/wiki/Battle_of_Virden'
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'October 14th, 1906',
        title: 'Hannah Arendt (1906 - 1975)',
        imgSrc: require('./assets/eventPhotos/Individuals/hannahArendt.jpg'),
        description: `Johanna "Hannah" Cohn Arendt was a German-American philosopher and political theorist. Her many books and articles on topics ranging from totalitarianism to epistemology have had a lasting influence on political theory. She is widely considered one of the most important political philosophers of the twentieth century.\n\nHer works cover a broad range of topics, but is perhaps best known for those dealing with the nature of power and evil, politics, direct democracy, authority, and totalitarianism. Arendt coined the phrase "banality of evil" when attempting to explain how ordinary people become actors in totalitiarian systems in her work "Eichmann in Jerusalem: A Report on the Banality of Evil".`,
        link: 'http://www.openculture.com/2013/07/hannah-arendt-1964-tv-interview.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Hannah_Arendt'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'October 15th, 1987',
        title: 'Thomas Sankara (1949 - 1987)',
        imgSrc: require('./assets/eventPhotos/Individuals/thomasSankara.jpg'),
        description: `Thomas Sankara was a Burkinabé revolutionary and President of Burkina Faso from 1983 to 1987. A Marxist–Leninist and pan-Africanist, he was viewed by supporters as a charismatic and iconic figure of revolution and is sometimes referred to as "Africa's Che Guevara".\n\nSankara came into power when allies instigated a coup on his behalf in 1983. He immediately launched programmes for social, ecological and economic change and renamed the country from the French colonial name Upper Volta to Burkina Faso ("Land of Incorruptible People"), with its people being called Burkinabé ("upright people").\n\nHis administration was known for refusing all foreign aid to remain politically independent, nationalizing all land and mineral wealth, and promoting literarcy, women's rights, and public health.\n\nOn this day in 1987, Sankara was assassinated by troops led by Blaise Compaoré, who assumed leadership of the state shortly after having Sankara killed. A week before his assassination, Sankara declared: "While revolutionaries as individuals can be murdered, you cannot kill ideas".`,
        link: 'http://www.thomassankara.net/26-years-ago-thomas-sankara-was-assassinated-circumstances-yet-to-be-clarified-but-an-ever-growing-popularity/?lang=en',
        infoSrc: 'https://en.wikipedia.org/wiki/Thomas_Sankara'
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'October 15th, 1966',
        title: 'Black Panther Party Founded (1966)',
        imgSrc: require('./assets/eventPhotos/Events/blackPanthers.jpg'),
        description: `The Black Panther Party (BPP) was a revolutionary socialist political organization founded by Marxist college students Bobby Seale and Huey Newton on this day in 1966, in Oakland, California.\n\nFrom its inception, the Black Panther Party's core practice was its open carry armed citizens' patrols ("copwatching") to monitor the behavior of officers of the Oakland Police Department and challenge police brutality in the city. In 1969, a variety of community social programs became a core activity. The Party instituted the Free Breakfast for Children Programs to address food injustice, and community health clinics for education and treatment of diseases including sickle cell anemia, tuberculosis, and later HIV/AIDS.\n\nThe BPP has had a volatile history, with many of its members, including founder Huey Newton, being involved in fatal conflicts with police, and the organization being targeted for harassment and violence as part of the FBI's COINTEL program.`,
        link: 'https://www.jacobinmag.com/2016/10/black-panther-party-fifty-year-anniversary-founding',
        infoSrc: 'https://en.wikipedia.org/wiki/Black_Panther_Party'
      },
    ],
  },
  '10-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'October 16th, 1859',
        title: "Raid on Harper's Ferry (1859)",
        imgSrc: require('./assets/eventPhotos/Events/harpersFerry.jpg'),
        description: `John Brown's raid on Harpers Ferry was an effort by abolitionist John Brown, from October 16 to 18, 1859, to initiate a slave revolt in Southern states by taking over a United States arsenal at Harpers Ferry, Virginia and arming slaves with the weapons there.\n\nBrown's raid was defeated by a company of U.S. Marines. He was convicted of treason and hanged on December 2nd, 1859. Later, president of the Confederacy Jefferson Davis cited the attack as grounds for Southerners to leave the Union, "even if it rushes us into a sea of blood".`,
        link: 'https://en.wikipedia.org/wiki/John_Brown%27s_raid_on_Harpers_Ferry',
        infoSrc: 'https://en.wikipedia.org/wiki/John_Brown%27s_raid_on_Harpers_Ferry'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'October 16th, 1854',
        title: 'Karl Kautsky (1854 - 1938)',
        imgSrc: require('./assets/eventPhotos/Individuals/karlKautsky.jpg'),
        description: `Karl Johann Kautsky was a Czech-Austrian philosopher, journalist, and Marxist theoretician. Kautsky was one of the most authoritative promulgators of Orthodox Marxism after the death of Friedrich Engels in 1895 until the outbreak of World War I in 1914. He was one of the most important socialist theorists during the years of the Second International.\n\nHe founded the an important socialist journal, Neue Zeit. Following the war, Kautsky was an outspoken critic of the Bolshevik Revolution, engaging in polemics with Vladimir Lenin, Leon Trotsky, and Joseph Stalin on the nature of the Soviet state. Towards the end of his life, he became close friends with Rosa Luxemburg.\n\nOf the USSR, he famously wrote "Foreign tourists in Russia stand in silent amazement before the gigantic enterprises created there, as they stand before the pyramids, for example. Only seldom does the thought occur to them what enslavement, what lowering of human self-esteem was connected with the construction of those gigantic establishments."`,
        link: 'https://en.wikipedia.org/wiki/Karl_Kautsky',
        infoSrc: 'https://en.wikipedia.org/wiki/Karl_Kautsky'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'October 19th, 1983',
        title: 'Maurice Bishop (1944 - 1983)',
        imgSrc: require('./assets/eventPhotos/Individuals/mauriceBishop.jpg'),
        description: `Maurice Rupert Bishop was a Grenadian revolutionary and the leader of New Jewel Movement – popular efforts in the areas of socio-economic development, education, and black liberation. Bishop headed the People's Revolutionary Government of Grenada from 1979 to 1983, when he was dismissed from his post and shot in a coup, leading to civil unrest and a US invasion of the country.\n\nAlthough Bishop grew up in Grenada, he left to study in London as a young adult. While there, Bishop acquired a law degree and studied the works of Lenin, Mao Zedong, and Julius Nyerere.\n\nIn 1970, he returned to Grenada and was active politically, representing striking nurses in court and leading the "New Jewel Movement", which ultimately put him in power. In 1979, the New Jewel Movement successfully led a coup against Eric Gairy and made Bishop the Prime Minister of Grenada.\n\nAmong Bishop's core principles were workers' rights, women's rights, and the struggle against racism and apartheid. Women were given equal pay and paid maternity leave, and sex discrimination was made illegal. Organisations for education, health care, youth affairs, and literacy were also established. Due to his efforts, illiteracy and unemployment greatly declined.\n\nIn 1983, disputes within the party culminated in Bishop, along with seven members of his cabinet, being captured and executed. After his assassination, the Organization of Eastern Caribbean States (OECS) and Grenada's governor-general Paul Scoon appealed to the United States for help. Within the month, Ronald Reagan launched an invasion of Grenada.`,
        link: 'https://www.zinnedproject.org/news/tdih/grenada-revolution/',
        infoSrc: 'https://en.wikipedia.org/wiki/Maurice_Bishop'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-22': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'October 22nd, 1935',
        title: 'Long March Ends (1935)',
        imgSrc: require('./assets/eventPhotos/Events/longMarch.jpg'),
        description: `The Long March was a famous military retreat undertaken by the Red Army of the Communist Party of China that lasted 370 days, ending on this day in 1935 in Shaanxi Province. The Long March was an incredibly arduous journey - estimates are that the journey took around 6000 miles, and only 8,000 of the original 100,000 soldiers who began the march arrived in Shaanxi.\n\nThe Long March was also notable because it resulted in the leadership of Mao Zedong of the CCP, and the event galvanized popular support the communist movement. From their base in Shannxi Province, the revolutionary army went on to defeat nationalist forces, after the conclusion of World War II.`,
        link: 'https://www.britannica.com/event/Long-March',
        infoSrc: 'https://en.wikipedia.org/wiki/Long_March'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'October 22, 1936',
        title: 'Bobby Seale (1936 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/bobbySeale.jpg'),
        description: `Robert George Seale is an American political activist. He and fellow activist Huey P. Newton co-founded the Black Panther Party.\n\nBobby Seale and Huey P. Newton were heavily inspired by the teachings of activist Malcolm X, who was assassinated in 1965. The two joined together in October 1966 to create the Black Panther Party for Self-Defense, which adopted the late activist's slogan "freedom by any means necessary" as their own.\n\nSeale and Newton founded the group to organize the black community and express their desires and needs in order to resist the racism and classism perpetuated by the system. Seale described the Panthers as "an organization that represents black people and many white radicals relate to this and understand that the Black Panther Party is a righteous revolutionary front against this racist decadent, capitalistic system."`,
        link: 'https://en.wikipedia.org/wiki/Bobby_Seale',
        infoSrc: 'https://en.wikipedia.org/wiki/Bobby_Seale'
      },
      {
        category: 'Birthdays',
        date: 'October 22nd, 1887',
        title: 'Jack Reed (1887 - 1920)',
        imgSrc: require('./assets/eventPhotos/Individuals/jackReed.jpg'),
        description: `John "Jack" Silas Reed (October 22, 1887 – October 17, 1920) was an American journalist, poet, and communist activist. Reed first gained prominence as a war correspondent during the first World War, and later became best known for his coverage of the October Revolution in Petrograd, Russia, which he wrote about in his book Ten Days That Shook the World.\n\nAs the U.S. entered World War I, Reed was marginalized for his anti-war sentiments and set sail with his partner Bryant from New York to Europe. The pair were going as working journalists to report on the sensational developments taking place in the fledgling republic of Russia. They were in Petrograd for the October Revolution. Reed was an enthusiastic supporter of the new revolutionary socialist government, and met both Leon Trotsky and Lenin while there.\n\nHe made a trip back to America, where he vehemently defended the new Soviet Republic and was arrested three times, the last for violating the Sedition Act. After being acquitted, Reed returned to the USSR and met again with Lenin and Trotsky. He died from spotted typhus while trying to return to the United States in 1920.`,
        link: 'https://en.wikipedia.org/wiki/John_Reed_(journalist)',
        infoSrc: 'https://en.wikipedia.org/wiki/John_Reed_(journalist)'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-25': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'October 25th, 1917',
        title: 'October Revolution (1917)',
        imgSrc: require('./assets/eventPhotos/Events/octoberRevolution.jpg'),
        description: `The October Revolution, also known as the Bolshevik Revolution, began on this day in Russia, in 1917. Led by the Bolshevik Party of Vladimir Lenin, the revolution took place through an armed insurrection in Petrograd and was instrumental in the larger Russian Revolution of 1917–1923. The following day, the Winter Palace (the seat of the Provisional government located in Petrograd, then capitol of Russia) was captured.\n\nLong-awaited elections were held on November 12th. In contrast to their majority in the Soviets (local council governments), the Bolsheviks only won 175 seats in the 715-seat legislative body, coming in second behind the Socialist Revolutionary Party, which won 370 seats. On its first and only day in session, the Constituent Assembly came into conflict with the Soviets, and it rejected Soviet decrees on peace and land, resulting in the Constituent Assembly being dissolved by the Bolsheviks in January.\n\nThe political situation devolved into a civil war between the Bolsheviks, the Whites (counter-revolutionaries), Makhnovists, independence movements, and other socialist factions. Eventually, the Bolsheviks defeated all rival parties militarily and formed the Union of Soviet Socialist Republics (USSR) in 1922.`,
        link: 'https://en.wikipedia.org/wiki/Russian_Revolution',
        infoSrc: 'https://en.wikipedia.org/wiki/October_Revolution'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '10-31': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-3': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'November 3rd, 1970',
        title: 'Allende Assumes Office (1970)',
        imgSrc: require('./assets/eventPhotos/Individuals/salvadorAllende.jpg'),
        description: `Salvador Allende was a Chilean socialist politician and physician, President of Chile from 1970 until 1973, and head of the Popular Unity political coalition government; on this day in 1970, he was Latin America's first ever Marxist to become the elected leader of a liberal democracy.\n\nAs president, Allende sought to nationalize major industries, expand education and improve the living standards of the working class. Specific examples of his policies include giving educational grants to indigenous children, literacy programs in impovershied areas, and establishing a minimum wage for workers of all ages.\n\nOn 11 September 1973, the military moved to oust Allende in a coup d'état assisted by the Henry Kissinger and the CIA. As troops surrounded La Moneda Palace, he gave his last speech vowing not to resign. Later that day, Allende died of suicide with a gun, according to an investigation conducted by a Chilean court with the assistance of international experts in 2011.\n\nFollowing Allende's death, General Augusto Pinochet refused to return authority to a civilian government, and Chile was later ruled by a military junta that was in power up until 1990. This junta dissolved the Congress of Chile, suspended the Constitution, and began a persecution of alleged dissidents, in which at least 3,095 civilians disappeared or were killed.`,
        link: 'https://jacobinmag.com/2019/09/salvador-allende-chile-revolucion-democratica-frente-amplio',
        infoSrc: 'https://en.wikipedia.org/wiki/Salvador_Allende'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: 'Labor',
        date: 'November 5th, 1916',
        title: 'The Everett Massacre (1916)',
        imgSrc: require('./assets/eventPhotos/Events/everettMassacre.jpg'),
        description: `The Everett Massacre (also known as Bloody Sunday) was an armed confrontation in Everett, Washington between local authorities and members of the Industrial Workers of the World (IWW) union.\n\nThe Seattle IWW sent three hundred of its members up to Everett to demonstrate in solidarity with striking shingle workers there. Upon arriving at the dock, however, they were greeted by Snohomish County Sheriff McRae and two hundred "citizen deputies", who refused to let them land.\n\nGunfire was exchanged, and at least seven people were killed and forty-three were wounded. Despite this violence, striking workers in Everett continued with their planned demonstration, and were promptly taken to jail by McRae.`,
        link: 'https://depts.washington.edu/iww/everett_intro.shtml',
        infoSrc: 'https://en.wikipedia.org/wiki/Everett_massacre'
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 5th, 1855',
        title: 'Eugene V. Debs (1855 - 1926)',
        imgSrc: require('./assets/eventPhotos/Individuals/eugeneDebs.jpg'),
        description: `Eugene Victor Debs was an American socialist, political activist, trade unionist, one of the founding members of the Industrial Workers of the World (IWW) and five times the candidate of the Socialist Party of America for President of the United States. Through his presidential candidacies as well as his work with labor movements, Debs eventually became one of the best-known socialists living in the United States.\n\nWhile in prison for leading the Pullman Strike, Debs read various works of socialist theory and emerged six months later as a committed adherent of the international socialist movement. Debs was a founding member of the Social Democracy of America (1897), the Social Democratic Party of America (1898) and the Socialist Party of America (1901). Debs ran as a Socialist candidate for President of the United States five times, including 1900 (earning 0.6% of the popular vote), 1904 (3.0%), 1908 (2.8%), 1912 (6.0%) and 1920 (3.4%), the last time from a prison cell. He was also a candidate for United States Congress from his native state Indiana in 1916.\n\nDebs was noted for his oratory, and his speech denouncing American participation in World War I led to his second arrest in 1918. He was convicted under the Sedition Act of 1918 and sentenced to a term of 10 years. In his speech to the court, he provided one of his most well-known quotes: \n\n"Your Honor, years ago I recognized my kinship with all living beings, and I made up my mind that I was not one bit better than the meanest on earth. I said then, and I say now, that while there is a lower class, I am in it, and while there is a criminal element, I am of it, and while there is a soul in prison, I am not free."`,
        link: 'https://en.wikipedia.org/wiki/Eugene_V._Debs',
        infoSrc: 'https://en.wikipedia.org/wiki/Eugene_V._Debs'
      },
      {
        category: 'Birthdays',
        date: 'November 5th, 1940',
        title: 'Cedric Robinson (1940 - 2016)',
        imgSrc: require('./assets/eventPhotos/Individuals/cedricRobinson.jpg'),
        description: `Cedric Robinson was a professor in the Department of Black Studies and the Department of Political Science at the University of California, Santa Barbara (UCSB). Robinson's areas of interest included political philosophy, radical social theory in the African diaspora, comparative politics, and the relationships between and among media and politics.\n\nIn his work "Black Marxism: The Making of the Black Radical Tradition", Robinson makes the argument that analysing black history solely through a Marxist lens is incomplete, and that to understand black radicalism, one must include African traditions and the unique experiences of black people in Western nations.`,
        link: 'https://uncpress.org/book/9780807848296/black-marxism/',
        infoSrc: 'https://en.wikipedia.org/wiki/Cedric_Robinson'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-7': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'November 7th, 1931',
        title: 'Jiangxi-Fujian Soviet Forms (1931)',
        imgSrc: require('./assets/eventPhotos/Events/jiangxiFujian.jpg'),
        description: `Central Revolutionary Base, commonly called the Jiangxi–Fujian Soviet, was the largest component territory of the Chinese Soviet Republic, an unrecognized state established in November 1931 by Mao Zedong and Zhu De during the Chinese civil war. It served as the county seat and headquarters of the Chinese Soviet government.\n\nOn this day in 1931, with the Soviet Union's help, the "Chinese Soviet Republic" was born, though the majority of China was still under the control of the nationalist Government of the Republic of China. On November 7th, they had an open ceremony for the new country, and Mao Zedong and other Communists attended a military parade. Claiming its own bank, printing its own money, and collecting tax through its own tax bureau, the modern Chinese Communist Party considers this the beginning of Two Chinas.\n\nThe Jiangxi-Fujian base area was defended ably by the First Red Front Armyn but in 1934 it was finally overrun by the Kuomintang government's National Revolutionary Army in the Fifth of its Encirclement Campaigns. This last campaign in 1934-35 precipitated the most famous of the communist army retreats known collectively as the "Long March".`,
        link: 'https://en.wikipedia.org/wiki/Jiangxi%E2%80%93Fujian_Soviet',
        infoSrc: 'https://www.britannica.com/topic/Jiangxi-Soviet'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 7th, 1879',
        title: 'Leon Trotsky (1879 - 1940)',
        imgSrc: require('./assets/eventPhotos/Individuals/leonTrotsky.jpg'),
        description: `Leon Trotsky was a Soviet revolutionary, Marxist theorist and politician whose particular strain of Marxist thought is known as Trotskyism. Key characteristics of Trotskyist thought include the concepts of "Permanent Revolution" and the "United Front" of revolutionaries and reformers against common enemies.\n\nTrotsky joined the Bolshevik Party a few weeks before the October Revolution and immediately became a leader within the party, thus also playing a key role in the October Revolution. Trotsky became more prominent from March 1918 to January 1925 as the leader of the Red Army in the post of Commissar for Military and Naval Affairs. He was also a vital leading figure in the Red victory in the Russian Civil War and one of the seven members of the first Politburo.\n\nAfter the rise of Joseph Stalin, Trotsky was removed from his positions and eventually expelled from the Soviet Union in February 1929. He spent the rest of his life in exile, and was assassinated in 1940 in Mexico City by Ramón Mercader, a Soviet agent.`,
        link: 'https://www.britannica.com/biography/Leon-Trotsky',
        infoSrc: 'https://en.wikipedia.org/wiki/Leon_Trotsky'
      },
      {
        category: 'Birthdays',
        date: 'November 7th, 1888',
        title: 'Nestor Makhno (1888 - 1934)',
        imgSrc: require('./assets/eventPhotos/Individuals/Makhno.jpg'),
        description: `Nestor Ivanovych Makhno was a Ukrainian anarchist revolutionary and the commander of an independent anarchist army in Ukraine from 1917–21. Makhno was the commander of the Revolutionary Insurrectionary Army of Ukraine, commonly referred to as the Makhnovshchina (loosely translated as "Makhno movement"). The Makhnovshchina was a predominantly peasant phenomenon that grew into a mass social movement. It was initially centered around Makhno's hometown Huliaipole but over the course of the Russian Civil War came to exert a strong influence over large areas of southern Ukraine.\n\nMakhno and the movement's leadership were anarcho-communists and attempted to guide the movement along these ideological lines. Makhno was aggressively opposed to all factions that sought to impose their authority over southern Ukraine, battling in succession the forces of the Ukrainian National Republic, the Central Powers of Germany and Austro-Hungary, the Hetmanate state, the White Army, the Bolshevik Red Army, and other smaller forces.\n\nMakhno and his supporters attempted to reorganize social and economic life along anarchist lines, including the establishment of communes on former landed estates, the requisition and egalitarian redistribution of land to the peasants, and the organization of free elections to local soviets (councils) and regional congresses. However, the disruption of the civil war precluded a stable territorial base for any long-term social experiments.\n\nAlthough Makhno considered the Bolsheviks a threat to the development of an anarchist Free Territory within Ukraine, he entered into formal military alliances twice with the Red Army to defeat the White Army. In the aftermath of the White Army's defeat in Crimea in November 1920, the Bolsheviks initiated a military campaign against Makhno. After an extended period of open resistance against the Red Army, Makhno fled across the Romanian border in August 1921.\n\nIn exile, Makhno settled in Paris with his wife Halyna and daughter Yelena. While there, Makhno wrote numerous memoirs and articles for radical newspapers before dying there at the age of 45 from tuberculosis-related causes.`,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'November 7th, 1637',
        title: 'Anne Hutchinson Trial (1637)',
        imgSrc: require('./assets/eventPhotos/Individuals/anneHutchinson.jpg'),
        description: `Anne Hutchinson (1591 – 1643) was a Puritan spiritual advisor, religious reformer, and an important participant in the Antinomian Controversy which shook the infant Massachusetts Bay Colony from 1636 to 1638. Hutchinson was known for being a powerful speaker, and insisted on the ability of women to read the bible for themselves, among other "unauthorized" interpretations of the gospel.\n\nOn this day in 1637, Hutchinson was brought to trial, where she was called a heretic and an instrument of the devil, and was exiled from the Puritan community for her beliefs. Thirty-five families, supporters of Hutchinson, followed her to settle Long Island.`,
        link: 'https://www.historyisaweapon.com/defcon1/zinnint6.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Anne_Hutchinson#Civil_trial:_day_1'
      },
    ],
  },
  '11-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 8th, 1897',
        title: 'Dorothy Day (1897-1980)',
        imgSrc: require('./assets/eventPhotos/Individuals/dorothyDay.jpg'),
        description: `Dorothy Day (November 8, 1897 – November 29, 1980) was an American journalist, social activist and anarchist who, after a bohemian youth, became a Catholic Christian without in any way abandoning her social and anarchist activism. She was perhaps the best-known political radical in the American Catholic Church and is heavily associated with the Catholic Worker Movement, which she co-founded with Peter Maurin.\n\nThe Catholic Worker movement started when the first issue of the Catholic Worker appeared on May 1, 1933, priced at one cent, and published continuously since then. It was aimed at those suffering the most in the depths of the Great Depression, "those who think there is no hope for the future", and announced to them that "the Catholic Church has a social program...there are men of God who are working not only for their spiritual but for their material welfare." It accepted no advertising and did not pay its staff.\n\nLike many newspapers of the day, including those for which Day had been writing, it was an unapologetic example of advocacy journalism. It provided coverage of strikes, explored working conditions, especially of women and black workers, and explicated papal teaching on social issues. Its viewpoint was partisan and stories were designed to move its readers to take action locally, for example, by patronizing laundries recommended by the Laundry Workers' Union. Its advocacy of federal child labor laws put it at odds with the American Church hierarchy from its first issue.\n\nDay's activism continued throughout the rest of her life, resulting in multiple arrests. In the summer of 1973, she joined César Chávez in his campaign for farm laborers in the fields of California and was arrested at the age of 75 for defying an injunction against picketing, spending ten days in jail.`,
        link: 'https://en.wikipedia.org/wiki/Dorothy_Day',
        infoSrc: 'https://en.wikipedia.org/wiki/Dorothy_Day'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 11th, 1914',
        title: 'Daisy Bates (1914 - 1999)',
        imgSrc: require('./assets/eventPhotos/Individuals/daisyBates.jpg'),
        description: `Daisy Bates was an American civil rights activist, publisher, journalist, and lecturer who played a leading role in the Little Rock Integration Crisis of 1957. Her mother was raped and murdered by three white men, who went unpunished.\n\nBates was active in the NAACP, becoming head of the Arkansas state chapter in the 1950s. In this role, she played an essential role in helping the Little Rock Nine enroll in Little Rock Central High School, an all-white high school - organizing their protection, advising the families, and using her home as an official checkpoint for the students before and after school.`,
        link: 'https://en.wikipedia.org/wiki/Daisy_Bates_(activist)',
        infoSrc: 'https://en.wikipedia.org/wiki/Daisy_Bates_(activist)'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 12th, 1815',
        title: 'Elizabeth Stanton (1815 - 1902)',
        imgSrc: require('./assets/eventPhotos/Individuals/elizabethStanton.jpg'),
        description: `Elizabeth Cady Stanton was an American suffragist, social activist, abolitionist, and leading figure of the early women's rights movement.\n\nHer "Declaration of Sentiments", presented at the Seneca Falls Convention held in 1848 in Seneca Falls, New York, is often credited with initiating the first organized women's rights and women's suffrage movements in the United States.`,
        link: 'https://en.wikipedia.org/wiki/Elizabeth_Cady_Stanton',
        infoSrc: 'https://en.wikipedia.org/wiki/Elizabeth_Cady_Stanton'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'November 17th, 1747',
        title: 'Knowles Riot (1747)',
        imgSrc: require('./assets/eventPhotos/Events/knowlesRiot.jpg'),
        description: `The Knowles Riot, also known as the Impressment Riot of 1747, was a three-day riot in Boston that began on this day in 1747. It was in response to the impressment (conscription) of 46 Bostonians by Admiral Charles Knowles into the navy.\n\nHundreds of mostly working-class rioters rampaged through Boston, surrounded the house of the governor, assaulted the sheriff, and imprisoned the deputy sheriff, along with several naval officers. The governor ordered the militia to suppress the riot, but they refused, leading him to flee the city.\n\nThe rioters were later famously condemned by a merchants' group as a "Riotous Tumultuous Assembly of Foreign Seamen, Servants, Negroes, and Other Persons of Mean and Vile Condition."`,
        link: 'https://en.wikipedia.org/wiki/Knowles_Riot',
        infoSrc: 'https://en.wikipedia.org/wiki/Knowles_Riot'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'November 20th, 1969',
        title: 'Occupation of Alcatraz (1969-71)',
        imgSrc: require('./assets/eventPhotos/Events/alcatrazOccupation.jpg'),
        description: `The Occupation of Alcatraz was a 19-month long protest when 89 American Indians and their supporters occupied Alcatraz Island. The protest was led by Richard Oakes, among others. This group lived on the island together until the protest was forcibly ended by the U.S. government. The group claimed that, under the Treaty of Fort Laramie between the U.S. and the Lakota tribe, all retired, abandoned, or out-of-use federal land was returned to the Indians who once occupied it.\n\nBy late May of 1971, the government had cut off all electrical power and all telephone service to the island. Left without power, fresh water, and in the face of diminishing public support and sympathy, the number of occupiers began to dwindle. On June 11, 1971, a large force of government officers removed the remaining 15 people from the island.`,
        link: 'https://www.kqed.org/news/11788540/a-look-back-at-the-occupation-of-alcatraz-50-years-later',
        infoSrc: 'https://en.wikipedia.org/wiki/Occupation_of_Alcatraz'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 20th, 1920',
        title: 'Dr. Robert Hayling (1920 - 2015)',
        imgSrc: require('./assets/eventPhotos/Individuals/robertHayling.jpg'),
        description: `Dr. Robert B. Hayling has been hailed as the "father" of St. Augustine's civil rights movement. He organized demonstrations and coordinated visiting activists, including Dr. Martin Luther King.\n\nDr. Hayling brought direct action to the local chapter of the NAACP by organizing young people into a youth council within the organization. At his dental office, Dr. Hayling taught them methods of nonviolent activism. He arranged picketing and sit-ins at white-only restaurants, and wade-ins at a white-only pool and beach, and was arrested many times for his activism, as well as being assaulted by the Ku Klux Klan.\n\nDr. Hayling is also remembered for this quote: "I and the others have armed. We will shoot first and answer questions later. We are not going to die like Medgar Evers." Accordingly, civil rights activists drove out KKK members who were terrorizing their neighborhoods at night with gunfire. Dr. Hayling died in 2015, at the age of 86.`,
        link: 'https://www.visitstaugustine.com/history/black_history/dr_robert_hayling/',
        infoSrc: 'https://www.visitstaugustine.com/history/black_history/dr_robert_hayling/'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 21st, 1870',
        title: 'Alexander Berkman (1870 - 1936)',
        imgSrc: require('./assets/eventPhotos/Individuals/alexanderBerkman.jpg'),
        description: `Alexander Berkman (November 21, 1870 – June 28, 1936) was a leading member of the anarchist movement in the early 20th century, famous for both his political activism and his writing. He was the one-time lover and lifelong friend of anarchist Emma Goldman. In 1892, undertaking an act of propaganda of the deed, Berkman made an unsuccessful attempt to assassinate businessman Henry Clay Frick, for which he served 14 years in prison.\n\nOn their release from prison (for conspiring against the draft), Berkman and Goldman were arrested and deported to Russia. Initially supportive of the Bolshevik revolution, Berkman and Goldman soon became disillusioned, voicing their opposition to the Soviets' use of terror after seizing power and their repression of fellow revolutionaries.`,
        link: 'https://en.wikipedia.org/wiki/Alexander_Berkman',
        infoSrc: 'https://en.wikipedia.org/wiki/Alexander_Berkman'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 22nd, 1906',
        title: 'Antonio Guiteras (1906 - 1935)',
        imgSrc: require('./assets/eventPhotos/Individuals/antonioGuiteras.jpg'),
        description: `Antonio Guiteras y Holmes was a revolutionary socialist in Cuba during the 1930s.\n\nBorn in Bala Cynwyd, Pennsylvania, USA, he participated in the radical government installed after the overthrow of the autocratic right wing Cuban President Gerardo Machado y Morales in 1933. He first became widely known as a student leader and associate of Julio Antonio Mella, a Cuban Communist revolutionary.\n\nAccording to the New York Times, Guiteras died in a firefight while trying to flee the country of Cuba.`,
        link: 'https://en.wikipedia.org/wiki/Antonio_Guiteras',
        infoSrc: 'http://www.latinamericanstudies.org/cuba-news/guiteras.htm'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 23rd, 1803',
        title: 'Theodore Weld (1803 - 1895)',
        imgSrc: require('./assets/eventPhotos/Individuals/theodoreWeld.jpg'),
        description: `Theodore Dwight Weld, born on this day in 1803, was one of the architects of the American abolitionist movement during its formative years from 1830 through 1844, playing a role as writer, editor, speaker, and organizer. He is best known for his co-authorship of the authoritative compendium "American Slavery As It Is: Testimony of a Thousand Witnesses", published in 1839.\n\nHarriet Beecher Stowe partly based Uncle Tom’s Cabin on Weld's text, and it is regarded as second only to that work in its influence on the antislavery movement. Weld remained dedicated to the abolitionist movement until slavery was ended by the Thirteenth Amendment to the United States Constitution in 1865.`,
        link: 'https://www.nationalabolitionhalloffameandmuseum.org/theodore-dwight-weld.html',
        infoSrc: 'https://en.wikipedia.org/wiki/Theodore_Dwight_Weld'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 26th, 1792',
        title: 'Sarah Grimké (1792 - 1873)',
        imgSrc: require('./assets/eventPhotos/Individuals/sarahGrimke.jpg'),
        description: `Sarah Moore Grimké, born on this day in 1792, was an American abolitionist, widely held to be the mother of the women's suffrage movement. Born and reared in South Carolina to a prominent, slave-owning planter family, she moved to Philadelphia, Pennsylvania, in the 1820s and became a Quaker. She and her sister Angelina Grimké are the only white Southern women who became abolitionists.\n\nHere is an excerpt from her a series of articles she wrote titled "Letters on the Condition of Women and the Equality of the Sexes" (1838):\n\n"I ask no favors for my sex, I surrender not our claim to equality. All I ask of our brethren is that they will take their feet from off our necks, and permit us to stand upright on the ground which God has designed us to occupy...To me, it is perfectly clear that whatsoever it is morally right for a man to do, it is morally right for a woman to do."`,
        link: 'https://www.womenshistory.org/education-resources/biographies/sarah-moore-grimke',
        infoSrc: 'https://en.wikipedia.org/wiki/Sarah_Moore_Grimk%C3%A9'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-27': {
    'Revolution': [
      {
        category: 'Revolution',
        date: 'November 27th, 1917',
        title: 'Free Territory of Ukraine (1917)',
        imgSrc: require('./assets/eventPhotos/Events/freeTerritory.jpg'),
        description: `Makhnovia, also known as the Free Territory of Ukraine, was established on this day in 1917 with the capture of the Ukrainian city of Huliaipole. The Free Territory was an attempt to form a stateless anarchist society during the Ukrainian Revolution of 1917 to 1921. It existed from 1918 to 1921, during which time "free soviets" and libertarian communes operated under the protection of Nestor Makhno's Revolutionary Insurrectionary Army.\n\nAs Makhnovia self-organized along anarchist principles, references to "control" and "government" are highly contentious. For example, the Makhnovists, often cited as a form of government (with Nestor Makhno as their "leader"), played a purely military role, with Makhno himself functioning as little more than a military strategist and advisor. The economy of Makhnovia was market socialist and anarcho-communist in character (depending on the region) - where money was used, production was organized in the form of worker cooperatives.\n\nThe Bolsheviks were openly hostile to the Free Territory. On November 26, 1920, less than two weeks after the Revolutionary Insurrectionary Army assisted Bolshevik forces in defeating the White Army, Makhno's headquarters staff and many of his subordinate commanders were arrested at a Red Army planning conference to which they had been invited by Moscow, and executed. Nestor Makhno fled the region several months later, settling in Paris, France.`,
        link: 'https://libcom.org/library/nestro-makhno-russian-civil-war',
        infoSrc: 'https://en.wikipedia.org/wiki/Makhnovia'
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 28th, 1820',
        title: 'Friedrich Engels (1820 - 1895)',
        imgSrc: require('./assets/eventPhotos/Individuals/friedrichEngels.jpg'),
        description: `Friedrich Engels was a German philosopher, historian, communist, social scientist, sociologist, journalist and businessman. His father was an owner of large textile factories in Salford, England, and Barmen, Prussia (now Wuppertal, Germany).\n\nEngels developed what is now known as Marxist theory together with Karl Marx and in 1845 he published The Condition of the Working Class in England, based on personal observations and research in English cities. In 1848, Engels co-authored The Communist Manifesto with Marx and also authored and co-authored (primarily with Marx) many other works.\n\nLater, Engels supported Marx financially, allowing him to do research and write Das Kapital. After Marx's death, Engels edited the second and third volumes of Das Kapital. Additionally, Engels organised Marx's notes on the Theories of Surplus Value, which were later published as the "fourth volume" of Das Kapital. In 1884, he published The Origin of the Family, Private Property and the State on the basis of Marx's ethnographic research.`,
        link: 'https://en.wikipedia.org/wiki/Friedrich_Engels',
        infoSrc: 'https://en.wikipedia.org/wiki/Friedrich_Engels',
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '11-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'November 30th, 1835',
        title: 'Mark Twain (1835 - 1910)',
        imgSrc: require('./assets/eventPhotos/Individuals/markTwain.jpg'),
        description: `Samuel Langhorne Clemens, known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the "greatest humorist [the United States] has produced", and William Faulkner called him "the father of American literature". After 1899, he was also a committed anti-imperialist and anti-racist.\n\nBefore 1899, however, he supported imperialism, calling the Spanish War "the worthiest" war the U.S. ever fought. In the New York Herald, he described his anti-imperialism epiphany like this:\n\n"I wanted the American eagle to go screaming into the Pacific ... Why not spread its wings over the Philippines, I asked myself? ... I said to myself, Here are a people who have suffered for three centuries. We can make them as free as ourselves, give them a government and country of their own, put a miniature of the American Constitution afloat in the Pacific, start a brand new republic to take its place among the free nations of the world. It seemed to me a great task to which we had addressed ourselves."\n\n"But I have thought some more, since then, and I have read carefully the treaty of Paris [which ended the Spanish–American War], and I have seen that we do not intend to free, but to subjugate the people of the Philippines. We have gone there to conquer, not to redeem."\n\nFrom 1901 until his death in 1910, Twain was vice-president of the American Anti-Imperialist League, which believed that there is a fundamental contradiction between the ideas upon which the American republic was founded and designs for colonial expansion being advanced by the nation's contemporary political leaders.`,
        link: 'https://en.wikipedia.org/wiki/American_Anti-Imperialist_League',
        infoSrc: 'https://en.wikipedia.org/wiki/Mark_Twain#Anti-imperialist'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-1': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-2': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-3': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'December 3rd, 1847',
        title: 'First North Star Edition (1847)',
        imgSrc: require('./assets/eventPhotos/Organizations/northStar.jpg'),
        description: `Frederick Douglass (1817 – 1895) was an American social reformer, abolitionist, orator, writer, and statesman. After escaping from slavery in Maryland, he became a national leader of the abolitionist movement in Massachusetts and New York, gaining note for his oratory and incisive antislavery writings.\n\nOn this day in 1847, he published the first edition of his abolitionist periodical "The North Star". The North Star's slogan was "Right is of no Sex—Truth is of no Color—God is the Father of us all, and all we are Brethren."`,
        link: 'https://en.wikipedia.org/wiki/Frederick_Douglass',
        infoSrc: 'https://en.wikipedia.org/wiki/The_North_Star_(anti-slavery_newspaper)'
      },
    ],
  },
  '12-4': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: 'Assassinations',
        date: 'December 4th, 1969',
        title: 'Fred Hampton (1948 - 1969)',
        imgSrc: require('./assets/eventPhotos/Individuals/fredHampton.jpg'),
        description: `Fredrick Allen Hampton was an American activist and revolutionary socialist. He came to prominence in Chicago as chairman of the Illinois chapter of the Black Panther Party (BPP), and deputy chairman of the national BPP. In this capacity, he founded a prominent multicultural political organization, the Rainbow Coalition that initially included the Black Panthers, Young Patriots and the Young Lords, and an alliance among major Chicago street gangs to help them end infighting, and work for social change.\n\nIn 1967, Hampton was identified by the Federal Bureau of Investigation as a radical threat. The FBI tried to subvert his activities in Chicago, sowing disinformation among these groups and placing a counterintelligence operative in the local Panthers. In December 1969, Hampton was assassinated in his bed during a predawn raid at his Chicago apartment by a tactical unit of the Cook County State's Attorney's Office in conjunction with the Chicago Police Department and the Federal Bureau of Investigation; during the raid, another Panther was killed and several seriously wounded.\n\nAt a press conference the next day, the police announced the arrest team had been attacked by the "violent" and "extremely vicious" Panthers and had defended themselves accordingly. In a second press conference on December 8, the police leadership praised the assault team for their "remarkable restraint", "bravery", and "professional discipline" in not killing all the Panthers present. Photographic evidence was presented of bullet holes allegedly made by shots fired by the Panthers, but this was soon challenged by reporters. It was later found that all but one of nearly 100 shots were fired by police.\n\nHis death was ruled a justified homicde at the time, although a civil lawsuit filed on behalf of the survivors and the relatives of Hampton and Clark won $1.85 million dollars in damages in 1982.`,
        link: 'https://www.zinnedproject.org/materials/assassination-of-fred-hampton',
        infoSrc: 'https://en.wikipedia.org/wiki/Fred_Hampton'
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-5': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'December 5th, 1955',
        title: 'Montgomery Bus Boycott Begins (1955)',
        imgSrc: require('./assets/eventPhotos/Events/busBoycott.jpg'),
        description: `The Montgomery Bus Boycott in Montgomery, Alabama was a crucial event in the 20th Century Civil Rights Movement. It began on this day in 1955. Just four days prior, Rosa Parks had refused to give up her seat on the bus for a white man and was subsequently arrested. The leader of the local NAACP chapter, E.D. Nixon, used the arrest to launch a bus boycott to fight the city’s segregated bus policy.\n\nThe boycott had widespread support in the black community, and black taxi drivers lowered their fares to match the cost of taking a bus in solidarity. In response, the membership of the "White Citizen's Council" dramatically increased.\n\nMany acts of terrorism were committed by whites in response to the boycott - the homes of Martin Luther King Jr. and Ralph Abernathy were firebombed, boycotters were often physically attacked, and dozens of activists were arrested.\n\nThe boycott ended on December 20th of 1956, when the city passed an ordinance allowing black members to sit where they wanted on the bus. The campaign of white terrorism continued, however, and all within the month that followed integration on buses, multiple churches were bombed, buses were subject to sniper fire, and at least one black man was lynched.`,
        link: 'https://www.blackpast.org/african-american-history/montgomery-bus-boycott-1955-56/',
        infoSrc: 'https://en.wikipedia.org/wiki/Montgomery_bus_boycott'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-6': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-7': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 7th, 1928',
        title: 'Noam Chomsky (1928 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/noamChomsky.jpg'),
        description: `Avram Noam Chomsky is an American linguist, philosopher, cognitive scientist, historian, social critic, and political activist. Sometimes called "the father of modern linguistics", Chomsky is also a major figure in analytic philosophy and one of the founders of the field of cognitive science. He holds a joint appointment as Institute Professor Emeritus at the Massachusetts Institute of Technology (MIT) and Laureate Professor at the University of Arizona, and is the author of more than 100 books on topics such as linguistics, war, politics, and mass media. Ideologically, he aligns with anarcho-syndicalism and libertarian socialism.\n\nAn outspoken opponent of U.S. involvement in the Vietnam War, which he saw as an act of American imperialism, in 1967 Chomsky rose to national attention for his antiwar essay "The Responsibility of Intellectuals". Associated with the New Left, he was arrested multiple times for his activism and placed on President Richard Nixon's Enemies List.\n\nIn collaboration with Edward S. Herman, Chomsky later articulated the propaganda model of media criticism in their work Manufacturing Consent and worked to expose the Indonesian occupation of East Timor.`,
        link: 'https://en.wikipedia.org/wiki/Noam_Chomsky',
        infoSrc: 'https://en.wikipedia.org/wiki/Noam_Chomsky'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-8': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 8th, 1882',
        title: 'Thomas Mooney (1882 - 1942)',
        imgSrc: require('./assets/eventPhotos/Individuals/thomasMooney.jpg'),
        description: `Thomas Joseph Mooney was an American political activist and labor leader, who was convicted with Warren K. Billings of the San Francisco Preparedness Day Bombing of 1916. Convicted on scant evidence, Mooney served 22 years in prison before finally being pardoned in 1939.\n\nHe was known for being a militant IWW organizer and for publishing the socialist magazine "The Revolt".`,
        link: 'https://en.wikipedia.org/wiki/Thomas_Mooney',
        infoSrc: 'https://en.wikipedia.org/wiki/Thomas_Mooney'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-9': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 9th, 1842',
        title: 'Peter Kropotkin (1842 - 1921)',
        imgSrc: require('./assets/eventPhotos/Individuals/peterKropotkin.jpg'),
        description: `Pyotr Alexeyevich Kropotkin was a Russian activist, writer, revolutionary, scientist, economist, sociologist, historian, essayist, researcher, political scientist, biologist, geographer, and philosopher who advocated anarcho-communism.\n\nBorn into an aristocratic land-owning family, he attended a military school and later served as an officer in Siberia, where he participated in several geological expeditions. He was imprisoned for his activism in 1874 and managed to escape two years later. He spent the next 41 years in exile in Switzerland, France (where he was imprisoned for almost four years) and in England. While in exile, Kropotkin gave lectures and published widely on anarchism and geography. He returned to Russia after the Russian Revolution in 1917 but was disappointed by the Bolshevik state.\n\nKropotkin was a proponent of a decentralised communist society free from central government and based on voluntary associations of self-governing communities and worker-run enterprises. He wrote many books, pamphlets, and articles, the most prominent being The Conquest of Bread and Fields, Factories and Workshops; and his principal scientific offering, "Mutual Aid: A Factor of Evolution". He also contributed the article on anarchism to the Encyclopædia Britannica Eleventh Edition and left unfinished a work on anarchist ethical philosophy.`,
        link: 'https://en.wikipedia.org/wiki/Peter_Kropotkin',
        infoSrc: 'https://en.wikipedia.org/wiki/Peter_Kropotkin'
      },
      {
        category: 'Birthdays',
        date: 'December 9th, 1949',
        title: 'Silvia Rivera Cusicanqui (1949 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/silviaCusicanqui.jpg'),
        description: `Silvia Rivera Cusicanqui is a Bolivian feminist, sociologist, historian, and subaltern theorist. She draws upon anarchist theory as well as Quechua and Aymara cosmologies.\n\nShe is also an activist who works directly with indigenous movements in Bolivia, such as the Katarista movement and the coca growers movement.`,
        link: 'https://globalsocialtheory.org/thinkers/cusicanqui-silvia-rivera/',
        infoSrc: 'https://en.wikipedia.org/wiki/Silvia_Rivera_Cusicanqui'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-10': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-11': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-12': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-13': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-14': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 14th, 1852',
        title: 'Daniel De Leon',
        imgSrc: require('./assets/eventPhotos/Individuals/danielDeLeon.jpg'),
        description: `Daniel De Leon was an American socialist newspaper editor, politician, Marxist theoretician, and trade union organizer. He is regarded as the forefather of the idea of revolutionary industrial unionism and was the leading figure in the Socialist Labor Party of America from 1890 until the time of his death.\n\nDe Leon is also notable for splitting with "Big Bill" Haywood on the matter of electoral politics. Haywood supported direct action - working outside the system - while De Leon supported political action via a socialist political party. Eventually, this disagreement caused De Leon to leave the IWW entirely.`,
        link: 'https://en.wikipedia.org/wiki/Daniel_De_Leon',
        infoSrc: 'https://en.wikipedia.org/wiki/Daniel_De_Leon'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-15': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-16': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-17': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'December 17th, 2010',
        title: 'Mohamed Bouazizi Self-Immolation (2010)',
        imgSrc: require('./assets/eventPhotos/Individuals/mohamedBouazizi.jpg'),
        description: `Tarek el-Tayeb Mohamed Bouazizi (29 March 1984 – 4 January 2011) was a Tunisian street vendor who set himself on fire on this day in 2010, which became a catalyst for the Tunisian Revolution and the wider Arab Spring against autocratic regimes.\n\nHis self-immolation was in response to the confiscation of his wares by police, mistreatment by city officials, and desperation of his own economic condition. Anti-government protests in Tunisia began within hours of his self-immolation, In 2011, Bouazizi was posthumously awarded the Sakharov Prize for his contribution to "historic changes in the Arab world"`,
        link: 'https://en.wikipedia.org/wiki/Mohamed_Bouazizi',
        infoSrc: 'https://en.wikipedia.org/wiki/Mohamed_Bouazizi'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 17th, 1987',
        title: 'Chelsea Manning (1987 - )',
        imgSrc: require('./assets/eventPhotos/Individuals/chelseaManning.jpg'),
        description: `Chelsea Elizabeth Manning is an American activist and whistleblower. She is a former United States Army soldier who was convicted by court-martial in July 2013 of violations of the Espionage Act and other offenses, after disclosing to WikiLeaks nearly 750,000 classified, or unclassified but sensitive, military and diplomatic documents.\n\nAmong the documents released was the infamous "Collateral Murder" video, which depicted two American helicopters firing on Reuters journalists and children. Manning was imprisoned from 2010 until 2017, when her sentence was commuted by Barack Obama.`,
        link: 'https://www.theguardian.com/us-news/2018/oct/07/chelsea-manning-wikileaks-whistleblowing-interview-carole-cadwalladr',
        infoSrc: 'https://en.wikipedia.org/wiki/Chelsea_Manning'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-18': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 18th, 1878',
        title: 'Joseph Stalin (1878 - 1953)',
        imgSrc: require('./assets/eventPhotos/Individuals/josephStalin.jpg'),
        description: `Joseph Vissarionovich Stalin was a Georgian revolutionary and Soviet politician who led the Soviet Union from the mid-1920s until 1953 as the general secretary of the Communist Party of the Soviet Union (1922–1952) and premier of the Soviet Union (1941–1953). A communist ideologically committed to the Leninist interpretation of Marxism, Stalin formalised these ideas as Marxism–Leninism, while his own policies are simply known as Stalinism.\n\nThrough the Five-Year Plans, the country underwent agricultural collectivisation and rapid industrialisation, creating a centralised command economy. This led to significant disruptions in food production that contributed to the famine of 1932–33. To eradicate accused "enemies of the working class", Stalin instituted the "Great Purge", in which over a million were imprisoned and at least 700,000 executed between 1934 and 1939.\n\nWidely considered one of the 20th century's most significant figures, Stalin is revered by some as a champion of the working class and socialism, while critics have condemned his government for overseeing mass political repression, ethnically based deportations, hundreds of thousands of executions, and famines that killed millions.`,
        link: 'https://en.wikipedia.org/wiki/Joseph_Stalin',
        infoSrc: 'https://en.wikipedia.org/wiki/Joseph_Stalin'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-19': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: 'Other',
        date: 'December 19st, 1956',
        title: 'Treason Trial Begins (1956)',
        imgSrc: require('./assets/eventPhotos/Events/treasonTrial.jpg'),
        description: `The Treason Trial was a trial in Johannesburg in which 156 people, including Nelson Mandela, were arrested in a raid and accused of treason in South Africa in 1956. The main trial lasted until 1961, when all of the defendants were found not guilty.\n\nOn December 5th, 1956, the South African Police's Security Branch raided and arrested 140 people from around the country on the charge of treason as they enforced the Suppression of Communism Act. On this that year, 153 prisoners were driven to the Johannesburg Drill Hall for a preliminary hearing to examine the state's evidence, and South Africa's infamous "Treason Trial" began.\n\nAn attempt by the prosecutor to proceed with the case was interrupted three times by the noise of 5,000 Black South Africans, who, hoping to attend the case, surrounded the streets of the Drill Hall and sung Nkosi Sikeleli Afrika.`,
        link: 'https://omalley.nelsonmandela.org/omalley/index.php/site/q/03lv01538/04lv01600/05lv01615/06lv01616.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/1956_Treason_Trial'
      },
    ],
  },
  '12-20': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 20th, 1951',
        title: 'Marta Russell (1951 - 2013)',
        imgSrc: require('./assets/eventPhotos/Individuals/martaRussell.jpg'),
        description: `Marta Russell was an American writer and disability rights activist. Her book, "Beyond Ramps: Disability at the End of the Social Contract published in 1998" analyzes the relationship between disability, social Darwinism, and economic austerity under capitalism.\n\nHer political views, which she described as "left, not liberal," informed her writing on topics such as healthcare, the prison-industrial complex, physician-assisted suicide, poverty, ableism, and the Americans with Disabilities Act of 1990.`,
        link: 'https://en.wikipedia.org/wiki/Marta_Russell',
        infoSrc: 'https://en.wikipedia.org/wiki/Marta_Russell'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-21': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 21st, 1949',
        title: 'Thomas Sankara (1949 - 1987)',
        imgSrc: require('./assets/eventPhotos/Individuals/thomasSankara.jpg'),
        description: `Thomas Sankara was a Burkinabé revolutionary and President of Burkina Faso from 1983 to 1987. A Marxist–Leninist and pan-Africanist, he was viewed by supporters as a charismatic and iconic figure of revolution and is sometimes referred to as "Africa's Che Guevara".\n\nSankara came into power when allies instigated a coup on his behalf in 1983. He immediately launched programmes for social, ecological and economic change and renamed the country from the French colonial name Upper Volta to Burkina Faso ("Land of Incorruptible People"), with its people being called Burkinabé ("upright people").\n\nHis administration was known for refusing all foreign aid to remain politically independent, nationalizing all land and mineral wealth, and promoting literarcy, women's rights, and public health.\n\nOn 15 October 1987, Sankara was assassinated by troops led by Blaise Compaoré, who assumed leadership of the state shortly after having Sankara killed. A week before his assassination, Sankara declared: "While revolutionaries as individuals can be murdered, you cannot kill ideas".`,
        link: 'http://www.thomassankara.net/',
        infoSrc: 'https://en.wikipedia.org/wiki/Thomas_Sankara'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-22': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-23': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-24': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-25': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-26': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: 'Birthdays',
        date: 'December 26th, 1893',
        title: 'Mao Zedong (1893 - 1976)',
        imgSrc: require('./assets/eventPhotos/Individuals/maoZedong.jpg'),
        description: `Mao Zedong, also known as Chairman Mao, was a Chinese communist revolutionary who became the founding father of the People's Republic of China (PRC), which he ruled as the chairman of the Communist Party of China from its establishment in 1949 until his death in 1976. Ideologically a Marxist–Leninist, his theories, military strategies, and political policies are collectively known as Maoism.\n\nA controversial figure, Mao is regarded as one of the most important and influential individuals in modern world history. He is also known as a political intellect, theorist, military strategist, poet, and visionary. During Mao's era, China was involved in the Korean War, the Sino-Soviet split, the Vietnam War, and the rise of Khmer Rouge; in particular, in 1972, Mao welcomed U.S. President Richard Nixon in Beijing, signalling the start of a policy of opening China to the world.\n\nSupporters credit him with driving imperialism out of China, modernising the nation and building it into a world power, promoting the status of women, improving education and health care, as well as increasing life expectancy of the average Chinese citizen.\n\nConversely, his regime has been called autocratic and totalitarian, and condemned for bringing about mass repression and destroying religious and cultural artifacts and sites. It was additionally responsible for vast numbers of deaths with estimates ranging from 30 to 80 million victims through starvation, persecution, prison labor and mass executions.`,
        link: 'https://en.wikipedia.org/wiki/Mao_Zedong',
        infoSrc: 'https://en.wikipedia.org/wiki/Mao_Zedong'
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-27': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'February 27th, 1973',
        title: 'Wounded Knee Occupation (1973)',
        imgSrc: require('./assets/eventPhotos/Events/woundedKneeOccupation.jpg'),
        description: `The Wounded Knee Occupation began on this day in 1973, when approximately 200 Oglala Lakota and followers of the American Indian Movement (AIM) seized and occupied the town of Wounded Knee, South Dakota, on the Pine Ridge Indian Reservation. Paul Manhart S.J. and ten other residents of the area were apprehended at gunpoint and taken hostage.\n\nThe rebellion followed the failure of an effort of the Oglala Sioux Civil Rights Organization (OSCRO) to impeach tribal president Richard Wilson, whom they accused of corruption and abuse of opponents. Additionally, the rebels criticized the United States government's failure to fulfill treaties with Native American people and demanded the reopening of treaty negotiations.\n\nThe activists chose the site of the 1890 Wounded Knee Massacre for its symbolic value, and the town was promptly surrounded by nearly one thousand federal agents. Tribal leaders called off the occupation after 71 days, due to the death of a young Lakota man by U.S. sniper fire. The terms of ending the occuption included a mandated meeting at Chief Fools Crow's land to discuss reinstating an 1868 Treaty.`,
        link: 'https://www.theatlantic.com/national/archive/2012/10/occupy-wounded-knee-a-71-day-siege-and-a-forgotten-civil-rights-movement/263998/',
        infoSrc: 'https://en.wikipedia.org/wiki/Wounded_Knee_Massacre'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-28': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-29': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: 'Rebellion',
        date: 'December 29th, 1890',
        title: 'Wounded Knee Massacre (1890)',
        imgSrc: require('./assets/eventPhotos/Events/woundedKneeMassacre.jpg'),
        description: `The Wounded Knee Massacre was a domestic massacre of several hundred Lakota people, almost half of whom were women and children, by soldiers of the United States Army. It occurred on this day in 1890, near Wounded Knee Creek in South Dakota, following a botched attempt to disarm the Lakota camp.\n\nAccording to the journalist Charles Allen who witnessed the massacre, the fighting began when soldiers tried to disarm a deaf Native American, and the gun went off in a struggle. Soldiers began firing indiscriminately, and, although the Lakota fought back, many of them had been disarmed by this point.\n\nBy the time the massacre was over, as many as 300 men, women, and children of the Lakota had been killed and 51 were wounded Twenty soldiers were awarded the Medal of Honor.`,
        link: 'https://www.pbs.org/weta/thewest/program/episodes/eight/likegrass.htm',
        infoSrc: 'https://en.wikipedia.org/wiki/Wounded_Knee_Massacre'
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-30': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
  '12-31': {
    'Revolution': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Rebellion': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Labor': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Birthdays': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Assassinations': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
    'Other': [
      {
        category: '',
        date: '',
        title: '',
        imgSrc: require('./assets/eventPhotos/Individuals/proudhon.jpg'),
        description: ``,
        link: '',
        infoSrc: ''
      },
    ],
  },
};
