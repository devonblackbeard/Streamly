using Streamly.Data;
using Streamly.Models;

namespace Streamly.Features.Videos;


public interface IVideoService
{
    Task<Video> CreateVideoAsync(CreateVideoDto request);
}

public class VideoService : IVideoService
{
    private readonly AppDbContext _db;

    public VideoService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<Video> CreateVideoAsync(CreateVideoDto request)
    {
        var video = new Video
        {
            ThumbnailUrl = request.ThumbnailUrl,
            Title = request.Title,
            Description = request.Description,
            ChannelId = 1,
            CreatedAt = DateTime.UtcNow
        };
        
        _db.Videos.Add(video);
        await _db.SaveChangesAsync();
        
        return video;
    }
}