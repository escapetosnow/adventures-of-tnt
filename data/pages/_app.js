import '../styles/globals.css';
import Link from 'next/link';

function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="site-logo">
          adventures<span>.</span>of tnt
        </Link>
        <nav className="site-nav">
          <Link href="/">All Posts</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        © {new Date().getFullYear()} · Adventures of TNT
      </footer>
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
