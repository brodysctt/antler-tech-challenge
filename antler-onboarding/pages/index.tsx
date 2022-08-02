import type { NextPage } from "next";
import { useQuery, gql } from "@apollo/client";
import { Typography } from "@mui/material";
import { GetApplicantsQuery } from "@lib/graphql-code-gen/graphql";

const GET_APPLICANTS = gql`
  query GetApplicants {
    successful_applicants {
      email
    }
  }
`;

const Home: NextPage = () => {
  const { data, error } = useQuery<GetApplicantsQuery>(GET_APPLICANTS);
  if (error) console.error(error);
  if (!data) return null;
  const { successful_applicants: applicants } = data;
  return (
    <>
      <Typography variant="h5">here be the applicants</Typography>
      {applicants.map(({ email }) => (
        <Typography>{email}</Typography>
      ))}
    </>
  );
};

export default Home;
