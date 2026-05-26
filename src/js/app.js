import { initHeaderMenu } from './header.js';
import { renderInicio } from './inicio.js';

function renderProfesores() {
    const contenedor = document.getElementById('contenido');
    if (!contenedor) return;
    contenedor.innerHTML = `
        <section class="page-section">
            <h1>Profesores</h1>
            <p>Aquí puedes mostrar la lista y gestión de profesores.</p>
        </section>
    `;
}

function renderGrado() {
    const contenedor = document.getElementById('contenido');
    if (!contenedor) return;
    contenedor.innerHTML = `
        <section class="page-section">
            <h1>Grado</h1>
            <p>Aquí puedes mostrar los grados disponibles.</p>
        </section>
    `;
}

function renderSalones() {
    const contenedor = document.getElementById('contenido');
    if (!contenedor) return;
    contenedor.innerHTML = `
        <section class="page-section">
            <h1>Salones</h1>
            <p>Aquí puedes mostrar los salones y su estado.</p>
        </section>
    `;
}

function renderHorarios() {
    const contenedor = document.getElementById('contenido');
    if (!contenedor) return;
    contenedor.innerHTML = `
        <section class="page-section">
            <h1>Horarios</h1>
            <p>Aquí puedes mostrar el calendario y horarios de clases.</p>
        </section>
    `;
}

function renderNotFound() {
    const contenedor = document.getElementById('contenido');
    if (!contenedor) return;
    contenedor.innerHTML = `
        <section class="page-section">
            <h1>404</h1>
            <p>Página no encontrada.</p>
        </section>
    `;
}

const routes = {
    '/': renderInicio,
    '/inicio': renderInicio,
    '/profesores': renderProfesores,
    '/grado': renderGrado,
    '/salones': renderSalones,
    '/horarios': renderHorarios,
};

function router() {
    const path = window.location.hash.slice(1).toLowerCase() || '/';
    const render = routes[path] || renderNotFound;
    render();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    initHeaderMenu();
    router();
});
