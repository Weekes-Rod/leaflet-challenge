# leaflet-challenge

# USGS Earthquake Visualization

The United States Geological Survey (USGS) collects vast amounts of data on earthquakes from around the world. This challenge focuses on visualizing earthquake data to better educate the public and government organizations on Earth's seismic activity.

## Before You Begin

1. **Create a new repository for this project called `leaflet-challenge`. Do not add this Challenge to an existing repository.**
   
2. **Clone the new repository to your computer:**

   ```sh
   git clone https://github.com/your-username/leaflet-challenge.git
   cd leaflet-challenge
   
3. Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: `Leaflet-Part-1` and `Leaflet-Part-2`.

4. Add all necessary HTML and JavaScript files for the Leaflet challenge.

5. Push the changes to GitHub.

## Part 1: Create the Earthquake Visualization

Your task is to visualize earthquake data from the USGS GeoJSON Feed. Follow these steps:

1. **Get your dataset:**
   - Visit the [USGS GeoJSON Feed page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and choose a dataset to visualize.
   - Select a dataset, such as "All Earthquakes from the Past 7 Days," to obtain a JSON representation of the data.

2. **Import and visualize the data:**
   - Use Leaflet to create a map that plots all earthquakes from your chosen dataset based on their latitude and longitude coordinates.
   - Customize the data markers to reflect earthquake magnitude (size) and depth (color).
   - Add popups to provide additional information about each earthquake when its marker is clicked.
   - Create a legend to provide context for the map data.

Your visualization should resemble the provided example map.

## Part 2: Gather and Plot More Data (Optional)

This part of the challenge involves gathering and plotting additional earthquake data. It's optional and does not earn extra points. Feel free to attempt it if you're interested in exploring more data.

**Resources:**
- [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
