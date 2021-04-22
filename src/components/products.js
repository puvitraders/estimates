const Products = ({ items, tax }) => (
  <div>
    <table className="pt-products">
      <thead>
        <tr className="bg-secondary text-light text-center">
          <th>#</th>
          <th>Item / Description</th>
          <th>Rate</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          const taxedPrice = (item.price / 100) * tax;

          return (
            <tr key={i}>
              <td className="text-center border-right">{i + 1}&#160;</td>
              <td className="text-left border-right">
                <input
                  type="text"
                  value={item.description}
                  onChange={() => {}}
                />
              </td>
              <td className="text-right border-right">
                &#8377;&#160;{item.price.toFixed(2)}
              </td>
              <td className="text-center border-right">{item.quantity}</td>
              <td className="text-right">
                &#8377;&#160;{(item.price * item.quantity).toFixed(2)}
                <button
                  className="btn btn-sm btn-light pt-no-print"
                  title="Delete this item"
                  onClick={() => {}}
                >
                  &#10060;
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={5} className="border-top">
            &#160;
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Products;
