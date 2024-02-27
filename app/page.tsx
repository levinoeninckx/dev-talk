import { Paragraph } from "@/components/layout/paragraph";
import { StickyHeader } from "@/components/layout/sticky-header";
import { StickySidebar } from "@/components/layout/sticky-sidebar";

export default function Layout() {
  return (
    <>
      <StickyHeader className="p-2">Dev Talk</StickyHeader>
      <div className="container grid grid-cols-[240px_minmax(0,1fr)]">
        <StickySidebar className="top-[calc(2.5rem+1px)] h-[calc(100vh-(2.5rem+1px))]">
          <div>Sticky sidebar</div>
        </StickySidebar>
        <main className="min-h-[calc(100vh-(2.5rem+1px))]">
          <Paragraph>Main content</Paragraph>
        </main>
      </div>
    </>
  );
}
