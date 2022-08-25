# PerFect-Navbar-Algorithm
![PerFect-Navbar-Algorithm](https://user-images.githubusercontent.com/36970853/186680354-4208bcb1-03d6-4127-9e03-409983b3add6.gif)

The PerFect-Navbar-Algorithm is a simple javascript file you add to your HTML before you close your body tag which adds some simple but valuable magic to your one-page navbar.

## Install
There are two ways:
1. CLI Install
`npm i perfect-navbar-algorithm`
2. Clone the Github repository and take the **PerFect-Navbar-Algorithm.js**

## SetUp
### HTML
Make your one page website as you would. Have fun, the only thing you need to do is in your navbar make sure u have a similar structure as this one: 
```
<ul id="nav-list">
  <li><a class="active" href="#sec1">Sec 1</a></li>
  <li><a href="#sec2">Sec 2</a></li>
  <li><a href="#sec3">Sec 3</a></li>
  <li><a href="#sec4">Sec 4</a></li>
  <li><a href="#sec5">Sec 5</a></li>
</ul>
```
What the JS file will do is take the **ID** of the `<ul>` and look at where the `<a>` points to in the `href`.
>It is important that the links in the navbar are ordered according to the website structure. Otherwise, the algorithm will not work.
### CSS
The only thing you need to do is make an `active` class which will be applied to the appropriate `a` tag when you scroll to the section you link to in the `href`.
> You will need to add the `active` class to the first link in your navbar e.g. **Home**

Last thing, if you don't have your navbar on `position: fixed` you will not see the magic.
### JS
You will need to open up the JS file and on **line 11** insert the **ID** of the `<ul>`. 
Now check it out!

## Last thing from Me
Thank you for checking this project out. If there are some issues pls email me at: leonardosforza108@gmail.com.
If you do use this algorithm I would also love to see how you use it and the website you are building. 
