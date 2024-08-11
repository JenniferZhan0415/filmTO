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
import CinemaCard from "./cinema-card";
// import MapCard from "./cinema-map-card";
import CinemaList from "./cinema-list";
import FormattedCinema from "@/types/cinema";

import useSWR from "swr";
import fetcher from "@/utils/fetcher";

export default function Cinema() {
  const position = { lat: 43.64, lng: -79.39 };
  const [open, setOpen] = useState(false);
  const [point, setPoint] = useState(position);
  const { data: cinemas } = useSWR<FormattedCinema[]>("/api/cinemas", {
    fetcher,
  });
  const showMap = false;

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
                {showMap && cinemas && (
                  <APIProvider
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
                  </APIProvider>
                )}
              </CardBody>
            </Card>
            <CinemaList />
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

type Props = {
  points: FormattedCinema[];
  setOpen: () => void;
  setPoint: (point: FormattedCinema) => void;
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
