import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>Hi, I&apos;m 🤖</h1>
        <p> As a web developer, I&apos;m passionate about...</p>
      </header>
      <section className="post-list">
        <h2>POSTS</h2>
        <ul>
          <li>
            <Link href="/post/example-slug-of-blog-post">
              Example slug of blog post
            </Link>
            <span>2023/10/4</span>
            <div className="excerpt">This is optional</div>
          </li>
          <li>
            <Link href="/post/example-slug-of-blog-post2">
              Example slug of blog post2
            </Link>
            <span>2023/3/9</span>
          </li>
        </ul>
      </section>
      <footer>
        <p>© 2023</p>
      </footer>
    </>
  );
}
