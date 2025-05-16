import './home.scss';
import Photo from '../../assets/photo.jpeg';

function Home() {
  return (
    <div className="home">
      <h1>Welcome</h1>
      <article>
        <section>
          <p>My name is Josef Staroba and I am a software designer/developer with over 25 years of professional experience. While I'm a jack of all trades, I find the most enjoyment in working with frontend technologies.</p>
          <p>On this site, you will find a small sampling of my work over the span of my career.</p>
        </section>
        <img src={Photo} alt="Josef Staroba" />
      </article>
    </div>
  );
}

export default Home;
