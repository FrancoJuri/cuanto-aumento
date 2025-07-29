import { Search } from "lucide-react"
import { useEffect } from "react"

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  useEffect(() => {
    // Initialize particles.js when component mounts
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 35, // Much fewer particles for minimalist approach
            "density": {
              "enable": true,
              "value_area": 1200 // More spaced out
            }
          },
          "color": {
            "value": ["#ff6b35", "#ffa366", "#ff8c42"] // Multiple orange tones for variety
          },
          "shape": {
            "type": ["circle"], // More geometric variety
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "triangle": {
              "nb_sides": 3
            },
            "polygon": {
              "nb_sides": 6 // Hexagons
            },
            "star": {
              "nb_sides": 5 // 5-pointed stars
            }
          },
          "opacity": {
            "value": 0.4, // More subtle opacity
            "random": true, // Random opacity for organic feel
            "anim": {
              "enable": true, // Enable opacity animation
              "speed": 0.8,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4, // Slightly larger but fewer
            "random": true,
            "anim": {
              "enable": true, // Enable size breathing effect
              "speed": 1.5,
              "size_min": 2,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false // Remove connecting lines completely
          },
          "move": {
            "enable": true,
            "speed": 1.5, // Very slow, zen-like movement
            "direction": "none",
            "random": true, // More organic movement
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble" // Change to bubble effect instead of repulse
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 200,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 125, // Smaller interaction area
              "size": 8, // Subtle size increase
              "duration": 2,
              "opacity": 0.8,
              "speed": 2
            },
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 2 // Add fewer particles on click
            },
            "remove": {
              "particles_nb": 1
            }
          }
        },
        "retina_detect": true
      })
    }
  }, [])

  return (
    <div
      className="h-[85vh] flex flex-col items-center justify-center px-4 relative"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)", // Minimal gray gradient
      }}
    >
      {/* Particles.js container */}
      <div 
        id="particles-js" 
        className="absolute inset-0 z-0"
        style={{
          width: '100%',
          height: '100%'
        }}
      ></div>
      
      {/* Content with higher z-index to appear above particles */}
      <div className="relative z-10">
        {/* Logo and Character with Liquid Glass Effect */}
        <div className="text-center mb-12">
          {/* Liquid Glass Container */}
          <div className="liquid-glass-container backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 mx-4 shadow-2xl relative overflow-hidden">
            {/* Animated glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>
            
            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none shimmer-animation"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h1 className="text-6xl font-bold text-gray-900 drop-shadow-sm">¿Cuanto Aumento?</h1>
              </div>

              {/* Search Bar */}
              <div className="max-w-lg mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Busca un producto..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border border-white/30 rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400/50 outline-none shadow-lg bg-white/20 backdrop-blur-sm placeholder-gray-600 text-gray-800 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Spanish text */}
              <p className="text-gray-800 text-lg max-w-md mx-auto drop-shadow-sm text-balanced">
                Descubre cuánto subieron los precios de cada producto cada día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection