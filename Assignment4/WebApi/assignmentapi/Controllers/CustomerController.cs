using assignmentapi.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace assignmentapi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[EnableCors("AllowOrigin")]
	public class CustomerController : ControllerBase
	{
		// GET: api/<ValuesController>
		[HttpGet]
		[Route("Getdetails")]
		public IActionResult Getdetails(string usermail)
		{ var list = new List<Userdata>();
			var data = Helper.HelperClass.Userdatalist;
			for (int i = 0; i < data.Count; i++)
			{
				if (data[i].useremail == usermail)
				{ list.Add(data[i]); }
			}	
			return Ok(list);
		}
		//[HttpDelete]
		//[Route("DeleteTracer")]
		//public IActionResult DeleteTracer(string usermail,int id)
		//{ 
		//	var list = Helper.HelperClass.Userdatalist;
		//	for(int i = 0; i < list.Count; i++)
		//          {
		//		if(list[i].useremail==usermail && list[i].id == id)
		//              {
		//			Helper.HelperClass.Userdatalist.Remove(list[i]);
		//			break;

		//              }}
		//         //Helper.HelperClass.Userdatalist.Remove(list);
		//	return Ok();
		//}
		[HttpDelete]
		[Route("DeleteTracer")]
		public IActionResult DeleteTracer(int id)
		{
			var list = Helper.HelperClass.Userdatalist.Find(s => s.id == id);
			Helper.HelperClass.Userdatalist.Remove(list);
			return Ok();
		}
		[HttpPut]
		[Route("UpdateTracer")]
		public IActionResult UpdateTracer(string usermail,int id,Userdata tracer)
        {
			var list = Helper.HelperClass.Userdatalist;
			for (int i = 0; i < list.Count; i++)
			{
				if (list[i].useremail == usermail && list[i].id == id)
				{
					list[i].observationname = tracer.observationname;
					list[i].observationdate = tracer.observationdate;
					list[i].noobservation = tracer.noobservation;
					list[i].tracername = tracer.tracername;
					
					break;

				}

			}

			return Ok();
        }
		[HttpPost]
		[Route("Addtrace")]
		public IActionResult AddTrace(string usermail,Userdata tracer)
        {
			tracer.useremail = usermail;
			int count = Helper.HelperClass.Userdatalist.Count;
			count++;
			tracer.id = count;
			Helper.HelperClass.Userdatalist.Add(tracer);
			return Ok();

        }

		
	}
}
