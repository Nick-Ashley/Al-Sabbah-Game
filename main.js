// JavaScript Document
console.log('js running');
var points = setPointCoordinates();
var gamePiece=null;
var playerSelect=true;

createPlayers();
setPointCoordinates();
initializePlayerLocations();

function setPointCoordinates()
{ 
    var pointCount= 1;
    var points= [];

    while (pointCount <= 57)
    {
        var element = document.getElementById(`pos${pointCount}`).getBoundingClientRect();
        
        points[pointCount] = {x: element.x, y: element.y};
        pointCount++;
    }
    return points;
};

//multiplying player images 
function createPlayers()
{
    var qujarPeiceCount=0;
    var nizariPeiceCount=0;
    
    while (qujarPeiceCount < 9)
    {  
        document.getElementById('qujarsContainer').innerHTML += `<img id="qujarPlayer${qujarPeiceCount}" class="qujarPlayer" src="Images/The Qujars Peices.png" alt="Qujars">`;
        qujarPeiceCount++;
    }

    while (nizariPeiceCount < 3)
    {
        document.getElementById('nizariContainer').innerHTML += `<img id="nizariPlayer${nizariPeiceCount}" class="nizariPlayer" src="Images/The Nizari game peice.png" alt="Nizari">`;
        nizariPeiceCount++;
    }
    

};

//player peices placement  on bord
function initializePlayerLocations()
{
    var nizariWidthOffset= 45;
    var nizariHeightoffset=75;
    var qujarWidthoffset=50;
    var qujarHeightoffset=75;
    
    document.getElementById('nizariPlayer0').style.top = `${points[1].y - nizariHeightoffset}px`;
    document.getElementById('nizariPlayer0').style.left = `${points[1].x - nizariWidthOffset}px`;
    document.getElementById('nizariPlayer1').style.top = `${points[2].y - nizariHeightoffset}px`;
    document.getElementById('nizariPlayer1').style.left = `${points[2].x - nizariWidthOffset}px`;
    document.getElementById('nizariPlayer2').style.top = `${points[8].y - nizariHeightoffset}px`;
    document.getElementById('nizariPlayer2').style.left = `${points[8].x - nizariWidthOffset}px`;

    
    document.getElementById('qujarPlayer0').style.top = `${points[57].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer0').style.left = `${points[57].x - qujarWidthoffset}px`;
    document.getElementById('qujarPlayer1').style.top = `${points[56].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer1').style.left = `${points[56].x - qujarWidthoffset}px`;
    document.getElementById('qujarPlayer2').style.top = `${points[55].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer2').style.left = `${points[55].x - qujarWidthoffset}px`;
    
    document.getElementById('qujarPlayer3').style.top = `${points[53].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer3').style.left = `${points[53].x - qujarWidthoffset}px`;
    document.getElementById('qujarPlayer4').style.top = `${points[51].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer4').style.left = `${points[51].x - qujarWidthoffset}px`;
    document.getElementById('qujarPlayer5').style.top = `${points[49].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer5').style.left = `${points[49].x - qujarWidthoffset}px`;
    
    document.getElementById('qujarPlayer6').style.top = `${points[47].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer6').style.left = `${points[47].x - qujarWidthoffset}px`;
    document.getElementById('qujarPlayer7').style.top = `${points[46].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer7').style.left = `${points[46].x - qujarWidthoffset}px`;
    document.getElementById('qujarPlayer8').style.top = `${points[38].y - qujarHeightoffset}px`;
    document.getElementById('qujarPlayer8').style.left = `${points[38].x - qujarWidthoffset}px`;
};
    
// click on game peices
    document.querySelectorAll('.qujarPlayer').forEach(function(qujar)
    {
        qujar.addEventListener('click', qujarPlayerClicked)});
                                                      

    document.querySelectorAll('.nizariPlayer').forEach(function(nizari)
    {
        nizari.addEventListener('click', nizariPlayerClicked)});
    

function qujarPlayerClicked(event)
{
     if(playerSelect){
       gamePiece = {type: 'qujar', target: event.target};
        playerSelect = false;
        
         document.querySelectorAll('.qujarPlayer').forEach(function(qujar)
    {
        qujar.removeEventListener('click', qujarPlayerClicked)});
                                                      

    document.querySelectorAll('.nizariPlayer').forEach(function(nizari)
    {
        nizari.removeEventListener('click', nizariPlayerClicked)});
    
        setTimeout(function(){
            window.addEventListener('click', gameBoardClicked);}, 100);
    
    }

    else{
       console.log('click some where to move')
    }
    
}

function nizariPlayerClicked(event)
{
    if(playerSelect){
       gamePiece = {type: 'nizari', target: event.target}
        playerSelect = false;
          
    document.querySelectorAll('.qujarPlayer').forEach(function(qujar)
    {
        qujar.removeEventListener('click', qujarPlayerClicked)});
                                                      

    document.querySelectorAll('.nizariPlayer').forEach(function(nizari)
    {
        nizari.removeEventListener('click', nizariPlayerClicked)});
    
        setTimeout(function(){
            window.addEventListener('click', gameBoardClicked);}, 100);
    
    }
    else{
        console.log('click some where to move')
    }
      
}

//placing it on the board

function gameBoardClicked(event)
{
    var nizariWidthOffset= 45;
    var nizariHeightoffset=75;
    var qujarWidthoffset=50;
    var qujarHeightoffset=75;
    
    if(! playerSelect){
        if(gamePiece.type == 'nizari'){
            gamePiece.target.style.left = `${event.clientX - nizariWidthOffset}px` ;
            gamePiece.target.style.top = `${event.clientY - nizariHeightoffset}px`; 
        }
        else{
            gamePiece.target.style.left = `${event.clientX - qujarWidthoffset}px` ;
            gamePiece.target.style.top = `${event.clientY - qujarHeightoffset}px`; 
        }
       
        playerSelect = true;
        gamePiece = null;
        
        window.removeEventListener('click', gameBoardClicked);
        
        setTimeout(function(){
            document.querySelectorAll('.qujarPlayer').forEach(function(qujar){
                qujar.addEventListener('click', qujarPlayerClicked)});
                                                      

            document.querySelectorAll('.nizariPlayer').forEach(function(nizari){
                nizari.addEventListener('click', nizariPlayerClicked)});
        }, 100);
}
else{
        console.log('select a game peice first')
    }
}














