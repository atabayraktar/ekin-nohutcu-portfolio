export default function WiggleText({ text, className = "" }) {
  return (
    <span className={`wiggle ${className}`}>
      {Array.from(text).map((ch, i) => (
        <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
      ))}
    </span>
  );
}
