document.addEventListener('DOMContentLoaded', () => {
    // ... Código existente para el menú toggle ...

    // Datos de ejemplo para los gráficos
    const monthlySalesData = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Ventas ($)',
            data: [1200, 1900, 3000, 5000, 2300, 4000],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    };

    const deviceUsersData = {
        labels: ['Móvil', 'Tablet', 'Escritorio'],
        datasets: [{
            label: 'Usuarios',
            data: [55, 15, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Crear el gráfico de barras de ventas
    const monthlySalesCtx = document.getElementById('monthlySalesChart').getContext('2d');
    new Chart(monthlySalesCtx, {
        type: 'bar',
        data: monthlySalesData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Crear el gráfico de dona de usuarios por dispositivo
    const deviceUsersCtx = document.getElementById('deviceUsersChart').getContext('2d');
    new Chart(deviceUsersCtx, {
        type: 'doughnut',
        data: deviceUsersData,
        options: {
            responsive: true
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... Tu código existente para el menú toggle y los gráficos ...

    // Lógica para el tema claro/oscuro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    const themeIcon = themeToggle.querySelector('.material-icons');

    // Cargar el tema guardado en localStorage al iniciar
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            themeIcon.textContent = 'light_mode';
        }
    }

    // Alternar el tema al hacer clic
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        let theme = 'light-theme';
        if (body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
            themeIcon.textContent = 'light_mode'; // Cambiar icono a sol
        } else {
            themeIcon.textContent = 'dark_mode'; // Cambiar icono a luna
        }
        localStorage.setItem('theme', theme);
    });
});