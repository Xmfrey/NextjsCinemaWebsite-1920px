export const seriesItems = [
  {
    id: 1,
    type: "series",
    mainInfo: {
      pictureBackground: "/series/wednesday/wednesdayPoster.jpg",
      pictureName: "/series/wednesday/wednesdayName.png",
      nameAlt: "wednesday",
      rating: 10,
      year: "2022-...",
      season: "1 сезон",
      country: "США",
      genre: "Ужасы",
      mpaa: "0+",
      shortDescription:
        "Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
    },
    seasons: [
      {
        season: 1,
        series: [
          {
            seriesPreview: "/series/wednesday/episode-1.jpg",
            episodeNumber: "1 серия",
            episodeTime: "43 минуты",
          },
          {
            seriesPreview: "/series/wednesday/episode-2.jpg",
            episodeNumber: "2 серия",
            episodeTime: "41 минуты",
          },
          {
            seriesPreview: "/series/wednesday/episode-3.jpg",
            episodeNumber: "3 серия",
            episodeTime: "38 минуты",
          },
          {
            seriesPreview: "/series/wednesday/episode-4.jpg",
            episodeNumber: "4 серия",
            episodeTime: "43 минуты",
          },
        ],
      },
      { season: 2, series: null },
      { season: 3, series: null },
    ],
    mainDescription: {
      Description:
        "Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.",
      warning: true,
    },
    footerInfo: {
      premiere: "31 октября 2022",
      mainName: "Wednesday",
      country: "США",
      genre: [
        { genreName: "Фентези", genreRoute: "#" },
        { genreName: "Комедия", genreRoute: "#" },
        { genreName: "Криминал", genreRoute: "#" },
        { genreName: "Детектив", genreRoute: "#" },
      ],
      language: "Rus, Eng",
      quality: "Full HD",
    },
  },
];
