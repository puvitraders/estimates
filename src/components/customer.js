const Customer = ({ customer, updateCustomer }) => {
  return (
    <div className="row my-3">
      <div className="col-4">
        <h6>To</h6>
        <textarea onChange={(e) => updateCustomer(e.target.value)}>
          {customer}
        </textarea>
      </div>
    </div>
  );
};

export default Customer;
