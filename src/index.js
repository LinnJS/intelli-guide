import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCIHqdl2GqIMEoXn-0oLR5Hm00_eZE1zts',
  authDomain: 'intelli-guide.firebaseapp.com',
  databaseURL: 'https://intelli-guide.firebaseio.com',
  projectId: 'intelli-guide',
  storageBucket: 'intelli-guide.appspot.com',
  messagingSenderId: '846727200470',
};
firebase.initializeApp(config);
firebase
  .database()
  .ref()
  .set({
    url: 'http://archive.thedali.org/MWEBimages/Collection Images/2000.6_thumbnail.jpg',
    Title: 'Daddy Longlegs of the Evening-Hope!',
    Maker: 'Salvador Dalí',
    DateMade: '1940',
    PlaceMade: 'Unied States',
    Materials: 'Oil on burlap',
    Dimensions: '10 in x 20 in',
    AccessionIdNumber: '2000.6',
    CreditLine: 'Gift of A. Reynolds & Eleanor Morse',
    Location: 'ON VIEW',
    Copyright:
      'Worldwide rights ©Salvador Dalí. Fundació Gala-Salvador Dalí (Artists Rights Society), 2017 / In the USA ©Salvador Dalí Museum, Inc. St. Petersburg, FL 2017.',
    ExhibitionHistory: [
      '1941, Chicago, The Arts Club of Chicago, “Salvador Dali”',
      '1941, New York, Julien Levy Gallery, “Salvador Dalí”',
      '1941, Los Angeles, Dalzell Hatfield Galleries, “Salvador Dalí”',
      '1943, New York, Art of this Century, “Art of this Century : 15 Early Paintings. 15 Late Paintings”',
      '1947, Cleveland, Cleveland Museum of Art, “Print Club of Cleveland-Salvador Dalí: An Exhibition”',
      '1954, Roma, Sale dell"Aurora Pallavicini, “Mostra di quadri disegni ed oreficerie di Salvador Dalí”',
      '1965, New York, Gallery of Modern Art, “Salvador Dalí, 1910-1965”',
      '2000, St. Petersburg, Florida, The Salvador Dalí Museum, “James Rosenquist: Paintings James Rosenquist: Selects DALI”',
      '2004, Venezia, Palazzo Grassi, Dali Retrospective',
      '2005, Philadelphia, Philadelphia Museum of Art, Dali Retrospective',
      '2006, Tokyo, Ueno Royal Museum, “Dalí Centennial Retrospective”',
      '2007, St. Petersburg, Fl., Salvador Dalí Museum, “Dalí and the Spanish Baroque”',
      '2007, St. Petersburg, Fl., Salvador Dalí Museum, “Dalí and the Spanish Baroque”',
      '2009, Melbourne, National Gallery of Victoria, Salvador Dalí : Liquid Desire',
    ],
  });

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./components/App/App', render);
}
