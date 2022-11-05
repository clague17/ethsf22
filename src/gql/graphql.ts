/* eslint-disable */
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
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type AccessRole = {
  __typename?: 'AccessRole';
  contractAddress: Scalars['String'];
  granted: Scalars['Boolean'];
  id: Scalars['ID'];
  member: User;
  role: Scalars['Bytes'];
};

export type AccessRole_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contractAddress?: InputMaybe<Scalars['String']>;
  contractAddress_contains?: InputMaybe<Scalars['String']>;
  contractAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_gt?: InputMaybe<Scalars['String']>;
  contractAddress_gte?: InputMaybe<Scalars['String']>;
  contractAddress_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_lt?: InputMaybe<Scalars['String']>;
  contractAddress_lte?: InputMaybe<Scalars['String']>;
  contractAddress_not?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  granted?: InputMaybe<Scalars['Boolean']>;
  granted_in?: InputMaybe<Array<Scalars['Boolean']>>;
  granted_not?: InputMaybe<Scalars['Boolean']>;
  granted_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  member?: InputMaybe<Scalars['String']>;
  member_?: InputMaybe<User_Filter>;
  member_contains?: InputMaybe<Scalars['String']>;
  member_contains_nocase?: InputMaybe<Scalars['String']>;
  member_ends_with?: InputMaybe<Scalars['String']>;
  member_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_gt?: InputMaybe<Scalars['String']>;
  member_gte?: InputMaybe<Scalars['String']>;
  member_in?: InputMaybe<Array<Scalars['String']>>;
  member_lt?: InputMaybe<Scalars['String']>;
  member_lte?: InputMaybe<Scalars['String']>;
  member_not?: InputMaybe<Scalars['String']>;
  member_not_contains?: InputMaybe<Scalars['String']>;
  member_not_contains_nocase?: InputMaybe<Scalars['String']>;
  member_not_ends_with?: InputMaybe<Scalars['String']>;
  member_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_not_in?: InputMaybe<Array<Scalars['String']>>;
  member_not_starts_with?: InputMaybe<Scalars['String']>;
  member_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  member_starts_with?: InputMaybe<Scalars['String']>;
  member_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AccessRole_OrderBy {
  ContractAddress = 'contractAddress',
  Granted = 'granted',
  Id = 'id',
  Member = 'member',
  Role = 'role'
}

export type Aggregation = {
  __typename?: 'Aggregation';
  id: Scalars['ID'];
  key: Scalars['String'];
  value: Scalars['BigInt'];
};

export type Aggregation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['String']>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Aggregation_OrderBy {
  Id = 'id',
  Key = 'key',
  Value = 'value'
}

export type BatchComment = {
  __typename?: 'BatchComment';
  batch: BatchToken;
  comment: Scalars['String'];
  id: Scalars['ID'];
  sender?: Maybe<User>;
};

export type BatchComment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  batch?: InputMaybe<Scalars['String']>;
  batch_?: InputMaybe<BatchToken_Filter>;
  batch_contains?: InputMaybe<Scalars['String']>;
  batch_contains_nocase?: InputMaybe<Scalars['String']>;
  batch_ends_with?: InputMaybe<Scalars['String']>;
  batch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  batch_gt?: InputMaybe<Scalars['String']>;
  batch_gte?: InputMaybe<Scalars['String']>;
  batch_in?: InputMaybe<Array<Scalars['String']>>;
  batch_lt?: InputMaybe<Scalars['String']>;
  batch_lte?: InputMaybe<Scalars['String']>;
  batch_not?: InputMaybe<Scalars['String']>;
  batch_not_contains?: InputMaybe<Scalars['String']>;
  batch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  batch_not_ends_with?: InputMaybe<Scalars['String']>;
  batch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  batch_not_in?: InputMaybe<Array<Scalars['String']>>;
  batch_not_starts_with?: InputMaybe<Scalars['String']>;
  batch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  batch_starts_with?: InputMaybe<Scalars['String']>;
  batch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  comment_contains?: InputMaybe<Scalars['String']>;
  comment_contains_nocase?: InputMaybe<Scalars['String']>;
  comment_ends_with?: InputMaybe<Scalars['String']>;
  comment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  comment_gt?: InputMaybe<Scalars['String']>;
  comment_gte?: InputMaybe<Scalars['String']>;
  comment_in?: InputMaybe<Array<Scalars['String']>>;
  comment_lt?: InputMaybe<Scalars['String']>;
  comment_lte?: InputMaybe<Scalars['String']>;
  comment_not?: InputMaybe<Scalars['String']>;
  comment_not_contains?: InputMaybe<Scalars['String']>;
  comment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  comment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  comment_not_in?: InputMaybe<Array<Scalars['String']>>;
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  comment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  comment_starts_with?: InputMaybe<Scalars['String']>;
  comment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sender?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<User_Filter>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BatchComment_OrderBy {
  Batch = 'batch',
  Comment = 'comment',
  Id = 'id',
  Sender = 'sender'
}

export type BatchToken = {
  __typename?: 'BatchToken';
  aggregated?: Maybe<Scalars['Boolean']>;
  comments: Array<BatchComment>;
  confirmationStatus: Scalars['Int'];
  confirmationStatusLastUpdated: Scalars['BigInt'];
  contentURI?: Maybe<Scalars['String']>;
  creator: User;
  id: Scalars['ID'];
  owner: User;
  projectVintage?: Maybe<ProjectVintage>;
  quantity?: Maybe<Scalars['BigInt']>;
  serialNumber?: Maybe<Scalars['String']>;
  statusUpdates: Array<BatchTokenStatusUpdate>;
  timestamp: Scalars['BigInt'];
  tx: Scalars['String'];
};


export type BatchTokenCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchComment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BatchComment_Filter>;
};


export type BatchTokenStatusUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchTokenStatusUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BatchTokenStatusUpdate_Filter>;
};

export type BatchTokenStatusUpdate = {
  __typename?: 'BatchTokenStatusUpdate';
  batch: BatchToken;
  id: Scalars['ID'];
  newConfirmationStatus: Scalars['Int'];
  oldConfirmationStatus: Scalars['Int'];
  timestamp: Scalars['BigInt'];
  updater: User;
};

export type BatchTokenStatusUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  batch?: InputMaybe<Scalars['String']>;
  batch_?: InputMaybe<BatchToken_Filter>;
  batch_contains?: InputMaybe<Scalars['String']>;
  batch_contains_nocase?: InputMaybe<Scalars['String']>;
  batch_ends_with?: InputMaybe<Scalars['String']>;
  batch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  batch_gt?: InputMaybe<Scalars['String']>;
  batch_gte?: InputMaybe<Scalars['String']>;
  batch_in?: InputMaybe<Array<Scalars['String']>>;
  batch_lt?: InputMaybe<Scalars['String']>;
  batch_lte?: InputMaybe<Scalars['String']>;
  batch_not?: InputMaybe<Scalars['String']>;
  batch_not_contains?: InputMaybe<Scalars['String']>;
  batch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  batch_not_ends_with?: InputMaybe<Scalars['String']>;
  batch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  batch_not_in?: InputMaybe<Array<Scalars['String']>>;
  batch_not_starts_with?: InputMaybe<Scalars['String']>;
  batch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  batch_starts_with?: InputMaybe<Scalars['String']>;
  batch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newConfirmationStatus?: InputMaybe<Scalars['Int']>;
  newConfirmationStatus_gt?: InputMaybe<Scalars['Int']>;
  newConfirmationStatus_gte?: InputMaybe<Scalars['Int']>;
  newConfirmationStatus_in?: InputMaybe<Array<Scalars['Int']>>;
  newConfirmationStatus_lt?: InputMaybe<Scalars['Int']>;
  newConfirmationStatus_lte?: InputMaybe<Scalars['Int']>;
  newConfirmationStatus_not?: InputMaybe<Scalars['Int']>;
  newConfirmationStatus_not_in?: InputMaybe<Array<Scalars['Int']>>;
  oldConfirmationStatus?: InputMaybe<Scalars['Int']>;
  oldConfirmationStatus_gt?: InputMaybe<Scalars['Int']>;
  oldConfirmationStatus_gte?: InputMaybe<Scalars['Int']>;
  oldConfirmationStatus_in?: InputMaybe<Array<Scalars['Int']>>;
  oldConfirmationStatus_lt?: InputMaybe<Scalars['Int']>;
  oldConfirmationStatus_lte?: InputMaybe<Scalars['Int']>;
  oldConfirmationStatus_not?: InputMaybe<Scalars['Int']>;
  oldConfirmationStatus_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updater?: InputMaybe<Scalars['String']>;
  updater_?: InputMaybe<User_Filter>;
  updater_contains?: InputMaybe<Scalars['String']>;
  updater_contains_nocase?: InputMaybe<Scalars['String']>;
  updater_ends_with?: InputMaybe<Scalars['String']>;
  updater_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updater_gt?: InputMaybe<Scalars['String']>;
  updater_gte?: InputMaybe<Scalars['String']>;
  updater_in?: InputMaybe<Array<Scalars['String']>>;
  updater_lt?: InputMaybe<Scalars['String']>;
  updater_lte?: InputMaybe<Scalars['String']>;
  updater_not?: InputMaybe<Scalars['String']>;
  updater_not_contains?: InputMaybe<Scalars['String']>;
  updater_not_contains_nocase?: InputMaybe<Scalars['String']>;
  updater_not_ends_with?: InputMaybe<Scalars['String']>;
  updater_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updater_not_in?: InputMaybe<Array<Scalars['String']>>;
  updater_not_starts_with?: InputMaybe<Scalars['String']>;
  updater_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updater_starts_with?: InputMaybe<Scalars['String']>;
  updater_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BatchTokenStatusUpdate_OrderBy {
  Batch = 'batch',
  Id = 'id',
  NewConfirmationStatus = 'newConfirmationStatus',
  OldConfirmationStatus = 'oldConfirmationStatus',
  Timestamp = 'timestamp',
  Updater = 'updater'
}

