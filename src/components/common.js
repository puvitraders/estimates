import { GrSave, GrRevert } from "react-icons/gr";

export const HeadLine = ({ classname, children }) => (
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
