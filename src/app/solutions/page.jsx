
import SolutionsBanner from "../../../components/solutions/solutionBanner";
import SolutionWhatWeDo from "../../../components/solutions/solutionWhatWeDo";
import ContactUsForm from "../../../components/contactUsForm";
import CustomLoader from "../../../components/ui/customLoader";

const Solutions = () => {

  return (
    <>
      {/* <CustomLoader /> */}
      <SolutionsBanner />
      <SolutionWhatWeDo />
      <ContactUsForm />
    </>
  );
};

export default Solutions;
