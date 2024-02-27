"use client";

import { Paragraph } from "@/components/layout/paragraph";
import { StickyHeader } from "@/components/layout/sticky-header";
import { StickySidebar } from "@/components/layout/sticky-sidebar";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Layout() {
  let users = useQuery(api.myFunctions.getUsers);
  let messages = useQuery(api.myFunctions.getMessagesForUser, {userId: users![0]._id})

  messages?.sort( (a, b) => {
    return b._creationTime - a._creationTime
  });

  return (
    <>
      <StickyHeader className="p-2">Dev Talk</StickyHeader>
      <div className="container grid grid-cols-[240px_minmax(0,1fr)]">
        <StickySidebar className="top-[calc(2.5rem+1px)] h-[calc(100vh-(2.5rem+1px))]">
          <div>Sticky sidebar</div>
        </StickySidebar>
        <main className="min-h-[calc(100vh-(2.5rem+1px))]">
          {messages?.map(({_id, message }) => (
            <Paragraph key={_id}>
              { message }
            </Paragraph>
          ))}
        </main>
      </div>
    </>
  );
}
