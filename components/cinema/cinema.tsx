"use client";

import { Card, CardBody } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Cinema() {
  const position = { lat: 43.64, lng: -79.39 };
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-6">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 "
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center ">
          <h1 className={title()}>Toronto Art-House Cinemas</h1>
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ""}>
            <div style={{ height: "40vh", width: "100%" }}>
              <Map
                zoom={14}
                center={position}
                mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
              >
                <AdvancedMarker
                  position={position}
                  onClick={() => setOpen(true)}
                >
                  <Pin
                    background={"lightblue"}
                    borderColor={"grey"}
                    glyphColor={"skyblue"}
                  ></Pin>
                </AdvancedMarker>

                {open && (
                  <InfoWindow
                    position={position}
                    onCloseClick={() => setOpen(false)}
                  >
                    <p>TIFF Lightbox</p>
                  </InfoWindow>
                )}
              </Map>
            </div>
          </APIProvider>
        </CardBody>
      </Card>
    </section>
  );
}
