function leftarrow() {
    if(document.getElementById("place").value =="clearing") {
        document.getElementById("game2").style.background =   "url('background_1.png') no-repeat"
        document.getElementById("item").style.background = "url('images/emptybottle.png') no-repeat"
        document.getElementById("item").style.width = "80px"
        document.getElementById("item").style.height = "130px"
        document.getElementById("item").style.top = "529px"        
        document.getElementById("item").style.left = "401px" 
        document.getElementById("item").style.display ="block"  
        document.getElementById("place").value ="grove"
    }
    else if(document.getElementById("place").value =="river") {
        document.getElementById("game2").style.background =   "url('background_2.png') no-repeat"
        document.getElementById("item").style.background = "url('images/diary.png') no-repeat"
        document.getElementById("item").style.width = "80px"
        document.getElementById("item").style.height = "80px"
        document.getElementById("item").style.top = "445px"        
        document.getElementById("item").style.left = "290px"   
        document.getElementById("item").style.display ="block"  
        document.getElementById("place").value ="clearing"
    }
}

function rightarrow() { 
if(document.getElementById("place").value =="clearing") {
    document.getElementById("game2").style.background =   "url('background_3.png') no-repeat"
    document.getElementById("item").style.background = "url('images/mushrooms.png') no-repeat"
    document.getElementById("item").style.width = "80px"
    document.getElementById("item").style.height = "80px"
    document.getElementById("item").style.top = "495px"        
    document.getElementById("item").style.left = "235px" 
    document.getElementById("item").style.display ="block"    
    document.getElementById("place").value ="river"
}
else if(document.getElementById("place").value =="grove") {
    document.getElementById("item").style.background = "url('images/diary.png') no-repeat"
    document.getElementById("item").style.width = "80px"
    document.getElementById("item").style.height = "80px"
    document.getElementById("item").style.top = "445px"        
    document.getElementById("item").style.left = "290px"     
    document.getElementById("game2").style.background =   "url('background_2.png') no-repeat"
    document.getElementById("item").style.display ="block"  
    document.getElementById("place").value ="clearing"
}
}

function chest() {
// when the inventory is closed
if(document.getElementById("inventory").value =="open") {
    document.getElementById("leftarrow").style.display ="block"
    document.getElementById("rightarrow").style.display ="block"
    document.getElementById("inventory").value ="closed"
    document.getElementById("health").style.display ="block"
    document.getElementById("item").style.display ="block" 
    document.getElementById("inventoryContents").style.display = "none" 
    if(document.getElementById("place").value =="clearing")
    {
        document.getElementById("game2").style.background =   "url('background_2.png') no-repeat"
    }
    else if(document.getElementById("place").value =="grove")
    {
        document.getElementById("game2").style.background =   "url('background_1.png') no-repeat" 
    }
    else if(document.getElementById("place").value =="river")
    {
        document.getElementById("game2").style.background =   "url('background_3.png') no-repeat" 
    }
}
    // when the inventory is open
else if(document.getElementById("inventory").value =="closed") {
    document.getElementById("leftarrow").style.display ="none"
    document.getElementById("rightarrow").style.display ="none"
    document.getElementById("inventory").value ="open"
    document.getElementById("health").style.display ="none"
    document.getElementById("item").style.display ="none"  
    document.getElementById("game2").style.background =   "url('inventory.png') no-repeat"
    document.getElementById("inventoryContents").style.display ="block"
    document.getElementById("inventoryContents").innerHTML = document.getElementById("contents").value
}
}

function item() {
if (document.getElementById('place').value =="clearing") {
    addtoinventory(document.getElementById("contents"),"diary")
    
}
if (document.getElementById('place').value =="grove") {
    addtoinventory(document.getElementById("contents"),"emptybottle")
    
}
if (document.getElementById('place').value =="river") {
    addtoinventory(document.getElementById("contents"),"mushrooms")
    
}
document.getElementById("item").style.display ="none"
}

function addtoinventory(contents,item) {
c = contents.value
if (c != '' && typeof c == 'string') {
    if ( c.split("<br>").length>0) {
        c = c.concat("<br>" + item)
    }
}
else {
    c = item
}
document.getElementById('contents').value = c
}


