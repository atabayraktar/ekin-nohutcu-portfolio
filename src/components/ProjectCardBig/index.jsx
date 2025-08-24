export default function ProjectCardBig({ project }) {
  return (
    <div className="project-card-big">
      <div className="project-card-big-container">
        <div className="project-card-big-title">{project.title}</div>
        <img
          className="project-card-big-image"
          src={project.image}
          alt="project img"
        />
        <div className="project-card-big-info-container">
          <div className="project-card-big-info-description">
            {project.description}
          </div>
          <div className="project-card-big-info-used-tech">
            <div
              className="project-card-big-info-used-tech-info"
              style={{ color: "#ae85f2" }}
            >
              Used Tech:
            </div>
            <div className="project-card-big-info-used-tech-info">
              {project.usedTech}
            </div>
          </div>
          <div className="project-card-big-info-links">
            {project.youtubeLink !== "-" && (
              <div className="project-card-big-info-links-container">
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/icons/youtube.png" alt="YouTube icon" />
                </a>
              </div>
            )}
            {project.appStoreLink !== "-" && (
              <div className="project-card-big-info-links-container">
                <a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/icons/appstore.png" alt="App Store icon" />
                </a>
              </div>
            )}
            {project.link !== "-" && (
              <div className="project-card-big-info-links-container">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/icons/link.png" alt="Link icon" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
