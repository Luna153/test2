'use client';
// import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import styles from "./page.module.css";

const basePath = process.env.NODE_ENV === 'production' ? '/test2' : '';



export default function Home() {

  const { t, i18n } = useTranslation();
  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // 不改網址
  };

  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <h1>{t('greeting')}</h1>
        <p>{t('description')}</p>

        <div style={{ marginTop: '20px' }}>
          <button onClick={() => switchLanguage('en')}>English</button>
          <button onClick={() => switchLanguage('zh')} style={{ marginLeft: '10px' }}>
            中文
          </button>
        </div>
        <Image
          className={styles.logo}
          src={`${basePath}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src={`${basePath}/vercel.svg`}
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/window.svg`}
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}





