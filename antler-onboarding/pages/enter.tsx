import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useQuery, gql } from "@apollo/client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useStore } from "@lib/zustand";
import type { GetApplicantByEmailQuery } from "@lib/graphql-code-gen/graphql";

const GET_APPLICANT_BY_EMAIL = gql`
  query GetApplicantByEmail($email: String!) {
    successful_applicants(where: { email: { _eq: $email } }) {
      email
    }
  }
`;

const Enter: NextPage = () => {
  const router = useRouter();
  const [email, password, setEmail, setPassword] = useStore((store) => [
    store.email,
    store.password,
    store.setEmail,
    store.setPassword,
  ]);

  const { data, error } = useQuery<GetApplicantByEmailQuery>(
    GET_APPLICANT_BY_EMAIL,
    {
      variables: { email },
    }
  );

  if (error) console.error(error);

  const isConfirmedEmail = !!data?.successful_applicants.length;
  const isValidPassword = password.length > 5;

  const handleClaimAccount = () => {
    // TODO: Implement auth
    router.push("/onboarding");
  };

  return (
    <Stack height="90vh" width="70%" justifyContent="center" ml={10}>
      <Typography variant="h5">
        Congratulations! Your application has been accepted 🚀
      </Typography>
      <Typography mt={2} mb={3} sx={{ whiteSpace: "pre-line" }}>
        {`We're here to help exceptional individuals build incredible companies.
        Claim your account to get started`}
      </Typography>
      <Stack width="50%">
        <TextField
          label="Email"
          helperText="You must use the same email you applied with"
          InputProps={{ endAdornment: isConfirmedEmail ? "✅" : null }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          sx={{ mb: 2 }}
        />
        <TextField
          type="password"
          label="Password"
          helperText="Password must be at least 6 characters"
          value={password}
          InputProps={{ endAdornment: isValidPassword ? "✅" : null }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
      <Button
        disabled={!isConfirmedEmail || !password}
        onClick={handleClaimAccount}
        variant="contained"
        sx={{ mt: 2, width: "40%" }}
      >
        Claim account
      </Button>
    </Stack>
  );
};

export default Enter;
