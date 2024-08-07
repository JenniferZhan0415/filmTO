"use client";
import { title } from "@/components/primitives";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import cinemas from "@/data/cinema";
import CinemaCard from "./cinema-card";

export default function CinemaMap() {
  const position = { lat: 43.64, lng: -79.39 };
  const [open, setOpen] = useState(false);
  const [point, setPoint] = useState(position);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ""}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          zoom={12}
          center={position}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
        >
          <Markers
            points={cinemas}
            setOpen={() => setOpen(true)}
            setPoint={setPoint}
          />
          {open && (
            <InfoWindow position={point} onCloseClick={() => setOpen(false)}>
              {/* <p>TIFF Lightbox</p> */}
              <CinemaCard />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

type Point = google.maps.LatLngLiteral & { key: string };
type Props = {
  points: Point[];
  setOpen: () => void;
  setPoint: (point: Point) => void;
};

const Markers = ({ points, setOpen, setPoint }: Props) => {
  return (
    <>
      {points?.map((point) => (
        <>
          <AdvancedMarker
            position={point}
            key={point.key}
            onClick={() => {
              setOpen();
              setPoint(point);
            }}
          >
            <span className="text-lg">🎥</span>
          </AdvancedMarker>
        </>
      ))}
    </>
  );
};
