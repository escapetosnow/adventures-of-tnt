import Head from 'next/head';
import Link from 'next/link';
import posts from '../../data/posts';

export async function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug) || null;
  return { props: { post } };
}

export default function PostPage({ post }) {
  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <Head>
        <title>{post.title} · Adventures of TNT</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Link href="/" className="back-link">
        ← Back to all posts
      </Link>

      <div className="post-header">
        <div className="post-header-meta">
          {post.location} &nbsp;·&nbsp; {post.date}
        </div>
        <h1>{post.title}</h1>
      </div>

      {post.coverImage && (
        <div className="post-cover">
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}

      <div className="post-content">
        {post.content.map((block, i) => {
          if (block.type === 'text') {
            return <p key={i}>{block.value}</p>;
          }
          if (block.type === 'image') {
            return (
              <div key={i} className="post-image-block">
                <img src={block.src} alt={block.caption || ''} />
                {block.caption && (
                  <p className="post-image-caption">{block.caption}</p>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
