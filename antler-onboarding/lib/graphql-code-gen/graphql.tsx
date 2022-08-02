import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  _uuid: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** Boolean expression to compare columns of type "_uuid". All fields are combined with logical 'AND'. */
export type _Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_uuid']>;
  _gt?: InputMaybe<Scalars['_uuid']>;
  _gte?: InputMaybe<Scalars['_uuid']>;
  _in?: InputMaybe<Array<Scalars['_uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_uuid']>;
  _lte?: InputMaybe<Scalars['_uuid']>;
  _neq?: InputMaybe<Scalars['_uuid']>;
  _nin?: InputMaybe<Array<Scalars['_uuid']>>;
};

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies';
  /** An array relationship */
  company_can_have_multiple_founders: Array<Users>;
  /** An aggregate relationship */
  company_can_have_multiple_founders_aggregate: Users_Aggregate;
  created_at: Scalars['timestamptz'];
  founders: Scalars['_uuid'];
  funding_raised: Scalars['numeric'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  size: Scalars['numeric'];
};


/** columns and relationships of "companies" */
export type CompaniesCompany_Can_Have_Multiple_FoundersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesCompany_Can_Have_Multiple_Founders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  __typename?: 'companies_aggregate';
  aggregate?: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'companies_aggregate_fields';
  avg?: Maybe<Companies_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Companies_Max_Fields>;
  min?: Maybe<Companies_Min_Fields>;
  stddev?: Maybe<Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Companies_Sum_Fields>;
  var_pop?: Maybe<Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Companies_Var_Samp_Fields>;
  variance?: Maybe<Companies_Variance_Fields>;
};


/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'companies_avg_fields';
  funding_raised?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Companies_Bool_Exp>>;
  _not?: InputMaybe<Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Companies_Bool_Exp>>;
  company_can_have_multiple_founders?: InputMaybe<Users_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  founders?: InputMaybe<_Uuid_Comparison_Exp>;
  funding_raised?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint */
  CompaniesPkey = 'companies_pkey'
}

