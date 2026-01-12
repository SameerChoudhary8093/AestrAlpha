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
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            // Reset form when closed
            setFormData({
                groundRules: [],
                fullName: "",
                email: "",
                phone: "",
                cityState: "",
                age: "",
                education: "",
                status: "",
                track: "",
            });
            setErrors({});
            setIsSuccess(false);
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            if (name === "groundRules") {
                // Clear groundRules error if user interacts (selects at least one)
                if (errors.groundRules) {
                    setErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.groundRules;
                        return newErrors;
                    });
                }
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

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (formData.groundRules.length === 0) {
            newErrors.groundRules = "Please select at least one ground rule.";
        }
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.cityState.trim()) newErrors.cityState = "City & State is required";
        if (!formData.age) newErrors.age = "Age is required";
        if (!formData.education.trim()) newErrors.education = "Education is required";
        if (!formData.status) newErrors.status = "Current Status is required";
        if (!formData.track) newErrors.track = "Please select a residency track";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            // Scroll to top or first error could be good, but standard html validation prevents submit usually. 
            // Since we handle it manually, we just stop here.
            return;
        }

        setIsSubmitting(true);

        try {
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
                        <h2 className="text-xl md:text-2xl font-bold text-[#FAFFD6]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>AESTR ALPHA Residency Application</h2>
                        <p className="text-sm text-gray-400 mt-2 opacity-80">(Application for 6-Month Career Residency)</p>
                        <p className="text-xs text-[#D8F602] font-semibold mt-1 uppercase tracking-wider">This is not a course application.</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white p-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar font-sans text-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-10">

                        {/* Ground Rules */}
                        <div className={`bg-[#D8F602]/5 border ${errors.groundRules ? 'border-red-500' : 'border-[#D8F602]/20'} p-6 rounded-xl space-y-4`}>
                            <h3 className="text-[#D8F602] font-bold uppercase tracking-wide">GROUND RULE (READ FIRST)</h3>
                            <div className="space-y-3">
                                {GROUND_RULES.map((rule) => (
                                    <label key={rule} className="flex items-start gap-3 cursor-pointer group">
                                        <input type="checkbox" name="groundRules" value={rule} checked={formData.groundRules.includes(rule)} onChange={handleChange} className="mt-1 w-5 h-5 rounded border border-gray-500 text-[#D8F602] focus:ring-[#D8F602] bg-transparent" />
                                        <span className="text-sm md:text-base group-hover:text-white transition-colors">{rule}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.groundRules && <p className="text-red-500 text-sm">{errors.groundRules}</p>}
                        </div>

                        {/* Personal Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
                            <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
                            <Input label="Phone Number (WhatsApp enabled)" type="tel" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
                            <Input label="City & State" name="cityState" value={formData.cityState} onChange={handleChange} error={errors.cityState} />
                            <Input label="Age" type="number" name="age" value={formData.age} onChange={handleChange} error={errors.age} />
                            <Input label="Highest Education Completed" name="education" value={formData.education} onChange={handleChange} error={errors.education} />
                            <Select label="Current Status" name="status" value={formData.status} options={STATUS_OPTIONS} onChange={handleChange} error={errors.status} />
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
                            {errors.track && <p className="text-red-500 text-sm">{errors.track}</p>}
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
const Input = ({ label, type = "text", error, ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>
        <input type={type} {...props} className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] text-white outline-none focus:ring-1 focus:ring-[#D8F602] transition-colors`} />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const Select = ({ label, options, error, ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>
        <select {...props} className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} focus:border-[#D8F602] text-white outline-none focus:ring-1 focus:ring-[#D8F602] transition-colors appearance-none cursor-pointer`}>
            <option value="" className="bg-[#121212]">Select an option</option>
            {options.map((o: string) => <option key={o} value={o} className="bg-[#121212]">{o}</option>)}
        </select>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
    <p className="block text-sm font-bold text-[#D8F602] mb-2">{children}</p>
);
