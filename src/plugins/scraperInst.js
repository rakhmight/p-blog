import puppeteer from 'puppeteer';

// let scrape = async () => {
//     const browser = await puppeteer.launch({headless: false})
//     const page = await browser.newPage()
//     await page.goto('https://www.instagram.com/otaku/')
//     await page.waitFor(1000)

//     const result = await page.evaluate(() => {
//         let name = document.querySelector('._aacl').innerText;
//         let price = document.querySelector('._ac2a').innerText;

//         return {
//             name,
//             price
//         }

//     });

//     browser.close();
//     return result;
// }

async function scrape() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://developers.google.com/web/');
  
    // Type into search box.
    await page.type('.devsite-search-field', 'Headless Chrome');
  
    // Wait for suggest overlay to appear and click "show all results".
    const allResultsSelector = '.devsite-suggest-all-results';
    await page.waitForSelector(allResultsSelector);
    await page.click(allResultsSelector);
  
    // Wait for the results page to load and display the results.
    const resultsSelector = '.gsc-results .gs-title';
    await page.waitForSelector(resultsSelector);
  
    // Extract the results from the page.
    const links = await page.evaluate(resultsSelector => {
      return [...document.querySelectorAll(resultsSelector)].map(anchor => {
        const title = anchor.textContent.split('|')[0].trim();
        return `${title} - ${anchor.href}`;
      });
    }, resultsSelector);
  
    // Print all the files.
    console.log(links.join('\n'));
  
    await browser.close();
  }

  export default scrape