import Head from 'next/head';
import Link from 'next/link';
import posts from '../data/posts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adventures of TNT</title>
        <meta name="description" content="A travel photo journal" />
      </Head>

      <section className="home-hero">
        <h1>
          Photographs &amp; stories<br />
          from <em>the road</em>
        </h1>
        <p>{posts.length} {posts.length === 1 ? 'journey' : 'journeys'} documented so far</p>
      </section>

      <div className="post-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="post-card">
            {post.coverImage ? (
              <img
                className="post-card-image"
                src={post.coverImage}
                alt={post.title}
              />
            ) : (
              <div className="post-card-image-placeholder">
                {post.location}
              </div>
            )}
            <div className="post-card-body">
              <div className="post-card-meta">
                {post.location} &nbsp;·&nbsp; {post.date}
              </div>
              <h2 className="post-card-title">{post.title}</h2>
              <p className="post-card-excerpt">{post.excerpt}</p>
              <span className="post-card-link">Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
