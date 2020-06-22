const proyectsData = [
  {
    name: 'Andrew Hill',
    img: require('./project-images/andrew-hill.jpg'),
    technologies: ['HTML', 'PostCSS', 'SASS', 'JavaScript', 'BEM'],
    about: `The main reason of this project was to reinforce my vanilla habilities, before jumping entirely into React and its wonderful enviroment.

    I tried to limit myself to just use the old basics HTML, CSS and JavaScript and added some challenges like use the Google Maps API, make a multipage website and use tools like PostCSS to add browser compatibility and SASS to develop faster.

    I used the BEM methodology in case my future me wants to reimplement the project in React (Not a fan of rewriting CSS).

    Last thing and most important since I'm not a designer, this design was inspired by the TAKT Studio website.`,
    demoUrl: 'https://andresclm.github.io/real-estate/index.html',
    codeUrl: 'https://github.com/andresclm/real-estate',
  },
  {
    name: 'MR NEWS',
    img: require('./project-images/mr-news.png'),
    technologies: ['HTML', 'CSS', 'Tachyons', 'JavaScript', 'React', 'Redux', 'React Router'],
    about: `This was my second block Acámica project, they gave us a checklist and like any real project, you would have to send it back acording to that checklist.

    The three most important topics that I learned were:
      - The advantages of using a functional CSS framework, like the easiness of adding new features and modificate existence ones.
      - How to handle multiple request at the same time, by using the Fetch API and learning about Promises.
      - How the redux cycle works, and how middlewares allow us to make that cycle asynchronous.`,
    demoUrl: 'https://andresclm.github.io/news-room/',
    codeUrl: 'https://github.com/andresclm/news-room/',
  },
];

export default proyectsData;
