# SNUG  
#### A simple CSS framework of responsive grid.
With SNUG, You can make good things every single day.

## Features

* Light weight.  
SNUG is vary light weight.  
  
* Responsive Grid.  
Grid component made by flexbox.  
  
* Simple and easy.


## Quick start

1. Import your html file.  
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


2. Markup.
```
<div class="sng-container">
    <div class="sng-rows">
        <div class="column-2 col-md-2 col-sm-2">
            // Contents
        </div>
        <div class="column-2 col-md-2 col-sm-2">
            // Contents
        </div>
        <div class="column-2 c0l-md-2 col-sm-2">
            // Contents
        </div>
        <div class="column-2 col-md-2 col-sm-2">
            // Contents
        </div>
    </div>
</div>
```

## How to fix your Adobe XD's comp.

1. Open your Adobe XD file.  

1. Use artboard grid.  

1. Select layout grid mode.  

1. Open the setting file.  
```
src > _scss > _config > _customlayoutgrid.scss

or

node_modules > snug-css > src > _scss > _config > _customlayoutgrid.scss
```

1. Customize CSS variables.
```
/* Grid setting(column + gutter) */
$custom-maxcolumn: 0;
$custom-maxcolumn-tablet: 0;
$custom-maxcolumn-mobile: 0;
$custom-gutter: 0;
$custom-gutter-tablet: 0;
$custom-gutter-mobile: 0;

/* Side margin of grid container. */
$w5120: 0;
$w2560: 0;
$w1920: 0;
$w1440: 0;
$w1366: 0;
$w1280: 0;
$iPad: (
  portrait: 0,
  landscape: 0,
);

$iPadPro105: (
  portrait: 0,
  landscape: 0,
);

$iPadPro11: (
  portrait: 0,
  landscape: 0,
);

$iPadPro129: (
  portrait: 0,
  landscape: 0,
);

$surfacepro: (
  portrait: 0,
  landscape: 0,
);
```

## Default breakpoints
### PC
* iMac 5K / 4K / FullHD desktop / MacBook Pro / MacBook / MacBook Air / iPad Pro(Landscape) / iPad(Landscape) / Surface Pro / Android Tablet(Landscape)

### Tablet
* iPad Pro(Portrait) / iPad(Portrait) / Android Tablet(Portrait)

### Smartphone
* iPhone / Android

## Example.
* Like a Bootstrap Grid.
```
<div class="sng-container">
    <div class="sng-rows">
        <div class="grid-3 grid-md-4 grid-sm-6">
            // Contents
        </div>
        <div class="grid-3 grid-md-4 grid-sm-6">
            // Contents
        </div>
        <div class="grid-3 grid-md-4 grid-sm-6">
            // Contents
        </div>
        <div class="grid-3 grid-md-4 grid-sm-6">
            // Contents
        </div>
    </div>
</div>
```

* Align center.
```
// center
<div class="sng-container">
    <div class="sng-rows -centered">
        <div class="grid-6">
            // Contents
        </div>
    </div>
</div>
```

* Align right.
```
<div class="sng-container">
    <div class="sng-rows -right">
        <div class="grid-6">
            // Contents
        </div>
    </div>
</div>
```

* Tile.
```
<div class="sng-container">
    <div class="sng-rows -tile">
        <div class="grid-3">
            // Contents
        </div>
        <div class="grid-3">
            // Contents
        </div>
        <div class="grid-3">
            // Contents
        </div>
    </div>
</div>
```

* Fluid.
```
<div class="sng-container -fluid">
    <div class="sng-rows">
        <div class="grid-12">
            // Contents
        </div>
    </div>
</div>
```

* Nest.
```
<div class="sng-container">
    <div class="sng-rows">
        <div class="grid-6">
            <div class="sng-rows">
                <div class="grid-3">
                    // content
                </div>
                <div class="grid-3">
                    // content
                </div>
                <div class="grid-3">
                    // content
                </div>
            </div>
        </div>
    </div>
</div>
```

* Split.
```
<div class="sng-container">
    <div class="sng-rows">
        <div class="grid-6">
            <div class="grid-6">
                <div class="sng-rows">
                    <div class="grid-4">
                        // content
                    </div>
                    <div class="grid-4">
                        // content
                    </div>
                    <div class="grid-4">
                        // content
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## License
[LICENSE.md](https://github.com/snugcss/snug/blob/master/LICENSE.md)
