/* eslint-disable */

export const displayMap = (locations) => {

  mapboxgl.accessToken = 'pk.eyJ1IjoibGF1bmRlcmV4NjE5IiwiYSI6ImNrOTM5OXV3MDAzN3QzbG1xZm9maDZzdWcifQ.mTc4KV-AYb8CtIK94xQPiQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    // center: [-103.348288, 20.662867],
    // zoom: 10
  });
  
  const bounds = new mapboxgl.LngLatBounds();
  
  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    // Add a marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);
    // entend map bound to include current location
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds);
}