export type BatchToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aggregated?: InputMaybe<Scalars['Boolean']>;
  aggregated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  aggregated_not?: InputMaybe<Scalars['Boolean']>;
  aggregated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  comments_?: InputMaybe<BatchComment_Filter>;
  confirmationStatus?: InputMaybe<Scalars['Int']>;
  confirmationStatusLastUpdated?: InputMaybe<Scalars['BigInt']>;
  confirmationStatusLastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  confirmationStatusLastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  confirmationStatusLastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  confirmationStatusLastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  confirmationStatusLastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  confirmationStatusLastUpdated_not?: InputMaybe<Scalars['BigInt']>;
  confirmationStatusLastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  confirmationStatus_gt?: InputMaybe<Scalars['Int']>;
  confirmationStatus_gte?: InputMaybe<Scalars['Int']>;
  confirmationStatus_in?: InputMaybe<Array<Scalars['Int']>>;
  confirmationStatus_lt?: InputMaybe<Scalars['Int']>;
  confirmationStatus_lte?: InputMaybe<Scalars['Int']>;
  confirmationStatus_not?: InputMaybe<Scalars['Int']>;
  confirmationStatus_not_in?: InputMaybe<Array<Scalars['Int']>>;
  contentURI?: InputMaybe<Scalars['String']>;
  contentURI_contains?: InputMaybe<Scalars['String']>;
  contentURI_contains_nocase?: InputMaybe<Scalars['String']>;
  contentURI_ends_with?: InputMaybe<Scalars['String']>;
  contentURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_gt?: InputMaybe<Scalars['String']>;
  contentURI_gte?: InputMaybe<Scalars['String']>;
  contentURI_in?: InputMaybe<Array<Scalars['String']>>;
  contentURI_lt?: InputMaybe<Scalars['String']>;
  contentURI_lte?: InputMaybe<Scalars['String']>;
  contentURI_not?: InputMaybe<Scalars['String']>;
  contentURI_not_contains?: InputMaybe<Scalars['String']>;
  contentURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_ends_with?: InputMaybe<Scalars['String']>;
  contentURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  contentURI_not_starts_with?: InputMaybe<Scalars['String']>;
  contentURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_starts_with?: InputMaybe<Scalars['String']>;
  contentURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage?: InputMaybe<Scalars['String']>;
  projectVintage_?: InputMaybe<ProjectVintage_Filter>;
  projectVintage_contains?: InputMaybe<Scalars['String']>;
  projectVintage_contains_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_ends_with?: InputMaybe<Scalars['String']>;
  projectVintage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_gt?: InputMaybe<Scalars['String']>;
  projectVintage_gte?: InputMaybe<Scalars['String']>;
  projectVintage_in?: InputMaybe<Array<Scalars['String']>>;
  projectVintage_lt?: InputMaybe<Scalars['String']>;
  projectVintage_lte?: InputMaybe<Scalars['String']>;
  projectVintage_not?: InputMaybe<Scalars['String']>;
  projectVintage_not_contains?: InputMaybe<Scalars['String']>;
  projectVintage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_not_ends_with?: InputMaybe<Scalars['String']>;
  projectVintage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_not_in?: InputMaybe<Array<Scalars['String']>>;
  projectVintage_not_starts_with?: InputMaybe<Scalars['String']>;
  projectVintage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_starts_with?: InputMaybe<Scalars['String']>;
  projectVintage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['BigInt']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']>;
  quantity_not?: InputMaybe<Scalars['BigInt']>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  serialNumber?: InputMaybe<Scalars['String']>;
  serialNumber_contains?: InputMaybe<Scalars['String']>;
  serialNumber_contains_nocase?: InputMaybe<Scalars['String']>;
  serialNumber_ends_with?: InputMaybe<Scalars['String']>;
  serialNumber_ends_with_nocase?: InputMaybe<Scalars['String']>;
  serialNumber_gt?: InputMaybe<Scalars['String']>;
  serialNumber_gte?: InputMaybe<Scalars['String']>;
  serialNumber_in?: InputMaybe<Array<Scalars['String']>>;
  serialNumber_lt?: InputMaybe<Scalars['String']>;
  serialNumber_lte?: InputMaybe<Scalars['String']>;
  serialNumber_not?: InputMaybe<Scalars['String']>;
  serialNumber_not_contains?: InputMaybe<Scalars['String']>;
  serialNumber_not_contains_nocase?: InputMaybe<Scalars['String']>;
  serialNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  serialNumber_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  serialNumber_not_in?: InputMaybe<Array<Scalars['String']>>;
  serialNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  serialNumber_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  serialNumber_starts_with?: InputMaybe<Scalars['String']>;
  serialNumber_starts_with_nocase?: InputMaybe<Scalars['String']>;
  statusUpdates_?: InputMaybe<BatchTokenStatusUpdate_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tx?: InputMaybe<Scalars['String']>;
  tx_contains?: InputMaybe<Scalars['String']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_ends_with?: InputMaybe<Scalars['String']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tx_gt?: InputMaybe<Scalars['String']>;
  tx_gte?: InputMaybe<Scalars['String']>;
  tx_in?: InputMaybe<Array<Scalars['String']>>;
  tx_lt?: InputMaybe<Scalars['String']>;
  tx_lte?: InputMaybe<Scalars['String']>;
  tx_not?: InputMaybe<Scalars['String']>;
  tx_not_contains?: InputMaybe<Scalars['String']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tx_starts_with?: InputMaybe<Scalars['String']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BatchToken_OrderBy {
  Aggregated = 'aggregated',
  Comments = 'comments',
  ConfirmationStatus = 'confirmationStatus',
  ConfirmationStatusLastUpdated = 'confirmationStatusLastUpdated',
  ContentUri = 'contentURI',
  Creator = 'creator',
  Id = 'id',
  Owner = 'owner',
  ProjectVintage = 'projectVintage',
  Quantity = 'quantity',
  SerialNumber = 'serialNumber',
  StatusUpdates = 'statusUpdates',
  Timestamp = 'timestamp',
  Tx = 'tx'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BridgeTokenRequest = {
  __typename?: 'BridgeTokenRequest';
  amount: Scalars['BigInt'];
  bridger: User;
  id: Scalars['ID'];
  originDomain: Scalars['BigInt'];
  receivedTimestamp?: Maybe<Scalars['BigInt']>;
  receivedToken?: Maybe<ToucanToken>;
  receivedTx?: Maybe<Scalars['String']>;
  requesthash: Scalars['Bytes'];
  sentTimestamp?: Maybe<Scalars['BigInt']>;
  sentToken?: Maybe<ToucanToken>;
  sentTx?: Maybe<Scalars['String']>;
  toDomain: Scalars['BigInt'];
};

export type BridgeTokenRequest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridger?: InputMaybe<Scalars['String']>;
  bridger_?: InputMaybe<User_Filter>;
  bridger_contains?: InputMaybe<Scalars['String']>;
  bridger_contains_nocase?: InputMaybe<Scalars['String']>;
  bridger_ends_with?: InputMaybe<Scalars['String']>;
  bridger_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bridger_gt?: InputMaybe<Scalars['String']>;
  bridger_gte?: InputMaybe<Scalars['String']>;
  bridger_in?: InputMaybe<Array<Scalars['String']>>;
  bridger_lt?: InputMaybe<Scalars['String']>;
  bridger_lte?: InputMaybe<Scalars['String']>;
  bridger_not?: InputMaybe<Scalars['String']>;
  bridger_not_contains?: InputMaybe<Scalars['String']>;
  bridger_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bridger_not_ends_with?: InputMaybe<Scalars['String']>;
  bridger_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bridger_not_in?: InputMaybe<Array<Scalars['String']>>;
  bridger_not_starts_with?: InputMaybe<Scalars['String']>;
  bridger_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bridger_starts_with?: InputMaybe<Scalars['String']>;
  bridger_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receivedTimestamp?: InputMaybe<Scalars['BigInt']>;
  receivedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  receivedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  receivedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receivedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  receivedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  receivedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  receivedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receivedToken?: InputMaybe<Scalars['String']>;
  receivedToken_?: InputMaybe<ToucanToken_Filter>;
  receivedToken_contains?: InputMaybe<Scalars['String']>;
  receivedToken_contains_nocase?: InputMaybe<Scalars['String']>;
  receivedToken_ends_with?: InputMaybe<Scalars['String']>;
  receivedToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receivedToken_gt?: InputMaybe<Scalars['String']>;
  receivedToken_gte?: InputMaybe<Scalars['String']>;
  receivedToken_in?: InputMaybe<Array<Scalars['String']>>;
  receivedToken_lt?: InputMaybe<Scalars['String']>;
  receivedToken_lte?: InputMaybe<Scalars['String']>;
  receivedToken_not?: InputMaybe<Scalars['String']>;
  receivedToken_not_contains?: InputMaybe<Scalars['String']>;
  receivedToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receivedToken_not_ends_with?: InputMaybe<Scalars['String']>;
  receivedToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receivedToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  receivedToken_not_starts_with?: InputMaybe<Scalars['String']>;
  receivedToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receivedToken_starts_with?: InputMaybe<Scalars['String']>;
  receivedToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receivedTx?: InputMaybe<Scalars['String']>;
  receivedTx_contains?: InputMaybe<Scalars['String']>;
  receivedTx_contains_nocase?: InputMaybe<Scalars['String']>;
  receivedTx_ends_with?: InputMaybe<Scalars['String']>;
  receivedTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receivedTx_gt?: InputMaybe<Scalars['String']>;
  receivedTx_gte?: InputMaybe<Scalars['String']>;
  receivedTx_in?: InputMaybe<Array<Scalars['String']>>;
  receivedTx_lt?: InputMaybe<Scalars['String']>;
  receivedTx_lte?: InputMaybe<Scalars['String']>;
  receivedTx_not?: InputMaybe<Scalars['String']>;
  receivedTx_not_contains?: InputMaybe<Scalars['String']>;
  receivedTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receivedTx_not_ends_with?: InputMaybe<Scalars['String']>;
  receivedTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receivedTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  receivedTx_not_starts_with?: InputMaybe<Scalars['String']>;
  receivedTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receivedTx_starts_with?: InputMaybe<Scalars['String']>;
  receivedTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requesthash?: InputMaybe<Scalars['Bytes']>;
  requesthash_contains?: InputMaybe<Scalars['Bytes']>;
  requesthash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  requesthash_not?: InputMaybe<Scalars['Bytes']>;
  requesthash_not_contains?: InputMaybe<Scalars['Bytes']>;
  requesthash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sentTimestamp?: InputMaybe<Scalars['BigInt']>;
  sentTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  sentTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  sentTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sentTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  sentTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  sentTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  sentTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sentToken?: InputMaybe<Scalars['String']>;
  sentToken_?: InputMaybe<ToucanToken_Filter>;
  sentToken_contains?: InputMaybe<Scalars['String']>;
  sentToken_contains_nocase?: InputMaybe<Scalars['String']>;
  sentToken_ends_with?: InputMaybe<Scalars['String']>;
  sentToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sentToken_gt?: InputMaybe<Scalars['String']>;
  sentToken_gte?: InputMaybe<Scalars['String']>;
  sentToken_in?: InputMaybe<Array<Scalars['String']>>;
  sentToken_lt?: InputMaybe<Scalars['String']>;
  sentToken_lte?: InputMaybe<Scalars['String']>;
  sentToken_not?: InputMaybe<Scalars['String']>;
  sentToken_not_contains?: InputMaybe<Scalars['String']>;
  sentToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sentToken_not_ends_with?: InputMaybe<Scalars['String']>;
  sentToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sentToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  sentToken_not_starts_with?: InputMaybe<Scalars['String']>;
  sentToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sentToken_starts_with?: InputMaybe<Scalars['String']>;
  sentToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sentTx?: InputMaybe<Scalars['String']>;
  sentTx_contains?: InputMaybe<Scalars['String']>;
  sentTx_contains_nocase?: InputMaybe<Scalars['String']>;
  sentTx_ends_with?: InputMaybe<Scalars['String']>;
  sentTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sentTx_gt?: InputMaybe<Scalars['String']>;
  sentTx_gte?: InputMaybe<Scalars['String']>;
  sentTx_in?: InputMaybe<Array<Scalars['String']>>;
  sentTx_lt?: InputMaybe<Scalars['String']>;
  sentTx_lte?: InputMaybe<Scalars['String']>;
  sentTx_not?: InputMaybe<Scalars['String']>;
  sentTx_not_contains?: InputMaybe<Scalars['String']>;
  sentTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sentTx_not_ends_with?: InputMaybe<Scalars['String']>;
  sentTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sentTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  sentTx_not_starts_with?: InputMaybe<Scalars['String']>;
  sentTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sentTx_starts_with?: InputMaybe<Scalars['String']>;
  sentTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  toDomain?: InputMaybe<Scalars['BigInt']>;
  toDomain_gt?: InputMaybe<Scalars['BigInt']>;
  toDomain_gte?: InputMaybe<Scalars['BigInt']>;
  toDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toDomain_lt?: InputMaybe<Scalars['BigInt']>;
  toDomain_lte?: InputMaybe<Scalars['BigInt']>;
  toDomain_not?: InputMaybe<Scalars['BigInt']>;
  toDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum BridgeTokenRequest_OrderBy {
  Amount = 'amount',
  Bridger = 'bridger',
  Id = 'id',
  OriginDomain = 'originDomain',
  ReceivedTimestamp = 'receivedTimestamp',
  ReceivedToken = 'receivedToken',
  ReceivedTx = 'receivedTx',
  Requesthash = 'requesthash',
  SentTimestamp = 'sentTimestamp',
  SentToken = 'sentToken',
  SentTx = 'sentTx',
  ToDomain = 'toDomain'
}

export type Deposit = {
  __typename?: 'Deposit';
  amount: Scalars['BigInt'];
  creator: User;
  id: Scalars['ID'];
  pool: Scalars['String'];
  timestamp: Scalars['BigInt'];
  token: Tco2Token;
};

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creator?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Tco2Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Deposit_OrderBy {
  Amount = 'amount',
  Creator = 'creator',
  Id = 'id',
  Pool = 'pool',
  Timestamp = 'timestamp',
  Token = 'token'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PooledTco2Token = {
  __typename?: 'PooledTCO2Token';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  poolAddress: Scalars['String'];
  token: Tco2Token;
};

export type PooledTco2Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolAddress?: InputMaybe<Scalars['String']>;
  poolAddress_contains?: InputMaybe<Scalars['String']>;
  poolAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_gt?: InputMaybe<Scalars['String']>;
  poolAddress_gte?: InputMaybe<Scalars['String']>;
  poolAddress_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_lt?: InputMaybe<Scalars['String']>;
  poolAddress_lte?: InputMaybe<Scalars['String']>;
  poolAddress_not?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Tco2Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PooledTco2Token_OrderBy {
  Amount = 'amount',
  Id = 'id',
  PoolAddress = 'poolAddress',
  Token = 'token'
}

export type Project = {
  __typename?: 'Project';
  category?: Maybe<Scalars['String']>;
  creator: User;
  emissionType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  method?: Maybe<Scalars['String']>;
  methodology?: Maybe<Scalars['String']>;
  owner: User;
  projectId: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  standard: Scalars['String'];
  storageMethod?: Maybe<Scalars['String']>;
  timestamp: Scalars['BigInt'];
  tx: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
  vintages: Array<ProjectVintage>;
};


export type ProjectVintagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectVintage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectVintage_Filter>;
};

export type ProjectVintage = {
  __typename?: 'ProjectVintage';
  additionalCertification: Scalars['String'];
  batches: Array<BatchToken>;
  coBenefits: Scalars['String'];
  correspAdjustment: Scalars['String'];
  creator: User;
  endTime: Scalars['BigInt'];
  id: Scalars['ID'];
  isCCPcompliant: Scalars['Boolean'];
  isCorsiaCompliant: Scalars['Boolean'];
  issuanceDate: Scalars['BigInt'];
  name: Scalars['String'];
  owner: User;
  project?: Maybe<Project>;
  startTime: Scalars['BigInt'];
  tco2Token?: Maybe<Tco2Token>;
  timestamp: Scalars['BigInt'];
  totalVintageQuantity: Scalars['BigInt'];
  tx: Scalars['String'];
};


export type ProjectVintageBatchesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BatchToken_Filter>;
};

