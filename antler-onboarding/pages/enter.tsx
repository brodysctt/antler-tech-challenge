import type { NextPage } from "next";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useStore } from "@lib/zustand";

const Enter: NextPage = () => {
  const [email, password, setEmail, setPassword] = useStore((store) => [
    store.email,
    store.password,
    store.setEmail,
    store.setPassword,
  ]);

  const isConfirmedEmail = false; // UPDATE LOGIC
  const isValidPassword = password.length > 5;

  const handleClaimAccount = () => {
    // TODO: Implement auth
  };

  return (
    <Stack height="90vh" width="70%" justifyContent="center" ml={10}>
      <Typography variant="h5">
        Congratulations! Your application has been accepted 🚀
      </Typography>
      <Typography my={2}>Please set an email and a password</Typography>
      <Stack width="70%">
        <TextField
          label="Email"
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
