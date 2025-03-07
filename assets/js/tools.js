const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
};

// ✅ Fungsi untuk mendapatkan tanggal sesuai Asia/Jakarta
const getDateNow = (date = null) => {
    return new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date ? new Date(date) : new Date()).split('/').reverse().join('-'); // Ubah format ke YYYY-MM-DD
};

// ✅ Format tanggal lebih lengkap: "Senin, 2025-03-08"
const formatTanggal = (date) => {
    return new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date(date)).replace(/\//g, '-');
};