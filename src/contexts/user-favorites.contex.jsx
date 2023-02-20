import { useEffect, createContext, useState, useReducer } from "react";

export const UserFavoritesContext = createContext({
  userFavorites: [],
  addUserFavorites: () => null,
  isUserFavorite: () => false,
  favoritesCount: 0,
});

const INITIAL_STATE = {
  userFavorites: [],
  favoritesCount: 0,
};

const favoritesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_FAVORITE":
      return { ...state, ...payload };

    default:
      throw new Error(`Unhandled type ${type} of favorites`);
  }
};

export const UserFavoritesProvider = ({ children }) => {
  const [{ userFavorites, favoritesCount }, dipatch] = useReducer(
    favoritesReducer,
    INITIAL_STATE
  );

  const updateUserFavorites = (newUserFavorites) => {
    const newFavoriteCount = newUserFavorites.length;
    dipatch({
      type: "SET_USER_FAVORITE",
      payload: {
        userFavorites: newUserFavorites,
        favoritesCount: newFavoriteCount,
      },
    });
  };

  const addUserFavorites = (property) => {
    const newUserserFavorite = [...userFavorites, property];
    updateUserFavorites(newUserserFavorite);
  };

  const removeUserFavorite = (property) => {
    const newUserserFavorite = userFavorites.filter(
      (userFavorite) => userFavorite.id !== property.id
    );
    updateUserFavorites(newUserserFavorite);
  };

  const isUserFavorite = (property) => {
    const favoriteProperty = userFavorites.find(
      (userFavorite) => userFavorite.id === property.id
    );
    if (favoriteProperty) return true;
    return false;
  };

  const value = {
    addUserFavorites,
    removeUserFavorite,
    isUserFavorite,
    favoritesCount,
    userFavorites,
  };

  return (
    <UserFavoritesContext.Provider value={value}>
      {children}
    </UserFavoritesContext.Provider>
  );
};
