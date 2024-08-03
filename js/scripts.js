/* ######################################## */
/* Done x Felipe Enmanuel Sandoval Sibada  */
/* ######################################## */
const countryNamesSpanish = {
    // Lista de países con sus nombres en español
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
    "IRN": "Irán",
    "SRB": "Serbia",
    "SYR": "Siria",
    "GRC": "Grecia",
    "TUR": "Turquía",
    "IND": "India",
    "ZAF": "Sudáfrica",
    "EGY": "Egipto",
    "ALB": "Albania",
    "AND": "Andorra",
    "AUT": "Austria",
    "BEL": "Bélgica",
    "BIH": "Bosnia y Herzegovina",
    "BGR": "Bulgaria",
    "HRV": "Croacia",
    "CYP": "Chipre",
    "CZE": "Chequia",
    "DNK": "Dinamarca",
    "EST": "Estonia",
    "FIN": "Finlandia",
    "HUN": "Hungría",
    "ISL": "Islandia",
    "IRL": "Irlanda",
    "KOS": "Kosovo",
    "LVA": "Letonia",
    "LIE": "Liechtenstein",
    "LTU": "Lituania",
    "LUX": "Luxemburgo",
    "MLT": "Malta",
    "MDA": "Moldavia",
    "MCO": "Mónaco",
    "MNE": "Montenegro",
    "NLD": "Países Bajos",
    "MKD": "Macedonia del Norte",
    "NOR": "Noruega",
    "POL": "Polonia",
    "PRT": "Portugal",
    "ROU": "Rumania",
    "SMR": "San Marino",
    "SVK": "Eslovaquia",
    "SVN": "Eslovenia",
    "SWE": "Suecia",
    "CHE": "Suiza",
    "UKR": "Ucrania",
    "VAT": "Ciudad del Vaticano",
    "AGO": "Angola",
    "DZA": "Argelia",
    "BEN": "Benín",
    "BWA": "Botsuana",
    "BFA": "Burkina Faso",
    "BDI": "Burundi",
    "CPV": "Cabo Verde",
    "CMR": "Camerún",
    "TCD": "Chad",
    "COM": "Comoras",
    "COD": "República Democrática del Congo",
    "DJI": "Yibuti",
    "GNQ": "Guinea Ecuatorial",
    "ERI": "Eritrea",
    "SWZ": "Esuatini",
    "ETH": "Etiopía",
    "GAB": "Gabón",
    "GMB": "Gambia",
    "GHA": "Ghana",
    "GIN": "Guinea",
    "GNB": "Guinea-Bisáu",
    "KEN": "Kenia",
    "LSO": "Lesoto",
    "LBR": "Liberia",
    "LBY": "Libia",
    "MDG": "Madagascar",
    "MWI": "Malaui",
    "MLI": "Malí",
    "MRT": "Mauritania",
    "MUS": "Mauricio",
    "MAR": "Marruecos",
    "MOZ": "Mozambique",
    "NAM": "Namibia",
    "NER": "Níger",
    "NGA": "Nigeria",
    "COG": "República del Congo",
    "RWA": "Ruanda",
    "STP": "Santo Tomé y Príncipe",
    "SEN": "Senegal",
    "SYC": "Seychelles",
    "SLE": "Sierra Leona",
    "SOM": "Somalia",
    "SSD": "Sudán del Sur",
    "SDN": "Sudán",
    "TZA": "Tanzania",
    "TGO": "Togo",
    "TUN": "Túnez",
    "UGA": "Uganda",
    "ZMB": "Zambia",
    "ZWE": "Zimbabue",
    "AFG": "Afganistán",
    "ARM": "Armenia",
    "AZE": "Azerbaiyán",
    "BHR": "Baréin",
    "BGD": "Bangladés",
    "BTN": "Bután",
    "BRN": "Brunéi",
    "KHM": "Camboya",
    "LKA": "Sri Lanka",
    "SGP": "Singapur",
    "GEO": "Georgia",
    "IDN": "Indonesia",
    "IRQ": "Irak",
    "ISR": "Israel",
    "JPN": "Japón",
    "JOR": "Jordania",
    "KAZ": "Kazajistán",
    "KWT": "Kuwait",
    "KGZ": "Kirguistán",
    "LAO": "Laos",
    "LBN": "Líbano",
    "MYS": "Malasia",
    "MDV": "Maldivas",
    "MNG": "Mongolia",
    "MMR": "Birmania",
    "NPL": "Nepal",
    "OMN": "Omán",
    "PAK": "Pakistán",
    "PHL": "Filipinas",
    "QAT": "Catar",
    "KOR": "Corea del Sur",
    "SAU": "Arabia Saudita",
    "THA": "Tailandia",
    "TLS": "Timor Oriental",
    "TJK": "Tayikistán",
    "TKM": "Turkmenistán",
    "ARE": "Emiratos Árabes Unidos",
    "UZB": "Uzbekistán",
    "VNM": "Vietnam",
    "YEM": "Yemen",
    "AUS": "Australia",
    "FJI": "Fiyi",
    "KIR": "Kiribati",
    "MHL": "Islas Marshall",
    "FSM": "Micronesia",
    "NRU": "Nauru",
    "NZL": "Nueva Zelanda",
    "PLW": "Palaos",
    "PNG": "Papúa Nueva Guinea",
    "WSM": "Samoa",
    "SLB": "Islas Salomón",
    "TON": "Tonga",
    "TUV": "Tuvalu",
    "VUT": "Vanuatu",
    "ATA": "Antártida",
    "ATG": "Antigua y Barbuda",
    "BHS": "Bahamas",
    "BRB": "Barbados",
    "DMA": "Dominica",
    "GRD": "Granada",
    "HTI": "Haití",
    "JAM": "Jamaica",
    "LCA": "Santa Lucía",
    "KNA": "San Cristóbal y Nieves",
    "VCT": "San Vicente y las Granadinas",
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
        hideInfoBox();
    });

