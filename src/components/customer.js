import { HeadLine } from "./common";
import C from "../static/content/app";
import { useRef, useState } from "react";
import Modal from "./modal";
import FormButtons from "./molecules/form_buttons";

const Customer = () => (
  <div className="row my-5 pt-customer">
    <div className="col-4">
      <HeadLine>{C.CUSTOMER.BILL_TO}</HeadLine>

      <div
        className="pt-customer-details"
        contentEditable
        role="button"
        data-tip="Click to edit"
      >
        This is it
      </div>
    </div>

    <div className="col-3 offset-5 text-center">
      <HeadLine>{C.CUSTOMER.ESTIMATE_DATE}</HeadLine>

      <div>{new Date().toDateString()}</div>

      <HeadLine classname="mt-4">{C.CUSTOMER.ESTIMATE_ID}</HeadLine>

      <div>{new Date().getTime()}</div>
    </div>
  </div>
);

export default Customer;
