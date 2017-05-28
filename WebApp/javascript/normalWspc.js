let minimapImage = null;
let canvas;
let loaded = false;
let btExport;
let sel;

function preload()
{
	LoadJSFile("ItemPlacer.js");
	LoadJSFile("Selector.js");
	LoadJSFile("Exporter.js");
    //LoadJSFile("tga.min.js");
}
let test;
function setup()
{
	
	setupIcons();
	setupSelector();
	
    canvas = createCanvas(512,512);
	canvas.parent('software');
    background(225);
	
	canvas.dragOver(cOn);
	canvas.dragLeave(cOff);
	
	canvas.drop(handleFile);
	
	btExport = document.getElementById('btExport');
	
	btExport.disabled = true;
	
	sel = new Selector();
    
}

function mousePressed()
{
	itemMousePressed();
	sel.setPos();
}

let img = null;
function handleFile(file)
{
	img = createImg(file.data);
	img.hide();
	LoadJSFile("contextMenu.js");
	loaded=true;
	
	btExport.disabled = false;
}

function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

function cOn()
{
	canvas.background(200);
}

function cOff()
{
	canvas.background(225);
}

function draw()
{
	background(225);
	
	if (loaded)
	{
		image(img,0,0,canvas.width,canvas.height);
		drawLines();
		//method from ItemPlacer
		drawIcons();
		sel.update();
		
	}
	else
	{
		textAlign(CENTER);
		text("Drag JPG Image Here",canvas.width/2,canvas.height/2);
	}
	
}

function keyPressed()
{
			if (keyCode == DELETE)
			{
				sel.deleteSelected();
			}
}

function drawLines()
{
	noCursor();
	
	if (isMouseOffScreen() == true) return;
	
	stroke(255,255,255);
	let topLine = line(mouseX,0,mouseX,mouseY);
	//let topText = text(posPercentage('x'),mouseX,mouseY-64);
	let bottomLine = line(mouseX,canvas.height,mouseX,mouseY);
	let leftLine = line(0,mouseY,mouseX,mouseY);
	//let leftText = text(posPercentage('y'),mouseX-64,mouseY-10);
	let rightLine = line(canvas.width,mouseY,mouseX,mouseY);
	
	noFill();
	let centerRect = rect(mouseX-8,mouseY-8,16,16);
	
	
	
}

function isMouseOffScreen()
{
	if (mouseX > canvas.width)
		return true;
	else
	if (mouseX < 0)
		return true;
	else
	if (mouseY > canvas.height)
		return true;
	else
	if (mouseY < 0)
		return true;
	else
		return false;
}

	