import './index.css';

export default function App() {
  const projects = [
    {
      title: 'Geatherlyy',
      description: 'A modern, minimal, role-based web platform for managing university clubs, activities, quizzes, and member engagement..',
    },
    {
      title: 'SkillX',
      description: 'It is a web-based system that enables students to offer skills,They can teach and request skills they want to learn. Instead of monetary payment, the system uses a credit-based exchange mechanism.',
    },
    {
      title: 'Zaplink backend Contribution',
      description: 'Fix File Size Limits in Multer Uploads (Security/DoS Risk)',
    },
  ];

  return (
    <div className="page">
      <header className="hero">
        <h1>Aryan D Patel</h1>
        <p className="intro">
          I build simple, clean, and responsive websites with React.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </header>

      <main className="content">
        <section className="section about">
          <h2>About</h2>
          <p>
         I'm a Computer Engineering student passionate about software development, databases, and Machine Learning. I have hands-on experience developing web applications and worked as a Database Developer on a Club Management Website, designing relational databases and implementing SQL-based backend solutions. I'm always eager to learn new technologies and build practical, real-world applications.
          </p>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <h2>Projects</h2>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
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
              GitHub: <a href="https://github.com/AryanPatelD">
                https://github.com/AryanPatelD
              </a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/aryan-patel-3250a032a/">
                https://www.linkedin.com/in/aryan-patel
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}