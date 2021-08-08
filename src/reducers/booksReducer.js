import { BOOKS_TYPES } from '../types';
const books = function () {
  return [
    { title: "Javacript: The Good Parts", pages: 101 },
    { title: "Harry Potter", pages: 39 },
    { title: "The Dark Tower", pages: 85 },
    { title: "Eloquent Ruby", pages: 1 },
  ];
};

const activeBook = function (state = null, action) {
  switch (action.type) {
    case BOOKS_TYPES.BOOK_SELECTED: {
      return action.payload
    }
  }
  return state;
};

export default {
  books,
  activeBook
}
