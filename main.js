           
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://st2.depositphotos.com/3233277/11272/v/950/depositphotos_112720740-stock-illustration-line-sketch-of-a-mother.jpg", "https://i.pinimg.com/736x/92/49/c3/9249c3cf3d3228aef5881171149a7a9a.jpg", "https://i.pinimg.com/736x/04/f2/77/04f2770855bba8e7caca576c5b26cec5.jpg", "https://th.bing.com/th/id/R.492239efff1e3907dd21f63eda832df1?rik=9mwQn7%2b6j6gvyA&pid=ImgRaw&r=0"];
           
var names = ["album de familia", "jacareia", "jucelino", "fogacho", "sineta"]
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
