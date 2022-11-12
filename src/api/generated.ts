import { api } from './baseApi';
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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Represents NULL values */
  Void: any;
};

export type AccessTokenOutput = {
  __typename?: 'AccessTokenOutput';
  accessToken: Scalars['String'];
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AdminChat = {
  __typename?: 'AdminChat';
  _count?: Maybe<AdminChatCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  messages: Array<AdminChatMessage>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  viewedByAdmin: Scalars['Boolean'];
  viewedByUser: Scalars['Boolean'];
};


export type AdminChatMessagesArgs = {
  cursor?: InputMaybe<AdminChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatMessageWhereInput>;
};

export type AdminChatCount = {
  __typename?: 'AdminChatCount';
  messages: Scalars['Int'];
};

export type AdminChatCountAggregate = {
  __typename?: 'AdminChatCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  viewedByAdmin: Scalars['Int'];
  viewedByUser: Scalars['Int'];
};

export type AdminChatCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  viewedByAdmin?: InputMaybe<SortOrder>;
  viewedByUser?: InputMaybe<SortOrder>;
};

export type AdminChatCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<AdminChatMessageCreateNestedManyWithoutChatInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutChatWithAdminInput;
  viewedByAdmin?: InputMaybe<Scalars['Boolean']>;
  viewedByUser?: InputMaybe<Scalars['Boolean']>;
};

export type AdminChatCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  viewedByAdmin?: InputMaybe<Scalars['Boolean']>;
  viewedByUser?: InputMaybe<Scalars['Boolean']>;
};

export type AdminChatCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<AdminChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<AdminChatCreateWithoutMessagesInput>;
};

export type AdminChatCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<AdminChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminChatCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminChatCreateWithoutUserInput>;
};

export type AdminChatCreateOrConnectWithoutMessagesInput = {
  create: AdminChatCreateWithoutMessagesInput;
  where: AdminChatWhereUniqueInput;
};

export type AdminChatCreateOrConnectWithoutUserInput = {
  create: AdminChatCreateWithoutUserInput;
  where: AdminChatWhereUniqueInput;
};

export type AdminChatCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutChatWithAdminInput;
  viewedByAdmin?: InputMaybe<Scalars['Boolean']>;
  viewedByUser?: InputMaybe<Scalars['Boolean']>;
};

export type AdminChatCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<AdminChatMessageCreateNestedManyWithoutChatInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByAdmin?: InputMaybe<Scalars['Boolean']>;
  viewedByUser?: InputMaybe<Scalars['Boolean']>;
};

export type AdminChatGroupBy = {
  __typename?: 'AdminChatGroupBy';
  _count?: Maybe<AdminChatCountAggregate>;
  _max?: Maybe<AdminChatMaxAggregate>;
  _min?: Maybe<AdminChatMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  viewedByAdmin: Scalars['Boolean'];
  viewedByUser: Scalars['Boolean'];
};

export type AdminChatMaxAggregate = {
  __typename?: 'AdminChatMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  viewedByAdmin?: Maybe<Scalars['Boolean']>;
  viewedByUser?: Maybe<Scalars['Boolean']>;
};

export type AdminChatMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  viewedByAdmin?: InputMaybe<SortOrder>;
  viewedByUser?: InputMaybe<SortOrder>;
};

export type AdminChatMessage = {
  __typename?: 'AdminChatMessage';
  chat: AdminChat;
  chatId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
};

export type AdminChatMessageCountAggregate = {
  __typename?: 'AdminChatMessageCountAggregate';
  _all: Scalars['Int'];
  chatId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
};

export type AdminChatMessageCountOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
};

export type AdminChatMessageCreateInput = {
  chat: AdminChatCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
};

export type AdminChatMessageCreateManyChatInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
};

export type AdminChatMessageCreateManyChatInputEnvelope = {
  data: Array<AdminChatMessageCreateManyChatInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AdminChatMessageCreateManyInput = {
  chatId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
};

export type AdminChatMessageCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<AdminChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdminChatMessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<AdminChatMessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<AdminChatMessageCreateManyChatInputEnvelope>;
};

export type AdminChatMessageCreateOrConnectWithoutChatInput = {
  create: AdminChatMessageCreateWithoutChatInput;
  where: AdminChatMessageWhereUniqueInput;
};

export type AdminChatMessageCreateWithoutChatInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
};

export type AdminChatMessageGroupBy = {
  __typename?: 'AdminChatMessageGroupBy';
  _count?: Maybe<AdminChatMessageCountAggregate>;
  _max?: Maybe<AdminChatMessageMaxAggregate>;
  _min?: Maybe<AdminChatMessageMinAggregate>;
  chatId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
};

export type AdminChatMessageListRelationFilter = {
  every?: InputMaybe<AdminChatMessageWhereInput>;
  none?: InputMaybe<AdminChatMessageWhereInput>;
  some?: InputMaybe<AdminChatMessageWhereInput>;
};

export type AdminChatMessageMaxAggregate = {
  __typename?: 'AdminChatMessageMaxAggregate';
  chatId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type AdminChatMessageMaxOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
};

export type AdminChatMessageMinAggregate = {
  __typename?: 'AdminChatMessageMinAggregate';
  chatId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type AdminChatMessageMinOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
};

export type AdminChatMessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdminChatMessageOrderByWithAggregationInput = {
  _count?: InputMaybe<AdminChatMessageCountOrderByAggregateInput>;
  _max?: InputMaybe<AdminChatMessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<AdminChatMessageMinOrderByAggregateInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
};

export type AdminChatMessageOrderByWithRelationInput = {
  chat?: InputMaybe<AdminChatOrderByWithRelationInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
};

export enum AdminChatMessageScalarFieldEnum {
  ChatId = 'chatId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message'
}

export type AdminChatMessageScalarWhereInput = {
  AND?: InputMaybe<Array<AdminChatMessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdminChatMessageScalarWhereInput>>;
  OR?: InputMaybe<Array<AdminChatMessageScalarWhereInput>>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
};

export type AdminChatMessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AdminChatMessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AdminChatMessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AdminChatMessageScalarWhereWithAggregatesInput>>;
  chatId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
};

export type AdminChatMessageUpdateInput = {
  chat?: InputMaybe<AdminChatUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdminChatMessageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdminChatMessageUpdateManyWithWhereWithoutChatInput = {
  data: AdminChatMessageUpdateManyMutationInput;
  where: AdminChatMessageScalarWhereInput;
};

export type AdminChatMessageUpdateManyWithoutChatNestedInput = {
  connect?: InputMaybe<Array<AdminChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdminChatMessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<AdminChatMessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<AdminChatMessageCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<AdminChatMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdminChatMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdminChatMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<AdminChatMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<AdminChatMessageUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany?: InputMaybe<Array<AdminChatMessageUpdateManyWithWhereWithoutChatInput>>;
  upsert?: InputMaybe<Array<AdminChatMessageUpsertWithWhereUniqueWithoutChatInput>>;
};

export type AdminChatMessageUpdateWithWhereUniqueWithoutChatInput = {
  data: AdminChatMessageUpdateWithoutChatInput;
  where: AdminChatMessageWhereUniqueInput;
};

export type AdminChatMessageUpdateWithoutChatInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdminChatMessageUpsertWithWhereUniqueWithoutChatInput = {
  create: AdminChatMessageCreateWithoutChatInput;
  update: AdminChatMessageUpdateWithoutChatInput;
  where: AdminChatMessageWhereUniqueInput;
};

export type AdminChatMessageWhereInput = {
  AND?: InputMaybe<Array<AdminChatMessageWhereInput>>;
  NOT?: InputMaybe<Array<AdminChatMessageWhereInput>>;
  OR?: InputMaybe<Array<AdminChatMessageWhereInput>>;
  chat?: InputMaybe<AdminChatRelationFilter>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
};

export type AdminChatMessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AdminChatMinAggregate = {
  __typename?: 'AdminChatMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  viewedByAdmin?: Maybe<Scalars['Boolean']>;
  viewedByUser?: Maybe<Scalars['Boolean']>;
};

export type AdminChatMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  viewedByAdmin?: InputMaybe<SortOrder>;
  viewedByUser?: InputMaybe<SortOrder>;
};

export type AdminChatOrderByWithAggregationInput = {
  _count?: InputMaybe<AdminChatCountOrderByAggregateInput>;
  _max?: InputMaybe<AdminChatMaxOrderByAggregateInput>;
  _min?: InputMaybe<AdminChatMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  viewedByAdmin?: InputMaybe<SortOrder>;
  viewedByUser?: InputMaybe<SortOrder>;
};

export type AdminChatOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  messages?: InputMaybe<AdminChatMessageOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  viewedByAdmin?: InputMaybe<SortOrder>;
  viewedByUser?: InputMaybe<SortOrder>;
};

export type AdminChatRelationFilter = {
  is?: InputMaybe<AdminChatWhereInput>;
  isNot?: InputMaybe<AdminChatWhereInput>;
};

export enum AdminChatScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  ViewedByAdmin = 'viewedByAdmin',
  ViewedByUser = 'viewedByUser'
}

export type AdminChatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AdminChatScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AdminChatScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AdminChatScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  viewedByAdmin?: InputMaybe<BoolWithAggregatesFilter>;
  viewedByUser?: InputMaybe<BoolWithAggregatesFilter>;
};

export type AdminChatUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<AdminChatMessageUpdateManyWithoutChatNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatWithAdminNestedInput>;
  viewedByAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByUser?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AdminChatUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewedByAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByUser?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AdminChatUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<AdminChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<AdminChatCreateWithoutMessagesInput>;
  update?: InputMaybe<AdminChatUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<AdminChatUpsertWithoutMessagesInput>;
};

export type AdminChatUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<AdminChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminChatCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminChatCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AdminChatUpdateWithoutUserInput>;
  upsert?: InputMaybe<AdminChatUpsertWithoutUserInput>;
};

export type AdminChatUpdateWithoutMessagesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatWithAdminNestedInput>;
  viewedByAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByUser?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AdminChatUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<AdminChatMessageUpdateManyWithoutChatNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewedByAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByUser?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AdminChatUpsertWithoutMessagesInput = {
  create: AdminChatCreateWithoutMessagesInput;
  update: AdminChatUpdateWithoutMessagesInput;
};

export type AdminChatUpsertWithoutUserInput = {
  create: AdminChatCreateWithoutUserInput;
  update: AdminChatUpdateWithoutUserInput;
};

export type AdminChatWhereInput = {
  AND?: InputMaybe<Array<AdminChatWhereInput>>;
  NOT?: InputMaybe<Array<AdminChatWhereInput>>;
  OR?: InputMaybe<Array<AdminChatWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  messages?: InputMaybe<AdminChatMessageListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  viewedByAdmin?: InputMaybe<BoolFilter>;
  viewedByUser?: InputMaybe<BoolFilter>;
};

export type AdminChatWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type AdminCountAggregate = {
  __typename?: 'AdminCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  login: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AdminCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AdminCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AdminGroupBy = {
  __typename?: 'AdminGroupBy';
  _count?: Maybe<AdminCountAggregate>;
  _max?: Maybe<AdminMaxAggregate>;
  _min?: Maybe<AdminMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AdminMaxAggregate = {
  __typename?: 'AdminMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminMinAggregate = {
  __typename?: 'AdminMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminOrderByWithAggregationInput = {
  _count?: InputMaybe<AdminCountOrderByAggregateInput>;
  _max?: InputMaybe<AdminMaxOrderByAggregateInput>;
  _min?: InputMaybe<AdminMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Login = 'login',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type AdminScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  login?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AdminUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  login?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  login?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  login?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAdmin = {
  __typename?: 'AggregateAdmin';
  _count?: Maybe<AdminCountAggregate>;
  _max?: Maybe<AdminMaxAggregate>;
  _min?: Maybe<AdminMinAggregate>;
};

export type AggregateAdminChat = {
  __typename?: 'AggregateAdminChat';
  _count?: Maybe<AdminChatCountAggregate>;
  _max?: Maybe<AdminChatMaxAggregate>;
  _min?: Maybe<AdminChatMinAggregate>;
};

export type AggregateAdminChatMessage = {
  __typename?: 'AggregateAdminChatMessage';
  _count?: Maybe<AdminChatMessageCountAggregate>;
  _max?: Maybe<AdminChatMessageMaxAggregate>;
  _min?: Maybe<AdminChatMessageMinAggregate>;
};

export type AggregateApplicantProfile = {
  __typename?: 'AggregateApplicantProfile';
  _count?: Maybe<ApplicantProfileCountAggregate>;
  _max?: Maybe<ApplicantProfileMaxAggregate>;
  _min?: Maybe<ApplicantProfileMinAggregate>;
};

export type AggregateApplication = {
  __typename?: 'AggregateApplication';
  _count?: Maybe<ApplicationCountAggregate>;
  _max?: Maybe<ApplicationMaxAggregate>;
  _min?: Maybe<ApplicationMinAggregate>;
};

export type AggregateChat = {
  __typename?: 'AggregateChat';
  _count?: Maybe<ChatCountAggregate>;
  _max?: Maybe<ChatMaxAggregate>;
  _min?: Maybe<ChatMinAggregate>;
};

export type AggregateChatMessage = {
  __typename?: 'AggregateChatMessage';
  _count?: Maybe<ChatMessageCountAggregate>;
  _max?: Maybe<ChatMessageMaxAggregate>;
  _min?: Maybe<ChatMessageMinAggregate>;
};

export type AggregateEmployerProfile = {
  __typename?: 'AggregateEmployerProfile';
  _count?: Maybe<EmployerProfileCountAggregate>;
  _max?: Maybe<EmployerProfileMaxAggregate>;
  _min?: Maybe<EmployerProfileMinAggregate>;
};

export type AggregateInvitationToVacancy = {
  __typename?: 'AggregateInvitationToVacancy';
  _count?: Maybe<InvitationToVacancyCountAggregate>;
  _max?: Maybe<InvitationToVacancyMaxAggregate>;
  _min?: Maybe<InvitationToVacancyMinAggregate>;
};

export type AggregateResponseToVacancy = {
  __typename?: 'AggregateResponseToVacancy';
  _count?: Maybe<ResponseToVacancyCountAggregate>;
  _max?: Maybe<ResponseToVacancyMaxAggregate>;
  _min?: Maybe<ResponseToVacancyMinAggregate>;
};

export type AggregateResume = {
  __typename?: 'AggregateResume';
  _avg?: Maybe<ResumeAvgAggregate>;
  _count?: Maybe<ResumeCountAggregate>;
  _max?: Maybe<ResumeMaxAggregate>;
  _min?: Maybe<ResumeMinAggregate>;
  _sum?: Maybe<ResumeSumAggregate>;
};

export type AggregateResumeSavedByEmployer = {
  __typename?: 'AggregateResumeSavedByEmployer';
  _count?: Maybe<ResumeSavedByEmployerCountAggregate>;
  _max?: Maybe<ResumeSavedByEmployerMaxAggregate>;
  _min?: Maybe<ResumeSavedByEmployerMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateVacancy = {
  __typename?: 'AggregateVacancy';
  _avg?: Maybe<VacancyAvgAggregate>;
  _count?: Maybe<VacancyCountAggregate>;
  _max?: Maybe<VacancyMaxAggregate>;
  _min?: Maybe<VacancyMinAggregate>;
  _sum?: Maybe<VacancySumAggregate>;
};

export type AggregateVacancySavedByApplicant = {
  __typename?: 'AggregateVacancySavedByApplicant';
  _count?: Maybe<VacancySavedByApplicantCountAggregate>;
  _max?: Maybe<VacancySavedByApplicantMaxAggregate>;
  _min?: Maybe<VacancySavedByApplicantMinAggregate>;
};

export type ApplicantProfile = {
  __typename?: 'ApplicantProfile';
  _count?: Maybe<ApplicantProfileCount>;
  chats: Array<Chat>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  resume?: Maybe<Resume>;
  savedVacancies: Array<VacancySavedByApplicant>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type ApplicantProfileChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type ApplicantProfileSavedVacanciesArgs = {
  cursor?: InputMaybe<VacancySavedByApplicantWhereUniqueInput>;
  distinct?: InputMaybe<Array<VacancySavedByApplicantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VacancySavedByApplicantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};

export type ApplicantProfileCount = {
  __typename?: 'ApplicantProfileCount';
  chats: Scalars['Int'];
  savedVacancies: Scalars['Int'];
};

export type ApplicantProfileCountAggregate = {
  __typename?: 'ApplicantProfileCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ApplicantProfileCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ApplicantProfileCreateInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutApplicantInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<ResumeCreateNestedOneWithoutApplicantProfileInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutApplicantProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutApplicantProfileInput;
};

export type ApplicantProfileCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ApplicantProfileCreateNestedOneWithoutChatsInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutChatsInput>;
};

export type ApplicantProfileCreateNestedOneWithoutResumeInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutResumeInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutResumeInput>;
};

export type ApplicantProfileCreateNestedOneWithoutSavedVacanciesInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutSavedVacanciesInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutSavedVacanciesInput>;
};

export type ApplicantProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutUserInput>;
};

export type ApplicantProfileCreateOrConnectWithoutChatsInput = {
  create: ApplicantProfileCreateWithoutChatsInput;
  where: ApplicantProfileWhereUniqueInput;
};

export type ApplicantProfileCreateOrConnectWithoutResumeInput = {
  create: ApplicantProfileCreateWithoutResumeInput;
  where: ApplicantProfileWhereUniqueInput;
};

export type ApplicantProfileCreateOrConnectWithoutSavedVacanciesInput = {
  create: ApplicantProfileCreateWithoutSavedVacanciesInput;
  where: ApplicantProfileWhereUniqueInput;
};

export type ApplicantProfileCreateOrConnectWithoutUserInput = {
  create: ApplicantProfileCreateWithoutUserInput;
  where: ApplicantProfileWhereUniqueInput;
};

export type ApplicantProfileCreateWithoutChatsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<ResumeCreateNestedOneWithoutApplicantProfileInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutApplicantProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutApplicantProfileInput;
};

export type ApplicantProfileCreateWithoutResumeInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutApplicantInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutApplicantProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutApplicantProfileInput;
};

export type ApplicantProfileCreateWithoutSavedVacanciesInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutApplicantInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<ResumeCreateNestedOneWithoutApplicantProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutApplicantProfileInput;
};

export type ApplicantProfileCreateWithoutUserInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutApplicantInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<ResumeCreateNestedOneWithoutApplicantProfileInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutApplicantProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ApplicantProfileGroupBy = {
  __typename?: 'ApplicantProfileGroupBy';
  _count?: Maybe<ApplicantProfileCountAggregate>;
  _max?: Maybe<ApplicantProfileMaxAggregate>;
  _min?: Maybe<ApplicantProfileMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ApplicantProfileMaxAggregate = {
  __typename?: 'ApplicantProfileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ApplicantProfileMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ApplicantProfileMinAggregate = {
  __typename?: 'ApplicantProfileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ApplicantProfileMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ApplicantProfileOrderByWithAggregationInput = {
  _count?: InputMaybe<ApplicantProfileCountOrderByAggregateInput>;
  _max?: InputMaybe<ApplicantProfileMaxOrderByAggregateInput>;
  _min?: InputMaybe<ApplicantProfileMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ApplicantProfileOrderByWithRelationInput = {
  chats?: InputMaybe<ChatOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resume?: InputMaybe<ResumeOrderByWithRelationInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ApplicantProfileRelationFilter = {
  is?: InputMaybe<ApplicantProfileWhereInput>;
  isNot?: InputMaybe<ApplicantProfileWhereInput>;
};

export enum ApplicantProfileScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ApplicantProfileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ApplicantProfileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ApplicantProfileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ApplicantProfileScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ApplicantProfileUpdateInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutApplicantNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneWithoutApplicantProfileNestedInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutApplicantProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicantProfileNestedInput>;
};

export type ApplicantProfileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ApplicantProfileUpdateOneRequiredWithoutChatsNestedInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutChatsInput>;
  update?: InputMaybe<ApplicantProfileUpdateWithoutChatsInput>;
  upsert?: InputMaybe<ApplicantProfileUpsertWithoutChatsInput>;
};

export type ApplicantProfileUpdateOneRequiredWithoutResumeNestedInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutResumeInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutResumeInput>;
  update?: InputMaybe<ApplicantProfileUpdateWithoutResumeInput>;
  upsert?: InputMaybe<ApplicantProfileUpsertWithoutResumeInput>;
};

export type ApplicantProfileUpdateOneRequiredWithoutSavedVacanciesNestedInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutSavedVacanciesInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutSavedVacanciesInput>;
  update?: InputMaybe<ApplicantProfileUpdateWithoutSavedVacanciesInput>;
  upsert?: InputMaybe<ApplicantProfileUpsertWithoutSavedVacanciesInput>;
};

export type ApplicantProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ApplicantProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ApplicantProfileCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ApplicantProfileUpdateWithoutUserInput>;
  upsert?: InputMaybe<ApplicantProfileUpsertWithoutUserInput>;
};

export type ApplicantProfileUpdateWithoutChatsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneWithoutApplicantProfileNestedInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutApplicantProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicantProfileNestedInput>;
};

