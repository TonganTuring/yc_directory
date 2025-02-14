import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ postId }: { postId: string }) => {
    try {
        const result = await client
            .withConfig({useCdn: false})
            .fetch(STARTUPS_VIEWS_QUERY, {id: postId});

        console.log("View query result:", result, "for postId:", postId);

        if (!result) {
            console.log("No document found for id:", postId);
            return null;
        }

        return (
            <div className="view-container">
                <div className="absolute -top-2 -right-2">
                    <Ping />
                </div>
                <p className="view-text">
                    {result.views || 0} Views
                </p>
            </div>
        );
    } catch (error) {
        console.error("Error fetching views:", error);
        return null;
    }
}

export default View;