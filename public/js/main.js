const submitbtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Please Write The City Name Before The Search`;
    datahide.classList.add('data_hide')
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ab53f498a02a2931f57110c8610e2787`;
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);

      const arrData = [data];
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = `${arrData[0].main.temp}`;

      const tempmod = arrData[0].weather[0].main;

      // condition to check which seasion is occure

      if (tempmod === "Clear") {
        temp_status.innerHTML =
       " <i class='fa-solid fa-sun' style='color:#eccc68'></i>";
      }else if(tempmod === "Clouds") {
        temp_status.innerHTML =
       " <i class='fa-solid fa-cloud' style='color:#f1f2f6' ></i>";
      }else if(tempmod === "Rain") {
        temp_status.innerHTML =
       "<i class='fa-solid fa-cloud-rain' style='color:#a4b0be' ></i>";
      }else{
        temp_status.innerHTML =
       " <i class='fa-solid fa-sun' style='color:#eccc68'></i>";
      }

    datahide.classList.remove('data_hide')

    } catch (error) {
      city_name.innerText = `Please Enter The City Name Properly`;
    datahide.classList.add('data_hide')

    }
  }
};
submitbtn.addEventListener("click", getInfo);
