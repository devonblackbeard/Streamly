namespace Streamly.Api;

using Models;

public static class VideoEndpoint
{
    public static RouteGroupBuilder MapVideoEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/videos");

        // group.MapGet("/", async (AppDbContext db) =>
        //     await db.Videos.ToListAsync());
        //
        // group.MapGet("/{id}", async (int id, AppDbContext db) =>
        // {
        //     var video = await db.Videos.FindAsync(id);
        //     return video is null ? Results.NotFound() : Results.Ok(video);
        // });
        //
        // group.MapPost("/", async (Video video, AppDbContext db) =>
        // {
        //     db.Videos.Add(video);
        //     await db.SaveChangesAsync();
        //     return Results.Created($"/api/videos/{video.Id}", video);
        // });
        //
        // group.MapDelete("/{id}", async (int id, AppDbContext db) =>
        // {
        //     var video = await db.Videos.FindAsync(id);
        //     if (video is null) return Results.NotFound();
        //     db.Videos.Remove(video);
        //     await db.SaveChangesAsync();
        //     return Results.NoContent();
        // });

        var videoList = new List<Video>
        {
            new Video { Id = 1, Title = "VideoOne", Description = "Video1 Description here", },
            new Video { Id = 2, Title = "VideoTwo", Description = "Video2 Description here", },
            new Video { Id = 3, Title = "VideoThree", Description = "Video3 Description here" }
        };

        group.MapGet("/getvideodata", () => Results.Ok(videoList))
            .WithName("GetVideos");
        
        // DTODO this should be in user api enpoint not videos
        group.MapGet("/getsubscriptions", () => Results.Ok(new List<string>{}))
            .WithName("GetUserSubscriptions");

        return group;
    }
}