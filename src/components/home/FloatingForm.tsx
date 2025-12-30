"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import StarIcon from "@/components/icons/Star";

const STATUS_OPTIONS = [
    "Student (1st–2nd year)",
    "Student (3rd–4th year)",
    "Fresher",
    "Working Professional",
    "Career Switcher",
    "Entrepreneur / Freelancer",
];

const INTENT_OPTIONS = [
    "Exploring career options",
    "Looking for structured mentorship",
    "Want real-world project exposure",
    "Planning to join in the next 1–3 months",
    "Just browsing / learning more",
];

const TRACK_OPTIONS = [
    "Salesforce Ecosystem Residency",
    "AI Infrastructure & Cloud Native Residency",
    "Enterprise Data Platform Residency",
    "ServiceNow Architect Residency",
    "Modern Enterprise Backend Residency (Java)",
    "Apple Ecosystem Residency (iOS)",
];

export default function FloatingForm() {
    const [isOpen, setIsOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        status: "",
        intent: "",
        tracks: [] as string[],
        consent: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            if (name === "consent") {
                setFormData(prev => ({ ...prev, consent: checked }));
            } else if (name === "tracks") {
                setFormData(prev => {
                    const newTracks = checked ? [...prev.tracks, value] : prev.tracks.filter(t => t !== value);
                    return { ...prev, tracks: newTracks };
                });
            }
        } else if (name === "intent") {
            setFormData(prev => ({ ...prev, intent: value }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        if (errors[name]) { // Clear error
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required";
        if (!formData.status) newErrors.status = "Select your status";
        if (!formData.consent) newErrors.consent = "Required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        // Simulate API
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // No download, just success
        }, 1500);
    };

    const resetForm = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ fullName: "", email: "", mobile: "", status: "", intent: "", tracks: [], consent: false });
        }, 300);
    };

    // Drag Logic
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    // Global drag events
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart]);

    // Call the effect hook (simulated inside component body, need to use real useEffect)
    // I will replace this block with real useEffect import and usage standardly.
    // However, I can't inject imports easily with replace_file_content if I don't select the top.
    // I will use the multi_replace to handle imports and body.

    // For now, I'll write the logic inside the body below imports.


    return (
        <>
            {/* Floating Trigger Button - Visible on desktop/large screens typically, or all if crucial */}
            <button
                onClick={() => setIsOpen(true)}
                onMouseDown={handleMouseDown}
                className="fixed right-0 top-[280px] z-40 bg-[#D8F602] text-[#181818] px-3 py-4 rounded-l-xl shadow-[0_0_20px_rgba(216,246,2,0.4)] hover:pl-5 transition-all flex flex-row items-center gap-2 group"
                style={{ cursor: "move", transform: `translate(${position.x}px, ${position.y}px)` }}
            >
                <span className="font-bold font-orbitron tracking-wide whitespace-nowrap uppercase text-sm">Get More Info</span>
                {/* <StarIcon style={{ width: "20px", height: "20px", color: "#181818", transform: "rotate(90deg)" }} /> */}
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-lg my-8 rounded-2xl border border-[#D8F602]/20 bg-[#121212] shadow-2xl flex flex-col max-h-[90vh]" style={{ boxShadow: "0 0 40px rgba(216, 246, 2, 0.05)" }}>

                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#121212] z-10 rounded-t-2xl">
                            <div>
                                <h2 className="text-xl font-bold text-[#FAFFD6]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Get More Info</h2>
                                <p className="text-sm text-gray-400 mt-1">We'll get back to you shortly.</p>
                            </div>
                            <button onClick={resetForm} className="text-gray-400 hover:text-white p-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            {isSuccess ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 rounded-full bg-[#D8F602]/10 flex items-center justify-center border border-[#D8F602] mx-auto mb-6">
                                        <svg className="w-8 h-8 text-[#D8F602]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#FAFFD6] mb-2">Enquiry Received</h3>
                                    <p className="text-gray-400 mb-6">Our team will contact you soon.</p>
                                    <button onClick={resetForm} className="px-6 py-2 rounded-lg bg-[#D8F602] text-[#181818] font-bold">Close</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 gap-4">
                                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] text-white outline-none" />
                                        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}

                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] text-white outline-none" />
                                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile / WhatsApp *" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] text-white outline-none" />
                                        {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}

                                        <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] text-white outline-none appearance-none cursor-pointer">
                                            <option value="" className="bg-[#121212]">Current Status *</option>
                                            {STATUS_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-[#121212]">{opt}</option>)}
                                        </select>
                                        {errors.status && <p className="text-red-500 text-xs">{errors.status}</p>}
                                    </div>

                                    {/* Intent & Track Compact */}
                                    <div className="space-y-3 pt-2">
                                        <p className="text-sm font-bold text-[#D8F602]">What are you looking for?</p>
                                        {INTENT_OPTIONS.slice(0, 4).map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="intent" value={opt} checked={formData.intent === opt} onChange={handleChange} className="accent-[#D8F602]" />
                                                <span className="text-gray-300 text-sm">{opt}</span>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <p className="text-sm font-bold text-[#D8F602]">Track Interest?</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {TRACK_OPTIONS.map(opt => (
                                                <label key={opt} className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1 rounded">
                                                    <input type="checkbox" name="tracks" value={opt} checked={formData.tracks.includes(opt)} onChange={handleChange} className="accent-[#D8F602]" />
                                                    <span className="text-gray-300 text-xs">{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <label className="flex items-start gap-2 cursor-pointer mt-2">
                                        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 accent-[#D8F602]" />
                                        <span className="text-gray-500 text-xs leading-tight">I agree to receive updates via email/WhatsApp.*</span>
                                    </label>
                                    {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 rounded-lg bg-[#D8F602] text-[#181818] font-bold text-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(216,246,2,0.3)] flex items-center justify-center gap-2"
                                        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
