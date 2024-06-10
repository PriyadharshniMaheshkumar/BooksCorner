import React, { useState, useEffect } from "react";
import { bookData } from "../utils/data";
import { Checkbox } from "./checkbox";

export const Select = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(bookData);
  }, [list]);

  // Event Handlers

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.name));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (name, checked) => {
    setIsCheck([...isCheck, name]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== name));
    }
  };

  console.log(isCheck);

  const catalog = list.map(({ id, name }) => {
    return (
      <>
        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={(e) => handleClick(name, e.target.checked)}
          isChecked={isCheck.includes(name)}
        />
        {name}
      </>
    );
  });

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <Checkbox
          type="checkbox"
          name="selectAll"
          id="selectAll"
          handleClick={handleSelectAll}
          isChecked={isCheckAll}
        />
        Select All
        {catalog}
      </div>
      <div style={{ paddingTop: "30px" }}>
        <table border="1">
          <thead>
            <tr>
              <th>Selected Items:</th>
            </tr>
          </thead>
          <tbody>
            {isCheck.map((x, i) => {
              return (
                <tr>
                  <td>{x}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
