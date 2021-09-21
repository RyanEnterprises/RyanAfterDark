{"}"}

<><><><><script>




    <script type="text/javascript">

/**

        * Gets the value of the specified cookie.

        *

        * name  Name of the desired cookie.

        *

        * Returns a string containing value of specified cookie,

        *   or null if cookie does not exist.

        */

        function getCookie(name)

        var dc = document.cookie;

        var prefix = name + "=";

        var begin = dc.indexOf("; " + prefix);

        if (begin == -1) {begin = dc.indexOf(prefix)};

        if (begin != 0) return null;

        {"}"} else {begin += 2};

        {"}"}

        var end = document.cookie.indexOf(";", begin);

        if (end == -1) {end = dc.length};

        {"}"}

        return unescape(dc.substring(begin + prefix.length, end));

        {"}"}

    </script><script type="text/javascript">

/**

        * Deletes the specified cookie.

        *

        * name      name of the cookie

        * [path]    path of the cookie (must be same as path used to create cookie)

        * [domain]  domain of the cookie (must be same as domain used to create cookie)

        */

        function deleteCookie(name, path, domain)

        if (getCookie(name)) {document.cookie = name + "=" +

            ((path) ? "; path=" + path : "") +

            ((domain) ? "; domain=" + domain : "") +

            "; expires=Thu, 01-Jan-70 00:00:01 GMT"};

        {"}"}



    </script>
</script><script type="text/javascript">
        function validateEmail(theForm)
        if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2, 3})+$/.test(theForm.email-id.value))
        return(true);
        {"}"}
        alert("CATASTROPIC ERROR! YOU ENTERED AN INVALID EMAIL ADRESS, YOU SHALL PAY");
        return(false);
        {"}"}
    </script></><form onSubmit="return validateEmail(this);" action="">E-mail Address:
        <input type="text" name="emailid" />
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
    </form></><script type="text/javascript">
        writeRandomQuote = function ()
        var quotes = new Array();
        quotes[0] = "Ryan is cool";
        quotes[1] = "Ryan is cooler";
        quotes[2] = "Ryan is coolest";
        quotes[3] = "Ryan is coolester";
        var rand = Math.floor(Math.random()*quotes.length);
        document.write(quotes[rand]);
        {"}"}
        writeRandomQuote();
    </script></><a href="javascript:window.print();">Print this peice of junk</a></>
pathWidth = 10       //Width of the Maze Path
wall = 2             //Width of the Walls between Paths
outerWall = 2        //Width of the Outer most wall
width = 25           //Number paths fitted horisontally
height = 25          //Number paths fitted vertically
delay = 1            //Delay between algorithm cycles
x = width/2|0        //Horisontal starting position
y = height/2|0       //Vertical starting position
seed = Math.random()*100000|0//Seed for random numbers
wallColor = '#d24'   //Color of the walls
pathColor = '#222a33'//Color of the path

randomGen = function(seed){
	if(seed===undefined)var seed=performance.now()
	return function(){
    seed = (seed * 9301 + 49297) % 233280
		return seed/233280
	}
}

init = function(){
  offset = pathWidth/2+outerWall
  map = []
  canvas = document.querySelector('canvas')
  ctx = canvas.getContext('2d')
  canvas.width = outerWall*2+width*(pathWidth+wall)-wall
  canvas.height = outerWall*2+height*(pathWidth+wall)-wall
  ctx.fillStyle = wallColor
  ctx.fillRect(0,0,canvas.width,canvas.height)
  random = randomGen(seed)
  ctx.strokeStyle = pathColor
  ctx.lineCap = 'square'
  ctx.lineWidth = pathWidth
  ctx.beginPath()
  for(var i=0;i<height*2;i++){
    map[i] = []
    for(var j=0;j<width*2;j++){
      map[i][j] = false
    }
  }
  map[y*2][x*2] = true
  route = [[x,y]]
  ctx.moveTo(x*(pathWidth+wall)+offset,
             y*(pathWidth+wall)+offset)
}
init()

inputWidth = document.getElementById('width')
inputHeight = document.getElementById('height')
inputPathWidth = document.getElementById('pathwidth')
inputWallWidth = document.getElementById('wallwidth')
inputOuterWidth = document.getElementById('outerwidth')
inputPathColor = document.getElementById('pathcolor')
inputWallColor = document.getElementById('wallcolor')
inputSeed = document.getElementById('seed')
buttonRandomSeed = document.getElementById('randomseed')

settings = {
  display: function(){
    inputWidth.value = width
    inputHeight.value = height
    inputPathWidth.value = pathWidth
    inputWallWidth.value = wall
    inputOuterWidth.value = outerWall
    inputPathColor.value = pathColor
    inputWallColor.value = wallColor
    inputSeed.value = seed
  },
  check: function(){
    if(inputWidth.value != width||
       inputHeight.value != height||
       inputPathWidth.value != pathWidth||
       inputWallWidth.value != wall||
       inputOuterWidth.value != outerWall||
       inputPathColor.value != pathColor||
       inputWallColor.value != wallColor||
       inputSeed.value != seed){
      settings.update()
    }
  },
  update: function(){
    clearTimeout(timer)
    width = parseFloat(inputWidth.value)
    height = parseFloat(inputHeight.value)
    pathWidth = parseFloat(inputPathWidth.value)
    wall = parseFloat(inputWallWidth.value)
    outerWall = parseFloat(inputOuterWidth.value)
    pathColor = inputPathColor.value
    wallColor = inputWallColor.value
    seed = parseFloat(inputSeed.value)
    x = width/2|0
    y = height/2|0
    init()
    loop()
  }
}

