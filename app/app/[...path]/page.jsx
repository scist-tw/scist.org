import { notFound } from "next/navigation";
import links from "../../public/data/links/data.json";
import RedirectAfterDelay from "./RedirectAfterDelay";

export function generateStaticParams() {
  return links.flatMap((entry) =>
    (entry.paths || [])
      .filter(Boolean)
      .map((pathValue) => ({ path: pathValue.split("/") })),
  );
}

export default async function LinkRedirectPage({ params }) {
  const joinedPath = (params.path || []).join("/");

  const matchedLink = links.find((entry) =>
    (entry.paths || []).includes(joinedPath),
  );

  if (!matchedLink) {
    notFound();
  }

  return (
    <RedirectAfterDelay
      targetUrl={matchedLink.url}
      targetTitle={matchedLink.title}
    />
  );
}
