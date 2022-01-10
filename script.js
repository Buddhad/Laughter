fetch('https://icanhazdadjoke.com/slack')
  .then((data) => data.json())
  .then((jokeData) => {
      const joketext= jokeData.attachments[0].text;
      const jokeElement= document.getElementById("jokeElement");
      jokeElement.innerHTML=joketext;
  })


/*
Quot Api

https://github.com/lukePeavey/quotable

  fetch('https://api.quotable.io/random')
  .then((data) => data.json())
  .then((QuotData) => {
      const Quottext= QuotData.content;
      const Quottext1= QuotData.author;
      const quot= document.getElementById("quot");
      quot.innerHTML=Quottext;
  })

*/
/*
Learn about chrome Extensions
https://developer.chrome.com/docs/extensions/mv3/getstarted/
*/