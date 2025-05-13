function getweather(){
  let pickcityname = document.getElementById("city1").value;
  axios.get(`https://api.weatherapi.com/v1/current.json?key=4e43b707f24a46f2878122708252502&q=${pickcityname}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data.current.temp_c)
    document.getElementById("res"). innerHTML =(`Today Temp in Cel ${response.data.current.temp_c}`)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}