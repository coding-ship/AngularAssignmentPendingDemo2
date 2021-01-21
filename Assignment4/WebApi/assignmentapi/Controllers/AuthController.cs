using assignmentapi.Helper;
using assignmentapi.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentapi.Controllers
{
	[Route("api/")]
	[ApiController]
	[EnableCors("AllowOrigin")]
	public class AuthController : Controller
	{

		[HttpGet]
		[Route("Authorization")]
		public IActionResult Authorization(string username, string password)
		{

			AdminModel user1 =null;
			foreach (var user in HelperClass.Adminlist)
			{
				if (user.username == username && user.password == password)
				{
					user1=user;
					break;
				}

			}
			
				return Ok(user1);
			

		}

     

	  [HttpPut]
	  [Route("UpdateUser")]
			public IActionResult UpdateUser(int id,UserModel user)
		{
			UserModel User = HelperClass.Userlist.Find(s=>s.id==id);
			User.fname = user.fname;
			User.lname = user.lname;
			User.phone = user.phone;
			return Ok();

		}






		[HttpPost]
		[Route("AddNewUser")]
		public IActionResult AddUser(UserModel user)
		{
			var data=HelperClass.Adminlist.Find(s => s.username == user.email);
			if(data!=null)
			{ return Ok(null); } 
			else {
				if (user.role == "User")
				{
					int count = HelperClass.Userlist.Count();
					count++;
					user.id = count;
					HelperClass.Userlist.Add(user);
					AdminModel admin = new AdminModel();
					admin.username = user.email;
					admin.password = user.password;
					admin.role = user.role;
					HelperClass.Adminlist.Add(admin);
				}
				else
				{
					AdminModel admin = new AdminModel();
					admin.username = user.email;
					admin.password = user.password;
					admin.role = user.role;
					HelperClass.Adminlist.Add(admin);

				}
				return Ok("Success"); }

		}
		[HttpGet]
		[Route("GetUsers")]
		public IActionResult getusers()
		{
			var users = HelperClass.Userlist.ToList();
			return Ok(users);
		}

		[HttpDelete]
		[Route("DeleteUser")]
		public IActionResult DeleteUser(string mail)
		{ var tracer = HelperClass.Userdatalist;
			for(int i = 0; i < tracer.Count; i++)
            {
                if (tracer[i].useremail == mail)
                {
					HelperClass.Userdatalist.Remove(tracer[i]);
                }
            }
			var user = HelperClass.Userlist.Find(s => s.email == mail);
			HelperClass.Userlist.Remove(user);
			var data = HelperClass.Adminlist.Find(s => s.username == mail);
			HelperClass.Adminlist.Remove(data);
			
			return Ok();

		}
		




	}
}
