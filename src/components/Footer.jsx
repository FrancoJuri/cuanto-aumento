import { Twitter, Instagram, Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16 shadow-inner">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo and site name */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 mr-3">
            {/* Simple shopping cart icon */}
            <svg viewBox="0 0 24 24" className="w-full h-full text-gray-700">
              <path
                fill="currentColor"
                d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-700">cuantoaumento.com</span>
        </div>

        {/* Social media links */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Twitter className="w-5 h-5" />
            <span className="text-lg">Twitter</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-lg">Instagram</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-lg">GitHub</span>
          </a>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-8">
          <div>
            Desarrollado por{" "}
            <a
              href="https://francojuri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Franco Juri
            </a>
          </div>
          <div>© 2024 cuantoaumento. Ningún derecho reservado.</div>
        </div>
      </div>
    </footer>
  )
}
  
  export default Footer
  