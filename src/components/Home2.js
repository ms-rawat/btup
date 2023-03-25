import { useState, useEffect, useRef } from "react";

import "./App.css";
import Papers from "./Paper";

const Home2 = () => {

  const [courseData, setCourseData] = useState([]);
  const [uniqueCourses, setUniqueCourses] = useState([]);
  const [stream, setStream] = useState([]);
  const [selection, setSelection] = useState([]);
  const [links,setlinks]=useState([]);
  const [showpaper,setshowpaper]=useState(false)
  const sem = [1, 2, 3, 4, 5, 6, 7, 8];
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://btup.netlify.app/.netlify/functions/index/cd", {
          method: "POST",
          mode: "cors",
          redirect: "follow",
        });
        const result = await response.json();
        setCourseData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setUniqueCourses([...new Set(courseData.map((item) => item.course))]);
  }, [courseData]);

  useEffect(() => {
    setStream(courseData.filter((item) => item.course === selection[0]));
  }, [courseData, selection]);

  

  const handleSelection = (event, index) => {
    setSelection([
      ...selection.slice(0, index),
      event.target.value,
      ...selection.slice(index + 1),
    ]);
  };

  let SendSelection = async () => {
   let response= await fetch("https://btup.netlify.app/.netlify/functions/index/selection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selection),

    })
    const result = await response.json();

    setlinks(result)
    setshowpaper(true)
    scroltosection();
   
  };


  const paperRef=useRef(null)

  const scroltosection = () => {
    paperRef.current.shscrollIntoView({ behavior: "smooth" });
  };
  






  
  return (
    <div>
      {/* <h1 className="heading">BtuOnline</h1> */}
      <div>
        <div className="form1">
          <h2>select and get your papers</h2>
          <select name="Course" onChange={(event) => handleSelection(event, 0)}>
            <option value="">Select a course</option>
            {uniqueCourses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          <select name="stream" onChange={(event) => handleSelection(event, 1)}>
            <option value="">Select a stream</option>
            {stream.map((item) => (
              <option key={item.id} value={item.branch}>
                {item.branch}
              </option>
            ))}
          </select>

          <select
            name="semester"
            id=""
            onChange={(Event) => handleSelection(Event, 2)}
          >
            <option value="">select semester</option>
            {sem.map((item) => (
              <option  key={item} value={item}>{item}</option>
            ))}
          </select>

          <button onClick={SendSelection} type="submit">Enter</button>
        
        </div>
      </div>
      
      <div ref={paperRef}>
      
      {showpaper ? <Papers data={links}/> : null}
      </div>
    </div>
  );
};

export default Home2;
