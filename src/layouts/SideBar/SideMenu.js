export const MENUITEMS = [
  {
    menutitle: "JOURNAL",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/page1`,
        icon: "list",
        type: "link",
        active: false,
        title: "A la une",
      },
      {
        path: `${process.env.PUBLIC_URL}/news`,
        icon: "globe",
        type: "link",
        active: false,
        title: "Actualités du réseau",
      },
      {
        path: `${process.env.PUBLIC_URL}/components/defaultCalendar`,
        icon: "calendar",
        type: "link",
        active: false,
        title: "Les prochaines réunions",
      },
      {
        path: `${process.env.PUBLIC_URL}/ArticlesReseau`,
        icon: "edit",
        type: "link",
        active: false,
        title: "Les articles de nos entrepreneurs",
      },
      {
        path: `${process.env.PUBLIC_URL}/found`,
        icon: "eye",
        type: "link",
        active: false,
        title: "Trouvé sur le net",
      },
      {
        path: `${process.env.PUBLIC_URL}/entrepreneur`,
        icon: "thumbs-up",
        type: "link",
        active: false,
        title: "Un entrepreneur en lumière",
      },


    ],
  },

  {
    menutitle: "MES RENCONTRES",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/components/FullCalendar`,
        icon: "calendar",
        type: "link",
        active: false,
        title: "Mon planning",
      },
      {
        path: `${process.env.PUBLIC_URL}/MesReunions`,
        icon: "user-plus",
        type: "link",
        active: false,
        title: "Mes réunions du réseau",
      },
      {
        path: `${process.env.PUBLIC_URL}/MesSalons`,
        icon: "mail",
        type: "link",
        active: false,
        title: "Mes salons",
      },
      {
        path: `${process.env.PUBLIC_URL}/MesRendezVous`,
        icon: "home",
        type: "link",
        active: false,
        title: "Mes rendez-vous client",
      },

    ],
  },  

  {
    menutitle: "MON RESEAU",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/MesContacts`,
        icon: "user-plus",
        type: "link",
        active: false,
        title: "Mes contacts",
      },
      {
        path: `${process.env.PUBLIC_URL}/MesMails`,
        icon: "mail",
        type: "link",
        active: false,
        title: "Mes mails",
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Mon activité",
      },



    ],
  },

  {
    menutitle: "MES ACTIONS",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/MesArticles`,
        icon: "file-text",
        type: "link",
        active: false,
        title: "Mes articles",
      },
      {
        path: `${process.env.PUBLIC_URL}/MesGroupes`,
        icon: "users",
        type: "link",
        active: false,
        title: "Mes groupes",
      },
    ],
  },

  {
    menutitle: "MES SERVICES",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/Formations`,
        icon: "help-circle",
        type: "link",
        active: false,
        title: "Les formations disponibles",
      },
      {
        path: `${process.env.PUBLIC_URL}/Services`,
        icon: "layers",
        type: "link",
        active: false,
        title: "Les services disponibles",
      },
    ],
  },

];
