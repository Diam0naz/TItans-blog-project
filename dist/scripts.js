const apiKey = "71c9b0bfa5359fab66cff4ad51502b30";
const apiURL = "http://api.weatherstack.com/current";

const searchBtn = document.getElementById("search-btn");

async function weatherCheck(city) {
  try {
    const query = await fetch(
      `${apiURL}` + `?access_key=` + `${apiKey}` + `&query=${city}`
    );

    const response = await query.json();

    function getCurrentDate() {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return now.toLocaleDateString(undefined, options);
    }

    let currentDate = getCurrentDate();

    console.log(currentDate);

    const location = document.getElementById("location");
    const date = document.getElementById("date");
    const temperature = document.getElementById("temperature");
    const time = document.getElementById("time");

    date.textContent = `${currentDate}`;
    location.textContent = `${response.location.name},${response.location.country}`;
    time.textContent = `${response.current.observation_time}`;
    temperature.textContent = ` ${response.current.temperature}°c,`;

    const iconUrl = response.current.weather_icons[0];

    document.getElementById("weather-icon").src = iconUrl;

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const searchCity = document.getElementById("search-city").value.trim();

  weatherCheck(searchCity);
});

// https://api.weatherstack.com/current?access_key=71c9b0bfa5359fab66cff4ad51502b30&query=New York

//  Hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const bars = hamburger.querySelectorAll("span");

hamburger.addEventListener("click", () => {
  // Toggle menu visibility
  navMenu.classList.toggle("-translate-x-full");

  // Animate hamburger bars
  bars.forEach((bar, index) => {
    if (index === 0) {
      bar.classList.toggle("translate-y-[9px]");
      bar.classList.toggle("rotate-45");
    }
    if (index === 1) {
      bar.classList.toggle("opacity-0");
    }
    if (index === 2) {
      bar.classList.toggle("-translate-y-[9px]");
      bar.classList.toggle("-rotate-45");
    }
  });
});

// Close menu when clicking nav links (mobile only)
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navMenu.classList.add("-translate-x-full");
      bars.forEach((bar, index) => {
        if (index === 0) {
          bar.classList.remove("translate-y-[9px]", "rotate-45");
        }
        if (index === 1) {
          bar.classList.remove("opacity-0");
        }
        if (index === 2) {
          bar.classList.remove("-translate-y-[9px]", "-rotate-45");
        }
      });
    }
  });
});

// TOGGLE FOR THE LOGIN BUTTONS

const auth = document.getElementById("auth");

const lgToggle = document.getElementById("hamburger-toggle");

lgToggle.addEventListener("click", () => {
  auth.classList.toggle("hidden");
  auth.classList.toggle("flex");
  auth.classList.toggle("gap-3");
  auth.classList.toggle("items-center");
  auth.classList.toggle("justify-center");
});

//  GETTING TRAVEL POSTS
// let travel = document.getElementById("travel");
const apiurl = "https://test.blockfuselabs.com/api/categories";
let travel = 6;

fetch(`${apiurl}/${travel}`, {
  method: "GET",
  headers: {
    "access-control-allow-origin": "*",
    "cache-control": "no-cache,private",
    "content-length": "138",
    "content-type": "application/json",
    date: "Wed,21 May 2025 16:51:47 GMT",
    server: "LiteSpeed",
    "x-powered-by": "PHP/8.2.28",
    "x-turbo-charged-by": "LiteSpeed",
  },
})
  .then(async (response) => {
    const data = await response.json();
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

//  REGISTRATION OF NEW USER
async function registerUser(username, email, password) {
  try {
    const response = await fetch("https://your-api.com/api/register", {
      method: "POST", // HTTP method
      headers: {
        // Request headers
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Request payload
        username,
        email,
        password,
      }),
    });

    if (!response.ok) {
      // Check for HTTP errors
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const data = await response.json(); // Parse response
    console.log("Registration successful:", data);
  } catch (error) {
    // Error handling
    console.error("Registration error:", error);
    throw error;
  }
}
