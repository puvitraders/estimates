import { useState } from "react";

const AddItem = ({ addNewItem }) => {
  // const [item, update] = useState({
  //   description: "",
  //   quantity: 0,
  //   price: 0
  // });

  // const add = () => {
  //   addNewItem(item);
  // };

  return (
    <div>
      <button
        className="btn btn-link pt-no-print"
        onClick={() =>
          addNewItem({
            description: "",
            quantity: 0,
            price: 0
          })
        }
      >
        + Add item
      </button>
    </div>
    // <div className="bg-light p-3 pt-no-print">
    //   <div className="row-col-12">
    //     <h6 className="text-center">Add an item</h6>
    //   </div>
    //   <div className="row">
    //     <div className="col-6">
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="Description"
    //         value={item.description}
    //         onChange={(e) => update({ ...item, description: e.target.value })}
    //       />
    //     </div>

    //     <div className="col-2">
    //       <input
    //         type="text"
    //         className="form-control"
    //         value={item.quantity}
    //         placeholder="Quantity"
    //         onChange={(e) =>
    //           update({ ...item, quantity: parseInt(e.target.value) })
    //         }
    //       />
    //     </div>

    //     <div className="col-2">
    //       <input
    //         type="text"
    //         className="form-control"
    //         value={item.price}
    //         placeholder="Price"
    //         onChange={(e) =>
    //           update({ ...item, price: parseInt(e.target.value) })
    //         }
    //       />
    //     </div>

    //     <div className="col-2">
    //       <input
    //         type="button"
    //         className="btn btn-block btn-primary"
    //         value="Add"
    //         onClick={add}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};
export default AddItem;
