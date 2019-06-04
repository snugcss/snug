# SNUG  
#### A simple grid system for Adobe XD.  
SNUG is CSS framework.  
Build the 'layout grid' on HTML.  

## Features

* Light weight.  
SNUG is vary light weight.  
  
* Responsive.  
Grid component made by flexbox.  
  
* Simple and easy.
  

## Quick start

1. Import with your html file.  
```
<link rel="stylesheet" href="dist/css/snug.min.css">
```
  
or  
  
```
<link rel="stylesheet" href="//unpkg.com/snug-css@latest/dist/css/snug.min.css">
```
  
or  
  
```
$ npm install snug-css
<link rel="stylesheet" href=".node_modules/snugcss/dist/css/snug.min.css">
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

2. Use artboard grid.  

3. Select layout grid mode.  

4. Open the setting file.  
```
src > _scss > _config > _adobexd.scss

or

node_modules > snug-css > src > _scss > _config > _adobexd.scss
```

5. Customize CSS variables.
```
/* ------------------------
  Grid Settings.
------------------------ */
/* Max Column ------- */
$maxcolumn: 12;

/* Grid Gutter Size ------- */
$gutter: 28px;

/* ------------------------
  Margin of container outside.
------------------------ */
/* For Extra Large Display ------- */
$retina: 468px;

/* For Full HD Display ------- */
$desktop: 146px;

/* For 1440 px x 800px ------- */
$laptoplarge: 146px;

/* For 1366px x 768px ------- */
$laptop: 139px;

/* For iPad Pro 12.9inch ------- */
$ipadpro129-port: 118px;
$ipadpro129-land: 121px;

/* For iPad Pro 10.5inch ------- */
$ipadpro105-port: 84px;
$ipadpro105-land: 83px;

/* For iPad / iPad mini & Android Tablet ------- */
$ipad-port: 82px;
$ipad-land: 80px;
```

## License
[LICENSE.md](https://github.com/snugcss/snug/blob/master/LICENSE.md)
