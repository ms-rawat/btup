import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const sem = [1, 2, 3, 4, 5, 6, 7, 8];
function Crud() {
  const navigate = useNavigate();
  
  const [course, setCourseData] = useState([]);
  const [selections, setSelection] = useState([]);
  const [stream, setstream] = useState([]);

  

  let fetchData = async () => {
    const response = await fetch("https://btup.netlify.app/.netlify/functions/index/cd", {
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
    

    try {
      const response = await fetch("https://btup.netlify.app/.netlify/functions/index/input-data", {
        method: "POST",
        // headers:{"Content-Type": "application/json"},
      body: selections,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // call your existing onSubmit function here
    sendSelection();
  };




  return (
    <>
      <div className="form-2">
        <div className="form1" >
          <form onSubmit={handleSubmit}>
          <select
          required
            name="Course"
            id=""
            
            onChange={(e) => getSelection(e.target.value, 0)}
          >

            <option>select course</option>
            {distinctCourse.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
          <select
          required
            name="Branch"
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
          required
name="sem"
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
          required
            type="text"
            name="subject"
            id=""
            placeholder="subject name"
            onChange={(e) => getSelection(e.target.value, 3)}
          />
          <input
          required
          name="year"
            type="text"
            placeholder="paper's year"
            onChange={(e) => getSelection(e.target.value, 4)}
          />
          <input
          required
          name="link"
            type="text"
            placeholder="enter file link "
            onChange={(e) => getSelection(e.target.value, 5)}
          />

          <button >
            Send data
          </button>
          </form>
        </div>
       
        <button  onClick={logout}>
          logout
        </button>
      </div>
    </>
  );
}

export default Crud;