export type ProjectVintage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  additionalCertification?: InputMaybe<Scalars['String']>;
  additionalCertification_contains?: InputMaybe<Scalars['String']>;
  additionalCertification_contains_nocase?: InputMaybe<Scalars['String']>;
  additionalCertification_ends_with?: InputMaybe<Scalars['String']>;
  additionalCertification_ends_with_nocase?: InputMaybe<Scalars['String']>;
  additionalCertification_gt?: InputMaybe<Scalars['String']>;
  additionalCertification_gte?: InputMaybe<Scalars['String']>;
  additionalCertification_in?: InputMaybe<Array<Scalars['String']>>;
  additionalCertification_lt?: InputMaybe<Scalars['String']>;
  additionalCertification_lte?: InputMaybe<Scalars['String']>;
  additionalCertification_not?: InputMaybe<Scalars['String']>;
  additionalCertification_not_contains?: InputMaybe<Scalars['String']>;
  additionalCertification_not_contains_nocase?: InputMaybe<Scalars['String']>;
  additionalCertification_not_ends_with?: InputMaybe<Scalars['String']>;
  additionalCertification_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  additionalCertification_not_in?: InputMaybe<Array<Scalars['String']>>;
  additionalCertification_not_starts_with?: InputMaybe<Scalars['String']>;
  additionalCertification_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  additionalCertification_starts_with?: InputMaybe<Scalars['String']>;
  additionalCertification_starts_with_nocase?: InputMaybe<Scalars['String']>;
  batches_?: InputMaybe<BatchToken_Filter>;
  coBenefits?: InputMaybe<Scalars['String']>;
  coBenefits_contains?: InputMaybe<Scalars['String']>;
  coBenefits_contains_nocase?: InputMaybe<Scalars['String']>;
  coBenefits_ends_with?: InputMaybe<Scalars['String']>;
  coBenefits_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coBenefits_gt?: InputMaybe<Scalars['String']>;
  coBenefits_gte?: InputMaybe<Scalars['String']>;
  coBenefits_in?: InputMaybe<Array<Scalars['String']>>;
  coBenefits_lt?: InputMaybe<Scalars['String']>;
  coBenefits_lte?: InputMaybe<Scalars['String']>;
  coBenefits_not?: InputMaybe<Scalars['String']>;
  coBenefits_not_contains?: InputMaybe<Scalars['String']>;
  coBenefits_not_contains_nocase?: InputMaybe<Scalars['String']>;
  coBenefits_not_ends_with?: InputMaybe<Scalars['String']>;
  coBenefits_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coBenefits_not_in?: InputMaybe<Array<Scalars['String']>>;
  coBenefits_not_starts_with?: InputMaybe<Scalars['String']>;
  coBenefits_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coBenefits_starts_with?: InputMaybe<Scalars['String']>;
  coBenefits_starts_with_nocase?: InputMaybe<Scalars['String']>;
  correspAdjustment?: InputMaybe<Scalars['String']>;
  correspAdjustment_contains?: InputMaybe<Scalars['String']>;
  correspAdjustment_contains_nocase?: InputMaybe<Scalars['String']>;
  correspAdjustment_ends_with?: InputMaybe<Scalars['String']>;
  correspAdjustment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  correspAdjustment_gt?: InputMaybe<Scalars['String']>;
  correspAdjustment_gte?: InputMaybe<Scalars['String']>;
  correspAdjustment_in?: InputMaybe<Array<Scalars['String']>>;
  correspAdjustment_lt?: InputMaybe<Scalars['String']>;
  correspAdjustment_lte?: InputMaybe<Scalars['String']>;
  correspAdjustment_not?: InputMaybe<Scalars['String']>;
  correspAdjustment_not_contains?: InputMaybe<Scalars['String']>;
  correspAdjustment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  correspAdjustment_not_ends_with?: InputMaybe<Scalars['String']>;
  correspAdjustment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  correspAdjustment_not_in?: InputMaybe<Array<Scalars['String']>>;
  correspAdjustment_not_starts_with?: InputMaybe<Scalars['String']>;
  correspAdjustment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  correspAdjustment_starts_with?: InputMaybe<Scalars['String']>;
  correspAdjustment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isCCPcompliant?: InputMaybe<Scalars['Boolean']>;
  isCCPcompliant_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCCPcompliant_not?: InputMaybe<Scalars['Boolean']>;
  isCCPcompliant_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCorsiaCompliant?: InputMaybe<Scalars['Boolean']>;
  isCorsiaCompliant_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCorsiaCompliant_not?: InputMaybe<Scalars['Boolean']>;
  isCorsiaCompliant_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  issuanceDate?: InputMaybe<Scalars['BigInt']>;
  issuanceDate_gt?: InputMaybe<Scalars['BigInt']>;
  issuanceDate_gte?: InputMaybe<Scalars['BigInt']>;
  issuanceDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  issuanceDate_lt?: InputMaybe<Scalars['BigInt']>;
  issuanceDate_lte?: InputMaybe<Scalars['BigInt']>;
  issuanceDate_not?: InputMaybe<Scalars['BigInt']>;
  issuanceDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tco2Token?: InputMaybe<Scalars['String']>;
  tco2Token_?: InputMaybe<Tco2Token_Filter>;
  tco2Token_contains?: InputMaybe<Scalars['String']>;
  tco2Token_contains_nocase?: InputMaybe<Scalars['String']>;
  tco2Token_ends_with?: InputMaybe<Scalars['String']>;
  tco2Token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tco2Token_gt?: InputMaybe<Scalars['String']>;
  tco2Token_gte?: InputMaybe<Scalars['String']>;
  tco2Token_in?: InputMaybe<Array<Scalars['String']>>;
  tco2Token_lt?: InputMaybe<Scalars['String']>;
  tco2Token_lte?: InputMaybe<Scalars['String']>;
  tco2Token_not?: InputMaybe<Scalars['String']>;
  tco2Token_not_contains?: InputMaybe<Scalars['String']>;
  tco2Token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tco2Token_not_ends_with?: InputMaybe<Scalars['String']>;
  tco2Token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tco2Token_not_in?: InputMaybe<Array<Scalars['String']>>;
  tco2Token_not_starts_with?: InputMaybe<Scalars['String']>;
  tco2Token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tco2Token_starts_with?: InputMaybe<Scalars['String']>;
  tco2Token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVintageQuantity?: InputMaybe<Scalars['BigInt']>;
  totalVintageQuantity_gt?: InputMaybe<Scalars['BigInt']>;
  totalVintageQuantity_gte?: InputMaybe<Scalars['BigInt']>;
  totalVintageQuantity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVintageQuantity_lt?: InputMaybe<Scalars['BigInt']>;
  totalVintageQuantity_lte?: InputMaybe<Scalars['BigInt']>;
  totalVintageQuantity_not?: InputMaybe<Scalars['BigInt']>;
  totalVintageQuantity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tx?: InputMaybe<Scalars['String']>;
  tx_contains?: InputMaybe<Scalars['String']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_ends_with?: InputMaybe<Scalars['String']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tx_gt?: InputMaybe<Scalars['String']>;
  tx_gte?: InputMaybe<Scalars['String']>;
  tx_in?: InputMaybe<Array<Scalars['String']>>;
  tx_lt?: InputMaybe<Scalars['String']>;
  tx_lte?: InputMaybe<Scalars['String']>;
  tx_not?: InputMaybe<Scalars['String']>;
  tx_not_contains?: InputMaybe<Scalars['String']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tx_starts_with?: InputMaybe<Scalars['String']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ProjectVintage_OrderBy {
  AdditionalCertification = 'additionalCertification',
  Batches = 'batches',
  CoBenefits = 'coBenefits',
  CorrespAdjustment = 'correspAdjustment',
  Creator = 'creator',
  EndTime = 'endTime',
  Id = 'id',
  IsCcPcompliant = 'isCCPcompliant',
  IsCorsiaCompliant = 'isCorsiaCompliant',
  IssuanceDate = 'issuanceDate',
  Name = 'name',
  Owner = 'owner',
  Project = 'project',
  StartTime = 'startTime',
  Tco2Token = 'tco2Token',
  Timestamp = 'timestamp',
  TotalVintageQuantity = 'totalVintageQuantity',
  Tx = 'tx'
}

