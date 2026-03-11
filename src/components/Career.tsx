import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer</h4>
                <h5>Etsy</h5>
              </div>
              <h3>2018 - 2021</h3>
            </div>
            <p>
              Developed high-throughput backend services using Java 8, Spring Boot,
              and Hibernate for e-commerce systems. Built microservices-based platforms
              and integrated Apache Kafka for real-time order and payment updates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Java Developer</h4>
                <h5>DMI</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Designed RESTful APIs and microservices for healthcare and financial systems.
              Built scalable UIs using React and Angular 13. Implemented data streaming 
              with Kafka and automated deployments using CI/CD pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Java Developer</h4>
                <h5>Molina Healthcare</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting microservices using Java 21, Spring Boot, and GraphQL.
              Delivering secure web apps using Angular 17. Implementing AWS cloud
              deployments and managing event-driven workflows with Kafka and Kubernetes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
