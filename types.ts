import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
};

/** Payload returned if login or signup is successful */
export type AuthPayload = {
  __typename?: 'AuthPayload';
  /** The current JWT token. Use in Authentication header */
  token?: Maybe<Scalars['String']>;
  /** The logged in user */
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create User for an account */
  createUser?: Maybe<User>;
  /** Login to an existing account */
  login?: Maybe<AuthPayload>;
  /** Signup for an account */
  signup?: Maybe<AuthPayload>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};

/** A User Profile */
export type Profile = {
  __typename?: 'Profile';
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  /** The first and last name of a user */
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

/** Profile Input for relational Create */
export type ProfileCreateInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

/** Input to Add a new user */
export type ProfileRelationalCreateInput = {
  create: ProfileCreateInput;
};

export type Query = {
  __typename?: 'Query';
  /** Returns the currently logged in user */
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

/** Input to create a role */
export type RoleCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Input to Add a role to a */
export type RoleRelationalCreateInput = {
  connect: Array<InputMaybe<RoleWhereUniqInput>>;
};

/** Find role By */
export type RoleWhereUniqInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Input required for a user to signup */
export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile: SignupProfileInput;
};

/** Input required for Profile Create on Signup. */
export type SignupProfileCreateInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

/** Input required for Profile on Signup. */
export type SignupProfileInput = {
  create: SignupProfileCreateInput;
};

/** Sort direction for filtering queries (ascending or descending) */
export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

/** A way to filter string fields. Meant to pass to prisma where clause */
export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** A User */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  profile?: Maybe<Profile>;
  roles: Array<UserRole>;
  updatedAt: Scalars['DateTime'];
};

/** Input to Add a new user */
export type UserCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile?: InputMaybe<ProfileRelationalCreateInput>;
  roles?: InputMaybe<RoleRelationalCreateInput>;
};

/** Order users by a specific field */
export type UserOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** User Roles */
export type UserRole = {
  __typename?: 'UserRole';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<Maybe<User>>>;
};

/** Input to find users based other fields */
export type UserWhereInput = {
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
};

/** Input to find users based on unique fields */
export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type FindUsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUsersQueryQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, email?: string | null | undefined, roles: Array<{ __typename?: 'UserRole', id: string, name: string }>, profile?: { __typename?: 'Profile', id: string, firstName: string, lastName: string } | null | undefined } | null | undefined> | null | undefined };

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token?: string | null | undefined, user?: { __typename?: 'User', id: string, email?: string | null | undefined, roles: Array<{ __typename?: 'UserRole', id: string, name: string }>, profile?: { __typename?: 'Profile', id: string, firstName: string, lastName: string, fullName?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type SignupMutationMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutationMutation = { __typename?: 'Mutation', signup?: { __typename?: 'AuthPayload', token?: string | null | undefined, user?: { __typename?: 'User', id: string, email?: string | null | undefined, roles: Array<{ __typename?: 'UserRole', id: string, name: string }>, profile?: { __typename?: 'Profile', id: string, firstName: string, lastName: string, fullName?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };


export const FindUsersQueryDocument = gql`
    query FIND_USERS_QUERY {
  users {
    id
    roles {
      id
      name
    }
    email
    profile {
      id
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useFindUsersQueryQuery__
 *
 * To run a query within a React component, call `useFindUsersQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUsersQueryQuery(baseOptions?: Apollo.QueryHookOptions<FindUsersQueryQuery, FindUsersQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUsersQueryQuery, FindUsersQueryQueryVariables>(FindUsersQueryDocument, options);
      }
export function useFindUsersQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersQueryQuery, FindUsersQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUsersQueryQuery, FindUsersQueryQueryVariables>(FindUsersQueryDocument, options);
        }
export type FindUsersQueryQueryHookResult = ReturnType<typeof useFindUsersQueryQuery>;
export type FindUsersQueryLazyQueryHookResult = ReturnType<typeof useFindUsersQueryLazyQuery>;
export type FindUsersQueryQueryResult = Apollo.QueryResult<FindUsersQueryQuery, FindUsersQueryQueryVariables>;
export const LoginMutationDocument = gql`
    mutation LOGIN_MUTATION($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      email
      roles {
        id
        name
      }
      profile {
        id
        firstName
        lastName
        fullName
      }
    }
  }
}
    `;
export type LoginMutationMutationFn = Apollo.MutationFunction<LoginMutationMutation, LoginMutationMutationVariables>;

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutationMutation, LoginMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutationMutation, LoginMutationMutationVariables>(LoginMutationDocument, options);
      }
export type LoginMutationMutationHookResult = ReturnType<typeof useLoginMutationMutation>;
export type LoginMutationMutationResult = Apollo.MutationResult<LoginMutationMutation>;
export type LoginMutationMutationOptions = Apollo.BaseMutationOptions<LoginMutationMutation, LoginMutationMutationVariables>;
export const SignupMutationDocument = gql`
    mutation SIGNUP_MUTATION($data: SignupInput!) {
  signup(data: $data) {
    token
    user {
      id
      email
      roles {
        id
        name
      }
      profile {
        id
        firstName
        lastName
        fullName
      }
    }
  }
}
    `;
export type SignupMutationMutationFn = Apollo.MutationFunction<SignupMutationMutation, SignupMutationMutationVariables>;

/**
 * __useSignupMutationMutation__
 *
 * To run a mutation, you first call `useSignupMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutationMutation, { data, loading, error }] = useSignupMutationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutationMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutationMutation, SignupMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutationMutation, SignupMutationMutationVariables>(SignupMutationDocument, options);
      }
export type SignupMutationMutationHookResult = ReturnType<typeof useSignupMutationMutation>;
export type SignupMutationMutationResult = Apollo.MutationResult<SignupMutationMutation>;
export type SignupMutationMutationOptions = Apollo.BaseMutationOptions<SignupMutationMutation, SignupMutationMutationVariables>;