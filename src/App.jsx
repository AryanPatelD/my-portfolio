import { NavLink, Outlet } from 'react-router-dom';
import './index.css';
import { useAppState } from './state/useAppState';

export default function App() {
  const { featuredProjectTitle } = useAppState();

  return (
    <div className="page">
      <header className="hero">
        <h1>Aryan D Patel</h1>
        <p className="intro">
          I build simple, clean, and responsive websites with React.
        </p>

        <div className="buttons">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `btn ${isActive ? 'primary' : 'secondary'}`
            }
          >
            View Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `btn ${isActive ? 'primary' : 'secondary'}`
            }
          >
            Contact Me
          </NavLink>
        </div>

        <div className="route-links" aria-label="Primary navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `route-link ${isActive ? 'route-link-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `route-link ${isActive ? 'route-link-active' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `route-link ${isActive ? 'route-link-active' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>

        <p className="featured-inline">
          Featured Project: <strong>{featuredProjectTitle}</strong>
        </p>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}