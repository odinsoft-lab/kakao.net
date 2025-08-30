# Contributing to Kakao.Net

Thanks for your interest in contributing! Please follow this guide for a smooth collaboration experience.

## Development environment
- OS: Windows 10/11 recommended (macOS/Linux are fine)
- .NET SDK: 8.x+
- IDE: Visual Studio 2022 or VS Code

## Repository structure
- `src/kakao.net`: Library (Razor Class Library)
- `samples/*`: Sample apps (legacy Blazor; migration planned)
- `docs/`: GitHub Pages static site (demo output)

## Build and test
- Currently only the library builds on .NET 8.
  - Library: `dotnet build src/kakao.net -c Release`
  - Samples: blocked by legacy dependencies; will be updated after migration.

## Commit convention
Use [Conventional Commits](https://www.conventionalcommits.org/)
- Types: feat, fix, docs, refactor, perf, test, build, ci, chore
- Example: `feat(map): add traffic overlay toggle parameter`

## Branch strategy
- Default: `master`
- Feature: `feature/<short-desc>`
- Bugfix: `fix/<short-desc>`
- Release: `release/<version>` (optional)

## Pull request guidelines
- Ensure the build passes (for now, target `src/kakao.net`)
- Describe the change, intent, and any risks briefly in the PR body
- Propose big changes via an issue first, then open a PR after agreement

## Code style
- Modern C# features are welcome (within project settings)
- Naming: follow .NET guidelines (PascalCase/camelCase)
- Avoid unnecessary public API changes; consider binary compatibility

## Issues
- Include repro steps, expected/actual behavior, and environment (.NET SDK, OS)
- Use labels such as `bug`, `enhancement`, `question`, `docs`, `good first issue`

---
Questions? Please open an issue.
