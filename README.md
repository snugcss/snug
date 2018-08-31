# SNUG  
#### A simple grid framework for Adobe XD.  
Adobe XDのレイアウトグリッドをコードで再現できるシンプルなCSSフレームワークです。  

### レイアウトグリッドをコードで。  
Adobe XDの機能「レイアウトグリッド」をコードで簡単に再現できるCSSフレームワークです。  
### 柔軟なデザインを可能に。  
従来のWEBフレームワークでは、スピーディに開発できるよう独自のデザイン（スタイル）が適用されています。SNUGはグリッド以外のコンポーネントは持たず、フレームワークに依存しないオリジナリティのあるデザインを可能にします。  
### チーム開発をスマートに。  
ディレクター、デザイナーはSNUGの知識は必要ありません。Adobe XDのレイアウトグリッドを使うことでワイヤーフレーム、デザイン、プロトタイプといった作業はフレームワークを意識せずに行うことができ、スマートに開発を進めることができます。  

## Features / 特徴

* Build on SCSS  
SNUGはSass / Scssを使った軽量なグリッドシステムです。  

* Include Icon Font.  
[Font Awesome 5](https://fontawesome.com/)をインストール済み。  

* Customize.  
SNUGは、ほかのツールと組み合わせやすいピュアなCSSフレームワークです。プロジェクト毎のカスタマイズも簡単にでき、コンフリクトを回避できます。  
* Responsive.  
SNUGのグリッドシステムはデスクトップ、モバイルだけではなくAdobe XDで使えるアートボード全てに対応しています。  

## Quick start / クイックスタート

1. Download / ダウンロード
Githubより[ダウンロード](https://github.com/snugcss/snug/archive/master.zip)します。

2. Initialize / 初期設定
解凍したら_init.scssを開きAdobeXdのレイアウトグリッドの値に合わせます。
```
/* _init.scss */
$maxcolumn: 12; // 列の値
$gutter: 28px; // 段間隔の値

$desktop: 146px; //両サイドのマージン
```
列、段間隔は共通。両サイドのマージンはアートボード毎に個別に設定してください。

3. Markup / マークアップ
```
<div class="l-container">
    <div class="l-row">
        <div class="l-grid-12>
            //コンテンツ
        </div>
    </div>
</div>
```

## タスクランナーによるコンパイル
\node.jsをインストール後、\npm installで必要なモジュールがインストールされます。コンパイルする時は\npm run allでstylelint、prefixの付与、styleのsort、Minifyまでを自動で行います。

## Changelog / ログ
[CHANGELOG.md](https://github.com/snugcss/snug/blob/master/CHANGELOG.md)

## License
[LICENSE.md](https://github.com/snugcss/snug/blob/master/LICENSE.md)
