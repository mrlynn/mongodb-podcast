function Subscribe() {
  return (
    <div className="subscribe">
      <ul className="subscribe__links">
        <li className="subscribe__link subscribe__link--itunes">
          <a
            target="_blank"
            href="https://podcasts.apple.com/us/podcast/the-mongodb-podcast/id1500452446"
            rel="noopener noreferrer"
          >
            iTunes
          </a>
        </li>
        <li className="subscribe__link subscribe__link--iheartradio">
          <a
            target="_blank"
            href="https://www.iheart.com/podcast/269-the-mongodb-podcast-60738931/"
            rel="noopener noreferrer"
          >
            iHeartRadio
          </a>
        </li>
        <li className="subscribe__link subscribe__link--google">
          <a
            target="_blank"
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9tb25nb2RiLmxpYnN5bi5jb20vcnNz?sa=X&ved=2ahUKEwitjI-8wqLsAhX5gnIEHc7mAaUQ4aUDegQIARAC&hl=en"
            rel="noopener noreferrer"
          >
            Google Podcast
          </a>
        </li>
        <li className="subscribe__link subscribe__link--spotify">
          <a
            target="_blank"
            href="https://open.spotify.com/show/0ibUtrJG4JVgwfvB2MXMSb"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
        </li>
        <li className="subscribe__link subscribe__link--rss">
          <a
            target="_blank"
            href="https://mongodb.libsyn.com/rss"
            rel="noopener noreferrer"
          >
            RSS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Subscribe;
