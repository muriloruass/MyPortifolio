// ============================================================
// SISTEMA DE INTERNACIONALIZAÇÃO (i18n)
// ============================================================
const TRANSLATIONS = {
    en: {
        'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills',
        'nav.projects': 'Projects', 'nav.contact': 'Contact',
        'hero.badge': 'Available for internships & projects',
        'hero.greeting': "Hi, I'm",
        'hero.subtitle': 'IT Analyst Student · La Salle, Montréal',
        'hero.btn.projects': 'View projects', 'hero.btn.contact': 'Get in touch',
        'about.label': 'Who I am', 'about.title': 'About', 'about.title.me': 'me',
        'about.stat1': 'Year of study', 'about.stat2': 'Projects completed', 'about.stat3': 'Languages',
        'skills.label': 'What I know', 'skills.title': 'My', 'skills.title.skills': 'skills',
        'skills.backend': 'Backend & Databases', 'skills.tools': 'Tools',
        'projects.label': "What I've built", 'projects.title': 'My', 'projects.title.projects': 'projects',
        'academic.label': 'Classroom work', 'academic.title.projects': 'projects',
        'contact.label': "Let's talk", 'contact.title': 'Get in', 'contact.title.touch': 'touch',
        'contact.heading': "Let's build something together?",
        'contact.intro': "I'm open to internship opportunities, freelance work, and collaborative projects. Send me a message. I'll reply as soon as possible!",
        'form.name': 'Name', 'form.subject': 'Subject', 'form.message': 'Message', 'form.send': 'Send message',
        'form.placeholder.name': 'Your full name', 'form.placeholder.email': 'your@email.com',
        'form.placeholder.subject': 'What would you like to talk about?', 'form.placeholder.message': 'Your message here...',
        'form.error': 'Please fill in all fields.', 'form.success': "✓ Message sent! I'll get back to you soon.",
        typed: ['IT Analyst Student', 'Web Developer', 'Problem Solver', 'Brazilian in Montréal 🇧🇷🍁🇨🇦']
    },
    pt: {
        'nav.home': 'Início', 'nav.about': 'Sobre', 'nav.skills': 'Skills',
        'nav.projects': 'Projetos', 'nav.contact': 'Contato',
        'hero.badge': 'Disponível para estágios & projetos',
        'hero.greeting': 'Olá, sou',
        'hero.subtitle': 'Estudante de Analyst IT · La Salle, Montréal',
        'hero.btn.projects': 'Ver projetos', 'hero.btn.contact': 'Entrar em contato',
        'about.label': 'Quem sou eu', 'about.title': 'Sobre', 'about.title.me': 'mim',
        'about.stat1': 'Ano de curso', 'about.stat2': 'Projetos concluídos', 'about.stat3': 'Idiomas',
        'skills.label': 'O que eu sei', 'skills.title': 'Minhas', 'skills.title.skills': 'skills',
        'skills.backend': 'Backend & Banco de Dados', 'skills.tools': 'Ferramentas',
        'projects.label': 'O que eu construí', 'projects.title': 'Meus', 'projects.title.projects': 'projetos',
        'academic.label': 'Trabalhos acadêmicos', 'academic.title.projects': 'projetos',
        'contact.label': 'Bora conversar', 'contact.title': 'Entre em', 'contact.title.touch': 'contato',
        'contact.heading': 'Vamos construir algo juntos?',
        'contact.intro': 'Estou aberto a oportunidades de estágio, freelas e projetos colaborativos. Manda uma mensagem — responderei assim que possível!',
        'form.name': 'Nome', 'form.subject': 'Assunto', 'form.message': 'Mensagem', 'form.send': 'Enviar mensagem',
        'form.placeholder.name': 'Seu nome completo', 'form.placeholder.email': 'seu@email.com',
        'form.placeholder.subject': 'Sobre o que você quer falar?', 'form.placeholder.message': 'Sua mensagem aqui...',
        'form.error': 'Por favor, preencha todos os campos.', 'form.success': '✓ Mensagem enviada! Responderei em breve.',
        typed: ['Estudante de Analyst IT', 'Desenvolvedor Web', 'Solucionador de Problemas', 'Brasileiro em Montréal 🇧🇷🍁🇨🇦']
    },
    fr: {
        'nav.home': 'Accueil', 'nav.about': 'À propos', 'nav.skills': 'Compétences',
        'nav.projects': 'Projets', 'nav.contact': 'Contact',
        'hero.badge': 'Disponible pour stages & projets',
        'hero.greeting': 'Bonjour, je suis',
        'hero.subtitle': 'Étudiant Analyste IT · La Salle, Montréal',
        'hero.btn.projects': 'Voir les projets', 'hero.btn.contact': 'Me contacter',
        'about.label': 'Qui suis-je', 'about.title': 'À propos de', 'about.title.me': 'moi',
        'about.stat1': "Année d'études", 'about.stat2': 'Projets complétés', 'about.stat3': 'Langues',
        'skills.label': 'Ce que je sais', 'skills.title': 'Mes', 'skills.title.skills': 'compétences',
        'skills.backend': 'Backend & Bases de données', 'skills.tools': 'Outils',
        'projects.label': "Ce que j'ai créé", 'projects.title': 'Mes', 'projects.title.projects': 'projets',
        'academic.label': 'Travaux académiques', 'academic.title.projects': 'projets',
        'contact.label': 'Parlons', 'contact.title': 'Me', 'contact.title.touch': 'contacter',
        'contact.heading': 'Construisons quelque chose ensemble?',
        'contact.intro': "Je suis ouvert aux opportunités de stage, au travail en freelance et aux projets collaboratifs. Envoyez-moi un message — je répondrai dès que possible!",
        'form.name': 'Nom', 'form.subject': 'Sujet', 'form.message': 'Message', 'form.send': 'Envoyer',
        'form.placeholder.name': 'Votre nom complet', 'form.placeholder.email': 'votre@email.com',
        'form.placeholder.subject': 'De quoi voulez-vous parler?', 'form.placeholder.message': 'Votre message ici...',
        'form.error': 'Veuillez remplir tous les champs.', 'form.success': '✓ Message envoyé! Je vous répondrai bientôt.',
        typed: ['Étudiant Analyste IT', 'Développeur Web', 'Solutionneur de problèmes', 'Brésilien à Montréal 🇧🇷🍁🇨🇦']
    },
    es: {
        'nav.home': 'Inicio', 'nav.about': 'Sobre mí', 'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
        'hero.badge': 'Disponible para prácticas & proyectos',
        'hero.greeting': 'Hola, soy',
        'hero.subtitle': 'Estudiante de Analyst IT · La Salle, Montréal',
        'hero.btn.projects': 'Ver proyectos', 'hero.btn.contact': 'Contáctame',
        'about.label': 'Quién soy', 'about.title': 'Sobre', 'about.title.me': 'mí',
        'about.stat1': 'Año de estudio', 'about.stat2': 'Proyectos completados', 'about.stat3': 'Idiomas',
        'skills.label': 'Lo que sé', 'skills.title': 'Mis', 'skills.title.skills': 'habilidades',
        'skills.backend': 'Backend & Bases de datos', 'skills.tools': 'Herramientas',
        'projects.label': 'Lo que he construido', 'projects.title': 'Mis', 'projects.title.projects': 'proyectos',
        'academic.label': 'Trabajos académicos', 'academic.title.projects': 'proyectos',
        'contact.label': 'Hablemos', 'contact.title': 'Ponte en', 'contact.title.touch': 'contacto',
        'contact.heading': '¿Construyamos algo juntos?',
        'contact.intro': 'Estoy abierto a oportunidades de prácticas, trabajo freelance y proyectos colaborativos. ¡Envíame un mensaje y te responderé lo antes posible!',
        'form.name': 'Nombre', 'form.subject': 'Asunto', 'form.message': 'Mensaje', 'form.send': 'Enviar mensaje',
        'form.placeholder.name': 'Tu nombre completo', 'form.placeholder.email': 'tu@email.com',
        'form.placeholder.subject': '¿De qué quieres hablar?', 'form.placeholder.message': 'Tu mensaje aquí...',
        'form.error': 'Por favor, completa todos los campos.', 'form.success': '✓ ¡Mensaje enviado! Te responderé pronto.',
        typed: ['Estudiante de Analyst IT', 'Desarrollador Web', 'Solucionador de Problemas', 'Brasileño en Montréal 🇧🇷🍁🇨🇦']
    },
    it: {
        'nav.home': 'Home', 'nav.about': 'Chi sono', 'nav.skills': 'Competenze',
        'nav.projects': 'Progetti', 'nav.contact': 'Contatto',
        'hero.badge': 'Disponibile per stage & progetti',
        'hero.greeting': 'Ciao, sono',
        'hero.subtitle': 'Studente di Analyst IT · La Salle, Montréal',
        'hero.btn.projects': 'Vedi progetti', 'hero.btn.contact': 'Contattami',
        'about.label': 'Chi sono', 'about.title': 'Su di', 'about.title.me': 'me',
        'about.stat1': 'Anno di studio', 'about.stat2': 'Progetti completati', 'about.stat3': 'Lingue',
        'skills.label': 'Cosa so fare', 'skills.title': 'Le mie', 'skills.title.skills': 'competenze',
        'skills.backend': 'Backend & Database', 'skills.tools': 'Strumenti',
        'projects.label': 'Cosa ho creato', 'projects.title': 'I miei', 'projects.title.projects': 'progetti',
        'academic.label': 'Lavori accademici', 'academic.title.projects': 'progetti',
        'contact.label': 'Parliamo', 'contact.title': 'Mettiti in', 'contact.title.touch': 'contatto',
        'contact.heading': 'Costruiamo qualcosa insieme?',
        'contact.intro': 'Sono aperto a opportunità di stage, lavoro freelance e progetti collaborativi. Mandami un messaggio — risponderò il prima possibile!',
        'form.name': 'Nome', 'form.subject': 'Oggetto', 'form.message': 'Messaggio', 'form.send': 'Invia messaggio',
        'form.placeholder.name': 'Il tuo nome completo', 'form.placeholder.email': 'tua@email.com',
        'form.placeholder.subject': 'Di cosa vuoi parlare?', 'form.placeholder.message': 'Il tuo messaggio qui...',
        'form.error': 'Per favore compila tutti i campi.', 'form.success': '✓ Messaggio inviato! Ti risponderò presto.',
        typed: ['Studente di Analyst IT', 'Sviluppatore Web', 'Risolutore di Problemi', 'Brasiliano a Montréal 🇧🇷🍁🇨🇦']
    }
};

