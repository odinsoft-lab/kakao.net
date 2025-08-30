# Roadmap

This document outlines the medium-term roadmap. Timelines are subject to change.

## 1. Modernization (High)
- [x] Minimal migration of the library to .NET 8 RCL with successful build
- [ ] Move JS/CSS to RCL static web assets (wwwroot/_content)
- [ ] Update Kakao Maps interop to `kakao.maps.*`
- [ ] Introduce coordinate/options models (record/DTO) and support multiple map instances

## 2. Samples migration (High)
- [ ] Recreate `samples/map` using .NET 8 Blazor WASM template
- [ ] Use DI for interop and adopt `@onclick` event pattern
- [ ] Sync demo pages and docs

## 3. CI/CD (Medium)
- [ ] GitHub Actions: build/test/package pipelines
- [ ] Pages auto-deploy: build samples → update `docs/` or use `gh-pages` branch
- [ ] NuGet automated release on tag

## 4. DX/Documentation (Medium)
- [ ] Refresh README/Wiki for .NET 8
- [ ] Enrich API reference and guided samples
- [ ] Polish contributor docs (this doc/CONTRIBUTING)

## 5. Quality (Medium)
- [ ] Minimal unit tests (interop contract/serialization)
- [ ] Sample e2e smoke tests (optional)

## 6. Feature candidates (Low)
- [ ] Overlay toggles (traffic/bicycle/terrain)
- [ ] Marker/infowindow/clustering wrappers
- [ ] Map event bindings (OnClick/OnDrag, etc.)