buttonRandomSeed.addEventListener('click',function(){
  inputSeed.value = Math.random()*100000|0
})

loop = function(){
  x = route[route.length-1][0]|0
  y = route[route.length-1][1]|0
  
  var directions = [[1,0],[-1,0],[0,1],[0,-1]],
      alternatives = []
  
  for(var i=0;i<directions.length;i++){
    if(map[(directions[i][1]+y)*2]!=undefined&&
       map[(directions[i][1]+y)*2][(directions[i][0]+x)*2]===false){
      alternatives.push(directions[i])
    }
  }
  
  if(alternatives.length===0){
    route.pop()
    if(route.length>0){
      ctx.moveTo(route[route.length-1][0]*(pathWidth+wall)+offset,
                 route[route.length-1][1]*(pathWidth+wall)+offset)
      timer = setTimeout(loop,delay)
    }
    return;
  }
  direction = alternatives[random()*alternatives.length|0]
  route.push([direction[0]+x,direction[1]+y])
  ctx.lineTo((direction[0]+x)*(pathWidth+wall)+offset,
             (direction[1]+y)*(pathWidth+wall)+offset)
  map[(direction[1]+y)*2][(direction[0]+x)*2] = true
  map[direction[1]+y*2][direction[0]+x*2] = true
  ctx.stroke()
  timer = setTimeout(loop,delay)
}
settings.display()
loop()
setInterval(settings.check,400)

/*
TODO:
    Limit number input
    Disallow . from being entered multiple times
    Clean up structure
*/

(function() {
    "use strict";
  
    // Shortcut to get elements
    var el = function(element) {
      if (element.charAt(0) === "#") { // If passed an ID...
        return document.querySelector(element); // ... returns single element
      }
  
      return document.querySelectorAll(element); // Otherwise, returns a nodelist
    };
  
    // Variables
    var viewer = el("#viewer"), // Calculator screen where result is displayed
      equals = el("#equals"), // Equal button
      nums = el(".num"), // List of numbers
      ops = el(".ops"), // List of operators
      theNum = "", // Current number
      oldNum = "", // First number
      resultNum, // Result
      operator; // Batman
  
    // When: Number is clicked. Get the current number selected
    var setNum = function() {
      if (resultNum) { // If a result was displayed, reset number
        theNum = this.getAttribute("data-num");
        resultNum = "";
      } else { // Otherwise, add digit to previous number (this is a string!)
        theNum += this.getAttribute("data-num");
      }
  
      viewer.innerHTML = theNum; // Display current number
  
    };
  
    // When: Operator is clicked. Pass number to oldNum and save operator
    var moveNum = function() {
      oldNum = theNum;
      theNum = "";
      operator = this.getAttribute("data-ops");
  
      equals.setAttribute("data-result", ""); // Reset result in attr
    };
  
    // When: Equals is clicked. Calculate result
    var displayNum = function() {
  
      // Convert string input to numbers
      oldNum = parseFloat(oldNum);
      theNum = parseFloat(theNum);
  
      // Perform operation
      switch (operator) {
        case "plus":
          resultNum = oldNum + theNum;
          break;
  
        case "minus":
          resultNum = oldNum - theNum;
          break;
  
        case "times":
          resultNum = oldNum * theNum;
          break;
  
        case "divided by":
          resultNum = oldNum / theNum;
          break;
  
          // If equal is pressed without an operator, keep number and continue
        default:
          resultNum = theNum;
      }
  
      // If NaN or Infinity returned
      if (!isFinite(resultNum)) {
        if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
          resultNum = "You broke it!";
        } else { // If result is infinity, set off by dividing by zero
          resultNum = "Look at what you've done";
          el('#calculator').classList.add("broken"); // Break calculator
          el('#reset').classList.add("show"); // And show reset button
        }
      }
  
      // Display result, finally!
      viewer.innerHTML = resultNum;
      equals.setAttribute("data-result", resultNum);
  
      // Now reset oldNum & keep result
      oldNum = 0;
      theNum = resultNum;
  
    };
  
    // When: Clear button is pressed. Clear everything
    var clearAll = function() {
      oldNum = "";
      theNum = "";
      viewer.innerHTML = "0";
      equals.setAttribute("data-result", resultNum);
    };
  
    /* The click events */
  
    // Add click event to numbers
    for (var i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = setNum;
    }
  
    // Add click event to operators
    for (var i = 0, l = ops.length; i < l; i++) {
      ops[i].onclick = moveNum;
    }
  
    // Add click event to equal sign
    equals.onclick = displayNum;
  
    // Add click event to clear button
    el("#clear").onclick = clearAll;
  
    // Add click event to reset button
    el("#reset").onclick = function() {
      window.location = window.location;
    };
  
  }());