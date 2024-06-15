import Image from "next/image";
import "./TimeLine.css";

function TimeLine() {
  return (
    <div className="timeline">
      <div className="container">
        <div className="timeline-content">
          <div className="left timeimg-container">
            <h1 className="OverLay">Our story</h1>
            <Image
              width={300}
              height={200}
              alt="TimeLine 1"
              src="/TimeLine1.png"
            />
          </div>

          <div className="right">
            <div className="year">2014</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel eget nam turpis
                lectus laoreet amet. Ut feugiat non amet arcu bibendum. Enim
                tempor arcu vitae sollicitudin donec nisl. Morbi ut sed est
                imperdiet diam tristique at vestibulum. Augue neque sapien
                congue eget laoreet donec ultrices quis. Placerat sed risus
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="left">
            <div className="year">2016</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel eget nam turpis
                lectus laoreet amet. Ut feugiat non amet arcu bibendum. Enim
                tempor arcu vitae sollicitudin donec nisl. Morbi ut sed est
                imperdiet diam tristique at vestibulum. Augue neque sapien
                congue eget laoreet donec ultrices quis. Placerat sed risus
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="right">
            <div className="year">2018</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel eget nam turpis
                lectus laoreet amet. Ut feugiat non amet arcu bibendum. Enim
                tempor arcu vitae sollicitudin donec nisl. Morbi ut sed est
                imperdiet diam tristique at vestibulum. Augue neque sapien
                congue eget laoreet donec ultrices quis. Placerat sed risus
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="left">
            <div className="year">2020</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel eget nam turpis
                lectus laoreet amet. Ut feugiat non amet arcu bibendum. Enim
                tempor arcu vitae sollicitudin donec nisl. Morbi ut sed est
                imperdiet diam tristique at vestibulum. Augue neque sapien
                congue eget laoreet donec ultrices quis. Placerat sed risus
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="right">
            <div className="year">2022</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel eget nam turpis
                lectus laoreet amet. Ut feugiat non amet arcu bibendum. Enim
                tempor arcu vitae sollicitudin donec nisl. Morbi ut sed est
                imperdiet diam tristique at vestibulum. Augue neque sapien
                congue eget laoreet donec ultrices quis. Placerat sed risus
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="left">
            <div className="year">2024</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel eget nam turpis
                lectus laoreet amet. Ut feugiat non amet arcu bibendum. Enim
                tempor arcu vitae sollicitudin donec nisl. Morbi ut sed est
                imperdiet diam tristique at vestibulum. Augue neque sapien
                congue eget laoreet donec ultrices quis. Placerat sed risus
              </p>
            </div>
          </div>
          <div className="right">
            <div className="timeimg-container">
              <Image
                width={300}
                height={200}
                alt="TimeLine 2"
                src="/TimeLine2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimeLine;
