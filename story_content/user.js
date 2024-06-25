function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6M2BkcNVN8u":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var date = new Date();
let mm;
switch (date.getMonth()) {
  case 0:
    mm = "January";
    break;
  case 1:
    mm = "February";
    break;
  case 2:
    mm = "March";
    break;
  case 3:
    mm = "April";
    break;
  case 4:
    mm = "May";
    break;
  case 5:
    mm = "June";
    break;
  case 6:
    mm = "July";
    break;
  case 7:
    mm = "August";
    break;
  case 8:
    mm = "September";
    break;
  case 9:
    mm = "October";
    break;
  case 10:
    mm = "November";
    break;
  case 11:
    mm = "December";
}
var yyyy = date.getFullYear();
date = mm + ' ' + yyyy;

var player = GetPlayer();
var name = player.GetVar("Name"); /* Name of the participant (comes from Storyline input) */
var firma = player.GetVar("Company"); /* Company of the participant (comes from Storyline input) */
var training = "Principles of the sealing technology\r\n in combustion engines";
var city = player.GetVar("City");
var line1 = 'has participated in the hands-on training seminar';
var trainer = "FLORIAN KIZIAK";
var line2 = 'Technical Trainer IAM';
var line3 = city + ', ' + date;

var doc = new jsPDF();
var img = new Image;
img.onload = function() {
	doc.addImage(this, 0, 0, 210, 297); /* A4 size portrait */
	
	doc.setFontSize(34);/* Parameters for the name of the participant */
	doc.setTextColor(0, 0, 0);
	doc.setFont('MetaPro-Bold', 'normal'); 
	doc.text(name, (doc.internal.pageSize.width / 2), 139, null, null, 'center');

	doc.setFontSize(28);/* Parameters for the name of the company */
	doc.setTextColor(0, 0, 0);
	doc.setFont('MetaPro-Bold', 'normal'); 
	doc.text(firma, (doc.internal.pageSize.width / 2), 153, null, null, 'center');

	doc.setFont('MetaPro-Norm', 'normal');/* Parameters for the first line */
	doc.setFontSize(20);
	doc.setTextColor(0, 0, 0);
	doc.text(line1, (doc.internal.pageSize.width / 2), 175, null, null, 'center');

	doc.setFont('MetaPro-Bold', 'normal');/* Parameters for the name of the training */
	doc.setFontSize(20);
	doc.setTextColor(225, 5, 30);
	doc.text(training, (doc.internal.pageSize.width / 2), 185, null, null, 'center');

	doc.setFont('MetaPro-Norm', 'normal');/* Parameters for the name of the trainer */
	doc.setFontSize(18);
	doc.setTextColor(0, 0, 0);
	doc.text(trainer, (doc.internal.pageSize.width / 2), 239, null, null, 'center');
	
	doc.setFont('MetaPro-Norm', 'normal');/* Parameters for the second line */
	doc.setFontSize(18);
	doc.setTextColor(0, 0, 0);
	doc.text(line2, (doc.internal.pageSize.width / 2), 247, null, null, 'center');

	doc.setFont('MetaPro-Norm', 'normal');/* Parameters for the last line */
	doc.setFontSize(15);
	doc.setTextColor(0, 0, 0);
	doc.text(line3, (doc.internal.pageSize.width / 2), 255, null, null, 'center');
	
	doc.save("Certificate Elring.pdf"); /* Swap out ‘Certificate’ with what you want your certificate to be named */
  };
img.crossOrigin = "";  
img.src = "Zertifikat_2024_Florian.png"; /* Name of the certificate template */
}

};
