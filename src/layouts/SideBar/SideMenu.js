export const MENUITEMS = [
    {
        menutitle: "JOURNAL",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/Journal/Page1`,
                icon: "list",
                type: "link",
                active: false,
                title: "A la une",
            }
        ],
    },

    {
        menutitle: "TROUVER DES CLIENTS",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/components/FullCalendar`,
                icon: "calendar",
                type: "link",
                active: false,
                title: "Mon planning",
            },
            {
                path: `${process.env.PUBLIC_URL}/Contacts`,
                icon: "user-plus",
                type: "link",
                active: false,
                title: "Mes contacts",
            },
            {
                path: `${process.env.PUBLIC_URL}/Prospection`,
                icon: "phone",
                type: "link",
                active: false,
                title: "La prospection",
            },

           
            {
                path: `${process.env.PUBLIC_URL}/dashboard`,
                icon: "star",
                type: "link",
                active: false,
                title: "Bilan",
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
                title: "Ecrire un article",
            },
            {
                path: `${process.env.PUBLIC_URL}/MesInterviews`,
                icon: "mic",
                type: "link",
                active: false,
                title: "Répondre à une interview",
            },
            {
                path: `${process.env.PUBLIC_URL}/Planifier`,
                icon: "users",
                type: "link",
                active: false,
                title: "Planifier une réunion",
            },
            {
                path: `${process.env.PUBLIC_URL}/MesFormations`,
                icon: "share-2",
                type: "link",
                active: false,
                title: "Proposer une formation",
            },
            
        ],
    },

    {
        menutitle: "MES SERVICES",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/Achats`,
                icon: "command",
                type: "link",
                active: false,
                title: "Les achats groupés",
            },
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


  
    {
        menutitle: "ICONS",
        Items: [

            {
                title: "Icons",
                icon: "command",
                type: "sub",
                children: [
                    {
                        path: `${process.env.PUBLIC_URL}/icon/fontAwesome`,
                        title: "Font Awesome",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/materialDesignIcons`,
                        title: "Material Design Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/simpleLineIcons`,
                        title: "Simple Line Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/featherIcons`,
                        title: "Feather Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/ionicIcons`,
                        title: "Ionic Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/flagIcons`,
                        title: "Flag Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/pe7Icons`,
                        title: "Pe7 Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/themifyIcons`,
                        title: "Themify Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/typiconsIcons`,
                        title: "Typicons Icons",
                        type: "link",
                    },
                    {
                        path: `${process.env.PUBLIC_URL}/icon/weatherIcons`,
                        title: "Weather Icons",
                        type: "link",
                    },
                ],
            },
        ],
    },


];
