using Microsoft.EntityFrameworkCore;
using Streamly.Data;
using Streamly.Features.Subscriptions;
using Streamly.Features.Videos;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

// Add CORS
builder.Services.AddCors();
builder.Services.AddScoped<IVideoService, VideoService>();
// builder.Services.AddScoped<IVideoService, VideoService>();



var app = builder.Build();

if (app.Environment.IsDevelopment()) app.MapOpenApi();

app.UseHttpsRedirection();

// Use CORS - place this before your endpoints
app.UseCors(x => x
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:5173", "https://localhost:5173"));

app.MapVideoEndpoints();
app.MapSubscriptionEndpoints();



app.Run();