export type Project_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  category?: InputMaybe<Scalars['String']>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_contains_nocase?: InputMaybe<Scalars['String']>;
  category_ends_with?: InputMaybe<Scalars['String']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_gt?: InputMaybe<Scalars['String']>;
  category_gte?: InputMaybe<Scalars['String']>;
  category_in?: InputMaybe<Array<Scalars['String']>>;
  category_lt?: InputMaybe<Scalars['String']>;
  category_lte?: InputMaybe<Scalars['String']>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']>;
  category_not_ends_with?: InputMaybe<Scalars['String']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<Scalars['String']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  category_starts_with?: InputMaybe<Scalars['String']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  emissionType?: InputMaybe<Scalars['String']>;
  emissionType_contains?: InputMaybe<Scalars['String']>;
  emissionType_contains_nocase?: InputMaybe<Scalars['String']>;
  emissionType_ends_with?: InputMaybe<Scalars['String']>;
  emissionType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  emissionType_gt?: InputMaybe<Scalars['String']>;
  emissionType_gte?: InputMaybe<Scalars['String']>;
  emissionType_in?: InputMaybe<Array<Scalars['String']>>;
  emissionType_lt?: InputMaybe<Scalars['String']>;
  emissionType_lte?: InputMaybe<Scalars['String']>;
  emissionType_not?: InputMaybe<Scalars['String']>;
  emissionType_not_contains?: InputMaybe<Scalars['String']>;
  emissionType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  emissionType_not_ends_with?: InputMaybe<Scalars['String']>;
  emissionType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  emissionType_not_in?: InputMaybe<Array<Scalars['String']>>;
  emissionType_not_starts_with?: InputMaybe<Scalars['String']>;
  emissionType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  emissionType_starts_with?: InputMaybe<Scalars['String']>;
  emissionType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  method?: InputMaybe<Scalars['String']>;
  method_contains?: InputMaybe<Scalars['String']>;
  method_contains_nocase?: InputMaybe<Scalars['String']>;
  method_ends_with?: InputMaybe<Scalars['String']>;
  method_ends_with_nocase?: InputMaybe<Scalars['String']>;
  method_gt?: InputMaybe<Scalars['String']>;
  method_gte?: InputMaybe<Scalars['String']>;
  method_in?: InputMaybe<Array<Scalars['String']>>;
  method_lt?: InputMaybe<Scalars['String']>;
  method_lte?: InputMaybe<Scalars['String']>;
  method_not?: InputMaybe<Scalars['String']>;
  method_not_contains?: InputMaybe<Scalars['String']>;
  method_not_contains_nocase?: InputMaybe<Scalars['String']>;
  method_not_ends_with?: InputMaybe<Scalars['String']>;
  method_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  method_not_in?: InputMaybe<Array<Scalars['String']>>;
  method_not_starts_with?: InputMaybe<Scalars['String']>;
  method_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  method_starts_with?: InputMaybe<Scalars['String']>;
  method_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodology?: InputMaybe<Scalars['String']>;
  methodology_contains?: InputMaybe<Scalars['String']>;
  methodology_contains_nocase?: InputMaybe<Scalars['String']>;
  methodology_ends_with?: InputMaybe<Scalars['String']>;
  methodology_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodology_gt?: InputMaybe<Scalars['String']>;
  methodology_gte?: InputMaybe<Scalars['String']>;
  methodology_in?: InputMaybe<Array<Scalars['String']>>;
  methodology_lt?: InputMaybe<Scalars['String']>;
  methodology_lte?: InputMaybe<Scalars['String']>;
  methodology_not?: InputMaybe<Scalars['String']>;
  methodology_not_contains?: InputMaybe<Scalars['String']>;
  methodology_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodology_not_ends_with?: InputMaybe<Scalars['String']>;
  methodology_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodology_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodology_not_starts_with?: InputMaybe<Scalars['String']>;
  methodology_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodology_starts_with?: InputMaybe<Scalars['String']>;
  methodology_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_contains?: InputMaybe<Scalars['String']>;
  projectId_contains_nocase?: InputMaybe<Scalars['String']>;
  projectId_ends_with?: InputMaybe<Scalars['String']>;
  projectId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_gt?: InputMaybe<Scalars['String']>;
  projectId_gte?: InputMaybe<Scalars['String']>;
  projectId_in?: InputMaybe<Array<Scalars['String']>>;
  projectId_lt?: InputMaybe<Scalars['String']>;
  projectId_lte?: InputMaybe<Scalars['String']>;
  projectId_not?: InputMaybe<Scalars['String']>;
  projectId_not_contains?: InputMaybe<Scalars['String']>;
  projectId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  projectId_not_ends_with?: InputMaybe<Scalars['String']>;
  projectId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_not_in?: InputMaybe<Array<Scalars['String']>>;
  projectId_not_starts_with?: InputMaybe<Scalars['String']>;
  projectId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_starts_with?: InputMaybe<Scalars['String']>;
  projectId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  region_contains?: InputMaybe<Scalars['String']>;
  region_contains_nocase?: InputMaybe<Scalars['String']>;
  region_ends_with?: InputMaybe<Scalars['String']>;
  region_ends_with_nocase?: InputMaybe<Scalars['String']>;
  region_gt?: InputMaybe<Scalars['String']>;
  region_gte?: InputMaybe<Scalars['String']>;
  region_in?: InputMaybe<Array<Scalars['String']>>;
  region_lt?: InputMaybe<Scalars['String']>;
  region_lte?: InputMaybe<Scalars['String']>;
  region_not?: InputMaybe<Scalars['String']>;
  region_not_contains?: InputMaybe<Scalars['String']>;
  region_not_contains_nocase?: InputMaybe<Scalars['String']>;
  region_not_ends_with?: InputMaybe<Scalars['String']>;
  region_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  region_not_in?: InputMaybe<Array<Scalars['String']>>;
  region_not_starts_with?: InputMaybe<Scalars['String']>;
  region_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  region_starts_with?: InputMaybe<Scalars['String']>;
  region_starts_with_nocase?: InputMaybe<Scalars['String']>;
  standard?: InputMaybe<Scalars['String']>;
  standard_contains?: InputMaybe<Scalars['String']>;
  standard_contains_nocase?: InputMaybe<Scalars['String']>;
  standard_ends_with?: InputMaybe<Scalars['String']>;
  standard_ends_with_nocase?: InputMaybe<Scalars['String']>;
  standard_gt?: InputMaybe<Scalars['String']>;
  standard_gte?: InputMaybe<Scalars['String']>;
  standard_in?: InputMaybe<Array<Scalars['String']>>;
  standard_lt?: InputMaybe<Scalars['String']>;
  standard_lte?: InputMaybe<Scalars['String']>;
  standard_not?: InputMaybe<Scalars['String']>;
  standard_not_contains?: InputMaybe<Scalars['String']>;
  standard_not_contains_nocase?: InputMaybe<Scalars['String']>;
  standard_not_ends_with?: InputMaybe<Scalars['String']>;
  standard_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  standard_not_in?: InputMaybe<Array<Scalars['String']>>;
  standard_not_starts_with?: InputMaybe<Scalars['String']>;
  standard_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  standard_starts_with?: InputMaybe<Scalars['String']>;
  standard_starts_with_nocase?: InputMaybe<Scalars['String']>;
  storageMethod?: InputMaybe<Scalars['String']>;
  storageMethod_contains?: InputMaybe<Scalars['String']>;
  storageMethod_contains_nocase?: InputMaybe<Scalars['String']>;
  storageMethod_ends_with?: InputMaybe<Scalars['String']>;
  storageMethod_ends_with_nocase?: InputMaybe<Scalars['String']>;
  storageMethod_gt?: InputMaybe<Scalars['String']>;
  storageMethod_gte?: InputMaybe<Scalars['String']>;
  storageMethod_in?: InputMaybe<Array<Scalars['String']>>;
  storageMethod_lt?: InputMaybe<Scalars['String']>;
  storageMethod_lte?: InputMaybe<Scalars['String']>;
  storageMethod_not?: InputMaybe<Scalars['String']>;
  storageMethod_not_contains?: InputMaybe<Scalars['String']>;
  storageMethod_not_contains_nocase?: InputMaybe<Scalars['String']>;
  storageMethod_not_ends_with?: InputMaybe<Scalars['String']>;
  storageMethod_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  storageMethod_not_in?: InputMaybe<Array<Scalars['String']>>;
  storageMethod_not_starts_with?: InputMaybe<Scalars['String']>;
  storageMethod_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  storageMethod_starts_with?: InputMaybe<Scalars['String']>;
  storageMethod_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tx?: InputMaybe<Scalars['String']>;
  tx_contains?: InputMaybe<Scalars['String']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_ends_with?: InputMaybe<Scalars['String']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tx_gt?: InputMaybe<Scalars['String']>;
  tx_gte?: InputMaybe<Scalars['String']>;
  tx_in?: InputMaybe<Array<Scalars['String']>>;
  tx_lt?: InputMaybe<Scalars['String']>;
  tx_lte?: InputMaybe<Scalars['String']>;
  tx_not?: InputMaybe<Scalars['String']>;
  tx_not_contains?: InputMaybe<Scalars['String']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tx_starts_with?: InputMaybe<Scalars['String']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vintages_?: InputMaybe<ProjectVintage_Filter>;
};

