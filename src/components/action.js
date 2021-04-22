const Action = ({ tax, updateTax }) => {
  const update = (e) => {
    const tax = isNaN(parseInt(e.target.value))
      ? 0
      : parseFloat(e.target.value);
    updateTax(tax);
  };

  return (
    <div className="fixed-bottom py-3 px-5 row bg-light pt-no-print pt-action">
      <div className="col-3 offset-1">
        <span>Tax rate:</span>
        <input
          type="text"
          className="ml-1 border-0 bg-transparent text-right"
          value={tax}
          onChange={update}
        />
        <span>%</span>
      </div>

      <div className="col-1 offset-1">
        <button
          className="btn btn-danger"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
      </div>

      <div className="col-3 offset-2">
        <button
          className="btn btn-outline-primary btn-block"
          onClick={() => window.print()}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Action;
