var tanggal = 17;
var bulan = 8;
var bulanString = '';
var tahun = 1945;
if (tanggal >= 1 && tanggal <= 31) {
	if (bulan >= 1 && bulan <= 12) {
		if (tahun >= 1900 && tahun <= 2200) {
			switch (bulan) {
				case 1:
					bulanString = 'Januari';
					break;
				case 2:
					bulanString = 'Februari';
					break;
				case 3:
					bulanString = 'Maret';
					break;
				case 4:
					bulanString = 'April';
					break;
				case 5:
					bulanString = 'Mei';
					break;
				case 6:
					bulanString = 'Juni';
					break;
				case 7:
					bulanString = 'Juli';
					break;
				case 8:
					bulanString = 'Agustus';
					break;
				case 9:
					bulanString = 'September';
					break;
				case 10:
					bulanString = 'Oktober';
					break;
				case 11:
					bulanString = 'November';
					break;
				case 12:
					bulanString = 'Desember';
					break;
			}
			console.log(`${tanggal} ${bulanString} ${tahun}`);
		} else {
			console.log('Tahun OutofRangeException');
		}
	} else {
		console.log('Bulan OutofRangeException');
	}
} else {
	console.log('Tanggal OutofRangeException');
}
