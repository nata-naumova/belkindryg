import {
  MoveRight,
  PackageCheck,
  Settings,
  Sparkles,
  Truck,
} from "lucide-react";
import {
  Advantages,
  Articles,
  Carousel,
  Contacts,
  Faq,
  Footer,
  Header,
  Services,
  SocialsWidget,
  Tape,
  Testimonials,
  WorkSteps,
} from "./components";
import { FAQ } from "./constants";
import Title from "./components/ui/Title";

import heroBg from "./images/fon-top1.png";
import ButtonCustom from "./components/ButtonCustom";
import First from "./components/First";

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-full min-h-[432px] w-full min-w-[768px] -translate-x-1/2 -translate-y-1/2">
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)",
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none absolute -inset-[10px] overflow-hidden text-white blur-[15px] invert dark:text-black dark:invert-0 opacity-30 dark:opacity-10 custom-rainbow">
                <div className="animate-god-rays absolute h-full w-[300%] mix-blend-difference custom-rainbow-value"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customBg" />
      <Header />
      <main className="">
        <First />
        <Advantages />
        <Services />
        <WorkSteps />
        <Articles />
        <Testimonials />
        <Faq />

        {/* <Carousel /> */}
        {/* <Tape /> */}

      </main>
      <Footer />
      <SocialsWidget />
    </>
  );
}

export default App;
