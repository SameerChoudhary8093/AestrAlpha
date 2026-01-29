"use client";

import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import StarIcon from "@/components/icons/Star";
import { supabase } from "@/lib/supabase";

interface WorkshopRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WorkshopRegistrationModal({ isOpen, onClose }: WorkshopRegistrationModalProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        organization: "", // College or Company
        role: "Student", // Student or Professional
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
                organization: "",
                role: "Student",
                consent: false,
            });
            setErrors({});
            setIsSuccess(false); // Reset success state
        }
        return () => {
            document.body.style.overflow = 'unset';
            setIsSuccess(false);
        };
    }, [isOpen]);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
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
        if (!formData.organization.trim()) newErrors.organization = "College/Company Name is required";
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
                .from('workshop_registrations')
                .insert([{
                    full_name: formData.fullName,
                    email: formData.email,
                    mobile: formData.mobile,
                    organization: formData.organization,
                    role: formData.role,
                    consent: formData.consent,
                    created_at: new Date().toISOString(),
                }]);

            if (error) {
                console.error("Supabase error:", error);
                // Graceful fail or retry logic here
                alert("Something went wrong. Please try again.");
            } else {
                setIsSuccess(true); // Switch to success view
            }

        } catch (error) {
            console.error("Error saving registration:", error);
            alert("Failed to process request. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted || !isOpen) return null;

    // Success View Content
    if (isSuccess) {
        return createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                <div
                    className="relative w-full max-w-md p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-6 border border-[#D8F602]/20 shadow-2xl"
                    style={{
                        background: "#181818",
                        boxShadow: "0 0 40px rgba(216, 246, 2, 0.05)"
                    }}
                >
                    <h2
                        className="text-2xl md:text-3xl font-bold text-[#FAFFD6] uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                        Registration Successful
                    </h2>

                    <div className="text-gray-300 space-y-2 text-base md:text-lg">
                        <p>Thank you for registering for the AI Summit 2026.</p>
                        <p>Our team will review your details and contact you shortly regarding the next steps.</p>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-4 px-8 py-3 rounded-lg bg-[#D8F602] text-[#181818] font-bold text-lg hover:opacity-90 transition-opacity"
                        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                        Close
                    </button>
                </div>
            </div>,
            document.body
        );
    }

    const modalContent = (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 text-left overflow-y-auto">

            {/* Main Modal Container */}
            <div
                className="relative w-full max-w-lg my-8 rounded-2xl border border-[#D8F602]/20 shadow-2xl flex flex-col max-h-[90vh]"
                style={{
                    background: "linear-gradient(180deg, #1d2603 0%, #121212 350px)",
                    boxShadow: "0 0 40px rgba(216, 246, 2, 0.05)"
                }}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-transparent backdrop-blur-xl z-10 rounded-t-2xl">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#FAFFD6]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Register for Workshop</h2>
                        <p className="text-sm text-gray-400 mt-1">Join the AI Summit 2026</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Fields */}
                        <div className="space-y-4">
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
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${errors.mobile ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white placeholder-gray-500 outline-none transition-all`}
                                    placeholder="+91 9876543210"
                                />
                                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">College / Company Name *</label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${errors.organization ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white placeholder-gray-500 outline-none transition-all`}
                                    placeholder="University Name"
                                />
                                {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">I am a *</label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#D8F602] focus:ring-1 focus:ring-[#D8F602] text-white outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option value="Student" className="bg-[#181818]">Student</option>
                                    <option value="Professional" className="bg-[#181818]">Working Professional</option>
                                    <option value="Other" className="bg-[#181818]">Other</option>
                                </select>
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
                                    I agree to initiate the registration process.*
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center hover:opacity-90 transition-opacity mx-auto w-full"
                            style={{
                                height: "54px",
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
                                    <StarIcon style={{ width: "24px", height: "24px", color: "#181818", fill: "currentColor" }} />
                                    <span className="font-extrabold whitespace-nowrap">Register Now</span>
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
