import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const contactDetails = [
  {
    label: 'Email',
    value: 'mokurumialpha@gmail.com',
    href: 'mailto:mokurumialpha@gmail.com',
  },
  {
    label: 'Phone',
    value: '+254 727 569 769',
    href: 'tel:+254727569769',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/alpha-mokurumi',
    href: 'https://www.linkedin.com/in/alpha-mokurumi',
  },
  {
    label: 'GitHub',
    value: 'github.com/Mokurumi',
    href: 'https://github.com/Mokurumi',
  },
];

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <p className="mt-6 text-taupe text-[18px] max-w-3xl leading-[30px] font-poppins">
          Have a project in mind or an opportunity to discuss? Reach me
          directly on any of the channels below — I will get back to you as
          soon as possible.
        </p>

        <ul className="mt-10 flex flex-col gap-6 font-poppins">
          {contactDetails.map((detail) => (
            <li key={detail.label} className="flex flex-col">
              <span className="text-timberWolf font-medium mb-2">
                {detail.label}
              </span>
              <a
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="bg-eerieBlack py-4 px-6 text-taupe
                hover:text-timberWolf rounded-lg font-medium break-all
                transition duration-[0.2s] ease-in-out">
                {detail.value}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
