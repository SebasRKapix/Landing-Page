'use client';
import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

function LocalGradientText({
  children,
  className = "font-bold text-6xl",
  colors = ["#01C38D", "#191E29", "#01C38D", "#191E29", "#01C38D"],
  animationSpeed = 8,
  showBorder = false, 
}: GradientTextProps) {
  const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      animationDuration: `${animationSpeed}s`,
  };

  return (
      <div className={`animated-gradient-text ${className}`}>
          {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
          <div className="text-content" style={gradientStyle}>{children}</div>
      </div>
  );
}


export default function Home() {

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } 
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const videoGallery = [
    {
      id: "video1",
      thumbnail: "/YOUTUBE1.jpg",
      title: "¿Qué puedes hacer con el módulo de proyectos?",
      duration: "5:42",
      youtubeUrl: "https://youtube.com/watch?v=example1",
    },
    {
      id: "video2",
      thumbnail: "/YOUTUBE2.png",
      title: "¿Qué puedes hacer con el módulo de clientes?",
      duration: "8:17",
      youtubeUrl: "https://youtube.com/watch?v=example2",
    },
    {
      id: "video3",
      thumbnail: "/YOUTUBE3.png",
      title: "¿Qué puedes hacer con el módulo de compras?",
      duration: "12:03",
      youtubeUrl: "https://youtube.com/watch?v=example3",
    },
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#191e29]">
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section with gradient overlay */}
        <section className="relative mb-32 p-8 rounded-3xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64"></div>
          
          <div className="flex flex-col lg:flex-row items-center relative z-10">
            <div className="lg:w-1/2 lg:pr-12 animate-on-scroll opacity-0 transition-all duration-700 translate-y-12" 
                style={{transitionDelay: '100ms'}}>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
              <LocalGradientText>Transforma tu negocio con Kapix Lite.</LocalGradientText>
              </h1>
              <p className="text-xl mb-8 text-[#696E79]">
                Mejora tus procesos, aumenta la eficiencia y fomenta el crecimiento de tu empresa con nuestra herramienta gratuita y fácil de usar.
              </p>
              <button className="bg-[#01c38d] text-white shadow-xl px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold hover:bg-[#00a77a] hover:shadow-lg transform hover:-translate-y-2 flex space-x-2 items-center start-btn1 group">
                Obtenerlo gratis
                <i className="fi fi-rr-arrow-right"></i>
              </button>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 animate-on-scroll opacity-0 transition-all duration-700 translate-x-12"
                style={{transitionDelay: '300ms'}}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#01c38d]/10 to-transparent z-10 rounded-2xl"></div>
                <Image
                  src="/ERP.gif"
                  alt="Kapix ERP Dashboard"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                  property="unoptimized"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with animated cards */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll opacity-0 transition-all duration-500">
            Características de <span className="bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">Kapix Lite</span><span className="text-[#01c38d] text-5xl">.</span>
            </h2>
            <p className="text-xl text-[#696E79] text-center mb-16 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-500" 
              style={{transitionDelay: '100ms'}}>
              Descubre las potentes cualidades que transformarán la operación de tu negocio
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <i className="fi fi-rr-sparkles"></i>,
                  title: "Sistema gratuito",
                  description: "Accede a las herramientas esenciales de forma completamente gratuita.",
                },
                {
                  icon: <i className="fi fi-rr-building"></i>, 
                  title: "Adaptabilidad",
                  description: "Se ajusta a las necesidades de cualquier tipo de negocio, desde pymes hasta grandes empresas.",
                },
                {
                  icon: <i className="fi fi-rr-laptop-mobile"></i>, 
                  title: "Multiplataforma",
                  description: "Accede a tu sistema desde cualquier dispositivo, ya sea PC, tablet o smartphone.",
                },
                {
                  icon: <i className="fi fi-rr-cloud"></i>, 
                  title: "100% en la nube",
                  description: "Disfruta de acceso remoto desde cualquier lugar, sin necesidad de instalación local.",
                },
                {
                  icon: <i className="fi fi-rr-cursor"></i>, 
                  title: "Interfaz Intuitiva",
                  description: "Navega fácilmente sin complicaciones, sin importar tu nivel de experiencia tecnológica.",
                },
                {
                  icon: <i className="fi fi-rr-lock"></i>, 
                  title: "Seguridad avanzada",
                  description: "Protegemos todos tus datos con cifrado y almacenamiento seguro en la nube.",
                },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glassmorphism p-8 rounded-xl shadow-xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll border border-gray-100"
                >
                  <div className="flex items-center justify-center mb-6 w-16 h-16 mx-auto bg-gradient-to-br from-[#01c38d] to-[#00a77a] rounded-lg text-white shadow-lg">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-[#01c38d]">{feature.title}</h3>
                  <p className="text-[#696E79] text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

        {/* Video Gallery Section */}
        <section className="mb-20">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-4">
              Aprende más con <span className="bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">nuestros videos</span><span className="text-[#01c38d] text-5xl">.</span>
            </h2>
            <p className="text-xl text-[#696E79] max-w-2xl mx-auto">
              Descubre cómo Kapix Lite puede transformar tu negocio con nuestra selección de videos informativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoGallery.map((video, index) => (
              <Link 
                href={video.youtubeUrl} 
                target="_blank" 
                key={video.id}
                className="group animate-on-scroll opacity-0 transition-all duration-500 transform translate-y-12"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover transform transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#01c38d] rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                      <i className="fi fi-rr-play-circle text-[#ffffff] play-video"></i>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#01c38d] transition-colors duration-300">{video.title}</h3>
                    <p className="text-sm text-[#696E79]">Haz clic para ver el video en YouTube</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .glassmorphism {
          --webkit-backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}