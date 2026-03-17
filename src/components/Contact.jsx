import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { me, linkedIn, email } from "../assets";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-[#5C320E] p-8 rounded-2xl relative"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <img
          src={me}
          alt="Photo of Mark Woodward"
          className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
        />

        <div className="text-white font-medium space-y-1 mt-6">
          <div className="text-[18px] sm:text-[24px]">
            Mark Woodward
          </div>

          <div className="flex items-center gap-2 text-[14px] sm:text-[16px]">
            <img
              src={email}
              alt="Email icon"
              className="w-5 h-3.5"
            />
            markwoodward810@hotmail.co.uk
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/mark-woodward-a28708195"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#126dc3] text-[14px] sm:text-[16px] hover:underline font-semibold"
            >
              <img
                src={linkedIn}
                alt="LinkedIn logo"
                className="w-5 h-5"
              />
              Connect with me on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");