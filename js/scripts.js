const countryNamesSpanish = {
    "USA": "Estados Unidos",
    "MEX": "México",
    "GTM": "Guatemala",
    "BLZ": "Belice",
    "SLV": "El Salvador",
    "HND": "Honduras",
    "NIC": "Nicaragua",
    "CRI": "Costa Rica",
    "PAN": "Panamá",
    "COL": "Colombia",
    "VEN": "Venezuela",
    "GUY": "Guyana",
    "SUR": "Surinam",
    "ECU": "Ecuador",
    "PER": "Perú",
    "BRA": "Brasil",
    "BOL": "Bolivia",
    "PRY": "Paraguay",
    "CHL": "Chile",
    "ARG": "Argentina",
    "URY": "Uruguay",
    "CUB": "Cuba",
    "DOM": "República Dominicana",
    "GBR": "Reino Unido",
    "FRA": "Francia",
    "DEU": "Alemania",
    "ITA": "Italia",
    "ESP": "España",
    "RUS": "Rusia",
    "BLR": "Bielorrusia",
    "CHN": "China",
    "IRN": "Irán",
    "SRB": "Serbia",
    "SYR": "Siria",
    "GRC": "Grecia",
    "TUR": "Turquía",
    "IND": "India",
    "ZAF": "Sudáfrica",
    "EGY": "Egipto",
    // Add more countries as needed
};

const width = document.getElementById('map').clientWidth,
      height = document.getElementById('map').clientHeight;

const svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .scale(140)
    .center([0, 30])
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

const g = svg.append("g");

const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoom);

const countryInfo = {
    "ARG": {
        "message": "Argentina desconoce resultados de los comicios en Venezuela que dan como ganador a Maduro",
        "link": "https://www.eldiario.es/politica/argentina-desconoce-resultados-comicios-venezuela-dan-ganador-maduro_1_11557528.html"
    },
    "COL": {
        "message": "OEA no consigue mayoría para instar a Venezuela a publicar resultado; Brasil y Colombia se abstienen",
        "link": "https://apnews.com/world-news/general-news-domestic-news-domestic-news-c6aac7b5f757bea66fd1f79951a9f764"
    },
    "PRY": {
        "message": "El presidente de Paraguay considera que Maduro es un dictador",
        "link": "https://cnnespanol.cnn.com/video/elecciones-venezuela-santiago-pena-paraguay-redaccion-buenos-aires/"
    },
    // Add more countries with specific messages and links if needed
};

// Function to detect if the user is on a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .then(response => response.json())
    .then(data => {
        g.selectAll("path")
            .data(data.features)
            .enter().append("path")
            .attr("class", d => {
                if (d.id === "VEN") return "country white";
                if (["ARG", "CHL", "PER", "PAN", "CRI", "GTM", "DOM", "USA", "ECU", "PRY", "URY", "SLV", "GBR", "FRA", "DEU", "ITA", "ESP", "GRC", "TUR"].includes(d.id)) return "country blue";
                if (["BOL", "CUB", "NIC", "BRA", "MEX", "COL", "HND", "RUS", "BLR", "CHN", "IRN", "SRB", "SYR"].includes(d.id)) return "country red";
                return "country grey";
            })
            .attr("d", path)
            .on("click", function(event, d) {
                if (d.id === "VEN") return; // Do nothing if Venezuela is clicked

                const infoBox = d3.select("#info-box");
                const countryId = d.id;
                const info = countryInfo[countryId] || {};

                // Determine default messages based on the country color class
                if (!info.message) {
                    const countryClass = d3.select(this).attr("class").split(" ")[1];
                    if (countryClass === "blue") {
                        info.message = "Desconocen los resultados emitidos";
                    } else if (countryClass === "red") {
                        info.message = "Apoyan los resultados y la autoproclamación de Maduro como Presidente";
                    } else {
                        info.message = "No ha emitido opinión sobre los resultados.";
                    }
                }

                infoBox
                    .style("display", "block")
                    .html(`
                        <strong>${countryNamesSpanish[countryId] || d.properties.name}</strong><br>
                        ${info.message} <br>
                        ${info.link ? `<a href="${info.link}" target="_blank">Link a la noticia</a>` : ""}
                    `);

                if (isMobile()) {
                    // Center the info box on mobile devices
                    infoBox
                        .style("left", (width / 2 - infoBox.node().offsetWidth / 2) + "px")
                        .style("top", (height / 2 - infoBox.node().offsetHeight / 2) + "px");
                } else {
                    // Position the info box near the click on non-mobile devices
                    const [x, y] = d3.pointer(event);
                    infoBox
                        .style("left", (x + 10) + "px")
                        .style("top", (y + 10) + "px");
                }
            });
    })
    .catch(error => {
        console.error('Error fetching the GeoJSON data:', error);
    });
