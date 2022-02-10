const projects = [
    {
        title: 'Chess Clocks',
        description:'Animated login form with validation and interactivity.',
        imageUrl:process.env.PUBLIC_URL + '/assets/chess_clocks.png',
        live:process.env.PUBLIC_URL + 'https://chess-clocks.netlify.app/',
        code:process.env.PUBLIC_URL + 'https://github.com/Zhanysh-Amanatov/chess_clocks',
    },
    {
        title: 'Recipes App',
        description:'Service for searching different recipes.Data is fetched via API calls.',
        imageUrl:process.env.PUBLIC_URL + '/assets/project2.jpg',
        live:process.env.PUBLIC_URL + 'https://www.freecodecamp.org/learn',
    },
    {
        title: 'Find a Chess Coach',
        description:'Service for searching chess coaches online around the world.Free trial lesson and student community for group learning. ',
        imageUrl:process.env.PUBLIC_URL + '/assets/project3.jpg',
    },
];

export default projects;