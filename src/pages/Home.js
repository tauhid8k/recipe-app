import Popular from "../components/Popular";
import Regular from "../components/Regular";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Regular />
    </motion.div>
  );
};

export default Home;
