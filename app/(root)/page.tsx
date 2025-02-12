import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {searchParams: {query: string}}) {

  const query = (await searchParams.query);

  const posts = [{
    _createdAt: new Date(),
    views: 100,
    author: { _id: 1, name: 'John Doe'},
    _id:1,
    description: 'This is a description',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb',
    category: 'Robots',
    title: 'We Robots'
  }]

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
    </main>
  );
}
