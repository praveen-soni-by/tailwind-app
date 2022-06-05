import { useState } from "react";

const steps = ["STEP 1", "STEP 2", "STEP 3"];

const Step1 = () => <div>Step 1</div>;
const Step2 = () => <div>Step 2</div>;
const Step3 = () => <div>Step 3</div>;

function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;

    default:
      return (
        <div className="flex flex-col max-h-full  justify-center items-center">
          <div></div>{" "}
          <div>
            <p className="text-lg text-center space-y-5 font-medium h-full">
              REACH TO LAST STEP
            </p>
          </div>
        </div>
      );
  }
}

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  const _handleBack =()=> {
    setActiveStep(activeStep - 1);
  }

  const _handleSubmit = (e: any)=> {
    e.preventDefault();
    setActiveStep(activeStep + 1);
    if (isLastStep) {
      console.log(e);
    }
  }

  return (
    <div className="flex bg-white flex-col ">
      <div className="flex   mb-4  z-20 w-full ">
        <div className="flex my-4 w-5/6 md:w-1/2 mx-auto ">
          <StepperLink steps={steps} activeStep={activeStep} />
        </div>
      </div>
      <div
        className="flex flex-col
                    items-center 
                    relative
                     h-full  bg-dark vh-100   rounded px-8 pt-6 pb-8 mb-4"
      >
        <form
          id="formId"
          onSubmit={_handleSubmit}
          className="flex justify-center w-11/12 flex-col items-center"
        >
          {_renderStepContent(activeStep)}
          <>
            <div className="flex mt-6  justify-center items-center ">
              {activeStep !== 0 && <button onClick={_handleBack}>Back</button>}
              <div>
                <button type="submit" className="ml-2 ">
                  {isLastStep ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </>
        </form>
      </div>
    </div>
  );
}

// To Display available Steps
interface StepLinkProps {
  steps: any;
  activeStep: number;
}

const StepperLink = (props: StepLinkProps) => {
  return props.steps.map((label: any, index: number) => {
    return (
      <div
        key={index}
        className={
          index !== steps.length - 1
            ? "w-full flex   row justify-center items-center "
            : "flex   justify-center items-center "
        }
      >
        <div className="relative flex flex-col justify-evenly text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-8 w-8 flex items-center justify-center py-3  ${
              props.activeStep > index
                ? "bg-green-600 text-white font-bold border border-green-600 "
                : " bg-gray-200"
            }`}
          >
            {props.activeStep > index ? (
              <span className="text-red font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-8  -ml-12  justify-center w-32 text-xs font-medium uppercase ${
              props.activeStep > index ? "text-green-500" : "text-pink"
            }`}
          >
            {label}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2   transition duration-500 ease-in-out  ${
            props.activeStep > index
              ? "border-green-600"
              : "text-black border-gray-300 "
          }  `}
        ></div>
      </div>
    );
  });
};
