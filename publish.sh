#!/bin/bash

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Resolve repo root relative to this script
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

PKG_DIR="packages/locus-ui"
PKG_JSON="$PKG_DIR/package.json"

# Get current version
CURRENT_VERSION=$(node -p "require('./$PKG_JSON').version")
echo -e "Current version: ${YELLOW}$CURRENT_VERSION${NC}"

# Determine bump type from argument (default: patch)
BUMP_TYPE="${1:-patch}"

if [[ "$BUMP_TYPE" != "patch" && "$BUMP_TYPE" != "minor" && "$BUMP_TYPE" != "major" ]]; then
  echo -e "${RED}Invalid bump type: $BUMP_TYPE${NC}"
  echo "Usage: ./publish.sh [patch|minor|major]"
  exit 1
fi

# Bump version
cd "$PKG_DIR"
NEW_VERSION=$(npm version "$BUMP_TYPE" --no-git-tag-version | tr -d 'v')
echo -e "Bumped version (${BUMP_TYPE}): ${GREEN}$NEW_VERSION${NC}"

# Build
echo "Building..."
npm run build

# Publish
echo "Publishing to npm..."
npm publish

echo -e "${GREEN}Successfully published @locus-ui/components@$NEW_VERSION${NC}"
