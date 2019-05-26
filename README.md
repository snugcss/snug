# SNUG  
#### A simple grid system for Adobe XD.  
SNUG is CSS framework.  
Build the 'layout grid' on HTML.  

## Features

* Light weight.  
SNUG is vary light weight.  
  
* Responsive.  
Grid component made by flexbox.  
  
* Easy.  
Markup is easy.  
  

## Quick start

1. Import with your html file.  
```
<link rel="dist/css/main.min.css">
```

or

```
$ npm install snug-css
<link rel=".node_modules/snugcss/dist/css/main.min.css">
```


2. Markups  
```
<div class="sng-container">
    <div class="grid-row">
        <div class="column-3 md-4 sm-6>
            // Contents
        </div>
        <div class="column-3 md-4 sm-6>
            // Contents
        </div>
        <div class="column-3 md-4 sm-6>
            // Contents
        </div>
        <div class="column-3 md-4 sm-6>
            // Contents
        </div>
    </div>
</div>
```

## How to fix your Adobe XD's comp.

1. Open your Adobe XD file.  

2. Visible grid.  

3. Select layout grid mode.  

4. Customize.  
Fix to variables.

```_adobexd.scss
/* ------------------------
  Grid Setting
------------------------ */
/* Max Column ------- */
$maxcolumn: 12;

/* Grid Gutter Size ------- */
$gutter: 28px;

/* ------------------------
  Margin of container outside
------------------------ */
/* Extra Large Display ------- */
$retina: 468px;

/* Full HD Display ------- */
$desktop: 146px;

/* 1440x800 ------- */
$laptoplarge: 146px;

/* 1366x768 ------- */
$laptop: 139px;

/* iPad Pro 12.9inch ------- */
$ipadpro129-port: 118px;
$ipadpro129-land: 121px;

/* iPad Pro 10.5inch ------- */
$ipadpro105-port: 84px;
$ipadpro105-land: 83px;

/* iPad / iPad mini & Android Tablet ------- */
$ipad-port: 82px;
$ipad-land: 80px;
```

## License
[LICENSE.md](https://github.com/snugcss/snug/blob/master/LICENSE.md)
