import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { videos } from "../data/videos";

export default function VideoGrid({ year }) {
  const filtered = videos.filter((v) => v.year === year);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-fuchsia fw-bold">{year}</h2>
      <Row className="g-4">
        {filtered.map((video) => (
          <Col key={video.id} xs={12} md={6} lg={4}>
            <VideoCard {...video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
