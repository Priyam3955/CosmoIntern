import React, { useState } from "react";
import Field from "./Field";

const Editor = () => {
  const [Data, setData] = useState([]);

  const addField = () => {
    const newField = {
      name: "New Field",
      type: "string",
      nestedFields: []
    };
    setData([...Data, newField]);
  };

  const deleteField = (index) => {
    const newData = [...Data];
    newData.splice(index, 1);
    setData(newData);
  };

  const updateName = (index, newName) => {
    const newData = [...Data];
    newData[index].name = newName;
    setData(newData);
  };

  const addNestedField = (index) => {
    const newData = [...Data];
    const nestedFields = newData[index].nestedFields || [];
    nestedFields.push({ name: "New Field", type: "string" });
    newData[index].nestedFields = nestedFields;
    setData(newData);
  };
  

  const updateType = (index, newType) => {
    const newData = [...Data];
    newData[index].type = newType;
    setData(newData);
  };

  const saveData = () => {
    console.log(Data);
  };

  return (
    <div className="interface-editor">
      <div className="interface-header">
        <h2 style={{display: "inline"}}>Field Name and Type</h2>
        <button onClick={addField} >+</button>
      </div>
      {Data.map((field, index) => (
        <Field
          key={index}
          index={index}
          name={field.name}
          type={field.type}
          nestedFields={field.nestedFields}
          onNameChange={updateName}
          onTypeChange={updateType}
          onDelete={deleteField}
          onAddNestedField={addNestedField}
        />
      ))}
      <button onClick={saveData}>Save</button>
    </div>
  );
};

export default Editor;