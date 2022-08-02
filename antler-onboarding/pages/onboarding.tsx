import type { NextPage } from "next";
import { useStore } from "@lib/zustand";
import { Button, Stack, Step, Stepper, StepLabel } from "@mui/material";
import { OnboardingSteps } from "components";

const Onboarding: NextPage = () => {
  const onboardingStep = useStore((store) => store.onboardingStep);
  const incrementStep = useStore((store) => store.incrementStep);
  const decrementStep = useStore((store) => store.decrementStep);

  // TODO: Update the conditions for advancing to the next step
  const steps: Array<[string, boolean | null]> = [
    ["Experience", true],
    ["Industries", true],
    ["Company", true],
  ];
  const [, isComplete] = steps[onboardingStep];

  const isFirstStep = onboardingStep === 0;
  const isLastStep = onboardingStep === steps.length - 1;

  const StepsToComplete = () => (
    <Stepper activeStep={onboardingStep} sx={{ width: "68%" }}>
      {steps.map(([label]) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );

  return (
    <Stack justifyContent="center" alignItems="center" height="90vh">
      <StepsToComplete />
      <OnboardingSteps step={onboardingStep} />
      <Stack direction="row" justifyContent="space-between" pt={2} width="60%">
        <Button disabled={isFirstStep} onClick={decrementStep} size="large">
          {`Back`}
        </Button>
        {!isLastStep && (
          <Button
            variant="contained"
            disabled={!isComplete}
            onClick={incrementStep}
            size="large"
          >
            {`Next`}
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Onboarding;
