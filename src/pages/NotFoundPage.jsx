import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Page Not Found</h2>
        <p>The page you requested does not exist.</p>
      </div>
      <Link className="btn primary" to="/">
        Back to Home
      </Link>
    </section>
  );
}
