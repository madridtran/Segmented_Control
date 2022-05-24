import { useRef, useState } from "react";
import SegmentedControl from "./SegmentedControl";

const App = () => {
  const [selectedValue1, setSelectedValue1] = useState("complete");
  const [selectedValue2, setSelectedValue2] = useState("complete");

  return (
    <div className="container">
      <SegmentedControl
        name="group-1"
        callback={(val) => setSelectedValue1(val)}
        controlRef={useRef()}
        segments={[
          {
            label: "Complete",
            value: "complete",
            ref: useRef()
          },
          {
            label: "Incomplete",
            value: "incomplete",
            ref: useRef()
          },
          {
            label: "Pending",
            value: "pending",
            ref: useRef()
          }
        ]}
      />
      <p className="selected-item">Selected: {selectedValue1}</p>

      <SegmentedControl
        name="group-2"
        callback={(val) => setSelectedValue2(val)}
        controlRef={useRef()}
        defaultIndex={1}
        segments={[
          {
            label: "First",
            value: "first",
            ref: useRef()
          },
          {
            label: "Second",
            value: "second",
            ref: useRef()
          },
          {
            label: "Third",
            value: "third",
            ref: useRef()
          }
        ]}
      />
      <p className="selected-item">Selected: {selectedValue2}</p>
    </div>
  );
};

export default App;
