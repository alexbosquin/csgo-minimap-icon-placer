let icon_CT,icon_T,icon_BA,icon_BB,icon_BC,icon_H;

function setupIcons()
{
	let path = "/resources/icons/";
	icon_CT = loadImage(path+"Ct"+".png");
	icon_T = loadImage(path+"T"+".png");
	
	icon_BA = loadImage(path+"Bombsite_a"+".png");
	icon_BB = loadImage(path+"Bombsite_b"+".png");
	icon_BC = loadImage(path+"Bombsite_clear"+".png");
	
	icon_H = loadImage(path+"Hostage"+".png");
	
	console.log("Loaded Resources!!!");
	
	
}

let holding = null;
let placed = [];

function drawIcons()
{
	if (holding != null)
		{
			holding.draw(mouseX-(iconSize/2),mouseY-(iconSize/2));
			
		}
	
	
	//draw all icons
	if (placed.length > 0)
		{
			for(let i=0;i<placed.length;i++)
				{
					placed[i].draw(placed[i].x,placed[i].y);
				}
		}
}


let iconSize = 32;
function Icon(iconName)
{
	this.x = 0;
	this.y =0;
	this.icon = iconName;
	this.selected = false;
	
}

Icon.prototype.draw = function(posX,posY)
{
	image(this.icon,posX,posY,iconSize,iconSize);
	
	if (this.selected == true) this.select();
	
	//this.select = false;
}

Icon.prototype.select = function()
{
		fill(244,66,66,80);
		ellipse(this.x+16,this.y+16,32,32);
}


function createIcon(icon)
{
	holding = new Icon(icon);
}

function itemMousePressed()
{
	if (holding != null)
		{
			holding.x = mouseX-(iconSize/2);
			holding.y = mouseY-(iconSize/2);
			insertAtPlaced(holding);
			holding = null;
		}
	else if (mouseButton == LEFT)
	{
		if (holding == null && placed.length > 0)
		{
			for(o=0;o<placed.length;o++)
			{
				placed[o].selected = false;
			}
			
		}
	}
}

function insertAtPlaced(object)
{
	console.log('insertAtPlaced');
	
	if (placed.length == 0)
	{
		placed.push(object);
		return;
	}
	
	for(let i=0;i<placed.length;i++)
	{
		if (object.icon == placed[i].icon)
			{
				console.log("contains, updating position");
				
				placed[i].x = mouseX-(iconSize/2);
				placed[i].y = mouseY-(iconSize/2);
				
				return;
				
			}
		
	}
	
	console.log("doesnt contains, adding to placed");
				
	placed.push(object);
	
}

