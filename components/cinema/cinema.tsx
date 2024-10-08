"use client";
import type { Cinema } from "@/types/cinema";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useSWR from "swr";

import CinemaList from "./cinema-list";
import CinemaCard from "./cinema-card";

import FormattedCinema from "@/types/cinema";
import { title, Color } from "@/components/primitives";
import fetcher from "@/utils/fetcher";

export default function Cinema() {
  const { theme } = useTheme();
  const position = { lat: 43.64, lng: -79.39 };
  const [open, setOpen] = useState(false);
  const [point, setPoint] = useState(position);
  const { data: cinemas } = useSWR<FormattedCinema[]>("/api/cinemas", {
    fetcher,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // const showMap = false;
  const showMap = true;

  const handleOpenCinemaCard = (key: string) => {
    const cinema = cinemas?.find((c: FormattedCinema) => c.key === key);

    if (!cinema) return;
    setPoint(cinema);
    setOpen(true);
  };

  return (
    <section className="w-full ">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center ">
          <h1 className={`${title({ color: theme as Color })} pb-4`}>
            Legacy Cinemas
          </h1>
          <h4 className="text-default-500 mb-6">
            Click to explore and save the art house cinemas to your dashboard
          </h4>
          <div className="flex flex-col sm:flex-row w-full sm:h-[60vh] ">
            <Card
              isBlurred
              className="w-full border-none bg-background/60 dark:bg-default-100/50 "
              shadow="sm"
            >
              <CardBody className="flex items-center justify-center w-full  ">
                {showMap && cinemas && (
                  <APIProvider
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ""}
                  >
                    <div style={{ height: "60vh", width: "100%" }}>
                      <Map
                        center={position}
                        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
                        zoom={12}
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
                            <CinemaCard cinema={point as any as Cinema} />
                          </InfoWindow>
                        )}
                      </Map>
                    </div>
                  </APIProvider>
                )}
              </CardBody>
            </Card>
            <CinemaList handleOpenCinemaCard={handleOpenCinemaCard} />
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
          key={point.key}
          position={point}
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