export enum Project_OrderBy {
  Category = 'category',
  Creator = 'creator',
  EmissionType = 'emissionType',
  Id = 'id',
  Method = 'method',
  Methodology = 'methodology',
  Owner = 'owner',
  ProjectId = 'projectId',
  Region = 'region',
  Standard = 'standard',
  StorageMethod = 'storageMethod',
  Timestamp = 'timestamp',
  Tx = 'tx',
  Uri = 'uri',
  Vintages = 'vintages'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accessRole?: Maybe<AccessRole>;
  accessRoles: Array<AccessRole>;
  aggregation?: Maybe<Aggregation>;
  aggregations: Array<Aggregation>;
  batchComment?: Maybe<BatchComment>;
  batchComments: Array<BatchComment>;
  batchToken?: Maybe<BatchToken>;
  batchTokenStatusUpdate?: Maybe<BatchTokenStatusUpdate>;
  batchTokenStatusUpdates: Array<BatchTokenStatusUpdate>;
  batchTokens: Array<BatchToken>;
  bridgeTokenRequest?: Maybe<BridgeTokenRequest>;
  bridgeTokenRequests: Array<BridgeTokenRequest>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  pooledTCO2Token?: Maybe<PooledTco2Token>;
  pooledTCO2Tokens: Array<PooledTco2Token>;
  project?: Maybe<Project>;
  projectVintage?: Maybe<ProjectVintage>;
  projectVintages: Array<ProjectVintage>;
  projects: Array<Project>;
  redeem?: Maybe<Redeem>;
  redeems: Array<Redeem>;
  retirement?: Maybe<Retirement>;
  retirementCertificate?: Maybe<RetirementCertificate>;
  retirementCertificates: Array<RetirementCertificate>;
  retirements: Array<Retirement>;
  tco2Balance?: Maybe<Tco2Balance>;
  tco2Balances: Array<Tco2Balance>;
  tco2Token?: Maybe<Tco2Token>;
  tco2Tokens: Array<Tco2Token>;
  toucanToken?: Maybe<ToucanToken>;
  toucanTokens: Array<ToucanToken>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccessRoleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessRolesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccessRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessRole_Filter>;
};


