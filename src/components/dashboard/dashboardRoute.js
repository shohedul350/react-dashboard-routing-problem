
import MainDashboard from './dashboardLayout'
import AllUser from './user/GetUser'
import AddUser from './user/Adduser'
import MyProfile from './user/MyProfile'


export const routes = [

	{
	  path: "/dashboard/all-user",
	  exact:true,
	  main:AllUser,
	 
	},
	{
	  path: "/dashboard/add-user",
	  exact:true,
	  main: AddUser
	 
	},
	{ 
		path: "/dashboard/my-profile",
		exact:true,
		main:MyProfile,
	   
	  },

]
