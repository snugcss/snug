!function o(u,s,a){function c(t,e){if(!s[t]){if(!u[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=s[t]={exports:{}};u[t][0].call(i.exports,function(e){return c(u[t][1][e]||e)},i,i.exports,o,u,s,a)}return s[t].exports}for(var f="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,t,r){"use strict";var n=document.getElementsByClassName("trigger"),i=document.getElementsByClassName("gnav"),o=document.getElementsByClassName("gnav-list-item");function u(e,t){e.classList.toggle(t)}n[0].addEventListener("click",function(){u(n[0],"is-open"),u(i[0],"is-open");var r=0;!function e(){u(o[r],"is-active"),r++;var t=setTimeout(e,40);4<r&&clearTimeout(t)}()},!1)},{}],2:[function(e,t,r){"use strict";var n,i=e("./_trigger");(n=i)&&n.__esModule},{"./_trigger":1}]},{},[2]);
