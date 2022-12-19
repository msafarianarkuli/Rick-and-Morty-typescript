import { createContext, useEffect, useState } from 'react';
import { BookmarkType } from '../types/Bookmark.types';

type BookmarkContextType = {
  bookmarks: BookmarkType[];
  addAndRemoveToFavorites: (character: BookmarkType) => void;
  resetBookmark: () => void;
};

type BookmarkContextProvider = {
  children: React.ReactNode;
};

export const bookmarkContext = createContext(
  {} as BookmarkContextType
);

const BookmarkContext = ({ children }: BookmarkContextProvider) => {
  let favorites =
    JSON.parse(localStorage.getItem('bookmarks') as string) || [];
  const [bookmarks, setBookmarks] = useState(favorites);
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addAndRemoveToFavorites = (character: BookmarkType) => {
    const exist = bookmarks.some(
      (bookmark: BookmarkType) => bookmark.id === character.id
    );
    exist
      ? setBookmarks(
          bookmarks.filter(
            (bookmark: BookmarkType) => bookmark.id !== character.id
          )
        )
      : setBookmarks([...bookmarks, character]);
  };

  const resetBookmark = () => {
    setBookmarks([]);
  };

  return (
    <bookmarkContext.Provider
      value={{ bookmarks, addAndRemoveToFavorites, resetBookmark }}
    >
      {children}
    </bookmarkContext.Provider>
  );
};

export default BookmarkContext;
