import "./ProjectCards.css";
import github from "../assets/github.png";

export function CodingProjects() {
  return (
      <div className="cards-container">

          <div className="project-card">
              <div className="card-header">
                  <h2 className="card-title">TVH</h2>
                  <a href="https://github.com/ananya0817/tvh-app" target="_blank" rel="noopener noreferrer">
                      <img src={github} alt="GitHub" className="github-icon"/>
                  </a>
              </div>

              <div className="divider"/>

              <p className="card-description">
                  Inspired by Letterboxd, TVH is a app for rating and reviewing your favorite TV shows! It opens with a 
                  sign in/up screen, courtesy of Supabase user authentication. Then, a dashboard is lined with 
                  recommendations based on genres and what&#39;s trending. Selecting any show opens a page with details 
                  from the TVMB API. There, a user can rate the show, add to watch list, favorite a show, mark the show 
                  as completed, rate/review a season, and rate/comment/complete an episode. Next, the search tab filters 
                  through the extensive list of shows based on a query or selected genre. The watchlist tab displays all 
                  the shows that users intend to watch or are in progress of watching. The reviews tab shows all of the 
                  user&#39;s season and show reviews. Finally, the profile screen displays user statistics (amount of
                  reviews, comments, and shows completed), their favorite shows, and a summary of their recent reviews.
              </p>

              <div className="tools-row">
                  <span className="tools-label">Languages & Tools:</span>
                  <div className="tools-list">
                      <span className="tool-pill">React Native</span>
                      <span className="tool-pill">TypeScript</span>
                      <span className="tool-pill">CSS</span>
                      <span className="tool-pill">Expo</span>
                      <span className="tool-pill">Supabase</span>
                  </div>
              </div>
          </div>

          <div className="project-card">
              <div className="card-header">
                  <h2 className="card-title">Divine Slice</h2>
                  <a href="https://github.com/carmen-cruzarana/dv-pizza" target="_blank" rel="noopener noreferrer">
                      <img src={github} alt="GitHub" className="github-icon"/>
                  </a>
              </div>

              <div className="divider"/>

              <p className="card-description">
                  For the 2025 WiNGhacks Hackathon, my team was inspired by real incidents where domestic violence
                  victims called 911 and pretended to order pizza to signal for assistance. We set out to create a
                  digital alternative where a victim would securely and discretely reach out for help through a pizza
                  restaurant façade. We proudly accepted the WiNG Award for project that best addresses an issue
                  related to women or gender non-conforming/marginalized communities.
              </p>

              <div className="tools-row">
                  <span className="tools-label">Languages & Tools:</span>
                  <div className="tools-list">
                      <span className="tool-pill">JavaScript</span>
                      <span className="tool-pill">HTML</span>
                      <span className="tool-pill">CSS</span>
                      <span className="tool-pill">React</span>
                      <span className="tool-pill">Vite</span>
                  </div>
              </div>
          </div>

          <div className="project-card">
              <div className="card-header">
                  <h2 className="card-title">RateMyClub</h2>
                  <a href="https://github.com/TreeOfJuly/ratemyclub" target="_blank" rel="noopener noreferrer">
                      <img src={github} alt="GitHub" className="github-icon"/>
                  </a>
              </div>

              <div className="divider"/>

              <p className="card-description">
                  For our semester full-stack project for Intro to Software Engineering, my team and I created a website
                  inspired RateMyProfessor. Our website instead focused on rating student
                  organizations, such as engineering clubs, cultural unions, and performing arts groups. The site
                  purpose was
                  to create a resource for incoming freshmen who are looking for a place to fit in. RateMyClub creates
                  transparency in club culture by allowing members to honestly reflect on their experience, commitment,
                  and takeaways.
              </p>

              <div className="tools-row">
                  <span className="tools-label">Languages & Tools:</span>
                  <div className="tools-list">
                      <span className="tool-pill">Python</span>
                      <span className="tool-pill">JavaScript</span>
                      <span className="tool-pill">HTML</span>
                      <span className="tool-pill">CSS</span>
                      <span className="tool-pill">SQLite</span>
                  </div>
              </div>
          </div>


      </div>
  );
}