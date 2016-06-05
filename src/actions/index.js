export function selectBook(book) {
  // selectBook is an actioncreator and needs to reuturn
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
