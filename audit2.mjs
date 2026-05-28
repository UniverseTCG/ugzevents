import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.goto('https://ugzevents.com/ca', { waitUntil: 'networkidle0' });
  
  const layoutAudit = await page.evaluate(() => {
    return {
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
    };
  });

  console.log("Layout Audit:", layoutAudit);

  if (layoutAudit.documentWidth > layoutAudit.viewportWidth) {
    console.log("PAGE IS BROKEN! The document is wider than the viewport.");
    // Find the elements that are causing the document to expand
    const offenders = await page.evaluate(() => {
      const w = window.innerWidth;
      const elements = document.querySelectorAll('body *');
      const bad = [];
      for(let el of elements) {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        if (rect.right > w && style.overflow !== 'hidden' && style.overflowX !== 'auto' && style.overflowX !== 'hidden' && style.overflowX !== 'scroll') {
          // Check if it's actually pushing the layout
          bad.push({
            tag: el.tagName,
            class: el.className,
            right: rect.right
          });
        }
      }
      return bad;
    });
    console.log("Potential offenders:", offenders);
  } else {
    console.log("PAGE IS PERFECTLY RESPONSIVE. No horizontal scrolling detected.");
  }

  await browser.close();
})();
