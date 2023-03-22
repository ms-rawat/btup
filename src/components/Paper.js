import { useEffect, useState } from "react";
import "./App.css";

const Paper = () => {
  const [Filename, setFileName] = useState([]);

  const fetchLink = async () => {
    const result = await fetch("http://localhost:5000/links", {
      method: "post",
      mode: "cors",
      redirect: "follow",
    });
    const data = await result.json();
    setFileName(data);
  };

  useEffect(() => {
    fetchLink();
   
  }, []);

  
console.log(Filename)








 
  return (
    <>
    {Filename.length > 0 && (
      
  <div className="Table">
   
    <table>
      <caption>your papers</caption>
      <thead>
        <th>subject</th>
        <th>link</th>
        <th>year</th>
      </thead>
      <tbody>
        {Filename.map((item) => (
          <tr>
            <td>{item.Subject}</td>
            <td><a href={item.Link} download>click here</a></td>
            <td>{item.Year}</td>
          </tr>
        ))}
       
      </tbody>
    </table>
  </div>
)}

    </>
  );
};

export default Paper;
