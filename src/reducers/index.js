import {combineReducers} from 'redux';
import Books from './booksReducer';
import intrest from './intrestingReducer';
import news from './newsReducer';
import persons from './personsReducer';
import poetry from './poetryReducer';
import rasalay from './rasalayReducer';
import today from './todayReducer';

export default combineReducers({
    myBooks:Books,
    myIntrest:intrest,
    myNews:news,
    myPersons:persons,
    myPoetry:poetry,
    myRasalay:rasalay,
    myToday:today,
});