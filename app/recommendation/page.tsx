import { subtitle, title } from "@/components/primitives";
import Films from "@/components/recommendation/films";

export default function RecommendationPage() {
  return (
    <>
      <h1 className={title()}>Film Recommendations</h1>
      <h2 className={subtitle()}>
        Pick your facorite films from this list of <br />
        TIFF People&apos;s Choice Awards
      </h2>
      <Films />
    </>
  );
}
