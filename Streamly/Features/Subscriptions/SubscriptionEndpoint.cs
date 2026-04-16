namespace Streamly.Features.Subscriptions;

public static class SubscriptionEndpoint
{

    public static RouteGroupBuilder MapSubscriptionEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/subscriptions");
        
        group.MapGet("/", () => Results.Ok(new List<string>()))
            .WithName("GetUserSubscriptions");
        
        return group;

    }
}