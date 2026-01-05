"use client";

import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import StarIcon from "@/components/icons/Star";
import { supabase } from "@/lib/supabase";

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TRACK_OPTIONS = [
    "Salesforce Ecosystem Residency",
    "AI Infrastructure & Cloud Native Residency",
    "Enterprise Data Platform Residency",
    "ServiceNow Architect Residency",
    "Modern Enterprise Backend Residency (Java)",
    "Apple Ecosystem Residency (iOS)",
];

const GROUND_RULES = [
    "I understand this is a full-time, immersive residency and not an online course",
    "I understand this program demands 6 months of discipline, consistency, and ownership",
    "I am applying seriously and not “just exploring”"
];

const STATUS_OPTIONS = ["Student", "Working Professional", "Career Break", "Freelancer", "Unemployed"];
const FEE_MANAGEMENT_OPTIONS = ["Self-funded", "Family support", "EMI / installment", "Not sure yet"];
const UNCOMFORTABLE_OPTIONS = ["I usually push through", "I slow down but don’t quit", "I look for shortcuts", "I tend to quit"];
const RELOCATION_OPTIONS = ["Yes", "No", "Depends"];
const COMMITMENT_OPTIONS = ["Yes", "No"];
const YES_NO_OPTIONS = ["Yes", "No"];

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
    const [formData, setFormData] = useState({
        // Ground Rules
        groundRules: [] as string[],
        // Personal Info
        fullName: "",
        email: "",
        phone: "",
        cityState: "",
        age: "",
        education: "",
        status: "",
        // Track
        track: "",
        // Motivation
        whyAestr: "",
        uncomfortableHandling: "",
        commitment: "",
        relocation: "",
        constraints: "",
        constraintDetails: "",
        // History & Mindset
        lastDifficultThing: "",
        accountabilityMeaning: "",
        consistencyRating: 5,
        feedbackRating: 5,
        stressRating: 5,
        ownershipRating: 5,
        // Technical
        skills: "",
        tools: "",
        portfolioLink: "",
        // Failure Analysis
        failureStory: "",
        // Financial
        feeAwareness: "",
        feeManagement: "",
        performancePostResidency: "",
        // Rapid Fire
        professionalTreatment: false,
        bluntFeedback: false,
        egoChallenge: false,
        earnOutcome: false,
        // Pitch
        whyInvest: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            if (name === "groundRules") {
                setFormData(prev => ({
                    ...prev,
                    groundRules: checked
                        ? [...prev.groundRules, value]
                        : prev.groundRules.filter(r => r !== value)
                }));
            } else {
                setFormData(prev => ({ ...prev, [name]: checked }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 2. Map camelCase state to snake_case DB columns
            const { error } = await supabase
                .from('applications')
                .insert([
                    {
                        ground_rules: formData.groundRules,
                        full_name: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        city_state: formData.cityState,
                        age: parseInt(formData.age),
                        education: formData.education,
                        status: formData.status,
                        track: formData.track,
                        why_aestr: formData.whyAestr,
                        uncomfortable_handling: formData.uncomfortableHandling,
                        commitment: formData.commitment,
                        relocation: formData.relocation,
                        constraints: formData.constraints,
                        constraint_details: formData.constraintDetails,
                        last_difficult_thing: formData.lastDifficultThing,
                        accountability_meaning: formData.accountabilityMeaning,
                        consistency_rating: formData.consistencyRating,
                        feedback_rating: formData.feedbackRating,
                        stress_rating: formData.stressRating,
                        ownership_rating: formData.ownershipRating,
                        skills: formData.skills,
                        tools: formData.tools,
                        portfolio_link: formData.portfolioLink,
                        failure_story: formData.failureStory,
                        fee_awareness: formData.feeAwareness,
                        fee_management: formData.feeManagement,
                        performance_post_residency: formData.performancePostResidency,
                        professional_treatment: formData.professionalTreatment,
                        blunt_feedback: formData.bluntFeedback,
                        ego_challenge: formData.egoChallenge,
                        earn_outcome: formData.earnOutcome,
                        why_invest: formData.whyInvest
                    }
                ]);

            if (error) throw error;

            setIsSuccess(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        if (!mounted || !isOpen) return null;
        return createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                <div className="relative w-full max-w-md p-8 rounded-2xl border border-[#D8F602]/30 bg-[#181818] text-center" style={{ boxShadow: "0 0 40px rgba(216, 246, 2, 0.1)" }}>
                    <h3 className="text-2xl font-bold text-[#FAFFD6] mb-4" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Application Received</h3>
                    <p className="text-gray-300 mb-6">
                        If selected, you will receive an email within 7–10 working days.
                        <br />
                        This process is intentionally selective.
                    </p>
                    <button onClick={onClose} className="px-6 py-2 rounded-lg bg-[#D8F602] text-[#181818] font-bold hover:opacity-90">Close</button>
                </div>
            </div>,
            document.body
        );
    }

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
            <div className="relative w-full max-w-4xl my-8 rounded-2xl border border-[#D8F602]/20 bg-[#121212] shadow-2xl flex flex-col max-h-[90vh]" style={{ boxShadow: "0 0 40px rgba(216, 246, 2, 0.05)" }}>

                {/* Header */}
                <div className="p-6 border-b border-white/10 sticky top-0 bg-[#121212] z-10 rounded-t-2xl flex justify-between items-start">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#FAFFD6]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>AESTR ALPHA Residency Readiness & Self-Assessment Form</h2>
                        <p className="text-sm text-gray-400 mt-2 opacity-80">(Application for 6-Month Career Residency) — This is a self-assessment to check whether you are ready for an intense, real-world residency.</p>
                        <p className="text-xs text-[#D8F602] font-semibold mt-1 uppercase tracking-wider">This is not a course application.</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white p-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar font-sans text-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-10">

                        {/* Ground Rules */}
                        <div className="bg-[#D8F602]/5 border border-[#D8F602]/20 p-6 rounded-xl space-y-4">
                            <h3 className="text-[#D8F602] font-bold uppercase tracking-wide">GROUND RULE (READ FIRST)</h3>
                            <div className="space-y-3">
                                {GROUND_RULES.map((rule) => (
                                    <label key={rule} className="flex items-start gap-3 cursor-pointer group">
                                        <input type="checkbox" name="groundRules" value={rule} checked={formData.groundRules.includes(rule)} onChange={handleChange} className="mt-1 w-5 h-5 rounded border border-gray-500 text-[#D8F602] focus:ring-[#D8F602] bg-transparent" />
                                        <span className="text-sm md:text-base group-hover:text-white transition-colors">{rule}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                            <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
                            <Input label="Phone Number (WhatsApp enabled)" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                            <Input label="City & State" name="cityState" value={formData.cityState} onChange={handleChange} />
                            <Input label="Age" type="number" name="age" value={formData.age} onChange={handleChange} />
                            <Input label="Highest Education Completed" name="education" value={formData.education} onChange={handleChange} />
                            <Select label="Current Status" name="status" value={formData.status} options={STATUS_OPTIONS} onChange={handleChange} />
                        </div>

                        {/* Track Selection */}
                        <div className="space-y-4">
                            <Label>Which residency track are you applying for? (Select ONE)</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {TRACK_OPTIONS.map(track => (
                                    <label key={track} className={`flex items-center p-3 rounded-lg border cursor-pointer hover:bg-white/5 transition-all ${formData.track === track ? 'border-[#D8F602] bg-[#D8F602]/10' : 'border-white/10'}`}>
                                        <input type="radio" name="track" value={track} checked={formData.track === track} onChange={handleChange} className="sr-only" />
                                        <span className={`text-sm ${formData.track === track ? 'text-[#D8F602]' : 'text-gray-300'}`}>{track}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Motivation */}
                        <div className="space-y-6">

                            <TextArea label="Why do you want to join Aestr instead of an online course / YouTube / cheaper bootcamp? (200 words max)" name="whyAestr" value={formData.whyAestr} onChange={handleChange} />

                            <div>
                                <Label>What happens if this residency becomes uncomfortable or overwhelming for you?</Label>
                                <div className="space-y-2 mt-2">
                                    {UNCOMFORTABLE_OPTIONS.map(opt => (
                                        <RadioOption key={opt} name="uncomfortableHandling" value={opt} checked={formData.uncomfortableHandling === opt} onChange={handleChange} />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Can you commit 30–40 hours per week for 6 months?" name="commitment" options={COMMITMENT_OPTIONS} value={formData.commitment} onChange={handleChange} />
                                <Select label="Are you willing to relocate to Jaipur (if required)?" name="relocation" options={RELOCATION_OPTIONS} value={formData.relocation} onChange={handleChange} />
                            </div>

                            <div>
                                <Label>Do you have family / financial constraints that may interrupt your residency?</Label>
                                <div className="flex gap-6 mt-2">
                                    <RadioOption name="constraints" value="No" checked={formData.constraints === "No"} onChange={handleChange} label="No" />
                                    <RadioOption name="constraints" value="Yes" checked={formData.constraints === "Yes"} onChange={handleChange} label="Yes (explain briefly)" />
                                </div>
                                {formData.constraints === "Yes" && (
                                    <input type="text" name="constraintDetails" value={formData.constraintDetails} onChange={handleChange} placeholder="Briefly explain..." className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-[#D8F602]" />
                                )}
                            </div>
                        </div>

                        {/* History & Mindset */}
                        <div className="space-y-6">
                            <TextArea label="When was the last time you stuck to something difficult for more than 3 months?" name="lastDifficultThing" value={formData.lastDifficultThing} onChange={handleChange} />
                            <Input label="What does professional accountability mean to you? (Short answer)" name="accountabilityMeaning" value={formData.accountabilityMeaning} onChange={handleChange} />

                            <div className="space-y-4">
                                <Label>Rate yourself honestly (1 = weak, 5 = strong):</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <RatingInput label="Consistency" name="consistencyRating" value={formData.consistencyRating} onChange={handleChange} />
                                    <RatingInput label="Handling feedback" name="feedbackRating" value={formData.feedbackRating} onChange={handleChange} />
                                    <RatingInput label="Stress tolerance" name="stressRating" value={formData.stressRating} onChange={handleChange} />
                                    <RatingInput label="Ownership mindset" name="ownershipRating" value={formData.ownershipRating} onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        {/* Technical */}
                        <div className="space-y-6">
                            <TextArea label="What skills do you already have that are relevant to this track? (Bullets allowed)" name="skills" value={formData.skills} onChange={handleChange} />
                            <TextArea label="What tools / platforms have you used before? (Even basics count)" name="tools" value={formData.tools} onChange={handleChange} />
                            <Input label="Share 1 link (optional but recommended): GitHub / Portfolio / etc." name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} />
                        </div>

                        {/* Failure Analysis */}
                        <div className="space-y-6">
                            <TextArea label="Describe one situation where you failed or underperformed. What went wrong? What was your responsibility in it? (150–200 words)" name="failureStory" value={formData.failureStory} onChange={handleChange} />
                        </div>

                        {/* Financial Clarity */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label>Are you aware of the total residency fee?</Label>
                                    <div className="flex gap-4 mt-2">
                                        {YES_NO_OPTIONS.map(opt => <RadioOption key={opt} name="feeAwareness" value={opt} checked={formData.feeAwareness === opt} onChange={handleChange} />)}
                                    </div>
                                </div>
                                <div>
                                    <Label>Are you comfortable with performance-based expectations post-residency?</Label>
                                    <div className="flex gap-4 mt-2">
                                        {YES_NO_OPTIONS.map(opt => <RadioOption key={opt} name="performancePostResidency" value={opt} checked={formData.performancePostResidency === opt} onChange={handleChange} />)}
                                    </div>
                                </div>
                            </div>
                            <Select label="How do you plan to manage the fee?" name="feeManagement" options={FEE_MANAGEMENT_OPTIONS} value={formData.feeManagement} onChange={handleChange} />
                        </div>

                        {/* Rapid Fire Commitment */}
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
                            <Label>Answer YES or NO only (Check to say YES)</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Checkbox label="I am willing to be treated like a professional, not a student" name="professionalTreatment" checked={formData.professionalTreatment} onChange={handleChange} />
                                <Checkbox label="I am open to blunt feedback" name="bluntFeedback" checked={formData.bluntFeedback} onChange={handleChange} />
                                <Checkbox label="I understand this residency may challenge my ego" name="egoChallenge" checked={formData.egoChallenge} onChange={handleChange} />
                                <Checkbox label="I am ready to earn my outcome" name="earnOutcome" checked={formData.earnOutcome} onChange={handleChange} />
                            </div>
                        </div>

                        {/* The Pitch */}
                        <div className="space-y-6">
                            <TextArea label="Why should Aestr invest a seat, mentorship, and ecosystem access in you? (200 words max)" name="whyInvest" value={formData.whyInvest} onChange={handleChange} />
                        </div>

                        {/* Submit */}
                        <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-lg bg-[#D8F602] text-[#181818] font-black text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                            {isSubmitting ? "Submitting..." : (
                                <>
                                    <StarIcon style={{ width: "24px", height: "24px", color: "#181818", fill: "currentColor" }} />
                                    <span>SUBMIT APPLICATION</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>,
        document.body
    );
}

// Helper Components
const Input = ({ label, type = "text", ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>
        <input type={type} {...props} className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] text-white outline-none focus:ring-1 focus:ring-[#D8F602] transition-colors" />
    </div>
);

const TextArea = ({ label, ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>
        <textarea rows={4} {...props} className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] text-white outline-none focus:ring-1 focus:ring-[#D8F602] transition-colors resize-none" />
    </div>
);

const Select = ({ label, options, ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>
        <select {...props} className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] text-white outline-none focus:ring-1 focus:ring-[#D8F602] transition-colors appearance-none cursor-pointer">
            <option value="" className="bg-[#121212]">Select an option</option>
            {options.map((o: string) => <option key={o} value={o} className="bg-[#121212]">{o}</option>)}
        </select>
    </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
    <p className="block text-sm font-bold text-[#D8F602] mb-2">{children}</p>
);

const RadioOption = ({ name, value, checked, onChange, label }: any) => (
    <label className="flex items-center gap-2 cursor-pointer group">
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="text-[#D8F602] focus:ring-[#D8F602] bg-transparent" />
        <span className="text-gray-300 group-hover:text-white text-sm">{label || value}</span>
    </label>
);

const RatingInput = ({ label, name, value, onChange }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1.5">{label} ({value})</label>
        <input type="range" min="1" max="5" name={name} value={value} onChange={onChange} className="w-full accent-[#D8F602]" />
    </div>
);

const Checkbox = ({ label, name, checked, onChange }: any) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <input type="checkbox" name={name} checked={checked} onChange={onChange} className="w-5 h-5 rounded border-gray-600 text-[#D8F602] focus:ring-[#D8F602] bg-transparent" />
        <span className="text-gray-300 group-hover:text-white text-sm leading-tight">{label}</span>
    </label>
);
