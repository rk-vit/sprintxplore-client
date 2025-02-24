import React from "react";
import "./OurTeam.css";
import { TeamMember } from "../components/TeamMember";

export const OurTeam = () => {
    const teamMembers = [
        { name: "Revanth", position: "Software Engineer", shortText: "Watha nan tha da LEO" },
        { name: "Michael", position: "Full Stack Developer", shortText: "Code is life!" },
        { name: "Naveen", position: "UI/UX Designer", shortText: "Design speaks louder than words." },
        { name: "Ithihas", position: "Backend Developer", shortText: "Optimizing the unseen magic." },
        { name: "Prajan", position: "Frontend Developer", shortText: "Turning ideas into reality." },
        { name: "Karthik", position: "AI Engineer", shortText: "Making machines think!" },
    ];

    return (
        <div className="ourTeam-main">
            <h1>Our Team</h1>
            <img src="images/ourTeamUnderline.svg" alt="underline" />
            <div className="MemberFlex">
                <div className="row">
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
                <div className="row">
                    {teamMembers.slice(3, 6).map((member, index) => (
                        <TeamMember key={index + 3} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};
