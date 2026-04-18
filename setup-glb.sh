#!/bin/bash
# Run this from your project root after unzipping your GLB files
# Usage: bash setup-glb.sh /path/to/your/xyz/folder

SOURCE=${1:-.}

echo "📦 Copying GLB files to /public..."

if [ -f "$SOURCE/girl1.glb" ]; then
  cp "$SOURCE/girl1.glb" public/girl1.glb
  echo "✅ girl1.glb (ALL mode)"
else
  echo "⚠️  girl1.glb not found in $SOURCE"
fi

if [ -f "$SOURCE/girl2.glb" ]; then
  cp "$SOURCE/girl2.glb" public/girl2.glb
  echo "✅ girl2.glb (GIRL mode)"
else
  echo "⚠️  girl2.glb not found in $SOURCE"
fi

if [ -f "$SOURCE/boy.glb" ]; then
  cp "$SOURCE/boy.glb" public/boy.glb
  echo "✅ boy.glb (BOY mode)"
else
  echo "⚠️  boy.glb not found (add when ready from Meshy AI)"
fi

echo ""
echo "🚀 Done! Run: npm install && npm run dev"
