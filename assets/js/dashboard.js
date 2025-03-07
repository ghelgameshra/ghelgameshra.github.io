const init = async () => {
    try {
        const [penjualan, pengeluaran] = await Promise.all([
            getDashboardData("./../data/penjualan.json"),
            getDashboardData("./../data/pengeluaran.json")
        ]);

        processDashboardData(penjualan, 'Penjualan');
        processDashboardData(pengeluaran, 'Pengeluaran');
    } catch (error) {
        console.error("Gagal memuat data:", error);
    }
};

const processDashboardData = (data, type) => {
    if (!Array.isArray(data) || data.length === 0) return;

    makeTable(data, `table${type}`);
    hitungAkumulasi(data, `akumulasi${type}`);
    hitungAkumulasi(data, `akumulasi${type}Now`, true);
};

const hitungAkumulasi = (data, object, todayOnly = false) => {
    const today = getDateNow(); // Ambil tanggal sekarang di Asia/Jakarta
    
    const total = data.reduce((acc, { nominal, addtime }) => {
        const elementDate = getDateNow(addtime); // Konversi addtime ke Asia/Jakarta
        const isToday = todayOnly ? elementDate === today : true;
        return isToday ? acc + (Number(nominal) || 0) : acc;
    }, 0);

    $(`#${object}`).text(formatRupiah(total));
};

const getDashboardData = async (URL) => {
    try {
        const response = await $.get(URL);
        return Array.isArray(response) ? response : [];
    } catch (error) {
        console.error('Gagal mengambil data:', error);
        return [];
    }
};

const makeTable = (data, tableName) => {
    $(`#${tableName}`).DataTable({
        data: data,
        destroy: true,
        columns: [
            {
                targets: 0,
                searchable: false,
                orderable: false,
                render: (data, type, row, meta) => meta.settings._iDisplayStart + meta.row + 1
            },
            { data: row => formatTanggal(row.addtime) }, // Gunakan format tanggal Asia/Jakarta
            { data: row => formatRupiah(row.nominal) }
        ]
    });
};

init();
