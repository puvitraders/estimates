const Aside = ({ tax, updateTax }) => (
  <div className="bg-light pt-aside p-1 border">
    <section>
      <label>Tax</label>
      <input
        type="text"
        value={tax}
        onChange={(e) => updateTax(e.target.value)}
      />
      <span>%</span>
    </section>
    <section>
      <button className="btn btn-sm btn-block btn-secondary">Print</button>
    </section>
  </div>
);

export default Aside;
