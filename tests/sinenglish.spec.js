import { test, expect } from '@playwright/test';

// ==================== POSITIVE TEST CASES ====================

test('Pos_Fun_0001 - Simple present activity sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('api kaeema kanavaa.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අපි කෑම කනවා.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0002 - Simple request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mata paan oonee.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මට පාන් ඕනේ.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0003 - Repeated word emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('eka eka kiyannaa.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'එක එක කියන්නා.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_UI_0004 - Future-oriented imperative instruction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('oyaa heta udaema 8ta kalin office ekata enna saha report eka ganna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඔයා හෙට උඩැම 8ට කලින් office එකට එන්න සහ report එක ගන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0005 - Complex sentence with cause and condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('kaalaya venas unath api vaeda ivara karanna oonee. mama pramaadha vunee bus eka parakku nisaa.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'කාලය වෙනස් උනත් අපි වැඩ ඉවර කරන්න ඕනේ. මම ප්‍රමාද වුනේ bus එක පරක්කු නිසා.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0006 - Complex sentence with cause and condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('oyaata puLuvannam karuNaakara eyaava yavanna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඔයාට පුළුවන්නම් කරුණාකර එයාව යවන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0007 - Question with future intent', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('oyaa kavadhdha enna hithan inne?');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0008 - Informal conversational sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('adoo dhaen ithin monavadha karanne kiyalaa mata honda idea ekak naehae.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අඩෝ දැන් ඉතින් මොනවද කරන්නේ කියලා මට හොන්ඩ idea එකක් නැහැ.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0009 - Place names and common English words remain unchanged', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('api Galle office ekata yanna kalin Zoom meeting ekata join venna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අපි Galle office එකට යන්න කලින් Zoom meeting එකට join වෙන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0010 - English abbreviations remain unchanged', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('oyaata OTP saha PIN eka SMS eken enavaa, evaa enter karanna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඔයාට OTP සහ PIN එක SMS එකෙන් එනවා, එවා enter කරන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0011 - Future tense small sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama heta ennam.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම හෙට එන්නම්.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0012 - Plural pronoun usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('api okkoma passe trip eka Kandy valata yanna hadhanne.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අපි ඔක්කොම පස්සේ trip එක Kandy වලට යන්න හදන්නේ.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0013 - Multi-line conversational input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mata raeeta bath oonee. oyaata balanna puluvandha?');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මට රෑට බත් ඕනේ. ඔයාට බලන්න පුලුවන්ද?';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0014 - Punctuation marks in daily conversation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('oyaata kohomadha? mama balanna ennaa!');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඔයාට කොහොමද? මම බලන්න එන්නා!';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0015 - Time and place reference', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('12.00 noon Colombo office enna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = '12.00 noon Colombo office එන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0016 - Paragraph-style (long)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama gedhara innee saha raeeta kaemak hadanavaa. mama office email check karanavaa saha Zoom meeting ekak participate karanava. office walata enna kalin traffic poddak thibuna nisaa thawa 15 minutes delay unaa. mama team ekka collaborate karanawa project eka saha passe WhatsApp group ekata update tika danna. mama plan karanavaa hama dinama notes tika organize karanna. adha lunch break eke coffee ekak gihin relax wenna hithenava. monawada karanne kiyalaa mata poddak idea naa, eka nisaa team ekka call karanava saha instruction tika balanava. mama hariyata schedule eka follow karanavaa saha mokak hari miss wenna epaeyi kiyalaa try karanava.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම ගෙදර ඉන්නේ සහ රෑට කැමක් හඩනවා. මම office email check කරනවා සහ Zoom meeting එකක් participate කරනව. office wඅලට එන්න කලින් traffic පොඩ්ඩක් තිබුන නිසා තwඅ 15 minutes delay උනා. මම team එක්ක collaborate කරනwඅ project එක සහ පස්සෙ WhatsApp group එකට update ටික ඩන්න. මම plan කරනවා හම ඩිනම notes ටික organize කරන්න. අද lunch break eke coffee එකක් ගිහින් relax wඑන්න හිතෙනව. මොනwඅඩ කරන්නේ කියලා මට පොඩ්ඩක් idea නා, එක නිසා team එක්ක call කරනව සහ instruction ටික බලනව. මම හරියට schedule එක follow කරනවා සහ මොකක් හරි miss wඑන්න එපැයි කියලා try කරනවමම ගෙදර ඉන්නේ සහ රෑට කෑමක් හදනවා. මම office email check කරනවා සහ Zoom meeting එකක් participate කරනවා. office වලට එන්න කලින් traffic පොඩ්ඩක් තිබුණ නිසා තව 15 minutes delay උනා. මම team එකක් collaborate කරනවා project එක සහ පස්සේ WhatsApp group එකට update ටික දාන්න. මම plan කරනවා හැම දිනම notes ටික organize කරන්න. අද lunch break එකේ coffee එකක් ගිහින් relax වෙන්න හිතෙනවා. මොනවාද කරන්නේ කියලා මට පොඩ්ඩක් idea නෑ, ඒ නිසා team එකට call කරනවා සහ instruction ටික බලනවා. මම හරිට schedule එක follow කරනවා සහ මොකක් හරි miss වෙනවා එපායි කියලා try කරනවා.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0017 - Informal request expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('anee eeka dhiyan.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අනේ ඒක දියන්.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0018 - Negation pattern - simple sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama kamathi nae.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම කමති නැ.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0019 - Slang and informal conversational sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('machan mata adha office yanna kalin coffee ekak gihin relax venna hithenavaa.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මචන් මට අද office යන්න කලින් coffee එකක් ගිහින් relax වෙන්න හිතෙනවා.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_UI_0020 - Clear button removes input and output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama gedhara yanavaa');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  
  // Click clear/reset button (adjust selector if needed)
  await page.locator('button').filter({ hasText: /clear|reset/i }).first().click();
  
  // Verify both fields are cleared
  const textareaValue = await page.locator('textarea').first().inputValue();
  const outputValue = (await outputLocator.textContent()).trim();
  
  expect(textareaValue).toBe('');
  expect(outputValue).toBe('');
});

test('Pos_UI_0021 - Leading and trailing spaces handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('   mama gedhara yannavaa   ');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම ගෙදර යනවා';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0022 - Multiple punctuation marks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('oya kohomadha?? mama hondai!!!');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඔයා ඔය කොහොමද?? මම හොන්ඩෛ!!!';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_UI_0023 - UI handles empty input without crash', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().clear();
  
  // Wait a moment
  await page.waitForTimeout(1000);
  
  const outputLocator = page.locator('div.bg-slate-50');
  const outputValue = (await outputLocator.textContent()).trim();
  
  // Output should be empty or show a prompt message
  expect(outputValue.length).toBeLessThanOrEqual(50);
});

test('Pos_Fun_0024 - Financial terms with units', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('USD 3400 maaru karaa');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'USD 3400 මාරු කරා';
  expect(actualOutput).toBe(expectedOutput);
});

// ==================== NEGATIVE TEST CASES ====================

test('Neg_Fun_0025 - Ambiguous word with multiple meanings', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mata bath oonee kanna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මට බත් ඕනී කන්න.';
  
  // This test is expected to fail - the system may misinterpret 'bath'
  expect(actualOutput).not.toBe(expectedOutput);
});