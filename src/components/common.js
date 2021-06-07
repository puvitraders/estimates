import { useState } from "react";
import { GrSave, GrRevert } from "react-icons/gr";

export const HeadLine = ({ classname = "", children }) => (
  <div className={`bg-secondary text-light text-center py-1 ${classname}`}>
    {children}
  </div>
);

export const EditableDescription = (item, i, ed, edit, save, defaultEdit) => {
  if (ed.i === i && ed.f === "d") {
    return (
      <div className="form-inline">
        <input
          type="text"
          className="form-control form-control-sm form-control-inline"
          value={ed.v}
          onChange={(e) => edit({ i, f: "d", v: e.target.value })}
        />
        <button
          className="btn btn-sm btn-outline-primary border-0"
          onClick={save}
        >
          <GrSave />
        </button>
        <button
          className="btn btn-sm btn-outline-danger border-0"
          onClick={(e) => {
            e.stopPropagation();
            edit({ ...defaultEdit });
          }}
        >
          <GrRevert />
        </button>
      </div>
    );
  } else return <span>{item.description}</span>;
};

export const EditableRate = (item, i, ed, edit, save, defaultEdit) => {
  if (ed.i === i && ed.f === "r") {
    return (
      <div className="form-inline">
        <input
          type="text"
          className="form-control form-control-sm form-control-inline"
          value={ed.v}
          onChange={(e) => edit({ i, f: "r", v: e.target.value })}
        />
        <button
          className="btn btn-sm btn-outline-primary border-0"
          onClick={save}
        >
          <GrSave />
        </button>
        <button
          className="btn btn-sm btn-outline-danger border-0"
          onClick={(e) => {
            e.stopPropagation();
            edit({ ...defaultEdit });
          }}
        >
          <GrRevert />
        </button>
      </div>
    );
  } else return <span>{item.description}</span>;
};

export const EditableContent = ({
  value = "",
  save = () => {},
  revert = () => {}
}) => {
  const [editable, edit] = useState(false);
  const [v, update] = useState(value);

  console.log(editable);

  return (
    <div className="pt-editable">
      {(editable && (
        <>
          <div className="inputs">
            <input
              type="text"
              value={v}
              onChange={(e) => update(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button
              className="btn btn-sm btn-outline-primary border-0"
              onClick={() => save(v)}
            >
              <GrSave />
            </button>
            <button
              className="btn btn-sm btn-outline-danger border-0"
              onClick={() => edit(false)}
            >
              <GrRevert />
            </button>
          </div>
        </>
      )) || (
        <span className="wrap" onClick={() => edit(true)}>
          {value}
        </span>
      )}
    </div>
  );
};
