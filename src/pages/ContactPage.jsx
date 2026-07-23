import { useTrackRouteVisit } from '../hooks/useTrackRouteVisit';

export default function ContactPage() {
  useTrackRouteVisit('contact');

  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className="contact-list">
        <p>Contact No: +91 94998 72372</p>
        <p>Email: aryanpatel26.ce@email.com</p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/AryanPatelD">
            https://github.com/AryanPatelD
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/aryan-patel-3250a032a/">
            https://www.linkedin.com/in/aryan-patel
          </a>
        </p>
      </div>
    </section>
  );
}
