console.log("Loaded contextMenu.js");

function clickedCT()
{
	createIcon(icon_CT);
}

function clickedT()
{
	createIcon(icon_T);
}

function clickedBA()
{
	createIcon(icon_BA);
}

function clickedBB()
{
	createIcon(icon_BB);
}

function clickedBC()
{
	createIcon(icon_BC);
}

function clickedH()
{
	createIcon(icon_H);
}

$(function() {
        $.contextMenu({
            selector: '.context-menu-one', 
            callback: function(key, options) {
               
            },
            items: {
				"spawn": {name:"Spawn",
					items: 
					{
						"ct": {name:"Counter-Terrorist",callback:clickedCT},
						"t": {name:"Terrorist",callback:clickedT}
					}
				},
				"Hostages": {name:"Hostages",
					items:
					{
						"h":{name:"Hostage",callback:clickedH},
					}
				},
				"Bombsites": {"name":"Bombsites",
					items:
					{
						"ba":{name:"Bombsite A",callback:clickedBA},
						"bb":{name:"Bombsite B",callback:clickedBB},
						"bc":{name:"Bombsite",callback:clickedBC},
					}
				}//,
				
               // "edit": {name: "Edit", icon: "edit"},
               // "cut": {name: "Cut", icon: "cut"},
               //copy: {name: "Copy", icon: "copy"},
               // "paste": {name: "Paste", icon: "paste"},
               // "delete": {name: "Delete", icon: "delete"},
               // "sep1": "---------",
               // "quit": {name: "Quit", icon: function(){
               //     return 'context-menu-icon context-menu-icon-quit';
               // }}
            }
        });

        $('.context-menu-one').on('click', function(e){
            //console.log('clicked', this);
        })    
    });