#!/bin/bash

# Update imports in all UI components
for file in src/ui/*.tsx; do
  if [ -f "$file" ]; then
    sed -i '' 's|from "../lib/utils"|from "~/lib/utils"|g' "$file"
  fi
done 