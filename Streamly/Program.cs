using Streamly.Api;
using Streamly.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

// Add CORS
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Use CORS - place this before your endpoints
app.UseCors(x => x
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:5173", "https://localhost:5173"));

// var videoList = new List<Video>
// {
//     new Video {Id = 1, Title = "VideoOne", Description = "Video1 Description here", },
//     new Video {Id = 2, Title = "VideoTwo", Description = "Video2 Description here", },
//     new Video {Id = 3, Title = "VideoThree", Description = "Video3 Description here" }
// };
//
// app.MapGet("/getvideodata", () => Results.Ok(videoList))
//     .WithName("GetVideos");
app.MapVideoEndpoints();


app.Run();