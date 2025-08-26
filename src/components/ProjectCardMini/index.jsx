export default function ProjectsCardMini({ project, onClick }) {
  return (
    <div className="project-card-mini projects-page-card" onClick={onClick}>
      <img
        className="project-card-mini-img"
        src={project.image}
        alt={project.title + " image"}
      />
      <div className="project-card-mini-tech">{project.usedTech}</div>
      <div className="project-card-mini-title">{project.title}</div>
    </div>
  );
}
