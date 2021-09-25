const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenuList = document.getElementById('mobileMenu');
const ptest = document.getAnimations('ptest');

function toggleMenu() {
    mobileMenuList.classList.toggle('hidden');
    console.log('toggleMenu fired');
    ptest.innerText = 'injected text';
}

