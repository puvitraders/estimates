const Customer = ({ customer, updateCustomer }) => {
  return (
    <div className="row my-5 pt-customer">
      <div className="col-4 offset-1">
        <div className="bg-light border py-1 text-center">TO</div>
        <textarea
          className="border-0 form-control"
          rows={4}
          onChange={(e) => updateCustomer(e.target.value)}
        >
          {customer}
        </textarea>
      </div>
      <div className="col-4 offset-2 text-center">
        <div className="bg-light border py-1">Estimate date</div>
        <div>{new Date().getUTCFullYear()}</div>

        <div className="bg-light border py-1 mt-3">Estimate ID</div>
        <div>{new Date().getTime()}</div>
      </div>
    </div>
  );
};

export default Customer;
