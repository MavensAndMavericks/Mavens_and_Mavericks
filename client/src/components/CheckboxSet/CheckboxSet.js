
import React from "react";
import { Input } from "react-materialize";


function CheckboxSet(props) {  
    return (
      <div>
        {props.setOptions.map(option => {
          return (
            <label>
              key={option}
              style={{textTransform: 'capitalize'}}>
              {option}
              <Input
                type="checkbox"
                value={option}
                name={props.setName} />
            </label>
          )
        })}
      </div>
    );
  }


  export default CheckboxSet; 