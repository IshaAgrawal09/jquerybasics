console.log('helloo')
$(document).ready(function(){
    $("#thisBtn").on('click', 'button', (function(){  

        var row = "<tr><td><input type='text' placeholder= 'Enter class'>  </td><td><input type='text'placeholder= 'Enter board'> </td><td><input type='text'placeholder= 'Enter marks'> </td><td> <input type='text'placeholder= 'Enter division'></td><td><button class = 'bAdd'>+</button></td><td><button class = 'bMinus'>-</button></td></tr>";
        var clas = $(this).attr("class");
        if(clas=='bAdd')
        {
        $(".edu").append(row);
        }
        else
        {   
            $(this).closest('tr').remove();
        }
        }));

        var flowers=["rose","rain lily","lotus","lily","lavender","lupin","hyacinth","pansy","jasmina","dahlia","sunflower","jasmine","primula","primrose"];

        $('#Flower').keyup(function(){
            var f=$('#Flower').val();
            var k=f.length;
            var disp = [];
            if(k!=0){
                for(var i=0;i<flowers.length;i++){
                    var actuaVal=flowers[i].slice(0,k);
    
                    if(actuaVal==f){   
                        disp.push(flowers[i]);
                    }
                    $('#flow').text(disp);
                }
            }
            else
                $('#flow').text("   ");
            
        });
        var imageArray = [];
var counterImage=2;

imageArray[0]="https://wallpaperaccess.com/full/5931056.jpg";
imageArray[1]="https://wallpaperaccess.com/full/254381.jpg";
imageArray[2]="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/april2021/Picture_2_Travel.jpeg";
imageArray[3]="https://wallpaperaccess.com/full/4866050.jpg";
imageArray[4]="https://wallpaperaccess.com/full/1461603.jpg";
        $('#bNext').click(function(){
        
            if(counterImage<4){
                ++counterImage
            $("img").attr("src",imageArray[counterImage]);
            ;
            }
        
    });
        $('#bPrev').click(function(){
        
            if(counterImage>0){
                --counterImage
            $("img").attr("src",imageArray[counterImage]);
            
            }
        
    });
        $("#click").on('click', function(){
            alert("Clicked Me!")
        })

        $("#divInner").on('click', 'button', (function(){
            var pass=$('#openList').val();
            var r = "<li>"+pass+"<button class = 'btnC'>+</button></li>";
            $(this).parent().parent().append(r);
        }));
        
        var proDucts=[];
        proDucts[0]={Name:"Skybag",Price:2000};
        proDucts[1]={Name:"T-Shirt",Price:400};
        proDucts[2]={Name:"Shirt",Price:1000};
        proDucts[3]={Name:"Pant",Price:12000};
        
        var colorArray = {red:500,black:400};
        var sizeArray = {small:100,large:300};
    
        
        for(var i=0;i<proDucts.length;i++){
            var tRow= "<tr><td>"+proDucts[i].Name+"</td><td><select class='siZe'><option>-select-</option><option>small</option><option>large</option></select></td><td><select class='colOr'><option>-select-</option><option>red</option><option>black</option></select></td><td>"+proDucts[i].Price+"</td>";
            $("#productDrop").append(tRow);    
        }

        $('#container').on('change','select', (function(){
        

            var l=this.closest('tr');
            
            var node=Array.from(this.parentElement.parentElement.parentElement.children);
            anc=node.indexOf(l);
            // alert(anc);
            var aInput = $(this).val();
            var nameOfClass = $(this).attr("class");
            if(nameOfClass == 'siZe'){
                console.log(sizeArray[aInput]);
                proDucts[anc].Price += sizeArray[aInput] ;
            }
            else if(nameOfClass=='colOr'){
                console.log(colorArray[aInput]);
                proDucts[anc].Price += colorArray[aInput] ;
            }
            console.log(proDucts[anc].Price);
            $(this).closest('tr').children().first().next().next().next().text(proDucts[anc].Price);
            
        }));
    
})

