import dashboard from "./views/dashboard.js";
import about from "./views/about.js";
import contact from "./views/contact.js";
import login from "./views/login.js";
import membership from "./views/membership.js";
import donate from "./views/donate.js";



const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path:"/", view: dashboard},
        {path:"/about", view: about},
        {path:"/contact", view: contact},
        {path:"/login", view: login},
        {path:"/membership", view: membership},
        {path:"/donate", view: donate},
        // {path:"/settings", view: () => console.log("viewing Settings") },

    ];


// test esch route for potential matches

const potentialMatches = routes.map(route => {
    return{
        route: route,
        isMatch: location.pathname === route.path

    };
});

let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
if(!match){
    match = {
        route: routes[0],
        isMatch: true
    }

   
}

const view = new match.route.view();

document.querySelector("#app").innerHTML = await view.getHtml();
console.log(view);

};


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click",e=> {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})