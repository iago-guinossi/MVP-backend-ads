import { Cover } from "@/components/Cover"
import { FeaturedTrail } from "@/components/FeaturedTrail/FeaturedTrail"
import { Footer } from "@/components/Footer/Footer"
import { NavBar } from "@/components/NavBar/NavBar"
import { SectionBio } from "@/components/SectionBio/SectionBio"
import { SectionEvent } from "@/components/SectionEvent/SectionEvent"
import { SectionWaterfall } from "@/components/SectionWaterfall/SectionWaterfall"

export function Home() {
  return (
    <>
      <NavBar />
      <Cover />
      <SectionBio/>
      <SectionEvent/>
      <FeaturedTrail/>
      <SectionWaterfall/>
      <Footer/>
    </>
  )
}