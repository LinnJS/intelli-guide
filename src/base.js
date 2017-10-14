import * as firebase from 'firebase';
import Rebase from 're-base';

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
// };

const config = {
  apiKey: 'AIzaSyCIHqdl2GqIMEoXn-0oLR5Hm00_eZE1zts',
  authDomain: 'intelli-guide.firebaseapp.com',
  databaseURL: 'https://intelli-guide.firebaseio.com',
  projectId: 'intelli-guide',
  storageBucket: 'intelli-guide.appspot.com',
  messagingSenderId: '846727200470',
};

const app = firebase.initializeApp(config);
const database = firebase.database();

database
  .ref()
  .set({
    Copyright:
      'Worldwide rights ©Salvador Dalí. Fundació Gala-Salvador Dalí (Artists Rights Society), 2017 / In the USA ©Salvador Dalí Museum, Inc. St. Petersburg, FL 2017.',
    perminant: [
      {
        title: 'View of Cadaqués with Shadow of Mount Pani',
        url: 'http://archive.thedali.org/MWEBimages/Collection Images/1980.7_thumbnail.jpg',
        maker: 'Salvador Dalí',
        dateMade: '1917',
        placeMade: 'Spain',
        materials: 'Oil on burlap',
        dimensions: '15 1/2 in x 19 in',
        accessionIDNumber: '1980.7',
        creditLine: 'Gift of A. Reynolds & Eleanor Morse',
        onView: true,
        exhibitionHistory: [
          '1925, Barcelona, Galeries Dalmau, "Exposició S. Dalí"',
          '1995, St. Petersburg, Salvador Dali Museum, "The Young Dali: Works from 1914-1930"',
          '2004, Venezia, Palazzo Grassi, "Dalí"',
          '2005, Philadelphia, The Philadelphia Museum of Art, "Dalí"',
          '2016, Tokyo, National Art Center, "Salvador Dalí"',
          '2016, Kyoto, Kyoto Municipal Museum, "Salvador Dalí"',
        ],
        description: [
          'During this period Dalí was experimenting with Impressionism, a 19th Century art movement that sought to capture the immediacy of the visual moment by painting the effects of light on the surfaces of objects. The work is painted on rough burlap, which gives the Bay of Cadaqués scene, with its blocky houses and shimmering sea, an assertive texture. At the invitation of Dalí’s father’s friend Jose Pepito Pichot, Dalí offered to visit the Pichot family estate just outside of Figueres. The Pichots were an extended family whose many members included proficient musicians and artists. Dalí’s father believed an association with this artistic and musically talented family would be very beneficial to his son. In the Pichot dining room, the walls were lined with impressionist paintings, some by Ramon Pichot, an established Impressionist painter and a close friend of Pablo Picasso (1881-1976). One day while looking at Ramon’s works Dalí decided to become a painter. Dalí later said, “Impressionist painting attracted me at the time because it was considered anti-establishment and a revolutionary aesthetic theory.”',
        ],
      },
      {
        Title: 'Daddy Longlegs of the Evening-Hope!',
        url: 'http://archive.thedali.org/MWEBimages/Collection Images/2000.6_thumbnail.jpg',
        maker: 'Salvador Dalí',
        dateMade: '1940',
        placeMade: 'Unied States',
        materials: 'Oil on burlap',
        dimensions: '10 in x 20 in',
        accessionIdNumber: '2000.6',
        creditLine: 'Gift of A. Reynolds & Eleanor Morse',
        onView: true,
        history: [
          '1941, Chicago, The Arts Club of Chicago, “Salvador Dali”',
          '1941, New York, Julien Levy Gallery, “Salvador Dalí”',
          '1941, Los Angeles, Dalzell Hatfield Galleries, “Salvador Dalí”',
          '1943, New York, Art of this Century, “Art of this Century : 15 Early Paintings. 15 Late Paintings”',
          '1947, Cleveland, Cleveland Museum of Art, “Print Club of Cleveland-Salvador Dalí: An Exhibition”',
          '1954, Roma, Sale dellAurora Pallavicini, “Mostra di quadri disegni ed oreficerie di Salvador Dalí”',
          '1965, New York, Gallery of Modern Art, “Salvador Dalí, 1910-1965”',
          '2000, St. Petersburg, Florida, The Salvador Dalí Museum, “James Rosenquist: Paintings James Rosenquist: Selects DALI”',
          '2004, Venezia, Palazzo Grassi, Dali Retrospective',
          '2005, Philadelphia, Philadelphia Museum of Art, Dali Retrospective',
          '2006, Tokyo, Ueno Royal Museum, “Dalí Centennial Retrospective”',
          '2007, St. Petersburg, Fl., Salvador Dalí Museum, “Dalí and the Spanish Baroque”',
          '2007, St. Petersburg, Fl., Salvador Dalí Museum, “Dalí and the Spanish Baroque”',
          '2009, Melbourne, National Gallery of Victoria, Salvador Dalí : Liquid Desire',
        ],
        description: [
          'Daddy Longlegs of the Evening - Hope! (Araignée du soir, espoir) - 1940. (Including: soft aeroplane, vomited by a cannon, ants, victory born of a broken wing, violoncello in white mastic, and an angel who weeps).',
          'Dalí and his wife, Gala, stayed in the United States from 1940 to 1948 due to the war in Europe which drove him and his fellow Surrealists into exile. This was the first painting Dalí completed after coming to America. The victory referred to in the title is the classical sculpture of the winged Nike of Samothrace who emerges shrouded while rising from the limp airplane. The cannon from the deflated plane is reminiscent of Giorgio de Chirico’s The Philosopher Conquest of 1914. ',
          'An anguished head occupies the center, but here it has become a soft structure infused with sunset colors. The head is metamorphosed into an elastic female figure whose breasts are mimicked by two inkwells (erotic symbols in Dalí’s iconography) which suggest the signing of treaties (and Dalí’s father’s role as a notary). Ants eat away at the figure’s mouth as they do in countless other paintings, indicating the insidious destruction swallowing Europe. The viscous cello and bow suggest that all of Europe’s highest precepts were helpless to prevent the destruction of culture at the hands of a fascist regime.',
          'The painting’s title refers to an old French peasant legend: a spider seen in the evening is a symbol of good luck. ',
        ],
      },
    ],
    expedition: {},
    architecture: {},
    family: {
      daliDecoded: {},
      mustache: {},
    },
  })
  .then(() => {
    console.log('Data Saved!');
  })
  .catch(error => {
    console.log('This failed: ', error);
  });
