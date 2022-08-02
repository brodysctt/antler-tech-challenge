import { useStore } from "@lib/zustand";
import { Typography, TextField, Stack } from "@mui/material";

export const CompanyInputs = () => {
  const companyName = useStore((store) => store.companyName);
  const setCompanyName = useStore((store) => store.setCompanyName);
  const setCompanySize = useStore((store) => store.setCompanySize);
  const setCompanyFunding = useStore((store) => store.setCompanyFunding);

  return (
    <Stack alignItems="center">
      <Typography align="center" mt={2} mb={2} sx={{ whiteSpace: "pre-line" }}>
        {`You're applying to Antler with an existing business – that's awesome.
        We'd love to learn more about your company 🏢`}
      </Typography>
      <Stack alignItems="flex-start" width="80%">
        <TextField
          fullWidth
          label="Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Stack flexDirection="row" width="100%">
          <TextField
            fullWidth
            helperText="How many people work for you?"
            label="Headcount"
            onChange={(e) => setCompanySize(Number(e.target.value))}
            onKeyPress={(kp) => {
              if (!/[0-9].*/.test(kp.key)) kp.preventDefault();
            }}
            sx={{ mt: 2, mr: 3 }}
          />
          <TextField
            fullWidth
            helperText="How much have you raised?"
            label="Funding received"
            onChange={(e) => setCompanyFunding(Number(e.target.value))}
            onKeyPress={(kp) => {
              if (!/[0-9].*/.test(kp.key)) kp.preventDefault();
            }}
            sx={{ mt: 2 }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
