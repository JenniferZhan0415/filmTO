import React from "react";
import { Link } from "@nextui-org/react";

export default function FestivalCalender() {
  return (
    <section className="mb-4">
      <div className="flex gap-2 flex-wrap ">
        <Link isBlock showAnchorIcon href="#" color="foreground">
          Foreground
        </Link>
        <Link isBlock showAnchorIcon href="#" color="primary">
          Primary
        </Link>
        <Link isBlock showAnchorIcon href="#" color="secondary">
          Secondary
        </Link>
        <Link isBlock showAnchorIcon href="#" color="success">
          Success
        </Link>
        <Link isBlock showAnchorIcon href="#" color="warning">
          Warning
        </Link>
        <Link isBlock showAnchorIcon href="#" color="danger">
          Danger
        </Link>
      </div>
      <div className="flex gap-2">
        <Link isBlock showAnchorIcon href="#" color="foreground">
          Foreground
        </Link>
        <Link isBlock showAnchorIcon href="#" color="primary">
          Primary
        </Link>
        <Link isBlock showAnchorIcon href="#" color="secondary">
          Secondary
        </Link>
        <Link isBlock showAnchorIcon href="#" color="success">
          Success
        </Link>
        <Link isBlock showAnchorIcon href="#" color="warning">
          Warning
        </Link>
        <Link isBlock showAnchorIcon href="#" color="danger">
          Danger
        </Link>
      </div>
    </section>
  );
}
