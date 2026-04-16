using Microsoft.EntityFrameworkCore;
using Streamly.Data;
using Streamly.Models;

namespace Streamly.Features.Videos;

public static class VideoEndpoint
{
    public static RouteGroupBuilder MapVideoEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/videos");

        group.MapGet("/", async (AppDbContext db) =>
            await db.Videos.ToListAsync()
        );
        
        group.MapPost("/", async (
            CreateVideoDto request,
            IVideoService service) =>
        {
            var result = await service.CreateVideoAsync(request);
            return Results.Ok(result);
        });
    
    

        return group;
    }
}