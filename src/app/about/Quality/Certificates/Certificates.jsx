import Image from "next/image";
import "./Certificates.css";

function Certificates() {
  return (
    <div className="Certificates">
      <div className="container" data-aos="fade-down">
        <div className="CertificatesLogo">
          <Image
            src="/Quality/certificates.png"
            width={60}
            height={100}
            alt="certificates"
          />
          <h1>Quality certificates</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Commodo in eu semper cursus
          nulla auctor. Malesuada lorem gravida odio sed at potenti cras. Velit
          nunc orci vel adipiscing in arcu vestibulum tristique sed. Gravida in
          parturient nulla cursus ullamcorper et nisl porttitor. Tellus lorem
          libero quis maecenas maecenas in. Elit et lorem habitasse faucibus
          velit ut diam consectetur. Tempor ac aenean libero odio non nunc
          aenean elit sed. In ut bibendum amet placerat. In nunc viverra lectus
          at nisi mi mattis nascetur in. Proin tellus
        </p>
        <div className="Certificates-container">
          <Image
            src="/Quality/Food.png"
            width={200}
            height={212}
            alt="certificates"
          />
          <Image
            src="/Quality/FSSC.png"
            width={300}
            height={271}
            alt="certificates"
          />
        </div>
      </div>
    </div>
  );
}
export default Certificates;
