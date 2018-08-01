var nama = '';
var peran = '';

if (nama === '') {
	console.log('Nama harus diisi!');
}
if (nama !== '' && peran === '') {
	console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}

if (
	(nama !== '' && peran.toLowerCase() === 'ksatria') ||
	peran.toLowerCase() === 'tabib' ||
	peran.toLowerCase() === 'penyihir'
) {
	console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
	if (peran.toLowerCase() === 'ksatria') {
		console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
	}
	if (peran.toLowerCase() === 'tabib') {
		console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
	}
	if (peran.toLowerCase() === 'penyihir') {
		console.log(
			`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
		);
	}
}
