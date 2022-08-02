import type { FC, ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

export const OnboardingSteps: FC<{ step: number }> = ({ step }) => {
  const steps = [
    {
      body: <Typography>General profile info</Typography>,
    },
    {
      body: <Typography>Select Industries</Typography>,
    },
    {
      body: <Typography>Company details</Typography>,
    },
  ];

  const { body } = steps[step];
  return <Panel>{body}</Panel>;
};

const Panel: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack justifyContent="center" height="50vh" width="50%">
      {children}
    </Stack>
  );
};
