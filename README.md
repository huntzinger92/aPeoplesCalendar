# About
A People's Calendar (aPC) is a project that seeks to promote the worldwide history of working class movements and liberation struggles in the form of a searchable "On This Day" calendar. This history includes, but is not limited to, indigenous resistance against colonization, the black liberation struggle, unionization efforts, slave rebellions, the women's suffrage movement, and workers' revolution.

This repository contains the native version of this calendar. It is built using Expo, which uses the React Native framework. A separate codebase is maintained for the web version here: https://github.com/huntzinger92/aPeoplesCalendarWeb. The event libraries (eventLibrary.js) are meant to be identical, but are currently stored separately and do not track one another.

# Open Source
Both the web and native versions of this application are freely available, and I will never restrict or profit from them for propertiary reasons. I welcome your ideas and suggestions, whether they be something as simple as a typo correction or as complex as a major feature addition. As of July 30th, 2020, there are many features I am still working towards adding, such as push notifications that display notable events, animations, and hundreds of historical events which are still missing. If you have an idea and the skill to implement it, feel free to submit a pull request.

# App Hierarchy

The "App" component is responsible for displaying the date picker, search field, handling high-level navigation, and getting a day's/search's event data. After retrieving a day's events, the data is passed on to the CalendarDisplay component. If the user is searching for events that contain a term rather than events by day, the function searchEvents() constructs the search results as an artifical "day" and sends the data to the CalendarDisplay component in that format. In this way, both search results and day's events can be rendered by the same code in calendarDisplay.js.

The CalendarDisplay component receives event data to display and is responsible for formatting it into the proper JSX, handling expansion/collapse logic for each event category, and passing on individual event data to the SpecificEvent component, which is responsible for displaying the low-level details of each event - date, description, relevant image, etc.

All events are stored in eventLibrary.js and exported as a JSON file. Eventually, these events will be moved to a local sqlite3 database. Each event is stored as an object with the following keys:
- category (string)
- title (string)
- date (string)
- imgSrc (require(./assets/EventPhotos/...))
- description (string formatted with new line characters)
- link: (string)
- infoSrc: (string)

The folder ./assets/eventPhotos contains all event photos required in eventLibrary.js, organized by four categories - individuals, events (i.e., battles, massacres, revolutions, protests, etc.), organizations, and books. If there is no picture for the event available, eventPhotos/empty.jpg is used.

