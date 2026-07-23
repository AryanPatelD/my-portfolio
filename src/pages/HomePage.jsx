import { useAppDispatch, useAppState } from '../state/useAppState';
import { useTrackRouteVisit } from '../hooks/useTrackRouteVisit';

export default function HomePage() {
  const { projects, featuredProjectTitle } = useAppState();
  const dispatch = useAppDispatch();

  useTrackRouteVisit('home');

  return (
    <>
      <section className="section about">
        <h2>About</h2>
        <p>
          I&apos;m a Computer Engineering student passionate about software development, databases, and Machine Learning. I have hands-on experience developing web applications and worked as a Database Developer on a Club Management Website, designing relational databases and implementing SQL-based backend solutions. I&apos;m always eager to learn new technologies and build practical, real-world applications.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <h2>Projects</h2>
          <p>Click a card to set the featured project.</p>
        </div>

        <div className="grid">
          {projects.map((project) => {
            const isFeatured = featuredProjectTitle === project.title;

            return (
              <article
                className={`card ${isFeatured ? 'featured' : ''}`}
                key={project.title}
                onClick={() =>
                  dispatch({
                    type: 'SET_FEATURED_PROJECT',
                    payload: project.title,
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    dispatch({
                      type: 'SET_FEATURED_PROJECT',
                      payload: project.title,
                    });
                  }
                }}
              >
                <h3>
                  {project.title}{' '}
                  {isFeatured && <span className="badge">Featured</span>}
                </h3>
                <p>{project.description}</p>
              </article>
            );
          })}
        </div>
      </section>

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
    </>
  );
}
