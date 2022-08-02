alter table "public"."users"
  add constraint "users_application_id_fkey"
  foreign key ("application_id")
  references "public"."successful_applicants"
  ("id") on update restrict on delete restrict;
