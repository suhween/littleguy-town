# Development Workflow

This document describes the branching strategy and development workflow for littleguy.town.

## Branch Structure

We use a simplified Git Flow workflow with three types of branches:

### Main Branches

- **`main`**: Production-ready code. Always stable and deployable.
  - Protected branch
  - Only accepts merges from `develop` via Pull Request
  - Tagged with version numbers (v1.0.0, v1.1.0, etc.)
  - Deployed to production (GitHub Pages)

- **`develop`**: Integration branch for features. Active development happens here.
  - Protected branch (optional)
  - Accepts merges from `feature/*` branches
  - Should always be in a working state
  - Deployed to staging/preview environment (optional)

### Supporting Branches

- **`feature/*`**: New features or enhancements
  - Branch from: `develop`
  - Merge back to: `develop`
  - Naming: `feature/feature-name`
  - Examples: `feature/gallery-page`, `feature/little-guy-creator`

## Workflow Steps

### Starting a New Feature

1. Make sure you're on the latest `develop`:
```bash
git checkout develop
git pull origin develop
```

2. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

3. Work on your feature:
```bash
# Make changes
git add .
git commit -m "Description of changes"
```

4. Push your feature branch:
```bash
git push -u origin feature/your-feature-name
```

5. Create a Pull Request on GitHub:
   - Base: `develop`
   - Compare: `feature/your-feature-name`

6. After PR is approved and merged, delete the feature branch:
```bash
git checkout develop
git pull origin develop
git branch -d feature/your-feature-name
```

### Releasing to Production

When `develop` is ready for release:

1. Create a Pull Request:
   - Base: `main`
   - Compare: `develop`

2. Review and test thoroughly

3. Merge to `main`

4. Tag the release:
```bash
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

5. If needed, merge `main` back to `develop`:
```bash
git checkout develop
git merge main
git push origin develop
```

## Commit Message Guidelines

Use clear, descriptive commit messages:

```
<type>: <subject>

<body (optional)>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build process, dependencies, etc.

**Examples:**
```
feat: Add gallery page with grid layout

- Implemented responsive grid for little guys
- Added filtering by creator
- Integrated with database.js module
```

```
fix: Bouncing animation edge detection

Fixed issue where little guys would get stuck at viewport edges
on window resize.
```

## Current Development Priorities

### Phase 1: Gallery & Database (v0.2.0)
- [ ] `feature/gallery-page` - Display all little guys
- [ ] `feature/database-integration` - Implement database.js functions
- [ ] `feature/search-filter` - Add search and filtering

### Phase 2: Creator GUI (v0.3.0)
- [ ] `feature/creator-ui` - Build creator interface
- [ ] `feature/svg-generator` - Programmatic SVG creation
- [ ] `feature/export-svg` - Download created little guys

### Phase 3: Backend & Persistence (v0.4.0)
- [ ] `feature/backend-api` - Set up backend (TBD: Node.js/Python/Serverless)
- [ ] `feature/user-auth` - User authentication system
- [ ] `feature/submission-system` - Submit and store little guys

## Quick Reference

```bash
# Check current branch
git branch

# Switch branches
git checkout branch-name

# Create and switch to new branch
git checkout -b feature/new-feature

# See status
git status

# Stage and commit
git add .
git commit -m "Message"

# Push
git push origin branch-name

# Pull latest changes
git pull origin branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

## Branch Protection Rules (GitHub Settings)

Recommended settings for `main` branch:
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass (when CI/CD is set up)
- ✅ Require conversation resolution before merging
- ✅ Do not allow bypassing the above settings

Optional for `develop` branch:
- ✅ Require pull request reviews (for team projects)
- Consider less strict for solo development

## Tips

1. **Commit often**: Small, focused commits are easier to review and debug
2. **Pull regularly**: Stay up to date with `develop` to avoid merge conflicts
3. **One feature per branch**: Keep branches focused and short-lived
4. **Test before PR**: Make sure your code works before requesting review
5. **Clean up**: Delete merged branches to keep repository tidy

## Getting Help

- Check GitHub Issues for existing problems
- Create new Issue for bugs or feature requests
- Discussion tab for questions and ideas
