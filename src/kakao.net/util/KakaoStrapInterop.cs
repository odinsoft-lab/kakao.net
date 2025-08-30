using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace Kakao.Net.util
{
    public class KakaoStrapInterop
    {
        private IJSRuntime JSRuntime { get; set; }

        public KakaoStrapInterop(IJSRuntime jsRuntime)
        {
            JSRuntime = jsRuntime;
        }

        public ValueTask<bool> DrawMap(double latitude, double longitude)
            => JSRuntime.InvokeAsync<bool>("kakaoMapInterop.drawMap", latitude, longitude);

        public ValueTask<bool> DrawTraffic(double latitude, double longitude)
            => JSRuntime.InvokeAsync<bool>("kakaoMapInterop.drawTraffic", latitude, longitude);
    }
}
