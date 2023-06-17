import budgetImg from '../assets/tracker.jpeg'
import kenstagramIimg from '../assets/kenstagram.jpeg'
import cryptoImg from '../assets/cryypto.jpeg'
import notes from '../assets/notes.png'

export const allProjects = [{
    projectImage: budgetImg,
    projectTitle: 'Budget Tracker',
    description2: 'This is a full stack web application built using Ruby on Rails (RoR) framework for Ruby Language. This application was built to keep track of a user"s budget by creating a gen group and add an item to it. This is a fully tested application so that every user may have a splendid experience using the application without encountering any bug, and so that they may have a wonderful ecperience using the webapp. Live link is not available due render free tier expiration policy.',
    technology: ['Ruby on Rails', 'css', 'Rspec'],
    sourceCode: 'https://github.com/kennyegun24/Budget-App',
    data1: 'fade-up',
    data2: 'fade-right',
    class: ''
}, {
    projectImage: kenstagramIimg,
    projectTitle: 'Kenstagram',
    description2: 'This an instagram clone built with react and css. Not with full functionalities, only a few such as following a user, sending direct message and also posting of new images. This is a Single page application built with react.js for frontend and firebase for auth, database and cloud storage',
    technology: ['CSS', 'React.js', 'Firebase', 'Context api'],
    sourceCode: 'https://github.com/kennyegun24/instagram-clone',
    liveDemo: 'https://kenny-ig.netlify.app/',
    data1: 'fade-right',
    data2: 'fade-up',
    class: 'reverse'
}, {
    projectImage: cryptoImg,
    projectTitle: 'Crypto price tracker',
    description2: "A live crypto currency tracking web app that provide real time data, historical info and every details on several cryptocurrencies. The web app was built using react and the data is being consumed from a third party api (coingecko's api). Redux was used as a state management tool and the app waas also tested inorder to make sure it give users 100% satisfaction",
    technology: ['React.js', 'CSS', 'javaScript', 'Jest', 'Redux'],
    sourceCode: 'https://github.com/kennyegun24/cryptocurrency-app',
    liveDemo: 'https://kennys-cryptohub.netlify.app',
    data1: 'fade-up',
    data2: 'fade-right',
    class: ''
},
{
    projectImage: notes,
    projectTitle: 'Mobile notes taking app',
    description2: "A notes app built using React native for mmobile (android and IOS devices). This app was built using AsyncStorage which is a library used in saving things to local storage on mobile devices with react native. The user can take notes, edit existing notes and even delete notes too.",
    technology: ['Stack navigator', 'javaScript', 'React Native', 'AsyncStorage'],
    sourceCode: 'https://github.com/kennyegun24/react-native-demo2',
    data1: 'fade-up',
    data2: 'fade-up',
    class: 'reverse'
},
]