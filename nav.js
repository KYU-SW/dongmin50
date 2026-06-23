const navHtml = `
<nav class="navbar">
    <a href="index.html" class="nav-logo">
        <i class="fa-solid fa-vr-cardboard"></i> DXP Lab
    </a>
    <ul class="nav-links">
        <li><a href="index.html"><i class="fa-solid fa-wand-magic-sparkles"></i> 현재 페이지 (Modern)</a></li>
        <li><a href="index_initial.html"><i class="fa-solid fa-clock-rotate-left"></i> 이전 페이지 (Basic)</a></li>
    </ul>
</nav>
`;

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');

    links.forEach((link) => {
        const href = link.getAttribute('href').toLowerCase();
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

const placeholder = document.getElementById('navbar-placeholder');
if (placeholder) {
    placeholder.innerHTML = navHtml;
    setActiveNavLink();
}
