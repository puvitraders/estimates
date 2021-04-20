const Aside = ({ tax, updateTax }) => {
  const update = (e) => {
    const tax = isNaN(parseInt(e.target.value))
      ? 0
      : parseFloat(e.target.value);
    console.log(tax);
    updateTax(tax);
  };

  return (
    <div className="bg-light pt-aside p-1 border">
      <section>
        <label>Tax</label>
        <input type="text" value={tax} onChange={update} />
        <span>%</span>
      </section>
      <section>
        <button className="btn btn-sm btn-block btn-secondary">Print</button>
      </section>
    </div>
  );
};

export default Aside;
