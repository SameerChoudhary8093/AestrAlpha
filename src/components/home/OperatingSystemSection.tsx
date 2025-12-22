
import React from 'react';

// --- Card Component ---
const ModuleCard = ({
    label,
    subline,
    title,
    points,
    borderRadius,
    children
}: {
    label: string,
    subline: string,
    title: React.ReactNode,
    points: React.ReactNode[],
    borderRadius: string,
    children?: React.ReactNode
}) => {
    return (
        <div
            className="transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            style={{
                width: "605px",
                height: "579px",
                borderRadius: borderRadius,
                borderWidth: "1px",
                borderStyle: "solid",
                borderImageSource: "linear-gradient(180deg, #D7F601 0%, #666666 100%)",
                borderImageSlice: 1, // Standard way to make border gradient visible if radius allows, but standard CSS 'border-image' clashes with 'border-radius'.
                // A better approach for gradient border with radius is a wrapper or pseudo-element.
                // However, user prompt specifically gave "border-image-source".
                // Given the precision required, I will use a background mask trick or just standard border color for compatibility if border-image fails with radius.
                // Let's use a reliable CSS background origin trick for gradient border + radius.
                background: "linear-gradient(180deg, rgba(46, 54, 15, 0.6) 0%, #181818 100%) padding-box, linear-gradient(180deg, #D7F601 0%, #666666 100%) border-box",
                border: "1px solid transparent",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Text seems centered based on "Module A" width? Actually text-align center isn't explicitly set for card content, but generally implied or left.
                // Looking at prompt: "Module A" width 499, Card width 605. (605-499)/2 = 53px padding.
                padding: "0 53px",
                boxSizing: "border-box"
            }}
        >
            {children}

            {/* Label: Module A */}
            <div
                style={{
                    marginTop: "61px",
                    width: "100%", // 499px max content
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "120%",
                    color: "#EAF0BD",
                    textAlign: "left" // Assuming centered based on layout flow
                }}
            >
                {label}
            </div>

            {/* Subline */}
            <div
                style={{
                    marginTop: "29px",
                    width: "100%", // Fit content
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#EAF0BD",
                    textAlign: "left"
                }}
            >
                {subline}
            </div>

            {/* Title */}
            <h3
                style={{
                    marginTop: "16px",
                    width: "100%",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "40px",
                    lineHeight: "120%",
                    letterSpacing: "-0.02em",
                    color: "#EAF0BD",
                    textAlign: "left",
                    margin: "16px 0 0 0"
                }}
            >
                {title}
            </h3>

            {/* Divider */}
            <div
                style={{
                    marginTop: "36.76px",
                    width: "481px",
                    height: "1px",
                    background: "radial-gradient(39.09% 18400% at 50% 50%, #D7F601 0%, #181818 100%)",
                    opacity: 1
                }}
            />

            {/* Points */}
            <div
                style={{
                    marginTop: "12px",
                    width: "100%",
                    fontFamily: "Arial, sans-serif",
                    color: "#EAF0BD",
                    textAlign: "left" // Bullets usually left aligned
                }}
            >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {points.map((point, i) => (
                        <li key={i} style={{
                            fontSize: "18px",
                            lineHeight: "150%",
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px"
                        }}>
                            <span style={{ fontSize: "24px", lineHeight: "18px", marginTop: "2px" }}>•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default function OperatingSystemSection() {
    return (
        <section
            style={{
                width: "100%",
                background: "#181818",
                display: "flex",
                justifyContent: "center",
                padding: "112px 64px 112px 64px",
                // margin top handled by previous section or flow
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1440px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "64px"
                }}
            >
                {/* Header Section */}
                <div
                    style={{
                        width: "768px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "24px"
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontWeight: 700,
                            fontSize: "50px",
                            lineHeight: "120%",
                            color: "#EAF0BD",
                            textAlign: "center",
                            margin: 0
                        }}
                    >
                        The Aestr Operating<br />System
                    </h2>
                    <p
                        style={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "150%",
                            color: "#EAF0BD",
                            textAlign: "center",
                            margin: 0,
                            whiteSpace: "pre-line" // Preserves line breaks in text
                        }}
                    >
                        Beyond code. Built for Day-1.{'\n'}
                        Two foundational modules, mandatory for every resident.
                    </p>
                </div>

                {/* Cards Container */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row", // Side by side
                        gap: "96px",
                        justifyContent: "center",
                        flexWrap: "wrap"
                    }}
                >
                    {/* Module A */}
                    <ModuleCard
                        label="Module A"
                        subline="From learning Agile to living it — Day 1."
                        title={<>Agile Delivery &<br />Engineering Leadership</>}
                        borderRadius="8px"
                        points={[
                            <span key="1"><strong>No Theory. Only Jira</strong> - Real tools. Real workflows.</span>,
                            <span key="2"><strong>You Lead Scrums</strong> - Not observe. Actually lead.</span>,
                            <span key="3"><strong>Sprint Ownership</strong> - Plan. Execute. Retrospect.</span>,
                            <span key="4"><strong>Day-1 Ready</strong> - CSM / PSM-I level competence.</span>
                        ]}
                    >
                        {/* Ellipse 1 */}
                        <div
                            style={{
                                position: "absolute",
                                width: "1005px",
                                height: "200px",
                                left: "-279px",
                                top: "-168.24px",
                                background: "#D8F60294",
                                mixBlendMode: "screen",
                                filter: "blur(320.16px)",
                                borderRadius: "50%",
                                pointerEvents: "none",
                                zIndex: 1
                            }}
                        />
                    </ModuleCard>

                    {/* Module B */}
                    <ModuleCard
                        label="Module B"
                        subline="Built for deadlines. Not excuses."
                        title={<>Peak Performance &<br />Mindset Architecture</>}
                        borderRadius="18.71px"
                        points={[
                            <span key="1"><strong>Beat Imposter Syndrome</strong></span>,
                            <span key="2"><strong>High-stress mocks + calm-under-fire training.</strong></span>,
                            <span key="3"><strong>Learn to sustain 4-hour flow states.</strong></span>,
                            <span key="4"><strong>Weekly presentations. Stage → boardroom.</strong></span>
                        ]}
                    />
                </div>

            </div>
        </section>
    );
}
