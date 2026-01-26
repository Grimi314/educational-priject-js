"use strict";

const apiKey = "5170e879e2db48d2b0d232239262401";

const baseUrl = "https://api.weatherapi.com/v1/current.json";

const userForm = document.querySelector(".form");
const header = document.querySelector(".header");

const fetchWearher = async (query) => {
  try {
    const url = `${baseUrl}?key=${apiKey}&q=${query}&lang=en`;
    const respons = await fetch(url);

    if (!respons.ok) {
      throw new Error("Citi is nit found");
    }

    const data = await respons.json();
    return data;
  } catch (error) {
    showEror();
  }
};

function showDataPage(data) {
  const markup = `
    <div class="card">
        <h2 class="city-name">${data.location.name}<span class="country-label">${data.location.country}</span> </h2>
       
        <div class="wrapper">
        <p class="weather-value">${data.current.temp_c}</p><span class="degree">°c</span>
     <svg width="126" height="120">
        <use class="use" href="./images/1.svg"></use>
    </svg>
    </div>
    <p class="weather-description">${data.current.condition.text}</p>
   
</div> `;

  header.insertAdjacentHTML("afterend", markup);
}

function showEror() {
  const markupEror = `
    <div class="card">
        <h2 class="city-name">City is no found</h2>
</div> `;

  header.insertAdjacentHTML("afterend", markupEror);
}

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.elements["city"].value.trim();

  if (!query) return;

  const response = await fetchWearher(query);

  const condition = await fetch("./condition.json");
  const weatherCondition = condition.json();

  showDataPage(response);

  const use = document.querySelector(".use");
  const iconCode = response.current.condition.code;

  if (iconCode >= 1009 && iconCode <= 1171) {
    use.setAttribute("href", "./images/7.svg");
  } else if (iconCode >= 1180 && iconCode <= 1198) {
    use.setAttribute("href", "./images/18.svg");
  } else if (iconCode >= 1210 && iconCode <= 1225) {
    use.setAttribute("href", "./images/22.svg");
  }
  form.reset();
});
