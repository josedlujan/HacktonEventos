using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EventosCancun.Startup))]
namespace EventosCancun
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
