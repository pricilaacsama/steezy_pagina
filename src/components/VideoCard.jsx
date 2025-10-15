import Card from "react-bootstrap/Card";

//función que convierte cualquier tipo de link de YouTube a formato embed
const convertToEmbed = (url) => {
  if (!url) return "";
  return url
    .replace("https://youtu.be/", "https://www.youtube.com/embed/")
    .replace("https://youtube.com/watch?v=", "https://www.youtube.com/embed/")
    .replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
    .split("&")[0]; // elimina parámetros como ?si= o &feature
};

export default function VideoCard({ title, url }) {
  const embedUrl = convertToEmbed(url);

  return (
    <Card className="video-card shadow-sm border-0 rounded-4">
      <div className="ratio ratio-16x9">
        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          className="rounded-top-4"
        ></iframe>
      </div>
      <Card.Body>
        <Card.Title className="text-center fw-semibold">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}