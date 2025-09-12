import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-3">
            FurEverCare+
          </h2>
          <p className="text-sm leading-relaxed">
            Connecting pets with loving homes since 2020. We make adoption easy,
            safe, and joyful by bringing together shelters, rescues, and pet
            lovers to create lasting bonds.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-green-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/adopt" className="hover:text-green-400">
                Adopt a Pet
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-green-400">
                Resources
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">📧 support@furevercare.com</p>
          <p className="text-sm">📞 (123) 456-7890</p>
          <p className="text-sm mt-2">
            For partnerships, media, or feedback, please reach out to our
            support team.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            {[
              { Icon: Facebook, color: "hover:bg-blue-600" },
              { Icon: Instagram, color: "hover:bg-pink-500" },
              { Icon: Twitter, color: "hover:bg-sky-400" },
              { Icon: Linkedin, color: "hover:bg-blue-500" },
            ].map(({ Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:text-white transition ${color}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-sm">
            Stay updated with adoption stories, events, and pet care tips.
            Share your journey with <span className="text-green-400">#FurEverCareFamily</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} FurEverCare+. All rights reserved.
        <div className="mt-2 space-x-3">
          <a href="/privacy" className="hover:text-green-400">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-green-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
