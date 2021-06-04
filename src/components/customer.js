import { HeadLine } from "./common";
import C from "../static/content/app";

const Customer = ({ customer, setCustomer }) => (
  <div className="row my-5 pt-customer">
    <div className="col-4">
      <HeadLine>{C.CUSTOMER.BILL_TO}</HeadLine>
      <div className="pt-customer-details" role="button">
        {customer}
      </div>

      {/* <textarea
        className="border-0 form-control"
        rows={4}
        onChange={(e) => setCustomer(e.target.value)}
        value={customer}
      /> */}
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
