import Link from "next/link";
import ContactForm from "./components/contact-form";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
                <Link href="/" className="px-5 py-2 border-2 border-blue-400/50 text-blue-300 rounded-lg font-medium hover:bg-blue-500/15 hover:border-blue-400/80 transition">
                    Back
                </Link>
            </nav>

            {/* Contact Form */}
            <ContactForm />
        </div>
    );
}