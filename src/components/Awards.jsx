import { awards } from "../constants";
import { motion } from "framer-motion";
import { marquee } from "../utils/motion";

const Awards = () => {
  const duplicated = [...awards, ...awards];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-96 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-96 bg-gradient-to-l from-primary to-transparent z-10" />

      <motion.div
        className="flex gap-62 w-max"
        {...marquee(40)}
        >
        {duplicated.map((awards, i) => (
            <img
            key={i}
            src={awards.icon}
            alt={awards.name}
            className="h-16 w-auto flex-shrink-0"
            />
        ))}
        </motion.div>
    </div>
  );
};

export default Awards;