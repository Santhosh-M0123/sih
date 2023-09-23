import axios from "axios";

async function Fetch(lat, lon) {
  // const response = await axios.get(`https://openfarm.cc/api/v1/crops`, {
  //   params: {
  //     geo: `point:${lat},${lon}`,
  //   },
  // });
  // console.log(response)
//   const encodedParams = new URLSearchParams();
//   encodedParams.set("in", "How to cultivate the apple");
//   encodedParams.set("op", "in");
//   encodedParams.set("cbot", "1");
//   encodedParams.set("SessionID", "RapidAPI1");
//   encodedParams.set("cbid", "1");
//   encodedParams.set("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");
//   encodedParams.set("ChatSource", "RapidAPI");
//   encodedParams.set("duration", "1");

//   const options = {
//     method: "POST",
//     url: "https://robomatic-ai.p.rapidapi.com/api",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "X-RapidAPI-Key": "45b5abfdb7msh53551f05a69d03cp19d973jsna70f3a59c932",
//       "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com",
//     },
//     data: encodedParams,
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
const options = {
  method: 'POST',
  url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '45b5abfdb7msh53551f05a69d03cp19d973jsna70f3a59c932',
    'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: 'how to cultivate apple'
      }
    ],
    web_access: false,
    stream: false
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
const Api = () => {
  // Replace with your latitude and longitude
  const latitude = 40.7128;
  const longitude = -74.006;

//   Fetch(latitude, longitude);
  return <h1 onClick={() => Fetch()}>Api</h1>;
};

export default Api;
