using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// 🔐 STEP 1: Add JWT Authentication
string securityKey = "mysuperdupersecretkey_1234567890!@#";
// same key used in AuthController
var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("mysuperdupersecretkey_1234567890!@#"));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "mySystem",
        ValidAudience = "myUsers",
        IssuerSigningKey = symmetricSecurityKey
    };
});

// Add services and filters
builder.Services.AddControllers();

// For Swagger UI (optional but helpful)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();

// 🚨 Important: UseAuthentication BEFORE UseAuthorization
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// Enable Swagger UI
app.UseSwagger();
app.UseSwaggerUI();

app.Run();
