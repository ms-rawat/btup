import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

const sem = [1, 2, 3, 4, 5, 6, 7, 8];
function Crud() {
  const navigate = useNavigate();
  let token = localStorage.getItem("admin");
  const [course, setCourseData] = useState([]);
  const [selections, setSelection] = useState([]);
  const [stream, setstream] = useState([]);

  const [file, setFile] = useState(null);

  let fetchData = async () => {
    const response = await fetch("http://localhost:5000/cd", {
      method: "POST",
      mode: "cors",
      redirect: "follow",
    });
    const result = await response.json();
    setCourseData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // variable for distinct course values
  let distinctCourse = [...new Set(course.map((item) => item.course))];

  //function for collecting selected items
  let getSelection = (value, index) => {
  
      selections[index] = value;
    
    setstream(course.filter((item) => item.course === selections[0]));
    
  };
  
  // function for sending form data
  let sendSelection = async () => {
    const formData = new FormData();
    formData.append("Course", selections[0]);
    formData.append("Stream", selections[1]);
    formData.append("Semester", selections[2]);
    formData.append("Subject", selections[3]);
    formData.append("Year", selections[4]);
    formData.append("Link", selections[5]);
console.log(formData)
    try {
      const response = await fetch("http://localhost:5000/input-data", {
        method: "POST",
        // headers:{"Content-Type": "application/json"},
      body: formData,
        redirect:'follow'
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  let logout = () => {
    localStorage.removeItem("admin");
    navigate("/SignIn");
  };

  return (
    <>
      <div className="form-2">
        <div className="form1" >
          <select
            name=""
            id=""
            onChange={(e) => getSelection(e.target.value, 0)}
          >

            <option>select course</option>
            {distinctCourse.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
          <select
            name=""
            id=""
            onChange={(e) => getSelection(e.target.value, 1)}
          >
            <option value="">select branch</option>
            {stream.map((item, index) => (
              <option key={index} value={item.branch}>
                {item.branch}
              </option>
            ))}
          </select>
          <select

            onChange={(e) => getSelection(e.target.value, 2)}
          >
            <option value="">select semester</option>
            {sem.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="text"
            name=""
            id=""
            placeholder="subject name"
            onChange={(e) => getSelection(e.target.value, 3)}
          />
          <input
            type="text"
            placeholder="paper's year"
            onChange={(e) => getSelection(e.target.value, 4)}
          />
          <input
            type="text"
            placeholder="enter file link "
            onChange={(e) => getSelection(e.target.value, 5)}
          />

          <button onClick={sendSelection}>
            Send data
          </button>
        </div>
        <button  onClick={logout}>
          logout
        </button>
      </div>
    </>
  );
}

export default Crud;
