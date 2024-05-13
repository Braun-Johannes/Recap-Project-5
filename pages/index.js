import ArtPieces from "@/components/ArtPieces/ArtPieces";
import useSWR from "swr";

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
