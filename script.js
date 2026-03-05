// ============================================================
// TEXTOS DO EFEITO DIGITADO (hero)
// Altere as frases abaixo para descrever você
// ============================================================
const TYPED_PHRASES = [
    'IT Analyst Student',
    'Web Developer',
    'Problem Solver',
    'Brasileiro em Montréal 🇧🇷🍁🇨🇦'
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