const LANG_LABELS = { en: 'EN', pt: 'PT', fr: 'FR', es: 'ES', it: 'IT' };

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(code) {
    const t = TRANSLATIONS[code];
    if (!t) return;
    currentLang = code;
    localStorage.setItem('lang', code);
    document.documentElement.lang = code;

    // Swap text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Swap placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Update navbar badge
    document.getElementById('langCurrent').textContent = LANG_LABELS[code];

    // Update active option in modal
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === code);
    });

    // Update typed phrases
    TYPED_PHRASES.length = 0;
    (t.typed || TRANSLATIONS.en.typed).forEach(p => TYPED_PHRASES.push(p));
}

// ============================================================
// MODAL LOGIC
// ============================================================
const langModal = document.getElementById('langModal');
const langBtn = document.getElementById('langBtn');
const langClose = document.getElementById('langModalClose');

function openLangModal() { langModal.classList.add('open'); }
function closeLangModal() { langModal.classList.remove('open'); }

langBtn.addEventListener('click', openLangModal);
langClose.addEventListener('click', closeLangModal);
langModal.addEventListener('click', e => { if (e.target === langModal) closeLangModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLangModal(); });

document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
        closeLangModal();
    });
});

// Apply saved/default language on load
applyLanguage(currentLang);

