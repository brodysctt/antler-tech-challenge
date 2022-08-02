import type { FC, ReactNode } from "react";
import { useStore } from "@lib/zustand";
import { Stack, TextField, Typography } from "@mui/material";
import { IndustriesSelect } from "components";

export const OnboardingSteps: FC<{ step: number }> = ({ step }) => {
  const expertise = useStore((store) => store.expertise);
  const setExpertise = useStore((store) => store.setExpertise);
  const linkedIn = useStore((store) => store.linkedIn);
  const setLinkedIn = useStore((store) => store.setLinkedIn);

  const steps = [
    {
      body: (
        <Stack alignItems="start">
          <Typography align="center" mt={2} mb={2}>
            What are your areas of expertise?
          </Typography>
          <TextField
            fullWidth
            label="Expertise"
            placeholder="i.e. coding, design, fundraising, product"
            onChange={(e) => setExpertise(e.target.value)}
            value={expertise}
          />
          <Typography align="center" mt={2} mb={2}>
            If you have LinkedIn, please share your profile
          </Typography>
          <TextField
            fullWidth
            label="LinkedIn"
            placeholder="https://www.linkedin.com/in/you/"
            onChange={(e) => setLinkedIn(e.target.value)}
            value={linkedIn}
          />
        </Stack>
      ),
    },
    {
      body: <IndustriesSelect />,
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
