const AddItem = () => (
  <div className="bg-light fixed-bottom p-3 pt-no-print">
    <div className="row-col-12">
      <h6 className="text-center">Add an item</h6>
    </div>
    <div className="row">
      <div className="col-6">
        <input type="text" className="form-control" placeholder="Description" />
      </div>
      <div className="col-2">
        <input type="text" className="form-control" placeholder="Quantity" />
      </div>
      <div className="col-2">
        <input type="text" className="form-control" placeholder="Price" />
      </div>
      <div className="col-2">
        <input
          type="button"
          className="btn btn-block btn-primary"
          value="Add"
        />
      </div>
    </div>
  </div>
);

export default AddItem;
