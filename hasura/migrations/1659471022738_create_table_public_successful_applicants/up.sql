CREATE TABLE "public"."successful_applicants" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, "email" text NOT NULL, "program_location" text NOT NULL, "cohort" text NOT NULL, "program_type" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
