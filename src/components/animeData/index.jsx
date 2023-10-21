export async function getAnimeData(id) {
    const setData = {
        1: {
            title: 'Fullmetal Alchemist Brotherhood',
            description:
                '"Fullmetal Alchemist: Brotherhood" adalah anime yang mengikuti petualangan dua bersaudara, Edward dan Alphonse Elric, dalam upaya mereka untuk memulihkan tubuh mereka yang hilang setelah percobaan alkimia yang gagal. Mereka mencari Batu Filsuf untuk mengembalikan kondisi fisik mereka sambil mengungkap konspirasi gelap di dunia alkimia. Dengan alkimia sebagai inti cerita, anime ini menawarkan campuran dramatis, misteri, dan pertarungan yang mendalam.',
            image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png',
        },
        2: {
            title: 'Shingeki no Kyojin',
            description:
                '"Shingeki no Kyojin" (Attack on Titan) adalah anime yang berlatar di dunia yang dikuasai oleh para manusia yang melawan mengerikan makhluk raksasa pemakan manusia yang dikenal sebagai Titan. Ceritanya berkisah tentang Eren Yeager dan teman-temannya yang bergabung dalam Pasukan Pengintai untuk melindungi manusia dari ancaman Titan sambil mengungkap rahasia besar di balik asal-usul Titan. Anime ini penuh dengan misteri, aksi, dan pertarungan epik dalam pertempuran melawan musuh yang sangat kuat.',
            image: 'https://i.pinimg.com/564x/cd/17/a0/cd17a0714a4f1dcd5a7d979d8bc25aec.jpg',
        },
        3: {
            title: 'Kimetsu no Yaiba',
            description:
                '"Kimetsu no Yaiba" (Demon Slayer) mengisahkan perjalanan seorang anak bernama Tanjiro Kamado yang menjadi pemburu iblis setelah keluarganya diserang oleh iblis, meninggalkan adiknya, Nezuko, yang diubah menjadi iblis. Tanjiro berusaha untuk membalas dendam sambil berusaha menyelamatkan adiknya dan menjalani pelatihan keras untuk menjadi pemburu iblis yang kuat. Anime ini memadukan elemen cerita yang mendalam dengan pertarungan yang penuh aksi dan animasi visual yang spektakuler.',
            image: 'https://i.pinimg.com/564x/b8/98/ab/b898abd779491464d4b5ce881e43ca32.jpg',
        },
        4: {
            title: 'Bleach: Thousand Year Blood War',
            description:
                '"Bleach: Thousand Year Blood War" adalah arc terakhir dalam seri anime Bleach yang mendebarkan. Arc ini mengikuti kisah perang seribu tahun antara para Shinigami dan pasukan Quincy yang kuat, dipimpin oleh Juha Bach. Ichigo Kurosaki dan teman-temannya harus berhadapan dengan ancaman yang lebih besar dari sebelumnya, mengungkap misteri lama, dan mempertaruhkan segalanya untuk menyelamatkan Soul Society.',
            image: 'https://i.pinimg.com/564x/64/68/f4/6468f4516814b2bd80aca8477f017b1f.jpg',
        },
        5: {
            title: 'One Piece',
            description:
                '"One Piece" adalah anime yang mengikuti petualangan Monkey D. Luffy dan kru bajak laut Topi Jerami dalam mencari harta terbesar di dunia, One Piece, untuk menjadi Raja Bajak Laut. Mereka harus menghadapi musuh kuat, mengungkap misteri di balik dunia Grand Line, dan menghadapi konflik besar di dunia piranti. Anime ini penuh dengan petualangan epik, karakter yang kuat, dan pesan tentang persahabatan dan kebebasan.',
            image: 'https://i.pinimg.com/564x/3b/06/c8/3b06c8f86dc393ec9284f946c6184d6b.jpg',
        },
        6: {
            title: 'Jujutsu Kaisen',
            description:
                '"Jujutsu Kaisen" mengisahkan tentang Yuji Itadori, seorang siswa biasa yang tanpa sengaja terlibat dalam dunia ilmu gaib setelah menemukan benda terkutuk yang sangat kuat. Dia bergabung dengan Sekolah Jujutsu untuk melawan makhluk-makhluk terkutuk dan iblis yang mengancam manusia. Anime ini penuh dengan aksi, pertarungan spektakuler, dan konflik antara kekuatan supernatural yang menarik.',
            image: 'https://i.pinimg.com/564x/3b/06/c8/3b06c8f86dc393ec9284f946c6184d6b.jpg',
        },
    };
    return setData[id];
}

export async function getAnimeId() {
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
        {
            params: {
                id: '5',
            },
        },
        {
            params: {
                id: '6',
            },
        },
    ];
}
