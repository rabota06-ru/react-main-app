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
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAppUpdate = {
  __typename?: 'AggregateAppUpdate';
  _count?: Maybe<AppUpdateCountAggregate>;
  _max?: Maybe<AppUpdateMaxAggregate>;
  _min?: Maybe<AppUpdateMinAggregate>;
};

export type AggregateAppUpdateFeature = {
  __typename?: 'AggregateAppUpdateFeature';
  _count?: Maybe<AppUpdateFeatureCountAggregate>;
  _max?: Maybe<AppUpdateFeatureMaxAggregate>;
  _min?: Maybe<AppUpdateFeatureMinAggregate>;
};

export type AggregateCallSchedule = {
  __typename?: 'AggregateCallSchedule';
  _avg?: Maybe<CallScheduleAvgAggregate>;
  _count?: Maybe<CallScheduleCountAggregate>;
  _max?: Maybe<CallScheduleMaxAggregate>;
  _min?: Maybe<CallScheduleMinAggregate>;
  _sum?: Maybe<CallScheduleSumAggregate>;
};

export type AggregateFaculty = {
  __typename?: 'AggregateFaculty';
  _count?: Maybe<FacultyCountAggregate>;
  _max?: Maybe<FacultyMaxAggregate>;
  _min?: Maybe<FacultyMinAggregate>;
};

export type AggregateGroup = {
  __typename?: 'AggregateGroup';
  _avg?: Maybe<GroupAvgAggregate>;
  _count?: Maybe<GroupCountAggregate>;
  _max?: Maybe<GroupMaxAggregate>;
  _min?: Maybe<GroupMinAggregate>;
  _sum?: Maybe<GroupSumAggregate>;
};

export type AggregateLesson = {
  __typename?: 'AggregateLesson';
  _avg?: Maybe<LessonAvgAggregate>;
  _count?: Maybe<LessonCountAggregate>;
  _max?: Maybe<LessonMaxAggregate>;
  _min?: Maybe<LessonMinAggregate>;
  _sum?: Maybe<LessonSumAggregate>;
};

export type AggregateLessonNote = {
  __typename?: 'AggregateLessonNote';
  _avg?: Maybe<LessonNoteAvgAggregate>;
  _count?: Maybe<LessonNoteCountAggregate>;
  _max?: Maybe<LessonNoteMaxAggregate>;
  _min?: Maybe<LessonNoteMinAggregate>;
  _sum?: Maybe<LessonNoteSumAggregate>;
};

export type AggregatePeriod = {
  __typename?: 'AggregatePeriod';
  _count?: Maybe<PeriodCountAggregate>;
  _max?: Maybe<PeriodMaxAggregate>;
  _min?: Maybe<PeriodMinAggregate>;
};

export type AggregateSecretLabel = {
  __typename?: 'AggregateSecretLabel';
  _count?: Maybe<SecretLabelCountAggregate>;
  _max?: Maybe<SecretLabelMaxAggregate>;
  _min?: Maybe<SecretLabelMinAggregate>;
};

export type AppUpdate = {
  __typename?: 'AppUpdate';
  _count?: Maybe<AppUpdateCount>;
  createdAt: Scalars['DateTime'];
  features: Array<AppUpdateFeature>;
  id: Scalars['String'];
  os: AppUpdateOs;
  updatedAt: Scalars['DateTime'];
  version: Scalars['String'];
};

export type AppUpdateFeaturesArgs = {
  cursor?: InputMaybe<AppUpdateFeatureWhereUniqueInput>;
  distinct?: InputMaybe<Array<AppUpdateFeatureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AppUpdateFeatureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type AppUpdateCount = {
  __typename?: 'AppUpdateCount';
  features: Scalars['Int'];
};

export type AppUpdateCountAggregate = {
  __typename?: 'AppUpdateCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  os: Scalars['Int'];
  updatedAt: Scalars['Int'];
  version: Scalars['Int'];
};

export type AppUpdateCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  os?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type AppUpdateCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  features?: InputMaybe<AppUpdateFeatureCreateNestedManyWithoutAppUpdateInput>;
  id?: InputMaybe<Scalars['String']>;
  os: AppUpdateOs;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  version: Scalars['String'];
};

export type AppUpdateCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  os: AppUpdateOs;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  version: Scalars['String'];
};

export type AppUpdateCreateNestedOneWithoutFeaturesInput = {
  connect?: InputMaybe<AppUpdateWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AppUpdateCreateOrConnectWithoutFeaturesInput>;
  create?: InputMaybe<AppUpdateCreateWithoutFeaturesInput>;
};

export type AppUpdateCreateOrConnectWithoutFeaturesInput = {
  create: AppUpdateCreateWithoutFeaturesInput;
  where: AppUpdateWhereUniqueInput;
};

export type AppUpdateCreateWithoutFeaturesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  os: AppUpdateOs;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  version: Scalars['String'];
};

export type AppUpdateFeature = {
  __typename?: 'AppUpdateFeature';
  appUpdate: AppUpdate;
  appUpdateId: Scalars['String'];
  features: Array<Scalars['String']>;
  id: Scalars['String'];
  title: Scalars['String'];
};

