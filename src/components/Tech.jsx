import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 px-16'>
      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          className="w-28 h-28"
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;