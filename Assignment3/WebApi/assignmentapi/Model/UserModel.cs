using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentapi.Model
{
	public class UserModel
	{
		public int id { get; set; }
		public string fname { get; set; }
		public string lname { get; set; }
		public string phone { get; set; }
		public string role { get; set; }
		public string password { get; set; }
		public string email { get; set; }
	}
}