svg.call(zoom);

const countryInfo = {
    "ARG": {
        "message": "Milei: «Ni Maduro se cree la estafa electoral que festeja»",
        "link": "https://www.elnacional.com/mundo/milei-ni-maduro-se-cree-la-estafa-electoral-que-festeja/"
    },
    "BRA": {
        "message": "Brasil pide al Centro Carter y la ONU investigar denuncias sobre elecciones en Venezuela",
        "link": "https://www.elnacional.com/mundo/brasil-pide-al-centro-carter-y-la-onu-investigar-denuncias-sobre-elecciones-en-venezuela/"
    },
    "CHL": {
        "message": "Chile confirma que el cuerpo diplomático venezolano dejará el país en las próximas horas",
        "link": "https://www.elnacional.com/venezuela/chile-confirma-que-el-cuerpo-diplomatico-venezolano-dejara-el-pais-en-las-proximas-horas/"
    },
    "COL": {
        "message": "Petro habló con Boric sobre Venezuela: «Que la democracia prevalezca en América»",
        "link": "https://www.elnacional.com/venezuela/petro-hablo-con-boric-sobre-venezuela-que-la-democracia-prevalezca-en-america/"
    },
    "CRI": {
        "message": "Ocho países latinoamericanos piden un conteo de votos transparente en Venezuela",
        "link": "https://www.elnacional.com/venezuela/politica/ocho-paises-latinoamericanos-piden-un-conteo-de-votos-transparente-en-venezuela/"
    },
    "DEU": {
        "message": "El G7 insta al gobierno de Maduro a publicar los resultados electorales con total transparencia",
        "link": "https://www.elnacional.com/mundo/el-g7-insta-al-gobierno-de-maduro-a-publicar-los-resultados-electorales-con-total-transparencia/"
    },
    "ECU": {
        "message": "El gobierno de Ecuador rechaza la falta de transparencia en las elecciones de Venezuela",
        "link": "https://www.elnacional.com/venezuela/politica/el-gobierno-de-ecuador-rechaza-la-falta-de-transparencia-en-las-elecciones-de-venezuela/"
    },
    "ESP": {
        "message": "España sigue de cerca la situación en Venezuela e insiste en pedir total transparencia",
        "link": "https://www.elnacional.com/venezuela/espana-sigue-de-cerca-la-situacion-en-venezuela-insiste-en-pedir-total-transparencia/"
    },
    "USA": {
        "message": "Estados Unidos reconoce como válidos los resultados que dan ganador a Edmundo González y anuncia su disposición de apoyar una transición",
        "link": "https://www.elnacional.com/venezuela/estados-unidos-reconoce-como-validos-los-resultados-que-dan-ganador-a-edmundo-gonzalez-y-anuncia-su-disposicion-de-apoyar-una-transicion/"
    },
    "PAN": {
        "message": "En suspenso las relaciones bilaterales: Panamá retira a sus diplomáticos de Venezuela",
        "link": "https://www.elnacional.com/mundo/en-suspenso-las-relaciones-bilaterales-panama-retira-a-sus-diplomaticos-de-venezuela/"
    },
    "PER": {
        "message": "Perú reconoce a Edmundo González como presidente",
        "link": "https://www.elnacional.com/mundo/peru-reconoce-edmundo-gonzalez-como-presidente/"
    },
    "DOM": {
        "message": "República Dominicana confía en retomar contactos con Venezuela en el futuro",
        "link": "https://www.elnacional.com/mundo/republica-dominicana-confia-en-retomar-contactos-con-venezuela-en-el-futuro/"
    },
    "URY": {
        "message": "Lacalle Pou sobre Venezuela: «Si no mostrás documentos, algo raro hay»",
        "link": "https://www.elnacional.com/mundo/lacalle-pou-sobre-venezuela-si-no-mostras-documentos-algo-raro-hay/"
    },
    "JPN": {
        "message": "El G7 insta al gobierno de Maduro a publicar los resultados electorales con total transparencia",
        "link": "https://www.elnacional.com/mundo/el-g7-insta-al-gobierno-de-maduro-a-publicar-los-resultados-electorales-con-total-transparencia/"
    },
    "ITA": {
        "message": "El G7 insta al gobierno de Maduro a publicar los resultados electorales con total transparencia",
        "link": "https://www.elnacional.com/mundo/el-g7-insta-al-gobierno-de-maduro-a-publicar-los-resultados-electorales-con-total-transparencia/"
    },
    "GBR": {
        "message": "El G7 insta al gobierno de Maduro a publicar los resultados electorales con total transparencia",
        "link": "https://www.elnacional.com/mundo/el-g7-insta-al-gobierno-de-maduro-a-publicar-los-resultados-electorales-con-total-transparencia/"
    }
};

