import Header from "../../components/Header/Header";
import CaseStudyDetails from "./components/CaseStudyDetails.tsx/CaseStudyDetails";
import CaseStudyFooter from "./components/CaseStudyFooter/CaseStudyFooter";
import CaseStudyHero from "./components/CaseStudyHero/CaseStudyHero";
import CreateStoreWizard from "./components/CreateStoreWizard/CreateStoreWizard";
import ProductSystem from "./components/ProductSystem.tsx/ProductSystem";

export default function CaseStudy() {
    return (
        <>
        <Header />
        <CaseStudyHero />
        <ProductSystem />
        <CreateStoreWizard />
        <CaseStudyDetails />\
        <CaseStudyFooter />
        </>

    )
}