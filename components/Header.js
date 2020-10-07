import Link from 'next/link';
import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/">
        <a aria-label="MongoDB Podcast">
          <img className="header__logo" src="/static/logo.png" alt="MongoDB" />
        </a>
      </Link>
    </div>
    <div className="header__right">
      <div className="title">
         <h1>The MongoDB Podcast</h1>
        <h2 className="tagline">Software, Data and All Things MongoDB</h2>
        <a
          target="_blank"
          href="https://community.mongodb.com"
          className="title__potluck-btn"
          rel="noopener noreferrer"
        >
          Visit us in the Community Forum →
        </a>
      </div>
      <div className="people">
        <div className="person">
          <img
            src="https://avatars.githubusercontent.com/mrlynn?size=200"
            alt="Michael Lynn"
            className="avatar"
          />
          <h3>Michael Lynn</h3>
          <a
            target="_blank"
            href="https://twitter.com/mlynn"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @mlynn
          </a>
          <p>
            Developer Advocate, Engineer, Speaker, Fitgeek{' '}
          </p>
        </div>

        <div className="person">
          <img
            src="https://avatars.githubusercontent.com/nraboy?size=200"
            alt="Nic Raboy"
            className="avatar"
            rel="noopener noreferrer"
          />
          <h3>Nic Raboy</h3>
          <a
            target="_blank"
            href="https://twitter.com/nraboy"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @nraboy
          </a>
          <p>
            Developer Advocate, Creator of{' '}
            <a href="https://thepolyglotdeveloper.com/">The Polyglot Developer</a>
          </p>
        </div>
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
