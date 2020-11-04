const menuList = [
    {
        title:"主页",
        icon:"file",
        path:"/home",
    },
    {
        title:"你猜",
        icon:"user",
        path:"/blog",
        childern:[
            {
                title:"abcd",
                path:"/blog/list",
            },
            {
                title:"cdef",
                path:"/blog/add",
            }
        ]
    },
    {
        title:"你喜欢就好",
        icon:"book",
        path:"/resume"
    }
]

export default menuList;