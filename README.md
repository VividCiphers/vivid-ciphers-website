# Vivid Ciphers Website

You need to follow some rules to avoid chaos in code.  
Before you start, please take a look at: 
* https://github.com/airbnb/css
* https://github.com/airbnb/javascript
* https://en.bem.info/methodology/

We need to work as a team, as one fullstack developer.  

Cheers!


## Proposed initial structure based on BEM

It is NOT a final version of styles structure but hope it will help us to start our project.  
We need to cooperate to make it better. All suggestions are welcome!  

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
