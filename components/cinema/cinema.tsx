"use client";
import { Card, CardBody, Link } from "@nextui-org/react";
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
// import MapCard from "./cinema-map-card";
import CinemaList from "./cinema-list";

export default function Cinema() {
  const position = { lat: 43.64, lng: -79.39 };
  const [open, setOpen] = useState(false);
  const [point, setPoint] = useState(position);

  return (
    <section className="w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center ">
          <h1 className={`${title({ color: "blue" })} pb-4`}>Legacy Cinemas</h1>
          <h4 className="text-default-500 mb-6">
            Click to explore the art house and independent cinemas
          </h4>
          <div className="flex flex-row w-full">
            <Card
              isBlurred
              className=" w-full border-none bg-background/60 dark:bg-default-100/50 "
              shadow="sm"
            >
              <CardBody className="flex items-center justify-center w-full  ">
                {/* <APIProvider
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ""}
                >
                  <div style={{ height: "60vh", width: "100%" }}>
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
                        <InfoWindow
                          position={point}
                          onCloseClick={() => setOpen(false)}
                        >
                          <CinemaCard />
                        </InfoWindow>
                      )}
                    </Map>
                  </div>
                </APIProvider> */}
              </CardBody>
            </Card>
            <CinemaList />
          </div>
        </CardBody>
      </Card>
    </section>
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
      ))}
    </>
  );
};