/** input type for incrementing numeric columns in table "companies" */
export type Companies_Inc_Input = {
  funding_raised?: InputMaybe<Scalars['numeric']>;
  size?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  company_can_have_multiple_founders?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  founders?: InputMaybe<Scalars['_uuid']>;
  funding_raised?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'companies_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  funding_raised?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'companies_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  funding_raised?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  __typename?: 'companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};

/** on_conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns?: Array<Companies_Update_Column>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "companies". */
export type Companies_Order_By = {
  company_can_have_multiple_founders_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  founders?: InputMaybe<Order_By>;
  funding_raised?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** primary key columns input for table: companies */
export type Companies_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Founders = 'founders',
  /** column name */
  FundingRaised = 'funding_raised',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size'
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  founders?: InputMaybe<Scalars['_uuid']>;
  funding_raised?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'companies_stddev_fields';
  funding_raised?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'companies_stddev_pop_fields';
  funding_raised?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'companies_stddev_samp_fields';
  funding_raised?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'companies_sum_fields';
  funding_raised?: Maybe<Scalars['numeric']>;
  size?: Maybe<Scalars['numeric']>;
};

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Founders = 'founders',
  /** column name */
  FundingRaised = 'funding_raised',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size'
}

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'companies_var_pop_fields';
  funding_raised?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'companies_var_samp_fields';
  funding_raised?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'companies_variance_fields';
  funding_raised?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "successful_applicants" */
  delete_successful_applicants?: Maybe<Successful_Applicants_Mutation_Response>;
  /** delete single row from the table: "successful_applicants" */
  delete_successful_applicants_by_pk?: Maybe<Successful_Applicants>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>;
  /** insert data into the table: "successful_applicants" */
  insert_successful_applicants?: Maybe<Successful_Applicants_Mutation_Response>;
  /** insert a single row into the table: "successful_applicants" */
  insert_successful_applicants_one?: Maybe<Successful_Applicants>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "companies" */
  update_companies?: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>;
  /** update data of the table: "successful_applicants" */
  update_successful_applicants?: Maybe<Successful_Applicants_Mutation_Response>;
  /** update single row of the table: "successful_applicants" */
  update_successful_applicants_by_pk?: Maybe<Successful_Applicants>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Successful_ApplicantsArgs = {
  where: Successful_Applicants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Successful_Applicants_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Successful_ApplicantsArgs = {
  objects: Array<Successful_Applicants_Insert_Input>;
  on_conflict?: InputMaybe<Successful_Applicants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Successful_Applicants_OneArgs = {
  object: Successful_Applicants_Insert_Input;
  on_conflict?: InputMaybe<Successful_Applicants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: InputMaybe<Companies_Inc_Input>;
  _set?: InputMaybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: InputMaybe<Companies_Inc_Input>;
  _set?: InputMaybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Successful_ApplicantsArgs = {
  _set?: InputMaybe<Successful_Applicants_Set_Input>;
  where: Successful_Applicants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Successful_Applicants_By_PkArgs = {
  _set?: InputMaybe<Successful_Applicants_Set_Input>;
  pk_columns: Successful_Applicants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "successful_applicants" */
  successful_applicants: Array<Successful_Applicants>;
  /** fetch aggregated fields from the table: "successful_applicants" */
  successful_applicants_aggregate: Successful_Applicants_Aggregate;
  /** fetch data from the table: "successful_applicants" using primary key columns */
  successful_applicants_by_pk?: Maybe<Successful_Applicants>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSuccessful_ApplicantsArgs = {
  distinct_on?: InputMaybe<Array<Successful_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Successful_Applicants_Order_By>>;
  where?: InputMaybe<Successful_Applicants_Bool_Exp>;
};


export type Query_RootSuccessful_Applicants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Successful_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Successful_Applicants_Order_By>>;
  where?: InputMaybe<Successful_Applicants_Bool_Exp>;
};


export type Query_RootSuccessful_Applicants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "successful_applicants" */
  successful_applicants: Array<Successful_Applicants>;
  /** fetch aggregated fields from the table: "successful_applicants" */
  successful_applicants_aggregate: Successful_Applicants_Aggregate;
  /** fetch data from the table: "successful_applicants" using primary key columns */
  successful_applicants_by_pk?: Maybe<Successful_Applicants>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSuccessful_ApplicantsArgs = {
  distinct_on?: InputMaybe<Array<Successful_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Successful_Applicants_Order_By>>;
  where?: InputMaybe<Successful_Applicants_Bool_Exp>;
};


export type Subscription_RootSuccessful_Applicants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Successful_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Successful_Applicants_Order_By>>;
  where?: InputMaybe<Successful_Applicants_Bool_Exp>;
};


export type Subscription_RootSuccessful_Applicants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "successful_applicants" */
export type Successful_Applicants = {
  __typename?: 'successful_applicants';
  cohort: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  program_location: Scalars['String'];
  program_type: Scalars['String'];
};

/** aggregated selection of "successful_applicants" */
export type Successful_Applicants_Aggregate = {
  __typename?: 'successful_applicants_aggregate';
  aggregate?: Maybe<Successful_Applicants_Aggregate_Fields>;
  nodes: Array<Successful_Applicants>;
};

/** aggregate fields of "successful_applicants" */
export type Successful_Applicants_Aggregate_Fields = {
  __typename?: 'successful_applicants_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Successful_Applicants_Max_Fields>;
  min?: Maybe<Successful_Applicants_Min_Fields>;
};


/** aggregate fields of "successful_applicants" */
export type Successful_Applicants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Successful_Applicants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "successful_applicants". All fields are combined with a logical 'AND'. */
export type Successful_Applicants_Bool_Exp = {
  _and?: InputMaybe<Array<Successful_Applicants_Bool_Exp>>;
  _not?: InputMaybe<Successful_Applicants_Bool_Exp>;
  _or?: InputMaybe<Array<Successful_Applicants_Bool_Exp>>;
  cohort?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  program_location?: InputMaybe<String_Comparison_Exp>;
  program_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "successful_applicants" */
export enum Successful_Applicants_Constraint {
  /** unique or primary key constraint */
  SuccessfulApplicantsPkey = 'successful_applicants_pkey'
}

/** input type for inserting data into table "successful_applicants" */
export type Successful_Applicants_Insert_Input = {
  cohort?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  program_location?: InputMaybe<Scalars['String']>;
  program_type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Successful_Applicants_Max_Fields = {
  __typename?: 'successful_applicants_max_fields';
  cohort?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  program_location?: Maybe<Scalars['String']>;
  program_type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Successful_Applicants_Min_Fields = {
  __typename?: 'successful_applicants_min_fields';
  cohort?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  program_location?: Maybe<Scalars['String']>;
  program_type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "successful_applicants" */
export type Successful_Applicants_Mutation_Response = {
  __typename?: 'successful_applicants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Successful_Applicants>;
};

/** input type for inserting object relation for remote table "successful_applicants" */
export type Successful_Applicants_Obj_Rel_Insert_Input = {
  data: Successful_Applicants_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Successful_Applicants_On_Conflict>;
};

/** on_conflict condition type for table "successful_applicants" */
export type Successful_Applicants_On_Conflict = {
  constraint: Successful_Applicants_Constraint;
  update_columns?: Array<Successful_Applicants_Update_Column>;
  where?: InputMaybe<Successful_Applicants_Bool_Exp>;
};

/** Ordering options when selecting data from "successful_applicants". */
export type Successful_Applicants_Order_By = {
  cohort?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  program_location?: InputMaybe<Order_By>;
  program_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: successful_applicants */
export type Successful_Applicants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "successful_applicants" */
export enum Successful_Applicants_Select_Column {
  /** column name */
  Cohort = 'cohort',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProgramLocation = 'program_location',
  /** column name */
  ProgramType = 'program_type'
}

/** input type for updating data in table "successful_applicants" */
export type Successful_Applicants_Set_Input = {
  cohort?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  program_location?: InputMaybe<Scalars['String']>;
  program_type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "successful_applicants" */
export enum Successful_Applicants_Update_Column {
  /** column name */
  Cohort = 'cohort',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProgramLocation = 'program_location',
  /** column name */
  ProgramType = 'program_type'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  application_id: Scalars['uuid'];
  /** An object relationship */
  company?: Maybe<Companies>;
  company_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  expertise: Scalars['String'];
  id: Scalars['uuid'];
  industries: Scalars['_text'];
  linkedin_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  successful_applicant: Successful_Applicants;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  application_id?: InputMaybe<Uuid_Comparison_Exp>;
  company?: InputMaybe<Companies_Bool_Exp>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expertise?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  industries?: InputMaybe<_Text_Comparison_Exp>;
  linkedin_url?: InputMaybe<String_Comparison_Exp>;
  successful_applicant?: InputMaybe<Successful_Applicants_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  application_id?: InputMaybe<Scalars['uuid']>;
  company?: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expertise?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  industries?: InputMaybe<Scalars['_text']>;
  linkedin_url?: InputMaybe<Scalars['String']>;
  successful_applicant?: InputMaybe<Successful_Applicants_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expertise?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  linkedin_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  application_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expertise?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linkedin_url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expertise?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  linkedin_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  application_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expertise?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linkedin_url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  application_id?: InputMaybe<Order_By>;
  company?: InputMaybe<Companies_Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expertise?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industries?: InputMaybe<Order_By>;
  linkedin_url?: InputMaybe<Order_By>;
  successful_applicant?: InputMaybe<Successful_Applicants_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expertise = 'expertise',
  /** column name */
  Id = 'id',
  /** column name */
  Industries = 'industries',
  /** column name */
  LinkedinUrl = 'linkedin_url'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  application_id?: InputMaybe<Scalars['uuid']>;
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expertise?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  industries?: InputMaybe<Scalars['_text']>;
  linkedin_url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expertise = 'expertise',
  /** column name */
  Id = 'id',
  /** column name */
  Industries = 'industries',
  /** column name */
  LinkedinUrl = 'linkedin_url'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetApplicantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApplicantsQuery = { __typename?: 'query_root', successful_applicants: Array<{ __typename?: 'successful_applicants', email: string }> };


export const GetApplicantsDocument = gql`
    query GetApplicants {
  successful_applicants {
    email
  }
}
    `;

/**
 * __useGetApplicantsQuery__
 *
 * To run a query within a React component, call `useGetApplicantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetApplicantsQuery(baseOptions?: Apollo.QueryHookOptions<GetApplicantsQuery, GetApplicantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicantsQuery, GetApplicantsQueryVariables>(GetApplicantsDocument, options);
      }
export function useGetApplicantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicantsQuery, GetApplicantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicantsQuery, GetApplicantsQueryVariables>(GetApplicantsDocument, options);
        }
export type GetApplicantsQueryHookResult = ReturnType<typeof useGetApplicantsQuery>;
export type GetApplicantsLazyQueryHookResult = ReturnType<typeof useGetApplicantsLazyQuery>;
export type GetApplicantsQueryResult = Apollo.QueryResult<GetApplicantsQuery, GetApplicantsQueryVariables>;