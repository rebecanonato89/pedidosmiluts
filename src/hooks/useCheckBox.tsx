import React, { useState } from "react";

const useCheckBox = (initialValue: string[]) => {
  const [selected, setSelected] = useState<string[]>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const index = selected.indexOf(value);
    if (index > -1) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    } else {
      setSelected([...selected, ...[value]]);
    }
  };

  const isSelected = (value: string) => {
    return selected.includes(value);
  };

  const cleanSelected = () =>{
    return setSelected([]);
  }

  return { selected, isSelected, onChange, cleanSelected };
};

export default useCheckBox;
