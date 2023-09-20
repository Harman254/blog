import Postcard from "./components/Postcard";

export default function Home() {
  return (
    <main className="grid items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
    </main>
  );
}
