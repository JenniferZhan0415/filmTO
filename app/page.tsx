import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Hero from "@/components/hero/hero";
import Cinema from "@/components/cinema/cinema";
import CinemaMap from "@/components/cinema/cinema-map";
import Festival from "@/components/festival/festival";
import Recommendation from "@/components/recommendation/recommendation";
import Article from "@/components/article/article";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-full">
      <Hero />
      {/* <Cinema />
      <Festival />
      <Recommendation />
      <Article /> */}
    </section>
  );
}
