import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url);

  if (error) {
    <>Error...</>;
  }
  if (isLoading) {
    <>Is Loading...</>;
  }

  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
