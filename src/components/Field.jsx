import React from "react";

const Field = ({
    index,
    name,
    type,
    nestedFields,
    onNameChange,
    onTypeChange,
    onDelete,
    onAddNestedField
  }) => {
    const handleNameChange = (e) => {
      onNameChange(index, e.target.value);
    };
  
    const handleTypeChange = (e) => {
      onTypeChange(index, e.target.value);
    };
  
    const handleDelete = () => {
      onDelete(index);
    };
  
    const handleAddNestedField = () => {
      onAddNestedField(index);
    };
  
    return (
      <div className="field">
        <input type="text" value={name} onChange={handleNameChange} />
        <select value={type} onChange={handleTypeChange}>
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="object">Object</option>
        </select>
        {type === "object" && (
          <button onClick={handleAddNestedField}>Add Nested Field</button>
        )}
        <button onClick={handleDelete}>X</button>
        {nestedFields && nestedFields.length > 0 && (
          <div className="nested-fields">
            {nestedFields.map((field, index) => (
              <Field
                key={index}
                index={index}
                name={field.name}
                type={field.type}
                nestedFields={field.nestedFields}
                onNameChange={(i, newName) =>
                  onNameChange(index, {
                    ...field,
                    name: newName
                  })
                } 
                onTypeChange={(i, newType) =>
                  onTypeChange(index, {
                    ...field,
                    type: newType
                  })
                }
                onDelete={(i) =>
                  onNameChange(index, {
                    ...field,
                    nestedFields: nestedFields.filter(
                      (field, idx) => idx !== i
                    )
                  })
                }
                onAddNestedField={() =>
                    onNameChange(index, {
                      ...field,
                      nestedFields: [
                        ...field.nestedFields,
                        { name: "New Field", type: "string", nestedFields: [] }
                      ]
                    })
                  }
                  
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  export default Field