export type AppUpdateFeatureCountAggregate = {
  __typename?: 'AppUpdateFeatureCountAggregate';
  _all: Scalars['Int'];
  appUpdateId: Scalars['Int'];
  features: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type AppUpdateFeatureCountOrderByAggregateInput = {
  appUpdateId?: InputMaybe<SortOrder>;
  features?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type AppUpdateFeatureCreateInput = {
  appUpdate: AppUpdateCreateNestedOneWithoutFeaturesInput;
  features?: InputMaybe<AppUpdateFeatureCreatefeaturesInput>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AppUpdateFeatureCreateManyAppUpdateInput = {
  features?: InputMaybe<AppUpdateFeatureCreatefeaturesInput>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AppUpdateFeatureCreateManyAppUpdateInputEnvelope = {
  data: Array<AppUpdateFeatureCreateManyAppUpdateInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AppUpdateFeatureCreateManyInput = {
  appUpdateId: Scalars['String'];
  features?: InputMaybe<AppUpdateFeatureCreatefeaturesInput>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AppUpdateFeatureCreateNestedManyWithoutAppUpdateInput = {
  connect?: InputMaybe<Array<AppUpdateFeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppUpdateFeatureCreateOrConnectWithoutAppUpdateInput>>;
  create?: InputMaybe<Array<AppUpdateFeatureCreateWithoutAppUpdateInput>>;
  createMany?: InputMaybe<AppUpdateFeatureCreateManyAppUpdateInputEnvelope>;
};

export type AppUpdateFeatureCreateOrConnectWithoutAppUpdateInput = {
  create: AppUpdateFeatureCreateWithoutAppUpdateInput;
  where: AppUpdateFeatureWhereUniqueInput;
};

export type AppUpdateFeatureCreateWithoutAppUpdateInput = {
  features?: InputMaybe<AppUpdateFeatureCreatefeaturesInput>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AppUpdateFeatureCreatefeaturesInput = {
  set: Array<Scalars['String']>;
};

export type AppUpdateFeatureGroupBy = {
  __typename?: 'AppUpdateFeatureGroupBy';
  _count?: Maybe<AppUpdateFeatureCountAggregate>;
  _max?: Maybe<AppUpdateFeatureMaxAggregate>;
  _min?: Maybe<AppUpdateFeatureMinAggregate>;
  appUpdateId: Scalars['String'];
  features?: Maybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  title: Scalars['String'];
};

export type AppUpdateFeatureListRelationFilter = {
  every?: InputMaybe<AppUpdateFeatureWhereInput>;
  none?: InputMaybe<AppUpdateFeatureWhereInput>;
  some?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type AppUpdateFeatureMaxAggregate = {
  __typename?: 'AppUpdateFeatureMaxAggregate';
  appUpdateId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AppUpdateFeatureMaxOrderByAggregateInput = {
  appUpdateId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type AppUpdateFeatureMinAggregate = {
  __typename?: 'AppUpdateFeatureMinAggregate';
  appUpdateId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AppUpdateFeatureMinOrderByAggregateInput = {
  appUpdateId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type AppUpdateFeatureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AppUpdateFeatureOrderByWithAggregationInput = {
  _count?: InputMaybe<AppUpdateFeatureCountOrderByAggregateInput>;
  _max?: InputMaybe<AppUpdateFeatureMaxOrderByAggregateInput>;
  _min?: InputMaybe<AppUpdateFeatureMinOrderByAggregateInput>;
  appUpdateId?: InputMaybe<SortOrder>;
  features?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type AppUpdateFeatureOrderByWithRelationInput = {
  appUpdate?: InputMaybe<AppUpdateOrderByWithRelationInput>;
  appUpdateId?: InputMaybe<SortOrder>;
  features?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum AppUpdateFeatureScalarFieldEnum {
  AppUpdateId = 'appUpdateId',
  Features = 'features',
  Id = 'id',
  Title = 'title',
}

export type AppUpdateFeatureScalarWhereInput = {
  AND?: InputMaybe<Array<AppUpdateFeatureScalarWhereInput>>;
  NOT?: InputMaybe<Array<AppUpdateFeatureScalarWhereInput>>;
  OR?: InputMaybe<Array<AppUpdateFeatureScalarWhereInput>>;
  appUpdateId?: InputMaybe<StringFilter>;
  features?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AppUpdateFeatureScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AppUpdateFeatureScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AppUpdateFeatureScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AppUpdateFeatureScalarWhereWithAggregatesInput>>;
  appUpdateId?: InputMaybe<StringWithAggregatesFilter>;
  features?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type AppUpdateFeatureUpdateInput = {
  appUpdate?: InputMaybe<AppUpdateUpdateOneRequiredWithoutFeaturesNestedInput>;
  features?: InputMaybe<AppUpdateFeatureUpdatefeaturesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppUpdateFeatureUpdateManyMutationInput = {
  features?: InputMaybe<AppUpdateFeatureUpdatefeaturesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppUpdateFeatureUpdateManyWithWhereWithoutAppUpdateInput = {
  data: AppUpdateFeatureUpdateManyMutationInput;
  where: AppUpdateFeatureScalarWhereInput;
};

export type AppUpdateFeatureUpdateManyWithoutAppUpdateNestedInput = {
  connect?: InputMaybe<Array<AppUpdateFeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppUpdateFeatureCreateOrConnectWithoutAppUpdateInput>>;
  create?: InputMaybe<Array<AppUpdateFeatureCreateWithoutAppUpdateInput>>;
  createMany?: InputMaybe<AppUpdateFeatureCreateManyAppUpdateInputEnvelope>;
  delete?: InputMaybe<Array<AppUpdateFeatureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AppUpdateFeatureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AppUpdateFeatureWhereUniqueInput>>;
  set?: InputMaybe<Array<AppUpdateFeatureWhereUniqueInput>>;
  update?: InputMaybe<Array<AppUpdateFeatureUpdateWithWhereUniqueWithoutAppUpdateInput>>;
  updateMany?: InputMaybe<Array<AppUpdateFeatureUpdateManyWithWhereWithoutAppUpdateInput>>;
  upsert?: InputMaybe<Array<AppUpdateFeatureUpsertWithWhereUniqueWithoutAppUpdateInput>>;
};

export type AppUpdateFeatureUpdateWithWhereUniqueWithoutAppUpdateInput = {
  data: AppUpdateFeatureUpdateWithoutAppUpdateInput;
  where: AppUpdateFeatureWhereUniqueInput;
};

export type AppUpdateFeatureUpdateWithoutAppUpdateInput = {
  features?: InputMaybe<AppUpdateFeatureUpdatefeaturesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppUpdateFeatureUpdatefeaturesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type AppUpdateFeatureUpsertWithWhereUniqueWithoutAppUpdateInput = {
  create: AppUpdateFeatureCreateWithoutAppUpdateInput;
  update: AppUpdateFeatureUpdateWithoutAppUpdateInput;
  where: AppUpdateFeatureWhereUniqueInput;
};

export type AppUpdateFeatureWhereInput = {
  AND?: InputMaybe<Array<AppUpdateFeatureWhereInput>>;
  NOT?: InputMaybe<Array<AppUpdateFeatureWhereInput>>;
  OR?: InputMaybe<Array<AppUpdateFeatureWhereInput>>;
  appUpdate?: InputMaybe<AppUpdateRelationFilter>;
  appUpdateId?: InputMaybe<StringFilter>;
  features?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AppUpdateFeatureWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AppUpdateGroupBy = {
  __typename?: 'AppUpdateGroupBy';
  _count?: Maybe<AppUpdateCountAggregate>;
  _max?: Maybe<AppUpdateMaxAggregate>;
  _min?: Maybe<AppUpdateMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  os: AppUpdateOs;
  updatedAt: Scalars['DateTime'];
  version: Scalars['String'];
};

export type AppUpdateMaxAggregate = {
  __typename?: 'AppUpdateMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  os?: Maybe<AppUpdateOs>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['String']>;
};

export type AppUpdateMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  os?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type AppUpdateMinAggregate = {
  __typename?: 'AppUpdateMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  os?: Maybe<AppUpdateOs>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['String']>;
};

export type AppUpdateMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  os?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export enum AppUpdateOs {
  Android = 'android',
  Ios = 'ios',
}

export type AppUpdateOrderByWithAggregationInput = {
  _count?: InputMaybe<AppUpdateCountOrderByAggregateInput>;
  _max?: InputMaybe<AppUpdateMaxOrderByAggregateInput>;
  _min?: InputMaybe<AppUpdateMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  os?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type AppUpdateOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  features?: InputMaybe<AppUpdateFeatureOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  os?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type AppUpdateRelationFilter = {
  is?: InputMaybe<AppUpdateWhereInput>;
  isNot?: InputMaybe<AppUpdateWhereInput>;
};

export enum AppUpdateScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Os = 'os',
  UpdatedAt = 'updatedAt',
  Version = 'version',
}

export type AppUpdateScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AppUpdateScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AppUpdateScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AppUpdateScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  os?: InputMaybe<EnumAppUpdateOsWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  version?: InputMaybe<StringWithAggregatesFilter>;
};

export type AppUpdateUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  features?: InputMaybe<AppUpdateFeatureUpdateManyWithoutAppUpdateNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  os?: InputMaybe<EnumAppUpdateOsFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  version?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppUpdateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  os?: InputMaybe<EnumAppUpdateOsFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  version?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppUpdateUpdateOneRequiredWithoutFeaturesNestedInput = {
  connect?: InputMaybe<AppUpdateWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AppUpdateCreateOrConnectWithoutFeaturesInput>;
  create?: InputMaybe<AppUpdateCreateWithoutFeaturesInput>;
  update?: InputMaybe<AppUpdateUpdateWithoutFeaturesInput>;
  upsert?: InputMaybe<AppUpdateUpsertWithoutFeaturesInput>;
};

export type AppUpdateUpdateWithoutFeaturesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  os?: InputMaybe<EnumAppUpdateOsFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  version?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppUpdateUpsertWithoutFeaturesInput = {
  create: AppUpdateCreateWithoutFeaturesInput;
  update: AppUpdateUpdateWithoutFeaturesInput;
};

export type AppUpdateWhereInput = {
  AND?: InputMaybe<Array<AppUpdateWhereInput>>;
  NOT?: InputMaybe<Array<AppUpdateWhereInput>>;
  OR?: InputMaybe<Array<AppUpdateWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  features?: InputMaybe<AppUpdateFeatureListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  os?: InputMaybe<EnumAppUpdateOsFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  version?: InputMaybe<StringFilter>;
};

export type AppUpdateWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CallSchedule = {
  __typename?: 'CallSchedule';
  end: Scalars['String'];
  id: Scalars['String'];
  lessonNumber: Scalars['Int'];
  period: Period;
  periodId: Scalars['String'];
  start: Scalars['String'];
};

export type CallScheduleAvgAggregate = {
  __typename?: 'CallScheduleAvgAggregate';
  lessonNumber?: Maybe<Scalars['Float']>;
};

export type CallScheduleAvgOrderByAggregateInput = {
  lessonNumber?: InputMaybe<SortOrder>;
};

export type CallScheduleCountAggregate = {
  __typename?: 'CallScheduleCountAggregate';
  _all: Scalars['Int'];
  end: Scalars['Int'];
  id: Scalars['Int'];
  lessonNumber: Scalars['Int'];
  periodId: Scalars['Int'];
  start: Scalars['Int'];
};

export type CallScheduleCountOrderByAggregateInput = {
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonNumber?: InputMaybe<SortOrder>;
  periodId?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
};

export type CallScheduleCreateInput = {
  end: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lessonNumber: Scalars['Int'];
  period: PeriodCreateNestedOneWithoutCallScheduleInput;
  start: Scalars['String'];
};

export type CallScheduleCreateManyInput = {
  end: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lessonNumber: Scalars['Int'];
  periodId: Scalars['String'];
  start: Scalars['String'];
};

export type CallScheduleCreateManyPeriodInput = {
  end: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lessonNumber: Scalars['Int'];
  start: Scalars['String'];
};

export type CallScheduleCreateManyPeriodInputEnvelope = {
  data: Array<CallScheduleCreateManyPeriodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CallScheduleCreateNestedManyWithoutPeriodInput = {
  connect?: InputMaybe<Array<CallScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CallScheduleCreateOrConnectWithoutPeriodInput>>;
  create?: InputMaybe<Array<CallScheduleCreateWithoutPeriodInput>>;
  createMany?: InputMaybe<CallScheduleCreateManyPeriodInputEnvelope>;
};

export type CallScheduleCreateOrConnectWithoutPeriodInput = {
  create: CallScheduleCreateWithoutPeriodInput;
  where: CallScheduleWhereUniqueInput;
};

export type CallScheduleCreateWithoutPeriodInput = {
  end: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lessonNumber: Scalars['Int'];
  start: Scalars['String'];
};

export type CallScheduleGroupBy = {
  __typename?: 'CallScheduleGroupBy';
  _avg?: Maybe<CallScheduleAvgAggregate>;
  _count?: Maybe<CallScheduleCountAggregate>;
  _max?: Maybe<CallScheduleMaxAggregate>;
  _min?: Maybe<CallScheduleMinAggregate>;
  _sum?: Maybe<CallScheduleSumAggregate>;
  end: Scalars['String'];
  id: Scalars['String'];
  lessonNumber: Scalars['Int'];
  periodId: Scalars['String'];
  start: Scalars['String'];
};

export type CallScheduleListRelationFilter = {
  every?: InputMaybe<CallScheduleWhereInput>;
  none?: InputMaybe<CallScheduleWhereInput>;
  some?: InputMaybe<CallScheduleWhereInput>;
};

export type CallScheduleMaxAggregate = {
  __typename?: 'CallScheduleMaxAggregate';
  end?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lessonNumber?: Maybe<Scalars['Int']>;
  periodId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};

export type CallScheduleMaxOrderByAggregateInput = {
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonNumber?: InputMaybe<SortOrder>;
  periodId?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
};

export type CallScheduleMinAggregate = {
  __typename?: 'CallScheduleMinAggregate';
  end?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lessonNumber?: Maybe<Scalars['Int']>;
  periodId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};

export type CallScheduleMinOrderByAggregateInput = {
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonNumber?: InputMaybe<SortOrder>;
  periodId?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
};

export type CallScheduleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CallScheduleOrderByWithAggregationInput = {
  _avg?: InputMaybe<CallScheduleAvgOrderByAggregateInput>;
  _count?: InputMaybe<CallScheduleCountOrderByAggregateInput>;
  _max?: InputMaybe<CallScheduleMaxOrderByAggregateInput>;
  _min?: InputMaybe<CallScheduleMinOrderByAggregateInput>;
  _sum?: InputMaybe<CallScheduleSumOrderByAggregateInput>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonNumber?: InputMaybe<SortOrder>;
  periodId?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
};

export type CallScheduleOrderByWithRelationInput = {
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonNumber?: InputMaybe<SortOrder>;
  period?: InputMaybe<PeriodOrderByWithRelationInput>;
  periodId?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
};

export enum CallScheduleScalarFieldEnum {
  End = 'end',
  Id = 'id',
  LessonNumber = 'lessonNumber',
  PeriodId = 'periodId',
  Start = 'start',
}

export type CallScheduleScalarWhereInput = {
  AND?: InputMaybe<Array<CallScheduleScalarWhereInput>>;
  NOT?: InputMaybe<Array<CallScheduleScalarWhereInput>>;
  OR?: InputMaybe<Array<CallScheduleScalarWhereInput>>;
  end?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lessonNumber?: InputMaybe<IntFilter>;
  periodId?: InputMaybe<StringFilter>;
  start?: InputMaybe<StringFilter>;
};

export type CallScheduleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CallScheduleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CallScheduleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CallScheduleScalarWhereWithAggregatesInput>>;
  end?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lessonNumber?: InputMaybe<IntWithAggregatesFilter>;
  periodId?: InputMaybe<StringWithAggregatesFilter>;
  start?: InputMaybe<StringWithAggregatesFilter>;
};

export type CallScheduleSumAggregate = {
  __typename?: 'CallScheduleSumAggregate';
  lessonNumber?: Maybe<Scalars['Int']>;
};

export type CallScheduleSumOrderByAggregateInput = {
  lessonNumber?: InputMaybe<SortOrder>;
};

export type CallScheduleUpdateInput = {
  end?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lessonNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  period?: InputMaybe<PeriodUpdateOneRequiredWithoutCallScheduleNestedInput>;
  start?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CallScheduleUpdateManyMutationInput = {
  end?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lessonNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  start?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CallScheduleUpdateManyWithWhereWithoutPeriodInput = {
  data: CallScheduleUpdateManyMutationInput;
  where: CallScheduleScalarWhereInput;
};

export type CallScheduleUpdateManyWithoutPeriodNestedInput = {
  connect?: InputMaybe<Array<CallScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CallScheduleCreateOrConnectWithoutPeriodInput>>;
  create?: InputMaybe<Array<CallScheduleCreateWithoutPeriodInput>>;
  createMany?: InputMaybe<CallScheduleCreateManyPeriodInputEnvelope>;
  delete?: InputMaybe<Array<CallScheduleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CallScheduleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CallScheduleWhereUniqueInput>>;
  set?: InputMaybe<Array<CallScheduleWhereUniqueInput>>;
  update?: InputMaybe<Array<CallScheduleUpdateWithWhereUniqueWithoutPeriodInput>>;
  updateMany?: InputMaybe<Array<CallScheduleUpdateManyWithWhereWithoutPeriodInput>>;
  upsert?: InputMaybe<Array<CallScheduleUpsertWithWhereUniqueWithoutPeriodInput>>;
};

export type CallScheduleUpdateWithWhereUniqueWithoutPeriodInput = {
  data: CallScheduleUpdateWithoutPeriodInput;
  where: CallScheduleWhereUniqueInput;
};

export type CallScheduleUpdateWithoutPeriodInput = {
  end?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lessonNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  start?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CallScheduleUpsertWithWhereUniqueWithoutPeriodInput = {
  create: CallScheduleCreateWithoutPeriodInput;
  update: CallScheduleUpdateWithoutPeriodInput;
  where: CallScheduleWhereUniqueInput;
};

export type CallScheduleWhereInput = {
  AND?: InputMaybe<Array<CallScheduleWhereInput>>;
  NOT?: InputMaybe<Array<CallScheduleWhereInput>>;
  OR?: InputMaybe<Array<CallScheduleWhereInput>>;
  end?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lessonNumber?: InputMaybe<IntFilter>;
  period?: InputMaybe<PeriodRelationFilter>;
  periodId?: InputMaybe<StringFilter>;
  start?: InputMaybe<StringFilter>;
};

export type CallScheduleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
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

export type EnumAppUpdateOsFieldUpdateOperationsInput = {
  set?: InputMaybe<AppUpdateOs>;
};

export type EnumAppUpdateOsFilter = {
  equals?: InputMaybe<AppUpdateOs>;
  in?: InputMaybe<Array<AppUpdateOs>>;
  not?: InputMaybe<NestedEnumAppUpdateOsFilter>;
  notIn?: InputMaybe<Array<AppUpdateOs>>;
};

export type EnumAppUpdateOsWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAppUpdateOsFilter>;
  _min?: InputMaybe<NestedEnumAppUpdateOsFilter>;
  equals?: InputMaybe<AppUpdateOs>;
  in?: InputMaybe<Array<AppUpdateOs>>;
  not?: InputMaybe<NestedEnumAppUpdateOsWithAggregatesFilter>;
  notIn?: InputMaybe<Array<AppUpdateOs>>;
};

export type EnumPeriodTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PeriodType>;
};

export type EnumPeriodTypeFilter = {
  equals?: InputMaybe<PeriodType>;
  in?: InputMaybe<Array<PeriodType>>;
  not?: InputMaybe<NestedEnumPeriodTypeFilter>;
  notIn?: InputMaybe<Array<PeriodType>>;
};

export type EnumPeriodTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPeriodTypeFilter>;
  _min?: InputMaybe<NestedEnumPeriodTypeFilter>;
  equals?: InputMaybe<PeriodType>;
  in?: InputMaybe<Array<PeriodType>>;
  not?: InputMaybe<NestedEnumPeriodTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PeriodType>>;
};

export type EnumSubgroupFieldUpdateOperationsInput = {
  set?: InputMaybe<Subgroup>;
};

export type EnumSubgroupFilter = {
  equals?: InputMaybe<Subgroup>;
  in?: InputMaybe<Array<Subgroup>>;
  not?: InputMaybe<NestedEnumSubgroupFilter>;
  notIn?: InputMaybe<Array<Subgroup>>;
};

export type EnumSubgroupWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSubgroupFilter>;
  _min?: InputMaybe<NestedEnumSubgroupFilter>;
  equals?: InputMaybe<Subgroup>;
  in?: InputMaybe<Array<Subgroup>>;
  not?: InputMaybe<NestedEnumSubgroupWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Subgroup>>;
};

export type EnumWeekDayFieldUpdateOperationsInput = {
  set?: InputMaybe<WeekDay>;
};

export type EnumWeekDayFilter = {
  equals?: InputMaybe<WeekDay>;
  in?: InputMaybe<Array<WeekDay>>;
  not?: InputMaybe<NestedEnumWeekDayFilter>;
  notIn?: InputMaybe<Array<WeekDay>>;
};

export type EnumWeekDayWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumWeekDayFilter>;
  _min?: InputMaybe<NestedEnumWeekDayFilter>;
  equals?: InputMaybe<WeekDay>;
  in?: InputMaybe<Array<WeekDay>>;
  not?: InputMaybe<NestedEnumWeekDayWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WeekDay>>;
};

export type EnumWeeksTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<WeeksType>;
};

export type EnumWeeksTypeFilter = {
  equals?: InputMaybe<WeeksType>;
  in?: InputMaybe<Array<WeeksType>>;
  not?: InputMaybe<NestedEnumWeeksTypeFilter>;
  notIn?: InputMaybe<Array<WeeksType>>;
};

export type EnumWeeksTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumWeeksTypeFilter>;
  _min?: InputMaybe<NestedEnumWeeksTypeFilter>;
  equals?: InputMaybe<WeeksType>;
  in?: InputMaybe<Array<WeeksType>>;
  not?: InputMaybe<NestedEnumWeeksTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WeeksType>>;
};

export type Faculty = {
  __typename?: 'Faculty';
  _count?: Maybe<FacultyCount>;
  createdAt: Scalars['DateTime'];
  groups: Array<Group>;
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacultyGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};

export type FacultyCount = {
  __typename?: 'FacultyCount';
  groups: Scalars['Int'];
};

export type FacultyCountAggregate = {
  __typename?: 'FacultyCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FacultyCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacultyCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutFacultyInput>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FacultyCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FacultyCreateNestedOneWithoutGroupsInput = {
  connect?: InputMaybe<FacultyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FacultyCreateOrConnectWithoutGroupsInput>;
  create?: InputMaybe<FacultyCreateWithoutGroupsInput>;
};

export type FacultyCreateOrConnectWithoutGroupsInput = {
  create: FacultyCreateWithoutGroupsInput;
  where: FacultyWhereUniqueInput;
};

export type FacultyCreateWithoutGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FacultyGroupBy = {
  __typename?: 'FacultyGroupBy';
  _count?: Maybe<FacultyCountAggregate>;
  _max?: Maybe<FacultyMaxAggregate>;
  _min?: Maybe<FacultyMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacultyMaxAggregate = {
  __typename?: 'FacultyMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FacultyMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacultyMinAggregate = {
  __typename?: 'FacultyMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FacultyMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacultyOrderByWithAggregationInput = {
  _count?: InputMaybe<FacultyCountOrderByAggregateInput>;
  _max?: InputMaybe<FacultyMaxOrderByAggregateInput>;
  _min?: InputMaybe<FacultyMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacultyOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  groups?: InputMaybe<GroupOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacultyRelationFilter = {
  is?: InputMaybe<FacultyWhereInput>;
  isNot?: InputMaybe<FacultyWhereInput>;
};

export enum FacultyScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type FacultyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FacultyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FacultyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FacultyScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type FacultyUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutFacultyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FacultyUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FacultyUpdateOneRequiredWithoutGroupsNestedInput = {
  connect?: InputMaybe<FacultyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FacultyCreateOrConnectWithoutGroupsInput>;
  create?: InputMaybe<FacultyCreateWithoutGroupsInput>;
  update?: InputMaybe<FacultyUpdateWithoutGroupsInput>;
  upsert?: InputMaybe<FacultyUpsertWithoutGroupsInput>;
};

export type FacultyUpdateWithoutGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FacultyUpsertWithoutGroupsInput = {
  create: FacultyCreateWithoutGroupsInput;
  update: FacultyUpdateWithoutGroupsInput;
};

export type FacultyWhereInput = {
  AND?: InputMaybe<Array<FacultyWhereInput>>;
  NOT?: InputMaybe<Array<FacultyWhereInput>>;
  OR?: InputMaybe<Array<FacultyWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  groups?: InputMaybe<GroupListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FacultyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Group = {
  __typename?: 'Group';
  _count?: Maybe<GroupCount>;
  course: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  faculty: Faculty;
  facultyId: Scalars['String'];
  id: Scalars['String'];
  periods: Array<Period>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GroupPeriodsArgs = {
  cursor?: InputMaybe<PeriodWhereUniqueInput>;
  distinct?: InputMaybe<Array<PeriodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PeriodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeriodWhereInput>;
};

export type GroupAvgAggregate = {
  __typename?: 'GroupAvgAggregate';
  course?: Maybe<Scalars['Float']>;
};

export type GroupAvgOrderByAggregateInput = {
  course?: InputMaybe<SortOrder>;
};

export type GroupCount = {
  __typename?: 'GroupCount';
  periods: Scalars['Int'];
};

export type GroupCountAggregate = {
  __typename?: 'GroupCountAggregate';
  _all: Scalars['Int'];
  course: Scalars['Int'];
  createdAt: Scalars['Int'];
  facultyId: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GroupCountOrderByAggregateInput = {
  course?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  facultyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupCreateInput = {
  course: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  faculty: FacultyCreateNestedOneWithoutGroupsInput;
  id?: InputMaybe<Scalars['String']>;
  periods?: InputMaybe<PeriodCreateNestedManyWithoutGroupInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupCreateManyFacultyInput = {
  course: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupCreateManyFacultyInputEnvelope = {
  data: Array<GroupCreateManyFacultyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GroupCreateManyInput = {
  course: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  facultyId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupCreateNestedManyWithoutFacultyInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutFacultyInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutFacultyInput>>;
  createMany?: InputMaybe<GroupCreateManyFacultyInputEnvelope>;
};

export type GroupCreateNestedOneWithoutPeriodsInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutPeriodsInput>;
  create?: InputMaybe<GroupCreateWithoutPeriodsInput>;
};

export type GroupCreateOrConnectWithoutFacultyInput = {
  create: GroupCreateWithoutFacultyInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateOrConnectWithoutPeriodsInput = {
  create: GroupCreateWithoutPeriodsInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateWithoutFacultyInput = {
  course: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  periods?: InputMaybe<PeriodCreateNestedManyWithoutGroupInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupCreateWithoutPeriodsInput = {
  course: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  faculty: FacultyCreateNestedOneWithoutGroupsInput;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupGroupBy = {
  __typename?: 'GroupGroupBy';
  _avg?: Maybe<GroupAvgAggregate>;
  _count?: Maybe<GroupCountAggregate>;
  _max?: Maybe<GroupMaxAggregate>;
  _min?: Maybe<GroupMinAggregate>;
  _sum?: Maybe<GroupSumAggregate>;
  course: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  facultyId: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GroupListRelationFilter = {
  every?: InputMaybe<GroupWhereInput>;
  none?: InputMaybe<GroupWhereInput>;
  some?: InputMaybe<GroupWhereInput>;
};

export type GroupMaxAggregate = {
  __typename?: 'GroupMaxAggregate';
  course?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  facultyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMaxOrderByAggregateInput = {
  course?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  facultyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupMinAggregate = {
  __typename?: 'GroupMinAggregate';
  course?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  facultyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMinOrderByAggregateInput = {
  course?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  facultyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GroupOrderByWithAggregationInput = {
  _avg?: InputMaybe<GroupAvgOrderByAggregateInput>;
  _count?: InputMaybe<GroupCountOrderByAggregateInput>;
  _max?: InputMaybe<GroupMaxOrderByAggregateInput>;
  _min?: InputMaybe<GroupMinOrderByAggregateInput>;
  _sum?: InputMaybe<GroupSumOrderByAggregateInput>;
  course?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  facultyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupOrderByWithRelationInput = {
  course?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  faculty?: InputMaybe<FacultyOrderByWithRelationInput>;
  facultyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  periods?: InputMaybe<PeriodOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupRelationFilter = {
  is?: InputMaybe<GroupWhereInput>;
  isNot?: InputMaybe<GroupWhereInput>;
};

export enum GroupScalarFieldEnum {
  Course = 'course',
  CreatedAt = 'createdAt',
  FacultyId = 'facultyId',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type GroupScalarWhereInput = {
  AND?: InputMaybe<Array<GroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<GroupScalarWhereInput>>;
  OR?: InputMaybe<Array<GroupScalarWhereInput>>;
  course?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  facultyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GroupScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GroupScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GroupScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GroupScalarWhereWithAggregatesInput>>;
  course?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  facultyId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GroupSumAggregate = {
  __typename?: 'GroupSumAggregate';
  course?: Maybe<Scalars['Int']>;
};

export type GroupSumOrderByAggregateInput = {
  course?: InputMaybe<SortOrder>;
};

export type GroupUpdateInput = {
  course?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  faculty?: InputMaybe<FacultyUpdateOneRequiredWithoutGroupsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  periods?: InputMaybe<PeriodUpdateManyWithoutGroupNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateManyMutationInput = {
  course?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateManyWithWhereWithoutFacultyInput = {
  data: GroupUpdateManyMutationInput;
  where: GroupScalarWhereInput;
};

export type GroupUpdateManyWithoutFacultyNestedInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutFacultyInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutFacultyInput>>;
  createMany?: InputMaybe<GroupCreateManyFacultyInputEnvelope>;
  delete?: InputMaybe<Array<GroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupWhereUniqueInput>>;
  update?: InputMaybe<Array<GroupUpdateWithWhereUniqueWithoutFacultyInput>>;
  updateMany?: InputMaybe<Array<GroupUpdateManyWithWhereWithoutFacultyInput>>;
  upsert?: InputMaybe<Array<GroupUpsertWithWhereUniqueWithoutFacultyInput>>;
};

export type GroupUpdateOneRequiredWithoutPeriodsNestedInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutPeriodsInput>;
  create?: InputMaybe<GroupCreateWithoutPeriodsInput>;
  update?: InputMaybe<GroupUpdateWithoutPeriodsInput>;
  upsert?: InputMaybe<GroupUpsertWithoutPeriodsInput>;
};

export type GroupUpdateWithWhereUniqueWithoutFacultyInput = {
  data: GroupUpdateWithoutFacultyInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateWithoutFacultyInput = {
  course?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  periods?: InputMaybe<PeriodUpdateManyWithoutGroupNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateWithoutPeriodsInput = {
  course?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  faculty?: InputMaybe<FacultyUpdateOneRequiredWithoutGroupsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpsertWithWhereUniqueWithoutFacultyInput = {
  create: GroupCreateWithoutFacultyInput;
  update: GroupUpdateWithoutFacultyInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpsertWithoutPeriodsInput = {
  create: GroupCreateWithoutPeriodsInput;
  update: GroupUpdateWithoutPeriodsInput;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  course?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  faculty?: InputMaybe<FacultyRelationFilter>;
  facultyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  periods?: InputMaybe<PeriodListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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

export type IntNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['Int']>>;
  has?: InputMaybe<Scalars['Int']>;
  hasEvery?: InputMaybe<Array<Scalars['Int']>>;
  hasSome?: InputMaybe<Array<Scalars['Int']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
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

export type Lesson = {
  __typename?: 'Lesson';
  _count?: Maybe<LessonCount>;
  classroom: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  notes: Array<LessonNote>;
  number: Scalars['Int'];
  semester: Period;
  semesterId: Scalars['String'];
  subgroup: Subgroup;
  teacher: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  weekDay: WeekDay;
  weeks: Array<Scalars['Int']>;
  weeksType: WeeksType;
};

export type LessonNotesArgs = {
  cursor?: InputMaybe<LessonNoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonNoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonNoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonNoteWhereInput>;
};

export type LessonAvgAggregate = {
  __typename?: 'LessonAvgAggregate';
  number?: Maybe<Scalars['Float']>;
  weeks?: Maybe<Scalars['Float']>;
};

export type LessonAvgOrderByAggregateInput = {
  number?: InputMaybe<SortOrder>;
  weeks?: InputMaybe<SortOrder>;
};

export type LessonCount = {
  __typename?: 'LessonCount';
  notes: Scalars['Int'];
};

export type LessonCountAggregate = {
  __typename?: 'LessonCountAggregate';
  _all: Scalars['Int'];
  classroom: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  number: Scalars['Int'];
  semesterId: Scalars['Int'];
  subgroup: Scalars['Int'];
  teacher: Scalars['Int'];
  title: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
  weekDay: Scalars['Int'];
  weeks: Scalars['Int'];
  weeksType: Scalars['Int'];
};

export type LessonCountOrderByAggregateInput = {
  classroom?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  semesterId?: InputMaybe<SortOrder>;
  subgroup?: InputMaybe<SortOrder>;
  teacher?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weekDay?: InputMaybe<SortOrder>;
  weeks?: InputMaybe<SortOrder>;
  weeksType?: InputMaybe<SortOrder>;
};

export type LessonCreateInput = {
  classroom: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<LessonNoteCreateNestedManyWithoutLessonInput>;
  number: Scalars['Int'];
  semester: PeriodCreateNestedOneWithoutLessonsInput;
  subgroup: Subgroup;
  teacher: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weekDay: WeekDay;
  weeks?: InputMaybe<LessonCreateweeksInput>;
  weeksType: WeeksType;
};

export type LessonCreateManyInput = {
  classroom: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  number: Scalars['Int'];
  semesterId: Scalars['String'];
  subgroup: Subgroup;
  teacher: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weekDay: WeekDay;
  weeks?: InputMaybe<LessonCreateweeksInput>;
  weeksType: WeeksType;
};

export type LessonCreateManySemesterInput = {
  classroom: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  number: Scalars['Int'];
  subgroup: Subgroup;
  teacher: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weekDay: WeekDay;
  weeks?: InputMaybe<LessonCreateweeksInput>;
  weeksType: WeeksType;
};

export type LessonCreateManySemesterInputEnvelope = {
  data: Array<LessonCreateManySemesterInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LessonCreateNestedManyWithoutSemesterInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonCreateOrConnectWithoutSemesterInput>>;
  create?: InputMaybe<Array<LessonCreateWithoutSemesterInput>>;
  createMany?: InputMaybe<LessonCreateManySemesterInputEnvelope>;
};

export type LessonCreateNestedOneWithoutNotesInput = {
  connect?: InputMaybe<LessonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LessonCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<LessonCreateWithoutNotesInput>;
};

export type LessonCreateOrConnectWithoutNotesInput = {
  create: LessonCreateWithoutNotesInput;
  where: LessonWhereUniqueInput;
};

export type LessonCreateOrConnectWithoutSemesterInput = {
  create: LessonCreateWithoutSemesterInput;
  where: LessonWhereUniqueInput;
};

export type LessonCreateWithoutNotesInput = {
  classroom: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  number: Scalars['Int'];
  semester: PeriodCreateNestedOneWithoutLessonsInput;
  subgroup: Subgroup;
  teacher: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weekDay: WeekDay;
  weeks?: InputMaybe<LessonCreateweeksInput>;
  weeksType: WeeksType;
};

export type LessonCreateWithoutSemesterInput = {
  classroom: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<LessonNoteCreateNestedManyWithoutLessonInput>;
  number: Scalars['Int'];
  subgroup: Subgroup;
  teacher: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weekDay: WeekDay;
  weeks?: InputMaybe<LessonCreateweeksInput>;
  weeksType: WeeksType;
};

export type LessonCreateweeksInput = {
  set: Array<Scalars['Int']>;
};

export type LessonGroupBy = {
  __typename?: 'LessonGroupBy';
  _avg?: Maybe<LessonAvgAggregate>;
  _count?: Maybe<LessonCountAggregate>;
  _max?: Maybe<LessonMaxAggregate>;
  _min?: Maybe<LessonMinAggregate>;
  _sum?: Maybe<LessonSumAggregate>;
  classroom: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  number: Scalars['Int'];
  semesterId: Scalars['String'];
  subgroup: Subgroup;
  teacher: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  weekDay: WeekDay;
  weeks?: Maybe<Array<Scalars['Int']>>;
  weeksType: WeeksType;
};

export type LessonListRelationFilter = {
  every?: InputMaybe<LessonWhereInput>;
  none?: InputMaybe<LessonWhereInput>;
  some?: InputMaybe<LessonWhereInput>;
};

export type LessonMaxAggregate = {
  __typename?: 'LessonMaxAggregate';
  classroom?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  semesterId?: Maybe<Scalars['String']>;
  subgroup?: Maybe<Subgroup>;
  teacher?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weekDay?: Maybe<WeekDay>;
  weeksType?: Maybe<WeeksType>;
};

export type LessonMaxOrderByAggregateInput = {
  classroom?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  semesterId?: InputMaybe<SortOrder>;
  subgroup?: InputMaybe<SortOrder>;
  teacher?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weekDay?: InputMaybe<SortOrder>;
  weeksType?: InputMaybe<SortOrder>;
};

export type LessonMinAggregate = {
  __typename?: 'LessonMinAggregate';
  classroom?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  semesterId?: Maybe<Scalars['String']>;
  subgroup?: Maybe<Subgroup>;
  teacher?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weekDay?: Maybe<WeekDay>;
  weeksType?: Maybe<WeeksType>;
};

export type LessonMinOrderByAggregateInput = {
  classroom?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  semesterId?: InputMaybe<SortOrder>;
  subgroup?: InputMaybe<SortOrder>;
  teacher?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weekDay?: InputMaybe<SortOrder>;
  weeksType?: InputMaybe<SortOrder>;
};

export type LessonNote = {
  __typename?: 'LessonNote';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deviceId: Scalars['String'];
  id: Scalars['String'];
  lesson: Lesson;
  lessonId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  week: Scalars['Int'];
};

export type LessonNoteAvgAggregate = {
  __typename?: 'LessonNoteAvgAggregate';
  week?: Maybe<Scalars['Float']>;
};

export type LessonNoteAvgOrderByAggregateInput = {
  week?: InputMaybe<SortOrder>;
};

export type LessonNoteCountAggregate = {
  __typename?: 'LessonNoteCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  deviceId: Scalars['Int'];
  id: Scalars['Int'];
  lessonId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  week: Scalars['Int'];
};

export type LessonNoteCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LessonNoteCreateInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deviceId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lesson: LessonCreateNestedOneWithoutNotesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
};

export type LessonNoteCreateManyInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deviceId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lessonId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
};

export type LessonNoteCreateManyLessonInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deviceId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
};

export type LessonNoteCreateManyLessonInputEnvelope = {
  data: Array<LessonNoteCreateManyLessonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LessonNoteCreateNestedManyWithoutLessonInput = {
  connect?: InputMaybe<Array<LessonNoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonNoteCreateOrConnectWithoutLessonInput>>;
  create?: InputMaybe<Array<LessonNoteCreateWithoutLessonInput>>;
  createMany?: InputMaybe<LessonNoteCreateManyLessonInputEnvelope>;
};

export type LessonNoteCreateOrConnectWithoutLessonInput = {
  create: LessonNoteCreateWithoutLessonInput;
  where: LessonNoteWhereUniqueInput;
};

export type LessonNoteCreateWithoutLessonInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deviceId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
};

export type LessonNoteGroupBy = {
  __typename?: 'LessonNoteGroupBy';
  _avg?: Maybe<LessonNoteAvgAggregate>;
  _count?: Maybe<LessonNoteCountAggregate>;
  _max?: Maybe<LessonNoteMaxAggregate>;
  _min?: Maybe<LessonNoteMinAggregate>;
  _sum?: Maybe<LessonNoteSumAggregate>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deviceId: Scalars['String'];
  id: Scalars['String'];
  lessonId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  week: Scalars['Int'];
};

export type LessonNoteListRelationFilter = {
  every?: InputMaybe<LessonNoteWhereInput>;
  none?: InputMaybe<LessonNoteWhereInput>;
  some?: InputMaybe<LessonNoteWhereInput>;
};

export type LessonNoteMaxAggregate = {
  __typename?: 'LessonNoteMaxAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deviceId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lessonId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
};

export type LessonNoteMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LessonNoteMinAggregate = {
  __typename?: 'LessonNoteMinAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deviceId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lessonId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
};

export type LessonNoteMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LessonNoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LessonNoteOrderByWithAggregationInput = {
  _avg?: InputMaybe<LessonNoteAvgOrderByAggregateInput>;
  _count?: InputMaybe<LessonNoteCountOrderByAggregateInput>;
  _max?: InputMaybe<LessonNoteMaxOrderByAggregateInput>;
  _min?: InputMaybe<LessonNoteMinOrderByAggregateInput>;
  _sum?: InputMaybe<LessonNoteSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LessonNoteOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lesson?: InputMaybe<LessonOrderByWithRelationInput>;
  lessonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export enum LessonNoteScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeviceId = 'deviceId',
  Id = 'id',
  LessonId = 'lessonId',
  UpdatedAt = 'updatedAt',
  Week = 'week',
}

export type LessonNoteScalarWhereInput = {
  AND?: InputMaybe<Array<LessonNoteScalarWhereInput>>;
  NOT?: InputMaybe<Array<LessonNoteScalarWhereInput>>;
  OR?: InputMaybe<Array<LessonNoteScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lessonId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntFilter>;
};

export type LessonNoteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LessonNoteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LessonNoteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LessonNoteScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deviceId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lessonId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  week?: InputMaybe<IntWithAggregatesFilter>;
};

export type LessonNoteSumAggregate = {
  __typename?: 'LessonNoteSumAggregate';
  week?: Maybe<Scalars['Int']>;
};

export type LessonNoteSumOrderByAggregateInput = {
  week?: InputMaybe<SortOrder>;
};

export type LessonNoteUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deviceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lesson?: InputMaybe<LessonUpdateOneRequiredWithoutNotesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type LessonNoteUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deviceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type LessonNoteUpdateManyWithWhereWithoutLessonInput = {
  data: LessonNoteUpdateManyMutationInput;
  where: LessonNoteScalarWhereInput;
};

export type LessonNoteUpdateManyWithoutLessonNestedInput = {
  connect?: InputMaybe<Array<LessonNoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonNoteCreateOrConnectWithoutLessonInput>>;
  create?: InputMaybe<Array<LessonNoteCreateWithoutLessonInput>>;
  createMany?: InputMaybe<LessonNoteCreateManyLessonInputEnvelope>;
  delete?: InputMaybe<Array<LessonNoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LessonNoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LessonNoteWhereUniqueInput>>;
  set?: InputMaybe<Array<LessonNoteWhereUniqueInput>>;
  update?: InputMaybe<Array<LessonNoteUpdateWithWhereUniqueWithoutLessonInput>>;
  updateMany?: InputMaybe<Array<LessonNoteUpdateManyWithWhereWithoutLessonInput>>;
  upsert?: InputMaybe<Array<LessonNoteUpsertWithWhereUniqueWithoutLessonInput>>;
};

export type LessonNoteUpdateWithWhereUniqueWithoutLessonInput = {
  data: LessonNoteUpdateWithoutLessonInput;
  where: LessonNoteWhereUniqueInput;
};

export type LessonNoteUpdateWithoutLessonInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deviceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type LessonNoteUpsertWithWhereUniqueWithoutLessonInput = {
  create: LessonNoteCreateWithoutLessonInput;
  update: LessonNoteUpdateWithoutLessonInput;
  where: LessonNoteWhereUniqueInput;
};

export type LessonNoteWhereInput = {
  AND?: InputMaybe<Array<LessonNoteWhereInput>>;
  NOT?: InputMaybe<Array<LessonNoteWhereInput>>;
  OR?: InputMaybe<Array<LessonNoteWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lesson?: InputMaybe<LessonRelationFilter>;
  lessonId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntFilter>;
};

export type LessonNoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type LessonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LessonOrderByWithAggregationInput = {
  _avg?: InputMaybe<LessonAvgOrderByAggregateInput>;
  _count?: InputMaybe<LessonCountOrderByAggregateInput>;
  _max?: InputMaybe<LessonMaxOrderByAggregateInput>;
  _min?: InputMaybe<LessonMinOrderByAggregateInput>;
  _sum?: InputMaybe<LessonSumOrderByAggregateInput>;
  classroom?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  semesterId?: InputMaybe<SortOrder>;
  subgroup?: InputMaybe<SortOrder>;
  teacher?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weekDay?: InputMaybe<SortOrder>;
  weeks?: InputMaybe<SortOrder>;
  weeksType?: InputMaybe<SortOrder>;
};

export type LessonOrderByWithRelationInput = {
  classroom?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notes?: InputMaybe<LessonNoteOrderByRelationAggregateInput>;
  number?: InputMaybe<SortOrder>;
  semester?: InputMaybe<PeriodOrderByWithRelationInput>;
  semesterId?: InputMaybe<SortOrder>;
  subgroup?: InputMaybe<SortOrder>;
  teacher?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weekDay?: InputMaybe<SortOrder>;
  weeks?: InputMaybe<SortOrder>;
  weeksType?: InputMaybe<SortOrder>;
};

export type LessonRelationFilter = {
  is?: InputMaybe<LessonWhereInput>;
  isNot?: InputMaybe<LessonWhereInput>;
};

export enum LessonScalarFieldEnum {
  Classroom = 'classroom',
  CreatedAt = 'createdAt',
  Id = 'id',
  Number = 'number',
  SemesterId = 'semesterId',
  Subgroup = 'subgroup',
  Teacher = 'teacher',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WeekDay = 'weekDay',
  Weeks = 'weeks',
  WeeksType = 'weeksType',
}

export type LessonScalarWhereInput = {
  AND?: InputMaybe<Array<LessonScalarWhereInput>>;
  NOT?: InputMaybe<Array<LessonScalarWhereInput>>;
  OR?: InputMaybe<Array<LessonScalarWhereInput>>;
  classroom?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  number?: InputMaybe<IntFilter>;
  semesterId?: InputMaybe<StringFilter>;
  subgroup?: InputMaybe<EnumSubgroupFilter>;
  teacher?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weekDay?: InputMaybe<EnumWeekDayFilter>;
  weeks?: InputMaybe<IntNullableListFilter>;
  weeksType?: InputMaybe<EnumWeeksTypeFilter>;
};

export type LessonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LessonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LessonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LessonScalarWhereWithAggregatesInput>>;
  classroom?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  number?: InputMaybe<IntWithAggregatesFilter>;
  semesterId?: InputMaybe<StringWithAggregatesFilter>;
  subgroup?: InputMaybe<EnumSubgroupWithAggregatesFilter>;
  teacher?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  weekDay?: InputMaybe<EnumWeekDayWithAggregatesFilter>;
  weeks?: InputMaybe<IntNullableListFilter>;
  weeksType?: InputMaybe<EnumWeeksTypeWithAggregatesFilter>;
};

export type LessonSumAggregate = {
  __typename?: 'LessonSumAggregate';
  number?: Maybe<Scalars['Int']>;
  weeks?: Maybe<Array<Scalars['Int']>>;
};

export type LessonSumOrderByAggregateInput = {
  number?: InputMaybe<SortOrder>;
  weeks?: InputMaybe<SortOrder>;
};

export type LessonUpdateInput = {
  classroom?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  notes?: InputMaybe<LessonNoteUpdateManyWithoutLessonNestedInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  semester?: InputMaybe<PeriodUpdateOneRequiredWithoutLessonsNestedInput>;
  subgroup?: InputMaybe<EnumSubgroupFieldUpdateOperationsInput>;
  teacher?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weekDay?: InputMaybe<EnumWeekDayFieldUpdateOperationsInput>;
  weeks?: InputMaybe<LessonUpdateweeksInput>;
  weeksType?: InputMaybe<EnumWeeksTypeFieldUpdateOperationsInput>;
};

export type LessonUpdateManyMutationInput = {
  classroom?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  subgroup?: InputMaybe<EnumSubgroupFieldUpdateOperationsInput>;
  teacher?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weekDay?: InputMaybe<EnumWeekDayFieldUpdateOperationsInput>;
  weeks?: InputMaybe<LessonUpdateweeksInput>;
  weeksType?: InputMaybe<EnumWeeksTypeFieldUpdateOperationsInput>;
};

export type LessonUpdateManyWithWhereWithoutSemesterInput = {
  data: LessonUpdateManyMutationInput;
  where: LessonScalarWhereInput;
};

export type LessonUpdateManyWithoutSemesterNestedInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonCreateOrConnectWithoutSemesterInput>>;
  create?: InputMaybe<Array<LessonCreateWithoutSemesterInput>>;
  createMany?: InputMaybe<LessonCreateManySemesterInputEnvelope>;
  delete?: InputMaybe<Array<LessonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LessonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  set?: InputMaybe<Array<LessonWhereUniqueInput>>;
  update?: InputMaybe<Array<LessonUpdateWithWhereUniqueWithoutSemesterInput>>;
  updateMany?: InputMaybe<Array<LessonUpdateManyWithWhereWithoutSemesterInput>>;
  upsert?: InputMaybe<Array<LessonUpsertWithWhereUniqueWithoutSemesterInput>>;
};

export type LessonUpdateOneRequiredWithoutNotesNestedInput = {
  connect?: InputMaybe<LessonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LessonCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<LessonCreateWithoutNotesInput>;
  update?: InputMaybe<LessonUpdateWithoutNotesInput>;
  upsert?: InputMaybe<LessonUpsertWithoutNotesInput>;
};

export type LessonUpdateWithWhereUniqueWithoutSemesterInput = {
  data: LessonUpdateWithoutSemesterInput;
  where: LessonWhereUniqueInput;
};

export type LessonUpdateWithoutNotesInput = {
  classroom?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  semester?: InputMaybe<PeriodUpdateOneRequiredWithoutLessonsNestedInput>;
  subgroup?: InputMaybe<EnumSubgroupFieldUpdateOperationsInput>;
  teacher?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weekDay?: InputMaybe<EnumWeekDayFieldUpdateOperationsInput>;
  weeks?: InputMaybe<LessonUpdateweeksInput>;
  weeksType?: InputMaybe<EnumWeeksTypeFieldUpdateOperationsInput>;
};

export type LessonUpdateWithoutSemesterInput = {
  classroom?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  notes?: InputMaybe<LessonNoteUpdateManyWithoutLessonNestedInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  subgroup?: InputMaybe<EnumSubgroupFieldUpdateOperationsInput>;
  teacher?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weekDay?: InputMaybe<EnumWeekDayFieldUpdateOperationsInput>;
  weeks?: InputMaybe<LessonUpdateweeksInput>;
  weeksType?: InputMaybe<EnumWeeksTypeFieldUpdateOperationsInput>;
};

export type LessonUpdateweeksInput = {
  push?: InputMaybe<Array<Scalars['Int']>>;
  set?: InputMaybe<Array<Scalars['Int']>>;
};

export type LessonUpsertWithWhereUniqueWithoutSemesterInput = {
  create: LessonCreateWithoutSemesterInput;
  update: LessonUpdateWithoutSemesterInput;
  where: LessonWhereUniqueInput;
};

export type LessonUpsertWithoutNotesInput = {
  create: LessonCreateWithoutNotesInput;
  update: LessonUpdateWithoutNotesInput;
};

export type LessonWhereInput = {
  AND?: InputMaybe<Array<LessonWhereInput>>;
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  OR?: InputMaybe<Array<LessonWhereInput>>;
  classroom?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  notes?: InputMaybe<LessonNoteListRelationFilter>;
  number?: InputMaybe<IntFilter>;
  semester?: InputMaybe<PeriodRelationFilter>;
  semesterId?: InputMaybe<StringFilter>;
  subgroup?: InputMaybe<EnumSubgroupFilter>;
  teacher?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weekDay?: InputMaybe<EnumWeekDayFilter>;
  weeks?: InputMaybe<IntNullableListFilter>;
  weeksType?: InputMaybe<EnumWeeksTypeFilter>;
};

export type LessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAppUpdate: AffectedRowsOutput;
  createManyAppUpdateFeature: AffectedRowsOutput;
  createManyCallSchedule: AffectedRowsOutput;
  createManyFaculty: AffectedRowsOutput;
  createManyGroup: AffectedRowsOutput;
  createManyLesson: AffectedRowsOutput;
  createManyLessonNote: AffectedRowsOutput;
  createManyPeriod: AffectedRowsOutput;
  createManySecretLabel: AffectedRowsOutput;
  createOneAppUpdate: AppUpdate;
  createOneAppUpdateFeature: AppUpdateFeature;
  createOneCallSchedule: CallSchedule;
  createOneFaculty: Faculty;
  createOneGroup: Group;
  createOneLesson: Lesson;
  createOneLessonNote: LessonNote;
  createOnePeriod: Period;
  createOneSecretLabel: SecretLabel;
  deleteManyAppUpdate: AffectedRowsOutput;
  deleteManyAppUpdateFeature: AffectedRowsOutput;
  deleteManyCallSchedule: AffectedRowsOutput;
  deleteManyFaculty: AffectedRowsOutput;
  deleteManyGroup: AffectedRowsOutput;
  deleteManyLesson: AffectedRowsOutput;
  deleteManyLessonNote: AffectedRowsOutput;
  deleteManyPeriod: AffectedRowsOutput;
  deleteManySecretLabel: AffectedRowsOutput;
  deleteOneAppUpdate?: Maybe<AppUpdate>;
  deleteOneAppUpdateFeature?: Maybe<AppUpdateFeature>;
  deleteOneCallSchedule?: Maybe<CallSchedule>;
  deleteOneFaculty?: Maybe<Faculty>;
  deleteOneGroup?: Maybe<Group>;
  deleteOneLesson?: Maybe<Lesson>;
  deleteOneLessonNote?: Maybe<LessonNote>;
  deleteOnePeriod?: Maybe<Period>;
  deleteOneSecretLabel?: Maybe<SecretLabel>;
  updateManyAppUpdate: AffectedRowsOutput;
  updateManyAppUpdateFeature: AffectedRowsOutput;
  updateManyCallSchedule: AffectedRowsOutput;
  updateManyFaculty: AffectedRowsOutput;
  updateManyGroup: AffectedRowsOutput;
  updateManyLesson: AffectedRowsOutput;
  updateManyLessonNote: AffectedRowsOutput;
  updateManyPeriod: AffectedRowsOutput;
  updateManySecretLabel: AffectedRowsOutput;
  updateOneAppUpdate?: Maybe<AppUpdate>;
  updateOneAppUpdateFeature?: Maybe<AppUpdateFeature>;
  updateOneCallSchedule?: Maybe<CallSchedule>;
  updateOneFaculty?: Maybe<Faculty>;
  updateOneGroup?: Maybe<Group>;
  updateOneLesson?: Maybe<Lesson>;
  updateOneLessonNote?: Maybe<LessonNote>;
  updateOnePeriod?: Maybe<Period>;
  updateOneSecretLabel?: Maybe<SecretLabel>;
  upsertOneAppUpdate: AppUpdate;
  upsertOneAppUpdateFeature: AppUpdateFeature;
  upsertOneCallSchedule: CallSchedule;
  upsertOneFaculty: Faculty;
  upsertOneGroup: Group;
  upsertOneLesson: Lesson;
  upsertOneLessonNote: LessonNote;
  upsertOnePeriod: Period;
  upsertOneSecretLabel: SecretLabel;
};

export type MutationCreateManyAppUpdateArgs = {
  data: Array<AppUpdateCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyAppUpdateFeatureArgs = {
  data: Array<AppUpdateFeatureCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyCallScheduleArgs = {
  data: Array<CallScheduleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyFacultyArgs = {
  data: Array<FacultyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyGroupArgs = {
  data: Array<GroupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyLessonArgs = {
  data: Array<LessonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyLessonNoteArgs = {
  data: Array<LessonNoteCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyPeriodArgs = {
  data: Array<PeriodCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManySecretLabelArgs = {
  data: Array<SecretLabelCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateOneAppUpdateArgs = {
  data: AppUpdateCreateInput;
};

export type MutationCreateOneAppUpdateFeatureArgs = {
  data: AppUpdateFeatureCreateInput;
};

export type MutationCreateOneCallScheduleArgs = {
  data: CallScheduleCreateInput;
};

export type MutationCreateOneFacultyArgs = {
  data: FacultyCreateInput;
};

export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};

export type MutationCreateOneLessonArgs = {
  data: LessonCreateInput;
};

export type MutationCreateOneLessonNoteArgs = {
  data: LessonNoteCreateInput;
};

export type MutationCreateOnePeriodArgs = {
  data: PeriodCreateInput;
};

export type MutationCreateOneSecretLabelArgs = {
  data: SecretLabelCreateInput;
};

export type MutationDeleteManyAppUpdateArgs = {
  where?: InputMaybe<AppUpdateWhereInput>;
};

export type MutationDeleteManyAppUpdateFeatureArgs = {
  where?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type MutationDeleteManyCallScheduleArgs = {
  where?: InputMaybe<CallScheduleWhereInput>;
};

export type MutationDeleteManyFacultyArgs = {
  where?: InputMaybe<FacultyWhereInput>;
};

export type MutationDeleteManyGroupArgs = {
  where?: InputMaybe<GroupWhereInput>;
};

export type MutationDeleteManyLessonArgs = {
  where?: InputMaybe<LessonWhereInput>;
};

export type MutationDeleteManyLessonNoteArgs = {
  where?: InputMaybe<LessonNoteWhereInput>;
};

export type MutationDeleteManyPeriodArgs = {
  where?: InputMaybe<PeriodWhereInput>;
};

export type MutationDeleteManySecretLabelArgs = {
  where?: InputMaybe<SecretLabelWhereInput>;
};

export type MutationDeleteOneAppUpdateArgs = {
  where: AppUpdateWhereUniqueInput;
};

export type MutationDeleteOneAppUpdateFeatureArgs = {
  where: AppUpdateFeatureWhereUniqueInput;
};

export type MutationDeleteOneCallScheduleArgs = {
  where: CallScheduleWhereUniqueInput;
};

export type MutationDeleteOneFacultyArgs = {
  where: FacultyWhereUniqueInput;
};

export type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};

export type MutationDeleteOneLessonArgs = {
  where: LessonWhereUniqueInput;
};

export type MutationDeleteOneLessonNoteArgs = {
  where: LessonNoteWhereUniqueInput;
};

export type MutationDeleteOnePeriodArgs = {
  where: PeriodWhereUniqueInput;
};

export type MutationDeleteOneSecretLabelArgs = {
  where: SecretLabelWhereUniqueInput;
};

export type MutationUpdateManyAppUpdateArgs = {
  data: AppUpdateUpdateManyMutationInput;
  where?: InputMaybe<AppUpdateWhereInput>;
};

export type MutationUpdateManyAppUpdateFeatureArgs = {
  data: AppUpdateFeatureUpdateManyMutationInput;
  where?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type MutationUpdateManyCallScheduleArgs = {
  data: CallScheduleUpdateManyMutationInput;
  where?: InputMaybe<CallScheduleWhereInput>;
};

export type MutationUpdateManyFacultyArgs = {
  data: FacultyUpdateManyMutationInput;
  where?: InputMaybe<FacultyWhereInput>;
};

export type MutationUpdateManyGroupArgs = {
  data: GroupUpdateManyMutationInput;
  where?: InputMaybe<GroupWhereInput>;
};

export type MutationUpdateManyLessonArgs = {
  data: LessonUpdateManyMutationInput;
  where?: InputMaybe<LessonWhereInput>;
};

export type MutationUpdateManyLessonNoteArgs = {
  data: LessonNoteUpdateManyMutationInput;
  where?: InputMaybe<LessonNoteWhereInput>;
};

export type MutationUpdateManyPeriodArgs = {
  data: PeriodUpdateManyMutationInput;
  where?: InputMaybe<PeriodWhereInput>;
};

export type MutationUpdateManySecretLabelArgs = {
  data: SecretLabelUpdateManyMutationInput;
  where?: InputMaybe<SecretLabelWhereInput>;
};

export type MutationUpdateOneAppUpdateArgs = {
  data: AppUpdateUpdateInput;
  where: AppUpdateWhereUniqueInput;
};

export type MutationUpdateOneAppUpdateFeatureArgs = {
  data: AppUpdateFeatureUpdateInput;
  where: AppUpdateFeatureWhereUniqueInput;
};

export type MutationUpdateOneCallScheduleArgs = {
  data: CallScheduleUpdateInput;
  where: CallScheduleWhereUniqueInput;
};

export type MutationUpdateOneFacultyArgs = {
  data: FacultyUpdateInput;
  where: FacultyWhereUniqueInput;
};

export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type MutationUpdateOneLessonArgs = {
  data: LessonUpdateInput;
  where: LessonWhereUniqueInput;
};

export type MutationUpdateOneLessonNoteArgs = {
  data: LessonNoteUpdateInput;
  where: LessonNoteWhereUniqueInput;
};

export type MutationUpdateOnePeriodArgs = {
  data: PeriodUpdateInput;
  where: PeriodWhereUniqueInput;
};

export type MutationUpdateOneSecretLabelArgs = {
  data: SecretLabelUpdateInput;
  where: SecretLabelWhereUniqueInput;
};

export type MutationUpsertOneAppUpdateArgs = {
  create: AppUpdateCreateInput;
  update: AppUpdateUpdateInput;
  where: AppUpdateWhereUniqueInput;
};

export type MutationUpsertOneAppUpdateFeatureArgs = {
  create: AppUpdateFeatureCreateInput;
  update: AppUpdateFeatureUpdateInput;
  where: AppUpdateFeatureWhereUniqueInput;
};

export type MutationUpsertOneCallScheduleArgs = {
  create: CallScheduleCreateInput;
  update: CallScheduleUpdateInput;
  where: CallScheduleWhereUniqueInput;
};

export type MutationUpsertOneFacultyArgs = {
  create: FacultyCreateInput;
  update: FacultyUpdateInput;
  where: FacultyWhereUniqueInput;
};

export type MutationUpsertOneGroupArgs = {
  create: GroupCreateInput;
  update: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type MutationUpsertOneLessonArgs = {
  create: LessonCreateInput;
  update: LessonUpdateInput;
  where: LessonWhereUniqueInput;
};

export type MutationUpsertOneLessonNoteArgs = {
  create: LessonNoteCreateInput;
  update: LessonNoteUpdateInput;
  where: LessonNoteWhereUniqueInput;
};

export type MutationUpsertOnePeriodArgs = {
  create: PeriodCreateInput;
  update: PeriodUpdateInput;
  where: PeriodWhereUniqueInput;
};

export type MutationUpsertOneSecretLabelArgs = {
  create: SecretLabelCreateInput;
  update: SecretLabelUpdateInput;
  where: SecretLabelWhereUniqueInput;
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

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
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

export type NestedEnumAppUpdateOsFilter = {
  equals?: InputMaybe<AppUpdateOs>;
  in?: InputMaybe<Array<AppUpdateOs>>;
  not?: InputMaybe<NestedEnumAppUpdateOsFilter>;
  notIn?: InputMaybe<Array<AppUpdateOs>>;
};

export type NestedEnumAppUpdateOsWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAppUpdateOsFilter>;
  _min?: InputMaybe<NestedEnumAppUpdateOsFilter>;
  equals?: InputMaybe<AppUpdateOs>;
  in?: InputMaybe<Array<AppUpdateOs>>;
  not?: InputMaybe<NestedEnumAppUpdateOsWithAggregatesFilter>;
  notIn?: InputMaybe<Array<AppUpdateOs>>;
};

export type NestedEnumPeriodTypeFilter = {
  equals?: InputMaybe<PeriodType>;
  in?: InputMaybe<Array<PeriodType>>;
  not?: InputMaybe<NestedEnumPeriodTypeFilter>;
  notIn?: InputMaybe<Array<PeriodType>>;
};

export type NestedEnumPeriodTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPeriodTypeFilter>;
  _min?: InputMaybe<NestedEnumPeriodTypeFilter>;
  equals?: InputMaybe<PeriodType>;
  in?: InputMaybe<Array<PeriodType>>;
  not?: InputMaybe<NestedEnumPeriodTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PeriodType>>;
};

export type NestedEnumSubgroupFilter = {
  equals?: InputMaybe<Subgroup>;
  in?: InputMaybe<Array<Subgroup>>;
  not?: InputMaybe<NestedEnumSubgroupFilter>;
  notIn?: InputMaybe<Array<Subgroup>>;
};

export type NestedEnumSubgroupWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSubgroupFilter>;
  _min?: InputMaybe<NestedEnumSubgroupFilter>;
  equals?: InputMaybe<Subgroup>;
  in?: InputMaybe<Array<Subgroup>>;
  not?: InputMaybe<NestedEnumSubgroupWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Subgroup>>;
};

export type NestedEnumWeekDayFilter = {
  equals?: InputMaybe<WeekDay>;
  in?: InputMaybe<Array<WeekDay>>;
  not?: InputMaybe<NestedEnumWeekDayFilter>;
  notIn?: InputMaybe<Array<WeekDay>>;
};

export type NestedEnumWeekDayWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumWeekDayFilter>;
  _min?: InputMaybe<NestedEnumWeekDayFilter>;
  equals?: InputMaybe<WeekDay>;
  in?: InputMaybe<Array<WeekDay>>;
  not?: InputMaybe<NestedEnumWeekDayWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WeekDay>>;
};

export type NestedEnumWeeksTypeFilter = {
  equals?: InputMaybe<WeeksType>;
  in?: InputMaybe<Array<WeeksType>>;
  not?: InputMaybe<NestedEnumWeeksTypeFilter>;
  notIn?: InputMaybe<Array<WeeksType>>;
};

export type NestedEnumWeeksTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumWeeksTypeFilter>;
  _min?: InputMaybe<NestedEnumWeeksTypeFilter>;
  equals?: InputMaybe<WeeksType>;
  in?: InputMaybe<Array<WeeksType>>;
  not?: InputMaybe<NestedEnumWeeksTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WeeksType>>;
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

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type Period = {
  __typename?: 'Period';
  _count?: Maybe<PeriodCount>;
  callSchedule: Array<CallSchedule>;
  createdAt: Scalars['DateTime'];
  end: Scalars['DateTime'];
  group: Group;
  groupId: Scalars['String'];
  id: Scalars['String'];
  lastScheduleUpdate?: Maybe<Scalars['DateTime']>;
  lessons: Array<Lesson>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt: Scalars['DateTime'];
};

export type PeriodCallScheduleArgs = {
  cursor?: InputMaybe<CallScheduleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CallScheduleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CallScheduleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallScheduleWhereInput>;
};

export type PeriodLessonsArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};

export type PeriodCount = {
  __typename?: 'PeriodCount';
  callSchedule: Scalars['Int'];
  lessons: Scalars['Int'];
};

export type PeriodCountAggregate = {
  __typename?: 'PeriodCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  end: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  lastScheduleUpdate: Scalars['Int'];
  start: Scalars['Int'];
  title: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PeriodCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastScheduleUpdate?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PeriodCreateInput = {
  callSchedule?: InputMaybe<CallScheduleCreateNestedManyWithoutPeriodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end: Scalars['DateTime'];
  group: GroupCreateNestedOneWithoutPeriodsInput;
  id?: InputMaybe<Scalars['String']>;
  lastScheduleUpdate?: InputMaybe<Scalars['DateTime']>;
  lessons?: InputMaybe<LessonCreateNestedManyWithoutSemesterInput>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PeriodCreateManyGroupInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  lastScheduleUpdate?: InputMaybe<Scalars['DateTime']>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PeriodCreateManyGroupInputEnvelope = {
  data: Array<PeriodCreateManyGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PeriodCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end: Scalars['DateTime'];
  groupId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastScheduleUpdate?: InputMaybe<Scalars['DateTime']>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PeriodCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PeriodCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<PeriodCreateWithoutGroupInput>>;
  createMany?: InputMaybe<PeriodCreateManyGroupInputEnvelope>;
};

export type PeriodCreateNestedOneWithoutCallScheduleInput = {
  connect?: InputMaybe<PeriodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeriodCreateOrConnectWithoutCallScheduleInput>;
  create?: InputMaybe<PeriodCreateWithoutCallScheduleInput>;
};

export type PeriodCreateNestedOneWithoutLessonsInput = {
  connect?: InputMaybe<PeriodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeriodCreateOrConnectWithoutLessonsInput>;
  create?: InputMaybe<PeriodCreateWithoutLessonsInput>;
};

export type PeriodCreateOrConnectWithoutCallScheduleInput = {
  create: PeriodCreateWithoutCallScheduleInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodCreateOrConnectWithoutGroupInput = {
  create: PeriodCreateWithoutGroupInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodCreateOrConnectWithoutLessonsInput = {
  create: PeriodCreateWithoutLessonsInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodCreateWithoutCallScheduleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end: Scalars['DateTime'];
  group: GroupCreateNestedOneWithoutPeriodsInput;
  id?: InputMaybe<Scalars['String']>;
  lastScheduleUpdate?: InputMaybe<Scalars['DateTime']>;
  lessons?: InputMaybe<LessonCreateNestedManyWithoutSemesterInput>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PeriodCreateWithoutGroupInput = {
  callSchedule?: InputMaybe<CallScheduleCreateNestedManyWithoutPeriodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  lastScheduleUpdate?: InputMaybe<Scalars['DateTime']>;
  lessons?: InputMaybe<LessonCreateNestedManyWithoutSemesterInput>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PeriodCreateWithoutLessonsInput = {
  callSchedule?: InputMaybe<CallScheduleCreateNestedManyWithoutPeriodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end: Scalars['DateTime'];
  group: GroupCreateNestedOneWithoutPeriodsInput;
  id?: InputMaybe<Scalars['String']>;
  lastScheduleUpdate?: InputMaybe<Scalars['DateTime']>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PeriodGroupBy = {
  __typename?: 'PeriodGroupBy';
  _count?: Maybe<PeriodCountAggregate>;
  _max?: Maybe<PeriodMaxAggregate>;
  _min?: Maybe<PeriodMinAggregate>;
  createdAt: Scalars['DateTime'];
  end: Scalars['DateTime'];
  groupId: Scalars['String'];
  id: Scalars['String'];
  lastScheduleUpdate?: Maybe<Scalars['DateTime']>;
  start: Scalars['DateTime'];
  title: Scalars['String'];
  type: PeriodType;
  updatedAt: Scalars['DateTime'];
};

export type PeriodListRelationFilter = {
  every?: InputMaybe<PeriodWhereInput>;
  none?: InputMaybe<PeriodWhereInput>;
  some?: InputMaybe<PeriodWhereInput>;
};

export type PeriodMaxAggregate = {
  __typename?: 'PeriodMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastScheduleUpdate?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PeriodType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PeriodMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastScheduleUpdate?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PeriodMinAggregate = {
  __typename?: 'PeriodMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastScheduleUpdate?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PeriodType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PeriodMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastScheduleUpdate?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PeriodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PeriodOrderByWithAggregationInput = {
  _count?: InputMaybe<PeriodCountOrderByAggregateInput>;
  _max?: InputMaybe<PeriodMaxOrderByAggregateInput>;
  _min?: InputMaybe<PeriodMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastScheduleUpdate?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PeriodOrderByWithRelationInput = {
  callSchedule?: InputMaybe<CallScheduleOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  group?: InputMaybe<GroupOrderByWithRelationInput>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastScheduleUpdate?: InputMaybe<SortOrder>;
  lessons?: InputMaybe<LessonOrderByRelationAggregateInput>;
  start?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PeriodRelationFilter = {
  is?: InputMaybe<PeriodWhereInput>;
  isNot?: InputMaybe<PeriodWhereInput>;
};

export enum PeriodScalarFieldEnum {
  CreatedAt = 'createdAt',
  End = 'end',
  GroupId = 'groupId',
  Id = 'id',
  LastScheduleUpdate = 'lastScheduleUpdate',
  Start = 'start',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export type PeriodScalarWhereInput = {
  AND?: InputMaybe<Array<PeriodScalarWhereInput>>;
  NOT?: InputMaybe<Array<PeriodScalarWhereInput>>;
  OR?: InputMaybe<Array<PeriodScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  end?: InputMaybe<DateTimeFilter>;
  groupId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastScheduleUpdate?: InputMaybe<DateTimeNullableFilter>;
  start?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumPeriodTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PeriodScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PeriodScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PeriodScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PeriodScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  end?: InputMaybe<DateTimeWithAggregatesFilter>;
  groupId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastScheduleUpdate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  start?: InputMaybe<DateTimeWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumPeriodTypeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export enum PeriodType {
  Learning = 'learning',
  Session = 'session',
  Vacation = 'vacation',
}

export type PeriodUpdateInput = {
  callSchedule?: InputMaybe<CallScheduleUpdateManyWithoutPeriodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutPeriodsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastScheduleUpdate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutSemesterNestedInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPeriodTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PeriodUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastScheduleUpdate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPeriodTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PeriodUpdateManyWithWhereWithoutGroupInput = {
  data: PeriodUpdateManyMutationInput;
  where: PeriodScalarWhereInput;
};

export type PeriodUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PeriodCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<PeriodCreateWithoutGroupInput>>;
  createMany?: InputMaybe<PeriodCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PeriodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  set?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  update?: InputMaybe<Array<PeriodUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<PeriodUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<PeriodUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type PeriodUpdateOneRequiredWithoutCallScheduleNestedInput = {
  connect?: InputMaybe<PeriodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeriodCreateOrConnectWithoutCallScheduleInput>;
  create?: InputMaybe<PeriodCreateWithoutCallScheduleInput>;
  update?: InputMaybe<PeriodUpdateWithoutCallScheduleInput>;
  upsert?: InputMaybe<PeriodUpsertWithoutCallScheduleInput>;
};

export type PeriodUpdateOneRequiredWithoutLessonsNestedInput = {
  connect?: InputMaybe<PeriodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeriodCreateOrConnectWithoutLessonsInput>;
  create?: InputMaybe<PeriodCreateWithoutLessonsInput>;
  update?: InputMaybe<PeriodUpdateWithoutLessonsInput>;
  upsert?: InputMaybe<PeriodUpsertWithoutLessonsInput>;
};

export type PeriodUpdateWithWhereUniqueWithoutGroupInput = {
  data: PeriodUpdateWithoutGroupInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodUpdateWithoutCallScheduleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutPeriodsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastScheduleUpdate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutSemesterNestedInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPeriodTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PeriodUpdateWithoutGroupInput = {
  callSchedule?: InputMaybe<CallScheduleUpdateManyWithoutPeriodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastScheduleUpdate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutSemesterNestedInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPeriodTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PeriodUpdateWithoutLessonsInput = {
  callSchedule?: InputMaybe<CallScheduleUpdateManyWithoutPeriodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutPeriodsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastScheduleUpdate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPeriodTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PeriodUpsertWithWhereUniqueWithoutGroupInput = {
  create: PeriodCreateWithoutGroupInput;
  update: PeriodUpdateWithoutGroupInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodUpsertWithoutCallScheduleInput = {
  create: PeriodCreateWithoutCallScheduleInput;
  update: PeriodUpdateWithoutCallScheduleInput;
};

export type PeriodUpsertWithoutLessonsInput = {
  create: PeriodCreateWithoutLessonsInput;
  update: PeriodUpdateWithoutLessonsInput;
};

export type PeriodWhereInput = {
  AND?: InputMaybe<Array<PeriodWhereInput>>;
  NOT?: InputMaybe<Array<PeriodWhereInput>>;
  OR?: InputMaybe<Array<PeriodWhereInput>>;
  callSchedule?: InputMaybe<CallScheduleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  end?: InputMaybe<DateTimeFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastScheduleUpdate?: InputMaybe<DateTimeNullableFilter>;
  lessons?: InputMaybe<LessonListRelationFilter>;
  start?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumPeriodTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PeriodWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAppUpdate: AggregateAppUpdate;
  aggregateAppUpdateFeature: AggregateAppUpdateFeature;
  aggregateCallSchedule: AggregateCallSchedule;
  aggregateFaculty: AggregateFaculty;
  aggregateGroup: AggregateGroup;
  aggregateLesson: AggregateLesson;
  aggregateLessonNote: AggregateLessonNote;
  aggregatePeriod: AggregatePeriod;
  aggregateSecretLabel: AggregateSecretLabel;
  appUpdate?: Maybe<AppUpdate>;
  appUpdateFeature?: Maybe<AppUpdateFeature>;
  appUpdateFeatures: Array<AppUpdateFeature>;
  appUpdates: Array<AppUpdate>;
  callSchedule?: Maybe<CallSchedule>;
  callSchedules: Array<CallSchedule>;
  faculties: Array<Faculty>;
  faculty?: Maybe<Faculty>;
  findFirstAppUpdate?: Maybe<AppUpdate>;
  findFirstAppUpdateFeature?: Maybe<AppUpdateFeature>;
  findFirstCallSchedule?: Maybe<CallSchedule>;
  findFirstFaculty?: Maybe<Faculty>;
  findFirstGroup?: Maybe<Group>;
  findFirstLesson?: Maybe<Lesson>;
  findFirstLessonNote?: Maybe<LessonNote>;
  findFirstPeriod?: Maybe<Period>;
  findFirstSecretLabel?: Maybe<SecretLabel>;
  group?: Maybe<Group>;
  groupByAppUpdate: Array<AppUpdateGroupBy>;
  groupByAppUpdateFeature: Array<AppUpdateFeatureGroupBy>;
  groupByCallSchedule: Array<CallScheduleGroupBy>;
  groupByFaculty: Array<FacultyGroupBy>;
  groupByGroup: Array<GroupGroupBy>;
  groupByLesson: Array<LessonGroupBy>;
  groupByLessonNote: Array<LessonNoteGroupBy>;
  groupByPeriod: Array<PeriodGroupBy>;
  groupBySecretLabel: Array<SecretLabelGroupBy>;
  groups: Array<Group>;
  lesson?: Maybe<Lesson>;
  lessonNote?: Maybe<LessonNote>;
  lessonNotes: Array<LessonNote>;
  lessons: Array<Lesson>;
  period?: Maybe<Period>;
  periods: Array<Period>;
  secretLabel?: Maybe<SecretLabel>;
  secretLabels: Array<SecretLabel>;
};

export type QueryAggregateAppUpdateArgs = {
  cursor?: InputMaybe<AppUpdateWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AppUpdateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateWhereInput>;
};

export type QueryAggregateAppUpdateFeatureArgs = {
  cursor?: InputMaybe<AppUpdateFeatureWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AppUpdateFeatureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type QueryAggregateCallScheduleArgs = {
  cursor?: InputMaybe<CallScheduleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CallScheduleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallScheduleWhereInput>;
};

export type QueryAggregateFacultyArgs = {
  cursor?: InputMaybe<FacultyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FacultyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FacultyWhereInput>;
};

export type QueryAggregateGroupArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};

export type QueryAggregateLessonArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};

export type QueryAggregateLessonNoteArgs = {
  cursor?: InputMaybe<LessonNoteWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LessonNoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonNoteWhereInput>;
};

export type QueryAggregatePeriodArgs = {
  cursor?: InputMaybe<PeriodWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PeriodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeriodWhereInput>;
};

export type QueryAggregateSecretLabelArgs = {
  cursor?: InputMaybe<SecretLabelWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SecretLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SecretLabelWhereInput>;
};

export type QueryAppUpdateArgs = {
  where: AppUpdateWhereUniqueInput;
};

export type QueryAppUpdateFeatureArgs = {
  where: AppUpdateFeatureWhereUniqueInput;
};

export type QueryAppUpdateFeaturesArgs = {
  cursor?: InputMaybe<AppUpdateFeatureWhereUniqueInput>;
  distinct?: InputMaybe<Array<AppUpdateFeatureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AppUpdateFeatureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type QueryAppUpdatesArgs = {
  cursor?: InputMaybe<AppUpdateWhereUniqueInput>;
  distinct?: InputMaybe<Array<AppUpdateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AppUpdateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateWhereInput>;
};

export type QueryCallScheduleArgs = {
  where: CallScheduleWhereUniqueInput;
};

export type QueryCallSchedulesArgs = {
  cursor?: InputMaybe<CallScheduleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CallScheduleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CallScheduleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallScheduleWhereInput>;
};

export type QueryFacultiesArgs = {
  cursor?: InputMaybe<FacultyWhereUniqueInput>;
  distinct?: InputMaybe<Array<FacultyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FacultyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FacultyWhereInput>;
};

export type QueryFacultyArgs = {
  where: FacultyWhereUniqueInput;
};

export type QueryFindFirstAppUpdateArgs = {
  cursor?: InputMaybe<AppUpdateWhereUniqueInput>;
  distinct?: InputMaybe<Array<AppUpdateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AppUpdateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateWhereInput>;
};

export type QueryFindFirstAppUpdateFeatureArgs = {
  cursor?: InputMaybe<AppUpdateFeatureWhereUniqueInput>;
  distinct?: InputMaybe<Array<AppUpdateFeatureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AppUpdateFeatureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type QueryFindFirstCallScheduleArgs = {
  cursor?: InputMaybe<CallScheduleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CallScheduleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CallScheduleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallScheduleWhereInput>;
};

export type QueryFindFirstFacultyArgs = {
  cursor?: InputMaybe<FacultyWhereUniqueInput>;
  distinct?: InputMaybe<Array<FacultyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FacultyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FacultyWhereInput>;
};

export type QueryFindFirstGroupArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};

export type QueryFindFirstLessonArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};

export type QueryFindFirstLessonNoteArgs = {
  cursor?: InputMaybe<LessonNoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonNoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonNoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonNoteWhereInput>;
};

export type QueryFindFirstPeriodArgs = {
  cursor?: InputMaybe<PeriodWhereUniqueInput>;
  distinct?: InputMaybe<Array<PeriodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PeriodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeriodWhereInput>;
};

export type QueryFindFirstSecretLabelArgs = {
  cursor?: InputMaybe<SecretLabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<SecretLabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SecretLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SecretLabelWhereInput>;
};

export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
};

export type QueryGroupByAppUpdateArgs = {
  by: Array<AppUpdateScalarFieldEnum>;
  having?: InputMaybe<AppUpdateScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AppUpdateOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateWhereInput>;
};

export type QueryGroupByAppUpdateFeatureArgs = {
  by: Array<AppUpdateFeatureScalarFieldEnum>;
  having?: InputMaybe<AppUpdateFeatureScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AppUpdateFeatureOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AppUpdateFeatureWhereInput>;
};

export type QueryGroupByCallScheduleArgs = {
  by: Array<CallScheduleScalarFieldEnum>;
  having?: InputMaybe<CallScheduleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CallScheduleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallScheduleWhereInput>;
};

export type QueryGroupByFacultyArgs = {
  by: Array<FacultyScalarFieldEnum>;
  having?: InputMaybe<FacultyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FacultyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FacultyWhereInput>;
};

export type QueryGroupByGroupArgs = {
  by: Array<GroupScalarFieldEnum>;
  having?: InputMaybe<GroupScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GroupOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};

export type QueryGroupByLessonArgs = {
  by: Array<LessonScalarFieldEnum>;
  having?: InputMaybe<LessonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LessonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};

export type QueryGroupByLessonNoteArgs = {
  by: Array<LessonNoteScalarFieldEnum>;
  having?: InputMaybe<LessonNoteScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LessonNoteOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonNoteWhereInput>;
};

export type QueryGroupByPeriodArgs = {
  by: Array<PeriodScalarFieldEnum>;
  having?: InputMaybe<PeriodScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PeriodOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeriodWhereInput>;
};

export type QueryGroupBySecretLabelArgs = {
  by: Array<SecretLabelScalarFieldEnum>;
  having?: InputMaybe<SecretLabelScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SecretLabelOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SecretLabelWhereInput>;
};

export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};

export type QueryLessonArgs = {
  where: LessonWhereUniqueInput;
};

export type QueryLessonNoteArgs = {
  where: LessonNoteWhereUniqueInput;
};

export type QueryLessonNotesArgs = {
  cursor?: InputMaybe<LessonNoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonNoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonNoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonNoteWhereInput>;
};

export type QueryLessonsArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};

export type QueryPeriodArgs = {
  where: PeriodWhereUniqueInput;
};

export type QueryPeriodsArgs = {
  cursor?: InputMaybe<PeriodWhereUniqueInput>;
  distinct?: InputMaybe<Array<PeriodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PeriodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeriodWhereInput>;
};

export type QuerySecretLabelArgs = {
  where: SecretLabelWhereUniqueInput;
};

export type QuerySecretLabelsArgs = {
  cursor?: InputMaybe<SecretLabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<SecretLabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SecretLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SecretLabelWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type SecretLabel = {
  __typename?: 'SecretLabel';
  id: Scalars['String'];
  label: Scalars['String'];
};

export type SecretLabelCountAggregate = {
  __typename?: 'SecretLabelCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  label: Scalars['Int'];
};

export type SecretLabelCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
};

export type SecretLabelCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

export type SecretLabelCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

export type SecretLabelGroupBy = {
  __typename?: 'SecretLabelGroupBy';
  _count?: Maybe<SecretLabelCountAggregate>;
  _max?: Maybe<SecretLabelMaxAggregate>;
  _min?: Maybe<SecretLabelMinAggregate>;
  id: Scalars['String'];
  label: Scalars['String'];
};

export type SecretLabelMaxAggregate = {
  __typename?: 'SecretLabelMaxAggregate';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SecretLabelMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
};

export type SecretLabelMinAggregate = {
  __typename?: 'SecretLabelMinAggregate';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SecretLabelMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
};

export type SecretLabelOrderByWithAggregationInput = {
  _count?: InputMaybe<SecretLabelCountOrderByAggregateInput>;
  _max?: InputMaybe<SecretLabelMaxOrderByAggregateInput>;
  _min?: InputMaybe<SecretLabelMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
};

export type SecretLabelOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
};

export enum SecretLabelScalarFieldEnum {
  Id = 'id',
  Label = 'label',
}

export type SecretLabelScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SecretLabelScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SecretLabelScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SecretLabelScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  label?: InputMaybe<StringWithAggregatesFilter>;
};

export type SecretLabelUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SecretLabelUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SecretLabelWhereInput = {
  AND?: InputMaybe<Array<SecretLabelWhereInput>>;
  NOT?: InputMaybe<Array<SecretLabelWhereInput>>;
  OR?: InputMaybe<Array<SecretLabelWhereInput>>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
};

export type SecretLabelWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
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

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
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

export enum Subgroup {
  First = 'first',
  None = 'none',
  Second = 'second',
}

export enum WeekDay {
  Friday = 'friday',
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday',
  Thursday = 'thursday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
}

export enum WeeksType {
  All = 'all',
  Custom = 'custom',
  First = 'first',
  Second = 'second',
}

export type FacultiesList2QueryVariables = Exact<{ [key: string]: never; }>;

export type FacultiesList2Query = { __typename?: 'Query', faculties: Array<{ __typename?: 'Faculty', id: string, title: string, createdAt: any }> };

export const FacultiesList2Document = `
    query FacultiesList2 {
  faculties {
    id
    title
    createdAt
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    FacultiesList2: build.query<FacultiesList2Query, FacultiesList2QueryVariables | void>({
      query: (variables) => ({ document: FacultiesList2Document, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
