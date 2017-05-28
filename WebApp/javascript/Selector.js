
function Selector()
{
	this.x = 0;
	this.y= 0;
	this.update = function()
	{
		if (holding == null && mouseIsPressed)
		{
			fill(76, 181, 154,50);
			quad(this.x,this.y,mouseX,this.y,mouseX,mouseY,this.x,mouseY);
			this.onCreated();
		}
	}
	
	this.onCreated = function()
	{
		for(let i=0;i<placed.length;i++)
		{
			this.checkBetween(placed[i]);
		}
	}
	
	this.checkBetween = function(objToCheck)
	{
		if (this.x >= objToCheck.x)
		{
			if (objToCheck.x <= this.x && objToCheck.x >= mouseX)
			{
				
				if (this.y >= objToCheck.y)
				{
					if (objToCheck.y >= mouseY && objToCheck.y <= this.y)
					{
						objToCheck.selected = true;
					}
				}
				else
				{
					if (objToCheck.y >= this.y && objToCheck.y <= mouseY)
					{
						
						objToCheck.selected = true;
					}
				}
				
			}
		}
		else
		{
			if (objToCheck.x >= this.x && objToCheck.x <= mouseX)
			{
								
				if (this.y >= objToCheck.y)
				{
					if (objToCheck.y >= mouseY && objToCheck.y <= this.y)
					{
						objToCheck.selected = true;
					}
				}
				else
				{
					if (objToCheck.y >= this.y && objToCheck.y <= mouseY)
					{
						
						objToCheck.selected = true;
					}
				}
			}
		}
		
	}
	
	this.setPos = function()
	{
		this.x = mouseX;
		this.y = mouseY;
	}
	
	this.deleteSelected = function()
	{
		
		if (holding == null)
		for(i=0;i<placed.length;i++)
		{
			console.log('deleted'+i);
			if (placed[i].selected == true)
			{
				placed.splice(i,1);
				i = 0;
			}
		}
		
	}
}



function setupSelector()
{
	
}

function drawSelector()
{
}