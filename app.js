/*The MIT License (MIT)

Copyright (c) 2014 Matthias Klan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

function onClickHandler(info) {

  var sText = info.selectionText
  
  //check if the selected Text is a Date
  var date = Date.parse(sText);

  //if not open the "new Event-form" with prefilled title
  if(date == null){
    window.open("https://www.google.com/calendar/render?action=TEMPLATE&text="+sText+"&sf=true&output=xml");
  //if it's a Date convert them into ISO date
  }else{
    var start = date.toISOString();
    var end = date.add(1).hour().toISOString(); // one hour later
    
    //Bring the new ISO date format into the right Google format ( no -,:,. and no milliseconds)
    start = start.replace(/(-|:|\.)/g, "").slice(0, -4) + 'Z';
    end = end.replace(/(-|:|\.)/g, "").slice(0, -4) + 'Z';
    
    //Prefill the Date in the "new Event-form"
    window.open("https://www.google.com/calendar/render?action=TEMPLATE&dates="+start+"/"+end+"&sf=true&output=xml");
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection"; //only present when text is selected
  var title = "Create a new calendar entry";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "context" + context});  
});
