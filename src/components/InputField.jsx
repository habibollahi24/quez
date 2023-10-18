function InputField({ formData, changeHandler, blurHandler, show, errors }) {
  return (
    <div>
      <input
        className="input"
        name="name"
        placeholder="Name"
        type="text"
        value={formData.name}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {show.name && errors.nameValid && (
        <p className="error">{errors.nameValid}</p>
      )}
    </div>
  );
}

export default InputField;
