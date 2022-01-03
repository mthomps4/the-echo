import * as React from 'react';
import { MutationLoginArgs, useLoginMutation } from '../../types';
import {
  getToken,
  setToken,
  removeToken,
  removeUser,
  setUser,
  getUser,
} from '../utils/asyncStorage';

const AuthContext = React.createContext({
  status: 'idle',
  authToken: null,
  currentUser: null,
  login: (data, errorHandler) => {},
  signUp: (data) => {},
  signOut: () => {},
});

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext Error');
  }

  return context;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_OUT':
      return {
        ...state,
        status: 'signOut',
        authToken: null,
        currentUser: null,
      };
    case 'SIGN_IN':
      return {
        ...state,
        status: 'login',
        authToken: action.token,
        currentUser: action.user,
      };
    case 'SIGN_UP':
      return {
        ...state,
        status: 'signUp',
        authToken: action.token,
        currentUser: action.user,
      };
  }
};

export const AuthProvider = ({ children }) => {
  const [loginMutation] = useLoginMutation();

  const [state, dispatch] = React.useReducer(reducer, {
    status: 'idle',
    authToken: null,
    currentUser: null,
  });

  React.useEffect(() => {
    const initState = async () => {
      try {
        const authToken = await getToken();
        const currentUser = await getUser();

        if (authToken !== null && currentUser !== null) {
          dispatch({ type: 'SIGN_IN', token: authToken, user: currentUser });
        } else {
          dispatch({ type: 'SIGN_OUT' });
        }
      } catch (e) {
        console.log(e);
        dispatch({ type: 'SIGN_OUT' });
      }
    };

    initState();
  }, []);

  const actions = React.useMemo(
    () => ({
      signUp: async (data: MutationLoginArgs, errorHandler) => {
        // THIS SHOULD TAKE DATA and hit GQL

        const token = 'dummy_token';
        const user = {
          firstName: 'Jim',
          lastName: 'Bob',
        };

        dispatch({ type: 'SIGN_UP', token, user });
        await setToken(token);
        await setUser(user);
      },
      login: async (loginData: MutationLoginArgs, errorHandler = (e) => {}) => {
        // THIS SHOULD TAKE DATA and hit GQL
        try {
          const { data, errors } = await loginMutation({ variables: loginData });

          if (errors) {
            throw errors;
          }

          const {
            login: { user, token },
          } = data;

          dispatch({ type: 'SIGN_UP', token, user });
          await setToken(token);
          await setUser(user);
        } catch (e) {
          console.error('LOGIN ERROR');
          console.error(e);
          errorHandler(e);
        }
      },
      signOut: async () => {
        // Clear all the things...
        dispatch({ type: 'SIGN_OUT' });
        await removeToken();
        await removeUser();
      },
    }),
    [state, dispatch]
  );

  return <AuthContext.Provider value={{ ...state, ...actions }}>{children}</AuthContext.Provider>;
};
