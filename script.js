// --- DATOS DEL PORTAFOLIO (EDITA AQUÍ) ---
        const portfolioData = {
            personal: {
                name: "IVAN APOLINAR",
                initials: "IA",
                photo: "./Ivan  img.jpeg",
                title: "Analista Data MBA-Level",
                age_location: "Tehuacán, Puebla, México",
                bio: "Estratega operativo y analista de datos aplicado a negocios, con amplia experiencia en creación, estructuración y escalamiento de proyectos reales en transporte, servicios, comercio y atención al cliente.",
                email: "vanchysz1@gmail.com",
                cv_link: "./Ivan Apolinar CV.pdf"
            },
            sections: [
                { id: 'hero', icon: '🏠', label: 'Inicio' },
                { id: 'about', icon: '👤', label: 'Sobre Mí' },
                { id: 'skills', icon: '⭐', label: 'Habilidades' },
                { id: 'experience', icon: '💼', label: 'Experiencia' },
                { id: 'projects', icon: '📁', label: 'Proyectos' },
                { id: 'contact', icon: '📧', label: 'Contacto' }
            ],
            about: {
                main: "Me especializo en convertir ideas en operaciones funcionales: estructuro procesos, asigno roles, implemento sistemas, analizo información y diseño estrategias que permiten que los negocios operen de forma sostenible y semi-automatizada.",
                secondary: "Soy una persona tranquila, empática y analítica. Mi experiencia en trato directo con clientes y equipos de trabajo me ha permitido desarrollar escucha activa genuina y comprensión de problemas cotidianos, buscando siempre soluciones claras y efectivas.",
                philosophy: {
                    title: "Filosofía de Trabajo",
                    description: "Aportar valor primero, estructurar correctamente y permitir que el tiempo y la constancia multipliquen los resultados en personas, proyectos y relaciones."
                }
            },
            experience: [
                { year: "9 Años", description: "Socio Fundador de Smart Transport. Operación general, logística, estructura de rutas, atención a clientes y toma de decisiones estratégicas." },
                { year: "6 Años", description: "Fundador de Operadora Turística Tehuacán – Oaxaca. Socio Fundador de ruta con escala en Nochixtlan." },
                { year: "Actual", description: "Propietario de Tienda de Abarrotes. Administración diaria, ventas, control de personal y operación." },
                { year: "Previo", description: "Experiencia operativa en ventas y distribución en empresas como Pepsico, Alpura y Big Cola." }
            ],
            skills: [
                { name: "Análisis de Datos", symbol: "📊", percentage: 90, iconType: "emoji" },
                { name: "Op. de Negocios", symbol: "⚙️", percentage: 85, iconType: "emoji" },
                { name: "Inteligencia Artificial", symbol: "🤖", percentage: 80, iconType: "emoji" },
                { name: "Marketing Digital", symbol: "📈", percentage: 75, iconType: "emoji" },
                { name: "Excel Avanzado", symbol: "Xls", percentage: 70, iconType: "text" },
                { name: "Desarrollo No-Code", symbol: "💻", percentage: 65, iconType: "emoji" }
            ],
            projects: [
                {
                    title: "Automatización con IA",
                    desc: "Creación de Scripts para transformar datos y automatizar procesos.",
                    tags: ["AI", "Claude API", "Python"],
                    image: "./cla.jpeg"
                },
                {
                    title: "Cyber Punto Com",
                    desc: "Cadena local de cyber cafés pcs y xbox. Logística, control y manejo de redes.",
                    tags: ["Business", "Technology", "Management"],
                    gradient: "from-blue-600 to-cyan-400",
                    image: "./ptc.jpg"
                },
                {
                    title: "Krocks Buffet",
                    desc: "El único buffet de comida mexicana en Tehuacán que operaba toda la semana.",
                    tags: ["Restaurant", "Management", "Service"],
                    gradient: "from-orange-500 to-red-500",
                    image: "./kb.jpg"
                },
                {
                    title: "Luxor Travel",
                    desc: "Modelo de negocio de inversión y escalable para Transporte Federal.",
                    tags: ["Scalability", "Business Model", "Investment"],
                    image: "./lux.jpg",
                    link: "https://www.facebook.com/p/LUXOR-Travel-61559858225526/"
                },
                {
                    title: "Smart Transports",
                    desc: "Agencia de viajes líder entre: Tehuacán, Cuacnopalan, Puebla, México.",
                    tags: ["Transport", "Logistics", "Strategy"],
                    gradient: "from-green-500 to-emerald-700",
                    image: "./smt.jpg",
                    link: "https://www.smarttransports.mx/"
                },
                {
                    title: "Elegance Travel",
                    desc: "Transporte Ejecutivo Local.",
                    tags: ["Transport", "Strategy", "Service"],
                    image: "./nuv.jpg",
                    link: "https://elegancetravel.github.io/1/"
                }
            ],
            education: [],
            contact: {
                info: [
                    { icon: "📍", text: "Tehuacán, Puebla, México", link: "https://www.google.com/maps/place/Tehuac%C3%A1n,+Puebla" },
                    { icon: "📱", text: "238 238 2982", link: "https://wa.me/522382382982" },
                    { icon: "✉️", text: "vanchysz1@gmail.com", link: "mailto:vanchysz1@gmail.com" },
                    { icon: "f", text: "Perfil Facebook", link: "https://www.facebook.com/share/17ivmizthS/" }
                ],
                hobbies: [
                    { icon: "🏈", name: "Fútbol Americano" },
                    { icon: "🥊", name: "Boxeo" },
                    { icon: "🎮", name: "Videojuegos" },
                    { icon: "✈️", name: "Viajes" }
                ],
                languages: [
                    { flag: "🇲🇽", border: "pink-500", name: "Español", level: "Nativo (100%)", percent: 100, stars: 5 },
                    { flag: "🇺🇸", border: "purple-500", name: "Inglés", level: "Básico (40%)", percent: 40, stars: 2.5 }
                ]
            }
        };

        // --- RENDERIZADO ---

        function renderNav() {
            const container = document.getElementById('nav-container');
            container.innerHTML = portfolioData.sections.map(section => `
                <button onclick="scrollToSection('${section.id}')" class="nav-btn" title="${section.label}">
                    <span style="font-size:1.1rem;">${section.icon}</span>
                    <span class="nav-label">${section.label}</span>
                </button>
            `).join('');
        }


        function init3DHover() {
            if (window.innerWidth < 768) return; 
            document.querySelectorAll('.hover-3d').forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
                });
                el.addEventListener('mouseleave', () => {
                    el.style.transform = '';
                });
            });
        }

        function initScrollReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Once revealed, stop observing (one-way animation)
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.05,       // Trigger when just 5% is visible
                rootMargin: '0px 0px -30px 0px'  // Trigger slightly before bottom of viewport
            });

            document.querySelectorAll('.reveal-base').forEach(el => observer.observe(el));
        }

        // Initialize
        renderNav();
        // renderContent is called later in its final version
        document.getElementById('footer-text').innerText = `Diseñado y desarrollado por ${portfolioData.personal.name}`;
        document.getElementById('current-year').innerText = new Date().getFullYear();


        // Animación de fondo con mouse
        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = (e.clientY / window.innerHeight) * 2 - 1;
            updateBackground();
        });

        function updateBackground() {
            const bg = document.getElementById('animated-bg');
            bg.style.background = `
                radial-gradient(circle at ${50 + mouseX * 20}% ${50 + mouseY * 20}%, #ff0080 0%, transparent 50%),
                radial-gradient(circle at ${30 - mouseX * 15}% ${70 - mouseY * 15}%, #8000ff 0%, transparent 50%),
                radial-gradient(circle at ${70 + mouseX * 10}% ${30 + mouseY * 10}%, #00bfff 0%, transparent 50%)
            `;
        }

        // Partículas
        // Partículas — solo dentro del viewport para evitar overflow
        const particlesContainer = document.getElementById('particles');
        particlesContainer.style.overflow = 'hidden';
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 3 + 1.5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            // Limitar al 90% del ancho para evitar partículas en el borde
            particle.style.left = (Math.random() * 90 + 5) + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.background = 'white';
            particle.style.opacity = Math.random() * 0.4 + 0.1;
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = Math.random() * 12 + 12 + 's';
            particlesContainer.appendChild(particle);
        }

        // Barra de progreso
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxScroll) * 100;
            document.getElementById('progress-bar').style.width = progress + '%';
        });

        // Navegación suave
        window.scrollToSection = function (id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            // Actualizar botones activos
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-gradient-to-r', 'from-pink-500', 'via-purple-500', 'to-cyan-500', 'text-white');
                btn.classList.add('text-gray-400');
            });
        }

        updateBackground();

        // --- AUDIO Y SCROLL INTERACTIVO ---

        // Elementos de audio
        const bgMusic = new Audio('interestelar.mp3');
        bgMusic.loop = true;
        bgMusic.volume = 0.8; // 80% Volumen

        // Sonidos invertidos: Down usa 2.mp3, Up usa 1.mp3
        const scrollDownSound = new Audio('2.mp3');
        const scrollUpSound = new Audio('1.mp3');
        scrollDownSound.volume = 0.5; // 50% Volumen
        scrollUpSound.volume = 0.5;   // 50% Volumen

        // Manejo de música de fondo (Autoplay policy fix)
        let musicStarted = false;

        function startMusic() {
            if (!musicStarted) {
                bgMusic.play().then(() => {
                    musicStarted = true;
                    console.log("Música de fondo iniciada");
                }).catch(e => {
                    console.log("Autoplay bloqueado, esperando interacción");
                });
            }
        }

        // Intentar iniciar música con cualquier interacción
        document.body.addEventListener('click', startMusic, { once: true });
        document.body.addEventListener('scroll', startMusic, { once: true });
        window.addEventListener('scroll', startMusic, { once: true });


        // Control de Visibilidad del Texto Bio (Mantenemos scroll simple para esto)
        window.addEventListener('scroll', () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;

            // Visibilidad del Texto Bio
            const bioText = document.getElementById('bio-text');
            if (bioText) {
                const viewportHeight = window.innerHeight;
                // Si el scroll supera la mitad de la altura de la ventana
                if (st > viewportHeight / 2) {
                    bioText.classList.remove('opacity-0', 'translate-y-10');
                    bioText.classList.add('opacity-100', 'translate-y-0');
                } else {
                    bioText.classList.add('opacity-0', 'translate-y-10');
                    bioText.classList.remove('opacity-100', 'translate-y-0');
                }
            }
        }, false);


        // Control de Sonidos por Secciones (Intersection Observer)
        // Solo suena una vez al cambiar de sección

        // Esperar a que el contenido se renderice antes de buscar secciones
        setTimeout(() => {
            const sections = document.querySelectorAll('section');
            let currentSectionIndex = 0;

            const audioSectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const newIndex = Array.from(sections).indexOf(entry.target);

                        // Solo sonar si cambiamos de sección (ignorando la carga inicial si es el top)
                        if (newIndex !== -1 && newIndex !== currentSectionIndex) {

                            if (newIndex > currentSectionIndex) {
                                // Bajando
                                scrollDownSound.currentTime = 0;
                                scrollDownSound.play().catch(() => { });
                            } else if (newIndex < currentSectionIndex) {
                                // Subiendo
                                scrollUpSound.currentTime = 0;
                                scrollUpSound.play().catch(() => { });
                            }

                            currentSectionIndex = newIndex;
                        }
                    }
                });
            }, {
                threshold: 0.3 // Detectar cuando el 30% de la sección es visible
            });

            sections.forEach(section => audioSectionObserver.observe(section));
        }, 100);


        // --- RENDERIZADO FINAL ---
        function renderContent() {
            const main = document.getElementById('main-content');
            let html = '';

            // Hero
            html += `
                <section id="hero" style="min-height:100svh;display:flex;align-items:center;justify-content:center;padding-top:8rem;padding-bottom:2rem;overflow:hidden;">
                    <div style="max-width:48rem;width:100%;margin:0 auto;text-align:center;padding:0 1rem;" class="reveal-base reveal-zoom">
                        <div style="position:relative;display:inline-block;margin-bottom:2.5rem;" class="floating">
                            <div style="position:absolute;inset:-8px;background:linear-gradient(to right,#ff0080,#8000ff,#00bfff);border-radius:9999px;filter:blur(20px);opacity:0.5;"></div>
                            <div style="position:relative;width:12rem;height:12rem;border-radius:9999px;background:linear-gradient(to right,#ff0080,#00bfff);padding:3px;margin:0 auto;">
                                <div style="width:100%;height:100%;border-radius:9999px;background:#000;overflow:hidden;">
                                    ${portfolioData.personal.photo ?
                    `<img src="${portfolioData.personal.photo}" alt="${portfolioData.personal.name}" style="width:100%;height:100%;object-fit:cover;">` :
                    `<div style="font-size:3rem;font-weight:700;" class="gradient-text">${portfolioData.personal.initials}</div>`
                }
                                </div>
                            </div>
                        </div>
                        <h1 style="font-size:clamp(2rem,10vw,5rem);font-weight:800;margin-bottom:0.75rem;line-height:1.1;word-break:break-word;overflow-wrap:break-word;" class="gradient-text">
                            ${portfolioData.personal.name}
                        </h1>
                        <p style="font-size:clamp(1rem,4vw,1.5rem);color:#c084fc;margin-bottom:0.5rem;font-weight:300;">
                            ${portfolioData.personal.title}
                        </p>
                        <p style="font-size:0.95rem;color:#9ca3af;margin-bottom:1rem;">
                            ${portfolioData.personal.age_location}
                        </p>
                        <p id="bio-text" style="font-size:1rem;color:#9ca3af;margin-bottom:2rem;max-width:36rem;margin-left:auto;margin-right:auto;line-height:1.7;transition:all 1s ease;opacity:0;transform:translateY(10px);">
                            ${portfolioData.personal.bio}
                        </p>
                        <div style="display:flex;flex-direction:column;gap:0.75rem;align-items:center;width:100%;max-width:280px;margin:0 auto;">
                            ${portfolioData.personal.cv_link ? `
                            <button onclick="showCVModal()" class="cv-btn" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.8rem 1.5rem;background:linear-gradient(135deg,#ff0080,#8000ff,#00bfff);border-radius:9999px;color:#fff;font-weight:600;border:none;cursor:pointer;width:100%;font-size:0.95rem;box-shadow:0 10px 30px rgba(255,0,128,0.35);">
                                🧿 Visualizar CV
                            </button>` : ''}
                            <a href="#contact" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.8rem 1.5rem;background:linear-gradient(135deg,#ff0080,#8000ff,#00bfff);border-radius:9999px;color:#fff;font-weight:600;text-decoration:none;width:100%;font-size:0.95rem;box-shadow:0 10px 30px rgba(255,0,128,0.35);">
                                📧 Contáctame
                            </a>
                        </div>
                    </div>
                </section>
            `;

            // About
            html += `
                <section id="about" style="padding-top:5rem;padding-bottom:3rem;overflow:hidden;">
                    <div style="max-width:72rem;margin:0 auto;padding:0 1rem;">
                        <h2 style="font-size:clamp(2rem,8vw,3.5rem);font-weight:800;margin-bottom:2.5rem;text-align:center;" class="gradient-text reveal-base reveal-up">Sobre Mí</h2>
                        <div style="display:flex;flex-direction:column;gap:1.5rem;">
                            <div class="glass-card reveal-base reveal-left" style="border-radius:1.5rem;padding:1.5rem;">
                                <p style="color:#d1d5db;font-size:0.95rem;line-height:1.75;margin-bottom:0.75rem;">${portfolioData.about.main}</p>
                                <p style="color:#d1d5db;font-size:0.95rem;line-height:1.75;">${portfolioData.about.secondary}</p>
                                <div style="display:flex;gap:1rem;margin-top:1.5rem;flex-wrap:wrap;">
                                    <span class="floating" style="font-size:1.8rem;animation-delay:0s" title="Estrategia">🎯</span>
                                    <span class="floating" style="font-size:1.8rem;animation-delay:1s" title="Análisis">📊</span>
                                    <span class="floating" style="font-size:1.8rem;animation-delay:2s" title="Crecimiento">🚀</span>
                                    <span class="floating" style="font-size:1.8rem;animation-delay:0.5s" title="Tecnología">🤖</span>
                                    <span class="floating" style="font-size:1.8rem;animation-delay:1.5s" title="Innovación">💡</span>
                                </div>
                            </div>
                            <div style="position:relative;" class="reveal-base reveal-right">
                                <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(255,0,128,0.2),rgba(128,0,255,0.2),rgba(0,191,255,0.2));border-radius:1.5rem;filter:blur(20px);"></div>
                                <div class="glass-card" style="position:relative;border-radius:1.5rem;padding:1.5rem;">
                                    <div style="font-size:2.5rem;margin-bottom:0.75rem;">💻</div>
                                    <h3 style="font-size:1.25rem;font-weight:700;color:#fff;margin-bottom:0.75rem;">${portfolioData.about.philosophy.title}</h3>
                                    <p style="color:#d1d5db;font-size:0.9rem;line-height:1.7;">${portfolioData.about.philosophy.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

            // Skills
            const skillItems = portfolioData.skills.map((skill, index) => `
                <div class="glass-card reveal-base reveal-rotate" style="border-radius:1rem;padding:1.25rem;transition-delay:${index * 80}ms;">
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
                        <div style="display:flex;align-items:center;gap:0.6rem;">
                            ${skill.iconType === 'text'
                    ? `<span style="font-size:1.4rem;font-weight:700;" class="gradient-text">${skill.symbol}</span>`
                    : `<span style="font-size:1.4rem;">${skill.symbol}</span>`
                }
                            <span style="font-size:0.95rem;font-weight:600;color:#fff;">${skill.name}</span>
                        </div>
                        <span style="font-size:1.1rem;font-weight:700;color:#f472b6;">${skill.percentage}%</span>
                    </div>
                    <div style="width:100%;background:#1f2937;border-radius:9999px;height:8px;overflow:hidden;">
                        <div style="height:100%;background:linear-gradient(to right,#ff0080,#8000ff,#00bfff);border-radius:9999px;width:${skill.percentage}%;"></div>
                    </div>
                </div>
            `).join('');

            html += `
                <section id="skills" style="padding-top:4rem;padding-bottom:3rem;overflow:hidden;">
                    <div style="max-width:72rem;margin:0 auto;padding:0 1rem;">
                        <h2 style="font-size:clamp(2rem,8vw,3.5rem);font-weight:800;margin-bottom:2rem;text-align:center;" class="gradient-text reveal-base reveal-up">Habilidades</h2>
                        <div style="display:grid;grid-template-columns:1fr;gap:1rem;">${skillItems}</div>
                    </div>
                </section>
            `;

            // Experience
            const expItems = portfolioData.experience.map((item, index) => {
                const animClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
                return `
                <div class="glass-card reveal-base ${animClass}" style="display:flex;flex-direction:column;gap:0.75rem;border-radius:1rem;padding:1.25rem;">
                    <div style="display:inline-block;background:linear-gradient(135deg,#ff0080,#8000ff);color:#fff;padding:0.4rem 1rem;border-radius:0.75rem;font-weight:700;font-size:0.9rem;align-self:flex-start;box-shadow:0 4px 15px rgba(255,0,128,0.3);">
                        ${item.year}
                    </div>
                    <p style="color:#d1d5db;font-size:0.9rem;line-height:1.7;">
                        ${item.description}
                    </p>
                </div>
            `}).join('');

            html += `
                <section id="experience" style="padding-top:4rem;padding-bottom:3rem;overflow:hidden;">
                    <div style="max-width:72rem;margin:0 auto;padding:0 1rem;">
                        <h2 style="font-size:clamp(2rem,8vw,3.5rem);font-weight:800;margin-bottom:2rem;text-align:center;" class="gradient-text reveal-base reveal-zoom">Experiencia y Logros</h2>
                        <div style="display:flex;flex-direction:column;gap:1rem;">${expItems}</div>
                    </div>
                </section>
            `;

            // Projects
            const projectItems = portfolioData.projects.map((proj, index) => `
                <div class="glass-card reveal-base reveal-zoom" style="border-radius:1rem;overflow:hidden;transition-delay:${index * 80}ms;">
                    <div style="height:10rem;overflow:hidden;position:relative;">
                        <img src="${proj.image}" alt="${proj.title}" style="width:100%;height:100%;object-fit:cover;">
                        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7),transparent);"></div>
                    </div>
                    <div style="padding:1rem;">
                        <h3 style="font-size:1.05rem;font-weight:700;color:#fff;margin-bottom:0.4rem;">${proj.title}</h3>
                        <p style="color:#9ca3af;font-size:0.85rem;margin-bottom:0.75rem;line-height:1.5;">${proj.desc}</p>
                        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.75rem;">
                            ${proj.tags.map(tag => `<span style="padding:0.2rem 0.6rem;background:rgba(255,0,128,0.15);color:#f9a8d4;border-radius:9999px;font-size:0.75rem;">${tag}</span>`).join('')}
                        </div>
                        ${proj.link ? `
                            <a href="${proj.link}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:0.35rem;color:#f472b6;font-size:0.85rem;font-weight:600;text-decoration:none;">
                                🔗 Ver referencia
                            </a>
                        ` : ''}
                    </div>
                </div>
            `).join('');

            html += `
                <section id="projects" style="padding-top:4rem;padding-bottom:3rem;overflow:hidden;">
                    <div style="max-width:72rem;margin:0 auto;padding:0 1rem;">
                        <h2 style="font-size:clamp(2rem,8vw,3.5rem);font-weight:800;margin-bottom:2rem;text-align:center;" class="gradient-text reveal-base reveal-up">Proyectos Destacados</h2>
                        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr));gap:1rem;">${projectItems}</div>
                    </div>
                </section>
            `;

            // Education section removed

            // Contact
            const contactInfos = portfolioData.contact.info.map(info => {
                const content = `
                    <div class="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/50 shrink-0">
                        ${info.icon}
                    </div>
                    <span class="text-gray-300 break-all">${info.text}</span>
                `;

                if (info.link) {
                    return `
                        <a href="${info.link}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/50 transition-all hover:bg-white/10 cursor-pointer">
                            ${content}
                        </a>
                    `;
                }

                return `
                    <div class="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/50 transition-all">
                        ${content}
                    </div>
                `;
            }).join('');

            const hobbiesItems = portfolioData.contact.hobbies.map(hobby => `
                <div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;background:rgba(255,255,255,0.05);border-radius:0.75rem;border:1px solid rgba(255,255,255,0.05);">
                    <span style="font-size:1.3rem;">${hobby.icon}</span>
                    <span style="color:#d1d5db;font-size:0.9rem;">${hobby.name}</span>
                </div>
            `).join('');

            const langItems = portfolioData.contact.languages.map(lang => {
                const fullStars = Math.floor(lang.stars);
                const hasHalfStar = lang.stars % 1 !== 0;
                let starsHtml = '';

                for (let i = 0; i < 5; i++) {
                    if (i < fullStars) {
                        starsHtml += '<span style="color:#facc15;">★</span>';
                    } else if (i === fullStars && hasHalfStar) {
                        starsHtml += '<span style="color:#ca8a04;">★</span>';
                    } else {
                        starsHtml += '<span style="color:#374151;">★</span>';
                    }
                }

                // Determine border color based on lang.border
                const borderColor = lang.border.includes('pink') ? '#ec4899' : '#a855f7';

                return `
                <div style="display:flex;align-items:center;gap:0.75rem;background:rgba(255,255,255,0.05);padding:0.75rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.05);transition:all 0.2s;">
                    <div style="width:2.5rem;height:2.5rem;border-radius:9999px;border:2px solid ${borderColor};display:flex;align-items:center;justify-content:center;font-size:1.3rem;background:rgba(0,0,0,0.2);flex-shrink:0;">${lang.flag}</div>
                    <div style="flex:1;min-width:0;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.2rem;">
                            <h5 style="color:#fff;font-weight:700;font-size:0.95rem;">${lang.name}</h5>
                            <span style="color:#9ca3af;font-size:0.75rem;">${lang.level}</span>
                        </div>
                        <div style="font-size:1.1rem;letter-spacing:0.1em;">
                             ${starsHtml}
                        </div>
                    </div>
                </div>
            `}).join('');

            html += `
                <section id="contact" style="padding-top:4rem;padding-bottom:4rem;overflow:hidden;">
                    <div style="max-width:72rem;margin:0 auto;padding:0 1rem;">
                        <h2 style="font-size:clamp(2rem,8vw,3.5rem);font-weight:800;margin-bottom:2rem;text-align:center;" class="gradient-text reveal-base reveal-up">Contacto</h2>
                        <div style="display:flex;flex-direction:column;gap:1.5rem;">
                            <div class="glass-card reveal-base reveal-left" style="border-radius:1.25rem;padding:1.25rem;">
                                <h3 style="font-size:1.15rem;font-weight:700;color:#fff;margin-bottom:1rem;">Información de Contacto</h3>
                                <div style="display:flex;flex-direction:column;gap:0.75rem;">${contactInfos}</div>
                                <div style="margin-top:1.5rem;display:flex;justify-content:center;">
                                    <a href="contacto.vcf" download="contacto.vcf" class="save-contact-btn" id="btn-guardar-contacto">
                                        💾 Guardar Contacto
                                    </a>
                                </div>
                            </div>
                            <div class="glass-card reveal-base reveal-right" style="border-radius:1.25rem;padding:1.25rem;">
                                <h3 style="font-size:1.15rem;font-weight:700;color:#fff;margin-bottom:1rem;">Pasatiempos</h3>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.25rem;">${hobbiesItems}</div>
                                <div>
                                    <h4 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:0.75rem;">Idiomas</h4>
                                    <div style="display:flex;flex-direction:column;gap:0.75rem;">${langItems}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

            main.innerHTML = html;

            init3DHover();
            initScrollReveal();
        };

        // Insert Modal HTML to body if not exists (done once)
        if (!document.getElementById('cv-modal')) {
            const modalHtml = `
                <div id="cv-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300">
                    <div class="relative bg-gray-900/90 rounded-3xl p-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl transform scale-95 transition-transform duration-300" id="cv-modal-content">
                        <button onclick="closeCVModal()" class="close-modal-btn absolute top-4 right-4 text-white text-2xl hover:text-pink-500 transition-colors z-10">✕</button>
                        <div class="flex flex-col gap-4 items-center p-4">
                            <h2 class="text-3xl font-bold text-white mb-4 gradient-text">Curriculum Vitae</h2>
                            <img src="./1cv.jpg" class="w-full rounded-lg shadow-lg" alt="CV Page 1">
                            <img src="./2cv.jpg" class="w-full rounded-lg shadow-lg" alt="CV Page 2">
                            <a href="${portfolioData.personal.cv_link}" download="Ivan_Apolinar_CV.pdf" class="mt-6 flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-pink-500/50">
                                📄 Descargar CV en PDF
                            </a>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
        }

        // Modal Logic
        function showCVModal() {
            const modal = document.getElementById('cv-modal');
            const content = document.getElementById('cv-modal-content');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
            document.body.style.overflow = 'hidden';
        }

        function closeCVModal() {
            const modal = document.getElementById('cv-modal');
            const content = document.getElementById('cv-modal-content');
            modal.classList.add('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            document.body.style.overflow = '';
        }

        // Close on click outside
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('cv-modal');
            if (e.target === modal) {
                closeCVModal();
            }
        });

        // Ejecutar el nuevo renderizado inmediatamente
        renderContent();

        // --- ANIMACIÓN DE ENTRADA CON LOGO Y BARRA ---
        document.body.style.overflow = 'hidden'; // Prevenir scroll mientras carga
        let loadProgress = 0;
        const preloaderBar = document.getElementById('preloader-bar');
        const preloaderText = document.getElementById('preloader-text');
        const preloader = document.getElementById('preloader');

        const loadingInterval = setInterval(() => {
            // Avance constante para durar exactamente 1.5 segundos (1500ms)
            // 15ms * 100 pasos = 1500ms
            loadProgress += 1;
            if (loadProgress >= 100) {
                loadProgress = 100;
                clearInterval(loadingInterval);
                finishLoading();
            }
            if (preloaderBar) preloaderBar.style.width = loadProgress + '%';
            if (preloaderText) preloaderText.textContent = 'CARGANDO ' + loadProgress + '%';
        }, 10);

        function finishLoading() {
            setTimeout(() => {
                if (preloader) {
                    preloader.style.opacity = '0'; // Efecto fade out
                    setTimeout(() => {
                        preloader.style.display = 'none';
                        document.body.style.overflow = ''; // Restaurar scroll

                        const appContent = document.getElementById('app-content');
                        if (appContent) {
                            appContent.classList.remove('page-loading');
                            appContent.classList.add('page-loaded'); // Inicia page fade-in
                        }
                    }, 700);
                }
            }, 200); // Pequeña pausa al llegar al 100% antes de desvanecer
        }

        // --- SISTEMA DE ESTADÍSTICAS DE VISITAS ---
        (function () {
            // Detectar fuente de la visita por parámetro URL (soporta ?src= y ?source= por retrocompatibilidad)
            const urlParams = new URLSearchParams(window.location.search);
            const source = urlParams.get('src') || urlParams.get('source') || 'web'; // 'qr', 'nfc', o 'web'

            // Claves en localStorage
            const STATS_KEY = 'visitStats';

            // Obtener estadísticas actuales
            function getStats() {
                try {
                    return JSON.parse(localStorage.getItem(STATS_KEY)) || { web: 0, qr: 0, nfc: 0, total: 0 };
                } catch (e) {
                    return { web: 0, qr: 0, nfc: 0, total: 0 };
                }
            }

            // Registrar visita
            const stats = getStats();
            if (source === 'qr' || source === 'nfc' || source === 'web') {
                stats[source] = (stats[source] || 0) + 1;
            } else {
                stats.web = (stats.web || 0) + 1;
            }
            stats.total = (stats.total || 0) + 1;
            localStorage.setItem(STATS_KEY, JSON.stringify(stats));

            // Enviar evento especifico (ej: visit_nfc) a Google Analytics
            if (typeof gtag === 'function') {
                const eventName = 'visit_' + source.toLowerCase(); // genera: visit_nfc, visit_qr, visit_web
                gtag('event', eventName, {
                    'event_category': 'tarjeta_digital',
                    'event_label': 'Visita por ' + source.toUpperCase()
                });
            }

            // Función global para consultar estadísticas desde la consola
            window.getVisitStats = function () {
                const currentStats = getStats();
                console.log('📊 Estadísticas de Visitas:');
                console.log('   🌐 Web directa:', currentStats.web);
                console.log('   📱 Código QR:', currentStats.qr);
                console.log('   📡 NFC:', currentStats.nfc);
                console.log('   📈 Total:', currentStats.total);
                return currentStats;
            };

            console.log('✅ Sistema de estadísticas activo. Fuente detectada:', source.toUpperCase());
            console.log('💡 Escribe getVisitStats() en la consola para ver las estadísticas.');
        })();

        // --- SISTEMA DE DOBLE TOQUE MAESTRO ---
        (function () {
            function handleInteraction(e) {
                // Buscamos el elemento interactivo más cercano
                const target = e.target.closest('button, a, .save-contact-btn, .nav-btn');

                if (!target) {
                    // Limpiar si se toca fuera
                    document.querySelectorAll('.is-selected').forEach(el => el.classList.remove('is-selected'));
                    return;
                }

                // Excepción: Los botones de navegación, botones de cerrar modal y Visualizar CV se ejecutan al instante (un toque)
                if (target.classList.contains('nav-btn') || target.closest('#nav-container') || target.classList.contains('close-modal-btn') || target.classList.contains('cv-btn')) {
                    document.querySelectorAll('.is-selected').forEach(el => el.classList.remove('is-selected'));
                    return;
                }

                // Primer toque: No tiene la clase 'is-selected'
                if (!target.classList.contains('is-selected')) {
                    // Detener COMPLETAMENTE la acción
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();

                    // Limpiar otras selecciones
                    document.querySelectorAll('.is-selected').forEach(el => el.classList.remove('is-selected'));
                    
                    // Marcar como seleccionado
                    target.classList.add('is-selected');

                    // Feedback táctil inteligente
                    if (navigator.vibrate) navigator.vibrate([10]);
                    
                    console.log('Toque 1: Seleccionado');
                } else {
                    // Segundo toque: Ya tiene 'is-selected'
                    // Permitimos que el evento fluya normalmente para que se ejecute la acción
                    console.log('Toque 2: Ejecutando acción');
                    
                    // Quitamos la selección después de un momento para permitir repetir la acción si se desea
                    setTimeout(() => {
                        target.classList.remove('is-selected');
                    }, 800);
                }
            }

            // Usamos capture: true para interceptar antes que cualquier otro script o atributo onclick
            document.addEventListener('click', handleInteraction, { capture: true });
        })();
