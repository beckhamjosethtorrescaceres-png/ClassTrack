export function renderInicio() {
    const contenedor = document.getElementById('contenido');
    if (!contenedor) return;
    contenedor.innerHTML = `
        <div class="hero-section">
            <h1 class="hero-title">Bienvenidos a Class Track</h1>
        </div>
        <div class="stats-container">
            <div class="stat-card">
                <div class="stat-icon"><i class='bx bx-chalkboard'></i></div>
                <div class="stat-title">Profesores</div>
                <div class="stat-count">0</div>
                <a href="#/profesores" class="btn-stat btn-profesores">Ver detalles</a>
            </div>

            <div class="stat-card">
                <div class="stat-icon"><i class='bx bx-medal'></i></div>
                <div class="stat-title">Grados</div>
                <div class="stat-count">0</div>
                <a href="#/grado" class="btn-stat btn-grados">Ver detalles</a>
            </div>

            <div class="stat-card">
                <div class="stat-icon"><i class='bx bx-building'></i></div>
                <div class="stat-title">Salones</div>
                <div class="stat-count">0</div>
                <a href="#/salones" class="btn-stat btn-salones">Ver detalles</a>
            </div>

            <div class="stat-card">
                <div class="stat-icon"><i class='bx bx-calendar'></i></div>
                <div class="stat-title">Clases</div>
                <div class="stat-count">0</div>
                <a href="#/horarios" class="btn-stat btn-horarios">Ver horarios</a>
            </div>
        </div>
    `;
}
