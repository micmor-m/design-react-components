import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Speakers from "../src/components/Speakers/Speakers";
import Footer from "../src/components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerSearchBar />
      <Speakers />
      <Footer />
    </div>
  );
}
