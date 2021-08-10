import { combineReducers } from "redux";
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
    books: booksReducer.books,
    activeBook: booksReducer.activeBook
});

export default rootReducer;
