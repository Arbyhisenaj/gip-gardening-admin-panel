'use client'
import { useEffect, useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import marker from './assets/marker.svg'
import 'mapbox-gl/dist/mapbox-gl.css';



let mapboxtoken = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN;

interface CustomerMapboxProps {
  postcode: string;
}

interface MapboxData {
  features: {
    center: [number, number];
  }[];
}

const CustomerMapbox: React.FC<CustomerMapboxProps> = ({ postcode }) => {
  const [mapboxData, setMapboxData] = useState<MapboxData | null>(null);

  const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${postcode}.json?access_token=${mapboxtoken}&autocomplete=true`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: MapboxData = await response.json();
        setMapboxData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <>
    <div className='-m-[1.5rem] rounded-r-lg overflow-hidden'>
      {mapboxData && mapboxData.features.length > 0 && (
        <Map
          mapboxAccessToken={mapboxtoken}
          initialViewState={{
            longitude: mapboxData.features[0].center[0],
            latitude: mapboxData.features[0].center[1],
            zoom: 14,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker longitude={mapboxData.features[0].center[0]} latitude={mapboxData.features[0].center[1]} anchor="bottom">
            <img src={marker.src} alt="Marker" />
          </Marker>
        </Map>
      )}
      </div>
    </>
  );
};

export default CustomerMapbox;
