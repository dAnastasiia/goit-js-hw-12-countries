var debounce = require('lodash.debounce');
import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import errorNotification from './js/errorNotification';
import cardTpl from './templates/cardTpl.hbs';
import listTpl from './templates/listTpl.hbs';

refs.searchForm.addEventListener('input', debounce(onInput, 500));
refs.foundCountries.addEventListener('click', onClick);

function renderCard(country) {
  const markup = cardTpl(country);
  refs.countryCard.innerHTML = markup;
  refs.countryCard.classList.remove('is-hidden');
}

function renderList(countries) {
  const markup = listTpl(countries);
  refs.foundCountries.innerHTML = markup;
  refs.foundCountries.classList.remove('is-hidden');
}

function countriesList(countries) {
  refs.foundCountries.classList.add('is-hidden');
  refs.countryCard.classList.add('is-hidden');

  if (countries.length > 10) {
    errorNotification(
      'Too many matches found. Please enter a more specific query!',
    );
    return;
  }

  if (countries.length === 1) {
    renderCard(countries);
    return;
  }

  renderList(countries);
}

function onInput(event) {
  event.preventDefault();
  const searchCountry = event.target.value;
  refs.countryCard.classList.add('is-hidden');

  if (!searchCountry) {
    return;
  }

  fetchCountries(searchCountry)
    .then(countriesList)
    .catch(error => {
      errorNotification('Something went wrong');
      return error;
    });
}

function onClick(event) {
  event.preventDefault();
  const country = event.target.textContent;
  refs.foundCountries.classList.add('is-hidden');
  fetchCountries(country)
    .then(renderCard)
    .catch(error => {
      errorNotification('Something went wrong');
      return error;
    });
}
