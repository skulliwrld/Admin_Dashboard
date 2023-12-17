import { 
    MdAnalytics, 
    MdAttachMoney,
    MdDashboard, 
    MdHelpCenter, 
    MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle, 
    MdWork 
} from "react-icons/md"

import { FaUserAlt, FaUser,FaRegUserCircle } from "react-icons/fa";

export const  MenuData = [
    {
        title:'Pages',
        list:[
            {
                title:"Dashboard",
                path:"/dashboard",
                icons: <MdDashboard />
            },
            {
                title:"Users",
                path:"/dashboard/users",
                icons:<MdSupervisedUserCircle />
            },
            {
                title:"Products",
                path:"/dashboard/products",
                icons:<MdShoppingBag />
            },
            {
                title:"Transactions",
                path:"/dashboard/transactions",
                icons:<MdAttachMoney />
            },
        ]
    },

    {
        title: "Analytics",
        list:[{
            title:"Teams",
            path:'/dashboard/team',
            icons:< MdPeople />
        },

        {
            title:"Reports",
            path:'/dashboard/report',
            icons:< MdAnalytics />
        },
        {
            title:"Revenue",
            path:'/dashboard/revenue',
            icons:< MdWork />
        },
    ]
    },
    {
        title:'User',
        list:[
            {
                title:"Settings",
                path:"/dashboard/setting",
                icons:<MdOutlineSettings />
            },

            {
                title:"Help",
                path:"/dashboard/help",
                icons:<MdHelpCenter />
            },


        ]
    },

    
];


export const CardDetails = [
    {
        title : "Total Users",
        User_Amount : 45.576,
        prev_count: "12%",
        icons: <FaUser />
    },

    {
        title : "Active Users",
        User_Amount : 23.34,
        prev_count: "16%",
        icons: <FaUserAlt />
    },

    {
        title : "Current Users",
        User_Amount : 36.56,
        prev_count: "85%",
        icons: <FaRegUserCircle />
    }
]

