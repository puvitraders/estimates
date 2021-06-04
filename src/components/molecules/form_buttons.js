const FormButtons = ({
  saveLabel = "Save",
  cancelLabel = "Cancel",
  onSave = () => {},
  onCancel = () => {}
}) => (
  <div className="my-3 text-center">
    <button className="btn btn-primary mx-2" onClick={onSave}>
      {saveLabel}
    </button>
    <button className="btn btn-danger mx-2" onClick={onCancel}>
      {cancelLabel}
    </button>
  </div>
);

export default FormButtons;
