import * as React from 'react';
import "./Stops.css";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import data from '../../data/data.json';

data.shift() && data.pop();

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    //   const handleReset = () => {
    //     setActiveStep(0);
    //   };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {data.map((step, index) => (
                    <Step key={step.id}>
                        <StepLabel
                            optional={
                                index === data.length - 1 ? (
                                    <Typography variant="caption">The Last One</Typography>
                                ) : null
                            }
                        >
                            {step.id} {step.arr_time_string}
                            <br />
                            {step.information.street} {`${step.time_window_earliest} - ${step.time_window_latest}`}
                        </StepLabel>
                        <StepContent>
                            {/* <Typography>{step.arr_time_string}</Typography> */}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === data.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
        </Box>
    );
}
