import React from 'react';
import { Dropdown, DropdownButton } from "react-bootstrap";


const DropDown = ({ text, options }) => {

  return (
    <div className='dropdown'>
      <DropdownButton id="dropdown-basic-button" title={text}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        {options?.map((option, index) => <Dropdown.Item>{}</Dropdown.Item>
        )}
      </DropdownButton>
    </div>
  );
}

export default DropDown;
