import "./Details.css";

function Details() {
  return (
    <div className="JobOfferDetailsInfo">
      <div className="container">
        <div className="box">
          <div className="job-status">New</div>
          <h4>Wunder</h4>
          <h1>Sales Assistant / Salesperson full-time and part-time</h1>
          <div className="date-location">
            <div className="job-date">
              <i className="fa-solid fa-calendar"></i>
              <p>12/6/2024</p>
            </div>
            <div className="job-Stuff">
              <i className="fa-solid fa-user"></i>
              <p>5 Openings</p>
            </div>
            <div className="job-location">
              <i className="fa-solid fa-location-dot"></i>
              <p>Address: Industrial Zone Third Settlement,</p>
            </div>
          </div>
          <div className="job-description">
            <h1>Job Description</h1>
            <p>
              As a Mega Trainee in our Sales Department, you will take part in
              valuable learning experiences including structured on job training
              during which you will work closely with Sales professionals in our
              different Sales functions:
            </p>
            <ul>
              <li>Traditional Trade</li>
              <li>Modern Trade</li>
              <li>E-Commerce</li>
              <li>Distributors</li>
              <li>Trade Marketing</li>
              <li>Sales Planning & Analysis</li>
            </ul>
          </div>
          <div className="job-requirements">
            <h1>Requirements</h1>
            <ul className="Check">
              <li>Education: Bachelor Degree</li>
              <li>Excellent interpersonal & communication skills</li>
              <li>Major: Business Administration, Management or Commerce</li>
              <li>Proactive & has a sense of ownership</li>
              <li>Experience: 0-2 years of experience</li>
              <li>Strong analytical skills</li>
              <li>
                Previous extracurricular activities (volunteering or student
                activities)
              </li>
            </ul>
          </div>
          <div className="job-offer">
            <h1>What we offer:</h1>
            <ul>
              <li> Fast track career development</li>
              <li>One to one coaching</li>
              <li>Hands-on experience with cross functional teams</li>
            </ul>

            <p>
              Upon completion of the Mega Graduate Program, top performers land
              on the relevant job within our sales department.
            </p>
          </div>
          <div className="job-apply">
            <input type="email" placeholder="Email" />
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
