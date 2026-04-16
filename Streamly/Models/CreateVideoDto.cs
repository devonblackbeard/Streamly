namespace Streamly.Models;

public class CreateVideoDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    //public IFormFile ImageUpload { get; set; }
    public IFormFile VideoUpload { get; set; }
    public int CategoryId { get; set; }
    public string ImageContentTypes { get; set; }
    public string VideoContentTypes { get; set; }
    public string ThumbnailUrl { get; set; }
}
