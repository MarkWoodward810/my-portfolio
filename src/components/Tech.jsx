import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 px-6 sm:px-12 md:px-16'>
      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          className="w-full max-w-[140px] mx-auto"
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;