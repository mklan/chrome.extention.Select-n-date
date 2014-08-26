chrome.extention.Select-n-date
==============================

#### Instructions

Create a new calendar event by selecting a date or a title from a website. After selecting a text, open the context menu and click on "create a new calendar entry". 

If you have selected a date, the extention will try to parse it and create a new event on this particular date. Elsewise it will create a new event with the selected text as the title.

#### Local dependent parsing

The parsing of the date uses the US pattern Month.Day.Year as standard. You can replace the `date.js` file in libs with the german one also included in the `libs` folder to use the pattern Day.Month.Year. 
apart from that it can parse all the formats that are supported by the `date.js` library. If you are using a special format
in your country you can download `Datejs-all-Alpha1.zip` from https://code.google.com/p/datejs/downloads/list and replace the `date.js` file with your corresponding file in the`build` folder. Just keep in mind to rename the file to `date.js` due to imports.

#### Bugs

If you try to enable the icognito-compatibility-mode the extention stops working and you have to reinstall
