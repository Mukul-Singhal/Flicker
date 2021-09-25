import React from "react";
import Participants from "./Participants";
import ParticipantsLabel from "./ParticipantsLabel";

import "./ParticipantsSection.styles.css";

const ParticipantsSection = () => {
  return (
    <div className="participants_section_container">
      <ParticipantsLabel />
      <Participants />
    </div>
  );
};

export default ParticipantsSection;
