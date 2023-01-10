

import  { FindTranslation } from  "../../data/customlibs/utils" ;


const menus = [
    {
        menutitle: "FIND CUSTOMERS",
        Items: [
            {
                path: `${process.env.PUBLIC_URL}/Events`,
                icon: "globe",
                type: "link",
                active: false,
                title: "Events",
            },
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
                access: "1",
                active: false,
                title: "Business Cards",
            },
            {
                path: `${process.env.PUBLIC_URL}/Prospection`,
                icon: "phone",
                type: "link",
                access: "1",
                active: false,
                title: "Business development",
            },

           
            {
                path: `${process.env.PUBLIC_URL}/dashboard`,
                icon: "star",
                type: "link",
                access: "1",
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
                access: "2",
                active: false,
                title: "Organize an Event",
            },
            {
                path: `${process.env.PUBLIC_URL}/MesGroupes`,
                icon: "share-2",
                type: "link",
                active: false,
                title: "Create a network",
            },
            {
                path: `${process.env.PUBLIC_URL}/MesFormations`,
                icon: "film",
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


function GetVisibleMenus(m) {
    var arr = JSON.parse(JSON.stringify(m));
    var i, j, obj, obj2 ;

    for (i = 0 ; i < arr.length ; i++) {

        obj = arr[i] ;
        console.log("obj.title: " + obj.menutitle) ;
        console.log("obj.access: " + obj.access) ;

        if (obj.access !== undefined)
            arr.splice(i, 1);

        for (j = 0 ; j < obj.Items.length ; j++) {

            obj2 = obj.Items[j] ;

            console.log("obj2.title: " + obj2.title) ;
            console.log("obj2.access: " + obj2.access) ;

            if (obj2.access !== undefined) {
                obj.Items.splice(j, 1);
                j = j-1 ;
            }

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


var menus2 = GetVisibleMenus(menus) ;


export const MENUITEMS = TranslateMenus(Translations_Text,menus2,VL) ;
