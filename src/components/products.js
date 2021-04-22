const Products = ({ items, tax }) => (
  <div>
    <table className="pt-products">
      <thead>
        <tr className="bg-secondary text-light">
          <th>#</th>
          <th>Item / Description</th>
          <th className="text-right">Rate</th>
          <th className="text-center">Quantity</th>
          <th className="text-right">Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          const taxedPrice = (item.price / 100) * tax;

          return (
            <tr key={i}>
              <td className="text-center border-right">
                {i + 1}&#160;
                <button className="btn btn-sm btn-light pt-no-print">
                  &#10060;
                </button>
              </td>
              <td className="text-left border-right">
                &#8377;&#160;{item.description}
              </td>
              <td className="text-right border-right">
                {item.price.toFixed(2)}
              </td>
              <td className="text-center border-right">{item.quantity}</td>
              <td className="text-right">
                &#8377;&#160;{(item.price * item.quantity).toFixed(2)}
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
