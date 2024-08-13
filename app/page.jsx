import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Ayush Sharma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            As a software developer, I have a strong foundation in designing and implementing robust, 
            scalable applications, with a deep understanding of various programming languages and development frameworks.
            </p>
        </div>
        {/* photo */}
        <div>
          
        </div>
      </div>
    </div>
  </section>
  );
};

export default Home;