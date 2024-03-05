import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience" style={{ paddingBottom: 50 }}>
      <VerticalTimeline lineColor="aliceblue">
        {/* ---------Moringa------ */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "aliceblue", color: "#111111" }}
          date={<span className="date-style">2023</span>}
          iconStyle={{ background: "orange", color: "aliceblue" }}
          icon={<IoSchoolSharp />}
        >
          <h3> Moringa School, Nairobi</h3>
          <p>Software Engineering </p>
        </VerticalTimelineElement>

        {/* ----------The Safari collection--------- */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "aliceblue", color: "#111111" }}
          date={<span className="date-style">2021 - 2023</span>}
          iconStyle={{ background: "#5c927b", color: "aliceblue" }}
          icon={<MdWork />}
        >
          <h3> The Safari collection, Nairobi</h3>
          <p>Junior Marketing Assistant </p>
        </VerticalTimelineElement>

        {/* ----------Contipartner-Silverstone Tyres-------- */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "aliceblue", color: "#111111" }}
          date={<span className="date-style">2020 </span>}
          iconStyle={{ background: "#5c927b", color: "aliceblue" }}
          icon={<MdWork />}
        >
          <h3> Silverstone tyres-Contipartner Retail Center , Nairobi</h3>
          <p>Customer Service/ Retail Center Assistant </p>
        </VerticalTimelineElement>

        {/* -------------Ramco Printing---------- */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "aliceblue", color: "#111111" }}
          date={<span className="date-style">2020</span>}
          iconStyle={{ background: "#5c927b", color: "aliceblue" }}
          icon={<MdWork />}
        >
          <h3> Ramco Printing, Nairobi</h3>
          <p>Customer Service </p>
        </VerticalTimelineElement>

        {/* -----------University -USIU---------- */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "aliceblue", color: "#111111" }}
          date={<span className="date-style">2015 - 2019</span>}
          iconStyle={{ background: "orange", color: "aliceblue" }}
          icon={<IoSchoolSharp />}
        >
          <h3> United States international University, Nairobi</h3>
          <p>B.A in International Relations </p>
          <p>Concentration: Development Studies </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
