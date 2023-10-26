export default function Post({ params }: { params: { slug: string } }) {
  return (
    <div className="article">
      <div className="header">
        <h1 className="title">{params.slug}</h1>
        <p className="date">2023/10/4</p>
      </div>
      <div className="content">
        <article>
          <p>Do not go gentle into that good night,</p>
          <p>Old age should burn and rave at close of day</p>
          <h2>Komidashi</h2>
          <p>Rage, rage against the dying of the light.</p>
        </article>
      </div>
    </div>
  );
}
