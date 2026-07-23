import { useAppDispatch, useAppState } from '../state/useAppState';
import { useTrackRouteVisit } from '../hooks/useTrackRouteVisit';

export default function ProjectsPage() {
  const { projects, featuredProjectTitle } = useAppState();
  const dispatch = useAppDispatch();

  useTrackRouteVisit('projects');

  return (
    <section className="section" id="projects">
      <div className="section-head">
        <h2>Projects</h2>
        <p>Pick a project and make it featured on Home page.</p>
      </div>

      <div className="grid">
        {projects.map((project) => {
          const isFeatured = featuredProjectTitle === project.title;

          return (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                className={`btn ${isFeatured ? 'secondary' : 'primary'}`}
                type="button"
                onClick={() =>
                  dispatch({
                    type: 'SET_FEATURED_PROJECT',
                    payload: project.title,
                  })
                }
              >
                {isFeatured ? 'Featured' : 'Set as Featured'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
