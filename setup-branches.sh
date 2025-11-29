#!/bin/bash

# Setup script for littleguy.town branching workflow
# Run this after successfully pushing main to GitHub

echo "🌳 Setting up branch workflow for littleguy.town..."
echo ""

# Create develop branch from main
echo "📍 Creating develop branch from main..."
git checkout -b develop

# Push develop to remote
echo "📤 Pushing develop branch to GitHub..."
git push -u origin develop

# Return to main
git checkout main

echo ""
echo "✅ Branch setup complete!"
echo ""
echo "Your branches:"
git branch -a
echo ""
echo "🎯 Next steps:"
echo "1. Set up branch protection on GitHub:"
echo "   Settings → Branches → Add branch protection rule"
echo "   - For 'main': Require pull request reviews"
echo "   - For 'develop': (Optional) Require pull request reviews"
echo ""
echo "2. Start working on a feature:"
echo "   git checkout develop"
echo "   git checkout -b feature/your-feature-name"
echo ""
echo "3. See WORKFLOW.md for complete development guidelines"
echo ""
