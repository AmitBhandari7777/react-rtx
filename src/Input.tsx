import React, { FC } from "react";
import { InputProps } from "./formTypes";
import { Collapse } from "reactstrap";


const Input: FC<InputProps> = ({ register, name, error = "", label, wrapperClass, ...rest }) => {
  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={name}>{label}</label>}
      <input aria-invalid={error ? "true" : "false"} {...register(name)} {...rest} />
      <Collapse isOpen={error !== ""}>
        {error && (
          <small style={{ color: "red" }} role="alert">
            {error}
          </small>
        )}
      </Collapse>
    </div>
  );
};

export default Input;
