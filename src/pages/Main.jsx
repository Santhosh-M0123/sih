import React,{useState} from "react";
import "../styles/Main.css";
// import Navbar from '../components/Navbar';
import Content from "../components/Content";
import axios from "axios";
const Main = () => {
  const [file, setFile] = useState(null);
  const path = "http://localhost:8000"

  const variableData = { 
      accessToken: "JjMVDrCnyOnXLWR",
      images: "https://plant.id/media/imgs/a5bcbc8730e34b46b705b1ab9bda0ba7.jpg",
      is_plant: {
          binary: true,
          threshold: 0.5,
          probability: 1
      },
      suggestions: {
          id: "c695f01775c8d5ac",
          name: "Diplocarpon rosae",
          probability: 0.9941538,
          details: {
              common_names: [
                  "Rose Black Spot",
                  "Black Rose Spot",
                  "Black Spot"
              ],
              taxonomy: {
                  class: "Leotiomycetes",
                  genus: "Diplocarpon",
                  order: "Helotiales",
                  family: "Drepanopezizaceae",
                  phylum: "Ascomycota",
                  kingdom: "Fungi"
              },
              "url": "https://en.wikipedia.org/wiki/Diplocarpon_rosae",
              "gbif_id": 2583566,
              "inaturalist_id": 354898,
              "rank": "species",
              "description": {
                  "value": "Diplocarpon rosae is a fungus that creates the rose black spot disease.\nBecause it was observed by people of various countries around the same time (around 1830), the nomenclature for the fungus varied with about 25 different names. The asexual stage is now known to be Marssonina rosae, while the sexual and most common stage is known as Diplocarpon rosae.\nDiplocarpon rosae grows over seasons as mycelia, ascospores, and conidia in infected leaves and canes. In the spring during moist, humid conditions, ascospores and conidia are wind-borne and rain-splashed to newly emerging leaf tissue.",
                  "citation": "https://en.wikipedia.org/wiki/Diplocarpon_rosae",
                  "license_name": "CC BY-SA 3.0",
                  "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
              },
              "synonyms": [
                  "Actinonema rosae",
                  "Asteroma rosae",
                  "Dicoccum rosae",
                  "Dothidea rosae",
                  "Fabraea rosae",
                  "Marssonia rosae",
                  "Marssonina rosae",
                  "Phyllachora rosae"
              ],
              "image": {
                  "value": "https://plant-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/5ab/5abfb0b47b537f7208806a052f7c2d03700e2994.jpg",
                  "citation": null,
                  "license_name": "CC0",
                  "license_url": "https://creativecommons.org/publicdomain/zero/1.0/"
              },
              "edible_parts": null,
              "language": "en",
              "entity_id": "c695f01775c8d5ac"
          }
      },
      "details": {
          "common_names": [
              "Rose Black Spot",
              "Black Rose Spot",
              "Black Spot"
          ],
          "taxonomy": {
              "class": "Leotiomycetes",
              "genus": "Diplocarpon",
              "order": "Helotiales",
              "family": "Drepanopezizaceae",
              "phylum": "Ascomycota",
              "kingdom": "Fungi"
          },
          "url": "https://en.wikipedia.org/wiki/Diplocarpon_rosae",
          "gbif_id": 2583566,
          "inaturalist_id": 354898,
          "rank": "species",
          "description": {
              "value": "Diplocarpon rosae is a fungus that creates the rose black spot disease.\nBecause it was observed by people of various countries around the same time (around 1830), the nomenclature for the fungus varied with about 25 different names. The asexual stage is now known to be Marssonina rosae, while the sexual and most common stage is known as Diplocarpon rosae.\nDiplocarpon rosae grows over seasons as mycelia, ascospores, and conidia in infected leaves and canes. In the spring during moist, humid conditions, ascospores and conidia are wind-borne and rain-splashed to newly emerging leaf tissue.",
              "citation": "https://en.wikipedia.org/wiki/Diplocarpon_rosae",
              "license_name": "CC BY-SA 3.0",
              "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
          },
          "synonyms": [
              "Actinonema rosae",
              "Asteroma rosae",
              "Dicoccum rosae",
              "Dothidea rosae",
              "Fabraea rosae",
              "Marssonia rosae",
              "Marssonina rosae",
              "Phyllachora rosae"
          ],
          "image": {
              "value": "https://plant-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/5ab/5abfb0b47b537f7208806a052f7c2d03700e2994.jpg",
              "citation": null,
              "license_name": "CC0",
              "license_url": "https://creativecommons.org/publicdomain/zero/1.0/"
          },
          "edible_parts": null,
          "language": "en",
          "entity_id": "c695f01775c8d5ac"
  }
  }

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
