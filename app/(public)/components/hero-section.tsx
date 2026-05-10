import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <div>
            <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white flex flex-col p-4 pb-12">
                {/* Navigation */}
                <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="flex gap-8 items-center">
                        <Link href="/contact" className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors duration-300">Contact</Link>
                        <Link href="https://www.linkedin.com/in/sailesh-kumar-tamang-13a9ba3b3" target="_blank" className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
                            Connect
                        </Link>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="flex-1 flex items-center justify-center px-8">
                    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* LEFT: Content */}
                        <div className="lg:col-span-6 order-2 lg:order-1 space-y-8 animate-in fade-in slide-in-from-left-2 duration-700">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 hover:border-blue-400/70 transition-all duration-300 group/badge">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                    <span className="text-sm font-semibold text-blue-300 group-hover/badge:text-blue-200 transition-colors duration-300">Available for Projects</span>
                                </div>

                                <div className="space-y-3">
                                    <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
                                        <span className="text-white block animate-in fade-in duration-700" style={{animationDelay: '100ms'}}>Sailesh</span>
                                        <br />
                                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent block animate-in fade-in duration-700" style={{animationDelay: '200ms'}}>Kumar Tamang</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl font-semibold text-blue-200 animate-in fade-in duration-700" style={{animationDelay: '300ms'}}>
                                        Digital Marketing Strategist & Web Developer
                                    </p>
                                </div>

                                <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl hover:text-blue-100 transition-colors duration-300 animate-in fade-in duration-700" style={{animationDelay: '400ms'}}>
                                    I transform businesses through data-driven marketing strategies and high-performance web experiences. Specializing in Meta advertising, content strategy, and conversion optimization.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-4">
                                {[
                                    { value: '2+', label: 'Years Experience', delay: '500ms' },
                                    { value: '50+', label: 'Campaigns Delivered', delay: '600ms' },
                                    { value: '100%', label: 'Client Satisfaction', delay: '700ms' }
                                ].map((stat, i) => (
                                    <div key={i} className="animate-in fade-in duration-700 transform hover:scale-110 transition-transform duration-300" style={{animationDelay: stat.delay}}>
                                        <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-blue-200/70 hover:text-blue-200 transition-colors duration-300">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex gap-4 pt-4">
                                <Link
                                    href="#work"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 flex items-center gap-2 group transform hover:scale-105 active:scale-95 animate-in fade-in duration-700" 
                                    style={{animationDelay: '800ms'}}
                                >
                                    View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                                </Link>
                                <a
                                    href="/sailesh-tamang-cv.pdf"
                                    download
                                    className="px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-bold rounded-xl hover:bg-blue-500/15 hover:border-blue-400/80 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in fade-in duration-700"
                                    style={{animationDelay: '900ms'}}
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: Image & Skills */}
                        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-8 animate-in fade-in slide-in-from-right-2 duration-700">
                            {/* Profile Image */}
                            <div className="relative group animate-in fade-in duration-700" style={{animationDelay: '200ms'}}>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative rounded-3xl overflow-hidden border-2 border-blue-400/40 bg-slate-900 shadow-2xl shadow-blue-600/20 group-hover:border-blue-400/80 group-hover:shadow-blue-600/40 transition-all duration-500 transform group-hover:scale-105">
                                    <Image
                                        src="/images/sailesh.jpg"
                                        alt="Sailesh Kumar Tamang"
                                        width={500}
                                        height={600}
                                        className="w-full h-auto object-cover grayscale-10 hover:grayscale-0 transition duration-700"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                                </div>
                            </div>

                            {/* Skills Sidebar */}
                            <div className="space-y-4 animate-in fade-in duration-700" style={{animationDelay: '400ms'}}>
                                <h3 className="text-sm font-bold text-blue-300/70 uppercase tracking-[0.2em] hover:text-blue-300 transition-colors duration-300">
                                    Core Expertise
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Meta Ads', 'Content Strategy', 'SEO', 'Analytics', 'Figma Design', 'Email Marketing'].map((skill, i) => (
                                        <div 
                                            key={skill} 
                                            className="px-4 py-3 bg-blue-500/10 border border-blue-400/30 rounded-lg hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300 text-sm font-medium text-blue-200 transform hover:scale-105 hover:-translate-y-1 animate-in fade-in duration-500"
                                            style={{animationDelay: `${500 + i * 50}ms`}}
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}