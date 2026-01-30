# SwiftTranslator Test Automation

Playwright test automation for SwiftTranslator (Singlish to Sinhala translator).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npx playwright test

# View report
npx playwright show-report
```

## 📁 Project Structure

```
PLAYWRITE TEST/
├── tests/
│   ├── example.spec.ts
│   ├── sinenglish.spec.js         # 24 positive tests
│   ├── negative-tests.spec.js     # 20 negative tests
│   └──
├── playwright.config.ts
├── package.json
└── README.md
```

## 🧪 Running Tests

```bash
# Run all tests
npx playwright test

# Run specific file
npx playwright test sinenglish.spec.js

# Run with UI
npx playwright test --ui

# Run in headed mode
npx playwright test --headed

# Debug mode
npx playwright test --debug

# Specific browser
npx playwright test --project=chromium
```

##  Test Coverage

- **Positive Tests:** 24 (translation accuracy)
- **Negative Tests:** 30 (error handling & edge cases)
- **Total:** 54+ test cases

## 🔧 Configuration

Edit `playwright.config.ts` to customize:
- Base URL
- Timeout settings
- Browsers
- Screenshots/Videos

## 📖 Writing Tests

```javascript
import { test, expect } from '@playwright/test';

test('Test description', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('input text');
  const outputLocator = page.locator('div.bg-slate-50');
  const actualOutput = (await outputLocator.textContent()).trim();
  expect(actualOutput).toBe('expected output');
});
```

## 🐛 Troubleshooting

**Browsers not found?**
```bash
npx playwright install
```

**Tests failing?**
```bash
npx playwright codegen https://www.swifttranslator.com/
```

## 📝 Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "message"

# Push
git push origin main

# Pull latest
git pull origin main
```

## 📄 License

MIT License

## 👥 Team

QA Engineering Team