// Function to detect if the user is on a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function hideInfoBox() {
    d3.select("#info-box").style("display", "none");
}

fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .then(response => response.json())
    .then(data => {
        g.selectAll("path")
            .data(data.features)
            .enter().append("path")
            .attr("class", d => {
                if (d.id === "VEN") return "country white";
                if (["NOR", "BRA", "COL", "GUY", "MEX", "JPN", "BEL", "PRT", "GBR", "AUS", "ARG", "CHL", "PER", "PAN", "CRI", "GTM", "DOM", "USA", "ECU", "PRY", "URY", "SLV", "FRA", "DEU", "ITA", "ESP", "GRC", "CAN"].includes(d.id)) return "country blue";
                if (["BOL", "CUB", "TUR", "NIC", "HND", "RUS", "BLR", "CHN", "IRN", "SRB", "SYR"].includes(d.id)) return "country red";
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
                        info.message = "Rechazan los resultados emitidos por el CNE";
                    } else if (countryClass === "red") {
                        info.message = "Apoyan los resultados emitidos por el CNE y la autoproclamación de Maduro como Presidente";
                    } else {
                        info.message = "No ha emitido opinión sobre los resultados";
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

                // Hide the info box after 5 seconds
                setTimeout(hideInfoBox, 5000);
            });

        // Hide the info box if the map is moved or clicked elsewhere
        svg.on("click", function(event) {
            // Only hide the info box if the click is outside the path or link
            if (event.target.tagName !== 'path' && event.target.tagName !== 'A') hideInfoBox();
        });
    })
    .catch(error => {
        console.error('Error fetching the GeoJSON data:', error);
    });