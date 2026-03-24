import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#5C320E] rounded-[20px] py-5 px-6 md:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 sm:w-20 sm:h-20 object-contain'
        />

        <h3 className='text-white text-[18px] md:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        viewport={{ once: true, amount: 0.25 }}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a mechanical/mechatronics engineer with 3+ years of industry experience designing electromechanical systems.
        I love tackling complex engineering challenges and delivering safe, high-performing products through cross-functional collaboration, rapid prototyping, rigorous testing and clear documentation.
        I have served as the lead technical engineer on mutliple projects at Ocado Technology, and I have made tangible contributions to cutting-edge products including warehouse robots, material handling stations and radio systems for robots.
        My core skills include CAD, DfM/DfA (machining, sheet metal, 3D printing), Hardware Integration, Test Automation, User Interface Design, Simulation, Data Analysis, Leadership and Collaboration.
        If you're looking for someone who can blend creativity with technical depth, I'd love to help take your projects to the next level.
      </motion.p>

      <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");