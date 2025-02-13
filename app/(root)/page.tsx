import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams}: {searchParams: {query: string}}) {

  const query = (await searchParams).query;

  const params = {search: query || null};

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  console.log(JSON.stringify(posts, null, 2));

  return (
    <main>
      <section className="pink_container">
        <h1 className="heading">pitch your startup connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Y Combinator is a startup accelerator that provides funding,
          resources, and support to early-stage startups.
        </p>  
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )
        }
        </ul>
      </section>

      <SanityLive />
    </main>
  );
}
