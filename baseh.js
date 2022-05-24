const Jna728ja = {hjakk:`<span class="jaoka99282kk" onclick="Jna728ja.open(this)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span><div class="ikskillbsiw79" id="jksijakai68c"><div class="get8ja90"><button class="button-4" onclick="Jna728ja.lod()" role="button">Update code</button><span class="jksknsumskak6" onclick="Jna728ja.close()">×</span></div><textarea placeholder="" id="editing" spellcheck="false" oninput="Jna728ja.update(this.value); Jna728ja.sync_scroll(this);" onscroll="Jna728ja.sync_scroll(this);" onkeydown="Jna728ja.check_tab(this, event);"></textarea><pre class="line-numbers jjakjs782jjka" id="highlighting" aria-hidden="true"><code class="language-markup Hyhnsn6jk7" id="highlighting-content"> </code></pre></div>`, run:function(){

  document.body.innerHTML+=Jna728ja.hjakk;

var sct = document.createElement("script");var sch = document.createElement("script");sct.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-core.min.js");sch.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/line-numbers/prism-line-numbers.js");document.head.appendChild(sct);document.head.appendChild(sch);

  document.head.innerHTML+=`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-atom-dark.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;

},update:function(text) {

  let result_element = document.querySelector("#highlighting-content");

  if(text[text.length-1] == "\n") {

    text += " ";

  }

  result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");

  Prism.highlightElement(result_element);

},

sync_scroll:function(element) {

  let result_element = document.querySelector("#highlighting");

  result_element.scrollTop = element.scrollTop;

  result_element.scrollLeft = element.scrollLeft;

},

check_tab:function(element, event) {

  let code = element.value;

  if(event.key == "Tab") {

    event.preventDefault(); 

    let before_tab = code.slice(0, element.selectionStart); 

    let after_tab = code.slice(element.selectionEnd, element.value.length); 

    let cursor_pos = element.selectionEnd + 1;

    element.value = before_tab + "\t" + after_tab;

    element.selectionStart = cursor_pos;

    element.selectionEnd = cursor_pos;

    update(element.value);

  }

}, open: function(val){

  val.style.display="none";

  document.getElementById("jksijakai68c").style.display="block";

  document.getElementById("editing").value = loadUrl.edi.maint;

  document.getElementById("editing").focus();

}, close: function(){

  document.querySelector(".jaoka99282kk").style.display="block";

  document.getElementById("jksijakai68c").style.display="none";

}, lod: function(){

  Jna728ja.close();

  loadUrl.edi.load(document.getElementById("editing").value);

}, }
