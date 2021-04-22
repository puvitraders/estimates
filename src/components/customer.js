import { HeadLine } from "./common";

const Customer = ({ customer, date, updateCustomer }) => (
  <div className="row my-5 pt-customer">
    <div className="col-4">
      <HeadLine>Bill to</HeadLine>
      <textarea
        className="border-0 form-control"
        rows={4}
        onChange={(e) => updateCustomer(e.target.value)}
        value={customer}
      />
    </div>

    <div className="col-3 offset-5 text-center">
      <HeadLine>Estimate date</HeadLine>
      <div>{date.toDateString()}</div>

      <HeadLine classname="mt-4">Estimate ID</HeadLine>
      <div>{new Date().getTime()}</div>
    </div>
  </div>
);

export default Customer;
