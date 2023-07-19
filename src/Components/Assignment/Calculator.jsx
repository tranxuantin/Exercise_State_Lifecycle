import { useState } from "react";

function Calculator() {
  const [memmory, setMemmory] = useState({ text: "" });
  const [result, setResult] = useState(0);
  let isCheck = 0;

  const handleInput = (event) => {
    const inputEle = document.getElementById(`${event.target.id}`);
    if (inputEle.value === "") {
      setError(inputEle, "Khong duoc de trong input");
    } else {
      setSuccess(inputEle);
    }
  };

  const setError = (inputEle, message) => {
    let parentEle = inputEle.parentNode;
    parentEle.classList.add("error");
    parentEle.querySelector("small").innerText = message;
    isCheck += 1;
  };

  const setSuccess = (inputEle) => {
    let parentEle = inputEle.parentNode;
    parentEle.classList.add("success");
    parentEle.classList.remove("error");
    parentEle.querySelector("small").innerText = "";
    isCheck += 0;
  };

  const handleClick = (event) => {
    isCheck = 0;
    const inputEle = document.querySelectorAll(".input");
    inputEle.forEach((item) => {
      if (item.value === "") {
        setError(item, "Khong duoc de trong input");
      } else {
        setSuccess(item);
      }
    });

    if (isCheck === 0) {
      const input1Value = Number.parseInt(
        document.getElementById("input1").value,
        10
      );
      const input2Value = Number.parseInt(
        document.getElementById("input2").value,
        10
      );
      switch (true) {
        case event.target.id === "plus":
          setResult(input1Value + input2Value);
          setMemmory({ ...memmory, text: `${input1Value} + ${input2Value} =` });
          break;
        case event.target.id === "minus":
          setResult(input1Value - input2Value);
          setMemmory({ ...memmory, text: `${input1Value} - ${input2Value} =` });
          break;
        case event.target.id === "multiple":
          setResult(input1Value * input2Value);
          setMemmory({ ...memmory, text: `${input1Value} x ${input2Value} =` });
          break;
        case event.target.id === "divide":
          setResult(input1Value / input2Value);
          setMemmory({ ...memmory, text: `${input1Value} / ${input2Value} =` });
          break;

        default:
          break;
      }
    }
  };

  return (
    <div
      style={{ width: "177.5px", marginTop: "40px", backgroundColor: "Pink" }}
    >
      <div className="inputNumber">
        <div>
          <input
            type="number"
            id="input1"
            className="input"
            onBlur={handleInput}
          />
          <small></small>
        </div>
        <div>
          <input
            type="number"
            id="input2"
            className="input"
            onBlur={handleInput}
          />
          <small></small>
        </div>
      </div>

      <div className="result">
        {" "}
        <h4
          style={{
            margin: "10px 10px 10px 0px",
            padding: "0px",
          }}
          id="equal"
        >
          result: {memmory.text} {result}
        </h4>
      </div>

      <div className="button" style={{ textAlign: "center" }}>
        <button
          id="plus"
          type="button"
          style={{ height: "40px", width: "40px", marginRight: "5px" }}
          onClick={handleClick}
        >
          +
        </button>
        <button
          id="minus"
          type="button"
          style={{ height: "40px", width: "40px", marginRight: "5px" }}
          onClick={handleClick}
        >
          -
        </button>
        <button
          id="multiple"
          type="button"
          style={{ height: "40px", width: "40px", marginRight: "5px" }}
          onClick={handleClick}
        >
          x
        </button>
        <button
          id="divide"
          type="button"
          style={{ height: "40px", width: "40px" }}
          onClick={handleClick}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default Calculator;
