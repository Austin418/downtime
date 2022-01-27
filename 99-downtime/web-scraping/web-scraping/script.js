const axios = require('axios');
const cheerio = require('cheerio');
const { appendChild } = require('parse5/lib/tree-adapters/default');
const express = require('express')
const app = express()



// const getLinks = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://towardsdatascience.com/controlling-the-web-with-python-6fceb22c5f08'
// 		);
// 		const $ = cheerio.load(data);
// 		const links = [];

// 		$('nav > span > a').each((_idx, el) => {
//       const postTitle = $(el).text()
// 			links.push(postTitle)
// 		});

// 		return links;
// 	} catch (error) {
//     throw error;
// 	}
// };

// getLinks()
// .then((links) => console.log(links));



// const changeLink = () => {
//     console.log(links[1].attr(href));
// }
// changeLink()


// const getLinks = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://towardsdatascience.com/controlling-the-web-with-python-6fceb22c5f08'
// 		);
// 		const $ = cheerio.load(data);

// 		const newLink = $('nav > span > a').attr('href')
//     // should be https://towardsdatascience.com/tagged/tds-features

// 		return newLink;
// 	} catch (error) {
//     throw error;
// 	}
// };

// getLinks()
// .then((newLink) => console.log(newLink));



// const puppeteer = require('puppeteer')

// async function getVisual() {
// 	try {
// 		const URL = 'https://www.reddit.com/r/programming/'
// 		const browser = await puppeteer.launch()
// 		const page = await browser.newPage()

// 		await page.goto(URL)
// 		await page.screenshot({ path: 'screenshot.png' })
// 		await page.pdf({ path: 'page.pdf' })

// 		await browser.close()
// 	} catch (error) {
// 		console.error(error)
// 	}
// }

// getVisual()


const puppeteer = require('puppeteer');
const { charset } = require('mime-types');


async function main() {
  const browser = await puppeteer.launch({
    headless: false
  });
  let page = await browser.newPage()
  await page.goto(`https://typing.io/lesson/csharp/asp.net/CSharpCodeParser.cs/1`);
  for (let index = 1; index < 6; index++) {
  for (let i = 0; i < 309; i++) {
    
    const element = await page.waitForSelector(".char-active");
    const character = await element.evaluate(el => el.textContent, element);
    await page.type('.char-active', character)
    if (!character) {
      page.keyboard.press('\r');
    }
      // let j = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      // if (j % 6 == 0) {
        //   await page.keyboard.press('/')
    //   if (i % 2 == 0) {
    //     await page.keyboard.press('Space')
    //     await page.keyboard.press('Backspace')
    //   }
    //   await page.keyboard.press('Backspace')
    // }
    // await page.waitForTimeout(1)
  }
  
  //   await page.evaluate(() => {
    //     document.querySelector('input[type=submit]').click();
    // });
    
    await page.waitForTimeout(40000);
    await page.screenshot({ path: `screenshot${index}.png` })
    await browser.close();
  }

}
main();




// app.get('/', (req, res) => {
//   console.log('serving home page');
//   res.status(200).send('Home Page')
// })
// app.all('*', (req, res) => {
//   res.status(404).send("<h1>Page not found</h1>")
// })
// app.listen(3000, () => {
//   console.log('server is listening at 3000');
// })