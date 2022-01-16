import styles from "../styles/Coing.module.css";
import Image from "next/image";

const Footer = () => {
  return (

      <footer className={styles.footer}>
          <a
              href="https://makegood.co.il"
              target="_blank"
              rel="noopener noreferrer"
          >
              Powered by{' '}
              <span className={styles.logo}>
            <Image src="/makegood.svg" alt="makeGood Logo" width={50} height={30} />
          </span>
          </a>
      </footer>
  );
}
 
export default Footer;