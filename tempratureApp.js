async function getweather(){
    const city= document.getElementById("cityInput").value;
   const apiKey = "e4a37999db8590a24b12a2343de81ff3"; // Replace with your real API key
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   
    try{
        const response= await fetch(url);
        const data = await response.json();
        console.log(data);

        const weather =`
        <h2> ${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>☁ Condition: ${data.weather[0].main}</p>
        `;
            console.log(document.getElementById("weatherResult").innerHTML = weather);



        
    }
catch(error){
    console.log('error occurs', error);
     document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
}
}