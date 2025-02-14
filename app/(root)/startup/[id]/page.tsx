import React, { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import MarkdownIt from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

const md = new MarkdownIt();

export const experimental_ppr = true;

export default async function StartupPage({ params }: { params: { id: string } }) {
  const id = (await params).id;

  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post.pitch);

  console.log(post);
  console.log(post.author);
  console.log(post.title);
  return (
    <>
    <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
    </section>
    <section className="section_container">
        <img src={post.image} alt={post.title} className="w-full h-auto rounded-xl" />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
            <div className="flex-between gap-5">
                <Link href={`/user/${post.author?._id}`} className="flex gap-2 items-center mb-3">
                    <Image src={post.author?.image} alt={post.author?.name} width={64} height={64} className="rounded-full drop-shadow-lg" />

                    <div>
                        <p className="text-20-medium">{post.author?.name}</p>
                        <p className="text-16-regular !text-black-300">{post.author?.bio}</p>
                    </div>
                </Link>

                <p className="category-tag">{post.category}</p>
            </div>

            <h3 className="text-30-bold">Pitch Details</h3>

            {parsedContent ? (
                <article className="prose max-w-4xl font-work-sans" dangerouslySetInnerHTML={{ __html: parsedContent }} />
            ) : (
                <p className="no-result">No details provided</p>
            )}
            
        </div>

        <hr className="divider" />

        {/* TODO: Related Startups */}

        <Suspense fallback={<Skeleton className="view_skeleton"/>}>
            <View postId={id} />
        </Suspense> 
    </section>
    </>
  );
}
