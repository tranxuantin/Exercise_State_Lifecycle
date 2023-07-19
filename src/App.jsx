import "./App.css";
import Calculator from "./Components/Assignment/Calculator";
import HideDisplay from "./Components/Assignment/Hide_Display";
import LoginLogoutAssignment from "./Components/Assignment/Login_Logout";
import Students from "./Components/Assignment/Students";
import TodoApp from "./Components/Assignment/TodoApp";
import ButtonCounter from "./Components/Exercise/ButtonCounter";
import ChangeBackgroud from "./Components/Exercise/ChangeBackground";
import DeleteTestClass from "./Components/Exercise/DeleteComponent";
import LoginLogout from "./Components/Exercise/LoginLogout";

function App() {
  return (
    <>
      {/* Exercise */}
      <div style={{ backgroundColor: "#FFFF99" }}>
        <h1>Exercise</h1>

        <div style={{ backgroundColor: "orange" }}>
          <ButtonCounter />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <ChangeBackgroud />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <DeleteTestClass />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <LoginLogout />
        </div>
      </div>

      {/* Assignment */}
      <div style={{ backgroundColor: "#FFFF99" }}>
        <h1>Assignment</h1>

        <div style={{ backgroundColor: "orange" }}>
          <HideDisplay />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <Calculator />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <LoginLogoutAssignment />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <TodoApp />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <Students />
        </div>
      </div>
    </>
  );
}

export default App;
