import { useState } from 'react';
import axios from 'axios';
import MainContainer from './components/mainContainer';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [data, setData] = useState("");
  const [click, setClick] = useState(false);

  const fetchData = async () => {
    const apiKey = "8f57ec623e5f0a17de72c22faf1f879c";

    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}  &appid=${apiKey}`);
      setWeatherData(res.data);
      setClick(true);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setWeatherData(null);
    }
  };

  return (
    <div className='border h-screen flex flex-col justify-center items-center'>
      <div className='mb-5 w-[400px]'>
        <input type="text" value={data} className='w-[80%] px-3 py-2 rounded-lg' onChange={(e) => {
          setData(e.target.value);
        }} />
        <button
          onClick={() => {
            fetchData();
          }}
          className="bg-blue-500 w-[20%] text-white font-bold px-3 py-2 rounded-lg">Submit</button>
      </div>
      {click && data && weatherData && (
        <MainContainer city={data} data={weatherData} />
      )}
    </div>
  )
}

export default App