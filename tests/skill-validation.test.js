#!/usr/bin/env node

/**
 * Skill Validation Tests
 * Validates that SKILL.md and ENTERPRISE.SKILL.md follow the correct format
 */

const fs = require('fs');
const path = require('path');

const SKILL_FILE = path.join(__dirname, '..', 'SKILL.md');
const ENTERPRISE_SKILL_FILE = path.join(__dirname, '..', 'ENTERPRISE.SKILL.md');

function extractFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontmatterRegex);
  if (!match) {
    return null;
  }
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();
    frontmatter[key] = value;
  }
  
  return {
    frontmatter,
    body: content.substring(match[0].length)
  };
}

function validateSkillFile(filePath, fileName) {
  console.log(`\nValidating ${fileName}...`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`❌ ${fileName} does not exist`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const parsed = extractFrontmatter(content);
  
  if (!parsed) {
    console.error(`❌ ${fileName} missing frontmatter`);
    return false;
  }
  
  const { frontmatter, body } = parsed;
  
  // Check required fields
  if (!frontmatter.name) {
    console.error(`❌ ${fileName} missing 'name' field`);
    return false;
  }
  
  if (!frontmatter.description) {
    console.error(`❌ ${fileName} missing 'description' field`);
    return false;
  }
  
  // Validate name format (lowercase, hyphens, max 64 chars)
  if (!/^[a-z0-9-]+$/.test(frontmatter.name)) {
    console.error(`❌ ${fileName} 'name' must be lowercase with hyphens only`);
    return false;
  }
  
  if (frontmatter.name.length > 64) {
    console.error(`❌ ${fileName} 'name' exceeds 64 characters`);
    return false;
  }
  
  // Validate description length
  if (frontmatter.description.length > 1024) {
    console.error(`❌ ${fileName} 'description' exceeds 1024 characters`);
    return false;
  }
  
  if (frontmatter.description.length === 0) {
    console.error(`❌ ${fileName} 'description' is empty`);
    return false;
  }
  
  // Check body length (should be under 500 lines for optimal performance)
  const bodyLines = body.split('\n').length;
  if (bodyLines > 500) {
    console.warn(`⚠️  ${fileName} body exceeds 500 lines (${bodyLines} lines)`);
  }
  
  // Check for common anti-patterns
  if (body.includes('\\')) {
    console.warn(`⚠️  ${fileName} contains Windows-style paths`);
  }
  
  // Check for key HTMX concepts
  const htmxKeywords = [
    'hx-get', 'hx-post', 'hx-swap', 'hx-target', 'fragment', 'HTML-over-the-wire'
  ];
  const hasHtmxContent = htmxKeywords.some(keyword => body.includes(keyword));
  
  if (!hasHtmxContent) {
    console.warn(`⚠️  ${fileName} may be missing HTMX-specific content`);
  }
  
  console.log(`✅ ${fileName} is valid`);
  console.log(`   Name: ${frontmatter.name}`);
  console.log(`   Description: ${frontmatter.description.substring(0, 60)}...`);
  console.log(`   Body lines: ${bodyLines}`);
  
  return true;
}

function main() {
  console.log('Running skill validation tests...\n');
  
  let allPassed = true;
  
  allPassed = validateSkillFile(SKILL_FILE, 'SKILL.md') && allPassed;
  allPassed = validateSkillFile(ENTERPRISE_SKILL_FILE, 'ENTERPRISE.SKILL.md') && allPassed;
  
  if (allPassed) {
    console.log('\n✅ All skill files are valid!');
    process.exit(0);
  } else {
    console.log('\n❌ Some skill files failed validation');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateSkillFile, extractFrontmatter };
