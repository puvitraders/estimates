const Products = ({ items, tax }) => (
  <div>
    <div className="pt-p-header row my-3 text-center">
      <div className="col-1">#</div>
      <div className="col-5">Item / Description</div>
      <div className="col-1">Quantity</div>
      <div className="col-2">Price</div>
      {/* <div className="col-1">Tax</div> */}
      <div className="col-2">Total</div>
    </div>

    <div>
      {items.map((item, i) => {
        const taxedPrice = (item.price / 100) * tax;

        return (
          <div key={i} className="row text-center">
            <div className="col-1">{i}</div>
            <div className="col-5 text-left border-left">
              {item.description}
            </div>
            <div className="col-1 border-left">{item.quantity}</div>
            <div className="col-2 border-left">{item.price}</div>
            {/* <div className="col-1 border-left">{taxedPrice.toFixed(2)}</div> */}
            <div className="col-2 border-left">
              {(item.price * item.quantity + taxedPrice).toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Products;
