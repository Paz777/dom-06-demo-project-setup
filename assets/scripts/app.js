const addMovieModal = document.getElementById('add-modal');

// other ways to select the modal
//const addMovieModal2 = document.querySelector('#add-modal');
//const addMovieModal3 = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');

// other way to select button
//const startAddMovieButton2 = document.querySelector('header').lastElementChild;

const background = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

const toggleMovieModal = () => {

// 2 other ways that you cna toggle the visbiility
//   if (addMovieModal.className === 'modal visible') {
//     addMovieModal.className = 'modal';
//   } else {
//     addMovieModal.className = 'modal visible';
//   }

//   if (addMovieModal.classList.contains('visible')) {
//     addMovieModal.classList.remove('visible');
//   } else {
//     addMovieModal.classList.add('visible');
//   }

  addMovieModal.classList.toggle('visible');
  toggleBackground();
};

const toggleBackground = () => {
    background.classList.toggle('visible');
};

const cancelAddMovie = () => {
    toggleMovieModal();
}

const backgroundClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
background.addEventListener('click', backgroundClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);