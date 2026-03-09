export default function Avatar() {
  return (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src="/beatriz.jpg"
      alt="Beatriz Farias"
      style={{
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        objectFit: "cover"
      }}
    />
    </div>
  );
}