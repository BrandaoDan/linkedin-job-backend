import { chromium } from 'playwright';

export async function buscarPostsLinkedin(email, senha) {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();

    await page.goto('https://www.linkedin.com/login');

    await page.fill('#username', email);
    await page.fill('#password', senha);
    await page.click('button[type="submit"]');

    await page.waitForTimeout(30000); 

    await page.goto('https://www.linkedin.com/feed/');
    await page.waitForSelector('div[role="listitem"]', { timeout: 30000 });

    for (let i = 0; i < 5; i++) {
        await page.mouse.wheel(0, 3000);
        await page.waitForTimeout(2000);
    }

    const posts = await page.$$eval('div[role="listitem"]', elements =>
        elements.map(el => ({
            texto: el.innerText || '',
            link: el.querySelector('a')?.href || null
        }))
    );

    await browser.close();

    return posts;
}
