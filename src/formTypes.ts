import { ReactNode, InputHTMLAttributes } from "react";

export type classNameType = string;
export type hrefType = string;
export type buttonClickType = () => void;
export type childrenType = ReactNode;
export type optionsType = Array<string>;

// layout types
export type displayType = "flex";
export type flexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type flexType = `${displayType}-${flexDirection}`;

export type justifyType =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "initial"
  | "inherit";

export type alignType = "stretch" | "start" | "center" | "end" | "baseline" | "initial" | "inherit";

// For layout components
export interface RowPropsType {
  children: childrenType;
  direction?: flexDirection;
  justify: justifyType;
  wrap?: boolean;
}

// for hooks form
export interface IFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel?: string;
  onSubmit?: any;
  handleSubmit?: any;
  register?: any;
  className?: classNameType;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
}

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: optionsType;
  register?: any;
  className?: string;
}

// For select component
export type SelectedOptionTypes = {
  value: string;
  label: string;
};

export interface SelectPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  isMulti: boolean;
  selectOption: SelectedOptionTypes[];
  handleChange: any;
  values: SelectedOptionTypes[];
}

// For Button component
type ButtonType = "brand";
export type ButtonClass = `btn--${ButtonType}`;

// For label
export interface LabelPropsType {
  children: childrenType;
}

// Form Header
export interface IHeaderProps {
  title: string;
}
