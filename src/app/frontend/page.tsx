'use client';
import { ReactNode, useEffect } from "react";
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

  const imageGallery = [
    {
      id: "tareas",
      src: "/Tareas.png",
      title: "Módulo de Tareas",
      description: "Puedes crear tareas para optimizar el seguimiento y control de tus actividades de manera más eficiente.",
    },
    {
      id: "proyectos",
      src: "/Proyectos.png",
      title: "Módulo de Proyectos",
      description: "Accede y gestiona proyectos para mejorar la planificación, seguimiento y control de tus iniciativas de manera más efectiva.",
    },
    {
      id: "contratos",
      src: "/Contratos.png",
      title: "Módulo de Contratos",
      description: "Gestiona y supervisa tus contratos de manera integral, garantizando su correcta administración y cumplimiento en cada etapa.",
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
              <LocalGradientText>Gestiona tu negocio desde el primer día con Kapix Lite
              <span className="text-5xl">.</span></LocalGradientText>
              </h1>
              <p className="text-xl mb-8 text-[#696E79]">
              Nos lo has pedido y lo hemos escuchado. Con Kapix Lite, una versión para un solo usuario, podrás gestionar tus finanzas, registrar gastos, organizar citas, dar seguimiento a tus clientes y mucho más. ¡Haz clic en el enlace y obtén Kapix Lite ahora!
              </p>
              {/* Botón con enlace usando Link de Next.js */}
              <Link href="https://kpixs.com/KapixRegister" className="inline-block">
                <button className="bg-[#01c38d] text-white shadow-xl px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold hover:bg-[#00a77a] hover:shadow-lg transform hover:-translate-y-2 flex space-x-2 items-center start-btn1 group">
                  Obtenerlo gratis
                  <i className="fi fi-rr-arrow-right ml-2"></i>
                </button>
              </Link>
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
              Estas son algunas de las opciones que obtendrás al adquirir Kapix Lite.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <i className="fi fi-rr-sparkles"></i>,
                  title: "Experiencia Kapix",
                  description: "Disfruta del soporte que ha consolidado a Kapix como líder en ERP para empresas y pymes en Latinoamérica.",
                },
                {
                  icon: <i className="fi fi-rr-building"></i>, 
                  title: "Adaptabilidad",
                  description: "Se ajusta a las necesidades de cualquier tipo de negocio, desde pymes hasta empresas.",
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
                  description: "Versión Lite que ha sido diseñada para ser intuitiva y eficientes.",
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

        {/* Para quiénes está diseñado Kapix Lite section */}
        <section className="mb-32 relative">
          <div className="absolute -z-10 opacity-5 top-20 left-0 right-0">
            <div className="w-full h-64 bg-[#01c38d] rounded-full blur-3xl"></div>
          </div>
          
          <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll opacity-0 transition-all duration-500">
            ¿Para quiénes está diseñado <span className="bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">Kapix Lite?</span><span className="text-[#01c38d] text-5xl"></span>
          </h2>
          <p className="text-xl text-[#696E79] text-center mb-16 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-500" 
            style={{transitionDelay: '100ms'}}>
            Hemos diseñado Kapix Lite pensando en diferentes perfiles de negocio.
          </p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
            <div className="w-full lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-700" 
                style={{transitionDelay: '150ms'}}>
              <Image
                src="/Animation.gif"
                alt="Personas para quienes está diseñado Kapix Lite"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
            
            <div className="w-full lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-700" 
                style={{transitionDelay: '300ms'}}>
              <div className="space-y-6">
                {[
                  {
                    title: "Emprendedores Unipersonales",
                    description: "Personas que gestionan su negocio de forma unipersonal y buscan mejorar su productividad.",
                    icon: <i className="fi fi-rr-user"></i>
                  },
                  {
                    title: "Finanzas Personales y Familiares",
                    description: "Personas que buscan organizar y optimizar sus finanzas personales y familiares para el éxito.",
                    icon: <i className="fi fi-rr-dollar"></i>
                  },
                  {
                    title: "Desarrollo de Ideas de Negocio",
                    description: "Personas que quieren convertir su idea de negocio en un proyecto exitoso.",
                    icon: <i className="fi fi-rr-shop"></i>
                  },
                  {
                    title: "Emprendedores Principiantes",
                    description: "Personas con un emprendimiento menor a un año que quieren impulsar su crecimiento.",
                    icon: <i className="fi fi-rr-rocket-lunch"></i>
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:bg-white hover:shadow-lg p-4 rounded-xl transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#01c38d] to-[#00a77a] rounded-xl flex items-center justify-center text-white shadow-lg transform transition-transform duration-300">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#191e29] group-hover:text-[#01c38d] transition-colors duration-300">{item.title}</h3>
                      <p className="text-[#696E79]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galería de Imágenes de la Plataforma */}
        <section className="mb-20">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-4">
            Descubre cómo potenciar el crecimiento de tu negocio con <span className="bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">Kapix Lite</span><span className="text-[#01c38d] text-5xl">.</span>
            </h2>
            <p className="text-xl text-[#696E79] max-w-2xl mx-auto">
              Explora las diferentes funcionalidades que ofrece nuestra plataforma para impulsar el crecimiento de tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imageGallery.map((image, index) => (
              <div 
                key={image.id}
                className="animate-on-scroll opacity-0 transition-all duration-500 transform translate-y-12"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transform transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#01c38d] transition-colors duration-300">{image.title}</h3>
                    <p className="text-sm text-[#696E79]">{image.description}</p>
                  </div>
                </div>
              </div>
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