const addMovieModal = document.getElementById('add-modal');

// other ways to select the modal
//const addMovieModal2 = document.querySelector('#add-modal');
//const addMovieModal3 = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');

// other way to select button
//const startAddMovieButton2 = document.querySelector('header').lastElementChild;

const background = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const addMovieDetails = cancelAddMovieButton.nextElementSibling;

const userInputs = document.querySelectorAll('input');
// other way to access all inputs
//const userInputs2 = document.getElementsByTagName('input');

const movieList = [];

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

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
};

const backgroundClickHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {
    const title = userInputs[0].value;
    const imageUrl = userInputs[1].value;
    const rating = userInputs[2].value;

    if (title.trim() === '' || imageUrl.trim() === '' || rating.trim() === '' || +rating < 1 || +rating > 5) {
        alert("Enter valid movie information");
        return;
    }

    const newMovie = {
        movieTitle: title,
        movieImageUrl: imageUrl,
        movieRating: rating
    };

    movieList.push(newMovie);
    console.log(movieList);
    toggleMovieModal();
    clearMovieInputs();
};

const clearMovieInputs = () => {
    for (const userIn of userInputs) {
        userIn.value = '';
    }
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
background.addEventListener('click', backgroundClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieDetails.addEventListener('click', addMovieHandler);