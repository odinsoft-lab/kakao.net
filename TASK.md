# Tasks

Prioritized checklist of actionable items.

## P0 – Build/basic functionality
- [x] Restore library build on .NET 8
- [ ] Move JS/CSS to RCL wwwroot and load via `_content/Kakao.Net/...` in samples
- [ ] Migrate interop API to `kakao.maps.*` and add error handling

## P1 – Sample migration
- [ ] Recreate `samples/map` (Blazor WASM .NET 8), update pages/interop calls
- [ ] Remove or modernize `samples/auth` as needed
- [ ] Update GitHub Pages with new sample output

## P2 – Developer productivity/quality
- [ ] Add GitHub Actions workflows (build/test/package)
- [ ] Add minimal unit tests
- [ ] Refresh README/Wiki

## P3 – Feature expansion
- [ ] Expose map parameters (center/level/type) and event callbacks
- [ ] Componentize overlays like traffic toggles
