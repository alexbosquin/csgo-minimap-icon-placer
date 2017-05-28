let overview = ['none'];

let form = document.getElementById('exForm');

let exButton = document.getElementById('btExport');

exButton.onclick = function(e){
	
	if ( form.checkValidity() == true && requiredItems() == true)
		{
			
			material = document.getElementById('mapName').value;
			pos_x = document.getElementById('tfPosx').value
			pos_y = document.getElementById('tfPosy').value;
			scale = document.getElementById('tfScale').value;
			rotate = document.getElementById('tfRotation').value;
			zoom = document.getElementById('tfZoom').value;
			
			writeIcons();
			
			saveFile();
			
		}
	e.preventDefault();
};

function requiredItems()
{
	let i = 0;
	
	placed.forEach(function(actual){
		i++;
	});
	
	if (i >= 3)
	{
		return true;
	}
	
	$.notify(
  	"Place at least: CT,T and bombsite or hostage", 
  	{ position:"bottom left" }
);

	
	return false;
}
//VARS FOR THE TEXTFILE
let commentary = 'Made by alexbosquin';
let material;
let pos_x;
let pos_y;
let scale;
let rotate;
let zoom;
let CTSpawn_x = null;
let CTSpawn_y;
let TSpawn_x = null;
let TSpawn_y;
let bombA_x = null;
let bombA_y;
let bombB_x = null;
let bombB_y;
let bomb_x = null;
let bomb_y;
let Hostage_x = null;
let Hostage_y;


function saveFile()
{
	let count = 0;
	overview[count++] = '//// '+commentary;
	overview[count++] = '"'+material+'"';
	overview[count++] = '{';
	overview[count++] = '		\"material\"	\"overviews/'+material+'_radar\"';
	overview[count++] = '		\"pos_x\"		\"'+pos_x+'\"';
	overview[count++] = '		\"pos_y\"		\"'+pos_y+'\"';
	overview[count++] = '		\"scale\"		\"'+scale+'\"';
	overview[count++] = '		\"rotate\"	\"'+rotate+'\"';
	overview[count++] = '		\"zoom\"		\"'+zoom+'\"';
	overview[count++] = '';
	if (CTSpawn_x != null)
	{
	overview[count++] = '		\"CTSpawn_x\"	\"'+CTSpawn_x+'\"';
	overview[count++] = '		\"CTSpawn_y\"	\"'+CTSpawn_y+'\"';
	}
	if (TSpawn_x != null)
	{
	overview[count++] = '		\"TSpawn_x\"	\"'+TSpawn_x+'\"';
	overview[count++] = '		\"TSpawn_y\"	\"'+TSpawn_y+'\"';
	}
	overview[count++] = '';
	if (bombA_x != null)
	{
	overview[count++] = '		\"bombA_x\"	\"'+bombA_x+'\"';
	overview[count++] = '		\"bombA_y\"	\"'+bombA_y+'\"';
	}
	if (bombB_x != null)
	{
	overview[count++] = '		\"bombB_x\"	\"'+bombB_x+'\"';
	overview[count++] = '		\"bombB_y\"	\"'+bombB_y+'\"';
	}
	if (bomb_x != null)
	{
	overview[count++] = '		\"bomb_x\"	\"'+bomb_x+'\"';
	overview[count++] = '		\"bomb_y\"	\"'+bomb_y+'\"';
	}
	if (Hostage_x != null)
	{
	overview[count++] = '		\"Hostage1_x\"	\"'+Hostage_x+'\"';
	overview[count++] = '		\"Hostage1_y\"	\"'+Hostage_y+'\"';
	}
	overview[count++] = '}';
	
	save(overview,material+'.txt');
}

function writeIcons()
{
	console.log('Writing icons');
	

	for(r=0;r<placed.length;r++)
	{
		console.log('Writing icon: '+r);
		
		if (placed[r].icon === icon_CT)
		{
			CTSpawn_x = formatValues(posPercentage('x',placed[r]));
			CTSpawn_y = formatValues(posPercentage('y',placed[r]));
			console.log('Found CT, Writing into document....');
		}
		
		if (placed[r].icon === icon_T)
		{
			TSpawn_x = formatValues(posPercentage('x',placed[r]));
			TSpawn_y = formatValues(posPercentage('y',placed[r]));
			console.log('Found T, Writing into document....');
		}
		
		if (placed[r].icon === icon_BA)
		{
			bombA_x = formatValues(posPercentage('x',placed[r]));
			bombA_y = formatValues(posPercentage('y',placed[r]));
			console.log('Found BA, Writing into document....');
		}
		
			if (placed[r].icon === icon_BB)
		{
			bombB_x = formatValues(posPercentage('x',placed[r]));
			bombB_y = formatValues(posPercentage('y',placed[r]));
			console.log('Found BB, Writing into document....');
		}
		
		if (placed[r].icon === icon_BC)
		{
			bombC_x = formatValues(posPercentage('x',placed[r]));
			bombC_y = formatValues(posPercentage('y',placed[r]));
			console.log('Found BC, Writing into document....');
		}
		
		if (placed[r].icon === icon_H)
		{
			Hostage_x = formatValues(posPercentage('x',placed[r]));
			Hostage_y = formatValues(posPercentage('y',placed[r]));
			console.log('Found H, Writing into document....');
		}
	}
}

function posPercentage(axis,ico)
{
	switch(axis)
	{
		case 'x':
			return (100*ico.x)/width;
			break;
			
		case 'y':
			return (100*ico.y)/height;
			break;
			
		default:
			
			break;
	}
}
	
function formatValues(value)
{
	value = value.toFixed(0);
	value = value+'';
	value = value.replace('.','');
	let str = '0.';
	
	str+= value;
	
	return str;
}