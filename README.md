# SNUG CSS FrameWork

Scss/flexbox-based framework.  
AdobeXDのレイアウトグリッド（アートボードグリッド）に対応したシンプルなフレックスボックスベースのCSSフレームワークです。  

## Concept / 名前の由来
[Bootstrap](https://getbootstrap.com/)などの人気のフレームワークを使用して作成することが主流となっていますが、予め用意されているコンポーネントではボタンサイズ・色など、スタイルのオーバーライドを強いられたりもします。  
「グリッドシステムは使用しつつ、プロジェクト毎にスタイルの自由度はもう少し欲しい」、「AdobeXDでプロトタイプ作るから再現できるフレームワーク欲しい」というのがコンセプトでありきっかけです。  
「SNUG」は「ぴったり」や「心地良い」という意味で、「自由なデザインに寄り添えるように」という意味でつけました。

## Features / 特徴
* グリッドシステムがメインのシンプルな構成  
* グリッドはAdobe XDのレイアウトグリッドに対応
  ~~Apple端末はデフォルトで設定済み。~~ SurfacePro / AndroidタブレットなどAdobeXdの全アートボードに対応。  
  ~~最大幅と段間隔を設定するだけでXdのレイアウトグリッドを再現します。~~ コンテナー幅の指定を排除。列数・段感覚・左右のマージンを指定します。  
* Scssベースで開発が楽
  デフォルトでグリッドを設定済み。設置するだけで使用可能。  
* グリッドはレスポンシブ対応  
* アイコンフォント[Font Awesome 5](https://fontawesome.com/)が最初から用意されているのでアイコンを引っ張ってくる必要なし。
* jQuery不要。SCSSのみで動く。  
  Vue.JSやReact.JSなどJavascriptライブラリを使った選ばず使用可能。


## Usage / 使い方  

### Download  
[ダウンロード](https://github.com/masatojpn/snug/archive/master.zip)

### Setup  
Sass/Scssベースのフレームワークです。お使いのマシンに予めインストールが必要です。

#### config.rb  
Compassの設定ファイルです。これをいじればディレクトリ構造、出力スタイルを変更できます。

## SCSS  
~~基本的にインポートしたいscssを\_project.scssに追記すれば、それがstyle.cssにコンパイルされます。 \_layout.scssや \_component.scssなどファイル構成を分けていますが使用しなくても構いません。~~
簡単に始められるよう_cuscom.scssにプロジェクト用のスタイルを書きます。

```
[ project ]
├[ files ]
│ ├[ lib ]
│ │ ├[ css ]
│ │ │ └style.css
│ │ ├[ scss ]
│ │ │ ├[ vendor ]
│ │ │ │ ├[ reset ]
│ │ │ │ │ └_reset.scss
│ │ │ │ ├_copyright.scss
│ │ │ │ ├_global.scss
│ │ │ │ ├_grid.scss
│ │ │ │ ├_mixin.scss
│ │ │ │ ├_root.scss
│ │ │ │ └_variable.scss
│ │ │ ├_init.scss
│ │ │ ├_custom.scss
│ │ │ └style.scss
│ │ ├[js]
│ │ │ └app.js
│ │ └[images]
│ ├config.rb
│ └index.html
├LICENSE
└README.md
```  

### \_root.scss  
グリッド専用の変数を格納するSCSSです。初期設定ではAdobeXDのレイアウトグリッドのサイズが入っています。  
基本的にはサイズの指定以外は行いませんが追記しても構いません。  
* ~~`--container-**`にはデバイス毎のコンテナーサイズを指定します。~~  
* ~~`--grid-gutter`には段間隔を指定します。（デフォルト24px）。~~  
  
# 

### \_variable.scss  
グリッド以外の変数を格納するSCSSです。変数を使いたい場合はここに書くと良いです。  

### \_mixin.scss  
僕が比較的よく使うmixinをまとめてあります。またご自身でmixinを作られる場合はここに書くと良いです。  
\_variable.scssをこれより上で読み込んでいるため、\_variable.scssに書いた変数を\_mixin.scssで使えるようになっています。  

| Mixin | 説明 |
|-----|-----|
| @include max($width); | メディアクエリを書く時に使用します。()には最大ウィンドウ幅を指定します。モバイル用はmax(767)の一つだけで指定可能です。 |
| @include min($width); | メディアクエリを書く時に使用します。()には最小ウィンドウ幅を指定します。 |
| @include and($min-width,$max-width); | メディアクエリを書く時に使用します。引数それぞれにはウィンドウ幅を指定します。 |
| @include tablet($width,$height); | タブレット専用のメディアクエリを書く時に使用します。引数それぞれにはデバイス横、デバイス縦を指定します。 |
| @include device($width,$height); | 主にiPhoneXなど特殊なサイズを持つデバイス専用のメディアクエリに使用します。引数それぞれにはデバイス横、デバイス縦を指定します。 |
| @include clearfix; | クリアフィックスです。 |
| @include position-center($top, $left, $translateX, $translateY); | 親要素にposition: relative;（absolute / fixedも可）を指定して、子要素にこのミックスインを使うと縦横中央に配置されます。|
| @include prefix($property, $value); | ベンダープレフィックス系は基本これを使っています。よく使うのはprefix(transform, scale(1.5,1.5);やprefix(transition, .4s cubic-bezier(.5,.3,.2,1));などです。 |
| @include flex($justify-content, $align-items, $flex-direction); | display:flex;を指定します。引数は空欄でもデフォルトでflex-start,flex-start,columnが入ります。 |

### \_grid.scss  

##### .classベース  
2017年に最もお世話になったフレームワーク[RUSH](http://rush.wadacy.com/)の最大12分割のグリッドをベースに、フレックスボックス化＆AdobeXDのレイアウトグリッドに対応したグリッドを用意しています。  
グリッドを使う場合は下記のように書いてください。  

```
<div class="l-container">
    <div class="l-row">
        <div class="l-grid-6">
            <p>.l-grid-6</p>
        </div>
        <div class="l-grid-6">
            <p>.l-grid-6</p>
        </div>
    </div>
</div>
```


カラムを右に寄せる場合は`.l-offset-left-**`をクラス名に付与します。  

```
<div class="l-container">
    <div class="l-row">
        <div class="l-grid-7">
            <p>.l-grid-6</p>
        </div>
        <div class="l-grid-4 l-offset-left-1">
            <p>.l-grid-4</p>
        </div>
    </div>
</div>
```

カラムを中央に寄せる場合は`.l-offset-left-**`と`.l-offset-right-**`をクラス名に付与します。  

```
<div class="l-container">
    <div class="l-row">
        <div class="l-grid-8 l-offset-left-2 l-offset-right-2">
            <p>.l-grid-8.l-offset-left-2.l-offset-right-2</p>
        </div>
    </div>
</div>
```

要素数に応じてカラムが変動するオートグリッドが使えます。５カラムの場合は下記のように書きます。オフセットの併用も可能です。  

```
<div class="l-container">
    <div class="l-row">
        <div class="l-grid-auto">
            <p>.l-grid-auto</p>
        </div>
        <div class="l-grid-auto">
            <p>.l-grid-auto</p>
        </div>
        <div class="l-grid-auto">
            <p>.l-grid-auto</p>
        </div>
        <div class="l-grid-auto">
            <p>.l-grid-auto</p>
        </div>
        <div class="l-grid-auto">
            <p>.l-grid-auto</p>
        </div>
    </div>
</div>
```

インスタグラムのようなタイルレイアウトには`.l-row` は `.l-laid`に、`.l-grid-**`は`.l-tile-grid-`にクラス名を変更します。
```
<div class="l-container">
    <div class="l-laid">
        <div class="l-tile-grid-4">
            <p>.l-tile-grid-4</p>
        </div>
        <div class="l-tile-grid-4">
            <p>.l-tile-grid-4</p>
        </div>
        <div class="l-tile-grid-4">
            <p>.l-tile-grid-4</p>
        </div>
    </div>
</div>
```

##### ミックスインベースで使う
~~グリッドのクラス名はミックスインとして使用可能。~~  
レスポンシブデザインでグリッドを可変させる場合、ミックスインで指定。
```
// HTML
<section>
    <article>
        <div>
            <p>l-grid-4 > l-grid-6 > l-grid-12</p>
        </div>
        <div>
            <p>l-grid-4 > l-grid-6 > l-grid-12</p>
        </div>
        <div>
            <p>l-grid-4 > l-grid-6 > l-grid-12</p>
        </div>
        <div>
            <p>l-grid-4 > l-grid-6 > l-grid-12</p>
        </div>
        <div>
            <p>l-grid-4 > l-grid-6 > l-grid-12</p>
        </div>
        <div>
            <p>l-grid-4 > l-grid-6 > l-grid-12</p>
        </div>
    </article>
</section>

// SCSS
section {
    @include l-container;
}

article {
    @include l-row;
}

div {
    @include l-grid(4);

    @include tablet(768, 1024) { //iPad Portlait
        @include l-grid(6);
    }

    @include max(767) { // Smartphone
        @include l-grid(12);
    }
}
```

さらに直感的に指定できる`@include l-grid($grid)`と`@include l-column($column)`、`@include l-tile-grid($tilegrid)`と`@include l-tile-column($tilecolumn)`の計４つのミックスインも用意しています。  
  
`@include l-grid($grid)`と`@include l-tile-grid($tilegrid)`は引数に ~~最大12分割のグリッド指定します。~~ 任意で最大列数までを指定できます。  
引数を空欄にするとオートグリッドが指定されます。  

`@include l-column($column)`と`@include l-tile-column($tilecolumn)`では、引数にカラム数を指定します。  
5分割や7分割、24分割なんかも可能です。  
また、それぞれは互いに上書きが可能となっています。  
  
クラスベースと違って、スマートフォンでは自動でカラム落ちしないように設定しています。細かい指定はメディアクエリを使用してください。
```
// HTML
<section>
    <article>
        <div>
            <p>grid = 4 / column = 7</p>
        </div>
        <div>
            <p>grid = 4 / column = 7</p>
        </div>
        <div>
            <p>grid = 4 / column = 7</p>
        </div>
        <div>
            <p>grid = 4 / column = 7</p>
        </div>
        <div>
            <p>grid = 4 / column = 7</p>
        </div>
        <div>
            <p>grid = 4 / column = 7</p>
        </div>
        <div>
            <p>grid = 4 / column = 7</p>
        </div>
    </article>
</section>

// SCSS
section {
    @include l-container;
}

article {
    @include l-row;
}

div {
    @include l-grid(4);
}

// または

div {
    @include l-column(7); // ７カラム
}
```

~~オフセット指定も`.l-offset-**`と別のミックスインを用意しました。~~  

左右一括指定の`@include offset($left, $right)`、個別の`@include offset-left(n)`、`@include offset-right(n)`の３つのミックスインがあります。オフセット数１=グリッド１つ分です。  
レスポンシブ対応としてスマートフォンではオフセットが消えるように設定しています。  

```
// HTML
<section>
    <article>
        <div>
            <p>grid = 8 / column = 7</p>
        </div>
    </article>
</section>

// SCSS
section {
    @include l-container;
}

article {
    @include l-row;
}

div {
    @include l-grid();
    @include l-offset(2,2); //左右オフセット一括指定、残りが自動でサイズが入ります
}

div {
    @include l-grid(); // オートグリッド
    @include l-offset-left(4); // 左だけオフセット
    @include l-offset-right(6); // 右だけオフセット
}
```

## Changelog
### 1.2 (2018-8-16)
* ファイル構成を大幅に変更しました。
* フォントを変更（*SanFransiscoを指定）
* _init.scssを追加。AdobeXdのグリッドの値はこのファイルに書きます。

### 1.1 (2018-6-26)
* グリッドの列数を指定できるようにしました。12分割以外の列の指定が可能です。
* コンテナー幅での指定を排除しました。列数、段間隔、左右のマージンを指定できるように変更しました。
* グリッドのミックスインを引数での指定のみに変更しました。

### 1.0 (2018-5-27)
* 公開



## License
[LICENSE.md](https://github.com/masatojpn/snug/blob/master/LICENSE.md)
