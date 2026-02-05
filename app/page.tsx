import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { HomepageContent } from "@/components/homepage-content"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SharedHeader />
      <HomepageContent />
      <SharedFooter />
    </div>
  )
}
