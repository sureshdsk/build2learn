export function getNavigation() {
    return [
        { name: "Home", href: "#" },
        {
            name: "Projects",
            href: "#",
            submenu: [
                { name: "Project List", href: "projects" },
                { name: "Add Project", href: "add-projects" }
            ],
        },
        {
            name: "About Build2Learn",
            href: "about-us"
        },
        { name: "Login", href: "#" },
        { name: "Signup", href: "#" },
    ];
}
