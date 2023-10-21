export async function getMovieData(id) {
    const setData = {
        1: {
            title: 'Gen V',
            description: 'Gen V bermula dari kehidupan Marie Moreau (Jaz Sinclair) yang menyadari kekuatan supernya lebih lambat daripada anak-anak super lainnya. Ketika remaja, ia baru menyadari bisa menggunakan darahnya menjadi senjata mematikan. Hal tersebut sangat memengaruhi kehidupannya hingga berusaha keras masuk Godolkin University.',
            image: 'https://i.pinimg.com/564x/27/88/e2/2788e2d61971e736a662713b7fab80d1.jpg',
        },
        2: {
            title: 'Loki 2',
            description: 'Dalam petualangannya Loki mengalami time slip atau keadaan dimanan dirinya lompat dari satu waktu ke waktu lain. Hal ini menyebabkan garis waktu semakin parah dan berpotensi memunculkan varian dari He Who Remains yakni Kang The Qonqueror muncul untuk menguasai semesta.',
            image: 'https://i.pinimg.com/564x/77/b2/66/77b266316d120f4ac7bc9f694c80f623.jpg',
        },
        3: {
            title: 'Moving',
            description: 'Drama itu mengisahkan kehidupan orang-orang dengan kekuatan super yang menghadapi ancaman misterius di Korea. Semua itu bermula pada 1990-an, ketika Badan Intelijen Korea (NIS) mendirikan tim elite rahasia yang beranggotakan manusia super. Anggota satuan elite itu ditugaskan untuk menyelesaikan berbagai misi mustahil dengan menggunakan kekuatan super mereka. Beberapa personel satuan elite itu, yakni Jang Joo-won (Ryu Seung-ryong), Lee Mi-hyeon (Han Hyo-joo), hingga Kim Doo-shik (Zo In-sung).',
            image: 'https://i.pinimg.com/564x/b8/30/c6/b830c6bca3f216c472baa1cf5c4b9743.jpg',
        },
        4: {
            title: 'Black Mirror',
            description: '"Black Mirror" adalah serial antologi yang menggali konsep-konsep futuristik dan teknologi dalam masyarakat modern. Setiap episode menghadirkan cerita berbeda tentang dampak teknologi terhadap kehidupan manusia, sering kali dengan pesan yang mencekam tentang dunia digital dan ketergantungan pada perangkat modern. Serial ini mengajukan pertanyaan etis yang mendalam tentang masa depan teknologi, komunikasi, dan perilaku manusia.',
            image: 'https://i.pinimg.com/564x/43/ff/d6/43ffd663f2e6f9c818b284e655a372d1.jpg',
        },
    };
    return setData[id];
}

export async function getMovieId(id) {
    return [
        {
            params: {
                id: '1',
            },
        },
        {
            params: {
                id: '2',
            },
        },
        {
            params: {
                id: '3',
            },
        },
        {
            params: {
                id: '4',
            },
        },
    ];
}
