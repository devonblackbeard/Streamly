namespace Streamly.Models;

public class CreateVideoDto
{
    public string ThumbnailUrl { get; set; } = null!;

    public string Title { get; set; } = null!;

    public string Description { get; set; } = null!;

    public int ChannelId { get; set; }
}
