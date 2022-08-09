import React, { FC, createElement } from "react";
import { IFormProps } from "./formTypes";
// import { IFormProps } from "@customtypes/formTypes";

const Form: FC<IFormProps> = ({
  defaultValues,
  buttonLabel = "Submit",
  children,
  onSubmit,
  handleSubmit,
  register,
  className,
  ...rest
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className={`d-flex justify-content-center  ${className}`}>
        {Array.isArray(children)
          ? children.map((child) => {
              return child.props.name
                ? createElement(child.type, {
                    ...{
                      ...child.props,
                      register,
                      key: child.props.name,
                    },
                  })
                : child;
            })
          : children}
      </div>
      <button className="btn btn--brand">{buttonLabel}</button>
    </form>
  );
};

export default Form;
