


(function(){
    var names=["Marvellous","Gloria","Joshua",'Clinton',"John","James","Emmanuel","Stephanie","Joy","Anne","Joshua"]

    for (var i= 0;i<names.length;i++){
        var firstLetter = names[i].charAt(0).toLowerCase();
        if(firstLetter==="j"){
            byeSpeaker.speak(names[i]);
        }
         else{
          console.log("Hello" + " " + names[i])
         }
    }
})()