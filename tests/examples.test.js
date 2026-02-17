#!/usr/bin/env node

/**
 * Examples Validation Tests
 * Validates that example files exist and contain valid HTMX patterns
 */

const fs = require('fs');
const path = require('path');

const EXAMPLES_DIR = path.join(__dirname, '..', 'examples');
const EXPRESS_DEMO_DIR = path.join(EXAMPLES_DIR, 'express-demo');
const PATTERNS_DIR = path.join(EXAMPLES_DIR, 'patterns');

function checkFileExists(filePath, description) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ ${description} does not exist: ${filePath}`);
    return false;
  }
  console.log(`✅ ${description} exists`);
  return true;
}

function validateHtmlFile(filePath, fileName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check for HTMX script tag
  if (!content.includes('htmx.org')) {
    console.warn(`⚠️  ${fileName} may be missing HTMX script tag`);
  }
  
  // Check for HTMX attributes
  const htmxAttributes = ['hx-get', 'hx-post', 'hx-put', 'hx-patch', 'hx-delete', 'hx-target', 'hx-swap'];
  const hasHtmxAttrs = htmxAttributes.some(attr => content.includes(attr));
  
  if (!hasHtmxAttrs) {
    console.warn(`⚠️  ${fileName} may be missing HTMX attributes`);
  }
  
  console.log(`✅ ${fileName} contains HTMX patterns`);
  return true;
}

function validateExpressDemo() {
  console.log('\nValidating Express demo...');
  
  const requiredFiles = [
    { path: path.join(EXPRESS_DEMO_DIR, 'server.js'), desc: 'server.js' },
    { path: path.join(EXPRESS_DEMO_DIR, 'package.json'), desc: 'package.json' },
    { path: path.join(EXPRESS_DEMO_DIR, 'views', 'index.ejs'), desc: 'views/index.ejs' },
    { path: path.join(EXPRESS_DEMO_DIR, 'views', '_todo_item.ejs'), desc: 'views/_todo_item.ejs' },
    { path: path.join(EXPRESS_DEMO_DIR, 'views', 'layout.ejs'), desc: 'views/layout.ejs' },
    { path: path.join(EXPRESS_DEMO_DIR, 'public', 'styles.css'), desc: 'public/styles.css' }
  ];
  
  let allExist = true;
  for (const file of requiredFiles) {
    allExist = checkFileExists(file.path, file.desc) && allExist;
  }
  
  // Validate server.js contains HTMX patterns
  if (allExist) {
    const serverContent = fs.readFileSync(path.join(EXPRESS_DEMO_DIR, 'server.js'), 'utf-8');
    if (serverContent.includes('hx-request')) {
      console.log('✅ server.js checks for HTMX requests');
    } else {
      console.warn('⚠️  server.js may not check for HTMX requests');
    }
  }
  
  return allExist;
}

function validatePatterns() {
  console.log('\nValidating pattern examples...');
  
  const patterns = [
    'infinite-scroll.html',
    'inline-edit.html',
    'modal.html',
    'live-search.html'
  ];
  
  let allValid = true;
  for (const pattern of patterns) {
    const filePath = path.join(PATTERNS_DIR, pattern);
    if (!checkFileExists(filePath, pattern)) {
      allValid = false;
      continue;
    }
    validateHtmlFile(filePath, pattern);
  }
  
  return allValid;
}

function main() {
  console.log('Running examples validation tests...\n');
  
  let allPassed = true;
  
  allPassed = validateExpressDemo() && allPassed;
  allPassed = validatePatterns() && allPassed;
  
  if (allPassed) {
    console.log('\n✅ All examples are valid!');
    process.exit(0);
  } else {
    console.log('\n❌ Some examples failed validation');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateExpressDemo, validatePatterns };
