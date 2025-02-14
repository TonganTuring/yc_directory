import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ postId }: { postId: string }) => {
    try {
        const result = await client
            .withConfig({useCdn: false})
            .fetch(STARTUPS_VIEWS_QUERY, {id: postId});

        console.log("View query result:", result, "for postId:", postId);

        // Update the view count directly
        await writeClient
            .patch(postId)
            .set({
                views: (result.views || 0) + 1
            })
            .commit();

        const viewCount = (result.views || 0) + 1;
        const viewText = viewCount === 1 ? 'View' : 'Views';

        return (
            <div className="view-container">
                <div className="absolute -top-2 -right-2">
                    <Ping />
                </div>
                <p className="view-text">
                    <span className="font-black">{viewCount} {viewText}</span>
                </p>
            </div>
        );
    } catch (error) {
        console.error("Error fetching views:", error);
        return null;
    }
}

export default View;