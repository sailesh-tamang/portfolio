import Link from "next/link";

const projects = [
  {
    title: "Meta Advertising Campaign Suite",
    subtitle: "Multi-Platform Ad Strategy & Management",
    description: "Comprehensive Meta Ads management system handling Facebook, Instagram, and Threads campaigns. Implemented audience segmentation, A/B testing framework, and real-time performance analytics integration.",
    tech: ["Meta Business Suite", "Analytics", "Strategy", "Optimization"],
    link: "https://kataho.app/",
    github: "https://github.com/sailesh-tamang",
    image: "/images/project1.jpg",
    featured: true
  },
  {
    title: "Brand Content Strategy & Design System",
    subtitle: "Content Creation & Visual Consistency Framework",
    description: "Developed comprehensive brand guidelines with Canva templates and Figma design systems. Created reusable assets for social media, emails, and web. Designed 200+ templates ensuring brand consistency across all platforms.",
    tech: ["Canva", "Figma", "Brand Strategy", "Content Design"],
    link: "https://github.com/sailesh-tamang",
    github: "https://github.com/sailesh-tamang",
    image: "/images/project2.jpg",
    featured: true
  },
  {
    title: "Email Marketing Automation Platform",
    subtitle: "Campaign Orchestration & Segmentation",
    description: "Built Mailchimp-powered automation workflows with intelligent segmentation. Implemented behavioral triggers, A/B testing, and performance tracking. Achieved 35% open rate improvement through data-driven optimization.",
    tech: ["Mailchimp", "Automation", "Segmentation", "Analytics"],
    link: "https://github.com/sailesh-tamang",
    github: "https://github.com/sailesh-tamang",
    featured: false
  },
  {
    title: "Social Media Analytics Dashboard",
    subtitle: "Performance Tracking & Insights Generation",
    description: "Comprehensive social media analytics platform integrating data from multiple channels. Real-time performance metrics, competitor analysis, and actionable insights using Google Analytics and Hootsuite APIs.",
    tech: ["Google Analytics", "Hootsuite", "Data Visualization", "Reporting"],
    link: "https://github.com/sailesh-tamang",
    github: "https://github.com/sailesh-tamang",
    featured: false
  },
  {
    title: "Conversion Rate Optimization System",
    subtitle: "Landing Page Testing & UX Enhancement",
    description: "Implemented multivariate testing framework with detailed conversion tracking. Optimized landing pages using Figma design iterations and A/B testing. Achieved 48% increase in conversion rates through systematic optimization.",
    tech: ["Figma", "Analytics", "CRO", "Testing"],
    link: "https://bpoinnepal.com/",
    github: "https://github.com/sailesh-tamang",
    featured: false
  }
];

export default function FeaturedWork() {
  return (
    <div id="work" className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 text-white py-24">
      {/* Section Header */}
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-bold text-blue-400/70 uppercase tracking-[0.2em]">Featured Work</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              <span className="text-white">Campaigns That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Drive Results</span>
            </h2>
          </div>
          <p className="text-lg text-blue-100/70 max-w-2xl leading-relaxed">
            Strategic digital marketing campaigns and web solutions that transform brands. Each project showcases data-driven strategies, creative execution, and measurable business impact.
          </p>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="px-8 max-w-7xl mx-auto space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-blue-900/20 border border-blue-400/20 rounded-2xl p-8 lg:p-10 overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />
              
              <div className="relative z-10 space-y-6">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-wider rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-300/80 font-semibold">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-blue-100/80 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Video Reel Showcase */}
        <div className="pt-12 border-t border-blue-400/10">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-white mb-2">Video Reels & Content</h3>
            <p className="text-blue-100/70">Engaging video content from recent campaigns</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="group relative rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 bg-slate-900/40 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all duration-300" />
              <div className="relative bg-slate-950 flex items-center justify-center" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F943738201880613%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="group relative rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 bg-slate-900/40 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all duration-300" />
              <div className="relative bg-slate-950 flex items-center justify-center" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1281903143375134%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                />
              </div>
            </div>

            {/* Video 3 */}
            <div className="group relative rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 bg-slate-900/40 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all duration-300" />
              <div className="relative bg-slate-950 flex items-center justify-center" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1527253166077781%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="pt-12 border-t border-blue-400/10">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-white mb-2">Professional Experience</h3>
            <p className="text-blue-100/70">Real-world work experience with established organizations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kataho Experience */}
            <div className="group relative bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-blue-900/20 border border-blue-400/20 rounded-2xl p-8 lg:p-10 overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-wider rounded-full border border-blue-400/30">
                    Digital Marketing
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-300 transition-colors leading-tight">
                    Kataho.app
                  </h3>
                  <p className="text-sm text-blue-300/80 font-semibold">
                    Digital Marketing Specialist
                  </p>
                </div>

                <p className="text-blue-100/80 leading-relaxed text-base">
                  Executed comprehensive digital marketing strategies including campaign management, social media optimization, and performance analytics to drive user acquisition and engagement.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Social Media Marketing', 'Campaign Strategy', 'Analytics', 'Content Marketing'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-blue-500/15 text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-400/25">
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://kataho.app/"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all hover:shadow-lg hover:shadow-blue-600/40"
                >
                  Visit Website
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Bpoinnepal Experience */}
            <div className="group relative bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-blue-900/20 border border-blue-400/20 rounded-2xl p-8 lg:p-10 overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-wider rounded-full border border-blue-400/30">
                    SEO Specialist
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-300 transition-colors leading-tight">
                    BpoinNepal
                  </h3>
                  <p className="text-sm text-blue-300/80 font-semibold">
                    SEO & Search Marketing Expert
                  </p>
                </div>

                <p className="text-blue-100/80 leading-relaxed text-base">
                  Managed end-to-end SEO strategies and search marketing campaigns. Optimized website performance, improved organic visibility, and implemented technical SEO best practices resulting in significant traffic growth.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['SEO Optimization', 'Technical SEO', 'Keyword Research', 'Link Building'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-blue-500/15 text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-400/25">
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://bpoinnepal.com/"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all hover:shadow-lg hover:shadow-blue-600/40"
                >
                  Visit Website
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="pt-12 border-t border-blue-400/10">
          <h3 className="text-3xl font-black text-white mb-8">Other Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-blue-500/5 to-slate-900/40 border border-blue-400/15 rounded-xl p-7 overflow-hidden hover:border-blue-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all duration-500" />

                <div className="relative z-10 space-y-4">
                  {/* Title */}
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-blue-100/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-blue-500/15 text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-400/25 hover:border-blue-400/50 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}