export const EditableTd = ({
  content = "",
  className = "",
  changeHandler = () => {}
}) => (
  <td
    className={className}
    // onInput={changeHandler}
    onBlur={changeHandler}
    // dangerouslySetInnerHTML={{ __html: content }}
    contentEditable
  >
    {content}
  </td>
);

export const EditableSpan = ({
  content = "",
  className = "",
  changeHandler = () => {}
}) => (
  <span
    className={className}
    // onInput={changeHandler}
    onBlur={changeHandler}
    // dangerouslySetInnerHTML={{ __html: content }}
    contentEditable
  >
    {content}
  </span>
);
