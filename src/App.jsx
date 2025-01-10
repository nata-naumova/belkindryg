import {
  Advantages,
  Articles,
  Faq,
  First,
  Footer,
  Header,
  RainbowElement,
  Services,
  SocialsWidget,
  Testimonials,
  WorkSteps,
} from "./components";

function App() {
  return (
    <>
      {/* <RainbowElement /> */}
      <Header />
      <main>
        <First />
        <Advantages />
        <WorkSteps />
        <Services />
        <Articles />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <SocialsWidget />
    </>
  );
}

export default App;
