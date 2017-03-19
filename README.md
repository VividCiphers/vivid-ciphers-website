# Vivid Ciphers Website

You need to follow some rules to avoid chaos in code.  
Before you start, please take a look at:
* https://github.com/airbnb/css
* https://github.com/airbnb/javascript
* https://en.bem.info/methodology/

We need to work as a team, as one fullstack developer.  

Cheers!


## How to compile

1. Install recommended version of Node.js https://nodejs.org/en/  
2. Open your terminal and type ```npm install npm -g```  
3. Type 2 commands ```npm -v```,```node -v``` in your terminal to see that Node.js and npm was installed  
4. Go to your project dir. Open terminal and type ```npm install --save-dev gulp```  
5. After Gulp was installed you need to install 2 more modules: ```npm install gulp-sass --save-dev``` and ```npm install --save-dev gulp-concat```  
6. Now you can make some changes in different scss files in styles folder. After work done, you should open the terminal in your project folder and type ```gulp sass```. This command will concatenate all scss styles to one css file inside ./production/css folder  


## Proposed initial structure based on BEM

It is NOT a final version of styles structure but hope it will help us to start our project.  
We need to cooperate to make it better. All suggestions are welcome!  

```
|-- styles  
    |-- common *Common styles and additional stylesheets like Normalize.css*  
    |   |-- common.scss  
    |-- library *Library for all needed elements*  
        |-- button  
        |   |-- button.scss  
        |   |-- _color  
        |   |   |-- _color_green.scss  
        |   |   |-- _color_red.scss  
        |   |-- _size  
        |       |-- _size_m.scss  
        |-- footer  
        |   |-- footer.scss  
        |-- form  
        |   |-- __input  
        |       |-- __input.scss  
        |-- header  
        |   |-- header.scss  
        |-- input  
        |   |-- input.scss  
        |   |-- _style  
        |       |-- _style_standard.scss  
        |-- logotype  
        |   |-- logotype.scss  
        |-- paragraph  
            |-- paragraph.scss  
            |-- _alignment  
            |   |-- _aligment_center.scss  
            |   |-- _aligment_left.scss  
            |   |-- _aligment_right.scss  
            |-- _color  
            |   |-- _color_gray.scss  
            |-- _style  
                |-- _style_introduction.scss  
                |-- _style_standard.scss  
```
