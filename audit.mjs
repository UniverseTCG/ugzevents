import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Mobile Viewport
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  
  const overflowingElements = await page.evaluate(() => {
    const overflowNodes = [];
    const elements = document.querySelectorAll('*');
    
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const rect = el.getBoundingClientRect();
      
      // If the element extends beyond 375px (plus a small 1px margin of error)
      if (rect.right > 376 && el.tagName !== 'BODY' && el.tagName !== 'HTML') {
        let identifier = el.tagName;
        if (el.id) identifier += '#' + el.id;
        if (el.className && typeof el.className === 'string') identifier += '.' + el.className.split(' ').join('.');
        
        overflowNodes.push({
          element: identifier,
          right: rect.right,
          width: rect.width,
          text: el.innerText ? el.innerText.substring(0, 50).replace(/\n/g, ' ') : ''
        });
      }
    }
    return overflowNodes;
  });

  if (overflowingElements.length === 0) {
    console.log("SUCCESS: No overflowing elements detected on mobile!");
  } else {
    console.log(`FOUND ${overflowingElements.length} OVERFLOWING ELEMENTS:`);
    console.table(overflowingElements);
  }

  await browser.close();
})();
