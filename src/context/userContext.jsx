import React from 'react';

export const UserContext = React.createContext('user');
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
