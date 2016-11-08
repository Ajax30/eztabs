# EZ Tabs jQuery Plugin

<div id="content">

## Table of contents

1.  [About the EZ Tabs jQuery plugin](#about)
2.  [How to use the plugin](#usage)
3.  [Options](#options)
4.  [Download](#download)
5.  [Demo](#demos)

<div class="section first" id="about">

### 1\. About the EZ Tabs jQuery plugin

The plugin was designed to help you design tabbed content boxes following a few simple steps.

</div>

<div class="section" id="usage">

### 2\. How to use the plugin

Basic usage:

1\. Include the latest (or simply, your favorite) version of the jQuery library right after the closing tag in your html document:

`<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`

2\. Bellow that line, add the **jquery.eztabs.min.js** file:

`<script type="text/javascript" src="js/jquery.eztabs.min.js"></script>`

3\. Include the plugin's stylesheet: `<link rel="stylesheet" type="text/css" href="css/style.css">`

4\. Make a div and give it any **id** or **class** you want; this div will contain all the html elements of the **tab set**. We will be using the class "tabset" in our example implementation. Inside this container div make an unordered list and asign it the class "ez_tabs". This list will serve as **navigation**.

5\. Under the unordered list with the class of "ez_tabs", make the container of the elements for which you made the navigation at step 3\. Asign the class "ez_content" to this container. Put the content inside this div.

6\. Attach the plugin to the container of both the navigation and the content.

`<script type="text/javascript">` ` $(function() {` `   $('.tabset').eztabs();` ` });` `</script">`</div>

<div class="section" id="options">

### 3\. Options

<table>

<thead>

<tr>

<th width="20%">Option</th>

<th width="20%">Type</th>

<th width="20%">Value</th>

<th width="40%">Role</th>

</tr>

</thead>

<tbody>

<tr>

<td>tabsList</td>

<td>string</td>

<td>The default value is ".ez_tabs".</td>

<td>It represents the **class name** of the list of links you wish to use as the tabs. You can change this selector with any other you desire.</td>

</tr>

<tr>

<td>boxContainer</td>

<td>string</td>

<td>The default value is ".ez_content".</td>

<td>It represents the **class name** of the tabbed content's container. You can change this selector with any other you desire.</td>

</tr>

<tr>

<td>animation</td>

<td>string</td>

<td>none / slideUpDown / slideLeftRight</td>

<td>It sets the animation type. Default is "none".</td>

</tr>

<tr>

<td>animationTime</td>

<td>integer</td>

<td>500</td>

<td>The duration of the animation. Default is 500.</td>

</tr>

<tr>

<td>fullWidthTabs</td>

<td>boolean</td>

<td>true _or_ false</td>

<td>If set to true, it makes the tabs streach 100% of the available space. Default is true.</td>

</tr>

</tbody>

</table>

</div>

<div class="section" id="download">

### 4\. Download

Click the button bellow to download the plugin files. Enjoy!

[Download](http://dcoder.eu/downloads/eztabs.zip)

</div>

<div class="section" id="demos">

### 5\. Demo

1.Tabs aminated from left to right, in 200 milliseconds.

`<script type="text/javascript">` ` $(function() {` `   $('.tabset').eztabs({` `    animation:'slideLeftRight',` `    animationTime : 200` `   });` ` });` `</script">`

<div class="tabset">

*   Description
*   Delivery
*   Composition

<div class="ez_content">

<article>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie eros ac euismod pretium. Sed rhoncus lectus nec metus aliquet porta. Cras cursus justo odio, at tristique erat convallis id. Duis venenatis scelerisque justo. Maecenas iaculis malesuada lacus, id ultricies dui.

</article>

<article>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie eros ac euismod pretium. Sed rhoncus lectus nec metus aliquet porta. Cras cursus justo odio, at tristique erat convallis id. Duis venenatis scelerisque justo. Maecenas iaculis malesuada lacus, id ultricies dui. Nam scelerisque elit vitae lacus gravida, eget sodales nibh faucibus. Nulla elit sapien, molestie in mattis eget, consectetur vitae ipsum. Donec ut placerat magna, ut sodales tortor. Sed quis turpis tincidunt, fringilla felis ut, venenatis nisi. Proin egestas viverra nulla, nec dignissim nisi molestie eget.

</article>

<article>

*   Cotton 80%
*   Cotton 10%
*   Elastan 10%

</article>

</div>

</div>

</div>

</div>