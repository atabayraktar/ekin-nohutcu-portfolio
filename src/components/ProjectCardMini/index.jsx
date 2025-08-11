export default function ProjectsCardMini({ project, onClick }) {
  return (
    <div className="projectc-card-mini" onClick={onClick}>
      <img
        className="projectc-card-mini-img"
        src={project.image}
        alt={project.title + " image"}
      />
      <div className="projectc-card-mini-tech">{project.usedTech}</div>
      <div className="projectc-card-mini-title">{project.title}</div>
    </div>
  );
}
