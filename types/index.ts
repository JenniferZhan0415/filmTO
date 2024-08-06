import { SVGProps } from "react";

export * from "./config";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
