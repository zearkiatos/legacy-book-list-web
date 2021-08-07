import { BOOKS_TYPES } from '../types';
const books = function () {
  return [
    { title: "Javacript: The Good Parts" },
    { title: "Harry Potter" },
    { title: "The Dark Tower" },
    { title: "Eloquent Ruby" },
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
