import FilmRecommendation from "@/components/recommendation/recommendation";

export default function RecommendationPage() {
  return <FilmRecommendation />;
}

// "use client";

// import { subtitle, title } from "@/components/primitives";
// import Films from "@/components/recommendation/films";
// import { useTheme } from "next-themes";
// import { useState, useEffect } from "react";

// export default function RecommendationPage() {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return (
//     <>
//       <h1 className={`${title({ color: theme })}`}>Film Recommendations</h1>
//       <h2 className="text-default-500 mb-8">
//         Pick your facorite films from this list of <br />
//         TIFF People&apos;s Choice Awards
//       </h2>
//       <Films />
//     </>
//   );
// }
