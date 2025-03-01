import Navbar from "./components/navbar/navbar"
import HeroSection from "./components/hero-section/hero-section"
import ProjectManagement from "./components/project-management/project-management"
import UseAsExtension from "./components/use-as-extension/use-as-extension"
import CustomiseItToYourNeeds from "./components/customise-it-to-your-needs/customise-it-to-your-needs"
import YouWorkEveryWhereYouAre from "./components/your-work-everywhere-you-are/your-work-everywhere-you-are"
import OurSponsors from "./components/Our-sponsors/Our-sponsors"
import Footer from "./components/footer/footer"






export default function Home(){
    return(
        <div className="overflow-x-hidden">

<Navbar />
<HeroSection />
<ProjectManagement />
<UseAsExtension />
<CustomiseItToYourNeeds />
<YouWorkEveryWhereYouAre />
<OurSponsors />
<Footer />


        </div>
    )
}