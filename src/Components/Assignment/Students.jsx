import { useState } from "react";

const Students = () => {
  const [student, setStudent] = useState([]);
  const [numberOfStudent, setNumberOfStudent] = useState(0);

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

  const handleButton = () => {
    isCheck = 0;
    const inputEle = document.querySelectorAll(".inputStudent");
    inputEle.forEach((item) => {
      if (item.value === "") {
        setError(item, "Khong duoc de trong input");
      } else {
        setSuccess(item);
      }
    });

    if (isCheck === 0) {
      const Email = document.getElementById("email").value;
      const Phone = document.getElementById("phone").value;
      const Name = document.getElementById("name").value;

      setStudent((prevStudent) => [
        ...prevStudent,
        {
          ID: `${numberOfStudent + 1}`,
          Name: `${Name}`,
          Phone: `${Phone}`,
          Email: `${Email}`,
        },
      ]);

      setNumberOfStudent(numberOfStudent + 1);
    }
  };
  return (
    <div>
      <div>
        <h1>Student List</h1>

        <div className="inputName">
          <label>Name: </label>
          <div>
            <input
              id="name"
              className="inputStudent"
              name="name"
              onBlur={handleInput}
            />
            <br />
            <small></small>
          </div>
        </div>

        <div className="inputPhone">
          <label>Phone: </label>
          <div>
            <input
              id="phone"
              className="inputStudent"
              type="number"
              name="phone"
              onBlur={handleInput}
            />
            <br />
            <small></small>
          </div>
        </div>

        <div className="inputEmail">
          <label>Email: </label>
          <div>
            <input
              id="email"
              className="inputStudent"
              name="email"
              onBlur={handleInput}
            />
            <br />
            <small></small>
          </div>
        </div>
        <button type="button" onClick={handleButton}>
          Submit
        </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {student.map((item) => {
              return (
                <tr>
                  <td>{item.ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Phone}</td>
                  <td>{item.Email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
