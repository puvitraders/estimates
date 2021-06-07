import { BsTrash } from "react-icons/bs";
import { DESCRIPTION, QUANTITY, RATE } from "../static/content/constants";
import { EditableTd } from "./atomic/editable";

const Products = ({ items, updateItems }) => {
  const lineItems = [...items];

  const parseRate = (rate, i) =>
    new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$").test(parseFloat(rate))
      ? parseFloat(rate).toFixed(2)
      : items[i][RATE];

  const parseQty = (qty, i) =>
    isNaN(parseInt(qty)) ? items[i][QUANTITY] : parseInt(qty);

  const removeItem = (i) => {
    if (window.confirm(`Remove item ${i}, "${items[i][DESCRIPTION]}"`)) {
      lineItems.splice(i, 1);
      updateItems(lineItems);
    }
  };

  const changeHandler = (f, i, e) => {
    switch (f) {
      case DESCRIPTION:
        lineItems[i][DESCRIPTION] = e.target.innerText;
        break;
      case RATE:
        lineItems[i][RATE] = parseRate(e.target.innerText, i);
        break;
      default:
        lineItems[i][QUANTITY] = parseQty(e.target.innerText, i);
    }

    updateItems(lineItems);
  };

  return (
    <div>
      <table className="pt-products">
        <thead>
          <tr className="bg-secondary text-light text-center">
            <th className="w-10">#</th>
            <th>Item / Description</th>
            <th className="w-20">Rate</th>
            <th className="w-10">Quantity</th>
            <th className="w-20">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td className="text-center border-right">{i + 1}&#160;</td>

              <EditableTd
                className="text-left border-right"
                content={item[DESCRIPTION]}
                changeHandler={changeHandler.bind(null, DESCRIPTION, i)}
              />

              <EditableTd
                className="text-right border-right w-20"
                content={item[RATE]}
                changeHandler={changeHandler.bind(null, RATE, i)}
              />

              <EditableTd
                className="text-center border-right"
                content={item[QUANTITY]}
                changeHandler={changeHandler.bind(null, QUANTITY, i)}
              />

              <td className="text-right">
                &#8377;&#160;{(item.rate * item.quantity).toFixed(2)}
                <button
                  className="btn btn-outline-danger border-0 pt-no-print"
                  title="Delete this item"
                  onClick={removeItem.bind(null, i)}
                >
                  <BsTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
