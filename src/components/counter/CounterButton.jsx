import propTypes, { func } from "prop-types";
import { useState } from "react";
export default function CounterButton({by,incrementMethod,decrementMethod,}) {
  const [count, setCount] = useState(0);

//   function incrementCounterFunction() {
    
//     incrementMethod(by);
//   }

//   function decrementCounterFunction() {
    
//     decrementMethod(by);
//   }

  return (
    <div className="Counter">
      <button className="CounterButton" onClick={() => incrementMethod(by)}>
        +{by}
      </button>
      <button className="CounterButton" onClick={() => decrementMethod(by)}>
        -{by}
      </button>
    </div>
  );
}

CounterButton.propTypes = {
  by: propTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};
