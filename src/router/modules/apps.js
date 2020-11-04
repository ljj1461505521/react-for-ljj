import loadable from "../../utils/Loadable"

const apps = [
    {
        title: "那没事了",
        path: "/home",
        component: loadable(() => import("@/view/home")),
        meta: {
            key: 12
        }
    },
    {
        title: "芜湖起飞",
        path: "/blog/add",
        component: loadable(() => import("@/view/blog/add")),
        meta: {
            key: 13
        }
    },
    {
        title: "芜湖",
        path: "/blog/list",
        component: loadable(() => import("@/view/blog/list")),
        meta: {
            key: 222
        }
    },
    {
        title: "无事",
        path: "/resume",
        component: loadable(() => import("@/view/resume")),
        meta: {
            key: 14
        }
    }
]

export default apps