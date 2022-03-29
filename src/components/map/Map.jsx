import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import data from "../../data/data.json";


function Map() {
    return (
        <MapContainer center={[52.8560259, 6.9925414]} zoom={11} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {data.map((el) => (
                <Marker key={el.id} position={[el.address.lat, el.address.lng]}>
                    <Popup>{el.information.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;