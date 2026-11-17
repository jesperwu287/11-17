
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Admonition from '@theme/Admonition';
 
const PAPER_URL = '/paper/zombie';
 
const takeaways = [
  'Kilgore Trout became a pioneer in the field of mental health. He advanced his theories disguised as science-fiction. \
 He died in 1981, almost twenty years after he made Dwayne Hoover so sick. He was by then recognized as a great artist and scientist. \
 The American Academy of Arts and Sciences caused a monument to be erected over his ashes. Carved in its face was a quotation from \
 his last novel, his two-hundred-and-ninth novel, which was unfinished when he died. The monument looked like this:'
];
 
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.page}>
        <Link to={PAPER_URL} className={styles.titleLink}>
          <h1 className={styles.title}>
            Defending our Home: Preparing Isla Vista for the Incoming Zombie Hordes
          </h1>
        </Link>
 
        <div className="byline">
          <span><strong>Kenneth Smith</strong><br/>UC Santa Barbara</span>
          <span><strong>J. M. Forester</strong><br/>Zombie Biology Institute</span>
          <span><strong>Jim McHiggleteeth</strong><br/>Zombie Biology Institute</span>
        </div><br />
        <Admonition type="note" title="Key Takeaways">
          <ul>
            {takeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Admonition>
 
        <Link to={PAPER_URL} className={styles.readMore}>
          Read the full working paper →
        </Link>
      </main>
    </Layout>
  );
}
