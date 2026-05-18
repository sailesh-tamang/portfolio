import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 text-white border-t border-blue-400/10">
            {/* CTA Section */}
            <div className="px-8 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in duration-700">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            <span className="text-white">Let's build</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">something great</span>
                        </h2>
                        <p className="text-blue-100/80 text-lg leading-relaxed max-w-md hover:text-blue-100 transition-colors duration-300">
                            Ready to elevate your brand with data-driven marketing strategies and high-performance web solutions? Let's collaborate and create measurable results.
                        </p>
                    </div>

                    {/* CTA Box */}
                    <div className="group bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-400/30 rounded-2xl p-10 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20 transform hover:scale-105">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-sm text-blue-300/70 font-bold uppercase tracking-[0.2em] group-hover:text-blue-300 transition-colors duration-300">Get Started</p>
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">Start Your Project</h3>
                            </div>
                            <p className="text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300">
                                Let's discuss how I can help your business grow through strategic digital marketing and modern web development.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40 group/btn transform hover:scale-105 active:scale-95"
                            >
                                <Mail size={18} />
                                Get In Touch
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social & Info Section */}
            <div className="px-8 py-16 border-t border-blue-400/10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-in fade-in duration-700">
                    {/* About */}
                    <div className="space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
                        <h4 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">About</h4>
                        <p className="text-blue-100/70 text-sm leading-relaxed hover:text-blue-100 transition-colors duration-300">
                            Digital marketing strategist and web developer with expertise in building data-driven campaigns and high-converting digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">Navigate</h4>
                        <div className="space-y-2 text-sm">
                            <Link href="#work" className="text-blue-100/70 hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                                Featured Work
                            </Link>
                            <br />
                            <Link href="#" className="text-blue-100/70 hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">Connect</h4>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/in/sailesh-kumar-tamang-13a9ba3b3"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 hover:bg-blue-500/40 hover:border-blue-400/70 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="https://github.com/sailesh-tamang"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 hover:bg-blue-500/40 hover:border-blue-400/70 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href="https://www.instagram.com/sailesh_tamang7/"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 hover:bg-blue-500/40 hover:border-blue-400/70 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                            >
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-8 py-8 border-t border-blue-400/10 max-w-7xl mx-auto animate-in fade-in duration-700">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300/60 hover:text-blue-300/80 transition-colors duration-300">
                    <p>© {new Date().getFullYear()} Sailesh Kumar Tamang. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-blue-300 transition-colors duration-300">Digital Marketing Strategist</span>
                        <span className="text-blue-400/30">•</span>
                        <span className="hover:text-blue-300 transition-colors duration-300">Web Developer</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}