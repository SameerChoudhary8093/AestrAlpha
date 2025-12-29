"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
}

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
    "UI/UX & Product Design",
    "AI & Emerging Technologies",
    "Full-Stack / No-Code Development",
    "Data & Analytics",
    "Branding & Creative Industries",
    "Not sure yet",
];

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        status: "",
        intent: "",
        tracks: [] as string[],
        college: "",
        city: "",
        consent: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            if (name === "consent") {
                setFormData((prev) => ({ ...prev, consent: checked }));
            } else if (name === "tracks") {
                setFormData((prev) => {
                    const newTracks = checked
                        ? [...prev.tracks, value]
                        : prev.tracks.filter((t) => t !== value);
                    return { ...prev, tracks: newTracks };
                });
            }
        } else if (name === "intent") {
            // Radio buttons for intent
            setFormData(prev => ({ ...prev, intent: value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required";
        if (!formData.status) newErrors.status = "Please select your current status";
        if (!formData.consent) newErrors.consent = "You must agree to the terms";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Auto-redirect to brochure download
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = '/AestrAlphaBrochure.pdf';
                link.download = 'AestrAlphaBrochure.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Close modal after redirect
                // setTimeout(onClose, 3000); 
            }, 1500);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                <div
                    className="relative w-full max-w-md p-8 rounded-2xl border border-[#D8F602]/30 bg-[#181818] text-center"
                    style={{ boxShadow: "0 0 40px rgba(216, 246, 2, 0.1)" }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#D8F602]/10 flex items-center justify-center border border-[#D8F602]">
                            <svg className="w-8 h-8 text-[#D8F602]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#FAFFD6] mb-2" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>You're In!</h3>
                    <p className="text-gray-300 mb-6">
                        Thanks for your interest. The brochure is on its way to your inbox.
                        <br />
                        Downloading now...
                    </p>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-lg bg-[#D8F602] text-[#181818] font-bold hover:opacity-90 transition-opacity"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 text-left overflow-y-auto">
            <div
                className="relative w-full max-w-2xl my-8 rounded-2xl border border-[#D8F602]/20 bg-[#121212]/95 backdrop-blur-md shadow-2xl flex flex-col max-h-[90vh]"
                style={{ boxShadow: "0 0 40px rgba(216, 246, 2, 0.05)" }}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#121212]/95 z-10 rounded-t-2xl">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#FAFFD6]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Unlock the Brochure</h2>
                        <p className="text-sm text-gray-400 mt-1">Fill in the details to get instant access</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Mandatory Fields */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white placeholder-gray-500 outline-none transition-all`}
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white placeholder-gray-500 outline-none transition-all`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Mobile Number (WhatsApp) *</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${errors.mobile ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white placeholder-gray-500 outline-none transition-all`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Current Status *</label>
                                    <div className="relative">
                                        <select
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${errors.status ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white outline-none transition-all appearance-none cursor-pointer`}
                                        >
                                            <option value="" disabled className="bg-[#181818] text-gray-500">Select Status</option>
                                            {STATUS_OPTIONS.map(opt => (
                                                <option key={opt} value={opt} className="bg-[#181818]">{opt}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Qualification / Intent */}
                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <div>
                                <label className="block text-sm font-medium text-[#D8F602] mb-3">What best describes your interest right now?</label>
                                <div className="space-y-2">
                                    {INTENT_OPTIONS.map((opt) => (
                                        <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name="intent"
                                                    value={opt}
                                                    checked={formData.intent === opt}
                                                    onChange={handleChange}
                                                    className="peer sr-only "
                                                />
                                                <div className="w-5 h-5 rounded-full border border-gray-500 peer-checked:border-[#D8F602] peer-checked:bg-[#D8F602]/20 transition-all"></div>
                                                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#D8F602] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                            </div>
                                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#D8F602] mb-3">Which track are you most interested in?</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {TRACK_OPTIONS.map((opt) => (
                                        <label key={opt} className="flex items-center space-x-3 cursor-pointer group p-2 rounded hover:bg-white/5 transition-colors">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="checkbox"
                                                    name="tracks"
                                                    value={opt}
                                                    checked={formData.tracks.includes(opt)}
                                                    onChange={handleChange}
                                                    className="peer sr-only"
                                                />
                                                <div className="w-5 h-5 rounded border border-gray-500 peer-checked:border-[#D8F602] peer-checked:bg-[#D8F602] transition-all"></div>
                                                <svg className="absolute w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Optional Fields */}
                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Optional but High-Value</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">College / Company Name</label>
                                    <input
                                        type="text"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white placeholder-gray-500 outline-none transition-all"
                                        placeholder="Institute name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white placeholder-gray-500 outline-none transition-all"
                                        placeholder="Your city"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Consent */}
                        <div className="pt-2">
                            <label className="flex items-start space-x-3 cursor-pointer group">
                                <div className="mt-0.5 relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        className="peer sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded border ${errors.consent ? 'border-red-500' : 'border-gray-500'} peer-checked:border-[#D8F602] peer-checked:bg-[#D8F602] transition-all`}></div>
                                    <svg className="absolute w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className={`text-sm ${errors.consent ? 'text-red-400' : 'text-gray-400'} group-hover:text-gray-300 transition-colors leading-tight`}>
                                    I agree to be contacted via email/WhatsApp regarding the program, updates, and events.*
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3.5 rounded-lg bg-[#D8F602] text-[#181818] font-bold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-[0_0_20px_rgba(216,246,2,0.3)] hover:shadow-[0_0_30px_rgba(216,246,2,0.5)]"
                            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                        >
                            {isSubmitting ? 'Processing...' : 'Get Brochure Now'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
