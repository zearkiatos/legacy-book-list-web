import { BOOKS_TYPES } from '../types';
function selectBook(book) {
    return {
        type: BOOKS_TYPES.BOOK_SELECTED,
        payload: book
    };
}

export default {
  selectBook,
};
