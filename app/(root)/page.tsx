import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default async function Home({searchParams}: {searchParams: {query: string}}) {

  const query = (await searchParams.query);

  return (
    <section className="pink_container">
      <h1 className="heading">pitch your startup connect with entrepreneurs</h1>
      <p className="sub-heading !max-w-3xl">
        Y Combinator is a startup accelerator that provides funding,
        resources, and support to early-stage startups.
      </p>  
      <SearchForm query={query} />
    </section>
  );
}
