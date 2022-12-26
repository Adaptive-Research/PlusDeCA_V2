

import  { FindTranslation } from  "../../data/customlibs/utils" ;


const menus = [
    {
        menutitle: "JOURNAL",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/Journal/Page1`,
                icon: "list",
                type: "link",
                active: false,
                title: "Front page",
            }
        ],
    },

    {
        menutitle: "FIND CUSTOMERS",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/components/FullCalendar`,
                icon: "calendar",
                type: "link",
                active: false,
                title: "Calendar",
            },
            {
                path: `${process.env.PUBLIC_URL}/Contacts`,
                icon: "user-plus",
                type: "link",
                active: false,
                title: "Business Cards",
            },
            {
                path: `${process.env.PUBLIC_URL}/Prospection`,
                icon: "phone",
                type: "link",
                active: false,
                title: "Business development",
            },

           
            {
                path: `${process.env.PUBLIC_URL}/dashboard`,
                icon: "star",
                type: "link",
                active: false,
                title: "Results analysis",
            },


        ],
    },



    {
        menutitle: "TASKS",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/MesArticles`,
                icon: "file-text",
                type: "link",
                active: false,
                title: "Write an article",
            },
            {
                path: `${process.env.PUBLIC_URL}/MesInterviews`,
                icon: "mic",
                type: "link",
                active: false,
                title: "Respond to an interview",
            },
            {
                path: `${process.env.PUBLIC_URL}/Planifier`,
                icon: "users",
                type: "link",
                active: false,
                title: "Book a meeting",
            },
            {
                path: `${process.env.PUBLIC_URL}/MesFormations`,
                icon: "share-2",
                type: "link",
                active: false,
                title: "Offer training",
            },
            
        ],
    },

    {
        menutitle: "SERVICES",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/Achats`,
                icon: "command",
                type: "link",
                active: false,
                title: "Group Purchasing",
            },
            {
                path: `${process.env.PUBLIC_URL}/Formations`,
                icon: "help-circle",
                type: "link",
                active: false,
                title: "List of available trainings",
            },
            {
                path: `${process.env.PUBLIC_URL}/Services`,
                icon: "layers",
                type: "link",
                active: false,
                title: "List of available services",
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





function TranslateMenus(data,m,VL) {
    const arr = JSON.parse(JSON.stringify(m));
    let i, j, obj, obj2, t ;
    const Page = 'SideMenus' ;

    for (i = 0 ; i < arr.length ; i++) {

        obj = arr[i] ;

       t = FindTranslation(data,Page, obj.menutitle) ;
        if (t !== "Not Found")
          obj.menutitle = t ;
        
        for (j = 0 ; j < obj.Items.length ; j++) {

            obj2 = obj.Items[j] ;
            t = FindTranslation(data,Page, obj2.title) ;
            if (t !== "Not Found")
              obj2.title = t ;
        }
    } 

    return arr ;
}


console.log("SideMenu") ;
const VL = localStorage.getItem('ValueLangue') ;
console.log("SideMenu ValueLangue: " + VL) ;
const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;

console.log("SideMenu Translations_Text") ;
console.log(Translations_Text) ;

export const MENUITEMS = TranslateMenus(Translations_Text,menus,VL) ;
