import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { EditableDescription } from "./common";

const defaultEdit = { i: null, f: null, v: null };

const Products = ({ items, updateItems }) => {
  const lines = [...items];

  const [ed, edit] = useState({ ...defaultEdit });

  const revert = () => {
    console.log(defaultEdit, "calling edit now", { i: 234, f: 234, v: 234 });
    edit(null);
  };

  const save = () => {
    const field = ed.f === "d" ? "description" : "price";
    lines[ed.i][field] = ed.v;
    updateItems(lines);
  };

  const removeItem = (i) => {
    if (window.confirm(`Remove item "${items[i].description}"`)) {
      lines.splice(i, 1);
      updateItems(lines);
    }
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
              <td
                className="text-left border-right"
                onClick={() => edit({ i, f: "d", v: item.description })}
              >
                {EditableDescription(item, i, ed, edit, save, defaultEdit)}
              </td>
              <td className="text-right border-right">
                &#8377;&#160;{item.price.toFixed(2)}
              </td>
              <td className="text-center border-right">{item.price}</td>
              <td className="text-right">
                &#8377;&#160;{(item.price * item.quantity).toFixed(2)}
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

          <tr>
            <td colSpan={5} className="border-top">
              &#160;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
