import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

export default async function StartupPage({ params }: { params: { id: string } }) {
  const id = (await params).id;

  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });

  if (!post) return notFound();

  console.log(post);
  console.log(post.author);
  console.log(post.title);
  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.pitch}</p>
    </>
  );
}
