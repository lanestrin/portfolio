import Header from "../../components/Header/Header";
import CaseStudyFooter from "./components/CaseStudyFooter/CaseStudyFooter";
import CaseStudyHero from "./components/CaseStudyHero/CaseStudyHero";
import CreateStoreWizard from "./components/CreateStoreWizard/CreateStoreWizard";

export default function CaseStudy() {
	return (
		<>
			<Header />
			<CaseStudyHero />
			<CreateStoreWizard />
			<CaseStudyFooter />
		</>
	);
}