export type QueryAggregationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAggregationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Aggregation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Aggregation_Filter>;
};


export type QueryBatchCommentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBatchCommentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchComment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchComment_Filter>;
};


export type QueryBatchTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBatchTokenStatusUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBatchTokenStatusUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchTokenStatusUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchTokenStatusUpdate_Filter>;
};


export type QueryBatchTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchToken_Filter>;
};


export type QueryBridgeTokenRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBridgeTokenRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeTokenRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BridgeTokenRequest_Filter>;
};


export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};


export type QueryPooledTco2TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPooledTco2TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PooledTco2Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PooledTco2Token_Filter>;
};


export type QueryProjectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectVintageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectVintagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectVintage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectVintage_Filter>;
};


export type QueryProjectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Project_Filter>;
};


export type QueryRedeemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRedeemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redeem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redeem_Filter>;
};


export type QueryRetirementArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRetirementCertificateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRetirementCertificatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RetirementCertificate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RetirementCertificate_Filter>;
};


export type QueryRetirementsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Retirement_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Retirement_Filter>;
};


export type QueryTco2BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTco2BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tco2Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tco2Balance_Filter>;
};


export type QueryTco2TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTco2TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tco2Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tco2Token_Filter>;
};


export type QueryToucanTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryToucanTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ToucanToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ToucanToken_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Redeem = {
  __typename?: 'Redeem';
  amount: Scalars['BigInt'];
  creator: User;
  id: Scalars['ID'];
  pool: Scalars['String'];
  timestamp: Scalars['BigInt'];
  token: Tco2Token;
};

export type Redeem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creator?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Tco2Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Redeem_OrderBy {
  Amount = 'amount',
  Creator = 'creator',
  Id = 'id',
  Pool = 'pool',
  Timestamp = 'timestamp',
  Token = 'token'
}

export type Retirement = {
  __typename?: 'Retirement';
  amount: Scalars['BigInt'];
  certificate?: Maybe<RetirementCertificate>;
  creationTx: Scalars['String'];
  creator: User;
  eventId: Scalars['BigInt'];
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  token: Tco2Token;
};

export type RetirementCertificate = {
  __typename?: 'RetirementCertificate';
  beneficiary: User;
  beneficiaryString: Scalars['String'];
  createdAt: Scalars['BigInt'];
  creationTx: Scalars['String'];
  id: Scalars['ID'];
  retirementMessage: Scalars['String'];
  retirements: Array<Retirement>;
  retiringEntity: User;
  retiringEntityString: Scalars['String'];
  updateTxs: Array<Scalars['String']>;
};


export type RetirementCertificateRetirementsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Retirement_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Retirement_Filter>;
};

