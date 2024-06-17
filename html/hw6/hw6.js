<!DOCTYPE html>
<html>
<head>
<style> 
div
{
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, height 4s;
}
div1
{
  width: 300px;
  height: 400px;
  background: red;
  transition: width 2s, height 4s;
}


</style>
</head>
<body>

<div id="j" onclick="mouseDown()" ></div>
<div1 id="j" onclick="mouseDown()" ></div1>
<script>
var c=0;
var j= document.getElementById("j");
function mouseDown() 
{

    if(c===0)
    {
      j.style.width ="300px";
      j.style.height ="400px";
      c=c+1;
    }
    else
    {
      j.style.width ="100px";
      j.style.height ="100px";
      c=c-1;
    }
}

</script>


</body>
</html>
