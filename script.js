// script.js

// Données des ventes mensuelles
const salesData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    datasets: [{
        label: 'Ventes',
        data: [1200, 1500, 1700, 2000, 2300, 2500, 2700, 3000, 3200, 3500, 3700, 4000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Configuration du graphique
const config = {
    type: 'line',
    data: salesData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Ventes Mensuelles pour l\'Année 2024'
            },
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Montant des Ventes (en €)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Mois'
                }
            }
        }
    }
};

// Rendu du graphique
const salesChart = new Chart(
    document.getElementById('salesChart'),
    config
);