export type RetirementCertificate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beneficiary?: InputMaybe<Scalars['String']>;
  beneficiaryString?: InputMaybe<Scalars['String']>;
  beneficiaryString_contains?: InputMaybe<Scalars['String']>;
  beneficiaryString_contains_nocase?: InputMaybe<Scalars['String']>;
  beneficiaryString_ends_with?: InputMaybe<Scalars['String']>;
  beneficiaryString_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiaryString_gt?: InputMaybe<Scalars['String']>;
  beneficiaryString_gte?: InputMaybe<Scalars['String']>;
  beneficiaryString_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiaryString_lt?: InputMaybe<Scalars['String']>;
  beneficiaryString_lte?: InputMaybe<Scalars['String']>;
  beneficiaryString_not?: InputMaybe<Scalars['String']>;
  beneficiaryString_not_contains?: InputMaybe<Scalars['String']>;
  beneficiaryString_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beneficiaryString_not_ends_with?: InputMaybe<Scalars['String']>;
  beneficiaryString_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiaryString_not_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiaryString_not_starts_with?: InputMaybe<Scalars['String']>;
  beneficiaryString_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiaryString_starts_with?: InputMaybe<Scalars['String']>;
  beneficiaryString_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_?: InputMaybe<User_Filter>;
  beneficiary_contains?: InputMaybe<Scalars['String']>;
  beneficiary_contains_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']>;
  beneficiary_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_gt?: InputMaybe<Scalars['String']>;
  beneficiary_gte?: InputMaybe<Scalars['String']>;
  beneficiary_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiary_lt?: InputMaybe<Scalars['String']>;
  beneficiary_lte?: InputMaybe<Scalars['String']>;
  beneficiary_not?: InputMaybe<Scalars['String']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']>;
  beneficiary_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']>;
  beneficiary_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']>;
  beneficiary_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']>;
  beneficiary_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationTx?: InputMaybe<Scalars['String']>;
  creationTx_contains?: InputMaybe<Scalars['String']>;
  creationTx_contains_nocase?: InputMaybe<Scalars['String']>;
  creationTx_ends_with?: InputMaybe<Scalars['String']>;
  creationTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_gt?: InputMaybe<Scalars['String']>;
  creationTx_gte?: InputMaybe<Scalars['String']>;
  creationTx_in?: InputMaybe<Array<Scalars['String']>>;
  creationTx_lt?: InputMaybe<Scalars['String']>;
  creationTx_lte?: InputMaybe<Scalars['String']>;
  creationTx_not?: InputMaybe<Scalars['String']>;
  creationTx_not_contains?: InputMaybe<Scalars['String']>;
  creationTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creationTx_not_ends_with?: InputMaybe<Scalars['String']>;
  creationTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  creationTx_not_starts_with?: InputMaybe<Scalars['String']>;
  creationTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_starts_with?: InputMaybe<Scalars['String']>;
  creationTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  retirementMessage?: InputMaybe<Scalars['String']>;
  retirementMessage_contains?: InputMaybe<Scalars['String']>;
  retirementMessage_contains_nocase?: InputMaybe<Scalars['String']>;
  retirementMessage_ends_with?: InputMaybe<Scalars['String']>;
  retirementMessage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  retirementMessage_gt?: InputMaybe<Scalars['String']>;
  retirementMessage_gte?: InputMaybe<Scalars['String']>;
  retirementMessage_in?: InputMaybe<Array<Scalars['String']>>;
  retirementMessage_lt?: InputMaybe<Scalars['String']>;
  retirementMessage_lte?: InputMaybe<Scalars['String']>;
  retirementMessage_not?: InputMaybe<Scalars['String']>;
  retirementMessage_not_contains?: InputMaybe<Scalars['String']>;
  retirementMessage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  retirementMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  retirementMessage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  retirementMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  retirementMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  retirementMessage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  retirementMessage_starts_with?: InputMaybe<Scalars['String']>;
  retirementMessage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  retirements_?: InputMaybe<Retirement_Filter>;
  retiringEntity?: InputMaybe<Scalars['String']>;
  retiringEntityString?: InputMaybe<Scalars['String']>;
  retiringEntityString_contains?: InputMaybe<Scalars['String']>;
  retiringEntityString_contains_nocase?: InputMaybe<Scalars['String']>;
  retiringEntityString_ends_with?: InputMaybe<Scalars['String']>;
  retiringEntityString_ends_with_nocase?: InputMaybe<Scalars['String']>;
  retiringEntityString_gt?: InputMaybe<Scalars['String']>;
  retiringEntityString_gte?: InputMaybe<Scalars['String']>;
  retiringEntityString_in?: InputMaybe<Array<Scalars['String']>>;
  retiringEntityString_lt?: InputMaybe<Scalars['String']>;
  retiringEntityString_lte?: InputMaybe<Scalars['String']>;
  retiringEntityString_not?: InputMaybe<Scalars['String']>;
  retiringEntityString_not_contains?: InputMaybe<Scalars['String']>;
  retiringEntityString_not_contains_nocase?: InputMaybe<Scalars['String']>;
  retiringEntityString_not_ends_with?: InputMaybe<Scalars['String']>;
  retiringEntityString_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  retiringEntityString_not_in?: InputMaybe<Array<Scalars['String']>>;
  retiringEntityString_not_starts_with?: InputMaybe<Scalars['String']>;
  retiringEntityString_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  retiringEntityString_starts_with?: InputMaybe<Scalars['String']>;
  retiringEntityString_starts_with_nocase?: InputMaybe<Scalars['String']>;
  retiringEntity_?: InputMaybe<User_Filter>;
  retiringEntity_contains?: InputMaybe<Scalars['String']>;
  retiringEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  retiringEntity_ends_with?: InputMaybe<Scalars['String']>;
  retiringEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  retiringEntity_gt?: InputMaybe<Scalars['String']>;
  retiringEntity_gte?: InputMaybe<Scalars['String']>;
  retiringEntity_in?: InputMaybe<Array<Scalars['String']>>;
  retiringEntity_lt?: InputMaybe<Scalars['String']>;
  retiringEntity_lte?: InputMaybe<Scalars['String']>;
  retiringEntity_not?: InputMaybe<Scalars['String']>;
  retiringEntity_not_contains?: InputMaybe<Scalars['String']>;
  retiringEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  retiringEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  retiringEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  retiringEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  retiringEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  retiringEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  retiringEntity_starts_with?: InputMaybe<Scalars['String']>;
  retiringEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updateTxs?: InputMaybe<Array<Scalars['String']>>;
  updateTxs_contains?: InputMaybe<Array<Scalars['String']>>;
  updateTxs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  updateTxs_not?: InputMaybe<Array<Scalars['String']>>;
  updateTxs_not_contains?: InputMaybe<Array<Scalars['String']>>;
  updateTxs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum RetirementCertificate_OrderBy {
  Beneficiary = 'beneficiary',
  BeneficiaryString = 'beneficiaryString',
  CreatedAt = 'createdAt',
  CreationTx = 'creationTx',
  Id = 'id',
  RetirementMessage = 'retirementMessage',
  Retirements = 'retirements',
  RetiringEntity = 'retiringEntity',
  RetiringEntityString = 'retiringEntityString',
  UpdateTxs = 'updateTxs'
}

export type Retirement_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  certificate?: InputMaybe<Scalars['String']>;
  certificate_?: InputMaybe<RetirementCertificate_Filter>;
  certificate_contains?: InputMaybe<Scalars['String']>;
  certificate_contains_nocase?: InputMaybe<Scalars['String']>;
  certificate_ends_with?: InputMaybe<Scalars['String']>;
  certificate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  certificate_gt?: InputMaybe<Scalars['String']>;
  certificate_gte?: InputMaybe<Scalars['String']>;
  certificate_in?: InputMaybe<Array<Scalars['String']>>;
  certificate_lt?: InputMaybe<Scalars['String']>;
  certificate_lte?: InputMaybe<Scalars['String']>;
  certificate_not?: InputMaybe<Scalars['String']>;
  certificate_not_contains?: InputMaybe<Scalars['String']>;
  certificate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  certificate_not_ends_with?: InputMaybe<Scalars['String']>;
  certificate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  certificate_not_in?: InputMaybe<Array<Scalars['String']>>;
  certificate_not_starts_with?: InputMaybe<Scalars['String']>;
  certificate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  certificate_starts_with?: InputMaybe<Scalars['String']>;
  certificate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx?: InputMaybe<Scalars['String']>;
  creationTx_contains?: InputMaybe<Scalars['String']>;
  creationTx_contains_nocase?: InputMaybe<Scalars['String']>;
  creationTx_ends_with?: InputMaybe<Scalars['String']>;
  creationTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_gt?: InputMaybe<Scalars['String']>;
  creationTx_gte?: InputMaybe<Scalars['String']>;
  creationTx_in?: InputMaybe<Array<Scalars['String']>>;
  creationTx_lt?: InputMaybe<Scalars['String']>;
  creationTx_lte?: InputMaybe<Scalars['String']>;
  creationTx_not?: InputMaybe<Scalars['String']>;
  creationTx_not_contains?: InputMaybe<Scalars['String']>;
  creationTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creationTx_not_ends_with?: InputMaybe<Scalars['String']>;
  creationTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  creationTx_not_starts_with?: InputMaybe<Scalars['String']>;
  creationTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_starts_with?: InputMaybe<Scalars['String']>;
  creationTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventId?: InputMaybe<Scalars['BigInt']>;
  eventId_gt?: InputMaybe<Scalars['BigInt']>;
  eventId_gte?: InputMaybe<Scalars['BigInt']>;
  eventId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eventId_lt?: InputMaybe<Scalars['BigInt']>;
  eventId_lte?: InputMaybe<Scalars['BigInt']>;
  eventId_not?: InputMaybe<Scalars['BigInt']>;
  eventId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Tco2Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Retirement_OrderBy {
  Amount = 'amount',
  Certificate = 'certificate',
  CreationTx = 'creationTx',
  Creator = 'creator',
  EventId = 'eventId',
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accessRole?: Maybe<AccessRole>;
  accessRoles: Array<AccessRole>;
  aggregation?: Maybe<Aggregation>;
  aggregations: Array<Aggregation>;
  batchComment?: Maybe<BatchComment>;
  batchComments: Array<BatchComment>;
  batchToken?: Maybe<BatchToken>;
  batchTokenStatusUpdate?: Maybe<BatchTokenStatusUpdate>;
  batchTokenStatusUpdates: Array<BatchTokenStatusUpdate>;
  batchTokens: Array<BatchToken>;
  bridgeTokenRequest?: Maybe<BridgeTokenRequest>;
  bridgeTokenRequests: Array<BridgeTokenRequest>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  pooledTCO2Token?: Maybe<PooledTco2Token>;
  pooledTCO2Tokens: Array<PooledTco2Token>;
  project?: Maybe<Project>;
  projectVintage?: Maybe<ProjectVintage>;
  projectVintages: Array<ProjectVintage>;
  projects: Array<Project>;
  redeem?: Maybe<Redeem>;
  redeems: Array<Redeem>;
  retirement?: Maybe<Retirement>;
  retirementCertificate?: Maybe<RetirementCertificate>;
  retirementCertificates: Array<RetirementCertificate>;
  retirements: Array<Retirement>;
  tco2Balance?: Maybe<Tco2Balance>;
  tco2Balances: Array<Tco2Balance>;
  tco2Token?: Maybe<Tco2Token>;
  tco2Tokens: Array<Tco2Token>;
  toucanToken?: Maybe<ToucanToken>;
  toucanTokens: Array<ToucanToken>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccessRoleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessRolesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccessRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessRole_Filter>;
};


