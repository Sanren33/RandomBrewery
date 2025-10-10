var home = document.getElementById("home");
var result = document.getElementById("result");
var goBtn = document.getElementById("goBtn");
var anotherBtn = document.getElementById("anotherBtn");
var backBtn = document.getElementById("backBtn");

var breweryName = document.getElementById("breweryName");
var breweryType = document.getElementById("breweryType");
var breweryAddress = document.getElementById("breweryAddress");
var breweryMap = document.getElementById("breweryMap");
var websiteBtn = document.getElementById("websiteBtn");
var directionBtn = document.getElementById("directionBtn");
var copyBtn = document.getElementById("copyBtn");
var countNote = document.getElementById("countNote");

var breweries = [];
var currentBrewery = null;

async function fetchBreweries() {
  var type = document.getElementById("typeSelect").value;
  var url = `https://api.openbrewerydb.org/v1/breweries?by_city=seattle`;

  if (type) {
    url += `&by_type=${type}`;
  }

  var res = await fetch(url);
  breweries = await res.json();

  if (breweries.length) {
    showRandomBrewery();
  } else {
    alert("No breweries found.");
  }
}

function showRandomBrewery() {
  var random = breweries[Math.floor(Math.random() * breweries.length)];
  currentBrewery = random;

  breweryName.textContent = random.name;
  breweryType.textContent = random.brewery_type;
  breweryAddress.textContent = `${random.street || ""}, ${random.city}, ${random.state}`;
  breweryMap.src = `https://www.google.com/maps?q=${encodeURIComponent(random.name + " " + random.city)}&output=embed`;

  websiteBtn.onclick = () => {
    if (random.website_url) {
      window.open(random.website_url, "_blank");
    } else {
      alert("Website not available.");
    }
  };

  directionBtn.onclick = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        random.name + " " + random.city
      )}`,
      "_blank"
    );
  };

  copyBtn.onclick = () => {
    navigator.clipboard.writeText(
      `${random.street || ""}, ${random.city}, ${random.state}`
    );
    alert("Address copied!");
  };

  countNote.textContent = `*Randomized from ${breweries.length} candidates.`;

  home.classList.add("hidden");
  result.classList.remove("hidden");
}

goBtn.addEventListener("click", fetchBreweries);
anotherBtn.addEventListener("click", showRandomBrewery);
backBtn.addEventListener("click", () => {
  result.classList.add("hidden");
  home.classList.remove("hidden");
});
