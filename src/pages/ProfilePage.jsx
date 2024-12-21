import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";
import "./ProfilePage.css";

// Initial profile data
const initialProfileData = {
  name: "Prajwal R",
  headline: "Software Engineer | Web Developer",
  location: "Bangalore",
  skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  projects: [
    { title: "Portfolio Website", description: "A personal portfolio website showcasing projects and skills.", link: "#" },
    { title: "E-commerce App", description: "A fully functional e-commerce app built with React and Node.js.", link: "#" },
  ],
  courses: [
    { title: "Web Development Bootcamp", institution: "Udemy", description: "Learn full-stack web development." },
    { title: "React Native Development", institution: "Coursera", description: "Master mobile app development with React Native." },
  ],
  contact: {
    email: "e@example.com",
    phone: "123-456-7890",
    portfolio: "https://rev.dev",
  },
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfileData);
  const [newSkill, setNewSkill] = useState("");

  const handleEdit = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill.trim()] });
      setNewSkill("");
    }
  };

  return (
    <Container fluid className="profile-page" style={{ backgroundColor: "black", color: "white" }}>
      <Row>
        <Col md={4} sm={12} className="text-center text-md-left">
          <div className="profile-photo">
            <img src="https://via.placeholder.com/150" alt="profile" className="profile-img" />
          </div>
        </Col>
        <Col md={8} sm={12}>
          <div className="cover-photo">
            <img src="https://via.placeholder.com/1500x400" alt="cover" className="cover-img" />
          </div>
          <Card className="card-section">
            <Card.Header className="card-header">
              Basic Information
              <Button variant="outline-light" className="edit-btn">Edit</Button>
            </Card.Header>
            <Card.Body className="card-body">
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.name}
                    onChange={(e) => handleEdit("name", e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Headline</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.headline}
                    onChange={(e) => handleEdit("headline", e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.location}
                    onChange={(e) => handleEdit("location", e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          <Card className="card-section">
            <Card.Header className="card-header">
              Skills
              <Button variant="outline-light" className="edit-btn">Edit</Button>
            </Card.Header>
            <Card.Body className="card-body">
              <ul>
                {profile.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Add a new skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <Button onClick={handleAddSkill} variant="primary">Add</Button>
              </InputGroup>
            </Card.Body>
          </Card>
          <Card className="card-section">
            <Card.Header className="card-header">
              Projects
              <Button variant="outline-light" className="edit-btn">Edit</Button>
            </Card.Header>
            <Card.Body className="card-body">
              {profile.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              ))}
            </Card.Body>
          </Card>
          <Card className="card-section">
            <Card.Header className="card-header">
              Courses
              <Button variant="outline-light" className="edit-btn">Edit</Button>
            </Card.Header>
            <Card.Body className="card-body">
              {profile.courses.map((course, index) => (
                <div key={index} className="course-item">
                  <h5>{course.title}</h5>
                  <p>{course.description}</p>
                  <p><strong>{course.institution}</strong></p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;


