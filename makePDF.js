console.log("PDF maker");
const fs = require('fs');
const pdfCreate = require('pdfkit');
//const { size } = require('pdfkit/js/page');
const doc = new pdfCreate({size: 'B5'});
doc.pipe(fs.createWriteStream('./pdf-folder/test.pdf'));
doc.info.Author ='Oliwia Kwiatkowska';
doc.registerFont('lato','extra/Lato-Regular.ttf');
doc.registerFont('latoB','extra/Lato-Bold.ttf');
doc.image('./extra/zse-logo.png', 20, 15, {scale: 0.3});
doc.font('latoB').fontSize(20).text(`Zespół szkół elektrycznych`, 235, 80, {
    lineBreak: false
});
doc.font('lato').fontSize(16).text(`4TP Kwiatkowska Oliwia`, 260, 120,{
    lineBreak: false
});

doc.font('latoB').underline(80, 241, 195 ,20).text("Znane mi technologie Web:", 80, 240);
listItems = ["HTML5, CSS3, ES6", "Joomla, WordPress, PrestaShop","Node.js i React"];
//linkMre = ["więcej"];
doc.font('lato').list(listItems, 80, 260);
doc.fillColor('blue').underline(109,321, 41, 20).list(["więcej"], 80, 320, {
    link: 'https://google.pl',
});
doc.end();
console.log("Stworzono pdf");