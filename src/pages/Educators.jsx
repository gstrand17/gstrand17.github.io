import  "./About.css";
import dayanara from "../assets/mrsdee.jpeg";

export function Educators() {
  return (
      <div className="about-row">
          <div className="about-col">
              <h2 className="about-h2">Programming</h2>
              <div className="about-card">
                  <div className="about-card-row">
                      <img className="about-card-pic" src={dayanara} alt="Dayanara Altamirano-Rochford"/>
                      <div className="about-card-col">
                          <h1 className="about-card-h1"> Mrs. Dayanara Altamirano-Rochford</h1>
                          <h2 className="about-card-h2">Computer Science teacher at Calvary Christian Academy</h2>
                          <p className="about-card-p"> created this webpage primarily to showcase my skills,
                              achievements, and
                              experiences as a software developer. As a senior at the University of Florida, I chose to
                              join the
                              International Scholars Program and expanded this site into an e-portfolio to reflect on my
                              global
                              learning. Through language study and intercultural experiences, I’ve learned how much
                              understanding
                              different cultures strengthens my ability to connect and communicate with others. Although
                              the ISP
                              program is only one part of my journey, th </p>
                      </div>
                  </div>
              </div>
              <div className="about-card">
                  <div className="about-card-row">
                      <img className="about-card-pic" src={dayanara} alt="Dayanara Altamirano-Rochford"/>
                      <div className="about-card-col">
                          <h1 className="about-card-h1">Professor name</h1>
                          <h2 className="about-card-h2">Computer Science professor at the Unversity of Florida</h2>
                          <p className="about-card-p"> blah blah blah </p>
                      </div>
                  </div>
              </div>
              <div className="about-card">
                  <div className="about-card-row">
                      <img className="about-card-pic" src={dayanara} alt="Dayanara Altamirano-Rochford"/>
                      <div className="about-card-col">
                          <h1 className="about-card-h1">Rachel Duffy</h1>
                          <h2 className="about-card-h2">Senior Mentor at Citi Bank</h2>
                          <p className="about-card-p">blah blah blah </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="about-col">
              <h2 className="about-h2">Spanish</h2>
              <div className="about-card">
                  <div className="about-card-row">
                      <img className="about-card-pic" src={dayanara} alt="Dayanara Altamirano-Rochford"/>
                      <div className="about-card-col">
                          <h1 className="about-card-h1">Mrs. Virginia Brandecker</h1>
                          <h2 className="about-card-h2">Spanish 1 teacher at Calvary Christian Academy</h2>
                          <p className="about-card-p">blah blah blah </p>
                      </div>
                  </div>
              </div>
              <div className="about-card">
                  <div className="about-card-row">
                      <img className="about-card-pic" src={dayanara} alt="Dayanara Altamirano-Rochford"/>
                      <div className="about-card-col">
                          <h1 className="about-card-h1">Señora Franca Erlich</h1>
                          <h2 className="about-card-h2">Spanish Tutor</h2>
                          <p className="about-card-p">blah blah blah </p>
                      </div>
                  </div>
              </div>
              <div className="about-card">
                  <div className="about-card-row">
                      <img className="about-card-pic" src={dayanara} alt="Dayanara Altamirano-Rochford"/>
                      <div className="about-card-col">
                          <h1 className="about-card-h1">Señor Antonio Lopez Sajid</h1>
                          <h2 className="about-card-h2">Spanish professor at University of Florida</h2>
                          <p className="about-card-p">blah blah blah </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}