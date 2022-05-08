import React, { useState } from 'react';
import { Dropdown, DropdownButton } from "react-bootstrap";


const DropDown = ({ text, options }) => {

  const [dropdown, setDropdown] = useState('');

  function changeValue(e) {
     setDropdown({dropDownValue: e.currentTarget.textContent})
     console.log(dropdown)
    }

  return (
    <>
      <DropdownButton width="lg" block   id="dropdown-basic-button" title={text}>
        {options?.map((option) => <Dropdown.Item >{option?.name}</Dropdown.Item>
        )}
        <Dropdown.Item nav caret>
    <div onClick={changeValue}>{dropdown}</div>
</Dropdown.Item>

      </DropdownButton>
    </>
  );
}

export default DropDown;
