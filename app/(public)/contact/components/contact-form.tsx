"use client";

import { useState } from "react";
import { User, Mail, MessageSquare, Briefcase, Globe, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { contactSchema, contactType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { handleContactEmail } from "@/lib/actions/contact-actions";

export default function ContactForm() {
  // State management for the custom selection
  const [selectedType, setSelectedType] = useState("website");

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");

  // Data array moved outside the render loop for cleanliness
  const projectTypes = [
    { id: 'website', label: 'Website Development', icon: Globe, desc: 'End-to-end web solutions' },
    { id: 'marketing', label: 'Digital Marketing', icon: Briefcase, desc: 'Strategy & campaign management' },
  ];

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<contactType>(
    {
      resolver: zodResolver(contactSchema),
      defaultValues: {
        projectType: "website"
      }
    }
  )


  const onSubmit = async (data: contactType) => {
    setError("");
    setIsLoading(true); // start loading
    try {
      const res = await handleContactEmail(data);
      if (!res.success) {
        throw new Error(res.message || "Something went wrong | Please try again later!");
      }
      router.push("/"); // redirect after success
    } catch (err: any) {
      setError(err.message || "Something went wrong | Please try again later!");
    } finally {
      setIsLoading(false); // stop loading
    }
  };

  return (
    <section className="py-16 px-4 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center space-y-6 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 hover:border-blue-400/60 transition-all duration-300">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-300">Let's Work Together</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">Touch</span>
          </h2>
          
          <p className="text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto hover:text-blue-100 transition-colors duration-300">
            Have a project in mind? Let's discuss how I can help bring your vision to life. Fill out the form below and I'll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="relative group">
          {/* Background glow - animated */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/10 to-blue-600/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700" />
          
          <div className="relative bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-blue-900/20 border border-blue-400/30 group-hover:border-blue-400/50 p-8 md:p-12 rounded-3xl backdrop-blur-sm overflow-hidden transition-all duration-500">
            {/* Decorative animated gradient overlays */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-700" />

            <div className="relative space-y-8">
              <input type="hidden" {...register("projectType")} />

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-3 group/input">
                  <label className="text-[11px] font-bold text-blue-300 flex items-center gap-2 uppercase tracking-[0.2em] group-hover/input:text-blue-200 transition-colors duration-300">
                    <User size={14} className="text-cyan-400" />
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-blue-500/10 border border-blue-400/30 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/15 focus:shadow-lg focus:shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500/15 hover:border-blue-400/40"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-sm animate-in fade-in">{errors.fullName?.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-3 group/input">
                  <label className="text-[11px] font-bold text-blue-300 flex items-center gap-2 uppercase tracking-[0.2em] group-hover/input:text-blue-200 transition-colors duration-300">
                    <Mail size={14} className="text-cyan-400" />
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full bg-blue-500/10 border border-blue-400/30 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/15 focus:shadow-lg focus:shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500/15 hover:border-blue-400/40"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm animate-in fade-in">{errors.email?.message}</p>
                  )}
                </div>
              </div>

              {/* Project Type Selection */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-blue-300 flex items-center gap-2 uppercase tracking-[0.2em]">
                  <Briefcase size={14} className="text-cyan-400" />
                  What are we building?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedType(type.id);
                        setValue("projectType", type.id);
                      }}
                      className={`group/btn relative flex items-start gap-3 p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer transform hover:scale-105 active:scale-95 ${
                        selectedType === type.id
                          ? "bg-blue-500/20 border-blue-400/60 ring-1 ring-blue-400/50 shadow-lg shadow-blue-600/30"
                          : "bg-blue-500/5 border-blue-400/20 hover:bg-blue-500/10 hover:border-blue-400/40"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-lg transition-all duration-300 ${
                          selectedType === type.id
                            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110"
                            : "bg-blue-500/20 text-blue-300 group-hover/btn:bg-blue-500/30 group-hover/btn:scale-110"
                        }`}
                      >
                        <type.icon size={18} />
                      </div>

                      <div className="flex-1">
                        <div className="text-sm font-bold text-slate-200 group-hover/btn:text-blue-300 transition-colors duration-300">{type.label}</div>
                        <div className="text-xs text-blue-200/60 group-hover/btn:text-blue-200 transition-colors duration-300">{type.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-3 group/input">
                <label className="text-[11px] font-bold text-blue-300 flex items-center gap-2 uppercase tracking-[0.2em] group-hover/input:text-blue-200 transition-colors duration-300">
                  <MessageSquare size={14} className="text-cyan-400" />
                  Project Details
                </label>
                <textarea
                  {...register("projectDescription")}
                  rows={4}
                  placeholder="Briefly describe your project requirements..."
                  className="w-full bg-blue-500/10 border border-blue-400/30 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 resize-none focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/15 focus:shadow-lg focus:shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500/15 hover:border-blue-400/40"
                />
                {errors.projectDescription && (
                  <p className="text-red-400 text-sm animate-in fade-in">{errors.projectDescription?.message}</p>
                )}
              </div>

              {/* Error Message */}
              {err && (
                <div className="p-4 bg-red-500/10 border border-red-400/30 rounded-xl text-red-300 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  {err}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group/btn px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 transform hover:scale-105 active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}