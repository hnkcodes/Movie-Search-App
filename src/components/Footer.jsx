export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="https://www.themoviedb.org/">
          <img src="/tmdb-logo.svg" alt="tmdb logo" className="tmdb-logo"></img>
        </a>
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </footer>
    </>
  );
}
