import { LanguageProvider } from '../src/contexts/LanguageContext';

// import '../styles/layout.css';

export default function App({ Component, pageProps, router }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} key={router.route} />
    </LanguageProvider>
  );
}