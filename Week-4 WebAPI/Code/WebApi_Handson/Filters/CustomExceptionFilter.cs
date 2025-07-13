using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApi_Ex.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;

            // Log the exception to a file
            File.AppendAllText("log.txt", $"[{DateTime.Now}] {exception.Message}{Environment.NewLine}");

            context.Result = new ObjectResult("An error occurred.")
            {
                StatusCode = 500
            };

            context.ExceptionHandled = true;
        }
    }
}
