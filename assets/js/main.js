$('#nav').append(`
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">LOGBOOK</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/dashboard.html" id="dashboardLink">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pengeluaran.html" id="pengeluaranLink">Pengeluaran</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`);

const path = window.location.pathname;
const windowURL = path.split('/').pop();

windowURL === 'pengeluaran.html' ? $('#pengeluaranLink').addClass('active') : $('#pengeluaranLink').removeClass('active');
windowURL === 'dashboard.html' ? $('#dashboardLink').addClass('active') : $('#dashboardLink').removeClass('active');
windowURL === 'modal.html' ? $('#modalLink').addClass('active') : $('#modalLink').removeClass('active');