// ============================================================
// TEXTOS DO EFEITO DIGITADO (hero)
// Altere as frases abaixo para descrever você
// ============================================================
const TYPED_PHRASES = [
    'IT Analyst Student',
    'Web Developer',
    'Problem Solver',
    'Brazilian in Montréal 🇧🇷🍁🇨🇦'
];


// ============================================================
// FADE-IN AO CARREGAR A PÁGINA
// ============================================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================================
// HAMBURGER MENU (mobile)
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ============================================================
// NAVBAR — muda o fundo ao rolar
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ============================================================
// DESTAQUE DO LINK ATIVO conforme seção visível
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const bottom = top + sec.offsetHeight;
        const id = sec.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < bottom);
        }
    });
};
window.addEventListener('scroll', highlightNav);

// ============================================================
// EFEITO DIGITADO (Typing animation)
// ============================================================
const typedEl = document.getElementById('typed');
let phraseIdx = 0;
let charIdx = 0;
let deleting = false;

function typeLoop() {
    const phrase = TYPED_PHRASES[phraseIdx];

    if (!deleting) {
        // Adiciona um caractere
        typedEl.textContent = phrase.slice(0, ++charIdx);
        if (charIdx === phrase.length) {
            // Pausa no final antes de deletar
            deleting = true;
            setTimeout(typeLoop, 1800);
            return;
        }
        setTimeout(typeLoop, 90);
    } else {
        // Remove um caractere
        typedEl.textContent = phrase.slice(0, --charIdx);
        if (charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % TYPED_PHRASES.length;
            setTimeout(typeLoop, 400);
            return;
        }
        setTimeout(typeLoop, 45);
    }
}

// Inicia o efeito após 800ms
setTimeout(typeLoop, 800);

// ============================================================
// FADE-UP ao rolar (Intersection Observer)
// Todos os elementos com classe .fade-up animam ao aparecer
// ============================================================
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Pequeno delay escalonado para elementos próximos
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ============================================================
// SMOOTH SCROLL para links de âncora (#seção)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================================
// BOTÃO VOLTAR AO TOPO
// ============================================================
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
});
backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// FORMULÁRIO DE CONTATO
// Por padrão mostra uma mensagem de sucesso.
// Para enviar de verdade: integre com EmailJS, Formspree, etc.
// ============================================================
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação simples
    if (!name || !email || !subject || !message) {
        formMsg.textContent = 'Please fill in all fields.';
        formMsg.className = 'form-msg error';
        formMsg.style.display = 'block';
        return;
    }

    // Simulação de envio bem-sucedido
    formMsg.textContent = '✓ Message sent! I\'ll get back to you soon.';
    formMsg.className = 'form-msg success';
    formMsg.style.display = 'block';
    contactForm.reset();

    // Esconde o feedback após 5 segundos
    setTimeout(() => { formMsg.style.display = 'none'; }, 5000);
});
