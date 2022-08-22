import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
};

export type App = Node & {
  __typename?: 'App';
  appstoreUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  playstoreUrl?: Maybe<Scalars['String']>;
};

/** A condition to be used against `App` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AppCondition = {
  /** Checks for equality with the object’s `appstoreUrl` field. */
  appstoreUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `playstoreUrl` field. */
  playstoreUrl?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `App` */
export type AppInput = {
  appstoreUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  playstoreUrl?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `App`. Fields that are set will be updated. */
export type AppPatch = {
  appstoreUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  playstoreUrl?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `App` values. */
export type AppsConnection = {
  __typename?: 'AppsConnection';
  /** A list of edges which contains the `App` and cursor to aid in pagination. */
  edges: Array<AppsEdge>;
  /** A list of `App` objects. */
  nodes: Array<Maybe<App>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `App` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `App` edge in the connection. */
export type AppsEdge = {
  __typename?: 'AppsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `App` at the end of the edge. */
  node?: Maybe<App>;
};

/** Methods to use when ordering `App`. */
export enum AppsOrderBy {
  AppstoreUrlAsc = 'APPSTORE_URL_ASC',
  AppstoreUrlDesc = 'APPSTORE_URL_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PlaystoreUrlAsc = 'PLAYSTORE_URL_ASC',
  PlaystoreUrlDesc = 'PLAYSTORE_URL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `App` mutation. */
export type CreateAppInput = {
  /** The `App` to be created by this mutation. */
  app: AppInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `App` mutation. */
export type CreateAppPayload = {
  __typename?: 'CreateAppPayload';
  /** The `App` that was created by this mutation. */
  app?: Maybe<App>;
  /** An edge for our `App`. May be used by Relay 1. */
  appEdge?: Maybe<AppsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `App` mutation. */
export type CreateAppPayloadAppEdgeArgs = {
  orderBy?: InputMaybe<Array<AppsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
  /** Reads a single `UserSetting` that is related to this `User`. */
  userSettingByUserSettingsId?: Maybe<UserSetting>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the create `UserSetting` mutation. */
export type CreateUserSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `UserSetting` to be created by this mutation. */
  userSetting: UserSettingInput;
};

/** The output of our create `UserSetting` mutation. */
export type CreateUserSettingPayload = {
  __typename?: 'CreateUserSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserSetting` that was created by this mutation. */
  userSetting?: Maybe<UserSetting>;
  /** An edge for our `UserSetting`. May be used by Relay 1. */
  userSettingEdge?: Maybe<UserSettingsEdge>;
};


/** The output of our create `UserSetting` mutation. */
export type CreateUserSettingPayloadUserSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};

/** All input for the `deleteAppById` mutation. */
export type DeleteAppByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteApp` mutation. */
export type DeleteAppInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `App` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `App` mutation. */
export type DeleteAppPayload = {
  __typename?: 'DeleteAppPayload';
  /** The `App` that was deleted by this mutation. */
  app?: Maybe<App>;
  /** An edge for our `App`. May be used by Relay 1. */
  appEdge?: Maybe<AppsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAppId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `App` mutation. */
export type DeleteAppPayloadAppEdgeArgs = {
  orderBy?: InputMaybe<Array<AppsOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteUserBySub` mutation. */
export type DeleteUserBySubInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  sub: Scalars['String'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
  /** Reads a single `UserSetting` that is related to this `User`. */
  userSettingByUserSettingsId?: Maybe<UserSetting>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteUserSettingById` mutation. */
export type DeleteUserSettingByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteUserSetting` mutation. */
export type DeleteUserSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserSetting` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `UserSetting` mutation. */
export type DeleteUserSettingPayload = {
  __typename?: 'DeleteUserSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserSettingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserSetting` that was deleted by this mutation. */
  userSetting?: Maybe<UserSetting>;
  /** An edge for our `UserSetting`. May be used by Relay 1. */
  userSettingEdge?: Maybe<UserSettingsEdge>;
};


/** The output of our delete `UserSetting` mutation. */
export type DeleteUserSettingPayloadUserSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `App`. */
  createApp?: Maybe<CreateAppPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `UserSetting`. */
  createUserSetting?: Maybe<CreateUserSettingPayload>;
  /** Deletes a single `App` using its globally unique id. */
  deleteApp?: Maybe<DeleteAppPayload>;
  /** Deletes a single `App` using a unique key. */
  deleteAppById?: Maybe<DeleteAppPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserBySub?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserSetting` using its globally unique id. */
  deleteUserSetting?: Maybe<DeleteUserSettingPayload>;
  /** Deletes a single `UserSetting` using a unique key. */
  deleteUserSettingById?: Maybe<DeleteUserSettingPayload>;
  /** Updates a single `App` using its globally unique id and a patch. */
  updateApp?: Maybe<UpdateAppPayload>;
  /** Updates a single `App` using a unique key and a patch. */
  updateAppById?: Maybe<UpdateAppPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserBySub?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserSetting` using its globally unique id and a patch. */
  updateUserSetting?: Maybe<UpdateUserSettingPayload>;
  /** Updates a single `UserSetting` using a unique key and a patch. */
  updateUserSettingById?: Maybe<UpdateUserSettingPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAppArgs = {
  input: CreateAppInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserSettingArgs = {
  input: CreateUserSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAppArgs = {
  input: DeleteAppInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAppByIdArgs = {
  input: DeleteAppByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserBySubArgs = {
  input: DeleteUserBySubInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserSettingArgs = {
  input: DeleteUserSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserSettingByIdArgs = {
  input: DeleteUserSettingByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAppArgs = {
  input: UpdateAppInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAppByIdArgs = {
  input: UpdateAppByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserBySubArgs = {
  input: UpdateUserBySubInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserSettingArgs = {
  input: UpdateUserSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserSettingByIdArgs = {
  input: UpdateUserSettingByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `App`. */
  allApps?: Maybe<AppsConnection>;
  /** Reads and enables pagination through a set of `UserSetting`. */
  allUserSettings?: Maybe<UserSettingsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `App` using its globally unique `ID`. */
  app?: Maybe<App>;
  appById?: Maybe<App>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userById?: Maybe<User>;
  userBySub?: Maybe<User>;
  /** Reads a single `UserSetting` using its globally unique `ID`. */
  userSetting?: Maybe<UserSetting>;
  userSettingById?: Maybe<UserSetting>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAppsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AppCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AppsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUserSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserSettingCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAppArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAppByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserBySubArgs = {
  sub: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserSettingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserSettingByIdArgs = {
  id: Scalars['Int'];
};

/** All input for the `updateAppById` mutation. */
export type UpdateAppByIdInput = {
  /** An object where the defined keys will be set on the `App` being updated. */
  appPatch: AppPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `updateApp` mutation. */
export type UpdateAppInput = {
  /** An object where the defined keys will be set on the `App` being updated. */
  appPatch: AppPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `App` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `App` mutation. */
export type UpdateAppPayload = {
  __typename?: 'UpdateAppPayload';
  /** The `App` that was updated by this mutation. */
  app?: Maybe<App>;
  /** An edge for our `App`. May be used by Relay 1. */
  appEdge?: Maybe<AppsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `App` mutation. */
export type UpdateAppPayloadAppEdgeArgs = {
  orderBy?: InputMaybe<Array<AppsOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUserBySub` mutation. */
export type UpdateUserBySubInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  sub: Scalars['String'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
  /** Reads a single `UserSetting` that is related to this `User`. */
  userSettingByUserSettingsId?: Maybe<UserSetting>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `updateUserSettingById` mutation. */
export type UpdateUserSettingByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `UserSetting` being updated. */
  userSettingPatch: UserSettingPatch;
};

/** All input for the `updateUserSetting` mutation. */
export type UpdateUserSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserSetting` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `UserSetting` being updated. */
  userSettingPatch: UserSettingPatch;
};

/** The output of our update `UserSetting` mutation. */
export type UpdateUserSettingPayload = {
  __typename?: 'UpdateUserSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserSetting` that was updated by this mutation. */
  userSetting?: Maybe<UserSetting>;
  /** An edge for our `UserSetting`. May be used by Relay 1. */
  userSettingEdge?: Maybe<UserSettingsEdge>;
};


/** The output of our update `UserSetting` mutation. */
export type UpdateUserSettingPayloadUserSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  sub: Scalars['String'];
  type: Scalars['String'];
  /** Reads a single `UserSetting` that is related to this `User`. */
  userSettingByUserSettingsId?: Maybe<UserSetting>;
  userSettingsId: Scalars['Int'];
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sub` field. */
  sub?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userSettingsId` field. */
  userSettingsId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: InputMaybe<Scalars['Int']>;
  sub: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  userSettingToUserSettingsId?: InputMaybe<UserSettingsFkInput>;
  userSettingsId?: InputMaybe<Scalars['Int']>;
};

/** The globally unique `ID` look up for the row to connect. */
export type UserNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type UserNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `user` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOnUserForUserSettingsFkNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `userSetting` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `userSetting` being updated. */
  userSettingPatch: UserSettingPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserForUserSettingsFkUsingUserPkeyUpdate = {
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `user` being updated. */
  userPatch: UpdateUserOnUserForUserSettingsFkPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserForUserSettingsFkUsingUserSubUniqueUpdate = {
  sub: Scalars['String'];
  /** An object where the defined keys will be set on the `user` being updated. */
  userPatch: UpdateUserOnUserForUserSettingsFkPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: InputMaybe<Scalars['Int']>;
  sub?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userSettingToUserSettingsId?: InputMaybe<UserSettingsFkInput>;
  userSettingsId?: InputMaybe<Scalars['Int']>;
};

export type UserSetting = Node & {
  __typename?: 'UserSetting';
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `User`. */
  usersByUserSettingsId: UsersConnection;
};


export type UserSettingUsersByUserSettingsIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/**
 * A condition to be used against `UserSetting` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserSettingCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `UserSetting` */
export type UserSettingInput = {
  id?: InputMaybe<Scalars['Int']>;
  usersUsingId?: InputMaybe<UserSettingsFkInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type UserSettingNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `userSetting` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type UserSettingNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `userSetting` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserSettingOnUserForUserSettingsFkNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `user` being updated. */
  userPatch: UserPatch;
};

/** The fields on `userSetting` to look up the row to update. */
export type UserSettingOnUserForUserSettingsFkUsingUserSettingPkeyUpdate = {
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `userSetting` being updated. */
  userSettingPatch: UpdateUserSettingOnUserForUserSettingsFkPatch;
};

/** Represents an update to a `UserSetting`. Fields that are set will be updated. */
export type UserSettingPatch = {
  id?: InputMaybe<Scalars['Int']>;
  usersUsingId?: InputMaybe<UserSettingsFkInverseInput>;
};

/** The fields on `userSetting` to look up the row to connect. */
export type UserSettingUserSettingPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `userSetting` to look up the row to delete. */
export type UserSettingUserSettingPkeyDelete = {
  id: Scalars['Int'];
};

/** A connection to a list of `UserSetting` values. */
export type UserSettingsConnection = {
  __typename?: 'UserSettingsConnection';
  /** A list of edges which contains the `UserSetting` and cursor to aid in pagination. */
  edges: Array<UserSettingsEdge>;
  /** A list of `UserSetting` objects. */
  nodes: Array<Maybe<UserSetting>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserSetting` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `UserSetting` edge in the connection. */
export type UserSettingsEdge = {
  __typename?: 'UserSettingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserSetting` at the end of the edge. */
  node?: Maybe<UserSetting>;
};

/** Input for the nested mutation of `userSetting` in the `UserInput` mutation. */
export type UserSettingsFkInput = {
  /** The primary key(s) for `userSetting` for the far side of the relationship. */
  connectById?: InputMaybe<UserSettingUserSettingPkeyConnect>;
  /** The primary key(s) for `userSetting` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<UserSettingNodeIdConnect>;
  /** A `UserSettingInput` object that will be created and connected to this object. */
  create?: InputMaybe<UserSettingsFkUserSettingsCreateInput>;
  /** The primary key(s) for `userSetting` for the far side of the relationship. */
  deleteById?: InputMaybe<UserSettingUserSettingPkeyDelete>;
  /** The primary key(s) for `userSetting` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<UserSettingNodeIdDelete>;
  /** The primary key(s) and patch data for `userSetting` for the far side of the relationship. */
  updateById?: InputMaybe<UserSettingOnUserForUserSettingsFkUsingUserSettingPkeyUpdate>;
  /** The primary key(s) and patch data for `userSetting` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<UserOnUserForUserSettingsFkNodeIdUpdate>;
};

/** Input for the nested mutation of `user` in the `UserSettingInput` mutation. */
export type UserSettingsFkInverseInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<Array<UserUserPkeyConnect>>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<UserNodeIdConnect>>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectBySub?: InputMaybe<Array<UserUserSubUniqueConnect>>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<UserSettingsFkUserCreateInput>>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<UserUserPkeyDelete>>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<UserNodeIdDelete>>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteBySub?: InputMaybe<Array<UserUserSubUniqueDelete>>;
  /** Flag indicating whether all other `user` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<Array<UserOnUserForUserSettingsFkUsingUserPkeyUpdate>>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<UserSettingOnUserForUserSettingsFkNodeIdUpdate>>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateBySub?: InputMaybe<Array<UserOnUserForUserSettingsFkUsingUserSubUniqueUpdate>>;
};

/** The `user` to be created by this mutation. */
export type UserSettingsFkUserCreateInput = {
  id?: InputMaybe<Scalars['Int']>;
  sub: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  userSettingToUserSettingsId?: InputMaybe<UserSettingsFkInput>;
};

/** The `userSetting` to be created by this mutation. */
export type UserSettingsFkUserSettingsCreateInput = {
  id?: InputMaybe<Scalars['Int']>;
  usersUsingId?: InputMaybe<UserSettingsFkInverseInput>;
};

/** Methods to use when ordering `UserSetting`. */
export enum UserSettingsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The fields on `user` to look up the row to connect. */
export type UserUserPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUserPkeyDelete = {
  id: Scalars['Int'];
};

/** The fields on `user` to look up the row to connect. */
export type UserUserSubUniqueConnect = {
  sub: Scalars['String'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUserSubUniqueDelete = {
  sub: Scalars['String'];
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubAsc = 'SUB_ASC',
  SubDesc = 'SUB_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UserSettingsIdAsc = 'USER_SETTINGS_ID_ASC',
  UserSettingsIdDesc = 'USER_SETTINGS_ID_DESC'
}

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnUserForUserSettingsFkPatch = {
  id?: InputMaybe<Scalars['Int']>;
  sub?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userSettingToUserSettingsId?: InputMaybe<UserSettingsFkInput>;
};

/** An object where the defined keys will be set on the `userSetting` being updated. */
export type UpdateUserSettingOnUserForUserSettingsFkPatch = {
  id?: InputMaybe<Scalars['Int']>;
  usersUsingId?: InputMaybe<UserSettingsFkInverseInput>;
};

export type GetAppsQueryVariables = Exact<{
  top?: InputMaybe<Scalars['Int']>;
}>;


export type GetAppsQuery = { __typename?: 'Query', allApps?: { __typename?: 'AppsConnection', nodes: Array<{ __typename?: 'App', id: number, name: string } | null> } | null };

export type AddAppMutationVariables = Exact<{
  input: CreateAppInput;
}>;


export type AddAppMutation = { __typename?: 'Mutation', createApp?: { __typename?: 'CreateAppPayload', app?: { __typename?: 'App', name: string, id: number } | null } | null };

export type DeleteAppMutationVariables = Exact<{
  deleteInput: DeleteAppByIdInput;
}>;


export type DeleteAppMutation = { __typename?: 'Mutation', deleteAppById?: { __typename?: 'DeleteAppPayload', clientMutationId?: string | null, deletedAppId?: string | null } | null };

export type GetUserBySubQueryVariables = Exact<{
  sub: Scalars['String'];
}>;


export type GetUserBySubQuery = { __typename?: 'Query', userBySub?: { __typename?: 'User', id: number, type: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', allUsers?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', id: number, sub: string, type: string } | null> } | null };

export type CreateUserMutationVariables = Exact<{
  sub: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', user?: { __typename?: 'User', id: number, type: string } | null } | null };


export const GetAppsDocument = gql`
    query GetApps($top: Int) {
  allApps(first: $top) {
    nodes {
      id
      name
    }
  }
}
    `;
export type GetAppsQueryResult = Apollo.QueryResult<GetAppsQuery, GetAppsQueryVariables>;
export const AddAppDocument = gql`
    mutation AddApp($input: CreateAppInput!) {
  createApp(input: $input) {
    app {
      name
      id
    }
  }
}
    `;
export type AddAppMutationFn = Apollo.MutationFunction<AddAppMutation, AddAppMutationVariables>;
export type AddAppMutationResult = Apollo.MutationResult<AddAppMutation>;
export type AddAppMutationOptions = Apollo.BaseMutationOptions<AddAppMutation, AddAppMutationVariables>;
export const DeleteAppDocument = gql`
    mutation DeleteApp($deleteInput: DeleteAppByIdInput!) {
  deleteAppById(input: $deleteInput) {
    clientMutationId
    deletedAppId
  }
}
    `;
export type DeleteAppMutationFn = Apollo.MutationFunction<DeleteAppMutation, DeleteAppMutationVariables>;
export type DeleteAppMutationResult = Apollo.MutationResult<DeleteAppMutation>;
export type DeleteAppMutationOptions = Apollo.BaseMutationOptions<DeleteAppMutation, DeleteAppMutationVariables>;
export const GetUserBySubDocument = gql`
    query GetUserBySub($sub: String!) {
  userBySub(sub: $sub) {
    id
    type
  }
}
    `;
export type GetUserBySubQueryResult = Apollo.QueryResult<GetUserBySubQuery, GetUserBySubQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  allUsers {
    nodes {
      id
      sub
      type
    }
  }
}
    `;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($sub: String!, $type: String = "basic") {
  createUser(
    input: {user: {sub: $sub, type: $type, userSettingToUserSettingsId: {create: {}}}}
  ) {
    user {
      id
      type
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;