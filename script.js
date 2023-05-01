function leftarrow() {
        if(document.getElementById("place").value =="clearing") {
            document.getElementById("game2").style.background =   "url('background_1.png') no-repeat"
            document.getElementById("item").style.background = "url('images/emptybottle.png') no-repeat"
            document.getElementById("item").style.width = "80px"
            document.getElementById("item").style.height = "80px"
            document.getElementById("item").style.top = "200px"        
            document.getElementById("item").style.left = "150px" 
            document.getElementById("item").style.display ="block"  
            document.getElementById("place").value ="grove"
        }
        else if(document.getElementById("place").value =="river") {
            document.getElementById("game2").style.background =   "url('background_2.png') no-repeat"
            document.getElementById("item").style.background = "url('images/diary.png') no-repeat"
            document.getElementById("item").style.width = "80px"
            document.getElementById("item").style.height = "80px"
            document.getElementById("item").style.top = "200px"        
            document.getElementById("item").style.left = "150px"   
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
        document.getElementById("item").style.top = "200px"        
        document.getElementById("item").style.left = "150px" 
        document.getElementById("item").style.display ="block"    
        document.getElementById("place").value ="river"
    }
    else if(document.getElementById("place").value =="grove") {
        document.getElementById("item").style.background = "url('images/diary.png') no-repeat"
        document.getElementById("item").style.width = "85px"
        document.getElementById("item").style.height = "81px"
        document.getElementById("item").style.top = "200px"        
        document.getElementById("item").style.left = "150px"     
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
    }
}

function item() {
    if (document.getElementById('place').value =="clearing") {
        addtoinventory(document.getElementById("item"),"diary")
        
    }
    if (document.getElementById('place').value =="grove") {
        addtoinventory(document.getElementById("item"),"emptybottle")
        
    }
    if (document.getElementById('place').value =="river") {
        addtoinventory(document.getElementById("item"),"mushrooms")
        
    }
    document.getElementById("item").style.display ="none"
}

function addtoinventory(contents,item) {
    c = contents.value
    if (c != "" && typeof c != 'undefined') {
        if ( c.split(",").length>0) {
            c.append("," + item)
        }
    }
    else {
        c = item
    }
    console.log(item)
    document.getElementById('contents').value = c
}



