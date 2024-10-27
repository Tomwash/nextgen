import Header from "../components/Header";
import Pricing from "../components/Pricing";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div>
      <Header />
      <Pricing />
    </div>
  );
}
