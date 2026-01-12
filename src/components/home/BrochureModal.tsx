"use client";

import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StarIcon from "@/components/icons/Star";
import { supabase } from "@/lib/supabase";

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
    "Salesforce Ecosystem Residency",
    "AI Infrastructure & Cloud Native Residency",
    "Enterprise Data Platform Residency",
    "ServiceNow Architect Residency",
    "Modern Enterprise Backend Residency (Java)",
    "Apple Ecosystem Residency (iOS)",
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
        consent: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset form when closed
            setFormData({
                fullName: "",
                email: "",
                mobile: "",
                status: "",
                intent: "",
                tracks: [],
                consent: false,
            });
            setErrors({});
            setIsSuccess(false);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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
            setFormData(prev => ({ ...prev, intent: value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
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
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required";
        if (!formData.status) newErrors.status = "Please select your current status";
        if (!formData.intent) newErrors.intent = "Please select your interest";
        if (formData.tracks.length === 0) newErrors.tracks = "Please select at least one track";
        if (!formData.consent) newErrors.consent = "You must agree to the terms";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            const { error } = await supabase
                .from('brochure_requests')
                .insert([{
                    full_name: formData.fullName,
                    email: formData.email,
                    mobile: formData.mobile,
                    status: formData.status,
                    intent: formData.intent,
                    tracks: formData.tracks,
                    consent: formData.consent,
                }]);
            if (error) throw error;
            setIsSuccess(true);
            const link = document.createElement('a');
            link.href = '/AestrAlpha.pdf';
            link.download = 'AestrAlpha.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(onClose, 2000);
        } catch (error) {
            console.error("Error saving brochure request:", error);
            alert("Failed to process request. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted || !isOpen) return null;

    const modalContent = (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 text-left overflow-y-auto">

            {/* Main Modal Container */}
            <div
                // 1. Removed base bg color classes to let the style prop control the background completely
                className="relative w-full max-w-2xl my-8 rounded-2xl border border-[#D8F602]/20 shadow-2xl flex flex-col max-h-[90vh]"
                style={{
                    background: "linear-gradient(180deg, #1d2603 0%, #121212 350px)",
                    boxShadow: "0 0 40px rgba(216, 246, 2, 0.05)"
                }}
            >
                {/* Header */}
                {/* 3. Transparent background + Backdrop Blur allows the green gradient to shine through */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-transparent backdrop-blur-xl z-10 rounded-t-2xl">
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
                                        placeholder="Enter your name"
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
                                        placeholder="Enter your email"
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
                                        placeholder="Enter your mobile number"
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
                                <label className="block text-sm font-medium text-[#D8F602] mb-3">What best describes your interest right now? *</label>
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
                                                <div className={`w-5 h-5 rounded-full border ${errors.intent ? 'border-red-500' : 'border-gray-500'} peer-checked:border-[#D8F602] peer-checked:bg-[#D8F602]/20 transition-all`}></div>
                                                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#D8F602] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                            </div>
                                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.intent && <p className="text-red-500 text-xs mt-1">{errors.intent}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#D8F602] mb-3">Which track are you most interested in? *</label>
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
                                                <div className={`w-5 h-5 rounded border ${errors.tracks ? 'border-red-500' : 'border-gray-500'} peer-checked:border-[#D8F602] peer-checked:bg-[#D8F602] transition-all`}></div>
                                                <svg className="absolute w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.tracks && <p className="text-red-500 text-xs mt-1">{errors.tracks}</p>}
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
                            className="flex items-center justify-center hover:opacity-90 transition-opacity mx-auto"
                            style={{
                                width: "300px",
                                height: "53.8px",
                                gap: "8px",
                                padding: "12px 24px",
                                borderTopLeftRadius: "4px",
                                borderTopRightRadius: "20px",
                                borderBottomRightRadius: "4px",
                                borderBottomLeftRadius: "4px",
                                backgroundColor: "#D8F602",
                                color: "#181818",
                                fontFamily: "var(--font-orbitron), sans-serif",
                                fontWeight: 800,
                                fontSize: "16px",
                                lineHeight: "150%",
                            }}
                        >
                            {isSubmitting ? 'Processing...' : (
                                <>
                                    <StarIcon style={{ width: "28px", height: "29.8px", color: "#181818", fill: "currentColor" }} />
                                    <span className="font-extrabold whitespace-nowrap">Get Brochure Now</span>
                                </>
                            )}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
