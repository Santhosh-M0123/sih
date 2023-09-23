import React,{useState} from "react";
import "../styles/Main.css";
// import Navbar from '../components/Navbar';
import Content from "../components/Content";
import axios from "axios";
const Main = () => {
  const [file, setFile] = useState(null);
  const [variableData, setVariableData] = useState({})
  const path = "http://localhost:8000"

  const handleFileChange = async (e) => {
    // Get the selected file
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      console.log(selectedFile)

      // Send the file to the backend
      const response = await axios.post(path+ '/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Handle the response from the backend as needed
      setVariableData(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="hero">
      <div className="hero_main">
        <div className="web_title">
          <h1>Click Finder !!</h1>
          <h3>Empowering Agriculture Through Smart Solutions</h3>
        </div>
        <div className="upload_image">
          <label class="label-wrapper">
            <span class="label-text">Choose a Image</span>
            <input type="file" name="file" id="fileInput" onChange={handleFileChange}/>
            <span class="icon">&#x1F4C2;</span>
          </label>
          <h5 className="abt_btn">
            Upload your plants Image to detect the disease
          </h5>
        </div>
      </div>
      <div className="response_content">
        <Content />
      </div>
    </section>
  );
};

export default Main;
