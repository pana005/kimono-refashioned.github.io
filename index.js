$(function(){
  function call_img(prefix, max_suffix) {
    var suffix = Math.floor( Math.random() * (max_suffix - 1) + 1 );
    var img = document.createElement("img");
    img.src = prefix + '-' + suffix;
    img.style = "z-index: {cnt}; position: absolute; top: 0; left: 0;"
    var img_div_position = document.getElementById("box");
    img_div_position.appendChild(img);
  }

});
