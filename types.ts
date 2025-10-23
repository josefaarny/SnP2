export interface StepData {
  id: number;
  location: string;
  question: string;
  answers: string[];
  isNumericRange?: boolean;
  hint: string;
}

export type NavigateFunction = (step: string) => void;

export interface PageProps {
    navigate: NavigateFunction;
}
