import React from 'react';

export const context = React.createContext('user');
export const UserProvider = context.Provider;
export const UserConsumer = context.Consumer;
