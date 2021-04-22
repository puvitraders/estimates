const AddItem = ({ addNewItem }) => (
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
);

export default AddItem;
