import type { ChangeEvent } from "react";
import { useStore } from "@lib/zustand";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

export const IndustriesSelect = () => {
  const addIndustry = useStore((store) => store.addIndustry);
  const removeIndustry = useStore((store) => store.removeIndustry);

  const handleChange =
    (industry: string) => (e: ChangeEvent<HTMLInputElement>) =>
      e.target.checked ? addIndustry(industry) : removeIndustry(industry);

  return (
    <Stack maxHeight="70%" alignItems="center">
      <Typography mb={2}>What industries are you interested in?</Typography>
      <Box borderRadius={2} overflow="scroll" pl={2}>
        <FormGroup>
          {INDUSTRIES.map((industry) => (
            <FormControlLabel
              key={industry}
              control={<Checkbox onChange={handleChange(industry)} />}
              label={industry}
            />
          ))}
        </FormGroup>
      </Box>
    </Stack>
  );
};

const INDUSTRIES = [
  "Adtech",
  "Aerospace",
  "Agriculture",
  "Analytics",
  "ArtTech",
  "B2B SaaS",
  "Biotech/Longevity",
  "ClimateTech",
  "Community",
  "Construction",
  "Consumer Tech",
  "Creator Economy",
  "Crypto, DeFi & Blockchain",
  "Data/Infrastructure",
  "Developer Tools",
  "Drug Discovery",
  "Education",
  "Energy/CleanTech",
  "Entertainment",
  "Financial Services/FinTech",
];
