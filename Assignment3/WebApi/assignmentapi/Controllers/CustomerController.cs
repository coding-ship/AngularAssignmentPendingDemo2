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
		public IActionResult Getdetails()
		{
			var list = Helper.HelperClass.Userdatalist.ToList();
			return Ok(list);
		}
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
		public IActionResult UpdateTracer(int id,Userdata tracer)
        {
			var list = Helper.HelperClass.Userdatalist.Find(s => s.id == id);
			list.observationname = tracer.observationname;
			list.observationdate = tracer.observationdate;
			list.noobservation = tracer.noobservation;
			list.tracername = tracer.tracername;
			return Ok();
        }
		[HttpPost]
		[Route("Addtrace")]
		public IActionResult AddTrace(Userdata tracer)
        {
			int count = Helper.HelperClass.Userdatalist.Count;
			count++;
			tracer.id = count;
			Helper.HelperClass.Userdatalist.Add(tracer);
			return Ok();

        }

		
	}
}
