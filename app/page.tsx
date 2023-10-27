import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          className={styles.img}
          src="/p_royvail.jpeg"
          alt="Platycerium roy vail"
          width='400'
          height='400'
          priority
        />
      </div>
      <div>
        <h2>platycertified.</h2>
        <a href="mailto:contact@platycertified.com" rel="noopener noreferrer">
          coming soon.
        </a>
      </div>
    </main>
  )
}
