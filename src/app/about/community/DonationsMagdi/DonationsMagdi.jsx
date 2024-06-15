import Image from "next/image";
import "./DonationsMagdi.css";

function DonationsMagdi() {
  return (
    <div className="DonationsMagdi">
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <Image
            src="/CommunityAbout.png"
            alt="DonationsMagdi"
            width={400}
            height={400}
          />
        </div>
        <div className="right">
          <div className="colabiration" data-aos="fade-down">
            <Image src="/wunder.png" width={280} height={110} alt="wunder" />
            <div className="spritter"></div>
            <Image
              src="/MagdiYacoub.png"
              width={150}
              height={100}
              alt="MagdiYacoub"
            />
          </div>
          <div className="info">
            <h1 data-aos="fade-down">
              Donations and giving back to the community
            </h1>
            <span data-aos="fade-down">
              1 EGP for every big size chocolate bar (75g).
            </span>
            <p data-aos="fade-down">
              Lorem ipsum dolor sit amet consectetur. Commodo in eu semper
              cursus nulla auctor. Malesuada lorem gravida odio sed at potenti
              cras. Velit nunc orci vel adipiscing in arcu vestibulum tristique
              sed. Gravida in parturient nulla cursus ullamcorper et nisl
              porttitor. Tellus lorem libero quis maecenas maecenas in. Elit et
              lorem habitasse faucibus velit ut diam consectetur. Tempor ac
              aenean libero odio non nunc aenean elit sed. In ut bibendum amet
              placerat. In nunc viverra lectus at nisi mi mattis nascetur in.
              Proin tellus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DonationsMagdi;
