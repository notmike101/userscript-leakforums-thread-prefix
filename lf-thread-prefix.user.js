// ==UserScript==
// @name           LeakForums All Thread Prefixes
// @version        1.0.0
// @description    Allow for the use of all avaliable thread prefixes
// @downloadURL    https://gitlab.com/notmike101/leakforums-thread-prefix/raw/master/lf-thread-prefix.user.js
// @updateURL      https://gitlab.com/notmike101/leakforums-thread-prefix/raw/master/lf-thread-prefix.meta.js
//
// @author         Mike Orozco / IRDeNial / R00D
// @namespace      leakforums/allthredprefix
//
// @include        *://leakforums.net/editpost.php?*
// @include        *://www.leakforums.net/editpost.php?*
// @include        *://*.leakforums.net/editpost.php*
// @include        *://leakforums.net/newthread.php?*
// @include        *://www.leakforums.net/newthread.php?*
// @include        *://*.leakforums.net/newthread.php*
//
// @grant          metadata
// ==/UserScript==

(function(){
document.querySelector('select[name="threadprefix"]').innerHTML += '<option value="8">Feedback</option><option value="9">NSFW</option><option value="11">HF</option><option value="12">TTG</option><option value="17">SELLIN</option><option value="22">Infected</option><option value="23">Check-Up</option><option value="24">Protection</option><option value="25">Win XP</option><option value="26">Vista</option><option value="27">Win 7</option><option value="28">Win 8</option><option value="32">DUTCH</option><option value="33">GERMAN</option><option value="34">FRENCH</option><option value="35">SE</option><option value="36">DK</option><option value="37">NO</option><option value="40">RS</option><option value="41">WOW</option><option value="44">MUSIC</option><option value="45">MOVIE</option><option value="47">FEEDBACK</option><option value="48">SUGGESTION</option><option value="52">NSFW</option><option value="53">Flag - US</option><option value="54">Flag - DE</option><option value="55">Flag - GB</option><option value="56">Flag - FR</option><option value="57">Flag - NL</option><option value="58">Flag - CA</option><option value="59">Flag - IT</option><option value="66">SNIPPET</option><option value="67">Theme</option>';
})();