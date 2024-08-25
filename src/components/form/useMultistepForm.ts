import { ReactElement, useState } from 'react';

//custom hook to create multistep forms made by web dev simplified
export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  //moves page forward once
  function next1() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  //moves page forward twice
  function next2() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 2;
    });
  }

  //moves page backwards once
  function back1() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  //moves page backwards twice
  function back2() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 2;
    });
  }

  //goes to a specific page
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next1,
    next2,
    back1,
    back2,
  };
}
