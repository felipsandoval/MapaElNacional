const width = document.getElementById('map').clientWidth,
      height = document.getElementById('map').clientHeight;

const svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .scale(400)
    .center([-70, -15])
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

const g = svg.append("g");

const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoom);

fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .then(response => response.json())
    .then(data => {
        const latinAmerica = data.features.filter(d => {
            const id = d.id;
            return ["USA", "MEX", "GTM", "BLZ", "SLV", "HND", "NIC", "CRI", "PAN", "COL", "VEN", "GUY", "SUR", "ECU", "PER", "BRA", "BOL", "PRY", "CHL", "ARG", "URY", "CUB", "DOM"].includes(id);
        });

        g.selectAll("path")
            .data(latinAmerica)
            .enter().append("path")
            .attr("class", d => {
                if (["ARG", "CHL", "COL", "PER", "PAN", "CRI", "GTM", "DOM", "USA"].includes(d.id)) return "country blue";
                if (["VEN", "BOL", "CUB", "NIC"].includes(d.id)) return "country red";
                if (["BRA", "MEX"].includes(d.id)) return "country yellow";
                return "country grey";
            })
            .attr("d", path)
            .on("click", function(event, d) {
                const infoBox = d3.select("#info-box");
                infoBox
                    .style("display", "block")
                    .html(`<strong>${d.properties.name}</strong><br>CONTENIDO AQUÍ, LINK AQUÍ`);
                
                const [x, y] = d3.pointer(event);
                infoBox
                    .style("left", (x + 10) + "px")
                    .style("top", (y + 10) + "px");
            });
    })
    .catch(error => {
        console.error('Error fetching the GeoJSON data:', error);
    });