export type SubscriptionAggregationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAggregationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Aggregation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Aggregation_Filter>;
};


export type SubscriptionBatchCommentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBatchCommentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchComment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchComment_Filter>;
};


export type SubscriptionBatchTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBatchTokenStatusUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBatchTokenStatusUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchTokenStatusUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchTokenStatusUpdate_Filter>;
};


export type SubscriptionBatchTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchToken_Filter>;
};


export type SubscriptionBridgeTokenRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBridgeTokenRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeTokenRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BridgeTokenRequest_Filter>;
};


export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};


export type SubscriptionPooledTco2TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPooledTco2TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PooledTco2Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PooledTco2Token_Filter>;
};


export type SubscriptionProjectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectVintageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectVintagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectVintage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectVintage_Filter>;
};


export type SubscriptionProjectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Project_Filter>;
};


export type SubscriptionRedeemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRedeemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redeem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redeem_Filter>;
};


export type SubscriptionRetirementArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRetirementCertificateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRetirementCertificatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RetirementCertificate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RetirementCertificate_Filter>;
};


export type SubscriptionRetirementsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Retirement_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Retirement_Filter>;
};


export type SubscriptionTco2BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTco2BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tco2Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tco2Balance_Filter>;
};


export type SubscriptionTco2TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTco2TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tco2Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tco2Token_Filter>;
};


export type SubscriptionToucanTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionToucanTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ToucanToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ToucanToken_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Tco2Balance = {
  __typename?: 'TCO2Balance';
  balance: Scalars['BigInt'];
  id: Scalars['ID'];
  token: Tco2Token;
  user: User;
};

export type Tco2Balance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Tco2Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Tco2Balance_OrderBy {
  Balance = 'balance',
  Id = 'id',
  Token = 'token',
  User = 'user'
}

export type Tco2Token = {
  __typename?: 'TCO2Token';
  address: Scalars['String'];
  createdAt: Scalars['BigInt'];
  creationTx: Scalars['String'];
  creator: User;
  id: Scalars['ID'];
  name: Scalars['String'];
  projectVintage: ProjectVintage;
  score: Scalars['BigInt'];
  symbol: Scalars['String'];
};

export type Tco2Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationTx?: InputMaybe<Scalars['String']>;
  creationTx_contains?: InputMaybe<Scalars['String']>;
  creationTx_contains_nocase?: InputMaybe<Scalars['String']>;
  creationTx_ends_with?: InputMaybe<Scalars['String']>;
  creationTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_gt?: InputMaybe<Scalars['String']>;
  creationTx_gte?: InputMaybe<Scalars['String']>;
  creationTx_in?: InputMaybe<Array<Scalars['String']>>;
  creationTx_lt?: InputMaybe<Scalars['String']>;
  creationTx_lte?: InputMaybe<Scalars['String']>;
  creationTx_not?: InputMaybe<Scalars['String']>;
  creationTx_not_contains?: InputMaybe<Scalars['String']>;
  creationTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creationTx_not_ends_with?: InputMaybe<Scalars['String']>;
  creationTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  creationTx_not_starts_with?: InputMaybe<Scalars['String']>;
  creationTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creationTx_starts_with?: InputMaybe<Scalars['String']>;
  creationTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage?: InputMaybe<Scalars['String']>;
  projectVintage_?: InputMaybe<ProjectVintage_Filter>;
  projectVintage_contains?: InputMaybe<Scalars['String']>;
  projectVintage_contains_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_ends_with?: InputMaybe<Scalars['String']>;
  projectVintage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_gt?: InputMaybe<Scalars['String']>;
  projectVintage_gte?: InputMaybe<Scalars['String']>;
  projectVintage_in?: InputMaybe<Array<Scalars['String']>>;
  projectVintage_lt?: InputMaybe<Scalars['String']>;
  projectVintage_lte?: InputMaybe<Scalars['String']>;
  projectVintage_not?: InputMaybe<Scalars['String']>;
  projectVintage_not_contains?: InputMaybe<Scalars['String']>;
  projectVintage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_not_ends_with?: InputMaybe<Scalars['String']>;
  projectVintage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_not_in?: InputMaybe<Array<Scalars['String']>>;
  projectVintage_not_starts_with?: InputMaybe<Scalars['String']>;
  projectVintage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectVintage_starts_with?: InputMaybe<Scalars['String']>;
  projectVintage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['BigInt']>;
  score_gt?: InputMaybe<Scalars['BigInt']>;
  score_gte?: InputMaybe<Scalars['BigInt']>;
  score_in?: InputMaybe<Array<Scalars['BigInt']>>;
  score_lt?: InputMaybe<Scalars['BigInt']>;
  score_lte?: InputMaybe<Scalars['BigInt']>;
  score_not?: InputMaybe<Scalars['BigInt']>;
  score_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Tco2Token_OrderBy {
  Address = 'address',
  CreatedAt = 'createdAt',
  CreationTx = 'creationTx',
  Creator = 'creator',
  Id = 'id',
  Name = 'name',
  ProjectVintage = 'projectVintage',
  Score = 'score',
  Symbol = 'symbol'
}

export type ToucanToken = {
  __typename?: 'ToucanToken';
  address: Scalars['String'];
  decimals: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type ToucanToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ToucanToken_OrderBy {
  Address = 'address',
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol'
}

export type User = {
  __typename?: 'User';
  batchComments: Array<BatchComment>;
  batchesCreated: Array<BatchToken>;
  batchesOwned: Array<BatchToken>;
  bridgeRequestOwned: Array<BridgeTokenRequest>;
  id: Scalars['ID'];
  projectsCreated: Array<Project>;
  projectsOwned: Array<Project>;
  redeemsCreated: Array<Redeem>;
  retirementsCreated: Array<Retirement>;
  tokensOwned?: Maybe<Array<Tco2Balance>>;
  vintagesCreated: Array<ProjectVintage>;
  vintagesOwned: Array<ProjectVintage>;
};


export type UserBatchCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchComment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BatchComment_Filter>;
};


export type UserBatchesCreatedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BatchToken_Filter>;
};


export type UserBatchesOwnedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BatchToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BatchToken_Filter>;
};


export type UserBridgeRequestOwnedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeTokenRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BridgeTokenRequest_Filter>;
};


export type UserProjectsCreatedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Project_Filter>;
};


export type UserProjectsOwnedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Project_Filter>;
};


export type UserRedeemsCreatedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redeem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Redeem_Filter>;
};


export type UserRetirementsCreatedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Retirement_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Retirement_Filter>;
};


export type UserTokensOwnedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tco2Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Tco2Balance_Filter>;
};


export type UserVintagesCreatedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectVintage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectVintage_Filter>;
};


export type UserVintagesOwnedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectVintage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectVintage_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  batchComments_?: InputMaybe<BatchComment_Filter>;
  batchesCreated_?: InputMaybe<BatchToken_Filter>;
  batchesOwned_?: InputMaybe<BatchToken_Filter>;
  bridgeRequestOwned_?: InputMaybe<BridgeTokenRequest_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  projectsCreated_?: InputMaybe<Project_Filter>;
  projectsOwned_?: InputMaybe<Project_Filter>;
  redeemsCreated_?: InputMaybe<Redeem_Filter>;
  retirementsCreated_?: InputMaybe<Retirement_Filter>;
  tokensOwned_?: InputMaybe<Tco2Balance_Filter>;
  vintagesCreated_?: InputMaybe<ProjectVintage_Filter>;
  vintagesOwned_?: InputMaybe<ProjectVintage_Filter>;
};

export enum User_OrderBy {
  BatchComments = 'batchComments',
  BatchesCreated = 'batchesCreated',
  BatchesOwned = 'batchesOwned',
  BridgeRequestOwned = 'bridgeRequestOwned',
  Id = 'id',
  ProjectsCreated = 'projectsCreated',
  ProjectsOwned = 'projectsOwned',
  RedeemsCreated = 'redeemsCreated',
  RetirementsCreated = 'retirementsCreated',
  TokensOwned = 'tokensOwned',
  VintagesCreated = 'vintagesCreated',
  VintagesOwned = 'vintagesOwned'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