export type ApplicantProfileUpdateWithoutResumeInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutApplicantNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutApplicantProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicantProfileNestedInput>;
};

export type ApplicantProfileUpdateWithoutSavedVacanciesInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutApplicantNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneWithoutApplicantProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicantProfileNestedInput>;
};

export type ApplicantProfileUpdateWithoutUserInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutApplicantNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneWithoutApplicantProfileNestedInput>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutApplicantProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ApplicantProfileUpsertWithoutChatsInput = {
  create: ApplicantProfileCreateWithoutChatsInput;
  update: ApplicantProfileUpdateWithoutChatsInput;
};

export type ApplicantProfileUpsertWithoutResumeInput = {
  create: ApplicantProfileCreateWithoutResumeInput;
  update: ApplicantProfileUpdateWithoutResumeInput;
};

export type ApplicantProfileUpsertWithoutSavedVacanciesInput = {
  create: ApplicantProfileCreateWithoutSavedVacanciesInput;
  update: ApplicantProfileUpdateWithoutSavedVacanciesInput;
};

export type ApplicantProfileUpsertWithoutUserInput = {
  create: ApplicantProfileCreateWithoutUserInput;
  update: ApplicantProfileUpdateWithoutUserInput;
};

export type ApplicantProfileWhereInput = {
  AND?: InputMaybe<Array<ApplicantProfileWhereInput>>;
  NOT?: InputMaybe<Array<ApplicantProfileWhereInput>>;
  OR?: InputMaybe<Array<ApplicantProfileWhereInput>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeRelationFilter>;
  savedVacancies?: InputMaybe<VacancySavedByApplicantListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ApplicantProfileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Application = {
  __typename?: 'Application';
  addition: Scalars['JSON'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  type: ApplicationType;
};

export type ApplicationCountAggregate = {
  __typename?: 'ApplicationCountAggregate';
  _all: Scalars['Int'];
  addition: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  type: Scalars['Int'];
};

export type ApplicationCountOrderByAggregateInput = {
  addition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ApplicationCreateInput = {
  addition?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  type: ApplicationType;
};

export type ApplicationCreateManyInput = {
  addition?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  type: ApplicationType;
};

export type ApplicationGroupBy = {
  __typename?: 'ApplicationGroupBy';
  _count?: Maybe<ApplicationCountAggregate>;
  _max?: Maybe<ApplicationMaxAggregate>;
  _min?: Maybe<ApplicationMinAggregate>;
  addition: Scalars['JSON'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  type: ApplicationType;
};

export type ApplicationMaxAggregate = {
  __typename?: 'ApplicationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<ApplicationType>;
};

export type ApplicationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ApplicationMinAggregate = {
  __typename?: 'ApplicationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<ApplicationType>;
};

export type ApplicationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ApplicationOrderByWithAggregationInput = {
  _count?: InputMaybe<ApplicationCountOrderByAggregateInput>;
  _max?: InputMaybe<ApplicationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ApplicationMinOrderByAggregateInput>;
  addition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ApplicationOrderByWithRelationInput = {
  addition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum ApplicationScalarFieldEnum {
  Addition = 'addition',
  CreatedAt = 'createdAt',
  Id = 'id',
  Type = 'type'
}

export type ApplicationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  addition?: InputMaybe<JsonWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumApplicationTypeWithAggregatesFilter>;
};

export enum ApplicationType {
  FindApplicant = 'findApplicant',
  HelpToMakeResume = 'helpToMakeResume'
}

export type ApplicationUpdateInput = {
  addition?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumApplicationTypeFieldUpdateOperationsInput>;
};

export type ApplicationUpdateManyMutationInput = {
  addition?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumApplicationTypeFieldUpdateOperationsInput>;
};

export type ApplicationWhereInput = {
  AND?: InputMaybe<Array<ApplicationWhereInput>>;
  NOT?: InputMaybe<Array<ApplicationWhereInput>>;
  OR?: InputMaybe<Array<ApplicationWhereInput>>;
  addition?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumApplicationTypeFilter>;
};

export type ApplicationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Chat = {
  __typename?: 'Chat';
  _count?: Maybe<ChatCount>;
  applicant: ApplicantProfile;
  applicantId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  employer: EmployerProfile;
  employerId: Scalars['String'];
  id: Scalars['String'];
  messages: Array<ChatMessage>;
  updatedAt: Scalars['DateTime'];
  viewedByApplicant: Scalars['Boolean'];
  viewedByEmployer: Scalars['Boolean'];
};


export type ChatMessagesArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};

export type ChatCount = {
  __typename?: 'ChatCount';
  messages: Scalars['Int'];
};

export type ChatCountAggregate = {
  __typename?: 'ChatCountAggregate';
  _all: Scalars['Int'];
  applicantId: Scalars['Int'];
  createdAt: Scalars['Int'];
  employerId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  viewedByApplicant: Scalars['Int'];
  viewedByEmployer: Scalars['Int'];
};

export type ChatCountOrderByAggregateInput = {
  applicantId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewedByApplicant?: InputMaybe<SortOrder>;
  viewedByEmployer?: InputMaybe<SortOrder>;
};

export type ChatCreateInput = {
  applicant: ApplicantProfileCreateNestedOneWithoutChatsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employer: EmployerProfileCreateNestedOneWithoutChatsInput;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<ChatMessageCreateNestedManyWithoutChatInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByApplicant?: InputMaybe<Scalars['Boolean']>;
  viewedByEmployer?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateManyApplicantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employerId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByApplicant?: InputMaybe<Scalars['Boolean']>;
  viewedByEmployer?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateManyApplicantInputEnvelope = {
  data: Array<ChatCreateManyApplicantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateManyEmployerInput = {
  applicantId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByApplicant?: InputMaybe<Scalars['Boolean']>;
  viewedByEmployer?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateManyEmployerInputEnvelope = {
  data: Array<ChatCreateManyEmployerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateManyInput = {
  applicantId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employerId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByApplicant?: InputMaybe<Scalars['Boolean']>;
  viewedByEmployer?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateNestedManyWithoutApplicantInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutApplicantInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutApplicantInput>>;
  createMany?: InputMaybe<ChatCreateManyApplicantInputEnvelope>;
};

export type ChatCreateNestedManyWithoutEmployerInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutEmployerInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutEmployerInput>>;
  createMany?: InputMaybe<ChatCreateManyEmployerInputEnvelope>;
};

export type ChatCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatCreateWithoutMessagesInput>;
};

export type ChatCreateOrConnectWithoutApplicantInput = {
  create: ChatCreateWithoutApplicantInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutEmployerInput = {
  create: ChatCreateWithoutEmployerInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutMessagesInput = {
  create: ChatCreateWithoutMessagesInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateWithoutApplicantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employer: EmployerProfileCreateNestedOneWithoutChatsInput;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<ChatMessageCreateNestedManyWithoutChatInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByApplicant?: InputMaybe<Scalars['Boolean']>;
  viewedByEmployer?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateWithoutEmployerInput = {
  applicant: ApplicantProfileCreateNestedOneWithoutChatsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<ChatMessageCreateNestedManyWithoutChatInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByApplicant?: InputMaybe<Scalars['Boolean']>;
  viewedByEmployer?: InputMaybe<Scalars['Boolean']>;
};

export type ChatCreateWithoutMessagesInput = {
  applicant: ApplicantProfileCreateNestedOneWithoutChatsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employer: EmployerProfileCreateNestedOneWithoutChatsInput;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewedByApplicant?: InputMaybe<Scalars['Boolean']>;
  viewedByEmployer?: InputMaybe<Scalars['Boolean']>;
};

export type ChatEmployerIdApplicantIdCompoundUniqueInput = {
  applicantId: Scalars['String'];
  employerId: Scalars['String'];
};

export type ChatGroupBy = {
  __typename?: 'ChatGroupBy';
  _count?: Maybe<ChatCountAggregate>;
  _max?: Maybe<ChatMaxAggregate>;
  _min?: Maybe<ChatMinAggregate>;
  applicantId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  employerId: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  viewedByApplicant: Scalars['Boolean'];
  viewedByEmployer: Scalars['Boolean'];
};

export type ChatListRelationFilter = {
  every?: InputMaybe<ChatWhereInput>;
  none?: InputMaybe<ChatWhereInput>;
  some?: InputMaybe<ChatWhereInput>;
};

export type ChatMaxAggregate = {
  __typename?: 'ChatMaxAggregate';
  applicantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  employerId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewedByApplicant?: Maybe<Scalars['Boolean']>;
  viewedByEmployer?: Maybe<Scalars['Boolean']>;
};

export type ChatMaxOrderByAggregateInput = {
  applicantId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewedByApplicant?: InputMaybe<SortOrder>;
  viewedByEmployer?: InputMaybe<SortOrder>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat: Chat;
  chatId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  sender: UserRole;
};

export type ChatMessageCountAggregate = {
  __typename?: 'ChatMessageCountAggregate';
  _all: Scalars['Int'];
  chatId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  sender: Scalars['Int'];
};

export type ChatMessageCountOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sender?: InputMaybe<SortOrder>;
};

export type ChatMessageCreateInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sender: UserRole;
};

export type ChatMessageCreateManyChatInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sender: UserRole;
};

export type ChatMessageCreateManyChatInputEnvelope = {
  data: Array<ChatMessageCreateManyChatInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ChatMessageCreateManyInput = {
  chatId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sender: UserRole;
};

export type ChatMessageCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatMessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<ChatMessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<ChatMessageCreateManyChatInputEnvelope>;
};

export type ChatMessageCreateOrConnectWithoutChatInput = {
  create: ChatMessageCreateWithoutChatInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageCreateWithoutChatInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sender: UserRole;
};

export type ChatMessageGroupBy = {
  __typename?: 'ChatMessageGroupBy';
  _count?: Maybe<ChatMessageCountAggregate>;
  _max?: Maybe<ChatMessageMaxAggregate>;
  _min?: Maybe<ChatMessageMinAggregate>;
  chatId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  sender: UserRole;
};

export type ChatMessageListRelationFilter = {
  every?: InputMaybe<ChatMessageWhereInput>;
  none?: InputMaybe<ChatMessageWhereInput>;
  some?: InputMaybe<ChatMessageWhereInput>;
};

export type ChatMessageMaxAggregate = {
  __typename?: 'ChatMessageMaxAggregate';
  chatId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  sender?: Maybe<UserRole>;
};

export type ChatMessageMaxOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sender?: InputMaybe<SortOrder>;
};

export type ChatMessageMinAggregate = {
  __typename?: 'ChatMessageMinAggregate';
  chatId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  sender?: Maybe<UserRole>;
};

export type ChatMessageMinOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sender?: InputMaybe<SortOrder>;
};

export type ChatMessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChatMessageOrderByWithAggregationInput = {
  _count?: InputMaybe<ChatMessageCountOrderByAggregateInput>;
  _max?: InputMaybe<ChatMessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChatMessageMinOrderByAggregateInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sender?: InputMaybe<SortOrder>;
};

export type ChatMessageOrderByWithRelationInput = {
  chat?: InputMaybe<ChatOrderByWithRelationInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sender?: InputMaybe<SortOrder>;
};

export enum ChatMessageScalarFieldEnum {
  ChatId = 'chatId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  Sender = 'sender'
}

export type ChatMessageScalarWhereInput = {
  AND?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  OR?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  sender?: InputMaybe<EnumUserRoleFilter>;
};

export type ChatMessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChatMessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChatMessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChatMessageScalarWhereWithAggregatesInput>>;
  chatId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  sender?: InputMaybe<EnumUserRoleWithAggregatesFilter>;
};

export type ChatMessageUpdateInput = {
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
};

export type ChatMessageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
};

export type ChatMessageUpdateManyWithWhereWithoutChatInput = {
  data: ChatMessageUpdateManyMutationInput;
  where: ChatMessageScalarWhereInput;
};

export type ChatMessageUpdateManyWithoutChatNestedInput = {
  connect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatMessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<ChatMessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<ChatMessageCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatMessageUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany?: InputMaybe<Array<ChatMessageUpdateManyWithWhereWithoutChatInput>>;
  upsert?: InputMaybe<Array<ChatMessageUpsertWithWhereUniqueWithoutChatInput>>;
};

export type ChatMessageUpdateWithWhereUniqueWithoutChatInput = {
  data: ChatMessageUpdateWithoutChatInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageUpdateWithoutChatInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
};

export type ChatMessageUpsertWithWhereUniqueWithoutChatInput = {
  create: ChatMessageCreateWithoutChatInput;
  update: ChatMessageUpdateWithoutChatInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageWhereInput = {
  AND?: InputMaybe<Array<ChatMessageWhereInput>>;
  NOT?: InputMaybe<Array<ChatMessageWhereInput>>;
  OR?: InputMaybe<Array<ChatMessageWhereInput>>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  sender?: InputMaybe<EnumUserRoleFilter>;
};

export type ChatMessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ChatMinAggregate = {
  __typename?: 'ChatMinAggregate';
  applicantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  employerId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewedByApplicant?: Maybe<Scalars['Boolean']>;
  viewedByEmployer?: Maybe<Scalars['Boolean']>;
};

export type ChatMinOrderByAggregateInput = {
  applicantId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewedByApplicant?: InputMaybe<SortOrder>;
  viewedByEmployer?: InputMaybe<SortOrder>;
};

export type ChatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithAggregationInput = {
  _count?: InputMaybe<ChatCountOrderByAggregateInput>;
  _max?: InputMaybe<ChatMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChatMinOrderByAggregateInput>;
  applicantId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewedByApplicant?: InputMaybe<SortOrder>;
  viewedByEmployer?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithRelationInput = {
  applicant?: InputMaybe<ApplicantProfileOrderByWithRelationInput>;
  applicantId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  employer?: InputMaybe<EmployerProfileOrderByWithRelationInput>;
  employerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  messages?: InputMaybe<ChatMessageOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  viewedByApplicant?: InputMaybe<SortOrder>;
  viewedByEmployer?: InputMaybe<SortOrder>;
};

export type ChatRelationFilter = {
  is?: InputMaybe<ChatWhereInput>;
  isNot?: InputMaybe<ChatWhereInput>;
};

export enum ChatScalarFieldEnum {
  ApplicantId = 'applicantId',
  CreatedAt = 'createdAt',
  EmployerId = 'employerId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  ViewedByApplicant = 'viewedByApplicant',
  ViewedByEmployer = 'viewedByEmployer'
}

export type ChatScalarWhereInput = {
  AND?: InputMaybe<Array<ChatScalarWhereInput>>;
  NOT?: InputMaybe<Array<ChatScalarWhereInput>>;
  OR?: InputMaybe<Array<ChatScalarWhereInput>>;
  applicantId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  viewedByApplicant?: InputMaybe<BoolFilter>;
  viewedByEmployer?: InputMaybe<BoolFilter>;
};

export type ChatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  applicantId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  employerId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  viewedByApplicant?: InputMaybe<BoolWithAggregatesFilter>;
  viewedByEmployer?: InputMaybe<BoolWithAggregatesFilter>;
};

export type ChatUpdateInput = {
  applicant?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutChatsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employer?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutChatsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<ChatMessageUpdateManyWithoutChatNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewedByApplicant?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByEmployer?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ChatUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewedByApplicant?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByEmployer?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ChatUpdateManyWithWhereWithoutApplicantInput = {
  data: ChatUpdateManyMutationInput;
  where: ChatScalarWhereInput;
};

export type ChatUpdateManyWithWhereWithoutEmployerInput = {
  data: ChatUpdateManyMutationInput;
  where: ChatScalarWhereInput;
};

export type ChatUpdateManyWithoutApplicantNestedInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutApplicantInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutApplicantInput>>;
  createMany?: InputMaybe<ChatCreateManyApplicantInputEnvelope>;
  delete?: InputMaybe<Array<ChatWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatUpdateWithWhereUniqueWithoutApplicantInput>>;
  updateMany?: InputMaybe<Array<ChatUpdateManyWithWhereWithoutApplicantInput>>;
  upsert?: InputMaybe<Array<ChatUpsertWithWhereUniqueWithoutApplicantInput>>;
};

export type ChatUpdateManyWithoutEmployerNestedInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutEmployerInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutEmployerInput>>;
  createMany?: InputMaybe<ChatCreateManyEmployerInputEnvelope>;
  delete?: InputMaybe<Array<ChatWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatUpdateWithWhereUniqueWithoutEmployerInput>>;
  updateMany?: InputMaybe<Array<ChatUpdateManyWithWhereWithoutEmployerInput>>;
  upsert?: InputMaybe<Array<ChatUpsertWithWhereUniqueWithoutEmployerInput>>;
};

export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatCreateWithoutMessagesInput>;
  update?: InputMaybe<ChatUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<ChatUpsertWithoutMessagesInput>;
};

export type ChatUpdateWithWhereUniqueWithoutApplicantInput = {
  data: ChatUpdateWithoutApplicantInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateWithWhereUniqueWithoutEmployerInput = {
  data: ChatUpdateWithoutEmployerInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateWithoutApplicantInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employer?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutChatsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<ChatMessageUpdateManyWithoutChatNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewedByApplicant?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByEmployer?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ChatUpdateWithoutEmployerInput = {
  applicant?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutChatsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<ChatMessageUpdateManyWithoutChatNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewedByApplicant?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByEmployer?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ChatUpdateWithoutMessagesInput = {
  applicant?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutChatsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employer?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutChatsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewedByApplicant?: InputMaybe<BoolFieldUpdateOperationsInput>;
  viewedByEmployer?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ChatUpsertWithWhereUniqueWithoutApplicantInput = {
  create: ChatCreateWithoutApplicantInput;
  update: ChatUpdateWithoutApplicantInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpsertWithWhereUniqueWithoutEmployerInput = {
  create: ChatCreateWithoutEmployerInput;
  update: ChatUpdateWithoutEmployerInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpsertWithoutMessagesInput = {
  create: ChatCreateWithoutMessagesInput;
  update: ChatUpdateWithoutMessagesInput;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  applicant?: InputMaybe<ApplicantProfileRelationFilter>;
  applicantId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employer?: InputMaybe<EmployerProfileRelationFilter>;
  employerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  messages?: InputMaybe<ChatMessageListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  viewedByApplicant?: InputMaybe<BoolFilter>;
  viewedByEmployer?: InputMaybe<BoolFilter>;
};

export type ChatWhereUniqueInput = {
  employerId_applicantId?: InputMaybe<ChatEmployerIdApplicantIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']>;
};

export type CheckAuthenticatedOutput = {
  __typename?: 'CheckAuthenticatedOutput';
  accessToken?: Maybe<Scalars['String']>;
  authenticated: Scalars['Boolean'];
};

export type CreateAndLoginUserInput = {
  authToken: Scalars['String'];
  data: CreateAndLoginUserInputData;
};

export type CreateAndLoginUserInputData = {
  role: Scalars['String'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EmployerProfile = {
  __typename?: 'EmployerProfile';
  _count?: Maybe<EmployerProfileCount>;
  chats: Array<Chat>;
  companyName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  savedResumes: Array<ResumeSavedByEmployer>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  vacancies: Array<Vacancy>;
};


export type EmployerProfileChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type EmployerProfileSavedResumesArgs = {
  cursor?: InputMaybe<ResumeSavedByEmployerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumeSavedByEmployerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumeSavedByEmployerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};


export type EmployerProfileVacanciesArgs = {
  cursor?: InputMaybe<VacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<VacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancyWhereInput>;
};

export type EmployerProfileCount = {
  __typename?: 'EmployerProfileCount';
  chats: Scalars['Int'];
  savedResumes: Scalars['Int'];
  vacancies: Scalars['Int'];
};

export type EmployerProfileCountAggregate = {
  __typename?: 'EmployerProfileCountAggregate';
  _all: Scalars['Int'];
  companyName: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type EmployerProfileCountOrderByAggregateInput = {
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployerProfileCreateInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutEmployerInput>;
  companyName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutEmployerProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutEmployerProfileInput;
  vacancies?: InputMaybe<VacancyCreateNestedManyWithoutEmployerInput>;
};

export type EmployerProfileCreateManyInput = {
  companyName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type EmployerProfileCreateNestedOneWithoutChatsInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutChatsInput>;
};

export type EmployerProfileCreateNestedOneWithoutSavedResumesInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutSavedResumesInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutSavedResumesInput>;
};

export type EmployerProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutUserInput>;
};

export type EmployerProfileCreateNestedOneWithoutVacanciesInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutVacanciesInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutVacanciesInput>;
};

export type EmployerProfileCreateOrConnectWithoutChatsInput = {
  create: EmployerProfileCreateWithoutChatsInput;
  where: EmployerProfileWhereUniqueInput;
};

export type EmployerProfileCreateOrConnectWithoutSavedResumesInput = {
  create: EmployerProfileCreateWithoutSavedResumesInput;
  where: EmployerProfileWhereUniqueInput;
};

export type EmployerProfileCreateOrConnectWithoutUserInput = {
  create: EmployerProfileCreateWithoutUserInput;
  where: EmployerProfileWhereUniqueInput;
};

export type EmployerProfileCreateOrConnectWithoutVacanciesInput = {
  create: EmployerProfileCreateWithoutVacanciesInput;
  where: EmployerProfileWhereUniqueInput;
};

export type EmployerProfileCreateWithoutChatsInput = {
  companyName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutEmployerProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutEmployerProfileInput;
  vacancies?: InputMaybe<VacancyCreateNestedManyWithoutEmployerInput>;
};

export type EmployerProfileCreateWithoutSavedResumesInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutEmployerInput>;
  companyName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutEmployerProfileInput;
  vacancies?: InputMaybe<VacancyCreateNestedManyWithoutEmployerInput>;
};

export type EmployerProfileCreateWithoutUserInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutEmployerInput>;
  companyName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutEmployerProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vacancies?: InputMaybe<VacancyCreateNestedManyWithoutEmployerInput>;
};

export type EmployerProfileCreateWithoutVacanciesInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutEmployerInput>;
  companyName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutEmployerProfileInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutEmployerProfileInput;
};

export type EmployerProfileGroupBy = {
  __typename?: 'EmployerProfileGroupBy';
  _count?: Maybe<EmployerProfileCountAggregate>;
  _max?: Maybe<EmployerProfileMaxAggregate>;
  _min?: Maybe<EmployerProfileMinAggregate>;
  companyName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type EmployerProfileMaxAggregate = {
  __typename?: 'EmployerProfileMaxAggregate';
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type EmployerProfileMaxOrderByAggregateInput = {
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployerProfileMinAggregate = {
  __typename?: 'EmployerProfileMinAggregate';
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type EmployerProfileMinOrderByAggregateInput = {
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployerProfileOrderByWithAggregationInput = {
  _count?: InputMaybe<EmployerProfileCountOrderByAggregateInput>;
  _max?: InputMaybe<EmployerProfileMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmployerProfileMinOrderByAggregateInput>;
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployerProfileOrderByWithRelationInput = {
  chats?: InputMaybe<ChatOrderByRelationAggregateInput>;
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  vacancies?: InputMaybe<VacancyOrderByRelationAggregateInput>;
};

export type EmployerProfileRelationFilter = {
  is?: InputMaybe<EmployerProfileWhereInput>;
  isNot?: InputMaybe<EmployerProfileWhereInput>;
};

export enum EmployerProfileScalarFieldEnum {
  CompanyName = 'companyName',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type EmployerProfileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmployerProfileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmployerProfileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmployerProfileScalarWhereWithAggregatesInput>>;
  companyName?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type EmployerProfileUpdateInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutEmployerNestedInput>;
  companyName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutEmployerProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEmployerProfileNestedInput>;
  vacancies?: InputMaybe<VacancyUpdateManyWithoutEmployerNestedInput>;
};

export type EmployerProfileUpdateManyMutationInput = {
  companyName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployerProfileUpdateOneRequiredWithoutChatsNestedInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutChatsInput>;
  update?: InputMaybe<EmployerProfileUpdateWithoutChatsInput>;
  upsert?: InputMaybe<EmployerProfileUpsertWithoutChatsInput>;
};

export type EmployerProfileUpdateOneRequiredWithoutSavedResumesNestedInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutSavedResumesInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutSavedResumesInput>;
  update?: InputMaybe<EmployerProfileUpdateWithoutSavedResumesInput>;
  upsert?: InputMaybe<EmployerProfileUpsertWithoutSavedResumesInput>;
};

export type EmployerProfileUpdateOneRequiredWithoutVacanciesNestedInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutVacanciesInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutVacanciesInput>;
  update?: InputMaybe<EmployerProfileUpdateWithoutVacanciesInput>;
  upsert?: InputMaybe<EmployerProfileUpsertWithoutVacanciesInput>;
};

export type EmployerProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<EmployerProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployerProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<EmployerProfileCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<EmployerProfileUpdateWithoutUserInput>;
  upsert?: InputMaybe<EmployerProfileUpsertWithoutUserInput>;
};

export type EmployerProfileUpdateWithoutChatsInput = {
  companyName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutEmployerProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEmployerProfileNestedInput>;
  vacancies?: InputMaybe<VacancyUpdateManyWithoutEmployerNestedInput>;
};

export type EmployerProfileUpdateWithoutSavedResumesInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutEmployerNestedInput>;
  companyName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEmployerProfileNestedInput>;
  vacancies?: InputMaybe<VacancyUpdateManyWithoutEmployerNestedInput>;
};

export type EmployerProfileUpdateWithoutUserInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutEmployerNestedInput>;
  companyName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutEmployerProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vacancies?: InputMaybe<VacancyUpdateManyWithoutEmployerNestedInput>;
};

export type EmployerProfileUpdateWithoutVacanciesInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutEmployerNestedInput>;
  companyName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutEmployerProfileNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEmployerProfileNestedInput>;
};

export type EmployerProfileUpsertWithoutChatsInput = {
  create: EmployerProfileCreateWithoutChatsInput;
  update: EmployerProfileUpdateWithoutChatsInput;
};

export type EmployerProfileUpsertWithoutSavedResumesInput = {
  create: EmployerProfileCreateWithoutSavedResumesInput;
  update: EmployerProfileUpdateWithoutSavedResumesInput;
};

export type EmployerProfileUpsertWithoutUserInput = {
  create: EmployerProfileCreateWithoutUserInput;
  update: EmployerProfileUpdateWithoutUserInput;
};

export type EmployerProfileUpsertWithoutVacanciesInput = {
  create: EmployerProfileCreateWithoutVacanciesInput;
  update: EmployerProfileUpdateWithoutVacanciesInput;
};

export type EmployerProfileWhereInput = {
  AND?: InputMaybe<Array<EmployerProfileWhereInput>>;
  NOT?: InputMaybe<Array<EmployerProfileWhereInput>>;
  OR?: InputMaybe<Array<EmployerProfileWhereInput>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  companyName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  savedResumes?: InputMaybe<ResumeSavedByEmployerListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  vacancies?: InputMaybe<VacancyListRelationFilter>;
};

export type EmployerProfileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type EnumApplicationTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ApplicationType>;
};

export type EnumApplicationTypeFilter = {
  equals?: InputMaybe<ApplicationType>;
  in?: InputMaybe<Array<ApplicationType>>;
  not?: InputMaybe<NestedEnumApplicationTypeFilter>;
  notIn?: InputMaybe<Array<ApplicationType>>;
};

export type EnumApplicationTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumApplicationTypeFilter>;
  _min?: InputMaybe<NestedEnumApplicationTypeFilter>;
  equals?: InputMaybe<ApplicationType>;
  in?: InputMaybe<Array<ApplicationType>>;
  not?: InputMaybe<NestedEnumApplicationTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ApplicationType>>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type EnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type InvitationToVacancy = {
  __typename?: 'InvitationToVacancy';
  coverLetter?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  resume: Resume;
  resumeId: Scalars['String'];
  vacancy: Vacancy;
  vacancyId: Scalars['String'];
  viewed: Scalars['Boolean'];
};

export type InvitationToVacancyCountAggregate = {
  __typename?: 'InvitationToVacancyCountAggregate';
  _all: Scalars['Int'];
  coverLetter: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  resumeId: Scalars['Int'];
  vacancyId: Scalars['Int'];
  viewed: Scalars['Int'];
};

export type InvitationToVacancyCountOrderByAggregateInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type InvitationToVacancyCreateInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume: ResumeCreateNestedOneWithoutInvitationsInput;
  vacancy: VacancyCreateNestedOneWithoutInvitationsInput;
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyCreateManyInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resumeId: Scalars['String'];
  vacancyId: Scalars['String'];
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyCreateManyResumeInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  vacancyId: Scalars['String'];
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyCreateManyResumeInputEnvelope = {
  data: Array<InvitationToVacancyCreateManyResumeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyCreateManyVacancyInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resumeId: Scalars['String'];
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyCreateManyVacancyInputEnvelope = {
  data: Array<InvitationToVacancyCreateManyVacancyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyCreateNestedManyWithoutResumeInput = {
  connect?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationToVacancyCreateOrConnectWithoutResumeInput>>;
  create?: InputMaybe<Array<InvitationToVacancyCreateWithoutResumeInput>>;
  createMany?: InputMaybe<InvitationToVacancyCreateManyResumeInputEnvelope>;
};

export type InvitationToVacancyCreateNestedManyWithoutVacancyInput = {
  connect?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationToVacancyCreateOrConnectWithoutVacancyInput>>;
  create?: InputMaybe<Array<InvitationToVacancyCreateWithoutVacancyInput>>;
  createMany?: InputMaybe<InvitationToVacancyCreateManyVacancyInputEnvelope>;
};

export type InvitationToVacancyCreateOrConnectWithoutResumeInput = {
  create: InvitationToVacancyCreateWithoutResumeInput;
  where: InvitationToVacancyWhereUniqueInput;
};

export type InvitationToVacancyCreateOrConnectWithoutVacancyInput = {
  create: InvitationToVacancyCreateWithoutVacancyInput;
  where: InvitationToVacancyWhereUniqueInput;
};

export type InvitationToVacancyCreateWithoutResumeInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  vacancy: VacancyCreateNestedOneWithoutInvitationsInput;
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyCreateWithoutVacancyInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume: ResumeCreateNestedOneWithoutInvitationsInput;
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationToVacancyGroupBy = {
  __typename?: 'InvitationToVacancyGroupBy';
  _count?: Maybe<InvitationToVacancyCountAggregate>;
  _max?: Maybe<InvitationToVacancyMaxAggregate>;
  _min?: Maybe<InvitationToVacancyMinAggregate>;
  coverLetter?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  resumeId: Scalars['String'];
  vacancyId: Scalars['String'];
  viewed: Scalars['Boolean'];
};

export type InvitationToVacancyListRelationFilter = {
  every?: InputMaybe<InvitationToVacancyWhereInput>;
  none?: InputMaybe<InvitationToVacancyWhereInput>;
  some?: InputMaybe<InvitationToVacancyWhereInput>;
};

export type InvitationToVacancyMaxAggregate = {
  __typename?: 'InvitationToVacancyMaxAggregate';
  coverLetter?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  resumeId?: Maybe<Scalars['String']>;
  vacancyId?: Maybe<Scalars['String']>;
  viewed?: Maybe<Scalars['Boolean']>;
};

export type InvitationToVacancyMaxOrderByAggregateInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type InvitationToVacancyMinAggregate = {
  __typename?: 'InvitationToVacancyMinAggregate';
  coverLetter?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  resumeId?: Maybe<Scalars['String']>;
  vacancyId?: Maybe<Scalars['String']>;
  viewed?: Maybe<Scalars['Boolean']>;
};

export type InvitationToVacancyMinOrderByAggregateInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type InvitationToVacancyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InvitationToVacancyOrderByWithAggregationInput = {
  _count?: InputMaybe<InvitationToVacancyCountOrderByAggregateInput>;
  _max?: InputMaybe<InvitationToVacancyMaxOrderByAggregateInput>;
  _min?: InputMaybe<InvitationToVacancyMinOrderByAggregateInput>;
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type InvitationToVacancyOrderByWithRelationInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resume?: InputMaybe<ResumeOrderByWithRelationInput>;
  resumeId?: InputMaybe<SortOrder>;
  vacancy?: InputMaybe<VacancyOrderByWithRelationInput>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export enum InvitationToVacancyScalarFieldEnum {
  CoverLetter = 'coverLetter',
  CreatedAt = 'createdAt',
  Id = 'id',
  ResumeId = 'resumeId',
  VacancyId = 'vacancyId',
  Viewed = 'viewed'
}

export type InvitationToVacancyScalarWhereInput = {
  AND?: InputMaybe<Array<InvitationToVacancyScalarWhereInput>>;
  NOT?: InputMaybe<Array<InvitationToVacancyScalarWhereInput>>;
  OR?: InputMaybe<Array<InvitationToVacancyScalarWhereInput>>;
  coverLetter?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resumeId?: InputMaybe<StringFilter>;
  vacancyId?: InputMaybe<StringFilter>;
  viewed?: InputMaybe<BoolFilter>;
};

export type InvitationToVacancyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InvitationToVacancyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InvitationToVacancyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InvitationToVacancyScalarWhereWithAggregatesInput>>;
  coverLetter?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  resumeId?: InputMaybe<StringWithAggregatesFilter>;
  vacancyId?: InputMaybe<StringWithAggregatesFilter>;
  viewed?: InputMaybe<BoolWithAggregatesFilter>;
};

export type InvitationToVacancyUpdateInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneRequiredWithoutInvitationsNestedInput>;
  vacancy?: InputMaybe<VacancyUpdateOneRequiredWithoutInvitationsNestedInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InvitationToVacancyUpdateManyMutationInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InvitationToVacancyUpdateManyWithWhereWithoutResumeInput = {
  data: InvitationToVacancyUpdateManyMutationInput;
  where: InvitationToVacancyScalarWhereInput;
};

export type InvitationToVacancyUpdateManyWithWhereWithoutVacancyInput = {
  data: InvitationToVacancyUpdateManyMutationInput;
  where: InvitationToVacancyScalarWhereInput;
};

export type InvitationToVacancyUpdateManyWithoutResumeNestedInput = {
  connect?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationToVacancyCreateOrConnectWithoutResumeInput>>;
  create?: InputMaybe<Array<InvitationToVacancyCreateWithoutResumeInput>>;
  createMany?: InputMaybe<InvitationToVacancyCreateManyResumeInputEnvelope>;
  delete?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvitationToVacancyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  update?: InputMaybe<Array<InvitationToVacancyUpdateWithWhereUniqueWithoutResumeInput>>;
  updateMany?: InputMaybe<Array<InvitationToVacancyUpdateManyWithWhereWithoutResumeInput>>;
  upsert?: InputMaybe<Array<InvitationToVacancyUpsertWithWhereUniqueWithoutResumeInput>>;
};

export type InvitationToVacancyUpdateManyWithoutVacancyNestedInput = {
  connect?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationToVacancyCreateOrConnectWithoutVacancyInput>>;
  create?: InputMaybe<Array<InvitationToVacancyCreateWithoutVacancyInput>>;
  createMany?: InputMaybe<InvitationToVacancyCreateManyVacancyInputEnvelope>;
  delete?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvitationToVacancyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationToVacancyWhereUniqueInput>>;
  update?: InputMaybe<Array<InvitationToVacancyUpdateWithWhereUniqueWithoutVacancyInput>>;
  updateMany?: InputMaybe<Array<InvitationToVacancyUpdateManyWithWhereWithoutVacancyInput>>;
  upsert?: InputMaybe<Array<InvitationToVacancyUpsertWithWhereUniqueWithoutVacancyInput>>;
};

export type InvitationToVacancyUpdateWithWhereUniqueWithoutResumeInput = {
  data: InvitationToVacancyUpdateWithoutResumeInput;
  where: InvitationToVacancyWhereUniqueInput;
};

export type InvitationToVacancyUpdateWithWhereUniqueWithoutVacancyInput = {
  data: InvitationToVacancyUpdateWithoutVacancyInput;
  where: InvitationToVacancyWhereUniqueInput;
};

export type InvitationToVacancyUpdateWithoutResumeInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  vacancy?: InputMaybe<VacancyUpdateOneRequiredWithoutInvitationsNestedInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InvitationToVacancyUpdateWithoutVacancyInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneRequiredWithoutInvitationsNestedInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InvitationToVacancyUpsertWithWhereUniqueWithoutResumeInput = {
  create: InvitationToVacancyCreateWithoutResumeInput;
  update: InvitationToVacancyUpdateWithoutResumeInput;
  where: InvitationToVacancyWhereUniqueInput;
};

export type InvitationToVacancyUpsertWithWhereUniqueWithoutVacancyInput = {
  create: InvitationToVacancyCreateWithoutVacancyInput;
  update: InvitationToVacancyUpdateWithoutVacancyInput;
  where: InvitationToVacancyWhereUniqueInput;
};

export type InvitationToVacancyWhereInput = {
  AND?: InputMaybe<Array<InvitationToVacancyWhereInput>>;
  NOT?: InputMaybe<Array<InvitationToVacancyWhereInput>>;
  OR?: InputMaybe<Array<InvitationToVacancyWhereInput>>;
  coverLetter?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeRelationFilter>;
  resumeId?: InputMaybe<StringFilter>;
  vacancy?: InputMaybe<VacancyRelationFilter>;
  vacancyId?: InputMaybe<StringFilter>;
  viewed?: InputMaybe<BoolFilter>;
};

export type InvitationToVacancyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type LoginAdminInput = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInput = {
  authToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAndLoginUser: AccessTokenOutput;
  createManyAdmin: AffectedRowsOutput;
  createManyAdminChat: AffectedRowsOutput;
  createManyAdminChatMessage: AffectedRowsOutput;
  createManyApplicantProfile: AffectedRowsOutput;
  createManyApplication: AffectedRowsOutput;
  createManyChat: AffectedRowsOutput;
  createManyChatMessage: AffectedRowsOutput;
  createManyEmployerProfile: AffectedRowsOutput;
  createManyInvitationToVacancy: AffectedRowsOutput;
  createManyResponseToVacancy: AffectedRowsOutput;
  createManyResume: AffectedRowsOutput;
  createManyResumeSavedByEmployer: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVacancy: AffectedRowsOutput;
  createManyVacancySavedByApplicant: AffectedRowsOutput;
  createOneAdmin: Admin;
  createOneAdminChat: AdminChat;
  createOneAdminChatMessage: AdminChatMessage;
  createOneApplicantProfile: ApplicantProfile;
  createOneApplication: Application;
  createOneChat: Chat;
  createOneChatMessage: ChatMessage;
  createOneEmployerProfile: EmployerProfile;
  createOneInvitationToVacancy: InvitationToVacancy;
  createOneResponseToVacancy: ResponseToVacancy;
  createOneResume: Resume;
  createOneResumeSavedByEmployer: ResumeSavedByEmployer;
  createOneUser: User;
  createOneVacancy: Vacancy;
  createOneVacancySavedByApplicant: VacancySavedByApplicant;
  deleteManyAdmin: AffectedRowsOutput;
  deleteManyAdminChat: AffectedRowsOutput;
  deleteManyAdminChatMessage: AffectedRowsOutput;
  deleteManyApplicantProfile: AffectedRowsOutput;
  deleteManyApplication: AffectedRowsOutput;
  deleteManyChat: AffectedRowsOutput;
  deleteManyChatMessage: AffectedRowsOutput;
  deleteManyEmployerProfile: AffectedRowsOutput;
  deleteManyInvitationToVacancy: AffectedRowsOutput;
  deleteManyResponseToVacancy: AffectedRowsOutput;
  deleteManyResume: AffectedRowsOutput;
  deleteManyResumeSavedByEmployer: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVacancy: AffectedRowsOutput;
  deleteManyVacancySavedByApplicant: AffectedRowsOutput;
  deleteOneAdmin?: Maybe<Admin>;
  deleteOneAdminChat?: Maybe<AdminChat>;
  deleteOneAdminChatMessage?: Maybe<AdminChatMessage>;
  deleteOneApplicantProfile?: Maybe<ApplicantProfile>;
  deleteOneApplication?: Maybe<Application>;
  deleteOneChat?: Maybe<Chat>;
  deleteOneChatMessage?: Maybe<ChatMessage>;
  deleteOneEmployerProfile?: Maybe<EmployerProfile>;
  deleteOneInvitationToVacancy?: Maybe<InvitationToVacancy>;
  deleteOneResponseToVacancy?: Maybe<ResponseToVacancy>;
  deleteOneResume?: Maybe<Resume>;
  deleteOneResumeSavedByEmployer?: Maybe<ResumeSavedByEmployer>;
  deleteOneUser?: Maybe<User>;
  deleteOneVacancy?: Maybe<Vacancy>;
  deleteOneVacancySavedByApplicant?: Maybe<VacancySavedByApplicant>;
  loginAdmin: AccessTokenOutput;
  loginUser: AccessTokenOutput;
  logout?: Maybe<Scalars['Void']>;
  refreshAccessToken: AccessTokenOutput;
  sendAuthCodeMessage: SendMessageOutput;
  updateManyAdmin: AffectedRowsOutput;
  updateManyAdminChat: AffectedRowsOutput;
  updateManyAdminChatMessage: AffectedRowsOutput;
  updateManyApplicantProfile: AffectedRowsOutput;
  updateManyApplication: AffectedRowsOutput;
  updateManyChat: AffectedRowsOutput;
  updateManyChatMessage: AffectedRowsOutput;
  updateManyEmployerProfile: AffectedRowsOutput;
  updateManyInvitationToVacancy: AffectedRowsOutput;
  updateManyResponseToVacancy: AffectedRowsOutput;
  updateManyResume: AffectedRowsOutput;
  updateManyResumeSavedByEmployer: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVacancy: AffectedRowsOutput;
  updateManyVacancySavedByApplicant: AffectedRowsOutput;
  updateOneAdmin?: Maybe<Admin>;
  updateOneAdminChat?: Maybe<AdminChat>;
  updateOneAdminChatMessage?: Maybe<AdminChatMessage>;
  updateOneApplicantProfile?: Maybe<ApplicantProfile>;
  updateOneApplication?: Maybe<Application>;
  updateOneChat?: Maybe<Chat>;
  updateOneChatMessage?: Maybe<ChatMessage>;
  updateOneEmployerProfile?: Maybe<EmployerProfile>;
  updateOneInvitationToVacancy?: Maybe<InvitationToVacancy>;
  updateOneResponseToVacancy?: Maybe<ResponseToVacancy>;
  updateOneResume?: Maybe<Resume>;
  updateOneResumeSavedByEmployer?: Maybe<ResumeSavedByEmployer>;
  updateOneUser?: Maybe<User>;
  updateOneVacancy?: Maybe<Vacancy>;
  updateOneVacancySavedByApplicant?: Maybe<VacancySavedByApplicant>;
  upsertOneAdmin: Admin;
  upsertOneAdminChat: AdminChat;
  upsertOneAdminChatMessage: AdminChatMessage;
  upsertOneApplicantProfile: ApplicantProfile;
  upsertOneApplication: Application;
  upsertOneChat: Chat;
  upsertOneChatMessage: ChatMessage;
  upsertOneEmployerProfile: EmployerProfile;
  upsertOneInvitationToVacancy: InvitationToVacancy;
  upsertOneResponseToVacancy: ResponseToVacancy;
  upsertOneResume: Resume;
  upsertOneResumeSavedByEmployer: ResumeSavedByEmployer;
  upsertOneUser: User;
  upsertOneVacancy: Vacancy;
  upsertOneVacancySavedByApplicant: VacancySavedByApplicant;
  verifyAuthCode: VerifyAuthCodeOutput;
};


export type MutationCreateAndLoginUserArgs = {
  input: CreateAndLoginUserInput;
};


export type MutationCreateManyAdminArgs = {
  data: Array<AdminCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAdminChatArgs = {
  data: Array<AdminChatCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAdminChatMessageArgs = {
  data: Array<AdminChatMessageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyApplicantProfileArgs = {
  data: Array<ApplicantProfileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyApplicationArgs = {
  data: Array<ApplicationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyChatArgs = {
  data: Array<ChatCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyChatMessageArgs = {
  data: Array<ChatMessageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyEmployerProfileArgs = {
  data: Array<EmployerProfileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyInvitationToVacancyArgs = {
  data: Array<InvitationToVacancyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyResponseToVacancyArgs = {
  data: Array<ResponseToVacancyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyResumeArgs = {
  data: Array<ResumeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyResumeSavedByEmployerArgs = {
  data: Array<ResumeSavedByEmployerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyVacancyArgs = {
  data: Array<VacancyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyVacancySavedByApplicantArgs = {
  data: Array<VacancySavedByApplicantCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneAdminArgs = {
  data: AdminCreateInput;
};


export type MutationCreateOneAdminChatArgs = {
  data: AdminChatCreateInput;
};


export type MutationCreateOneAdminChatMessageArgs = {
  data: AdminChatMessageCreateInput;
};


export type MutationCreateOneApplicantProfileArgs = {
  data: ApplicantProfileCreateInput;
};


export type MutationCreateOneApplicationArgs = {
  data: ApplicationCreateInput;
};


export type MutationCreateOneChatArgs = {
  data: ChatCreateInput;
};


export type MutationCreateOneChatMessageArgs = {
  data: ChatMessageCreateInput;
};


export type MutationCreateOneEmployerProfileArgs = {
  data: EmployerProfileCreateInput;
};


export type MutationCreateOneInvitationToVacancyArgs = {
  data: InvitationToVacancyCreateInput;
};


export type MutationCreateOneResponseToVacancyArgs = {
  data: ResponseToVacancyCreateInput;
};


export type MutationCreateOneResumeArgs = {
  data: ResumeCreateInput;
};


export type MutationCreateOneResumeSavedByEmployerArgs = {
  data: ResumeSavedByEmployerCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneVacancyArgs = {
  data: VacancyCreateInput;
};


export type MutationCreateOneVacancySavedByApplicantArgs = {
  data: VacancySavedByApplicantCreateInput;
};


export type MutationDeleteManyAdminArgs = {
  where?: InputMaybe<AdminWhereInput>;
};


export type MutationDeleteManyAdminChatArgs = {
  where?: InputMaybe<AdminChatWhereInput>;
};


export type MutationDeleteManyAdminChatMessageArgs = {
  where?: InputMaybe<AdminChatMessageWhereInput>;
};


export type MutationDeleteManyApplicantProfileArgs = {
  where?: InputMaybe<ApplicantProfileWhereInput>;
};


export type MutationDeleteManyApplicationArgs = {
  where?: InputMaybe<ApplicationWhereInput>;
};


export type MutationDeleteManyChatArgs = {
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationDeleteManyChatMessageArgs = {
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type MutationDeleteManyEmployerProfileArgs = {
  where?: InputMaybe<EmployerProfileWhereInput>;
};


export type MutationDeleteManyInvitationToVacancyArgs = {
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type MutationDeleteManyResponseToVacancyArgs = {
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type MutationDeleteManyResumeArgs = {
  where?: InputMaybe<ResumeWhereInput>;
};


export type MutationDeleteManyResumeSavedByEmployerArgs = {
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyVacancyArgs = {
  where?: InputMaybe<VacancyWhereInput>;
};


export type MutationDeleteManyVacancySavedByApplicantArgs = {
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};


export type MutationDeleteOneAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationDeleteOneAdminChatArgs = {
  where: AdminChatWhereUniqueInput;
};


export type MutationDeleteOneAdminChatMessageArgs = {
  where: AdminChatMessageWhereUniqueInput;
};


export type MutationDeleteOneApplicantProfileArgs = {
  where: ApplicantProfileWhereUniqueInput;
};


export type MutationDeleteOneApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type MutationDeleteOneChatArgs = {
  where: ChatWhereUniqueInput;
};


export type MutationDeleteOneChatMessageArgs = {
  where: ChatMessageWhereUniqueInput;
};


export type MutationDeleteOneEmployerProfileArgs = {
  where: EmployerProfileWhereUniqueInput;
};


export type MutationDeleteOneInvitationToVacancyArgs = {
  where: InvitationToVacancyWhereUniqueInput;
};


export type MutationDeleteOneResponseToVacancyArgs = {
  where: ResponseToVacancyWhereUniqueInput;
};


export type MutationDeleteOneResumeArgs = {
  where: ResumeWhereUniqueInput;
};


export type MutationDeleteOneResumeSavedByEmployerArgs = {
  where: ResumeSavedByEmployerWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneVacancyArgs = {
  where: VacancyWhereUniqueInput;
};


export type MutationDeleteOneVacancySavedByApplicantArgs = {
  where: VacancySavedByApplicantWhereUniqueInput;
};


export type MutationLoginAdminArgs = {
  input: LoginAdminInput;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationSendAuthCodeMessageArgs = {
  input: SendMessageInput;
};


export type MutationUpdateManyAdminArgs = {
  data: AdminUpdateManyMutationInput;
  where?: InputMaybe<AdminWhereInput>;
};


export type MutationUpdateManyAdminChatArgs = {
  data: AdminChatUpdateManyMutationInput;
  where?: InputMaybe<AdminChatWhereInput>;
};


export type MutationUpdateManyAdminChatMessageArgs = {
  data: AdminChatMessageUpdateManyMutationInput;
  where?: InputMaybe<AdminChatMessageWhereInput>;
};


export type MutationUpdateManyApplicantProfileArgs = {
  data: ApplicantProfileUpdateManyMutationInput;
  where?: InputMaybe<ApplicantProfileWhereInput>;
};


export type MutationUpdateManyApplicationArgs = {
  data: ApplicationUpdateManyMutationInput;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type MutationUpdateManyChatArgs = {
  data: ChatUpdateManyMutationInput;
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationUpdateManyChatMessageArgs = {
  data: ChatMessageUpdateManyMutationInput;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type MutationUpdateManyEmployerProfileArgs = {
  data: EmployerProfileUpdateManyMutationInput;
  where?: InputMaybe<EmployerProfileWhereInput>;
};


export type MutationUpdateManyInvitationToVacancyArgs = {
  data: InvitationToVacancyUpdateManyMutationInput;
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type MutationUpdateManyResponseToVacancyArgs = {
  data: ResponseToVacancyUpdateManyMutationInput;
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type MutationUpdateManyResumeArgs = {
  data: ResumeUpdateManyMutationInput;
  where?: InputMaybe<ResumeWhereInput>;
};


export type MutationUpdateManyResumeSavedByEmployerArgs = {
  data: ResumeSavedByEmployerUpdateManyMutationInput;
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyVacancyArgs = {
  data: VacancyUpdateManyMutationInput;
  where?: InputMaybe<VacancyWhereInput>;
};


export type MutationUpdateManyVacancySavedByApplicantArgs = {
  data: VacancySavedByApplicantUpdateManyMutationInput;
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};


export type MutationUpdateOneAdminArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpdateOneAdminChatArgs = {
  data: AdminChatUpdateInput;
  where: AdminChatWhereUniqueInput;
};


export type MutationUpdateOneAdminChatMessageArgs = {
  data: AdminChatMessageUpdateInput;
  where: AdminChatMessageWhereUniqueInput;
};


export type MutationUpdateOneApplicantProfileArgs = {
  data: ApplicantProfileUpdateInput;
  where: ApplicantProfileWhereUniqueInput;
};


export type MutationUpdateOneApplicationArgs = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};


export type MutationUpdateOneChatArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpdateOneChatMessageArgs = {
  data: ChatMessageUpdateInput;
  where: ChatMessageWhereUniqueInput;
};


export type MutationUpdateOneEmployerProfileArgs = {
  data: EmployerProfileUpdateInput;
  where: EmployerProfileWhereUniqueInput;
};


export type MutationUpdateOneInvitationToVacancyArgs = {
  data: InvitationToVacancyUpdateInput;
  where: InvitationToVacancyWhereUniqueInput;
};


export type MutationUpdateOneResponseToVacancyArgs = {
  data: ResponseToVacancyUpdateInput;
  where: ResponseToVacancyWhereUniqueInput;
};


export type MutationUpdateOneResumeArgs = {
  data: ResumeUpdateInput;
  where: ResumeWhereUniqueInput;
};


export type MutationUpdateOneResumeSavedByEmployerArgs = {
  data: ResumeSavedByEmployerUpdateInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneVacancyArgs = {
  data: VacancyUpdateInput;
  where: VacancyWhereUniqueInput;
};


export type MutationUpdateOneVacancySavedByApplicantArgs = {
  data: VacancySavedByApplicantUpdateInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};


export type MutationUpsertOneAdminArgs = {
  create: AdminCreateInput;
  update: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpsertOneAdminChatArgs = {
  create: AdminChatCreateInput;
  update: AdminChatUpdateInput;
  where: AdminChatWhereUniqueInput;
};


export type MutationUpsertOneAdminChatMessageArgs = {
  create: AdminChatMessageCreateInput;
  update: AdminChatMessageUpdateInput;
  where: AdminChatMessageWhereUniqueInput;
};


export type MutationUpsertOneApplicantProfileArgs = {
  create: ApplicantProfileCreateInput;
  update: ApplicantProfileUpdateInput;
  where: ApplicantProfileWhereUniqueInput;
};


export type MutationUpsertOneApplicationArgs = {
  create: ApplicationCreateInput;
  update: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};


export type MutationUpsertOneChatArgs = {
  create: ChatCreateInput;
  update: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpsertOneChatMessageArgs = {
  create: ChatMessageCreateInput;
  update: ChatMessageUpdateInput;
  where: ChatMessageWhereUniqueInput;
};


export type MutationUpsertOneEmployerProfileArgs = {
  create: EmployerProfileCreateInput;
  update: EmployerProfileUpdateInput;
  where: EmployerProfileWhereUniqueInput;
};


export type MutationUpsertOneInvitationToVacancyArgs = {
  create: InvitationToVacancyCreateInput;
  update: InvitationToVacancyUpdateInput;
  where: InvitationToVacancyWhereUniqueInput;
};


export type MutationUpsertOneResponseToVacancyArgs = {
  create: ResponseToVacancyCreateInput;
  update: ResponseToVacancyUpdateInput;
  where: ResponseToVacancyWhereUniqueInput;
};


export type MutationUpsertOneResumeArgs = {
  create: ResumeCreateInput;
  update: ResumeUpdateInput;
  where: ResumeWhereUniqueInput;
};


export type MutationUpsertOneResumeSavedByEmployerArgs = {
  create: ResumeSavedByEmployerCreateInput;
  update: ResumeSavedByEmployerUpdateInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneVacancyArgs = {
  create: VacancyCreateInput;
  update: VacancyUpdateInput;
  where: VacancyWhereUniqueInput;
};


export type MutationUpsertOneVacancySavedByApplicantArgs = {
  create: VacancySavedByApplicantCreateInput;
  update: VacancySavedByApplicantUpdateInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};


export type MutationVerifyAuthCodeArgs = {
  input: VerifyAuthCodeInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumApplicationTypeFilter = {
  equals?: InputMaybe<ApplicationType>;
  in?: InputMaybe<Array<ApplicationType>>;
  not?: InputMaybe<NestedEnumApplicationTypeFilter>;
  notIn?: InputMaybe<Array<ApplicationType>>;
};

export type NestedEnumApplicationTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumApplicationTypeFilter>;
  _min?: InputMaybe<NestedEnumApplicationTypeFilter>;
  equals?: InputMaybe<ApplicationType>;
  in?: InputMaybe<Array<ApplicationType>>;
  not?: InputMaybe<NestedEnumApplicationTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ApplicationType>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Admin>;
  adminChat?: Maybe<AdminChat>;
  adminChatMessage?: Maybe<AdminChatMessage>;
  adminChatMessages: Array<AdminChatMessage>;
  adminChats: Array<AdminChat>;
  admins: Array<Admin>;
  aggregateAdmin: AggregateAdmin;
  aggregateAdminChat: AggregateAdminChat;
  aggregateAdminChatMessage: AggregateAdminChatMessage;
  aggregateApplicantProfile: AggregateApplicantProfile;
  aggregateApplication: AggregateApplication;
  aggregateChat: AggregateChat;
  aggregateChatMessage: AggregateChatMessage;
  aggregateEmployerProfile: AggregateEmployerProfile;
  aggregateInvitationToVacancy: AggregateInvitationToVacancy;
  aggregateResponseToVacancy: AggregateResponseToVacancy;
  aggregateResume: AggregateResume;
  aggregateResumeSavedByEmployer: AggregateResumeSavedByEmployer;
  aggregateUser: AggregateUser;
  aggregateVacancy: AggregateVacancy;
  aggregateVacancySavedByApplicant: AggregateVacancySavedByApplicant;
  applicantProfile?: Maybe<ApplicantProfile>;
  applicantProfiles: Array<ApplicantProfile>;
  application?: Maybe<Application>;
  applications: Array<Application>;
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessages: Array<ChatMessage>;
  chats: Array<Chat>;
  checkIsAuthenticated: CheckAuthenticatedOutput;
  employerProfile?: Maybe<EmployerProfile>;
  employerProfiles: Array<EmployerProfile>;
  findFirstAdmin?: Maybe<Admin>;
  findFirstAdminChat?: Maybe<AdminChat>;
  findFirstAdminChatMessage?: Maybe<AdminChatMessage>;
  findFirstApplicantProfile?: Maybe<ApplicantProfile>;
  findFirstApplication?: Maybe<Application>;
  findFirstChat?: Maybe<Chat>;
  findFirstChatMessage?: Maybe<ChatMessage>;
  findFirstEmployerProfile?: Maybe<EmployerProfile>;
  findFirstInvitationToVacancy?: Maybe<InvitationToVacancy>;
  findFirstResponseToVacancy?: Maybe<ResponseToVacancy>;
  findFirstResume?: Maybe<Resume>;
  findFirstResumeSavedByEmployer?: Maybe<ResumeSavedByEmployer>;
  findFirstUser?: Maybe<User>;
  findFirstVacancy?: Maybe<Vacancy>;
  findFirstVacancySavedByApplicant?: Maybe<VacancySavedByApplicant>;
  groupByAdmin: Array<AdminGroupBy>;
  groupByAdminChat: Array<AdminChatGroupBy>;
  groupByAdminChatMessage: Array<AdminChatMessageGroupBy>;
  groupByApplicantProfile: Array<ApplicantProfileGroupBy>;
  groupByApplication: Array<ApplicationGroupBy>;
  groupByChat: Array<ChatGroupBy>;
  groupByChatMessage: Array<ChatMessageGroupBy>;
  groupByEmployerProfile: Array<EmployerProfileGroupBy>;
  groupByInvitationToVacancy: Array<InvitationToVacancyGroupBy>;
  groupByResponseToVacancy: Array<ResponseToVacancyGroupBy>;
  groupByResume: Array<ResumeGroupBy>;
  groupByResumeSavedByEmployer: Array<ResumeSavedByEmployerGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVacancy: Array<VacancyGroupBy>;
  groupByVacancySavedByApplicant: Array<VacancySavedByApplicantGroupBy>;
  invitationToVacancies: Array<InvitationToVacancy>;
  invitationToVacancy?: Maybe<InvitationToVacancy>;
  responseToVacancies: Array<ResponseToVacancy>;
  responseToVacancy?: Maybe<ResponseToVacancy>;
  resume?: Maybe<Resume>;
  resumeSavedByEmployer?: Maybe<ResumeSavedByEmployer>;
  resumeSavedByEmployers: Array<ResumeSavedByEmployer>;
  resumes: Array<Resume>;
  user?: Maybe<User>;
  users: Array<User>;
  vacancies: Array<Vacancy>;
  vacancy?: Maybe<Vacancy>;
  vacancySavedByApplicant?: Maybe<VacancySavedByApplicant>;
  vacancySavedByApplicants: Array<VacancySavedByApplicant>;
};


export type QueryAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryAdminChatArgs = {
  where: AdminChatWhereUniqueInput;
};


export type QueryAdminChatMessageArgs = {
  where: AdminChatMessageWhereUniqueInput;
};


export type QueryAdminChatMessagesArgs = {
  cursor?: InputMaybe<AdminChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatMessageWhereInput>;
};


export type QueryAdminChatsArgs = {
  cursor?: InputMaybe<AdminChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatWhereInput>;
};


export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryAggregateAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryAggregateAdminChatArgs = {
  cursor?: InputMaybe<AdminChatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AdminChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatWhereInput>;
};


export type QueryAggregateAdminChatMessageArgs = {
  cursor?: InputMaybe<AdminChatMessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AdminChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatMessageWhereInput>;
};


export type QueryAggregateApplicantProfileArgs = {
  cursor?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ApplicantProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicantProfileWhereInput>;
};


export type QueryAggregateApplicationArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryAggregateChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryAggregateChatMessageArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryAggregateEmployerProfileArgs = {
  cursor?: InputMaybe<EmployerProfileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmployerProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployerProfileWhereInput>;
};


export type QueryAggregateInvitationToVacancyArgs = {
  cursor?: InputMaybe<InvitationToVacancyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InvitationToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type QueryAggregateResponseToVacancyArgs = {
  cursor?: InputMaybe<ResponseToVacancyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ResponseToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type QueryAggregateResumeArgs = {
  cursor?: InputMaybe<ResumeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ResumeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryAggregateResumeSavedByEmployerArgs = {
  cursor?: InputMaybe<ResumeSavedByEmployerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ResumeSavedByEmployerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateVacancyArgs = {
  cursor?: InputMaybe<VacancyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancyWhereInput>;
};


export type QueryAggregateVacancySavedByApplicantArgs = {
  cursor?: InputMaybe<VacancySavedByApplicantWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VacancySavedByApplicantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};


export type QueryApplicantProfileArgs = {
  where: ApplicantProfileWhereUniqueInput;
};


export type QueryApplicantProfilesArgs = {
  cursor?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicantProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicantProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicantProfileWhereInput>;
};


export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type QueryApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput;
};


export type QueryChatMessageArgs = {
  where: ChatMessageWhereUniqueInput;
};


export type QueryChatMessagesArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryEmployerProfileArgs = {
  where: EmployerProfileWhereUniqueInput;
};


export type QueryEmployerProfilesArgs = {
  cursor?: InputMaybe<EmployerProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployerProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployerProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployerProfileWhereInput>;
};


export type QueryFindFirstAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryFindFirstAdminChatArgs = {
  cursor?: InputMaybe<AdminChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatWhereInput>;
};


export type QueryFindFirstAdminChatMessageArgs = {
  cursor?: InputMaybe<AdminChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatMessageWhereInput>;
};


export type QueryFindFirstApplicantProfileArgs = {
  cursor?: InputMaybe<ApplicantProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicantProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicantProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicantProfileWhereInput>;
};


export type QueryFindFirstApplicationArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryFindFirstChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindFirstChatMessageArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryFindFirstEmployerProfileArgs = {
  cursor?: InputMaybe<EmployerProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployerProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployerProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployerProfileWhereInput>;
};


export type QueryFindFirstInvitationToVacancyArgs = {
  cursor?: InputMaybe<InvitationToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<InvitationToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InvitationToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type QueryFindFirstResponseToVacancyArgs = {
  cursor?: InputMaybe<ResponseToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResponseToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResponseToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type QueryFindFirstResumeArgs = {
  cursor?: InputMaybe<ResumeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryFindFirstResumeSavedByEmployerArgs = {
  cursor?: InputMaybe<ResumeSavedByEmployerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumeSavedByEmployerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumeSavedByEmployerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVacancyArgs = {
  cursor?: InputMaybe<VacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<VacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancyWhereInput>;
};


export type QueryFindFirstVacancySavedByApplicantArgs = {
  cursor?: InputMaybe<VacancySavedByApplicantWhereUniqueInput>;
  distinct?: InputMaybe<Array<VacancySavedByApplicantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VacancySavedByApplicantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};


export type QueryGroupByAdminArgs = {
  by: Array<AdminScalarFieldEnum>;
  having?: InputMaybe<AdminScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AdminOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryGroupByAdminChatArgs = {
  by: Array<AdminChatScalarFieldEnum>;
  having?: InputMaybe<AdminChatScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AdminChatOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatWhereInput>;
};


export type QueryGroupByAdminChatMessageArgs = {
  by: Array<AdminChatMessageScalarFieldEnum>;
  having?: InputMaybe<AdminChatMessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AdminChatMessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminChatMessageWhereInput>;
};


export type QueryGroupByApplicantProfileArgs = {
  by: Array<ApplicantProfileScalarFieldEnum>;
  having?: InputMaybe<ApplicantProfileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ApplicantProfileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicantProfileWhereInput>;
};


export type QueryGroupByApplicationArgs = {
  by: Array<ApplicationScalarFieldEnum>;
  having?: InputMaybe<ApplicationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryGroupByChatArgs = {
  by: Array<ChatScalarFieldEnum>;
  having?: InputMaybe<ChatScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChatOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryGroupByChatMessageArgs = {
  by: Array<ChatMessageScalarFieldEnum>;
  having?: InputMaybe<ChatMessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryGroupByEmployerProfileArgs = {
  by: Array<EmployerProfileScalarFieldEnum>;
  having?: InputMaybe<EmployerProfileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmployerProfileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployerProfileWhereInput>;
};


export type QueryGroupByInvitationToVacancyArgs = {
  by: Array<InvitationToVacancyScalarFieldEnum>;
  having?: InputMaybe<InvitationToVacancyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InvitationToVacancyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type QueryGroupByResponseToVacancyArgs = {
  by: Array<ResponseToVacancyScalarFieldEnum>;
  having?: InputMaybe<ResponseToVacancyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ResponseToVacancyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type QueryGroupByResumeArgs = {
  by: Array<ResumeScalarFieldEnum>;
  having?: InputMaybe<ResumeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ResumeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryGroupByResumeSavedByEmployerArgs = {
  by: Array<ResumeSavedByEmployerScalarFieldEnum>;
  having?: InputMaybe<ResumeSavedByEmployerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ResumeSavedByEmployerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByVacancyArgs = {
  by: Array<VacancyScalarFieldEnum>;
  having?: InputMaybe<VacancyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VacancyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancyWhereInput>;
};


export type QueryGroupByVacancySavedByApplicantArgs = {
  by: Array<VacancySavedByApplicantScalarFieldEnum>;
  having?: InputMaybe<VacancySavedByApplicantScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VacancySavedByApplicantOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};


export type QueryInvitationToVacanciesArgs = {
  cursor?: InputMaybe<InvitationToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<InvitationToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InvitationToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type QueryInvitationToVacancyArgs = {
  where: InvitationToVacancyWhereUniqueInput;
};


export type QueryResponseToVacanciesArgs = {
  cursor?: InputMaybe<ResponseToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResponseToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResponseToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type QueryResponseToVacancyArgs = {
  where: ResponseToVacancyWhereUniqueInput;
};


export type QueryResumeArgs = {
  where: ResumeWhereUniqueInput;
};


export type QueryResumeSavedByEmployerArgs = {
  where: ResumeSavedByEmployerWhereUniqueInput;
};


export type QueryResumeSavedByEmployersArgs = {
  cursor?: InputMaybe<ResumeSavedByEmployerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumeSavedByEmployerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumeSavedByEmployerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};


export type QueryResumesArgs = {
  cursor?: InputMaybe<ResumeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVacanciesArgs = {
  cursor?: InputMaybe<VacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<VacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancyWhereInput>;
};


export type QueryVacancyArgs = {
  where: VacancyWhereUniqueInput;
};


export type QueryVacancySavedByApplicantArgs = {
  where: VacancySavedByApplicantWhereUniqueInput;
};


export type QueryVacancySavedByApplicantsArgs = {
  cursor?: InputMaybe<VacancySavedByApplicantWhereUniqueInput>;
  distinct?: InputMaybe<Array<VacancySavedByApplicantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VacancySavedByApplicantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ResponseToVacancy = {
  __typename?: 'ResponseToVacancy';
  coverLetter?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  resume: Resume;
  resumeId: Scalars['String'];
  vacancy: Vacancy;
  vacancyId: Scalars['String'];
  viewed: Scalars['Boolean'];
};

export type ResponseToVacancyCountAggregate = {
  __typename?: 'ResponseToVacancyCountAggregate';
  _all: Scalars['Int'];
  coverLetter: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  resumeId: Scalars['Int'];
  vacancyId: Scalars['Int'];
  viewed: Scalars['Int'];
};

export type ResponseToVacancyCountOrderByAggregateInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type ResponseToVacancyCreateInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume: ResumeCreateNestedOneWithoutResponsesInput;
  vacancy: VacancyCreateNestedOneWithoutResponsesInput;
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyCreateManyInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resumeId: Scalars['String'];
  vacancyId: Scalars['String'];
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyCreateManyResumeInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  vacancyId: Scalars['String'];
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyCreateManyResumeInputEnvelope = {
  data: Array<ResponseToVacancyCreateManyResumeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyCreateManyVacancyInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resumeId: Scalars['String'];
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyCreateManyVacancyInputEnvelope = {
  data: Array<ResponseToVacancyCreateManyVacancyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyCreateNestedManyWithoutResumeInput = {
  connect?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseToVacancyCreateOrConnectWithoutResumeInput>>;
  create?: InputMaybe<Array<ResponseToVacancyCreateWithoutResumeInput>>;
  createMany?: InputMaybe<ResponseToVacancyCreateManyResumeInputEnvelope>;
};

export type ResponseToVacancyCreateNestedManyWithoutVacancyInput = {
  connect?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseToVacancyCreateOrConnectWithoutVacancyInput>>;
  create?: InputMaybe<Array<ResponseToVacancyCreateWithoutVacancyInput>>;
  createMany?: InputMaybe<ResponseToVacancyCreateManyVacancyInputEnvelope>;
};

export type ResponseToVacancyCreateOrConnectWithoutResumeInput = {
  create: ResponseToVacancyCreateWithoutResumeInput;
  where: ResponseToVacancyWhereUniqueInput;
};

export type ResponseToVacancyCreateOrConnectWithoutVacancyInput = {
  create: ResponseToVacancyCreateWithoutVacancyInput;
  where: ResponseToVacancyWhereUniqueInput;
};

export type ResponseToVacancyCreateWithoutResumeInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  vacancy: VacancyCreateNestedOneWithoutResponsesInput;
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyCreateWithoutVacancyInput = {
  coverLetter?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  resume: ResumeCreateNestedOneWithoutResponsesInput;
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseToVacancyGroupBy = {
  __typename?: 'ResponseToVacancyGroupBy';
  _count?: Maybe<ResponseToVacancyCountAggregate>;
  _max?: Maybe<ResponseToVacancyMaxAggregate>;
  _min?: Maybe<ResponseToVacancyMinAggregate>;
  coverLetter?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  resumeId: Scalars['String'];
  vacancyId: Scalars['String'];
  viewed: Scalars['Boolean'];
};

export type ResponseToVacancyListRelationFilter = {
  every?: InputMaybe<ResponseToVacancyWhereInput>;
  none?: InputMaybe<ResponseToVacancyWhereInput>;
  some?: InputMaybe<ResponseToVacancyWhereInput>;
};

export type ResponseToVacancyMaxAggregate = {
  __typename?: 'ResponseToVacancyMaxAggregate';
  coverLetter?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  resumeId?: Maybe<Scalars['String']>;
  vacancyId?: Maybe<Scalars['String']>;
  viewed?: Maybe<Scalars['Boolean']>;
};

export type ResponseToVacancyMaxOrderByAggregateInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type ResponseToVacancyMinAggregate = {
  __typename?: 'ResponseToVacancyMinAggregate';
  coverLetter?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  resumeId?: Maybe<Scalars['String']>;
  vacancyId?: Maybe<Scalars['String']>;
  viewed?: Maybe<Scalars['Boolean']>;
};

export type ResponseToVacancyMinOrderByAggregateInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type ResponseToVacancyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ResponseToVacancyOrderByWithAggregationInput = {
  _count?: InputMaybe<ResponseToVacancyCountOrderByAggregateInput>;
  _max?: InputMaybe<ResponseToVacancyMaxOrderByAggregateInput>;
  _min?: InputMaybe<ResponseToVacancyMinOrderByAggregateInput>;
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export type ResponseToVacancyOrderByWithRelationInput = {
  coverLetter?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resume?: InputMaybe<ResumeOrderByWithRelationInput>;
  resumeId?: InputMaybe<SortOrder>;
  vacancy?: InputMaybe<VacancyOrderByWithRelationInput>;
  vacancyId?: InputMaybe<SortOrder>;
  viewed?: InputMaybe<SortOrder>;
};

export enum ResponseToVacancyScalarFieldEnum {
  CoverLetter = 'coverLetter',
  CreatedAt = 'createdAt',
  Id = 'id',
  ResumeId = 'resumeId',
  VacancyId = 'vacancyId',
  Viewed = 'viewed'
}

export type ResponseToVacancyScalarWhereInput = {
  AND?: InputMaybe<Array<ResponseToVacancyScalarWhereInput>>;
  NOT?: InputMaybe<Array<ResponseToVacancyScalarWhereInput>>;
  OR?: InputMaybe<Array<ResponseToVacancyScalarWhereInput>>;
  coverLetter?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resumeId?: InputMaybe<StringFilter>;
  vacancyId?: InputMaybe<StringFilter>;
  viewed?: InputMaybe<BoolFilter>;
};

export type ResponseToVacancyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ResponseToVacancyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ResponseToVacancyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ResponseToVacancyScalarWhereWithAggregatesInput>>;
  coverLetter?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  resumeId?: InputMaybe<StringWithAggregatesFilter>;
  vacancyId?: InputMaybe<StringWithAggregatesFilter>;
  viewed?: InputMaybe<BoolWithAggregatesFilter>;
};

export type ResponseToVacancyUpdateInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneRequiredWithoutResponsesNestedInput>;
  vacancy?: InputMaybe<VacancyUpdateOneRequiredWithoutResponsesNestedInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ResponseToVacancyUpdateManyMutationInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ResponseToVacancyUpdateManyWithWhereWithoutResumeInput = {
  data: ResponseToVacancyUpdateManyMutationInput;
  where: ResponseToVacancyScalarWhereInput;
};

export type ResponseToVacancyUpdateManyWithWhereWithoutVacancyInput = {
  data: ResponseToVacancyUpdateManyMutationInput;
  where: ResponseToVacancyScalarWhereInput;
};

export type ResponseToVacancyUpdateManyWithoutResumeNestedInput = {
  connect?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseToVacancyCreateOrConnectWithoutResumeInput>>;
  create?: InputMaybe<Array<ResponseToVacancyCreateWithoutResumeInput>>;
  createMany?: InputMaybe<ResponseToVacancyCreateManyResumeInputEnvelope>;
  delete?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResponseToVacancyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  set?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  update?: InputMaybe<Array<ResponseToVacancyUpdateWithWhereUniqueWithoutResumeInput>>;
  updateMany?: InputMaybe<Array<ResponseToVacancyUpdateManyWithWhereWithoutResumeInput>>;
  upsert?: InputMaybe<Array<ResponseToVacancyUpsertWithWhereUniqueWithoutResumeInput>>;
};

export type ResponseToVacancyUpdateManyWithoutVacancyNestedInput = {
  connect?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseToVacancyCreateOrConnectWithoutVacancyInput>>;
  create?: InputMaybe<Array<ResponseToVacancyCreateWithoutVacancyInput>>;
  createMany?: InputMaybe<ResponseToVacancyCreateManyVacancyInputEnvelope>;
  delete?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResponseToVacancyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  set?: InputMaybe<Array<ResponseToVacancyWhereUniqueInput>>;
  update?: InputMaybe<Array<ResponseToVacancyUpdateWithWhereUniqueWithoutVacancyInput>>;
  updateMany?: InputMaybe<Array<ResponseToVacancyUpdateManyWithWhereWithoutVacancyInput>>;
  upsert?: InputMaybe<Array<ResponseToVacancyUpsertWithWhereUniqueWithoutVacancyInput>>;
};

export type ResponseToVacancyUpdateWithWhereUniqueWithoutResumeInput = {
  data: ResponseToVacancyUpdateWithoutResumeInput;
  where: ResponseToVacancyWhereUniqueInput;
};

export type ResponseToVacancyUpdateWithWhereUniqueWithoutVacancyInput = {
  data: ResponseToVacancyUpdateWithoutVacancyInput;
  where: ResponseToVacancyWhereUniqueInput;
};

export type ResponseToVacancyUpdateWithoutResumeInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  vacancy?: InputMaybe<VacancyUpdateOneRequiredWithoutResponsesNestedInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ResponseToVacancyUpdateWithoutVacancyInput = {
  coverLetter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneRequiredWithoutResponsesNestedInput>;
  viewed?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ResponseToVacancyUpsertWithWhereUniqueWithoutResumeInput = {
  create: ResponseToVacancyCreateWithoutResumeInput;
  update: ResponseToVacancyUpdateWithoutResumeInput;
  where: ResponseToVacancyWhereUniqueInput;
};

export type ResponseToVacancyUpsertWithWhereUniqueWithoutVacancyInput = {
  create: ResponseToVacancyCreateWithoutVacancyInput;
  update: ResponseToVacancyUpdateWithoutVacancyInput;
  where: ResponseToVacancyWhereUniqueInput;
};

export type ResponseToVacancyWhereInput = {
  AND?: InputMaybe<Array<ResponseToVacancyWhereInput>>;
  NOT?: InputMaybe<Array<ResponseToVacancyWhereInput>>;
  OR?: InputMaybe<Array<ResponseToVacancyWhereInput>>;
  coverLetter?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeRelationFilter>;
  resumeId?: InputMaybe<StringFilter>;
  vacancy?: InputMaybe<VacancyRelationFilter>;
  vacancyId?: InputMaybe<StringFilter>;
  viewed?: InputMaybe<BoolFilter>;
};

export type ResponseToVacancyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Resume = {
  __typename?: 'Resume';
  _count?: Maybe<ResumeCount>;
  aboutMe?: Maybe<Scalars['String']>;
  applicantProfile: ApplicantProfile;
  applicantProfileId: Scalars['String'];
  birthday: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  desiredPost?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  invitations: Array<InvitationToVacancy>;
  lastname?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  responses: Array<ResponseToVacancy>;
  savedBy: Array<ResumeSavedByEmployer>;
  updatedAt: Scalars['DateTime'];
  views: Scalars['Int'];
};


export type ResumeInvitationsArgs = {
  cursor?: InputMaybe<InvitationToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<InvitationToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InvitationToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type ResumeResponsesArgs = {
  cursor?: InputMaybe<ResponseToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResponseToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResponseToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type ResumeSavedByArgs = {
  cursor?: InputMaybe<ResumeSavedByEmployerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumeSavedByEmployerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumeSavedByEmployerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};

export type ResumeAvgAggregate = {
  __typename?: 'ResumeAvgAggregate';
  fieldOfActivity?: Maybe<Scalars['Float']>;
  placeOfResidence?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

export type ResumeAvgOrderByAggregateInput = {
  fieldOfActivity?: InputMaybe<SortOrder>;
  placeOfResidence?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ResumeCount = {
  __typename?: 'ResumeCount';
  invitations: Scalars['Int'];
  responses: Scalars['Int'];
  savedBy: Scalars['Int'];
};

export type ResumeCountAggregate = {
  __typename?: 'ResumeCountAggregate';
  _all: Scalars['Int'];
  aboutMe: Scalars['Int'];
  applicantProfileId: Scalars['Int'];
  birthday: Scalars['Int'];
  createdAt: Scalars['Int'];
  desiredPost: Scalars['Int'];
  education: Scalars['Int'];
  experience: Scalars['Int'];
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['Int'];
  id: Scalars['Int'];
  lastname: Scalars['Int'];
  phone: Scalars['Int'];
  phoneHidden: Scalars['Int'];
  placeOfResidence: Scalars['Int'];
  updatedAt: Scalars['Int'];
  views: Scalars['Int'];
};

export type ResumeCountOrderByAggregateInput = {
  aboutMe?: InputMaybe<SortOrder>;
  applicantProfileId?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  desiredPost?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfResidence?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ResumeCreateInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  applicantProfile: ApplicantProfileCreateNestedOneWithoutResumeInput;
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desiredPost?: InputMaybe<Scalars['String']>;
  education?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutResumeInput>;
  lastname?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutResumeInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutResumeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ResumeCreateManyInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  applicantProfileId: Scalars['String'];
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desiredPost?: InputMaybe<Scalars['String']>;
  education?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ResumeCreateNestedOneWithoutApplicantProfileInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutApplicantProfileInput>;
  create?: InputMaybe<ResumeCreateWithoutApplicantProfileInput>;
};

export type ResumeCreateNestedOneWithoutInvitationsInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<ResumeCreateWithoutInvitationsInput>;
};

export type ResumeCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<ResumeCreateWithoutResponsesInput>;
};

export type ResumeCreateNestedOneWithoutSavedByInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutSavedByInput>;
  create?: InputMaybe<ResumeCreateWithoutSavedByInput>;
};

export type ResumeCreateOrConnectWithoutApplicantProfileInput = {
  create: ResumeCreateWithoutApplicantProfileInput;
  where: ResumeWhereUniqueInput;
};

export type ResumeCreateOrConnectWithoutInvitationsInput = {
  create: ResumeCreateWithoutInvitationsInput;
  where: ResumeWhereUniqueInput;
};

export type ResumeCreateOrConnectWithoutResponsesInput = {
  create: ResumeCreateWithoutResponsesInput;
  where: ResumeWhereUniqueInput;
};

export type ResumeCreateOrConnectWithoutSavedByInput = {
  create: ResumeCreateWithoutSavedByInput;
  where: ResumeWhereUniqueInput;
};

export type ResumeCreateWithoutApplicantProfileInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desiredPost?: InputMaybe<Scalars['String']>;
  education?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutResumeInput>;
  lastname?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutResumeInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutResumeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ResumeCreateWithoutInvitationsInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  applicantProfile: ApplicantProfileCreateNestedOneWithoutResumeInput;
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desiredPost?: InputMaybe<Scalars['String']>;
  education?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutResumeInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutResumeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ResumeCreateWithoutResponsesInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  applicantProfile: ApplicantProfileCreateNestedOneWithoutResumeInput;
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desiredPost?: InputMaybe<Scalars['String']>;
  education?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutResumeInput>;
  lastname?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  savedBy?: InputMaybe<ResumeSavedByEmployerCreateNestedManyWithoutResumeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ResumeCreateWithoutSavedByInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  applicantProfile: ApplicantProfileCreateNestedOneWithoutResumeInput;
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desiredPost?: InputMaybe<Scalars['String']>;
  education?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutResumeInput>;
  lastname?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutResumeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ResumeGroupBy = {
  __typename?: 'ResumeGroupBy';
  _avg?: Maybe<ResumeAvgAggregate>;
  _count?: Maybe<ResumeCountAggregate>;
  _max?: Maybe<ResumeMaxAggregate>;
  _min?: Maybe<ResumeMinAggregate>;
  _sum?: Maybe<ResumeSumAggregate>;
  aboutMe?: Maybe<Scalars['String']>;
  applicantProfileId: Scalars['String'];
  birthday: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  desiredPost?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfResidence: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  views: Scalars['Int'];
};

export type ResumeMaxAggregate = {
  __typename?: 'ResumeMaxAggregate';
  aboutMe?: Maybe<Scalars['String']>;
  applicantProfileId?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  desiredPost?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  fieldOfActivity?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneHidden?: Maybe<Scalars['Boolean']>;
  placeOfResidence?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};

export type ResumeMaxOrderByAggregateInput = {
  aboutMe?: InputMaybe<SortOrder>;
  applicantProfileId?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  desiredPost?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfResidence?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ResumeMinAggregate = {
  __typename?: 'ResumeMinAggregate';
  aboutMe?: Maybe<Scalars['String']>;
  applicantProfileId?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  desiredPost?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  fieldOfActivity?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneHidden?: Maybe<Scalars['Boolean']>;
  placeOfResidence?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};

export type ResumeMinOrderByAggregateInput = {
  aboutMe?: InputMaybe<SortOrder>;
  applicantProfileId?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  desiredPost?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfResidence?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ResumeOrderByWithAggregationInput = {
  _avg?: InputMaybe<ResumeAvgOrderByAggregateInput>;
  _count?: InputMaybe<ResumeCountOrderByAggregateInput>;
  _max?: InputMaybe<ResumeMaxOrderByAggregateInput>;
  _min?: InputMaybe<ResumeMinOrderByAggregateInput>;
  _sum?: InputMaybe<ResumeSumOrderByAggregateInput>;
  aboutMe?: InputMaybe<SortOrder>;
  applicantProfileId?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  desiredPost?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfResidence?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ResumeOrderByWithRelationInput = {
  aboutMe?: InputMaybe<SortOrder>;
  applicantProfile?: InputMaybe<ApplicantProfileOrderByWithRelationInput>;
  applicantProfileId?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  desiredPost?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invitations?: InputMaybe<InvitationToVacancyOrderByRelationAggregateInput>;
  lastname?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfResidence?: InputMaybe<SortOrder>;
  responses?: InputMaybe<ResponseToVacancyOrderByRelationAggregateInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ResumeRelationFilter = {
  is?: InputMaybe<ResumeWhereInput>;
  isNot?: InputMaybe<ResumeWhereInput>;
};

export type ResumeSavedByEmployer = {
  __typename?: 'ResumeSavedByEmployer';
  assignedAt: Scalars['DateTime'];
  employerProfile: EmployerProfile;
  employerProfileId: Scalars['String'];
  resume: Resume;
  resumeId: Scalars['String'];
};

export type ResumeSavedByEmployerCountAggregate = {
  __typename?: 'ResumeSavedByEmployerCountAggregate';
  _all: Scalars['Int'];
  assignedAt: Scalars['Int'];
  employerProfileId: Scalars['Int'];
  resumeId: Scalars['Int'];
};

export type ResumeSavedByEmployerCountOrderByAggregateInput = {
  assignedAt?: InputMaybe<SortOrder>;
  employerProfileId?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
};

export type ResumeSavedByEmployerCreateInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  employerProfile: EmployerProfileCreateNestedOneWithoutSavedResumesInput;
  resume: ResumeCreateNestedOneWithoutSavedByInput;
};

export type ResumeSavedByEmployerCreateManyEmployerProfileInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  resumeId: Scalars['String'];
};

export type ResumeSavedByEmployerCreateManyEmployerProfileInputEnvelope = {
  data: Array<ResumeSavedByEmployerCreateManyEmployerProfileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResumeSavedByEmployerCreateManyInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  employerProfileId: Scalars['String'];
  resumeId: Scalars['String'];
};

export type ResumeSavedByEmployerCreateManyResumeInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  employerProfileId: Scalars['String'];
};

export type ResumeSavedByEmployerCreateManyResumeInputEnvelope = {
  data: Array<ResumeSavedByEmployerCreateManyResumeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResumeSavedByEmployerCreateNestedManyWithoutEmployerProfileInput = {
  connect?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResumeSavedByEmployerCreateOrConnectWithoutEmployerProfileInput>>;
  create?: InputMaybe<Array<ResumeSavedByEmployerCreateWithoutEmployerProfileInput>>;
  createMany?: InputMaybe<ResumeSavedByEmployerCreateManyEmployerProfileInputEnvelope>;
};

export type ResumeSavedByEmployerCreateNestedManyWithoutResumeInput = {
  connect?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResumeSavedByEmployerCreateOrConnectWithoutResumeInput>>;
  create?: InputMaybe<Array<ResumeSavedByEmployerCreateWithoutResumeInput>>;
  createMany?: InputMaybe<ResumeSavedByEmployerCreateManyResumeInputEnvelope>;
};

export type ResumeSavedByEmployerCreateOrConnectWithoutEmployerProfileInput = {
  create: ResumeSavedByEmployerCreateWithoutEmployerProfileInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};

export type ResumeSavedByEmployerCreateOrConnectWithoutResumeInput = {
  create: ResumeSavedByEmployerCreateWithoutResumeInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};

export type ResumeSavedByEmployerCreateWithoutEmployerProfileInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  resume: ResumeCreateNestedOneWithoutSavedByInput;
};

export type ResumeSavedByEmployerCreateWithoutResumeInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  employerProfile: EmployerProfileCreateNestedOneWithoutSavedResumesInput;
};

export type ResumeSavedByEmployerEmployerProfileIdResumeIdCompoundUniqueInput = {
  employerProfileId: Scalars['String'];
  resumeId: Scalars['String'];
};

export type ResumeSavedByEmployerGroupBy = {
  __typename?: 'ResumeSavedByEmployerGroupBy';
  _count?: Maybe<ResumeSavedByEmployerCountAggregate>;
  _max?: Maybe<ResumeSavedByEmployerMaxAggregate>;
  _min?: Maybe<ResumeSavedByEmployerMinAggregate>;
  assignedAt: Scalars['DateTime'];
  employerProfileId: Scalars['String'];
  resumeId: Scalars['String'];
};

export type ResumeSavedByEmployerListRelationFilter = {
  every?: InputMaybe<ResumeSavedByEmployerWhereInput>;
  none?: InputMaybe<ResumeSavedByEmployerWhereInput>;
  some?: InputMaybe<ResumeSavedByEmployerWhereInput>;
};

export type ResumeSavedByEmployerMaxAggregate = {
  __typename?: 'ResumeSavedByEmployerMaxAggregate';
  assignedAt?: Maybe<Scalars['DateTime']>;
  employerProfileId?: Maybe<Scalars['String']>;
  resumeId?: Maybe<Scalars['String']>;
};

export type ResumeSavedByEmployerMaxOrderByAggregateInput = {
  assignedAt?: InputMaybe<SortOrder>;
  employerProfileId?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
};

export type ResumeSavedByEmployerMinAggregate = {
  __typename?: 'ResumeSavedByEmployerMinAggregate';
  assignedAt?: Maybe<Scalars['DateTime']>;
  employerProfileId?: Maybe<Scalars['String']>;
  resumeId?: Maybe<Scalars['String']>;
};

export type ResumeSavedByEmployerMinOrderByAggregateInput = {
  assignedAt?: InputMaybe<SortOrder>;
  employerProfileId?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
};

export type ResumeSavedByEmployerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ResumeSavedByEmployerOrderByWithAggregationInput = {
  _count?: InputMaybe<ResumeSavedByEmployerCountOrderByAggregateInput>;
  _max?: InputMaybe<ResumeSavedByEmployerMaxOrderByAggregateInput>;
  _min?: InputMaybe<ResumeSavedByEmployerMinOrderByAggregateInput>;
  assignedAt?: InputMaybe<SortOrder>;
  employerProfileId?: InputMaybe<SortOrder>;
  resumeId?: InputMaybe<SortOrder>;
};

export type ResumeSavedByEmployerOrderByWithRelationInput = {
  assignedAt?: InputMaybe<SortOrder>;
  employerProfile?: InputMaybe<EmployerProfileOrderByWithRelationInput>;
  employerProfileId?: InputMaybe<SortOrder>;
  resume?: InputMaybe<ResumeOrderByWithRelationInput>;
  resumeId?: InputMaybe<SortOrder>;
};

export enum ResumeSavedByEmployerScalarFieldEnum {
  AssignedAt = 'assignedAt',
  EmployerProfileId = 'employerProfileId',
  ResumeId = 'resumeId'
}

export type ResumeSavedByEmployerScalarWhereInput = {
  AND?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereInput>>;
  NOT?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereInput>>;
  OR?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereInput>>;
  assignedAt?: InputMaybe<DateTimeFilter>;
  employerProfileId?: InputMaybe<StringFilter>;
  resumeId?: InputMaybe<StringFilter>;
};

export type ResumeSavedByEmployerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereWithAggregatesInput>>;
  assignedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  employerProfileId?: InputMaybe<StringWithAggregatesFilter>;
  resumeId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ResumeSavedByEmployerUpdateInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employerProfile?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutSavedResumesNestedInput>;
  resume?: InputMaybe<ResumeUpdateOneRequiredWithoutSavedByNestedInput>;
};

export type ResumeSavedByEmployerUpdateManyMutationInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResumeSavedByEmployerUpdateManyWithWhereWithoutEmployerProfileInput = {
  data: ResumeSavedByEmployerUpdateManyMutationInput;
  where: ResumeSavedByEmployerScalarWhereInput;
};

export type ResumeSavedByEmployerUpdateManyWithWhereWithoutResumeInput = {
  data: ResumeSavedByEmployerUpdateManyMutationInput;
  where: ResumeSavedByEmployerScalarWhereInput;
};

export type ResumeSavedByEmployerUpdateManyWithoutEmployerProfileNestedInput = {
  connect?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResumeSavedByEmployerCreateOrConnectWithoutEmployerProfileInput>>;
  create?: InputMaybe<Array<ResumeSavedByEmployerCreateWithoutEmployerProfileInput>>;
  createMany?: InputMaybe<ResumeSavedByEmployerCreateManyEmployerProfileInputEnvelope>;
  delete?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  set?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  update?: InputMaybe<Array<ResumeSavedByEmployerUpdateWithWhereUniqueWithoutEmployerProfileInput>>;
  updateMany?: InputMaybe<Array<ResumeSavedByEmployerUpdateManyWithWhereWithoutEmployerProfileInput>>;
  upsert?: InputMaybe<Array<ResumeSavedByEmployerUpsertWithWhereUniqueWithoutEmployerProfileInput>>;
};

export type ResumeSavedByEmployerUpdateManyWithoutResumeNestedInput = {
  connect?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResumeSavedByEmployerCreateOrConnectWithoutResumeInput>>;
  create?: InputMaybe<Array<ResumeSavedByEmployerCreateWithoutResumeInput>>;
  createMany?: InputMaybe<ResumeSavedByEmployerCreateManyResumeInputEnvelope>;
  delete?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResumeSavedByEmployerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  set?: InputMaybe<Array<ResumeSavedByEmployerWhereUniqueInput>>;
  update?: InputMaybe<Array<ResumeSavedByEmployerUpdateWithWhereUniqueWithoutResumeInput>>;
  updateMany?: InputMaybe<Array<ResumeSavedByEmployerUpdateManyWithWhereWithoutResumeInput>>;
  upsert?: InputMaybe<Array<ResumeSavedByEmployerUpsertWithWhereUniqueWithoutResumeInput>>;
};

export type ResumeSavedByEmployerUpdateWithWhereUniqueWithoutEmployerProfileInput = {
  data: ResumeSavedByEmployerUpdateWithoutEmployerProfileInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};

export type ResumeSavedByEmployerUpdateWithWhereUniqueWithoutResumeInput = {
  data: ResumeSavedByEmployerUpdateWithoutResumeInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};

export type ResumeSavedByEmployerUpdateWithoutEmployerProfileInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  resume?: InputMaybe<ResumeUpdateOneRequiredWithoutSavedByNestedInput>;
};

export type ResumeSavedByEmployerUpdateWithoutResumeInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employerProfile?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutSavedResumesNestedInput>;
};

export type ResumeSavedByEmployerUpsertWithWhereUniqueWithoutEmployerProfileInput = {
  create: ResumeSavedByEmployerCreateWithoutEmployerProfileInput;
  update: ResumeSavedByEmployerUpdateWithoutEmployerProfileInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};

export type ResumeSavedByEmployerUpsertWithWhereUniqueWithoutResumeInput = {
  create: ResumeSavedByEmployerCreateWithoutResumeInput;
  update: ResumeSavedByEmployerUpdateWithoutResumeInput;
  where: ResumeSavedByEmployerWhereUniqueInput;
};

export type ResumeSavedByEmployerWhereInput = {
  AND?: InputMaybe<Array<ResumeSavedByEmployerWhereInput>>;
  NOT?: InputMaybe<Array<ResumeSavedByEmployerWhereInput>>;
  OR?: InputMaybe<Array<ResumeSavedByEmployerWhereInput>>;
  assignedAt?: InputMaybe<DateTimeFilter>;
  employerProfile?: InputMaybe<EmployerProfileRelationFilter>;
  employerProfileId?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeRelationFilter>;
  resumeId?: InputMaybe<StringFilter>;
};

export type ResumeSavedByEmployerWhereUniqueInput = {
  employerProfileId_resumeId?: InputMaybe<ResumeSavedByEmployerEmployerProfileIdResumeIdCompoundUniqueInput>;
};

export enum ResumeScalarFieldEnum {
  AboutMe = 'aboutMe',
  ApplicantProfileId = 'applicantProfileId',
  Birthday = 'birthday',
  CreatedAt = 'createdAt',
  DesiredPost = 'desiredPost',
  Education = 'education',
  Experience = 'experience',
  FieldOfActivity = 'fieldOfActivity',
  Firstname = 'firstname',
  Id = 'id',
  Lastname = 'lastname',
  Phone = 'phone',
  PhoneHidden = 'phoneHidden',
  PlaceOfResidence = 'placeOfResidence',
  UpdatedAt = 'updatedAt',
  Views = 'views'
}

export type ResumeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ResumeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ResumeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ResumeScalarWhereWithAggregatesInput>>;
  aboutMe?: InputMaybe<StringNullableWithAggregatesFilter>;
  applicantProfileId?: InputMaybe<StringWithAggregatesFilter>;
  birthday?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  desiredPost?: InputMaybe<StringNullableWithAggregatesFilter>;
  education?: InputMaybe<StringNullableWithAggregatesFilter>;
  experience?: InputMaybe<StringNullableWithAggregatesFilter>;
  fieldOfActivity?: InputMaybe<IntWithAggregatesFilter>;
  firstname?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastname?: InputMaybe<StringNullableWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  phoneHidden?: InputMaybe<BoolWithAggregatesFilter>;
  placeOfResidence?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  views?: InputMaybe<IntWithAggregatesFilter>;
};

export type ResumeSumAggregate = {
  __typename?: 'ResumeSumAggregate';
  fieldOfActivity?: Maybe<Scalars['Int']>;
  placeOfResidence?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
};

export type ResumeSumOrderByAggregateInput = {
  fieldOfActivity?: InputMaybe<SortOrder>;
  placeOfResidence?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type ResumeUpdateInput = {
  aboutMe?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutResumeNestedInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  desiredPost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutResumeNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfResidence?: InputMaybe<IntFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutResumeNestedInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutResumeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ResumeUpdateManyMutationInput = {
  aboutMe?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  desiredPost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfResidence?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ResumeUpdateOneRequiredWithoutInvitationsNestedInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<ResumeCreateWithoutInvitationsInput>;
  update?: InputMaybe<ResumeUpdateWithoutInvitationsInput>;
  upsert?: InputMaybe<ResumeUpsertWithoutInvitationsInput>;
};

export type ResumeUpdateOneRequiredWithoutResponsesNestedInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<ResumeCreateWithoutResponsesInput>;
  update?: InputMaybe<ResumeUpdateWithoutResponsesInput>;
  upsert?: InputMaybe<ResumeUpsertWithoutResponsesInput>;
};

export type ResumeUpdateOneRequiredWithoutSavedByNestedInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutSavedByInput>;
  create?: InputMaybe<ResumeCreateWithoutSavedByInput>;
  update?: InputMaybe<ResumeUpdateWithoutSavedByInput>;
  upsert?: InputMaybe<ResumeUpsertWithoutSavedByInput>;
};

export type ResumeUpdateOneWithoutApplicantProfileNestedInput = {
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumeCreateOrConnectWithoutApplicantProfileInput>;
  create?: InputMaybe<ResumeCreateWithoutApplicantProfileInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ResumeUpdateWithoutApplicantProfileInput>;
  upsert?: InputMaybe<ResumeUpsertWithoutApplicantProfileInput>;
};

export type ResumeUpdateWithoutApplicantProfileInput = {
  aboutMe?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  desiredPost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutResumeNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfResidence?: InputMaybe<IntFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutResumeNestedInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutResumeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ResumeUpdateWithoutInvitationsInput = {
  aboutMe?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutResumeNestedInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  desiredPost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfResidence?: InputMaybe<IntFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutResumeNestedInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutResumeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ResumeUpdateWithoutResponsesInput = {
  aboutMe?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutResumeNestedInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  desiredPost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutResumeNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfResidence?: InputMaybe<IntFieldUpdateOperationsInput>;
  savedBy?: InputMaybe<ResumeSavedByEmployerUpdateManyWithoutResumeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ResumeUpdateWithoutSavedByInput = {
  aboutMe?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutResumeNestedInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  desiredPost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutResumeNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfResidence?: InputMaybe<IntFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutResumeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ResumeUpsertWithoutApplicantProfileInput = {
  create: ResumeCreateWithoutApplicantProfileInput;
  update: ResumeUpdateWithoutApplicantProfileInput;
};

export type ResumeUpsertWithoutInvitationsInput = {
  create: ResumeCreateWithoutInvitationsInput;
  update: ResumeUpdateWithoutInvitationsInput;
};

export type ResumeUpsertWithoutResponsesInput = {
  create: ResumeCreateWithoutResponsesInput;
  update: ResumeUpdateWithoutResponsesInput;
};

export type ResumeUpsertWithoutSavedByInput = {
  create: ResumeCreateWithoutSavedByInput;
  update: ResumeUpdateWithoutSavedByInput;
};

export type ResumeWhereInput = {
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  aboutMe?: InputMaybe<StringNullableFilter>;
  applicantProfile?: InputMaybe<ApplicantProfileRelationFilter>;
  applicantProfileId?: InputMaybe<StringFilter>;
  birthday?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  desiredPost?: InputMaybe<StringNullableFilter>;
  education?: InputMaybe<StringNullableFilter>;
  experience?: InputMaybe<StringNullableFilter>;
  fieldOfActivity?: InputMaybe<IntFilter>;
  firstname?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  invitations?: InputMaybe<InvitationToVacancyListRelationFilter>;
  lastname?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringFilter>;
  phoneHidden?: InputMaybe<BoolFilter>;
  placeOfResidence?: InputMaybe<IntFilter>;
  responses?: InputMaybe<ResponseToVacancyListRelationFilter>;
  savedBy?: InputMaybe<ResumeSavedByEmployerListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type ResumeWhereUniqueInput = {
  applicantProfileId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type SendMessageInput = {
  phone: Scalars['String'];
};

export type SendMessageOutput = {
  __typename?: 'SendMessageOutput';
  authToken: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  applicantProfile?: Maybe<ApplicantProfile>;
  chatWithAdmin?: Maybe<AdminChat>;
  createdAt: Scalars['DateTime'];
  employerProfile?: Maybe<EmployerProfile>;
  id: Scalars['String'];
  login: Scalars['String'];
  role: UserRole;
  updatedAt: Scalars['DateTime'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  login: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  applicantProfile?: InputMaybe<ApplicantProfileCreateNestedOneWithoutUserInput>;
  chatWithAdmin?: InputMaybe<AdminChatCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employerProfile?: InputMaybe<EmployerProfileCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutApplicantProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicantProfileInput>;
  create?: InputMaybe<UserCreateWithoutApplicantProfileInput>;
};

export type UserCreateNestedOneWithoutChatWithAdminInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatWithAdminInput>;
  create?: InputMaybe<UserCreateWithoutChatWithAdminInput>;
};

export type UserCreateNestedOneWithoutEmployerProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEmployerProfileInput>;
  create?: InputMaybe<UserCreateWithoutEmployerProfileInput>;
};

export type UserCreateOrConnectWithoutApplicantProfileInput = {
  create: UserCreateWithoutApplicantProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChatWithAdminInput = {
  create: UserCreateWithoutChatWithAdminInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEmployerProfileInput = {
  create: UserCreateWithoutEmployerProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutApplicantProfileInput = {
  chatWithAdmin?: InputMaybe<AdminChatCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employerProfile?: InputMaybe<EmployerProfileCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutChatWithAdminInput = {
  applicantProfile?: InputMaybe<ApplicantProfileCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employerProfile?: InputMaybe<EmployerProfileCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutEmployerProfileInput = {
  applicantProfile?: InputMaybe<ApplicantProfileCreateNestedOneWithoutUserInput>;
  chatWithAdmin?: InputMaybe<AdminChatCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  login: Scalars['String'];
  role: UserRole;
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  applicantProfile?: InputMaybe<ApplicantProfileOrderByWithRelationInput>;
  chatWithAdmin?: InputMaybe<AdminChatOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  employerProfile?: InputMaybe<EmployerProfileOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  login?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  Applicant = 'Applicant',
  Employer = 'Employer'
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Login = 'login',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  login?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumUserRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneWithoutUserNestedInput>;
  chatWithAdmin?: InputMaybe<AdminChatUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employerProfile?: InputMaybe<EmployerProfileUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  login?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  login?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutApplicantProfileNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicantProfileInput>;
  create?: InputMaybe<UserCreateWithoutApplicantProfileInput>;
  update?: InputMaybe<UserUpdateWithoutApplicantProfileInput>;
  upsert?: InputMaybe<UserUpsertWithoutApplicantProfileInput>;
};

export type UserUpdateOneRequiredWithoutChatWithAdminNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatWithAdminInput>;
  create?: InputMaybe<UserCreateWithoutChatWithAdminInput>;
  update?: InputMaybe<UserUpdateWithoutChatWithAdminInput>;
  upsert?: InputMaybe<UserUpsertWithoutChatWithAdminInput>;
};

export type UserUpdateOneRequiredWithoutEmployerProfileNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEmployerProfileInput>;
  create?: InputMaybe<UserCreateWithoutEmployerProfileInput>;
  update?: InputMaybe<UserUpdateWithoutEmployerProfileInput>;
  upsert?: InputMaybe<UserUpsertWithoutEmployerProfileInput>;
};

export type UserUpdateWithoutApplicantProfileInput = {
  chatWithAdmin?: InputMaybe<AdminChatUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employerProfile?: InputMaybe<EmployerProfileUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  login?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChatWithAdminInput = {
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employerProfile?: InputMaybe<EmployerProfileUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  login?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEmployerProfileInput = {
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneWithoutUserNestedInput>;
  chatWithAdmin?: InputMaybe<AdminChatUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  login?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutApplicantProfileInput = {
  create: UserCreateWithoutApplicantProfileInput;
  update: UserUpdateWithoutApplicantProfileInput;
};

export type UserUpsertWithoutChatWithAdminInput = {
  create: UserCreateWithoutChatWithAdminInput;
  update: UserUpdateWithoutChatWithAdminInput;
};

export type UserUpsertWithoutEmployerProfileInput = {
  create: UserCreateWithoutEmployerProfileInput;
  update: UserUpdateWithoutEmployerProfileInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  applicantProfile?: InputMaybe<ApplicantProfileRelationFilter>;
  chatWithAdmin?: InputMaybe<AdminChatRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employerProfile?: InputMaybe<EmployerProfileRelationFilter>;
  id?: InputMaybe<StringFilter>;
  login?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
};

export type Vacancy = {
  __typename?: 'Vacancy';
  _count?: Maybe<VacancyCount>;
  archived: Scalars['Boolean'];
  archivedReason?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  duties?: Maybe<Scalars['String']>;
  employer: EmployerProfile;
  employerId: Scalars['String'];
  fieldOfActivity: Scalars['Int'];
  id: Scalars['String'];
  invitations: Array<InvitationToVacancy>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: Maybe<Scalars['String']>;
  responses: Array<ResponseToVacancy>;
  salary: Scalars['Int'];
  savedBy: Array<VacancySavedByApplicant>;
  updatedAt: Scalars['DateTime'];
  views: Scalars['Int'];
  workingSchedule?: Maybe<Scalars['String']>;
};


export type VacancyInvitationsArgs = {
  cursor?: InputMaybe<InvitationToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<InvitationToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InvitationToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationToVacancyWhereInput>;
};


export type VacancyResponsesArgs = {
  cursor?: InputMaybe<ResponseToVacancyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResponseToVacancyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResponseToVacancyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseToVacancyWhereInput>;
};


export type VacancySavedByArgs = {
  cursor?: InputMaybe<VacancySavedByApplicantWhereUniqueInput>;
  distinct?: InputMaybe<Array<VacancySavedByApplicantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VacancySavedByApplicantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VacancySavedByApplicantWhereInput>;
};

export type VacancyAvgAggregate = {
  __typename?: 'VacancyAvgAggregate';
  fieldOfActivity?: Maybe<Scalars['Float']>;
  placeOfWork?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

export type VacancyAvgOrderByAggregateInput = {
  fieldOfActivity?: InputMaybe<SortOrder>;
  placeOfWork?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type VacancyCount = {
  __typename?: 'VacancyCount';
  invitations: Scalars['Int'];
  responses: Scalars['Int'];
  savedBy: Scalars['Int'];
};

export type VacancyCountAggregate = {
  __typename?: 'VacancyCountAggregate';
  _all: Scalars['Int'];
  archived: Scalars['Int'];
  archivedReason: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  duties: Scalars['Int'];
  employerId: Scalars['Int'];
  fieldOfActivity: Scalars['Int'];
  id: Scalars['Int'];
  phone: Scalars['Int'];
  phoneHidden: Scalars['Int'];
  placeOfWork: Scalars['Int'];
  post: Scalars['Int'];
  requirements: Scalars['Int'];
  salary: Scalars['Int'];
  updatedAt: Scalars['Int'];
  views: Scalars['Int'];
  workingSchedule: Scalars['Int'];
};

export type VacancyCountOrderByAggregateInput = {
  archived?: InputMaybe<SortOrder>;
  archivedReason?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duties?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfWork?: InputMaybe<SortOrder>;
  post?: InputMaybe<SortOrder>;
  requirements?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
  workingSchedule?: InputMaybe<SortOrder>;
};

export type VacancyCreateInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  duties?: InputMaybe<Scalars['String']>;
  employer: EmployerProfileCreateNestedOneWithoutVacanciesInput;
  fieldOfActivity: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutVacancyInput>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutVacancyInput>;
  salary: Scalars['Int'];
  savedBy?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutVacancyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
  workingSchedule?: InputMaybe<Scalars['String']>;
};

export type VacancyCreateManyEmployerInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  duties?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  salary: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
  workingSchedule?: InputMaybe<Scalars['String']>;
};

export type VacancyCreateManyEmployerInputEnvelope = {
  data: Array<VacancyCreateManyEmployerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VacancyCreateManyInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  duties?: InputMaybe<Scalars['String']>;
  employerId: Scalars['String'];
  fieldOfActivity: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  salary: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
  workingSchedule?: InputMaybe<Scalars['String']>;
};

export type VacancyCreateNestedManyWithoutEmployerInput = {
  connect?: InputMaybe<Array<VacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VacancyCreateOrConnectWithoutEmployerInput>>;
  create?: InputMaybe<Array<VacancyCreateWithoutEmployerInput>>;
  createMany?: InputMaybe<VacancyCreateManyEmployerInputEnvelope>;
};

export type VacancyCreateNestedOneWithoutInvitationsInput = {
  connect?: InputMaybe<VacancyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VacancyCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<VacancyCreateWithoutInvitationsInput>;
};

export type VacancyCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<VacancyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VacancyCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<VacancyCreateWithoutResponsesInput>;
};

export type VacancyCreateNestedOneWithoutSavedByInput = {
  connect?: InputMaybe<VacancyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VacancyCreateOrConnectWithoutSavedByInput>;
  create?: InputMaybe<VacancyCreateWithoutSavedByInput>;
};

export type VacancyCreateOrConnectWithoutEmployerInput = {
  create: VacancyCreateWithoutEmployerInput;
  where: VacancyWhereUniqueInput;
};

export type VacancyCreateOrConnectWithoutInvitationsInput = {
  create: VacancyCreateWithoutInvitationsInput;
  where: VacancyWhereUniqueInput;
};

export type VacancyCreateOrConnectWithoutResponsesInput = {
  create: VacancyCreateWithoutResponsesInput;
  where: VacancyWhereUniqueInput;
};

export type VacancyCreateOrConnectWithoutSavedByInput = {
  create: VacancyCreateWithoutSavedByInput;
  where: VacancyWhereUniqueInput;
};

export type VacancyCreateWithoutEmployerInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  duties?: InputMaybe<Scalars['String']>;
  fieldOfActivity: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutVacancyInput>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutVacancyInput>;
  salary: Scalars['Int'];
  savedBy?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutVacancyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
  workingSchedule?: InputMaybe<Scalars['String']>;
};

export type VacancyCreateWithoutInvitationsInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  duties?: InputMaybe<Scalars['String']>;
  employer: EmployerProfileCreateNestedOneWithoutVacanciesInput;
  fieldOfActivity: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutVacancyInput>;
  salary: Scalars['Int'];
  savedBy?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutVacancyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
  workingSchedule?: InputMaybe<Scalars['String']>;
};

export type VacancyCreateWithoutResponsesInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  duties?: InputMaybe<Scalars['String']>;
  employer: EmployerProfileCreateNestedOneWithoutVacanciesInput;
  fieldOfActivity: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutVacancyInput>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  salary: Scalars['Int'];
  savedBy?: InputMaybe<VacancySavedByApplicantCreateNestedManyWithoutVacancyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
  workingSchedule?: InputMaybe<Scalars['String']>;
};

export type VacancyCreateWithoutSavedByInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  duties?: InputMaybe<Scalars['String']>;
  employer: EmployerProfileCreateNestedOneWithoutVacanciesInput;
  fieldOfActivity: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationToVacancyCreateNestedManyWithoutVacancyInput>;
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseToVacancyCreateNestedManyWithoutVacancyInput>;
  salary: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
  workingSchedule?: InputMaybe<Scalars['String']>;
};

export type VacancyGroupBy = {
  __typename?: 'VacancyGroupBy';
  _avg?: Maybe<VacancyAvgAggregate>;
  _count?: Maybe<VacancyCountAggregate>;
  _max?: Maybe<VacancyMaxAggregate>;
  _min?: Maybe<VacancyMinAggregate>;
  _sum?: Maybe<VacancySumAggregate>;
  archived: Scalars['Boolean'];
  archivedReason?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  duties?: Maybe<Scalars['String']>;
  employerId: Scalars['String'];
  fieldOfActivity: Scalars['Int'];
  id: Scalars['String'];
  phone: Scalars['String'];
  phoneHidden: Scalars['Boolean'];
  placeOfWork: Scalars['Int'];
  post: Scalars['String'];
  requirements?: Maybe<Scalars['String']>;
  salary: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  views: Scalars['Int'];
  workingSchedule?: Maybe<Scalars['String']>;
};

export type VacancyListRelationFilter = {
  every?: InputMaybe<VacancyWhereInput>;
  none?: InputMaybe<VacancyWhereInput>;
  some?: InputMaybe<VacancyWhereInput>;
};

export type VacancyMaxAggregate = {
  __typename?: 'VacancyMaxAggregate';
  archived?: Maybe<Scalars['Boolean']>;
  archivedReason?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duties?: Maybe<Scalars['String']>;
  employerId?: Maybe<Scalars['String']>;
  fieldOfActivity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneHidden?: Maybe<Scalars['Boolean']>;
  placeOfWork?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
  workingSchedule?: Maybe<Scalars['String']>;
};

export type VacancyMaxOrderByAggregateInput = {
  archived?: InputMaybe<SortOrder>;
  archivedReason?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duties?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfWork?: InputMaybe<SortOrder>;
  post?: InputMaybe<SortOrder>;
  requirements?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
  workingSchedule?: InputMaybe<SortOrder>;
};

export type VacancyMinAggregate = {
  __typename?: 'VacancyMinAggregate';
  archived?: Maybe<Scalars['Boolean']>;
  archivedReason?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duties?: Maybe<Scalars['String']>;
  employerId?: Maybe<Scalars['String']>;
  fieldOfActivity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneHidden?: Maybe<Scalars['Boolean']>;
  placeOfWork?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
  workingSchedule?: Maybe<Scalars['String']>;
};

export type VacancyMinOrderByAggregateInput = {
  archived?: InputMaybe<SortOrder>;
  archivedReason?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duties?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfWork?: InputMaybe<SortOrder>;
  post?: InputMaybe<SortOrder>;
  requirements?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
  workingSchedule?: InputMaybe<SortOrder>;
};

export type VacancyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VacancyOrderByWithAggregationInput = {
  _avg?: InputMaybe<VacancyAvgOrderByAggregateInput>;
  _count?: InputMaybe<VacancyCountOrderByAggregateInput>;
  _max?: InputMaybe<VacancyMaxOrderByAggregateInput>;
  _min?: InputMaybe<VacancyMinOrderByAggregateInput>;
  _sum?: InputMaybe<VacancySumOrderByAggregateInput>;
  archived?: InputMaybe<SortOrder>;
  archivedReason?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duties?: InputMaybe<SortOrder>;
  employerId?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfWork?: InputMaybe<SortOrder>;
  post?: InputMaybe<SortOrder>;
  requirements?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
  workingSchedule?: InputMaybe<SortOrder>;
};

export type VacancyOrderByWithRelationInput = {
  archived?: InputMaybe<SortOrder>;
  archivedReason?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duties?: InputMaybe<SortOrder>;
  employer?: InputMaybe<EmployerProfileOrderByWithRelationInput>;
  employerId?: InputMaybe<SortOrder>;
  fieldOfActivity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invitations?: InputMaybe<InvitationToVacancyOrderByRelationAggregateInput>;
  phone?: InputMaybe<SortOrder>;
  phoneHidden?: InputMaybe<SortOrder>;
  placeOfWork?: InputMaybe<SortOrder>;
  post?: InputMaybe<SortOrder>;
  requirements?: InputMaybe<SortOrder>;
  responses?: InputMaybe<ResponseToVacancyOrderByRelationAggregateInput>;
  salary?: InputMaybe<SortOrder>;
  savedBy?: InputMaybe<VacancySavedByApplicantOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
  workingSchedule?: InputMaybe<SortOrder>;
};

export type VacancyRelationFilter = {
  is?: InputMaybe<VacancyWhereInput>;
  isNot?: InputMaybe<VacancyWhereInput>;
};

export type VacancySavedByApplicant = {
  __typename?: 'VacancySavedByApplicant';
  applicantProfile: ApplicantProfile;
  applicantProfileId: Scalars['String'];
  assignedAt: Scalars['DateTime'];
  vacancy: Vacancy;
  vacancyId: Scalars['String'];
};

export type VacancySavedByApplicantApplicantProfileIdVacancyIdCompoundUniqueInput = {
  applicantProfileId: Scalars['String'];
  vacancyId: Scalars['String'];
};

export type VacancySavedByApplicantCountAggregate = {
  __typename?: 'VacancySavedByApplicantCountAggregate';
  _all: Scalars['Int'];
  applicantProfileId: Scalars['Int'];
  assignedAt: Scalars['Int'];
  vacancyId: Scalars['Int'];
};

export type VacancySavedByApplicantCountOrderByAggregateInput = {
  applicantProfileId?: InputMaybe<SortOrder>;
  assignedAt?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
};

export type VacancySavedByApplicantCreateInput = {
  applicantProfile: ApplicantProfileCreateNestedOneWithoutSavedVacanciesInput;
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  vacancy: VacancyCreateNestedOneWithoutSavedByInput;
};

export type VacancySavedByApplicantCreateManyApplicantProfileInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  vacancyId: Scalars['String'];
};

export type VacancySavedByApplicantCreateManyApplicantProfileInputEnvelope = {
  data: Array<VacancySavedByApplicantCreateManyApplicantProfileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VacancySavedByApplicantCreateManyInput = {
  applicantProfileId: Scalars['String'];
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  vacancyId: Scalars['String'];
};

export type VacancySavedByApplicantCreateManyVacancyInput = {
  applicantProfileId: Scalars['String'];
  assignedAt?: InputMaybe<Scalars['DateTime']>;
};

export type VacancySavedByApplicantCreateManyVacancyInputEnvelope = {
  data: Array<VacancySavedByApplicantCreateManyVacancyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VacancySavedByApplicantCreateNestedManyWithoutApplicantProfileInput = {
  connect?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VacancySavedByApplicantCreateOrConnectWithoutApplicantProfileInput>>;
  create?: InputMaybe<Array<VacancySavedByApplicantCreateWithoutApplicantProfileInput>>;
  createMany?: InputMaybe<VacancySavedByApplicantCreateManyApplicantProfileInputEnvelope>;
};

export type VacancySavedByApplicantCreateNestedManyWithoutVacancyInput = {
  connect?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VacancySavedByApplicantCreateOrConnectWithoutVacancyInput>>;
  create?: InputMaybe<Array<VacancySavedByApplicantCreateWithoutVacancyInput>>;
  createMany?: InputMaybe<VacancySavedByApplicantCreateManyVacancyInputEnvelope>;
};

export type VacancySavedByApplicantCreateOrConnectWithoutApplicantProfileInput = {
  create: VacancySavedByApplicantCreateWithoutApplicantProfileInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};

export type VacancySavedByApplicantCreateOrConnectWithoutVacancyInput = {
  create: VacancySavedByApplicantCreateWithoutVacancyInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};

export type VacancySavedByApplicantCreateWithoutApplicantProfileInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  vacancy: VacancyCreateNestedOneWithoutSavedByInput;
};

export type VacancySavedByApplicantCreateWithoutVacancyInput = {
  applicantProfile: ApplicantProfileCreateNestedOneWithoutSavedVacanciesInput;
  assignedAt?: InputMaybe<Scalars['DateTime']>;
};

export type VacancySavedByApplicantGroupBy = {
  __typename?: 'VacancySavedByApplicantGroupBy';
  _count?: Maybe<VacancySavedByApplicantCountAggregate>;
  _max?: Maybe<VacancySavedByApplicantMaxAggregate>;
  _min?: Maybe<VacancySavedByApplicantMinAggregate>;
  applicantProfileId: Scalars['String'];
  assignedAt: Scalars['DateTime'];
  vacancyId: Scalars['String'];
};

export type VacancySavedByApplicantListRelationFilter = {
  every?: InputMaybe<VacancySavedByApplicantWhereInput>;
  none?: InputMaybe<VacancySavedByApplicantWhereInput>;
  some?: InputMaybe<VacancySavedByApplicantWhereInput>;
};

export type VacancySavedByApplicantMaxAggregate = {
  __typename?: 'VacancySavedByApplicantMaxAggregate';
  applicantProfileId?: Maybe<Scalars['String']>;
  assignedAt?: Maybe<Scalars['DateTime']>;
  vacancyId?: Maybe<Scalars['String']>;
};

export type VacancySavedByApplicantMaxOrderByAggregateInput = {
  applicantProfileId?: InputMaybe<SortOrder>;
  assignedAt?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
};

export type VacancySavedByApplicantMinAggregate = {
  __typename?: 'VacancySavedByApplicantMinAggregate';
  applicantProfileId?: Maybe<Scalars['String']>;
  assignedAt?: Maybe<Scalars['DateTime']>;
  vacancyId?: Maybe<Scalars['String']>;
};

export type VacancySavedByApplicantMinOrderByAggregateInput = {
  applicantProfileId?: InputMaybe<SortOrder>;
  assignedAt?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
};

export type VacancySavedByApplicantOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VacancySavedByApplicantOrderByWithAggregationInput = {
  _count?: InputMaybe<VacancySavedByApplicantCountOrderByAggregateInput>;
  _max?: InputMaybe<VacancySavedByApplicantMaxOrderByAggregateInput>;
  _min?: InputMaybe<VacancySavedByApplicantMinOrderByAggregateInput>;
  applicantProfileId?: InputMaybe<SortOrder>;
  assignedAt?: InputMaybe<SortOrder>;
  vacancyId?: InputMaybe<SortOrder>;
};

export type VacancySavedByApplicantOrderByWithRelationInput = {
  applicantProfile?: InputMaybe<ApplicantProfileOrderByWithRelationInput>;
  applicantProfileId?: InputMaybe<SortOrder>;
  assignedAt?: InputMaybe<SortOrder>;
  vacancy?: InputMaybe<VacancyOrderByWithRelationInput>;
  vacancyId?: InputMaybe<SortOrder>;
};

export enum VacancySavedByApplicantScalarFieldEnum {
  ApplicantProfileId = 'applicantProfileId',
  AssignedAt = 'assignedAt',
  VacancyId = 'vacancyId'
}

export type VacancySavedByApplicantScalarWhereInput = {
  AND?: InputMaybe<Array<VacancySavedByApplicantScalarWhereInput>>;
  NOT?: InputMaybe<Array<VacancySavedByApplicantScalarWhereInput>>;
  OR?: InputMaybe<Array<VacancySavedByApplicantScalarWhereInput>>;
  applicantProfileId?: InputMaybe<StringFilter>;
  assignedAt?: InputMaybe<DateTimeFilter>;
  vacancyId?: InputMaybe<StringFilter>;
};

export type VacancySavedByApplicantScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VacancySavedByApplicantScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VacancySavedByApplicantScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VacancySavedByApplicantScalarWhereWithAggregatesInput>>;
  applicantProfileId?: InputMaybe<StringWithAggregatesFilter>;
  assignedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  vacancyId?: InputMaybe<StringWithAggregatesFilter>;
};

export type VacancySavedByApplicantUpdateInput = {
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutSavedVacanciesNestedInput>;
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vacancy?: InputMaybe<VacancyUpdateOneRequiredWithoutSavedByNestedInput>;
};

export type VacancySavedByApplicantUpdateManyMutationInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VacancySavedByApplicantUpdateManyWithWhereWithoutApplicantProfileInput = {
  data: VacancySavedByApplicantUpdateManyMutationInput;
  where: VacancySavedByApplicantScalarWhereInput;
};

export type VacancySavedByApplicantUpdateManyWithWhereWithoutVacancyInput = {
  data: VacancySavedByApplicantUpdateManyMutationInput;
  where: VacancySavedByApplicantScalarWhereInput;
};

export type VacancySavedByApplicantUpdateManyWithoutApplicantProfileNestedInput = {
  connect?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VacancySavedByApplicantCreateOrConnectWithoutApplicantProfileInput>>;
  create?: InputMaybe<Array<VacancySavedByApplicantCreateWithoutApplicantProfileInput>>;
  createMany?: InputMaybe<VacancySavedByApplicantCreateManyApplicantProfileInputEnvelope>;
  delete?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VacancySavedByApplicantScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  set?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  update?: InputMaybe<Array<VacancySavedByApplicantUpdateWithWhereUniqueWithoutApplicantProfileInput>>;
  updateMany?: InputMaybe<Array<VacancySavedByApplicantUpdateManyWithWhereWithoutApplicantProfileInput>>;
  upsert?: InputMaybe<Array<VacancySavedByApplicantUpsertWithWhereUniqueWithoutApplicantProfileInput>>;
};

export type VacancySavedByApplicantUpdateManyWithoutVacancyNestedInput = {
  connect?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VacancySavedByApplicantCreateOrConnectWithoutVacancyInput>>;
  create?: InputMaybe<Array<VacancySavedByApplicantCreateWithoutVacancyInput>>;
  createMany?: InputMaybe<VacancySavedByApplicantCreateManyVacancyInputEnvelope>;
  delete?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VacancySavedByApplicantScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  set?: InputMaybe<Array<VacancySavedByApplicantWhereUniqueInput>>;
  update?: InputMaybe<Array<VacancySavedByApplicantUpdateWithWhereUniqueWithoutVacancyInput>>;
  updateMany?: InputMaybe<Array<VacancySavedByApplicantUpdateManyWithWhereWithoutVacancyInput>>;
  upsert?: InputMaybe<Array<VacancySavedByApplicantUpsertWithWhereUniqueWithoutVacancyInput>>;
};

export type VacancySavedByApplicantUpdateWithWhereUniqueWithoutApplicantProfileInput = {
  data: VacancySavedByApplicantUpdateWithoutApplicantProfileInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};

export type VacancySavedByApplicantUpdateWithWhereUniqueWithoutVacancyInput = {
  data: VacancySavedByApplicantUpdateWithoutVacancyInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};

export type VacancySavedByApplicantUpdateWithoutApplicantProfileInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vacancy?: InputMaybe<VacancyUpdateOneRequiredWithoutSavedByNestedInput>;
};

export type VacancySavedByApplicantUpdateWithoutVacancyInput = {
  applicantProfile?: InputMaybe<ApplicantProfileUpdateOneRequiredWithoutSavedVacanciesNestedInput>;
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VacancySavedByApplicantUpsertWithWhereUniqueWithoutApplicantProfileInput = {
  create: VacancySavedByApplicantCreateWithoutApplicantProfileInput;
  update: VacancySavedByApplicantUpdateWithoutApplicantProfileInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};

export type VacancySavedByApplicantUpsertWithWhereUniqueWithoutVacancyInput = {
  create: VacancySavedByApplicantCreateWithoutVacancyInput;
  update: VacancySavedByApplicantUpdateWithoutVacancyInput;
  where: VacancySavedByApplicantWhereUniqueInput;
};

export type VacancySavedByApplicantWhereInput = {
  AND?: InputMaybe<Array<VacancySavedByApplicantWhereInput>>;
  NOT?: InputMaybe<Array<VacancySavedByApplicantWhereInput>>;
  OR?: InputMaybe<Array<VacancySavedByApplicantWhereInput>>;
  applicantProfile?: InputMaybe<ApplicantProfileRelationFilter>;
  applicantProfileId?: InputMaybe<StringFilter>;
  assignedAt?: InputMaybe<DateTimeFilter>;
  vacancy?: InputMaybe<VacancyRelationFilter>;
  vacancyId?: InputMaybe<StringFilter>;
};

export type VacancySavedByApplicantWhereUniqueInput = {
  applicantProfileId_vacancyId?: InputMaybe<VacancySavedByApplicantApplicantProfileIdVacancyIdCompoundUniqueInput>;
};

export enum VacancyScalarFieldEnum {
  Archived = 'archived',
  ArchivedReason = 'archivedReason',
  CreatedAt = 'createdAt',
  Description = 'description',
  Duties = 'duties',
  EmployerId = 'employerId',
  FieldOfActivity = 'fieldOfActivity',
  Id = 'id',
  Phone = 'phone',
  PhoneHidden = 'phoneHidden',
  PlaceOfWork = 'placeOfWork',
  Post = 'post',
  Requirements = 'requirements',
  Salary = 'salary',
  UpdatedAt = 'updatedAt',
  Views = 'views',
  WorkingSchedule = 'workingSchedule'
}

export type VacancyScalarWhereInput = {
  AND?: InputMaybe<Array<VacancyScalarWhereInput>>;
  NOT?: InputMaybe<Array<VacancyScalarWhereInput>>;
  OR?: InputMaybe<Array<VacancyScalarWhereInput>>;
  archived?: InputMaybe<BoolFilter>;
  archivedReason?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  duties?: InputMaybe<StringNullableFilter>;
  employerId?: InputMaybe<StringFilter>;
  fieldOfActivity?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  phoneHidden?: InputMaybe<BoolFilter>;
  placeOfWork?: InputMaybe<IntFilter>;
  post?: InputMaybe<StringFilter>;
  requirements?: InputMaybe<StringNullableFilter>;
  salary?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
  workingSchedule?: InputMaybe<StringNullableFilter>;
};

export type VacancyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VacancyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VacancyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VacancyScalarWhereWithAggregatesInput>>;
  archived?: InputMaybe<BoolWithAggregatesFilter>;
  archivedReason?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  duties?: InputMaybe<StringNullableWithAggregatesFilter>;
  employerId?: InputMaybe<StringWithAggregatesFilter>;
  fieldOfActivity?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  phoneHidden?: InputMaybe<BoolWithAggregatesFilter>;
  placeOfWork?: InputMaybe<IntWithAggregatesFilter>;
  post?: InputMaybe<StringWithAggregatesFilter>;
  requirements?: InputMaybe<StringNullableWithAggregatesFilter>;
  salary?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  views?: InputMaybe<IntWithAggregatesFilter>;
  workingSchedule?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type VacancySumAggregate = {
  __typename?: 'VacancySumAggregate';
  fieldOfActivity?: Maybe<Scalars['Int']>;
  placeOfWork?: Maybe<Scalars['Int']>;
  salary?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
};

export type VacancySumOrderByAggregateInput = {
  fieldOfActivity?: InputMaybe<SortOrder>;
  placeOfWork?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type VacancyUpdateInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  archivedReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duties?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  employer?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutVacanciesNestedInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutVacancyNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfWork?: InputMaybe<IntFieldUpdateOperationsInput>;
  post?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutVacancyNestedInput>;
  salary?: InputMaybe<IntFieldUpdateOperationsInput>;
  savedBy?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutVacancyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
  workingSchedule?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VacancyUpdateManyMutationInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  archivedReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duties?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfWork?: InputMaybe<IntFieldUpdateOperationsInput>;
  post?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  salary?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
  workingSchedule?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VacancyUpdateManyWithWhereWithoutEmployerInput = {
  data: VacancyUpdateManyMutationInput;
  where: VacancyScalarWhereInput;
};

export type VacancyUpdateManyWithoutEmployerNestedInput = {
  connect?: InputMaybe<Array<VacancyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VacancyCreateOrConnectWithoutEmployerInput>>;
  create?: InputMaybe<Array<VacancyCreateWithoutEmployerInput>>;
  createMany?: InputMaybe<VacancyCreateManyEmployerInputEnvelope>;
  delete?: InputMaybe<Array<VacancyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VacancyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VacancyWhereUniqueInput>>;
  set?: InputMaybe<Array<VacancyWhereUniqueInput>>;
  update?: InputMaybe<Array<VacancyUpdateWithWhereUniqueWithoutEmployerInput>>;
  updateMany?: InputMaybe<Array<VacancyUpdateManyWithWhereWithoutEmployerInput>>;
  upsert?: InputMaybe<Array<VacancyUpsertWithWhereUniqueWithoutEmployerInput>>;
};

export type VacancyUpdateOneRequiredWithoutInvitationsNestedInput = {
  connect?: InputMaybe<VacancyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VacancyCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<VacancyCreateWithoutInvitationsInput>;
  update?: InputMaybe<VacancyUpdateWithoutInvitationsInput>;
  upsert?: InputMaybe<VacancyUpsertWithoutInvitationsInput>;
};

export type VacancyUpdateOneRequiredWithoutResponsesNestedInput = {
  connect?: InputMaybe<VacancyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VacancyCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<VacancyCreateWithoutResponsesInput>;
  update?: InputMaybe<VacancyUpdateWithoutResponsesInput>;
  upsert?: InputMaybe<VacancyUpsertWithoutResponsesInput>;
};

export type VacancyUpdateOneRequiredWithoutSavedByNestedInput = {
  connect?: InputMaybe<VacancyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VacancyCreateOrConnectWithoutSavedByInput>;
  create?: InputMaybe<VacancyCreateWithoutSavedByInput>;
  update?: InputMaybe<VacancyUpdateWithoutSavedByInput>;
  upsert?: InputMaybe<VacancyUpsertWithoutSavedByInput>;
};

export type VacancyUpdateWithWhereUniqueWithoutEmployerInput = {
  data: VacancyUpdateWithoutEmployerInput;
  where: VacancyWhereUniqueInput;
};

export type VacancyUpdateWithoutEmployerInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  archivedReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duties?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutVacancyNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfWork?: InputMaybe<IntFieldUpdateOperationsInput>;
  post?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutVacancyNestedInput>;
  salary?: InputMaybe<IntFieldUpdateOperationsInput>;
  savedBy?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutVacancyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
  workingSchedule?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VacancyUpdateWithoutInvitationsInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  archivedReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duties?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  employer?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutVacanciesNestedInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfWork?: InputMaybe<IntFieldUpdateOperationsInput>;
  post?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutVacancyNestedInput>;
  salary?: InputMaybe<IntFieldUpdateOperationsInput>;
  savedBy?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutVacancyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
  workingSchedule?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VacancyUpdateWithoutResponsesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  archivedReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duties?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  employer?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutVacanciesNestedInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutVacancyNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfWork?: InputMaybe<IntFieldUpdateOperationsInput>;
  post?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  salary?: InputMaybe<IntFieldUpdateOperationsInput>;
  savedBy?: InputMaybe<VacancySavedByApplicantUpdateManyWithoutVacancyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
  workingSchedule?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VacancyUpdateWithoutSavedByInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  archivedReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duties?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  employer?: InputMaybe<EmployerProfileUpdateOneRequiredWithoutVacanciesNestedInput>;
  fieldOfActivity?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationToVacancyUpdateManyWithoutVacancyNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneHidden?: InputMaybe<BoolFieldUpdateOperationsInput>;
  placeOfWork?: InputMaybe<IntFieldUpdateOperationsInput>;
  post?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseToVacancyUpdateManyWithoutVacancyNestedInput>;
  salary?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
  workingSchedule?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VacancyUpsertWithWhereUniqueWithoutEmployerInput = {
  create: VacancyCreateWithoutEmployerInput;
  update: VacancyUpdateWithoutEmployerInput;
  where: VacancyWhereUniqueInput;
};

export type VacancyUpsertWithoutInvitationsInput = {
  create: VacancyCreateWithoutInvitationsInput;
  update: VacancyUpdateWithoutInvitationsInput;
};

export type VacancyUpsertWithoutResponsesInput = {
  create: VacancyCreateWithoutResponsesInput;
  update: VacancyUpdateWithoutResponsesInput;
};

export type VacancyUpsertWithoutSavedByInput = {
  create: VacancyCreateWithoutSavedByInput;
  update: VacancyUpdateWithoutSavedByInput;
};

export type VacancyWhereInput = {
  AND?: InputMaybe<Array<VacancyWhereInput>>;
  NOT?: InputMaybe<Array<VacancyWhereInput>>;
  OR?: InputMaybe<Array<VacancyWhereInput>>;
  archived?: InputMaybe<BoolFilter>;
  archivedReason?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  duties?: InputMaybe<StringNullableFilter>;
  employer?: InputMaybe<EmployerProfileRelationFilter>;
  employerId?: InputMaybe<StringFilter>;
  fieldOfActivity?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  invitations?: InputMaybe<InvitationToVacancyListRelationFilter>;
  phone?: InputMaybe<StringFilter>;
  phoneHidden?: InputMaybe<BoolFilter>;
  placeOfWork?: InputMaybe<IntFilter>;
  post?: InputMaybe<StringFilter>;
  requirements?: InputMaybe<StringNullableFilter>;
  responses?: InputMaybe<ResponseToVacancyListRelationFilter>;
  salary?: InputMaybe<IntFilter>;
  savedBy?: InputMaybe<VacancySavedByApplicantListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
  workingSchedule?: InputMaybe<StringNullableFilter>;
};

export type VacancyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type VerifyAuthCodeInput = {
  authToken: Scalars['String'];
  code: Scalars['String'];
};

export type VerifyAuthCodeOutput = {
  __typename?: 'VerifyAuthCodeOutput';
  authToken?: Maybe<Scalars['String']>;
  authenticated: Scalars['Boolean'];
};

export type CheckIsAuthenticatedQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckIsAuthenticatedQuery = { __typename?: 'Query', checkIsAuthenticated: { __typename?: 'CheckAuthenticatedOutput', authenticated: boolean, accessToken?: string | null } };

export type RefreshAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshAccessToken: { __typename?: 'AccessTokenOutput', accessToken: string } };

export type CreateAndLoginUserMutationVariables = Exact<{
  authToken: Scalars['String'];
  data: CreateAndLoginUserInputData;
}>;


export type CreateAndLoginUserMutation = { __typename?: 'Mutation', createAndLoginUser: { __typename?: 'AccessTokenOutput', accessToken: string } };

export type GetOneUserByPhoneQueryVariables = Exact<{
  phone: Scalars['String'];
}>;


export type GetOneUserByPhoneQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string } | null };

export type LoginUserMutationVariables = Exact<{
  authToken: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AccessTokenOutput', accessToken: string } };

export type SendAuthCodeMessageMutationVariables = Exact<{
  phone: Scalars['String'];
}>;


export type SendAuthCodeMessageMutation = { __typename?: 'Mutation', sendAuthCodeMessage: { __typename?: 'SendMessageOutput', authToken: string } };

export type VerifyAuthCodeMutationVariables = Exact<{
  authToken: Scalars['String'];
  code: Scalars['String'];
}>;


export type VerifyAuthCodeMutation = { __typename?: 'Mutation', verifyAuthCode: { __typename?: 'VerifyAuthCodeOutput', authenticated: boolean, authToken?: string | null } };

export type GetChatMessagesQueryVariables = Exact<{
  userId: Scalars['String'];
  applicantId: Scalars['String'];
  skip: Scalars['Int'];
  take: Scalars['Int'];
}>;


export type GetChatMessagesQuery = { __typename?: 'Query', findFirstChat?: { __typename?: 'Chat', id: string, applicant: { __typename?: 'ApplicantProfile', resume?: { __typename?: 'Resume', firstname: string } | null } } | null, chatMessages: Array<{ __typename?: 'ChatMessage', id: string, message: string, sender: UserRole, createdAt: any }> };

export type SendMessageMutationVariables = Exact<{
  chatId: Scalars['String'];
  message: Scalars['String'];
  sender: UserRole;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', createOneChatMessage: { __typename?: 'ChatMessage', id: string, message: string, sender: UserRole, createdAt: any } };

export type GetVacanciesWithResponsesQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetVacanciesWithResponsesQuery = { __typename?: 'Query', vacancies: Array<{ __typename?: 'Vacancy', id: string, fieldOfActivity: number, post: string, salary: number, placeOfWork: number, views: number, createdAt: any, responses: Array<{ __typename?: 'ResponseToVacancy', id: string }> }> };

export type GetVacancyResponsesQueryVariables = Exact<{
  vacancyId: Scalars['String'];
}>;


export type GetVacancyResponsesQuery = { __typename?: 'Query', responseToVacancies: Array<{ __typename?: 'ResponseToVacancy', id: string, coverLetter?: string | null, createdAt: any, resume: { __typename?: 'Resume', id: string, firstname: string, lastname?: string | null, fieldOfActivity: number, applicantProfileId: string } }> };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', findFirstUser?: { __typename?: 'User', id: string, role: UserRole, applicantProfile?: { __typename?: 'ApplicantProfile', resume?: { __typename?: 'Resume', firstname: string, lastname?: string | null } | null } | null, employerProfile?: { __typename?: 'EmployerProfile', id: string, companyName: string } | null } | null };


export const CheckIsAuthenticatedDocument = `
    query CheckIsAuthenticated {
  checkIsAuthenticated {
    authenticated
    accessToken
  }
}
    `;
export const RefreshAccessTokenDocument = `
    mutation RefreshAccessToken {
  refreshAccessToken {
    accessToken
  }
}
    `;
export const CreateAndLoginUserDocument = `
    mutation CreateAndLoginUser($authToken: String!, $data: CreateAndLoginUserInputData!) {
  createAndLoginUser(input: {authToken: $authToken, data: $data}) {
    accessToken
  }
}
    `;
export const GetOneUserByPhoneDocument = `
    query GetOneUserByPhone($phone: String!) {
  user(where: {login: $phone}) {
    id
  }
}
    `;
export const LoginUserDocument = `
    mutation LoginUser($authToken: String!) {
  loginUser(input: {authToken: $authToken}) {
    accessToken
  }
}
    `;
export const SendAuthCodeMessageDocument = `
    mutation SendAuthCodeMessage($phone: String!) {
  sendAuthCodeMessage(input: {phone: $phone}) {
    authToken
  }
}
    `;
export const VerifyAuthCodeDocument = `
    mutation VerifyAuthCode($authToken: String!, $code: String!) {
  verifyAuthCode(input: {authToken: $authToken, code: $code}) {
    authenticated
    authToken
  }
}
    `;
export const GetChatMessagesDocument = `
    query GetChatMessages($userId: String!, $applicantId: String!, $skip: Int!, $take: Int!) {
  findFirstChat(
    where: {applicantId: {equals: $applicantId}, employer: {is: {userId: {equals: $userId}}}}
  ) {
    id
    applicant {
      resume {
        firstname
      }
    }
  }
  chatMessages(
    where: {chat: {is: {applicantId: {equals: $applicantId}, employer: {is: {userId: {equals: $userId}}}}}}
    orderBy: {createdAt: desc}
    skip: $skip
    take: $take
  ) {
    id
    message
    sender
    createdAt
  }
}
    `;
export const SendMessageDocument = `
    mutation SendMessage($chatId: String!, $message: String!, $sender: UserRole!) {
  createOneChatMessage(
    data: {chat: {connect: {id: $chatId}}, message: $message, sender: $sender}
  ) {
    id
    message
    sender
    createdAt
  }
}
    `;
export const GetVacanciesWithResponsesDocument = `
    query GetVacanciesWithResponses($userId: String!) {
  vacancies(
    where: {employer: {is: {userId: {equals: $userId}}}, responses: {some: {}}}
  ) {
    id
    fieldOfActivity
    post
    salary
    placeOfWork
    views
    createdAt
    responses(where: {viewed: {equals: false}}) {
      id
    }
  }
}
    `;
export const GetVacancyResponsesDocument = `
    query GetVacancyResponses($vacancyId: String!) {
  responseToVacancies(where: {vacancyId: {equals: $vacancyId}}) {
    id
    resume {
      id
      firstname
      lastname
      fieldOfActivity
      applicantProfileId
    }
    coverLetter
    createdAt
  }
}
    `;
export const GetUserDocument = `
    query GetUser($userId: String!) {
  findFirstUser(where: {id: {equals: $userId}}) {
    id
    role
    applicantProfile {
      resume {
        firstname
        lastname
      }
    }
    employerProfile {
      id
      companyName
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    CheckIsAuthenticated: build.query<CheckIsAuthenticatedQuery, CheckIsAuthenticatedQueryVariables | void>({
      query: (variables) => ({ document: CheckIsAuthenticatedDocument, variables })
    }),
    RefreshAccessToken: build.mutation<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables | void>({
      query: (variables) => ({ document: RefreshAccessTokenDocument, variables })
    }),
    CreateAndLoginUser: build.mutation<CreateAndLoginUserMutation, CreateAndLoginUserMutationVariables>({
      query: (variables) => ({ document: CreateAndLoginUserDocument, variables })
    }),
    GetOneUserByPhone: build.query<GetOneUserByPhoneQuery, GetOneUserByPhoneQueryVariables>({
      query: (variables) => ({ document: GetOneUserByPhoneDocument, variables })
    }),
    LoginUser: build.mutation<LoginUserMutation, LoginUserMutationVariables>({
      query: (variables) => ({ document: LoginUserDocument, variables })
    }),
    SendAuthCodeMessage: build.mutation<SendAuthCodeMessageMutation, SendAuthCodeMessageMutationVariables>({
      query: (variables) => ({ document: SendAuthCodeMessageDocument, variables })
    }),
    VerifyAuthCode: build.mutation<VerifyAuthCodeMutation, VerifyAuthCodeMutationVariables>({
      query: (variables) => ({ document: VerifyAuthCodeDocument, variables })
    }),
    GetChatMessages: build.query<GetChatMessagesQuery, GetChatMessagesQueryVariables>({
      query: (variables) => ({ document: GetChatMessagesDocument, variables })
    }),
    SendMessage: build.mutation<SendMessageMutation, SendMessageMutationVariables>({
      query: (variables) => ({ document: SendMessageDocument, variables })
    }),
    GetVacanciesWithResponses: build.query<GetVacanciesWithResponsesQuery, GetVacanciesWithResponsesQueryVariables>({
      query: (variables) => ({ document: GetVacanciesWithResponsesDocument, variables })
    }),
    GetVacancyResponses: build.query<GetVacancyResponsesQuery, GetVacancyResponsesQueryVariables>({
      query: (variables) => ({ document: GetVacancyResponsesDocument, variables })
    }),
    GetUser: build.query<GetUserQuery, GetUserQueryVariables>({
      query: (variables) => ({ document: GetUserDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


