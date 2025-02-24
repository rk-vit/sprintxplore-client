import React, { useState } from "react";
import "./TeamMember.css";

export const TeamMember = (props) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="flip-container" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
            <div className={`Member-main ${flipped ? "flipped" : ""}`}>
                {/* Front Side */}
                <div className="front">
                    <div className="top">
                        <img src="https://picsum.photos/id/237/200/300" alt="Team Member" />
                    </div>
                    <div className="bottom-section">
                        <h2>{props.name}</h2>
                    </div>
                </div>

                {/* Back Side (Details) */}
                <div className="back">
                    <div className="bottom-section">
                        <h2>{props.name}</h2>
                    </div>
                    <div className="back-details">
                        <h3>{props.Position}</h3>
                        <p>{props.shortText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
