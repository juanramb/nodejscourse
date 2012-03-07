



<!DOCTYPE html>
<html>
<head>
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/17950784993885590195","projectHomeUrl":"/p/html5slides","relativeBaseUrl":"","projectName":"html5slides","loggedInUserEmail":null};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 
 </script>
 
 
 <title>prettify.js - 
 html5slides -
 
 
 A Google HTML5 slide template - Google Project Hosting
 </title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17950784993885590195/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17950784993885590195/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17950784993885590195/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17950784993885590195/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fhtml5slides%2Fsource%2Fbrowse%2Ftrunk%2Fprettify.js&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fhtml5slides%2Fsource%2Fbrowse%2Ftrunk%2Fprettify.js" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/p/html5slides">
 <a href="/p/html5slides/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/html5slides/"><span itemprop="name">html5slides</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/html5slides/"><span itemprop="description">A Google HTML5 slide template</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/html5slides/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/html5slides/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/html5slides/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/html5slides/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/html5slides/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/html5slides/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/html5slides/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/html5slides/source/list">Changes</a></span> &nbsp;
 
 &nbsp;
 
 <form action="/p/html5slides/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/html5slides/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/html5slides/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span>prettify.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r20</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn20_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn20_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn20_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn20_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn20_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn20_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn20_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn20_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn20_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn20_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn20_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn20_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn20_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn20_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn20_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn20_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn20_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn20_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn20_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn20_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn20_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn20_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn20_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn20_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn20_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn20_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn20_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn20_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn20_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn20_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn20_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn20_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn20_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn20_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn20_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn20_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn20_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn20_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn20_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn20_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn20_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn20_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn20_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn20_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn20_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn20_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn20_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn20_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn20_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn20_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn20_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn20_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn20_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn20_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn20_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn20_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn20_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn20_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn20_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn20_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn20_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn20_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn20_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn20_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn20_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn20_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn20_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn20_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn20_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn20_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn20_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn20_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn20_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn20_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn20_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn20_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn20_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn20_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn20_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn20_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn20_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn20_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn20_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn20_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn20_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn20_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn20_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn20_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn20_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn20_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn20_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn20_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn20_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn20_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn20_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn20_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn20_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn20_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn20_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn20_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn20_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn20_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn20_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn20_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn20_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn20_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn20_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn20_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn20_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn20_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn20_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn20_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn20_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn20_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn20_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn20_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn20_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn20_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn20_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn20_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn20_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn20_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn20_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn20_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn20_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn20_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn20_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn20_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn20_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn20_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn20_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn20_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn20_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn20_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn20_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn20_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn20_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn20_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn20_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn20_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn20_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn20_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn20_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn20_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn20_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn20_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn20_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn20_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn20_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn20_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn20_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn20_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn20_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn20_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn20_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn20_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn20_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn20_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn20_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn20_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn20_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn20_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn20_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn20_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn20_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn20_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn20_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn20_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn20_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn20_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn20_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn20_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn20_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn20_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn20_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn20_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn20_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn20_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn20_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn20_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn20_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn20_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn20_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn20_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn20_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn20_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn20_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn20_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn20_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn20_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn20_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn20_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn20_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn20_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn20_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn20_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn20_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn20_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn20_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn20_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn20_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn20_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn20_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn20_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn20_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn20_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn20_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn20_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn20_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn20_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn20_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn20_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn20_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn20_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn20_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn20_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn20_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn20_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn20_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn20_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn20_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn20_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn20_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn20_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn20_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn20_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn20_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn20_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn20_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn20_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn20_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn20_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn20_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn20_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn20_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn20_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn20_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn20_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn20_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn20_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn20_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn20_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn20_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn20_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn20_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn20_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn20_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn20_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn20_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn20_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn20_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn20_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn20_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn20_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn20_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn20_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn20_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn20_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn20_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn20_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn20_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn20_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn20_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn20_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn20_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn20_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn20_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn20_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn20_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn20_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn20_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn20_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn20_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn20_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn20_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn20_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn20_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn20_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn20_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn20_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn20_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn20_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn20_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn20_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn20_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn20_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn20_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn20_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn20_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn20_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn20_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn20_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn20_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn20_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn20_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn20_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn20_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn20_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn20_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn20_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn20_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn20_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn20_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn20_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn20_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn20_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn20_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn20_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn20_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn20_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn20_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn20_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn20_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn20_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn20_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn20_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn20_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn20_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn20_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn20_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn20_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn20_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn20_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn20_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn20_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn20_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn20_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn20_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn20_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn20_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn20_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn20_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn20_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn20_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn20_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn20_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn20_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn20_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn20_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn20_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn20_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn20_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn20_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn20_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn20_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn20_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn20_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn20_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn20_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn20_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn20_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn20_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn20_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn20_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn20_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn20_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn20_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn20_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn20_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn20_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn20_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn20_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn20_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn20_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn20_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn20_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn20_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn20_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn20_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn20_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn20_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn20_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn20_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn20_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn20_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn20_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn20_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn20_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn20_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn20_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn20_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn20_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn20_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn20_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn20_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn20_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn20_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn20_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn20_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn20_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn20_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn20_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn20_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn20_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn20_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn20_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn20_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn20_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn20_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn20_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn20_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn20_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn20_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn20_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn20_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn20_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn20_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn20_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn20_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn20_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn20_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn20_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn20_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn20_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn20_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn20_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn20_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn20_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn20_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn20_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn20_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn20_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn20_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn20_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn20_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn20_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn20_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn20_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn20_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn20_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn20_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn20_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn20_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn20_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn20_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn20_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn20_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn20_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn20_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn20_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn20_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn20_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn20_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn20_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn20_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn20_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn20_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn20_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn20_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn20_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn20_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn20_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn20_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn20_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn20_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn20_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn20_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn20_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn20_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn20_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn20_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn20_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn20_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn20_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn20_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn20_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn20_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn20_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn20_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn20_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn20_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn20_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn20_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn20_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn20_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn20_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn20_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn20_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn20_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn20_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn20_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn20_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn20_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn20_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn20_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn20_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn20_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn20_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn20_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn20_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn20_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn20_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn20_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn20_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn20_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn20_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn20_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn20_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn20_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn20_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn20_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn20_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn20_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn20_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn20_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn20_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn20_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn20_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn20_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn20_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn20_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn20_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn20_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn20_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn20_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn20_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn20_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn20_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn20_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn20_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn20_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn20_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn20_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn20_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn20_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn20_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn20_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn20_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn20_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn20_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn20_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn20_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn20_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn20_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn20_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn20_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn20_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn20_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn20_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn20_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn20_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn20_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn20_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn20_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn20_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn20_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn20_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn20_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn20_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn20_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn20_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn20_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn20_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn20_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn20_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn20_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn20_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn20_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn20_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn20_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn20_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn20_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn20_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn20_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn20_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn20_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn20_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn20_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn20_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn20_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn20_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn20_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn20_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn20_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn20_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn20_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn20_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn20_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn20_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn20_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn20_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn20_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn20_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn20_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn20_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn20_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn20_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn20_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn20_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn20_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn20_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn20_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn20_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn20_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn20_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn20_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn20_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn20_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn20_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn20_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn20_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn20_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn20_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn20_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn20_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn20_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn20_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn20_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn20_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn20_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn20_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn20_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn20_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn20_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn20_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn20_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn20_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn20_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn20_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn20_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn20_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn20_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn20_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn20_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn20_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn20_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn20_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn20_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn20_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn20_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn20_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn20_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn20_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn20_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn20_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn20_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn20_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn20_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn20_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn20_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn20_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn20_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn20_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn20_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn20_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn20_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn20_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn20_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn20_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn20_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn20_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn20_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn20_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn20_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn20_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn20_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn20_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn20_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn20_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn20_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn20_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn20_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn20_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn20_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn20_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn20_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn20_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn20_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn20_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn20_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn20_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn20_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn20_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn20_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn20_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn20_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn20_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn20_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn20_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn20_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn20_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn20_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn20_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn20_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn20_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn20_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn20_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn20_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn20_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn20_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn20_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn20_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn20_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn20_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn20_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn20_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn20_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn20_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn20_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn20_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn20_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn20_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn20_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn20_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn20_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn20_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn20_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn20_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn20_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn20_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn20_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn20_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn20_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn20_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn20_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn20_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn20_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn20_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn20_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn20_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn20_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn20_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn20_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn20_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn20_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn20_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn20_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn20_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn20_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn20_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn20_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn20_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn20_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn20_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn20_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn20_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn20_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn20_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn20_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn20_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn20_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn20_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn20_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn20_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn20_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn20_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn20_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn20_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn20_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn20_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn20_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn20_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn20_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn20_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn20_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn20_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn20_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn20_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn20_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn20_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn20_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn20_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn20_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn20_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn20_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn20_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn20_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn20_768"

><td id="768"><a href="#768">768</a></td></tr
><tr id="gr_svn20_769"

><td id="769"><a href="#769">769</a></td></tr
><tr id="gr_svn20_770"

><td id="770"><a href="#770">770</a></td></tr
><tr id="gr_svn20_771"

><td id="771"><a href="#771">771</a></td></tr
><tr id="gr_svn20_772"

><td id="772"><a href="#772">772</a></td></tr
><tr id="gr_svn20_773"

><td id="773"><a href="#773">773</a></td></tr
><tr id="gr_svn20_774"

><td id="774"><a href="#774">774</a></td></tr
><tr id="gr_svn20_775"

><td id="775"><a href="#775">775</a></td></tr
><tr id="gr_svn20_776"

><td id="776"><a href="#776">776</a></td></tr
><tr id="gr_svn20_777"

><td id="777"><a href="#777">777</a></td></tr
><tr id="gr_svn20_778"

><td id="778"><a href="#778">778</a></td></tr
><tr id="gr_svn20_779"

><td id="779"><a href="#779">779</a></td></tr
><tr id="gr_svn20_780"

><td id="780"><a href="#780">780</a></td></tr
><tr id="gr_svn20_781"

><td id="781"><a href="#781">781</a></td></tr
><tr id="gr_svn20_782"

><td id="782"><a href="#782">782</a></td></tr
><tr id="gr_svn20_783"

><td id="783"><a href="#783">783</a></td></tr
><tr id="gr_svn20_784"

><td id="784"><a href="#784">784</a></td></tr
><tr id="gr_svn20_785"

><td id="785"><a href="#785">785</a></td></tr
><tr id="gr_svn20_786"

><td id="786"><a href="#786">786</a></td></tr
><tr id="gr_svn20_787"

><td id="787"><a href="#787">787</a></td></tr
><tr id="gr_svn20_788"

><td id="788"><a href="#788">788</a></td></tr
><tr id="gr_svn20_789"

><td id="789"><a href="#789">789</a></td></tr
><tr id="gr_svn20_790"

><td id="790"><a href="#790">790</a></td></tr
><tr id="gr_svn20_791"

><td id="791"><a href="#791">791</a></td></tr
><tr id="gr_svn20_792"

><td id="792"><a href="#792">792</a></td></tr
><tr id="gr_svn20_793"

><td id="793"><a href="#793">793</a></td></tr
><tr id="gr_svn20_794"

><td id="794"><a href="#794">794</a></td></tr
><tr id="gr_svn20_795"

><td id="795"><a href="#795">795</a></td></tr
><tr id="gr_svn20_796"

><td id="796"><a href="#796">796</a></td></tr
><tr id="gr_svn20_797"

><td id="797"><a href="#797">797</a></td></tr
><tr id="gr_svn20_798"

><td id="798"><a href="#798">798</a></td></tr
><tr id="gr_svn20_799"

><td id="799"><a href="#799">799</a></td></tr
><tr id="gr_svn20_800"

><td id="800"><a href="#800">800</a></td></tr
><tr id="gr_svn20_801"

><td id="801"><a href="#801">801</a></td></tr
><tr id="gr_svn20_802"

><td id="802"><a href="#802">802</a></td></tr
><tr id="gr_svn20_803"

><td id="803"><a href="#803">803</a></td></tr
><tr id="gr_svn20_804"

><td id="804"><a href="#804">804</a></td></tr
><tr id="gr_svn20_805"

><td id="805"><a href="#805">805</a></td></tr
><tr id="gr_svn20_806"

><td id="806"><a href="#806">806</a></td></tr
><tr id="gr_svn20_807"

><td id="807"><a href="#807">807</a></td></tr
><tr id="gr_svn20_808"

><td id="808"><a href="#808">808</a></td></tr
><tr id="gr_svn20_809"

><td id="809"><a href="#809">809</a></td></tr
><tr id="gr_svn20_810"

><td id="810"><a href="#810">810</a></td></tr
><tr id="gr_svn20_811"

><td id="811"><a href="#811">811</a></td></tr
><tr id="gr_svn20_812"

><td id="812"><a href="#812">812</a></td></tr
><tr id="gr_svn20_813"

><td id="813"><a href="#813">813</a></td></tr
><tr id="gr_svn20_814"

><td id="814"><a href="#814">814</a></td></tr
><tr id="gr_svn20_815"

><td id="815"><a href="#815">815</a></td></tr
><tr id="gr_svn20_816"

><td id="816"><a href="#816">816</a></td></tr
><tr id="gr_svn20_817"

><td id="817"><a href="#817">817</a></td></tr
><tr id="gr_svn20_818"

><td id="818"><a href="#818">818</a></td></tr
><tr id="gr_svn20_819"

><td id="819"><a href="#819">819</a></td></tr
><tr id="gr_svn20_820"

><td id="820"><a href="#820">820</a></td></tr
><tr id="gr_svn20_821"

><td id="821"><a href="#821">821</a></td></tr
><tr id="gr_svn20_822"

><td id="822"><a href="#822">822</a></td></tr
><tr id="gr_svn20_823"

><td id="823"><a href="#823">823</a></td></tr
><tr id="gr_svn20_824"

><td id="824"><a href="#824">824</a></td></tr
><tr id="gr_svn20_825"

><td id="825"><a href="#825">825</a></td></tr
><tr id="gr_svn20_826"

><td id="826"><a href="#826">826</a></td></tr
><tr id="gr_svn20_827"

><td id="827"><a href="#827">827</a></td></tr
><tr id="gr_svn20_828"

><td id="828"><a href="#828">828</a></td></tr
><tr id="gr_svn20_829"

><td id="829"><a href="#829">829</a></td></tr
><tr id="gr_svn20_830"

><td id="830"><a href="#830">830</a></td></tr
><tr id="gr_svn20_831"

><td id="831"><a href="#831">831</a></td></tr
><tr id="gr_svn20_832"

><td id="832"><a href="#832">832</a></td></tr
><tr id="gr_svn20_833"

><td id="833"><a href="#833">833</a></td></tr
><tr id="gr_svn20_834"

><td id="834"><a href="#834">834</a></td></tr
><tr id="gr_svn20_835"

><td id="835"><a href="#835">835</a></td></tr
><tr id="gr_svn20_836"

><td id="836"><a href="#836">836</a></td></tr
><tr id="gr_svn20_837"

><td id="837"><a href="#837">837</a></td></tr
><tr id="gr_svn20_838"

><td id="838"><a href="#838">838</a></td></tr
><tr id="gr_svn20_839"

><td id="839"><a href="#839">839</a></td></tr
><tr id="gr_svn20_840"

><td id="840"><a href="#840">840</a></td></tr
><tr id="gr_svn20_841"

><td id="841"><a href="#841">841</a></td></tr
><tr id="gr_svn20_842"

><td id="842"><a href="#842">842</a></td></tr
><tr id="gr_svn20_843"

><td id="843"><a href="#843">843</a></td></tr
><tr id="gr_svn20_844"

><td id="844"><a href="#844">844</a></td></tr
><tr id="gr_svn20_845"

><td id="845"><a href="#845">845</a></td></tr
><tr id="gr_svn20_846"

><td id="846"><a href="#846">846</a></td></tr
><tr id="gr_svn20_847"

><td id="847"><a href="#847">847</a></td></tr
><tr id="gr_svn20_848"

><td id="848"><a href="#848">848</a></td></tr
><tr id="gr_svn20_849"

><td id="849"><a href="#849">849</a></td></tr
><tr id="gr_svn20_850"

><td id="850"><a href="#850">850</a></td></tr
><tr id="gr_svn20_851"

><td id="851"><a href="#851">851</a></td></tr
><tr id="gr_svn20_852"

><td id="852"><a href="#852">852</a></td></tr
><tr id="gr_svn20_853"

><td id="853"><a href="#853">853</a></td></tr
><tr id="gr_svn20_854"

><td id="854"><a href="#854">854</a></td></tr
><tr id="gr_svn20_855"

><td id="855"><a href="#855">855</a></td></tr
><tr id="gr_svn20_856"

><td id="856"><a href="#856">856</a></td></tr
><tr id="gr_svn20_857"

><td id="857"><a href="#857">857</a></td></tr
><tr id="gr_svn20_858"

><td id="858"><a href="#858">858</a></td></tr
><tr id="gr_svn20_859"

><td id="859"><a href="#859">859</a></td></tr
><tr id="gr_svn20_860"

><td id="860"><a href="#860">860</a></td></tr
><tr id="gr_svn20_861"

><td id="861"><a href="#861">861</a></td></tr
><tr id="gr_svn20_862"

><td id="862"><a href="#862">862</a></td></tr
><tr id="gr_svn20_863"

><td id="863"><a href="#863">863</a></td></tr
><tr id="gr_svn20_864"

><td id="864"><a href="#864">864</a></td></tr
><tr id="gr_svn20_865"

><td id="865"><a href="#865">865</a></td></tr
><tr id="gr_svn20_866"

><td id="866"><a href="#866">866</a></td></tr
><tr id="gr_svn20_867"

><td id="867"><a href="#867">867</a></td></tr
><tr id="gr_svn20_868"

><td id="868"><a href="#868">868</a></td></tr
><tr id="gr_svn20_869"

><td id="869"><a href="#869">869</a></td></tr
><tr id="gr_svn20_870"

><td id="870"><a href="#870">870</a></td></tr
><tr id="gr_svn20_871"

><td id="871"><a href="#871">871</a></td></tr
><tr id="gr_svn20_872"

><td id="872"><a href="#872">872</a></td></tr
><tr id="gr_svn20_873"

><td id="873"><a href="#873">873</a></td></tr
><tr id="gr_svn20_874"

><td id="874"><a href="#874">874</a></td></tr
><tr id="gr_svn20_875"

><td id="875"><a href="#875">875</a></td></tr
><tr id="gr_svn20_876"

><td id="876"><a href="#876">876</a></td></tr
><tr id="gr_svn20_877"

><td id="877"><a href="#877">877</a></td></tr
><tr id="gr_svn20_878"

><td id="878"><a href="#878">878</a></td></tr
><tr id="gr_svn20_879"

><td id="879"><a href="#879">879</a></td></tr
><tr id="gr_svn20_880"

><td id="880"><a href="#880">880</a></td></tr
><tr id="gr_svn20_881"

><td id="881"><a href="#881">881</a></td></tr
><tr id="gr_svn20_882"

><td id="882"><a href="#882">882</a></td></tr
><tr id="gr_svn20_883"

><td id="883"><a href="#883">883</a></td></tr
><tr id="gr_svn20_884"

><td id="884"><a href="#884">884</a></td></tr
><tr id="gr_svn20_885"

><td id="885"><a href="#885">885</a></td></tr
><tr id="gr_svn20_886"

><td id="886"><a href="#886">886</a></td></tr
><tr id="gr_svn20_887"

><td id="887"><a href="#887">887</a></td></tr
><tr id="gr_svn20_888"

><td id="888"><a href="#888">888</a></td></tr
><tr id="gr_svn20_889"

><td id="889"><a href="#889">889</a></td></tr
><tr id="gr_svn20_890"

><td id="890"><a href="#890">890</a></td></tr
><tr id="gr_svn20_891"

><td id="891"><a href="#891">891</a></td></tr
><tr id="gr_svn20_892"

><td id="892"><a href="#892">892</a></td></tr
><tr id="gr_svn20_893"

><td id="893"><a href="#893">893</a></td></tr
><tr id="gr_svn20_894"

><td id="894"><a href="#894">894</a></td></tr
><tr id="gr_svn20_895"

><td id="895"><a href="#895">895</a></td></tr
><tr id="gr_svn20_896"

><td id="896"><a href="#896">896</a></td></tr
><tr id="gr_svn20_897"

><td id="897"><a href="#897">897</a></td></tr
><tr id="gr_svn20_898"

><td id="898"><a href="#898">898</a></td></tr
><tr id="gr_svn20_899"

><td id="899"><a href="#899">899</a></td></tr
><tr id="gr_svn20_900"

><td id="900"><a href="#900">900</a></td></tr
><tr id="gr_svn20_901"

><td id="901"><a href="#901">901</a></td></tr
><tr id="gr_svn20_902"

><td id="902"><a href="#902">902</a></td></tr
><tr id="gr_svn20_903"

><td id="903"><a href="#903">903</a></td></tr
><tr id="gr_svn20_904"

><td id="904"><a href="#904">904</a></td></tr
><tr id="gr_svn20_905"

><td id="905"><a href="#905">905</a></td></tr
><tr id="gr_svn20_906"

><td id="906"><a href="#906">906</a></td></tr
><tr id="gr_svn20_907"

><td id="907"><a href="#907">907</a></td></tr
><tr id="gr_svn20_908"

><td id="908"><a href="#908">908</a></td></tr
><tr id="gr_svn20_909"

><td id="909"><a href="#909">909</a></td></tr
><tr id="gr_svn20_910"

><td id="910"><a href="#910">910</a></td></tr
><tr id="gr_svn20_911"

><td id="911"><a href="#911">911</a></td></tr
><tr id="gr_svn20_912"

><td id="912"><a href="#912">912</a></td></tr
><tr id="gr_svn20_913"

><td id="913"><a href="#913">913</a></td></tr
><tr id="gr_svn20_914"

><td id="914"><a href="#914">914</a></td></tr
><tr id="gr_svn20_915"

><td id="915"><a href="#915">915</a></td></tr
><tr id="gr_svn20_916"

><td id="916"><a href="#916">916</a></td></tr
><tr id="gr_svn20_917"

><td id="917"><a href="#917">917</a></td></tr
><tr id="gr_svn20_918"

><td id="918"><a href="#918">918</a></td></tr
><tr id="gr_svn20_919"

><td id="919"><a href="#919">919</a></td></tr
><tr id="gr_svn20_920"

><td id="920"><a href="#920">920</a></td></tr
><tr id="gr_svn20_921"

><td id="921"><a href="#921">921</a></td></tr
><tr id="gr_svn20_922"

><td id="922"><a href="#922">922</a></td></tr
><tr id="gr_svn20_923"

><td id="923"><a href="#923">923</a></td></tr
><tr id="gr_svn20_924"

><td id="924"><a href="#924">924</a></td></tr
><tr id="gr_svn20_925"

><td id="925"><a href="#925">925</a></td></tr
><tr id="gr_svn20_926"

><td id="926"><a href="#926">926</a></td></tr
><tr id="gr_svn20_927"

><td id="927"><a href="#927">927</a></td></tr
><tr id="gr_svn20_928"

><td id="928"><a href="#928">928</a></td></tr
><tr id="gr_svn20_929"

><td id="929"><a href="#929">929</a></td></tr
><tr id="gr_svn20_930"

><td id="930"><a href="#930">930</a></td></tr
><tr id="gr_svn20_931"

><td id="931"><a href="#931">931</a></td></tr
><tr id="gr_svn20_932"

><td id="932"><a href="#932">932</a></td></tr
><tr id="gr_svn20_933"

><td id="933"><a href="#933">933</a></td></tr
><tr id="gr_svn20_934"

><td id="934"><a href="#934">934</a></td></tr
><tr id="gr_svn20_935"

><td id="935"><a href="#935">935</a></td></tr
><tr id="gr_svn20_936"

><td id="936"><a href="#936">936</a></td></tr
><tr id="gr_svn20_937"

><td id="937"><a href="#937">937</a></td></tr
><tr id="gr_svn20_938"

><td id="938"><a href="#938">938</a></td></tr
><tr id="gr_svn20_939"

><td id="939"><a href="#939">939</a></td></tr
><tr id="gr_svn20_940"

><td id="940"><a href="#940">940</a></td></tr
><tr id="gr_svn20_941"

><td id="941"><a href="#941">941</a></td></tr
><tr id="gr_svn20_942"

><td id="942"><a href="#942">942</a></td></tr
><tr id="gr_svn20_943"

><td id="943"><a href="#943">943</a></td></tr
><tr id="gr_svn20_944"

><td id="944"><a href="#944">944</a></td></tr
><tr id="gr_svn20_945"

><td id="945"><a href="#945">945</a></td></tr
><tr id="gr_svn20_946"

><td id="946"><a href="#946">946</a></td></tr
><tr id="gr_svn20_947"

><td id="947"><a href="#947">947</a></td></tr
><tr id="gr_svn20_948"

><td id="948"><a href="#948">948</a></td></tr
><tr id="gr_svn20_949"

><td id="949"><a href="#949">949</a></td></tr
><tr id="gr_svn20_950"

><td id="950"><a href="#950">950</a></td></tr
><tr id="gr_svn20_951"

><td id="951"><a href="#951">951</a></td></tr
><tr id="gr_svn20_952"

><td id="952"><a href="#952">952</a></td></tr
><tr id="gr_svn20_953"

><td id="953"><a href="#953">953</a></td></tr
><tr id="gr_svn20_954"

><td id="954"><a href="#954">954</a></td></tr
><tr id="gr_svn20_955"

><td id="955"><a href="#955">955</a></td></tr
><tr id="gr_svn20_956"

><td id="956"><a href="#956">956</a></td></tr
><tr id="gr_svn20_957"

><td id="957"><a href="#957">957</a></td></tr
><tr id="gr_svn20_958"

><td id="958"><a href="#958">958</a></td></tr
><tr id="gr_svn20_959"

><td id="959"><a href="#959">959</a></td></tr
><tr id="gr_svn20_960"

><td id="960"><a href="#960">960</a></td></tr
><tr id="gr_svn20_961"

><td id="961"><a href="#961">961</a></td></tr
><tr id="gr_svn20_962"

><td id="962"><a href="#962">962</a></td></tr
><tr id="gr_svn20_963"

><td id="963"><a href="#963">963</a></td></tr
><tr id="gr_svn20_964"

><td id="964"><a href="#964">964</a></td></tr
><tr id="gr_svn20_965"

><td id="965"><a href="#965">965</a></td></tr
><tr id="gr_svn20_966"

><td id="966"><a href="#966">966</a></td></tr
><tr id="gr_svn20_967"

><td id="967"><a href="#967">967</a></td></tr
><tr id="gr_svn20_968"

><td id="968"><a href="#968">968</a></td></tr
><tr id="gr_svn20_969"

><td id="969"><a href="#969">969</a></td></tr
><tr id="gr_svn20_970"

><td id="970"><a href="#970">970</a></td></tr
><tr id="gr_svn20_971"

><td id="971"><a href="#971">971</a></td></tr
><tr id="gr_svn20_972"

><td id="972"><a href="#972">972</a></td></tr
><tr id="gr_svn20_973"

><td id="973"><a href="#973">973</a></td></tr
><tr id="gr_svn20_974"

><td id="974"><a href="#974">974</a></td></tr
><tr id="gr_svn20_975"

><td id="975"><a href="#975">975</a></td></tr
><tr id="gr_svn20_976"

><td id="976"><a href="#976">976</a></td></tr
><tr id="gr_svn20_977"

><td id="977"><a href="#977">977</a></td></tr
><tr id="gr_svn20_978"

><td id="978"><a href="#978">978</a></td></tr
><tr id="gr_svn20_979"

><td id="979"><a href="#979">979</a></td></tr
><tr id="gr_svn20_980"

><td id="980"><a href="#980">980</a></td></tr
><tr id="gr_svn20_981"

><td id="981"><a href="#981">981</a></td></tr
><tr id="gr_svn20_982"

><td id="982"><a href="#982">982</a></td></tr
><tr id="gr_svn20_983"

><td id="983"><a href="#983">983</a></td></tr
><tr id="gr_svn20_984"

><td id="984"><a href="#984">984</a></td></tr
><tr id="gr_svn20_985"

><td id="985"><a href="#985">985</a></td></tr
><tr id="gr_svn20_986"

><td id="986"><a href="#986">986</a></td></tr
><tr id="gr_svn20_987"

><td id="987"><a href="#987">987</a></td></tr
><tr id="gr_svn20_988"

><td id="988"><a href="#988">988</a></td></tr
><tr id="gr_svn20_989"

><td id="989"><a href="#989">989</a></td></tr
><tr id="gr_svn20_990"

><td id="990"><a href="#990">990</a></td></tr
><tr id="gr_svn20_991"

><td id="991"><a href="#991">991</a></td></tr
><tr id="gr_svn20_992"

><td id="992"><a href="#992">992</a></td></tr
><tr id="gr_svn20_993"

><td id="993"><a href="#993">993</a></td></tr
><tr id="gr_svn20_994"

><td id="994"><a href="#994">994</a></td></tr
><tr id="gr_svn20_995"

><td id="995"><a href="#995">995</a></td></tr
><tr id="gr_svn20_996"

><td id="996"><a href="#996">996</a></td></tr
><tr id="gr_svn20_997"

><td id="997"><a href="#997">997</a></td></tr
><tr id="gr_svn20_998"

><td id="998"><a href="#998">998</a></td></tr
><tr id="gr_svn20_999"

><td id="999"><a href="#999">999</a></td></tr
><tr id="gr_svn20_1000"

><td id="1000"><a href="#1000">1000</a></td></tr
><tr id="gr_svn20_1001"

><td id="1001"><a href="#1001">1001</a></td></tr
><tr id="gr_svn20_1002"

><td id="1002"><a href="#1002">1002</a></td></tr
><tr id="gr_svn20_1003"

><td id="1003"><a href="#1003">1003</a></td></tr
><tr id="gr_svn20_1004"

><td id="1004"><a href="#1004">1004</a></td></tr
><tr id="gr_svn20_1005"

><td id="1005"><a href="#1005">1005</a></td></tr
><tr id="gr_svn20_1006"

><td id="1006"><a href="#1006">1006</a></td></tr
><tr id="gr_svn20_1007"

><td id="1007"><a href="#1007">1007</a></td></tr
><tr id="gr_svn20_1008"

><td id="1008"><a href="#1008">1008</a></td></tr
><tr id="gr_svn20_1009"

><td id="1009"><a href="#1009">1009</a></td></tr
><tr id="gr_svn20_1010"

><td id="1010"><a href="#1010">1010</a></td></tr
><tr id="gr_svn20_1011"

><td id="1011"><a href="#1011">1011</a></td></tr
><tr id="gr_svn20_1012"

><td id="1012"><a href="#1012">1012</a></td></tr
><tr id="gr_svn20_1013"

><td id="1013"><a href="#1013">1013</a></td></tr
><tr id="gr_svn20_1014"

><td id="1014"><a href="#1014">1014</a></td></tr
><tr id="gr_svn20_1015"

><td id="1015"><a href="#1015">1015</a></td></tr
><tr id="gr_svn20_1016"

><td id="1016"><a href="#1016">1016</a></td></tr
><tr id="gr_svn20_1017"

><td id="1017"><a href="#1017">1017</a></td></tr
><tr id="gr_svn20_1018"

><td id="1018"><a href="#1018">1018</a></td></tr
><tr id="gr_svn20_1019"

><td id="1019"><a href="#1019">1019</a></td></tr
><tr id="gr_svn20_1020"

><td id="1020"><a href="#1020">1020</a></td></tr
><tr id="gr_svn20_1021"

><td id="1021"><a href="#1021">1021</a></td></tr
><tr id="gr_svn20_1022"

><td id="1022"><a href="#1022">1022</a></td></tr
><tr id="gr_svn20_1023"

><td id="1023"><a href="#1023">1023</a></td></tr
><tr id="gr_svn20_1024"

><td id="1024"><a href="#1024">1024</a></td></tr
><tr id="gr_svn20_1025"

><td id="1025"><a href="#1025">1025</a></td></tr
><tr id="gr_svn20_1026"

><td id="1026"><a href="#1026">1026</a></td></tr
><tr id="gr_svn20_1027"

><td id="1027"><a href="#1027">1027</a></td></tr
><tr id="gr_svn20_1028"

><td id="1028"><a href="#1028">1028</a></td></tr
><tr id="gr_svn20_1029"

><td id="1029"><a href="#1029">1029</a></td></tr
><tr id="gr_svn20_1030"

><td id="1030"><a href="#1030">1030</a></td></tr
><tr id="gr_svn20_1031"

><td id="1031"><a href="#1031">1031</a></td></tr
><tr id="gr_svn20_1032"

><td id="1032"><a href="#1032">1032</a></td></tr
><tr id="gr_svn20_1033"

><td id="1033"><a href="#1033">1033</a></td></tr
><tr id="gr_svn20_1034"

><td id="1034"><a href="#1034">1034</a></td></tr
><tr id="gr_svn20_1035"

><td id="1035"><a href="#1035">1035</a></td></tr
><tr id="gr_svn20_1036"

><td id="1036"><a href="#1036">1036</a></td></tr
><tr id="gr_svn20_1037"

><td id="1037"><a href="#1037">1037</a></td></tr
><tr id="gr_svn20_1038"

><td id="1038"><a href="#1038">1038</a></td></tr
><tr id="gr_svn20_1039"

><td id="1039"><a href="#1039">1039</a></td></tr
><tr id="gr_svn20_1040"

><td id="1040"><a href="#1040">1040</a></td></tr
><tr id="gr_svn20_1041"

><td id="1041"><a href="#1041">1041</a></td></tr
><tr id="gr_svn20_1042"

><td id="1042"><a href="#1042">1042</a></td></tr
><tr id="gr_svn20_1043"

><td id="1043"><a href="#1043">1043</a></td></tr
><tr id="gr_svn20_1044"

><td id="1044"><a href="#1044">1044</a></td></tr
><tr id="gr_svn20_1045"

><td id="1045"><a href="#1045">1045</a></td></tr
><tr id="gr_svn20_1046"

><td id="1046"><a href="#1046">1046</a></td></tr
><tr id="gr_svn20_1047"

><td id="1047"><a href="#1047">1047</a></td></tr
><tr id="gr_svn20_1048"

><td id="1048"><a href="#1048">1048</a></td></tr
><tr id="gr_svn20_1049"

><td id="1049"><a href="#1049">1049</a></td></tr
><tr id="gr_svn20_1050"

><td id="1050"><a href="#1050">1050</a></td></tr
><tr id="gr_svn20_1051"

><td id="1051"><a href="#1051">1051</a></td></tr
><tr id="gr_svn20_1052"

><td id="1052"><a href="#1052">1052</a></td></tr
><tr id="gr_svn20_1053"

><td id="1053"><a href="#1053">1053</a></td></tr
><tr id="gr_svn20_1054"

><td id="1054"><a href="#1054">1054</a></td></tr
><tr id="gr_svn20_1055"

><td id="1055"><a href="#1055">1055</a></td></tr
><tr id="gr_svn20_1056"

><td id="1056"><a href="#1056">1056</a></td></tr
><tr id="gr_svn20_1057"

><td id="1057"><a href="#1057">1057</a></td></tr
><tr id="gr_svn20_1058"

><td id="1058"><a href="#1058">1058</a></td></tr
><tr id="gr_svn20_1059"

><td id="1059"><a href="#1059">1059</a></td></tr
><tr id="gr_svn20_1060"

><td id="1060"><a href="#1060">1060</a></td></tr
><tr id="gr_svn20_1061"

><td id="1061"><a href="#1061">1061</a></td></tr
><tr id="gr_svn20_1062"

><td id="1062"><a href="#1062">1062</a></td></tr
><tr id="gr_svn20_1063"

><td id="1063"><a href="#1063">1063</a></td></tr
><tr id="gr_svn20_1064"

><td id="1064"><a href="#1064">1064</a></td></tr
><tr id="gr_svn20_1065"

><td id="1065"><a href="#1065">1065</a></td></tr
><tr id="gr_svn20_1066"

><td id="1066"><a href="#1066">1066</a></td></tr
><tr id="gr_svn20_1067"

><td id="1067"><a href="#1067">1067</a></td></tr
><tr id="gr_svn20_1068"

><td id="1068"><a href="#1068">1068</a></td></tr
><tr id="gr_svn20_1069"

><td id="1069"><a href="#1069">1069</a></td></tr
><tr id="gr_svn20_1070"

><td id="1070"><a href="#1070">1070</a></td></tr
><tr id="gr_svn20_1071"

><td id="1071"><a href="#1071">1071</a></td></tr
><tr id="gr_svn20_1072"

><td id="1072"><a href="#1072">1072</a></td></tr
><tr id="gr_svn20_1073"

><td id="1073"><a href="#1073">1073</a></td></tr
><tr id="gr_svn20_1074"

><td id="1074"><a href="#1074">1074</a></td></tr
><tr id="gr_svn20_1075"

><td id="1075"><a href="#1075">1075</a></td></tr
><tr id="gr_svn20_1076"

><td id="1076"><a href="#1076">1076</a></td></tr
><tr id="gr_svn20_1077"

><td id="1077"><a href="#1077">1077</a></td></tr
><tr id="gr_svn20_1078"

><td id="1078"><a href="#1078">1078</a></td></tr
><tr id="gr_svn20_1079"

><td id="1079"><a href="#1079">1079</a></td></tr
><tr id="gr_svn20_1080"

><td id="1080"><a href="#1080">1080</a></td></tr
><tr id="gr_svn20_1081"

><td id="1081"><a href="#1081">1081</a></td></tr
><tr id="gr_svn20_1082"

><td id="1082"><a href="#1082">1082</a></td></tr
><tr id="gr_svn20_1083"

><td id="1083"><a href="#1083">1083</a></td></tr
><tr id="gr_svn20_1084"

><td id="1084"><a href="#1084">1084</a></td></tr
><tr id="gr_svn20_1085"

><td id="1085"><a href="#1085">1085</a></td></tr
><tr id="gr_svn20_1086"

><td id="1086"><a href="#1086">1086</a></td></tr
><tr id="gr_svn20_1087"

><td id="1087"><a href="#1087">1087</a></td></tr
><tr id="gr_svn20_1088"

><td id="1088"><a href="#1088">1088</a></td></tr
><tr id="gr_svn20_1089"

><td id="1089"><a href="#1089">1089</a></td></tr
><tr id="gr_svn20_1090"

><td id="1090"><a href="#1090">1090</a></td></tr
><tr id="gr_svn20_1091"

><td id="1091"><a href="#1091">1091</a></td></tr
><tr id="gr_svn20_1092"

><td id="1092"><a href="#1092">1092</a></td></tr
><tr id="gr_svn20_1093"

><td id="1093"><a href="#1093">1093</a></td></tr
><tr id="gr_svn20_1094"

><td id="1094"><a href="#1094">1094</a></td></tr
><tr id="gr_svn20_1095"

><td id="1095"><a href="#1095">1095</a></td></tr
><tr id="gr_svn20_1096"

><td id="1096"><a href="#1096">1096</a></td></tr
><tr id="gr_svn20_1097"

><td id="1097"><a href="#1097">1097</a></td></tr
><tr id="gr_svn20_1098"

><td id="1098"><a href="#1098">1098</a></td></tr
><tr id="gr_svn20_1099"

><td id="1099"><a href="#1099">1099</a></td></tr
><tr id="gr_svn20_1100"

><td id="1100"><a href="#1100">1100</a></td></tr
><tr id="gr_svn20_1101"

><td id="1101"><a href="#1101">1101</a></td></tr
><tr id="gr_svn20_1102"

><td id="1102"><a href="#1102">1102</a></td></tr
><tr id="gr_svn20_1103"

><td id="1103"><a href="#1103">1103</a></td></tr
><tr id="gr_svn20_1104"

><td id="1104"><a href="#1104">1104</a></td></tr
><tr id="gr_svn20_1105"

><td id="1105"><a href="#1105">1105</a></td></tr
><tr id="gr_svn20_1106"

><td id="1106"><a href="#1106">1106</a></td></tr
><tr id="gr_svn20_1107"

><td id="1107"><a href="#1107">1107</a></td></tr
><tr id="gr_svn20_1108"

><td id="1108"><a href="#1108">1108</a></td></tr
><tr id="gr_svn20_1109"

><td id="1109"><a href="#1109">1109</a></td></tr
><tr id="gr_svn20_1110"

><td id="1110"><a href="#1110">1110</a></td></tr
><tr id="gr_svn20_1111"

><td id="1111"><a href="#1111">1111</a></td></tr
><tr id="gr_svn20_1112"

><td id="1112"><a href="#1112">1112</a></td></tr
><tr id="gr_svn20_1113"

><td id="1113"><a href="#1113">1113</a></td></tr
><tr id="gr_svn20_1114"

><td id="1114"><a href="#1114">1114</a></td></tr
><tr id="gr_svn20_1115"

><td id="1115"><a href="#1115">1115</a></td></tr
><tr id="gr_svn20_1116"

><td id="1116"><a href="#1116">1116</a></td></tr
><tr id="gr_svn20_1117"

><td id="1117"><a href="#1117">1117</a></td></tr
><tr id="gr_svn20_1118"

><td id="1118"><a href="#1118">1118</a></td></tr
><tr id="gr_svn20_1119"

><td id="1119"><a href="#1119">1119</a></td></tr
><tr id="gr_svn20_1120"

><td id="1120"><a href="#1120">1120</a></td></tr
><tr id="gr_svn20_1121"

><td id="1121"><a href="#1121">1121</a></td></tr
><tr id="gr_svn20_1122"

><td id="1122"><a href="#1122">1122</a></td></tr
><tr id="gr_svn20_1123"

><td id="1123"><a href="#1123">1123</a></td></tr
><tr id="gr_svn20_1124"

><td id="1124"><a href="#1124">1124</a></td></tr
><tr id="gr_svn20_1125"

><td id="1125"><a href="#1125">1125</a></td></tr
><tr id="gr_svn20_1126"

><td id="1126"><a href="#1126">1126</a></td></tr
><tr id="gr_svn20_1127"

><td id="1127"><a href="#1127">1127</a></td></tr
><tr id="gr_svn20_1128"

><td id="1128"><a href="#1128">1128</a></td></tr
><tr id="gr_svn20_1129"

><td id="1129"><a href="#1129">1129</a></td></tr
><tr id="gr_svn20_1130"

><td id="1130"><a href="#1130">1130</a></td></tr
><tr id="gr_svn20_1131"

><td id="1131"><a href="#1131">1131</a></td></tr
><tr id="gr_svn20_1132"

><td id="1132"><a href="#1132">1132</a></td></tr
><tr id="gr_svn20_1133"

><td id="1133"><a href="#1133">1133</a></td></tr
><tr id="gr_svn20_1134"

><td id="1134"><a href="#1134">1134</a></td></tr
><tr id="gr_svn20_1135"

><td id="1135"><a href="#1135">1135</a></td></tr
><tr id="gr_svn20_1136"

><td id="1136"><a href="#1136">1136</a></td></tr
><tr id="gr_svn20_1137"

><td id="1137"><a href="#1137">1137</a></td></tr
><tr id="gr_svn20_1138"

><td id="1138"><a href="#1138">1138</a></td></tr
><tr id="gr_svn20_1139"

><td id="1139"><a href="#1139">1139</a></td></tr
><tr id="gr_svn20_1140"

><td id="1140"><a href="#1140">1140</a></td></tr
><tr id="gr_svn20_1141"

><td id="1141"><a href="#1141">1141</a></td></tr
><tr id="gr_svn20_1142"

><td id="1142"><a href="#1142">1142</a></td></tr
><tr id="gr_svn20_1143"

><td id="1143"><a href="#1143">1143</a></td></tr
><tr id="gr_svn20_1144"

><td id="1144"><a href="#1144">1144</a></td></tr
><tr id="gr_svn20_1145"

><td id="1145"><a href="#1145">1145</a></td></tr
><tr id="gr_svn20_1146"

><td id="1146"><a href="#1146">1146</a></td></tr
><tr id="gr_svn20_1147"

><td id="1147"><a href="#1147">1147</a></td></tr
><tr id="gr_svn20_1148"

><td id="1148"><a href="#1148">1148</a></td></tr
><tr id="gr_svn20_1149"

><td id="1149"><a href="#1149">1149</a></td></tr
><tr id="gr_svn20_1150"

><td id="1150"><a href="#1150">1150</a></td></tr
><tr id="gr_svn20_1151"

><td id="1151"><a href="#1151">1151</a></td></tr
><tr id="gr_svn20_1152"

><td id="1152"><a href="#1152">1152</a></td></tr
><tr id="gr_svn20_1153"

><td id="1153"><a href="#1153">1153</a></td></tr
><tr id="gr_svn20_1154"

><td id="1154"><a href="#1154">1154</a></td></tr
><tr id="gr_svn20_1155"

><td id="1155"><a href="#1155">1155</a></td></tr
><tr id="gr_svn20_1156"

><td id="1156"><a href="#1156">1156</a></td></tr
><tr id="gr_svn20_1157"

><td id="1157"><a href="#1157">1157</a></td></tr
><tr id="gr_svn20_1158"

><td id="1158"><a href="#1158">1158</a></td></tr
><tr id="gr_svn20_1159"

><td id="1159"><a href="#1159">1159</a></td></tr
><tr id="gr_svn20_1160"

><td id="1160"><a href="#1160">1160</a></td></tr
><tr id="gr_svn20_1161"

><td id="1161"><a href="#1161">1161</a></td></tr
><tr id="gr_svn20_1162"

><td id="1162"><a href="#1162">1162</a></td></tr
><tr id="gr_svn20_1163"

><td id="1163"><a href="#1163">1163</a></td></tr
><tr id="gr_svn20_1164"

><td id="1164"><a href="#1164">1164</a></td></tr
><tr id="gr_svn20_1165"

><td id="1165"><a href="#1165">1165</a></td></tr
><tr id="gr_svn20_1166"

><td id="1166"><a href="#1166">1166</a></td></tr
><tr id="gr_svn20_1167"

><td id="1167"><a href="#1167">1167</a></td></tr
><tr id="gr_svn20_1168"

><td id="1168"><a href="#1168">1168</a></td></tr
><tr id="gr_svn20_1169"

><td id="1169"><a href="#1169">1169</a></td></tr
><tr id="gr_svn20_1170"

><td id="1170"><a href="#1170">1170</a></td></tr
><tr id="gr_svn20_1171"

><td id="1171"><a href="#1171">1171</a></td></tr
><tr id="gr_svn20_1172"

><td id="1172"><a href="#1172">1172</a></td></tr
><tr id="gr_svn20_1173"

><td id="1173"><a href="#1173">1173</a></td></tr
><tr id="gr_svn20_1174"

><td id="1174"><a href="#1174">1174</a></td></tr
><tr id="gr_svn20_1175"

><td id="1175"><a href="#1175">1175</a></td></tr
><tr id="gr_svn20_1176"

><td id="1176"><a href="#1176">1176</a></td></tr
><tr id="gr_svn20_1177"

><td id="1177"><a href="#1177">1177</a></td></tr
><tr id="gr_svn20_1178"

><td id="1178"><a href="#1178">1178</a></td></tr
><tr id="gr_svn20_1179"

><td id="1179"><a href="#1179">1179</a></td></tr
><tr id="gr_svn20_1180"

><td id="1180"><a href="#1180">1180</a></td></tr
><tr id="gr_svn20_1181"

><td id="1181"><a href="#1181">1181</a></td></tr
><tr id="gr_svn20_1182"

><td id="1182"><a href="#1182">1182</a></td></tr
><tr id="gr_svn20_1183"

><td id="1183"><a href="#1183">1183</a></td></tr
><tr id="gr_svn20_1184"

><td id="1184"><a href="#1184">1184</a></td></tr
><tr id="gr_svn20_1185"

><td id="1185"><a href="#1185">1185</a></td></tr
><tr id="gr_svn20_1186"

><td id="1186"><a href="#1186">1186</a></td></tr
><tr id="gr_svn20_1187"

><td id="1187"><a href="#1187">1187</a></td></tr
><tr id="gr_svn20_1188"

><td id="1188"><a href="#1188">1188</a></td></tr
><tr id="gr_svn20_1189"

><td id="1189"><a href="#1189">1189</a></td></tr
><tr id="gr_svn20_1190"

><td id="1190"><a href="#1190">1190</a></td></tr
><tr id="gr_svn20_1191"

><td id="1191"><a href="#1191">1191</a></td></tr
><tr id="gr_svn20_1192"

><td id="1192"><a href="#1192">1192</a></td></tr
><tr id="gr_svn20_1193"

><td id="1193"><a href="#1193">1193</a></td></tr
><tr id="gr_svn20_1194"

><td id="1194"><a href="#1194">1194</a></td></tr
><tr id="gr_svn20_1195"

><td id="1195"><a href="#1195">1195</a></td></tr
><tr id="gr_svn20_1196"

><td id="1196"><a href="#1196">1196</a></td></tr
><tr id="gr_svn20_1197"

><td id="1197"><a href="#1197">1197</a></td></tr
><tr id="gr_svn20_1198"

><td id="1198"><a href="#1198">1198</a></td></tr
><tr id="gr_svn20_1199"

><td id="1199"><a href="#1199">1199</a></td></tr
><tr id="gr_svn20_1200"

><td id="1200"><a href="#1200">1200</a></td></tr
><tr id="gr_svn20_1201"

><td id="1201"><a href="#1201">1201</a></td></tr
><tr id="gr_svn20_1202"

><td id="1202"><a href="#1202">1202</a></td></tr
><tr id="gr_svn20_1203"

><td id="1203"><a href="#1203">1203</a></td></tr
><tr id="gr_svn20_1204"

><td id="1204"><a href="#1204">1204</a></td></tr
><tr id="gr_svn20_1205"

><td id="1205"><a href="#1205">1205</a></td></tr
><tr id="gr_svn20_1206"

><td id="1206"><a href="#1206">1206</a></td></tr
><tr id="gr_svn20_1207"

><td id="1207"><a href="#1207">1207</a></td></tr
><tr id="gr_svn20_1208"

><td id="1208"><a href="#1208">1208</a></td></tr
><tr id="gr_svn20_1209"

><td id="1209"><a href="#1209">1209</a></td></tr
><tr id="gr_svn20_1210"

><td id="1210"><a href="#1210">1210</a></td></tr
><tr id="gr_svn20_1211"

><td id="1211"><a href="#1211">1211</a></td></tr
><tr id="gr_svn20_1212"

><td id="1212"><a href="#1212">1212</a></td></tr
><tr id="gr_svn20_1213"

><td id="1213"><a href="#1213">1213</a></td></tr
><tr id="gr_svn20_1214"

><td id="1214"><a href="#1214">1214</a></td></tr
><tr id="gr_svn20_1215"

><td id="1215"><a href="#1215">1215</a></td></tr
><tr id="gr_svn20_1216"

><td id="1216"><a href="#1216">1216</a></td></tr
><tr id="gr_svn20_1217"

><td id="1217"><a href="#1217">1217</a></td></tr
><tr id="gr_svn20_1218"

><td id="1218"><a href="#1218">1218</a></td></tr
><tr id="gr_svn20_1219"

><td id="1219"><a href="#1219">1219</a></td></tr
><tr id="gr_svn20_1220"

><td id="1220"><a href="#1220">1220</a></td></tr
><tr id="gr_svn20_1221"

><td id="1221"><a href="#1221">1221</a></td></tr
><tr id="gr_svn20_1222"

><td id="1222"><a href="#1222">1222</a></td></tr
><tr id="gr_svn20_1223"

><td id="1223"><a href="#1223">1223</a></td></tr
><tr id="gr_svn20_1224"

><td id="1224"><a href="#1224">1224</a></td></tr
><tr id="gr_svn20_1225"

><td id="1225"><a href="#1225">1225</a></td></tr
><tr id="gr_svn20_1226"

><td id="1226"><a href="#1226">1226</a></td></tr
><tr id="gr_svn20_1227"

><td id="1227"><a href="#1227">1227</a></td></tr
><tr id="gr_svn20_1228"

><td id="1228"><a href="#1228">1228</a></td></tr
><tr id="gr_svn20_1229"

><td id="1229"><a href="#1229">1229</a></td></tr
><tr id="gr_svn20_1230"

><td id="1230"><a href="#1230">1230</a></td></tr
><tr id="gr_svn20_1231"

><td id="1231"><a href="#1231">1231</a></td></tr
><tr id="gr_svn20_1232"

><td id="1232"><a href="#1232">1232</a></td></tr
><tr id="gr_svn20_1233"

><td id="1233"><a href="#1233">1233</a></td></tr
><tr id="gr_svn20_1234"

><td id="1234"><a href="#1234">1234</a></td></tr
><tr id="gr_svn20_1235"

><td id="1235"><a href="#1235">1235</a></td></tr
><tr id="gr_svn20_1236"

><td id="1236"><a href="#1236">1236</a></td></tr
><tr id="gr_svn20_1237"

><td id="1237"><a href="#1237">1237</a></td></tr
><tr id="gr_svn20_1238"

><td id="1238"><a href="#1238">1238</a></td></tr
><tr id="gr_svn20_1239"

><td id="1239"><a href="#1239">1239</a></td></tr
><tr id="gr_svn20_1240"

><td id="1240"><a href="#1240">1240</a></td></tr
><tr id="gr_svn20_1241"

><td id="1241"><a href="#1241">1241</a></td></tr
><tr id="gr_svn20_1242"

><td id="1242"><a href="#1242">1242</a></td></tr
><tr id="gr_svn20_1243"

><td id="1243"><a href="#1243">1243</a></td></tr
><tr id="gr_svn20_1244"

><td id="1244"><a href="#1244">1244</a></td></tr
><tr id="gr_svn20_1245"

><td id="1245"><a href="#1245">1245</a></td></tr
><tr id="gr_svn20_1246"

><td id="1246"><a href="#1246">1246</a></td></tr
><tr id="gr_svn20_1247"

><td id="1247"><a href="#1247">1247</a></td></tr
><tr id="gr_svn20_1248"

><td id="1248"><a href="#1248">1248</a></td></tr
><tr id="gr_svn20_1249"

><td id="1249"><a href="#1249">1249</a></td></tr
><tr id="gr_svn20_1250"

><td id="1250"><a href="#1250">1250</a></td></tr
><tr id="gr_svn20_1251"

><td id="1251"><a href="#1251">1251</a></td></tr
><tr id="gr_svn20_1252"

><td id="1252"><a href="#1252">1252</a></td></tr
><tr id="gr_svn20_1253"

><td id="1253"><a href="#1253">1253</a></td></tr
><tr id="gr_svn20_1254"

><td id="1254"><a href="#1254">1254</a></td></tr
><tr id="gr_svn20_1255"

><td id="1255"><a href="#1255">1255</a></td></tr
><tr id="gr_svn20_1256"

><td id="1256"><a href="#1256">1256</a></td></tr
><tr id="gr_svn20_1257"

><td id="1257"><a href="#1257">1257</a></td></tr
><tr id="gr_svn20_1258"

><td id="1258"><a href="#1258">1258</a></td></tr
><tr id="gr_svn20_1259"

><td id="1259"><a href="#1259">1259</a></td></tr
><tr id="gr_svn20_1260"

><td id="1260"><a href="#1260">1260</a></td></tr
><tr id="gr_svn20_1261"

><td id="1261"><a href="#1261">1261</a></td></tr
><tr id="gr_svn20_1262"

><td id="1262"><a href="#1262">1262</a></td></tr
><tr id="gr_svn20_1263"

><td id="1263"><a href="#1263">1263</a></td></tr
><tr id="gr_svn20_1264"

><td id="1264"><a href="#1264">1264</a></td></tr
><tr id="gr_svn20_1265"

><td id="1265"><a href="#1265">1265</a></td></tr
><tr id="gr_svn20_1266"

><td id="1266"><a href="#1266">1266</a></td></tr
><tr id="gr_svn20_1267"

><td id="1267"><a href="#1267">1267</a></td></tr
><tr id="gr_svn20_1268"

><td id="1268"><a href="#1268">1268</a></td></tr
><tr id="gr_svn20_1269"

><td id="1269"><a href="#1269">1269</a></td></tr
><tr id="gr_svn20_1270"

><td id="1270"><a href="#1270">1270</a></td></tr
><tr id="gr_svn20_1271"

><td id="1271"><a href="#1271">1271</a></td></tr
><tr id="gr_svn20_1272"

><td id="1272"><a href="#1272">1272</a></td></tr
><tr id="gr_svn20_1273"

><td id="1273"><a href="#1273">1273</a></td></tr
><tr id="gr_svn20_1274"

><td id="1274"><a href="#1274">1274</a></td></tr
><tr id="gr_svn20_1275"

><td id="1275"><a href="#1275">1275</a></td></tr
><tr id="gr_svn20_1276"

><td id="1276"><a href="#1276">1276</a></td></tr
><tr id="gr_svn20_1277"

><td id="1277"><a href="#1277">1277</a></td></tr
><tr id="gr_svn20_1278"

><td id="1278"><a href="#1278">1278</a></td></tr
><tr id="gr_svn20_1279"

><td id="1279"><a href="#1279">1279</a></td></tr
><tr id="gr_svn20_1280"

><td id="1280"><a href="#1280">1280</a></td></tr
><tr id="gr_svn20_1281"

><td id="1281"><a href="#1281">1281</a></td></tr
><tr id="gr_svn20_1282"

><td id="1282"><a href="#1282">1282</a></td></tr
><tr id="gr_svn20_1283"

><td id="1283"><a href="#1283">1283</a></td></tr
><tr id="gr_svn20_1284"

><td id="1284"><a href="#1284">1284</a></td></tr
><tr id="gr_svn20_1285"

><td id="1285"><a href="#1285">1285</a></td></tr
><tr id="gr_svn20_1286"

><td id="1286"><a href="#1286">1286</a></td></tr
><tr id="gr_svn20_1287"

><td id="1287"><a href="#1287">1287</a></td></tr
><tr id="gr_svn20_1288"

><td id="1288"><a href="#1288">1288</a></td></tr
><tr id="gr_svn20_1289"

><td id="1289"><a href="#1289">1289</a></td></tr
><tr id="gr_svn20_1290"

><td id="1290"><a href="#1290">1290</a></td></tr
><tr id="gr_svn20_1291"

><td id="1291"><a href="#1291">1291</a></td></tr
><tr id="gr_svn20_1292"

><td id="1292"><a href="#1292">1292</a></td></tr
><tr id="gr_svn20_1293"

><td id="1293"><a href="#1293">1293</a></td></tr
><tr id="gr_svn20_1294"

><td id="1294"><a href="#1294">1294</a></td></tr
><tr id="gr_svn20_1295"

><td id="1295"><a href="#1295">1295</a></td></tr
><tr id="gr_svn20_1296"

><td id="1296"><a href="#1296">1296</a></td></tr
><tr id="gr_svn20_1297"

><td id="1297"><a href="#1297">1297</a></td></tr
><tr id="gr_svn20_1298"

><td id="1298"><a href="#1298">1298</a></td></tr
><tr id="gr_svn20_1299"

><td id="1299"><a href="#1299">1299</a></td></tr
><tr id="gr_svn20_1300"

><td id="1300"><a href="#1300">1300</a></td></tr
><tr id="gr_svn20_1301"

><td id="1301"><a href="#1301">1301</a></td></tr
><tr id="gr_svn20_1302"

><td id="1302"><a href="#1302">1302</a></td></tr
><tr id="gr_svn20_1303"

><td id="1303"><a href="#1303">1303</a></td></tr
><tr id="gr_svn20_1304"

><td id="1304"><a href="#1304">1304</a></td></tr
><tr id="gr_svn20_1305"

><td id="1305"><a href="#1305">1305</a></td></tr
><tr id="gr_svn20_1306"

><td id="1306"><a href="#1306">1306</a></td></tr
><tr id="gr_svn20_1307"

><td id="1307"><a href="#1307">1307</a></td></tr
><tr id="gr_svn20_1308"

><td id="1308"><a href="#1308">1308</a></td></tr
><tr id="gr_svn20_1309"

><td id="1309"><a href="#1309">1309</a></td></tr
><tr id="gr_svn20_1310"

><td id="1310"><a href="#1310">1310</a></td></tr
><tr id="gr_svn20_1311"

><td id="1311"><a href="#1311">1311</a></td></tr
><tr id="gr_svn20_1312"

><td id="1312"><a href="#1312">1312</a></td></tr
><tr id="gr_svn20_1313"

><td id="1313"><a href="#1313">1313</a></td></tr
><tr id="gr_svn20_1314"

><td id="1314"><a href="#1314">1314</a></td></tr
><tr id="gr_svn20_1315"

><td id="1315"><a href="#1315">1315</a></td></tr
><tr id="gr_svn20_1316"

><td id="1316"><a href="#1316">1316</a></td></tr
><tr id="gr_svn20_1317"

><td id="1317"><a href="#1317">1317</a></td></tr
><tr id="gr_svn20_1318"

><td id="1318"><a href="#1318">1318</a></td></tr
><tr id="gr_svn20_1319"

><td id="1319"><a href="#1319">1319</a></td></tr
><tr id="gr_svn20_1320"

><td id="1320"><a href="#1320">1320</a></td></tr
><tr id="gr_svn20_1321"

><td id="1321"><a href="#1321">1321</a></td></tr
><tr id="gr_svn20_1322"

><td id="1322"><a href="#1322">1322</a></td></tr
><tr id="gr_svn20_1323"

><td id="1323"><a href="#1323">1323</a></td></tr
><tr id="gr_svn20_1324"

><td id="1324"><a href="#1324">1324</a></td></tr
><tr id="gr_svn20_1325"

><td id="1325"><a href="#1325">1325</a></td></tr
><tr id="gr_svn20_1326"

><td id="1326"><a href="#1326">1326</a></td></tr
><tr id="gr_svn20_1327"

><td id="1327"><a href="#1327">1327</a></td></tr
><tr id="gr_svn20_1328"

><td id="1328"><a href="#1328">1328</a></td></tr
><tr id="gr_svn20_1329"

><td id="1329"><a href="#1329">1329</a></td></tr
><tr id="gr_svn20_1330"

><td id="1330"><a href="#1330">1330</a></td></tr
><tr id="gr_svn20_1331"

><td id="1331"><a href="#1331">1331</a></td></tr
><tr id="gr_svn20_1332"

><td id="1332"><a href="#1332">1332</a></td></tr
><tr id="gr_svn20_1333"

><td id="1333"><a href="#1333">1333</a></td></tr
><tr id="gr_svn20_1334"

><td id="1334"><a href="#1334">1334</a></td></tr
><tr id="gr_svn20_1335"

><td id="1335"><a href="#1335">1335</a></td></tr
><tr id="gr_svn20_1336"

><td id="1336"><a href="#1336">1336</a></td></tr
><tr id="gr_svn20_1337"

><td id="1337"><a href="#1337">1337</a></td></tr
><tr id="gr_svn20_1338"

><td id="1338"><a href="#1338">1338</a></td></tr
><tr id="gr_svn20_1339"

><td id="1339"><a href="#1339">1339</a></td></tr
><tr id="gr_svn20_1340"

><td id="1340"><a href="#1340">1340</a></td></tr
><tr id="gr_svn20_1341"

><td id="1341"><a href="#1341">1341</a></td></tr
><tr id="gr_svn20_1342"

><td id="1342"><a href="#1342">1342</a></td></tr
><tr id="gr_svn20_1343"

><td id="1343"><a href="#1343">1343</a></td></tr
><tr id="gr_svn20_1344"

><td id="1344"><a href="#1344">1344</a></td></tr
><tr id="gr_svn20_1345"

><td id="1345"><a href="#1345">1345</a></td></tr
><tr id="gr_svn20_1346"

><td id="1346"><a href="#1346">1346</a></td></tr
><tr id="gr_svn20_1347"

><td id="1347"><a href="#1347">1347</a></td></tr
><tr id="gr_svn20_1348"

><td id="1348"><a href="#1348">1348</a></td></tr
><tr id="gr_svn20_1349"

><td id="1349"><a href="#1349">1349</a></td></tr
><tr id="gr_svn20_1350"

><td id="1350"><a href="#1350">1350</a></td></tr
><tr id="gr_svn20_1351"

><td id="1351"><a href="#1351">1351</a></td></tr
><tr id="gr_svn20_1352"

><td id="1352"><a href="#1352">1352</a></td></tr
><tr id="gr_svn20_1353"

><td id="1353"><a href="#1353">1353</a></td></tr
><tr id="gr_svn20_1354"

><td id="1354"><a href="#1354">1354</a></td></tr
><tr id="gr_svn20_1355"

><td id="1355"><a href="#1355">1355</a></td></tr
><tr id="gr_svn20_1356"

><td id="1356"><a href="#1356">1356</a></td></tr
><tr id="gr_svn20_1357"

><td id="1357"><a href="#1357">1357</a></td></tr
><tr id="gr_svn20_1358"

><td id="1358"><a href="#1358">1358</a></td></tr
><tr id="gr_svn20_1359"

><td id="1359"><a href="#1359">1359</a></td></tr
><tr id="gr_svn20_1360"

><td id="1360"><a href="#1360">1360</a></td></tr
><tr id="gr_svn20_1361"

><td id="1361"><a href="#1361">1361</a></td></tr
><tr id="gr_svn20_1362"

><td id="1362"><a href="#1362">1362</a></td></tr
><tr id="gr_svn20_1363"

><td id="1363"><a href="#1363">1363</a></td></tr
><tr id="gr_svn20_1364"

><td id="1364"><a href="#1364">1364</a></td></tr
><tr id="gr_svn20_1365"

><td id="1365"><a href="#1365">1365</a></td></tr
><tr id="gr_svn20_1366"

><td id="1366"><a href="#1366">1366</a></td></tr
><tr id="gr_svn20_1367"

><td id="1367"><a href="#1367">1367</a></td></tr
><tr id="gr_svn20_1368"

><td id="1368"><a href="#1368">1368</a></td></tr
><tr id="gr_svn20_1369"

><td id="1369"><a href="#1369">1369</a></td></tr
><tr id="gr_svn20_1370"

><td id="1370"><a href="#1370">1370</a></td></tr
><tr id="gr_svn20_1371"

><td id="1371"><a href="#1371">1371</a></td></tr
><tr id="gr_svn20_1372"

><td id="1372"><a href="#1372">1372</a></td></tr
><tr id="gr_svn20_1373"

><td id="1373"><a href="#1373">1373</a></td></tr
><tr id="gr_svn20_1374"

><td id="1374"><a href="#1374">1374</a></td></tr
><tr id="gr_svn20_1375"

><td id="1375"><a href="#1375">1375</a></td></tr
><tr id="gr_svn20_1376"

><td id="1376"><a href="#1376">1376</a></td></tr
><tr id="gr_svn20_1377"

><td id="1377"><a href="#1377">1377</a></td></tr
><tr id="gr_svn20_1378"

><td id="1378"><a href="#1378">1378</a></td></tr
><tr id="gr_svn20_1379"

><td id="1379"><a href="#1379">1379</a></td></tr
><tr id="gr_svn20_1380"

><td id="1380"><a href="#1380">1380</a></td></tr
><tr id="gr_svn20_1381"

><td id="1381"><a href="#1381">1381</a></td></tr
><tr id="gr_svn20_1382"

><td id="1382"><a href="#1382">1382</a></td></tr
><tr id="gr_svn20_1383"

><td id="1383"><a href="#1383">1383</a></td></tr
><tr id="gr_svn20_1384"

><td id="1384"><a href="#1384">1384</a></td></tr
><tr id="gr_svn20_1385"

><td id="1385"><a href="#1385">1385</a></td></tr
><tr id="gr_svn20_1386"

><td id="1386"><a href="#1386">1386</a></td></tr
><tr id="gr_svn20_1387"

><td id="1387"><a href="#1387">1387</a></td></tr
><tr id="gr_svn20_1388"

><td id="1388"><a href="#1388">1388</a></td></tr
><tr id="gr_svn20_1389"

><td id="1389"><a href="#1389">1389</a></td></tr
><tr id="gr_svn20_1390"

><td id="1390"><a href="#1390">1390</a></td></tr
><tr id="gr_svn20_1391"

><td id="1391"><a href="#1391">1391</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn20_1

><td class="source">// Copyright (C) 2006 Google Inc.<br></td></tr
><tr
id=sl_svn20_2

><td class="source">//<br></td></tr
><tr
id=sl_svn20_3

><td class="source">// Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);<br></td></tr
><tr
id=sl_svn20_4

><td class="source">// you may not use this file except in compliance with the License.<br></td></tr
><tr
id=sl_svn20_5

><td class="source">// You may obtain a copy of the License at<br></td></tr
><tr
id=sl_svn20_6

><td class="source">//<br></td></tr
><tr
id=sl_svn20_7

><td class="source">//      http://www.apache.org/licenses/LICENSE-2.0<br></td></tr
><tr
id=sl_svn20_8

><td class="source">//<br></td></tr
><tr
id=sl_svn20_9

><td class="source">// Unless required by applicable law or agreed to in writing, software<br></td></tr
><tr
id=sl_svn20_10

><td class="source">// distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br></td></tr
><tr
id=sl_svn20_11

><td class="source">// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br></td></tr
><tr
id=sl_svn20_12

><td class="source">// See the License for the specific language governing permissions and<br></td></tr
><tr
id=sl_svn20_13

><td class="source">// limitations under the License.<br></td></tr
><tr
id=sl_svn20_14

><td class="source"><br></td></tr
><tr
id=sl_svn20_15

><td class="source"><br></td></tr
><tr
id=sl_svn20_16

><td class="source">/**<br></td></tr
><tr
id=sl_svn20_17

><td class="source"> * @fileoverview<br></td></tr
><tr
id=sl_svn20_18

><td class="source"> * some functions for browser-side pretty printing of code contained in html.<br></td></tr
><tr
id=sl_svn20_19

><td class="source"> *<br></td></tr
><tr
id=sl_svn20_20

><td class="source"> * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_21

><td class="source"> * For a fairly comprehensive set of languages see the<br></td></tr
><tr
id=sl_svn20_22

><td class="source"> * &lt;a href=&quot;http://google-code-prettify.googlecode.com/svn/trunk/README.html#langs&quot;&gt;README&lt;/a&gt;<br></td></tr
><tr
id=sl_svn20_23

><td class="source"> * file that came with this source.  At a minimum, the lexer should work on a<br></td></tr
><tr
id=sl_svn20_24

><td class="source"> * number of languages including C and friends, Java, Python, Bash, SQL, HTML,<br></td></tr
><tr
id=sl_svn20_25

><td class="source"> * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk<br></td></tr
><tr
id=sl_svn20_26

><td class="source"> * and a subset of Perl, but, because of commenting conventions, doesn&#39;t work on<br></td></tr
><tr
id=sl_svn20_27

><td class="source"> * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.<br></td></tr
><tr
id=sl_svn20_28

><td class="source"> * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_29

><td class="source"> * Usage: &lt;ol&gt;<br></td></tr
><tr
id=sl_svn20_30

><td class="source"> * &lt;li&gt; include this source file in an html page via<br></td></tr
><tr
id=sl_svn20_31

><td class="source"> *   {@code &lt;script type=&quot;text/javascript&quot; src=&quot;/path/to/prettify.js&quot;&gt;&lt;/script&gt;}<br></td></tr
><tr
id=sl_svn20_32

><td class="source"> * &lt;li&gt; define style rules.  See the example page for examples.<br></td></tr
><tr
id=sl_svn20_33

><td class="source"> * &lt;li&gt; mark the {@code &lt;pre&gt;} and {@code &lt;code&gt;} tags in your source with<br></td></tr
><tr
id=sl_svn20_34

><td class="source"> *    {@code class=prettyprint.}<br></td></tr
><tr
id=sl_svn20_35

><td class="source"> *    You can also use the (html deprecated) {@code &lt;xmp&gt;} tag, but the pretty<br></td></tr
><tr
id=sl_svn20_36

><td class="source"> *    printer needs to do more substantial DOM manipulations to support that, so<br></td></tr
><tr
id=sl_svn20_37

><td class="source"> *    some css styles may not be preserved.<br></td></tr
><tr
id=sl_svn20_38

><td class="source"> * &lt;/ol&gt;<br></td></tr
><tr
id=sl_svn20_39

><td class="source"> * That&#39;s it.  I wanted to keep the API as simple as possible, so there&#39;s no<br></td></tr
><tr
id=sl_svn20_40

><td class="source"> * need to specify which language the code is in, but if you wish, you can add<br></td></tr
><tr
id=sl_svn20_41

><td class="source"> * another class to the {@code &lt;pre&gt;} or {@code &lt;code&gt;} element to specify the<br></td></tr
><tr
id=sl_svn20_42

><td class="source"> * language, as in {@code &lt;pre class=&quot;prettyprint lang-java&quot;&gt;}.  Any class that<br></td></tr
><tr
id=sl_svn20_43

><td class="source"> * starts with &quot;lang-&quot; followed by a file extension, specifies the file type.<br></td></tr
><tr
id=sl_svn20_44

><td class="source"> * See the &quot;lang-*.js&quot; files in this directory for code that implements<br></td></tr
><tr
id=sl_svn20_45

><td class="source"> * per-language file handlers.<br></td></tr
><tr
id=sl_svn20_46

><td class="source"> * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_47

><td class="source"> * Change log:&lt;br&gt;<br></td></tr
><tr
id=sl_svn20_48

><td class="source"> * cbeust, 2006/08/22<br></td></tr
><tr
id=sl_svn20_49

><td class="source"> * &lt;blockquote&gt;<br></td></tr
><tr
id=sl_svn20_50

><td class="source"> *   Java annotations (start with &quot;@&quot;) are now captured as literals (&quot;lit&quot;)<br></td></tr
><tr
id=sl_svn20_51

><td class="source"> * &lt;/blockquote&gt;<br></td></tr
><tr
id=sl_svn20_52

><td class="source"> * @requires console<br></td></tr
><tr
id=sl_svn20_53

><td class="source"> */<br></td></tr
><tr
id=sl_svn20_54

><td class="source"><br></td></tr
><tr
id=sl_svn20_55

><td class="source">// JSLint declarations<br></td></tr
><tr
id=sl_svn20_56

><td class="source">/*global console, document, navigator, setTimeout, window */<br></td></tr
><tr
id=sl_svn20_57

><td class="source"><br></td></tr
><tr
id=sl_svn20_58

><td class="source">/**<br></td></tr
><tr
id=sl_svn20_59

><td class="source"> * Split {@code prettyPrint} into multiple timeouts so as not to interfere with<br></td></tr
><tr
id=sl_svn20_60

><td class="source"> * UI events.<br></td></tr
><tr
id=sl_svn20_61

><td class="source"> * If set to {@code false}, {@code prettyPrint()} is synchronous.<br></td></tr
><tr
id=sl_svn20_62

><td class="source"> */<br></td></tr
><tr
id=sl_svn20_63

><td class="source">window[&#39;PR_SHOULD_USE_CONTINUATION&#39;] = true;<br></td></tr
><tr
id=sl_svn20_64

><td class="source"><br></td></tr
><tr
id=sl_svn20_65

><td class="source">/** the number of characters between tab columns */<br></td></tr
><tr
id=sl_svn20_66

><td class="source">window[&#39;PR_TAB_WIDTH&#39;] = 8;<br></td></tr
><tr
id=sl_svn20_67

><td class="source"><br></td></tr
><tr
id=sl_svn20_68

><td class="source">/** Contains functions for creating and registering new language handlers.<br></td></tr
><tr
id=sl_svn20_69

><td class="source">  * @type {Object}<br></td></tr
><tr
id=sl_svn20_70

><td class="source">  */<br></td></tr
><tr
id=sl_svn20_71

><td class="source">window[&#39;PR&#39;]<br></td></tr
><tr
id=sl_svn20_72

><td class="source"><br></td></tr
><tr
id=sl_svn20_73

><td class="source">/** Pretty print a chunk of code.<br></td></tr
><tr
id=sl_svn20_74

><td class="source">  *<br></td></tr
><tr
id=sl_svn20_75

><td class="source">  * @param {string} sourceCodeHtml code as html<br></td></tr
><tr
id=sl_svn20_76

><td class="source">  * @return {string} code as html, but prettier<br></td></tr
><tr
id=sl_svn20_77

><td class="source">  */<br></td></tr
><tr
id=sl_svn20_78

><td class="source">  = window[&#39;prettyPrintOne&#39;]<br></td></tr
><tr
id=sl_svn20_79

><td class="source">/** Find all the {@code &lt;pre&gt;} and {@code &lt;code&gt;} tags in the DOM with<br></td></tr
><tr
id=sl_svn20_80

><td class="source">  * {@code class=prettyprint} and prettify them.<br></td></tr
><tr
id=sl_svn20_81

><td class="source">  * @param {Function?} opt_whenDone if specified, called when the last entry<br></td></tr
><tr
id=sl_svn20_82

><td class="source">  *     has been finished.<br></td></tr
><tr
id=sl_svn20_83

><td class="source">  */<br></td></tr
><tr
id=sl_svn20_84

><td class="source">  = window[&#39;prettyPrint&#39;] = void 0;<br></td></tr
><tr
id=sl_svn20_85

><td class="source"><br></td></tr
><tr
id=sl_svn20_86

><td class="source"><br></td></tr
><tr
id=sl_svn20_87

><td class="source">(function () {<br></td></tr
><tr
id=sl_svn20_88

><td class="source">  // Keyword lists for various languages.<br></td></tr
><tr
id=sl_svn20_89

><td class="source">  var FLOW_CONTROL_KEYWORDS =<br></td></tr
><tr
id=sl_svn20_90

><td class="source">      &quot;break continue do else for if return while &quot;;<br></td></tr
><tr
id=sl_svn20_91

><td class="source">  var C_KEYWORDS = FLOW_CONTROL_KEYWORDS + &quot;auto case char const default &quot; +<br></td></tr
><tr
id=sl_svn20_92

><td class="source">      &quot;double enum extern float goto int long register short signed sizeof &quot; +<br></td></tr
><tr
id=sl_svn20_93

><td class="source">      &quot;static struct switch typedef union unsigned void volatile &quot;;<br></td></tr
><tr
id=sl_svn20_94

><td class="source">  var COMMON_KEYWORDS = C_KEYWORDS + &quot;catch class delete false import &quot; +<br></td></tr
><tr
id=sl_svn20_95

><td class="source">      &quot;new operator private protected public this throw true try typeof &quot;;<br></td></tr
><tr
id=sl_svn20_96

><td class="source">  var CPP_KEYWORDS = COMMON_KEYWORDS + &quot;alignof align_union asm axiom bool &quot; +<br></td></tr
><tr
id=sl_svn20_97

><td class="source">      &quot;concept concept_map const_cast constexpr decltype &quot; +<br></td></tr
><tr
id=sl_svn20_98

><td class="source">      &quot;dynamic_cast explicit export friend inline late_check &quot; +<br></td></tr
><tr
id=sl_svn20_99

><td class="source">      &quot;mutable namespace nullptr reinterpret_cast static_assert static_cast &quot; +<br></td></tr
><tr
id=sl_svn20_100

><td class="source">      &quot;template typeid typename using virtual wchar_t where &quot;;<br></td></tr
><tr
id=sl_svn20_101

><td class="source">  var JAVA_KEYWORDS = COMMON_KEYWORDS +<br></td></tr
><tr
id=sl_svn20_102

><td class="source">      &quot;abstract boolean byte extends final finally implements import &quot; +<br></td></tr
><tr
id=sl_svn20_103

><td class="source">      &quot;instanceof null native package strictfp super synchronized throws &quot; +<br></td></tr
><tr
id=sl_svn20_104

><td class="source">      &quot;transient &quot;;<br></td></tr
><tr
id=sl_svn20_105

><td class="source">  var CSHARP_KEYWORDS = JAVA_KEYWORDS +<br></td></tr
><tr
id=sl_svn20_106

><td class="source">      &quot;as base by checked decimal delegate descending dynamic event &quot; +<br></td></tr
><tr
id=sl_svn20_107

><td class="source">      &quot;fixed foreach from group implicit in interface internal into is lock &quot; +<br></td></tr
><tr
id=sl_svn20_108

><td class="source">      &quot;object out override orderby params partial readonly ref sbyte sealed &quot; +<br></td></tr
><tr
id=sl_svn20_109

><td class="source">      &quot;stackalloc string select uint ulong unchecked unsafe ushort var &quot;;<br></td></tr
><tr
id=sl_svn20_110

><td class="source">  var COFFEE_KEYWORDS = &quot;all and by catch class else extends false finally &quot; +<br></td></tr
><tr
id=sl_svn20_111

><td class="source">      &quot;for if in is isnt loop new no not null of off on or return super then &quot; +<br></td></tr
><tr
id=sl_svn20_112

><td class="source">      &quot;true try unless until when while yes &quot;;<br></td></tr
><tr
id=sl_svn20_113

><td class="source">  var JSCRIPT_KEYWORDS = COMMON_KEYWORDS +<br></td></tr
><tr
id=sl_svn20_114

><td class="source">      &quot;debugger eval export function get null set undefined var with &quot; +<br></td></tr
><tr
id=sl_svn20_115

><td class="source">      &quot;Infinity NaN &quot;;<br></td></tr
><tr
id=sl_svn20_116

><td class="source">  var PERL_KEYWORDS = &quot;caller delete die do dump elsif eval exit foreach for &quot; +<br></td></tr
><tr
id=sl_svn20_117

><td class="source">      &quot;goto if import last local my next no our print package redo require &quot; +<br></td></tr
><tr
id=sl_svn20_118

><td class="source">      &quot;sub undef unless until use wantarray while BEGIN END &quot;;<br></td></tr
><tr
id=sl_svn20_119

><td class="source">  var PYTHON_KEYWORDS = FLOW_CONTROL_KEYWORDS + &quot;and as assert class def del &quot; +<br></td></tr
><tr
id=sl_svn20_120

><td class="source">      &quot;elif except exec finally from global import in is lambda &quot; +<br></td></tr
><tr
id=sl_svn20_121

><td class="source">      &quot;nonlocal not or pass print raise try with yield &quot; +<br></td></tr
><tr
id=sl_svn20_122

><td class="source">      &quot;False True None &quot;;<br></td></tr
><tr
id=sl_svn20_123

><td class="source">  var RUBY_KEYWORDS = FLOW_CONTROL_KEYWORDS + &quot;alias and begin case class def&quot; +<br></td></tr
><tr
id=sl_svn20_124

><td class="source">      &quot; defined elsif end ensure false in module next nil not or redo rescue &quot; +<br></td></tr
><tr
id=sl_svn20_125

><td class="source">      &quot;retry self super then true undef unless until when yield BEGIN END &quot;;<br></td></tr
><tr
id=sl_svn20_126

><td class="source">  var SH_KEYWORDS = FLOW_CONTROL_KEYWORDS + &quot;case done elif esac eval fi &quot; +<br></td></tr
><tr
id=sl_svn20_127

><td class="source">      &quot;function in local set then until &quot;;<br></td></tr
><tr
id=sl_svn20_128

><td class="source">  var ALL_KEYWORDS = (<br></td></tr
><tr
id=sl_svn20_129

><td class="source">      CPP_KEYWORDS + CSHARP_KEYWORDS + JSCRIPT_KEYWORDS + PERL_KEYWORDS +<br></td></tr
><tr
id=sl_svn20_130

><td class="source">      PYTHON_KEYWORDS + RUBY_KEYWORDS + SH_KEYWORDS);<br></td></tr
><tr
id=sl_svn20_131

><td class="source"><br></td></tr
><tr
id=sl_svn20_132

><td class="source">  // token style names.  correspond to css classes<br></td></tr
><tr
id=sl_svn20_133

><td class="source">  /** token style for a string literal */<br></td></tr
><tr
id=sl_svn20_134

><td class="source">  var PR_STRING = &#39;str&#39;;<br></td></tr
><tr
id=sl_svn20_135

><td class="source">  /** token style for a keyword */<br></td></tr
><tr
id=sl_svn20_136

><td class="source">  var PR_KEYWORD = &#39;kwd&#39;;<br></td></tr
><tr
id=sl_svn20_137

><td class="source">  /** token style for a comment */<br></td></tr
><tr
id=sl_svn20_138

><td class="source">  var PR_COMMENT = &#39;com&#39;;<br></td></tr
><tr
id=sl_svn20_139

><td class="source">  /** token style for a type */<br></td></tr
><tr
id=sl_svn20_140

><td class="source">  var PR_TYPE = &#39;typ&#39;;<br></td></tr
><tr
id=sl_svn20_141

><td class="source">  /** token style for a literal value.  e.g. 1, null, true. */<br></td></tr
><tr
id=sl_svn20_142

><td class="source">  var PR_LITERAL = &#39;lit&#39;;<br></td></tr
><tr
id=sl_svn20_143

><td class="source">  /** token style for a punctuation string. */<br></td></tr
><tr
id=sl_svn20_144

><td class="source">  var PR_PUNCTUATION = &#39;pun&#39;;<br></td></tr
><tr
id=sl_svn20_145

><td class="source">  /** token style for a punctuation string. */<br></td></tr
><tr
id=sl_svn20_146

><td class="source">  var PR_PLAIN = &#39;pln&#39;;<br></td></tr
><tr
id=sl_svn20_147

><td class="source"><br></td></tr
><tr
id=sl_svn20_148

><td class="source">  /** token style for an sgml tag. */<br></td></tr
><tr
id=sl_svn20_149

><td class="source">  var PR_TAG = &#39;tag&#39;;<br></td></tr
><tr
id=sl_svn20_150

><td class="source">  /** token style for a markup declaration such as a DOCTYPE. */<br></td></tr
><tr
id=sl_svn20_151

><td class="source">  var PR_DECLARATION = &#39;dec&#39;;<br></td></tr
><tr
id=sl_svn20_152

><td class="source">  /** token style for embedded source. */<br></td></tr
><tr
id=sl_svn20_153

><td class="source">  var PR_SOURCE = &#39;src&#39;;<br></td></tr
><tr
id=sl_svn20_154

><td class="source">  /** token style for an sgml attribute name. */<br></td></tr
><tr
id=sl_svn20_155

><td class="source">  var PR_ATTRIB_NAME = &#39;atn&#39;;<br></td></tr
><tr
id=sl_svn20_156

><td class="source">  /** token style for an sgml attribute value. */<br></td></tr
><tr
id=sl_svn20_157

><td class="source">  var PR_ATTRIB_VALUE = &#39;atv&#39;;<br></td></tr
><tr
id=sl_svn20_158

><td class="source"><br></td></tr
><tr
id=sl_svn20_159

><td class="source">  /**<br></td></tr
><tr
id=sl_svn20_160

><td class="source">   * A class that indicates a section of markup that is not code, e.g. to allow<br></td></tr
><tr
id=sl_svn20_161

><td class="source">   * embedding of line numbers within code listings.<br></td></tr
><tr
id=sl_svn20_162

><td class="source">   */<br></td></tr
><tr
id=sl_svn20_163

><td class="source">  var PR_NOCODE = &#39;nocode&#39;;<br></td></tr
><tr
id=sl_svn20_164

><td class="source"><br></td></tr
><tr
id=sl_svn20_165

><td class="source">  /** A set of tokens that can precede a regular expression literal in<br></td></tr
><tr
id=sl_svn20_166

><td class="source">    * javascript.<br></td></tr
><tr
id=sl_svn20_167

><td class="source">    * http://www.mozilla.org/js/language/js20/rationale/syntax.html has the full<br></td></tr
><tr
id=sl_svn20_168

><td class="source">    * list, but I&#39;ve removed ones that might be problematic when seen in<br></td></tr
><tr
id=sl_svn20_169

><td class="source">    * languages that don&#39;t support regular expression literals.<br></td></tr
><tr
id=sl_svn20_170

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_171

><td class="source">    * &lt;p&gt;Specifically, I&#39;ve removed any keywords that can&#39;t precede a regexp<br></td></tr
><tr
id=sl_svn20_172

><td class="source">    * literal in a syntactically legal javascript program, and I&#39;ve removed the<br></td></tr
><tr
id=sl_svn20_173

><td class="source">    * &quot;in&quot; keyword since it&#39;s not a keyword in many languages, and might be used<br></td></tr
><tr
id=sl_svn20_174

><td class="source">    * as a count of inches.<br></td></tr
><tr
id=sl_svn20_175

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_176

><td class="source">    * &lt;p&gt;The link a above does not accurately describe EcmaScript rules since<br></td></tr
><tr
id=sl_svn20_177

><td class="source">    * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works<br></td></tr
><tr
id=sl_svn20_178

><td class="source">    * very well in practice.<br></td></tr
><tr
id=sl_svn20_179

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_180

><td class="source">    * @private<br></td></tr
><tr
id=sl_svn20_181

><td class="source">    */<br></td></tr
><tr
id=sl_svn20_182

><td class="source">  var REGEXP_PRECEDER_PATTERN = function () {<br></td></tr
><tr
id=sl_svn20_183

><td class="source">      var preceders = [<br></td></tr
><tr
id=sl_svn20_184

><td class="source">          &quot;!&quot;, &quot;!=&quot;, &quot;!==&quot;, &quot;#&quot;, &quot;%&quot;, &quot;%=&quot;, &quot;&amp;&quot;, &quot;&amp;&amp;&quot;, &quot;&amp;&amp;=&quot;,<br></td></tr
><tr
id=sl_svn20_185

><td class="source">          &quot;&amp;=&quot;, &quot;(&quot;, &quot;*&quot;, &quot;*=&quot;, /* &quot;+&quot;, */ &quot;+=&quot;, &quot;,&quot;, /* &quot;-&quot;, */ &quot;-=&quot;,<br></td></tr
><tr
id=sl_svn20_186

><td class="source">          &quot;-&gt;&quot;, /*&quot;.&quot;, &quot;..&quot;, &quot;...&quot;, handled below */ &quot;/&quot;, &quot;/=&quot;, &quot;:&quot;, &quot;::&quot;, &quot;;&quot;,<br></td></tr
><tr
id=sl_svn20_187

><td class="source">          &quot;&lt;&quot;, &quot;&lt;&lt;&quot;, &quot;&lt;&lt;=&quot;, &quot;&lt;=&quot;, &quot;=&quot;, &quot;==&quot;, &quot;===&quot;, &quot;&gt;&quot;,<br></td></tr
><tr
id=sl_svn20_188

><td class="source">          &quot;&gt;=&quot;, &quot;&gt;&gt;&quot;, &quot;&gt;&gt;=&quot;, &quot;&gt;&gt;&gt;&quot;, &quot;&gt;&gt;&gt;=&quot;, &quot;?&quot;, &quot;@&quot;, &quot;[&quot;,<br></td></tr
><tr
id=sl_svn20_189

><td class="source">          &quot;^&quot;, &quot;^=&quot;, &quot;^^&quot;, &quot;^^=&quot;, &quot;{&quot;, &quot;|&quot;, &quot;|=&quot;, &quot;||&quot;,<br></td></tr
><tr
id=sl_svn20_190

><td class="source">          &quot;||=&quot;, &quot;~&quot; /* handles =~ and !~ */,<br></td></tr
><tr
id=sl_svn20_191

><td class="source">          &quot;break&quot;, &quot;case&quot;, &quot;continue&quot;, &quot;delete&quot;,<br></td></tr
><tr
id=sl_svn20_192

><td class="source">          &quot;do&quot;, &quot;else&quot;, &quot;finally&quot;, &quot;instanceof&quot;,<br></td></tr
><tr
id=sl_svn20_193

><td class="source">          &quot;return&quot;, &quot;throw&quot;, &quot;try&quot;, &quot;typeof&quot;<br></td></tr
><tr
id=sl_svn20_194

><td class="source">          ];<br></td></tr
><tr
id=sl_svn20_195

><td class="source">      var pattern = &#39;(?:^^|[+-]&#39;;<br></td></tr
><tr
id=sl_svn20_196

><td class="source">      for (var i = 0; i &lt; preceders.length; ++i) {<br></td></tr
><tr
id=sl_svn20_197

><td class="source">        pattern += &#39;|&#39; + preceders[i].replace(/([^=&lt;&gt;:&amp;a-z])/g, &#39;\\$1&#39;);<br></td></tr
><tr
id=sl_svn20_198

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_199

><td class="source">      pattern += &#39;)\\s*&#39;;  // matches at end, and matches empty string<br></td></tr
><tr
id=sl_svn20_200

><td class="source">      return pattern;<br></td></tr
><tr
id=sl_svn20_201

><td class="source">      // CAVEAT: this does not properly handle the case where a regular<br></td></tr
><tr
id=sl_svn20_202

><td class="source">      // expression immediately follows another since a regular expression may<br></td></tr
><tr
id=sl_svn20_203

><td class="source">      // have flags for case-sensitivity and the like.  Having regexp tokens<br></td></tr
><tr
id=sl_svn20_204

><td class="source">      // adjacent is not valid in any language I&#39;m aware of, so I&#39;m punting.<br></td></tr
><tr
id=sl_svn20_205

><td class="source">      // TODO: maybe style special characters inside a regexp as punctuation.<br></td></tr
><tr
id=sl_svn20_206

><td class="source">    }();<br></td></tr
><tr
id=sl_svn20_207

><td class="source"><br></td></tr
><tr
id=sl_svn20_208

><td class="source">  <br></td></tr
><tr
id=sl_svn20_209

><td class="source">  /**<br></td></tr
><tr
id=sl_svn20_210

><td class="source">   * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally<br></td></tr
><tr
id=sl_svn20_211

><td class="source">   * matches the union of the sets of strings matched by the input RegExp.<br></td></tr
><tr
id=sl_svn20_212

><td class="source">   * Since it matches globally, if the input strings have a start-of-input<br></td></tr
><tr
id=sl_svn20_213

><td class="source">   * anchor (/^.../), it is ignored for the purposes of unioning.<br></td></tr
><tr
id=sl_svn20_214

><td class="source">   * @param {Array.&lt;RegExp&gt;} regexs non multiline, non-global regexs.<br></td></tr
><tr
id=sl_svn20_215

><td class="source">   * @return {RegExp} a global regex.<br></td></tr
><tr
id=sl_svn20_216

><td class="source">   */<br></td></tr
><tr
id=sl_svn20_217

><td class="source">  function combinePrefixPatterns(regexs) {<br></td></tr
><tr
id=sl_svn20_218

><td class="source">    var capturedGroupIndex = 0;<br></td></tr
><tr
id=sl_svn20_219

><td class="source">  <br></td></tr
><tr
id=sl_svn20_220

><td class="source">    var needToFoldCase = false;<br></td></tr
><tr
id=sl_svn20_221

><td class="source">    var ignoreCase = false;<br></td></tr
><tr
id=sl_svn20_222

><td class="source">    for (var i = 0, n = regexs.length; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_223

><td class="source">      var regex = regexs[i];<br></td></tr
><tr
id=sl_svn20_224

><td class="source">      if (regex.ignoreCase) {<br></td></tr
><tr
id=sl_svn20_225

><td class="source">        ignoreCase = true;<br></td></tr
><tr
id=sl_svn20_226

><td class="source">      } else if (/[a-z]/i.test(regex.source.replace(<br></td></tr
><tr
id=sl_svn20_227

><td class="source">                     /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, &#39;&#39;))) {<br></td></tr
><tr
id=sl_svn20_228

><td class="source">        needToFoldCase = true;<br></td></tr
><tr
id=sl_svn20_229

><td class="source">        ignoreCase = false;<br></td></tr
><tr
id=sl_svn20_230

><td class="source">        break;<br></td></tr
><tr
id=sl_svn20_231

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_232

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_233

><td class="source">  <br></td></tr
><tr
id=sl_svn20_234

><td class="source">    function decodeEscape(charsetPart) {<br></td></tr
><tr
id=sl_svn20_235

><td class="source">      if (charsetPart.charAt(0) !== &#39;\\&#39;) { return charsetPart.charCodeAt(0); }<br></td></tr
><tr
id=sl_svn20_236

><td class="source">      switch (charsetPart.charAt(1)) {<br></td></tr
><tr
id=sl_svn20_237

><td class="source">        case &#39;b&#39;: return 8;<br></td></tr
><tr
id=sl_svn20_238

><td class="source">        case &#39;t&#39;: return 9;<br></td></tr
><tr
id=sl_svn20_239

><td class="source">        case &#39;n&#39;: return 0xa;<br></td></tr
><tr
id=sl_svn20_240

><td class="source">        case &#39;v&#39;: return 0xb;<br></td></tr
><tr
id=sl_svn20_241

><td class="source">        case &#39;f&#39;: return 0xc;<br></td></tr
><tr
id=sl_svn20_242

><td class="source">        case &#39;r&#39;: return 0xd;<br></td></tr
><tr
id=sl_svn20_243

><td class="source">        case &#39;u&#39;: case &#39;x&#39;:<br></td></tr
><tr
id=sl_svn20_244

><td class="source">          return parseInt(charsetPart.substring(2), 16)<br></td></tr
><tr
id=sl_svn20_245

><td class="source">              || charsetPart.charCodeAt(1);<br></td></tr
><tr
id=sl_svn20_246

><td class="source">        case &#39;0&#39;: case &#39;1&#39;: case &#39;2&#39;: case &#39;3&#39;: case &#39;4&#39;:<br></td></tr
><tr
id=sl_svn20_247

><td class="source">        case &#39;5&#39;: case &#39;6&#39;: case &#39;7&#39;:<br></td></tr
><tr
id=sl_svn20_248

><td class="source">          return parseInt(charsetPart.substring(1), 8);<br></td></tr
><tr
id=sl_svn20_249

><td class="source">        default: return charsetPart.charCodeAt(1);<br></td></tr
><tr
id=sl_svn20_250

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_251

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_252

><td class="source">  <br></td></tr
><tr
id=sl_svn20_253

><td class="source">    function encodeEscape(charCode) {<br></td></tr
><tr
id=sl_svn20_254

><td class="source">      if (charCode &lt; 0x20) {<br></td></tr
><tr
id=sl_svn20_255

><td class="source">        return (charCode &lt; 0x10 ? &#39;\\x0&#39; : &#39;\\x&#39;) + charCode.toString(16);<br></td></tr
><tr
id=sl_svn20_256

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_257

><td class="source">      var ch = String.fromCharCode(charCode);<br></td></tr
><tr
id=sl_svn20_258

><td class="source">      if (ch === &#39;\\&#39; || ch === &#39;-&#39; || ch === &#39;[&#39; || ch === &#39;]&#39;) {<br></td></tr
><tr
id=sl_svn20_259

><td class="source">        ch = &#39;\\&#39; + ch;<br></td></tr
><tr
id=sl_svn20_260

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_261

><td class="source">      return ch;<br></td></tr
><tr
id=sl_svn20_262

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_263

><td class="source">  <br></td></tr
><tr
id=sl_svn20_264

><td class="source">    function caseFoldCharset(charSet) {<br></td></tr
><tr
id=sl_svn20_265

><td class="source">      var charsetParts = charSet.substring(1, charSet.length - 1).match(<br></td></tr
><tr
id=sl_svn20_266

><td class="source">          new RegExp(<br></td></tr
><tr
id=sl_svn20_267

><td class="source">              &#39;\\\\u[0-9A-Fa-f]{4}&#39;<br></td></tr
><tr
id=sl_svn20_268

><td class="source">              + &#39;|\\\\x[0-9A-Fa-f]{2}&#39;<br></td></tr
><tr
id=sl_svn20_269

><td class="source">              + &#39;|\\\\[0-3][0-7]{0,2}&#39;<br></td></tr
><tr
id=sl_svn20_270

><td class="source">              + &#39;|\\\\[0-7]{1,2}&#39;<br></td></tr
><tr
id=sl_svn20_271

><td class="source">              + &#39;|\\\\[\\s\\S]&#39;<br></td></tr
><tr
id=sl_svn20_272

><td class="source">              + &#39;|-&#39;<br></td></tr
><tr
id=sl_svn20_273

><td class="source">              + &#39;|[^-\\\\]&#39;,<br></td></tr
><tr
id=sl_svn20_274

><td class="source">              &#39;g&#39;));<br></td></tr
><tr
id=sl_svn20_275

><td class="source">      var groups = [];<br></td></tr
><tr
id=sl_svn20_276

><td class="source">      var ranges = [];<br></td></tr
><tr
id=sl_svn20_277

><td class="source">      var inverse = charsetParts[0] === &#39;^&#39;;<br></td></tr
><tr
id=sl_svn20_278

><td class="source">      for (var i = inverse ? 1 : 0, n = charsetParts.length; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_279

><td class="source">        var p = charsetParts[i];<br></td></tr
><tr
id=sl_svn20_280

><td class="source">        switch (p) {<br></td></tr
><tr
id=sl_svn20_281

><td class="source">          case &#39;\\B&#39;: case &#39;\\b&#39;:<br></td></tr
><tr
id=sl_svn20_282

><td class="source">          case &#39;\\D&#39;: case &#39;\\d&#39;:<br></td></tr
><tr
id=sl_svn20_283

><td class="source">          case &#39;\\S&#39;: case &#39;\\s&#39;:<br></td></tr
><tr
id=sl_svn20_284

><td class="source">          case &#39;\\W&#39;: case &#39;\\w&#39;:<br></td></tr
><tr
id=sl_svn20_285

><td class="source">            groups.push(p);<br></td></tr
><tr
id=sl_svn20_286

><td class="source">            continue;<br></td></tr
><tr
id=sl_svn20_287

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_288

><td class="source">        var start = decodeEscape(p);<br></td></tr
><tr
id=sl_svn20_289

><td class="source">        var end;<br></td></tr
><tr
id=sl_svn20_290

><td class="source">        if (i + 2 &lt; n &amp;&amp; &#39;-&#39; === charsetParts[i + 1]) {<br></td></tr
><tr
id=sl_svn20_291

><td class="source">          end = decodeEscape(charsetParts[i + 2]);<br></td></tr
><tr
id=sl_svn20_292

><td class="source">          i += 2;<br></td></tr
><tr
id=sl_svn20_293

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn20_294

><td class="source">          end = start;<br></td></tr
><tr
id=sl_svn20_295

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_296

><td class="source">        ranges.push([start, end]);<br></td></tr
><tr
id=sl_svn20_297

><td class="source">        // If the range might intersect letters, then expand it.<br></td></tr
><tr
id=sl_svn20_298

><td class="source">        if (!(end &lt; 65 || start &gt; 122)) {<br></td></tr
><tr
id=sl_svn20_299

><td class="source">          if (!(end &lt; 65 || start &gt; 90)) {<br></td></tr
><tr
id=sl_svn20_300

><td class="source">            ranges.push([Math.max(65, start) | 32, Math.min(end, 90) | 32]);<br></td></tr
><tr
id=sl_svn20_301

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_302

><td class="source">          if (!(end &lt; 97 || start &gt; 122)) {<br></td></tr
><tr
id=sl_svn20_303

><td class="source">            ranges.push([Math.max(97, start) &amp; ~32, Math.min(end, 122) &amp; ~32]);<br></td></tr
><tr
id=sl_svn20_304

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_305

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_306

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_307

><td class="source">  <br></td></tr
><tr
id=sl_svn20_308

><td class="source">      // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]<br></td></tr
><tr
id=sl_svn20_309

><td class="source">      // -&gt; [[1, 12], [14, 14], [16, 17]]<br></td></tr
><tr
id=sl_svn20_310

><td class="source">      ranges.sort(function (a, b) { return (a[0] - b[0]) || (b[1]  - a[1]); });<br></td></tr
><tr
id=sl_svn20_311

><td class="source">      var consolidatedRanges = [];<br></td></tr
><tr
id=sl_svn20_312

><td class="source">      var lastRange = [NaN, NaN];<br></td></tr
><tr
id=sl_svn20_313

><td class="source">      for (var i = 0; i &lt; ranges.length; ++i) {<br></td></tr
><tr
id=sl_svn20_314

><td class="source">        var range = ranges[i];<br></td></tr
><tr
id=sl_svn20_315

><td class="source">        if (range[0] &lt;= lastRange[1] + 1) {<br></td></tr
><tr
id=sl_svn20_316

><td class="source">          lastRange[1] = Math.max(lastRange[1], range[1]);<br></td></tr
><tr
id=sl_svn20_317

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn20_318

><td class="source">          consolidatedRanges.push(lastRange = range);<br></td></tr
><tr
id=sl_svn20_319

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_320

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_321

><td class="source">  <br></td></tr
><tr
id=sl_svn20_322

><td class="source">      var out = [&#39;[&#39;];<br></td></tr
><tr
id=sl_svn20_323

><td class="source">      if (inverse) { out.push(&#39;^&#39;); }<br></td></tr
><tr
id=sl_svn20_324

><td class="source">      out.push.apply(out, groups);<br></td></tr
><tr
id=sl_svn20_325

><td class="source">      for (var i = 0; i &lt; consolidatedRanges.length; ++i) {<br></td></tr
><tr
id=sl_svn20_326

><td class="source">        var range = consolidatedRanges[i];<br></td></tr
><tr
id=sl_svn20_327

><td class="source">        out.push(encodeEscape(range[0]));<br></td></tr
><tr
id=sl_svn20_328

><td class="source">        if (range[1] &gt; range[0]) {<br></td></tr
><tr
id=sl_svn20_329

><td class="source">          if (range[1] + 1 &gt; range[0]) { out.push(&#39;-&#39;); }<br></td></tr
><tr
id=sl_svn20_330

><td class="source">          out.push(encodeEscape(range[1]));<br></td></tr
><tr
id=sl_svn20_331

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_332

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_333

><td class="source">      out.push(&#39;]&#39;);<br></td></tr
><tr
id=sl_svn20_334

><td class="source">      return out.join(&#39;&#39;);<br></td></tr
><tr
id=sl_svn20_335

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_336

><td class="source">  <br></td></tr
><tr
id=sl_svn20_337

><td class="source">    function allowAnywhereFoldCaseAndRenumberGroups(regex) {<br></td></tr
><tr
id=sl_svn20_338

><td class="source">      // Split into character sets, escape sequences, punctuation strings<br></td></tr
><tr
id=sl_svn20_339

><td class="source">      // like (&#39;(&#39;, &#39;(?:&#39;, &#39;)&#39;, &#39;^&#39;), and runs of characters that do not<br></td></tr
><tr
id=sl_svn20_340

><td class="source">      // include any of the above.<br></td></tr
><tr
id=sl_svn20_341

><td class="source">      var parts = regex.source.match(<br></td></tr
><tr
id=sl_svn20_342

><td class="source">          new RegExp(<br></td></tr
><tr
id=sl_svn20_343

><td class="source">              &#39;(?:&#39;<br></td></tr
><tr
id=sl_svn20_344

><td class="source">              + &#39;\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]&#39;  // a character set<br></td></tr
><tr
id=sl_svn20_345

><td class="source">              + &#39;|\\\\u[A-Fa-f0-9]{4}&#39;  // a unicode escape<br></td></tr
><tr
id=sl_svn20_346

><td class="source">              + &#39;|\\\\x[A-Fa-f0-9]{2}&#39;  // a hex escape<br></td></tr
><tr
id=sl_svn20_347

><td class="source">              + &#39;|\\\\[0-9]+&#39;  // a back-reference or octal escape<br></td></tr
><tr
id=sl_svn20_348

><td class="source">              + &#39;|\\\\[^ux0-9]&#39;  // other escape sequence<br></td></tr
><tr
id=sl_svn20_349

><td class="source">              + &#39;|\\(\\?[:!=]&#39;  // start of a non-capturing group<br></td></tr
><tr
id=sl_svn20_350

><td class="source">              + &#39;|[\\(\\)\\^]&#39;  // start/emd of a group, or line start<br></td></tr
><tr
id=sl_svn20_351

><td class="source">              + &#39;|[^\\x5B\\x5C\\(\\)\\^]+&#39;  // run of other characters<br></td></tr
><tr
id=sl_svn20_352

><td class="source">              + &#39;)&#39;,<br></td></tr
><tr
id=sl_svn20_353

><td class="source">              &#39;g&#39;));<br></td></tr
><tr
id=sl_svn20_354

><td class="source">      var n = parts.length;<br></td></tr
><tr
id=sl_svn20_355

><td class="source">  <br></td></tr
><tr
id=sl_svn20_356

><td class="source">      // Maps captured group numbers to the number they will occupy in<br></td></tr
><tr
id=sl_svn20_357

><td class="source">      // the output or to -1 if that has not been determined, or to<br></td></tr
><tr
id=sl_svn20_358

><td class="source">      // undefined if they need not be capturing in the output.<br></td></tr
><tr
id=sl_svn20_359

><td class="source">      var capturedGroups = [];<br></td></tr
><tr
id=sl_svn20_360

><td class="source">  <br></td></tr
><tr
id=sl_svn20_361

><td class="source">      // Walk over and identify back references to build the capturedGroups<br></td></tr
><tr
id=sl_svn20_362

><td class="source">      // mapping.<br></td></tr
><tr
id=sl_svn20_363

><td class="source">      for (var i = 0, groupIndex = 0; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_364

><td class="source">        var p = parts[i];<br></td></tr
><tr
id=sl_svn20_365

><td class="source">        if (p === &#39;(&#39;) {<br></td></tr
><tr
id=sl_svn20_366

><td class="source">          // groups are 1-indexed, so max group index is count of &#39;(&#39;<br></td></tr
><tr
id=sl_svn20_367

><td class="source">          ++groupIndex;<br></td></tr
><tr
id=sl_svn20_368

><td class="source">        } else if (&#39;\\&#39; === p.charAt(0)) {<br></td></tr
><tr
id=sl_svn20_369

><td class="source">          var decimalValue = +p.substring(1);<br></td></tr
><tr
id=sl_svn20_370

><td class="source">          if (decimalValue &amp;&amp; decimalValue &lt;= groupIndex) {<br></td></tr
><tr
id=sl_svn20_371

><td class="source">            capturedGroups[decimalValue] = -1;<br></td></tr
><tr
id=sl_svn20_372

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_373

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_374

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_375

><td class="source">  <br></td></tr
><tr
id=sl_svn20_376

><td class="source">      // Renumber groups and reduce capturing groups to non-capturing groups<br></td></tr
><tr
id=sl_svn20_377

><td class="source">      // where possible.<br></td></tr
><tr
id=sl_svn20_378

><td class="source">      for (var i = 1; i &lt; capturedGroups.length; ++i) {<br></td></tr
><tr
id=sl_svn20_379

><td class="source">        if (-1 === capturedGroups[i]) {<br></td></tr
><tr
id=sl_svn20_380

><td class="source">          capturedGroups[i] = ++capturedGroupIndex;<br></td></tr
><tr
id=sl_svn20_381

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_382

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_383

><td class="source">      for (var i = 0, groupIndex = 0; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_384

><td class="source">        var p = parts[i];<br></td></tr
><tr
id=sl_svn20_385

><td class="source">        if (p === &#39;(&#39;) {<br></td></tr
><tr
id=sl_svn20_386

><td class="source">          ++groupIndex;<br></td></tr
><tr
id=sl_svn20_387

><td class="source">          if (capturedGroups[groupIndex] === undefined) {<br></td></tr
><tr
id=sl_svn20_388

><td class="source">            parts[i] = &#39;(?:&#39;;<br></td></tr
><tr
id=sl_svn20_389

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_390

><td class="source">        } else if (&#39;\\&#39; === p.charAt(0)) {<br></td></tr
><tr
id=sl_svn20_391

><td class="source">          var decimalValue = +p.substring(1);<br></td></tr
><tr
id=sl_svn20_392

><td class="source">          if (decimalValue &amp;&amp; decimalValue &lt;= groupIndex) {<br></td></tr
><tr
id=sl_svn20_393

><td class="source">            parts[i] = &#39;\\&#39; + capturedGroups[groupIndex];<br></td></tr
><tr
id=sl_svn20_394

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_395

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_396

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_397

><td class="source">  <br></td></tr
><tr
id=sl_svn20_398

><td class="source">      // Remove any prefix anchors so that the output will match anywhere.<br></td></tr
><tr
id=sl_svn20_399

><td class="source">      // ^^ really does mean an anchored match though.<br></td></tr
><tr
id=sl_svn20_400

><td class="source">      for (var i = 0, groupIndex = 0; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_401

><td class="source">        if (&#39;^&#39; === parts[i] &amp;&amp; &#39;^&#39; !== parts[i + 1]) { parts[i] = &#39;&#39;; }<br></td></tr
><tr
id=sl_svn20_402

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_403

><td class="source">  <br></td></tr
><tr
id=sl_svn20_404

><td class="source">      // Expand letters to groups to handle mixing of case-sensitive and<br></td></tr
><tr
id=sl_svn20_405

><td class="source">      // case-insensitive patterns if necessary.<br></td></tr
><tr
id=sl_svn20_406

><td class="source">      if (regex.ignoreCase &amp;&amp; needToFoldCase) {<br></td></tr
><tr
id=sl_svn20_407

><td class="source">        for (var i = 0; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_408

><td class="source">          var p = parts[i];<br></td></tr
><tr
id=sl_svn20_409

><td class="source">          var ch0 = p.charAt(0);<br></td></tr
><tr
id=sl_svn20_410

><td class="source">          if (p.length &gt;= 2 &amp;&amp; ch0 === &#39;[&#39;) {<br></td></tr
><tr
id=sl_svn20_411

><td class="source">            parts[i] = caseFoldCharset(p);<br></td></tr
><tr
id=sl_svn20_412

><td class="source">          } else if (ch0 !== &#39;\\&#39;) {<br></td></tr
><tr
id=sl_svn20_413

><td class="source">            // TODO: handle letters in numeric escapes.<br></td></tr
><tr
id=sl_svn20_414

><td class="source">            parts[i] = p.replace(<br></td></tr
><tr
id=sl_svn20_415

><td class="source">                /[a-zA-Z]/g,<br></td></tr
><tr
id=sl_svn20_416

><td class="source">                function (ch) {<br></td></tr
><tr
id=sl_svn20_417

><td class="source">                  var cc = ch.charCodeAt(0);<br></td></tr
><tr
id=sl_svn20_418

><td class="source">                  return &#39;[&#39; + String.fromCharCode(cc &amp; ~32, cc | 32) + &#39;]&#39;;<br></td></tr
><tr
id=sl_svn20_419

><td class="source">                });<br></td></tr
><tr
id=sl_svn20_420

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_421

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_422

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_423

><td class="source">  <br></td></tr
><tr
id=sl_svn20_424

><td class="source">      return parts.join(&#39;&#39;);<br></td></tr
><tr
id=sl_svn20_425

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_426

><td class="source">  <br></td></tr
><tr
id=sl_svn20_427

><td class="source">    var rewritten = [];<br></td></tr
><tr
id=sl_svn20_428

><td class="source">    for (var i = 0, n = regexs.length; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_429

><td class="source">      var regex = regexs[i];<br></td></tr
><tr
id=sl_svn20_430

><td class="source">      if (regex.global || regex.multiline) { throw new Error(&#39;&#39; + regex); }<br></td></tr
><tr
id=sl_svn20_431

><td class="source">      rewritten.push(<br></td></tr
><tr
id=sl_svn20_432

><td class="source">          &#39;(?:&#39; + allowAnywhereFoldCaseAndRenumberGroups(regex) + &#39;)&#39;);<br></td></tr
><tr
id=sl_svn20_433

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_434

><td class="source">  <br></td></tr
><tr
id=sl_svn20_435

><td class="source">    return new RegExp(rewritten.join(&#39;|&#39;), ignoreCase ? &#39;gi&#39; : &#39;g&#39;);<br></td></tr
><tr
id=sl_svn20_436

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_437

><td class="source"><br></td></tr
><tr
id=sl_svn20_438

><td class="source"><br></td></tr
><tr
id=sl_svn20_439

><td class="source">  /**<br></td></tr
><tr
id=sl_svn20_440

><td class="source">   * Split markup into a string of source code and an array mapping ranges in<br></td></tr
><tr
id=sl_svn20_441

><td class="source">   * that string to the text nodes in which they appear.<br></td></tr
><tr
id=sl_svn20_442

><td class="source">   *<br></td></tr
><tr
id=sl_svn20_443

><td class="source">   * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_444

><td class="source">   * The HTML DOM structure:&lt;/p&gt;<br></td></tr
><tr
id=sl_svn20_445

><td class="source">   * &lt;pre&gt;<br></td></tr
><tr
id=sl_svn20_446

><td class="source">   * (Element   &quot;p&quot;<br></td></tr
><tr
id=sl_svn20_447

><td class="source">   *   (Element &quot;b&quot;<br></td></tr
><tr
id=sl_svn20_448

><td class="source">   *     (Text  &quot;print &quot;))       ; #1<br></td></tr
><tr
id=sl_svn20_449

><td class="source">   *   (Text    &quot;&#39;Hello &#39;&quot;)      ; #2<br></td></tr
><tr
id=sl_svn20_450

><td class="source">   *   (Element &quot;br&quot;)            ; #3<br></td></tr
><tr
id=sl_svn20_451

><td class="source">   *   (Text    &quot;  + &#39;World&#39;;&quot;)) ; #4<br></td></tr
><tr
id=sl_svn20_452

><td class="source">   * &lt;/pre&gt;<br></td></tr
><tr
id=sl_svn20_453

><td class="source">   * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_454

><td class="source">   * corresponds to the HTML<br></td></tr
><tr
id=sl_svn20_455

><td class="source">   * {@code &lt;p&gt;&lt;b&gt;print &lt;/b&gt;&#39;Hello &#39;&lt;br&gt;  + &#39;World&#39;;&lt;/p&gt;}.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn20_456

><td class="source">   *<br></td></tr
><tr
id=sl_svn20_457

><td class="source">   * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_458

><td class="source">   * It will produce the output:&lt;/p&gt;<br></td></tr
><tr
id=sl_svn20_459

><td class="source">   * &lt;pre&gt;<br></td></tr
><tr
id=sl_svn20_460

><td class="source">   * {<br></td></tr
><tr
id=sl_svn20_461

><td class="source">   *   source: &quot;print &#39;Hello &#39;\n  + &#39;World&#39;;&quot;,<br></td></tr
><tr
id=sl_svn20_462

><td class="source">   *   //                 1         2<br></td></tr
><tr
id=sl_svn20_463

><td class="source">   *   //       012345678901234 5678901234567<br></td></tr
><tr
id=sl_svn20_464

><td class="source">   *   spans: [0, #1, 6, #2, 14, #3, 15, #4]<br></td></tr
><tr
id=sl_svn20_465

><td class="source">   * }<br></td></tr
><tr
id=sl_svn20_466

><td class="source">   * &lt;/pre&gt;<br></td></tr
><tr
id=sl_svn20_467

><td class="source">   * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_468

><td class="source">   * where #1 is a reference to the {@code &quot;print &quot;} text node above, and so<br></td></tr
><tr
id=sl_svn20_469

><td class="source">   * on for the other text nodes.<br></td></tr
><tr
id=sl_svn20_470

><td class="source">   * &lt;/p&gt;<br></td></tr
><tr
id=sl_svn20_471

><td class="source">   *<br></td></tr
><tr
id=sl_svn20_472

><td class="source">   * &lt;p&gt;<br></td></tr
><tr
id=sl_svn20_473

><td class="source">   * The {@code} spans array is an array of pairs.  Even elements are the start<br></td></tr
><tr
id=sl_svn20_474

><td class="source">   * indices of substrings, and odd elements are the text nodes (or BR elements)<br></td></tr
><tr
id=sl_svn20_475

><td class="source">   * that contain the text for those substrings.<br></td></tr
><tr
id=sl_svn20_476

><td class="source">   * Substrings continue until the next index or the end of the source.<br></td></tr
><tr
id=sl_svn20_477

><td class="source">   * &lt;/p&gt;<br></td></tr
><tr
id=sl_svn20_478

><td class="source">   *<br></td></tr
><tr
id=sl_svn20_479

><td class="source">   * @param {Node} node an HTML DOM subtree containing source-code.<br></td></tr
><tr
id=sl_svn20_480

><td class="source">   * @return {Object} source code and the text nodes in which they occur.<br></td></tr
><tr
id=sl_svn20_481

><td class="source">   */<br></td></tr
><tr
id=sl_svn20_482

><td class="source">  function extractSourceSpans(node) {<br></td></tr
><tr
id=sl_svn20_483

><td class="source">    var nocode = /(?:^|\s)nocode(?:\s|$)/;<br></td></tr
><tr
id=sl_svn20_484

><td class="source">  <br></td></tr
><tr
id=sl_svn20_485

><td class="source">    var chunks = [];<br></td></tr
><tr
id=sl_svn20_486

><td class="source">    var length = 0;<br></td></tr
><tr
id=sl_svn20_487

><td class="source">    var spans = [];<br></td></tr
><tr
id=sl_svn20_488

><td class="source">    var k = 0;<br></td></tr
><tr
id=sl_svn20_489

><td class="source">  <br></td></tr
><tr
id=sl_svn20_490

><td class="source">    var whitespace;<br></td></tr
><tr
id=sl_svn20_491

><td class="source">    if (node.currentStyle) {<br></td></tr
><tr
id=sl_svn20_492

><td class="source">      whitespace = node.currentStyle.whiteSpace;<br></td></tr
><tr
id=sl_svn20_493

><td class="source">    } else if (window.getComputedStyle) {<br></td></tr
><tr
id=sl_svn20_494

><td class="source">      whitespace = document.defaultView.getComputedStyle(node, null)<br></td></tr
><tr
id=sl_svn20_495

><td class="source">          .getPropertyValue(&#39;white-space&#39;);<br></td></tr
><tr
id=sl_svn20_496

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_497

><td class="source">    var isPreformatted = whitespace &amp;&amp; &#39;pre&#39; === whitespace.substring(0, 3);<br></td></tr
><tr
id=sl_svn20_498

><td class="source">  <br></td></tr
><tr
id=sl_svn20_499

><td class="source">    function walk(node) {<br></td></tr
><tr
id=sl_svn20_500

><td class="source">      switch (node.nodeType) {<br></td></tr
><tr
id=sl_svn20_501

><td class="source">        case 1:  // Element<br></td></tr
><tr
id=sl_svn20_502

><td class="source">          if (nocode.test(node.className)) { return; }<br></td></tr
><tr
id=sl_svn20_503

><td class="source">          for (var child = node.firstChild; child; child = child.nextSibling) {<br></td></tr
><tr
id=sl_svn20_504

><td class="source">            walk(child);<br></td></tr
><tr
id=sl_svn20_505

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_506

><td class="source">          var nodeName = node.nodeName;<br></td></tr
><tr
id=sl_svn20_507

><td class="source">          if (&#39;BR&#39; === nodeName || &#39;LI&#39; === nodeName) {<br></td></tr
><tr
id=sl_svn20_508

><td class="source">            chunks[k] = &#39;\n&#39;;<br></td></tr
><tr
id=sl_svn20_509

><td class="source">            spans[k &lt;&lt; 1] = length++;<br></td></tr
><tr
id=sl_svn20_510

><td class="source">            spans[(k++ &lt;&lt; 1) | 1] = node;<br></td></tr
><tr
id=sl_svn20_511

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_512

><td class="source">          break;<br></td></tr
><tr
id=sl_svn20_513

><td class="source">        case 3: case 4:  // Text<br></td></tr
><tr
id=sl_svn20_514

><td class="source">          var text = node.nodeValue;<br></td></tr
><tr
id=sl_svn20_515

><td class="source">          if (text.length) {<br></td></tr
><tr
id=sl_svn20_516

><td class="source">            if (!isPreformatted) {<br></td></tr
><tr
id=sl_svn20_517

><td class="source">              text = text.replace(/[ \t\r\n]+/g, &#39; &#39;);<br></td></tr
><tr
id=sl_svn20_518

><td class="source">            } else {<br></td></tr
><tr
id=sl_svn20_519

><td class="source">              text = text.replace(/\r\n?/g, &#39;\n&#39;);  // Normalize newlines.<br></td></tr
><tr
id=sl_svn20_520

><td class="source">            }<br></td></tr
><tr
id=sl_svn20_521

><td class="source">            // TODO: handle tabs here?<br></td></tr
><tr
id=sl_svn20_522

><td class="source">            chunks[k] = text;<br></td></tr
><tr
id=sl_svn20_523

><td class="source">            spans[k &lt;&lt; 1] = length;<br></td></tr
><tr
id=sl_svn20_524

><td class="source">            length += text.length;<br></td></tr
><tr
id=sl_svn20_525

><td class="source">            spans[(k++ &lt;&lt; 1) | 1] = node;<br></td></tr
><tr
id=sl_svn20_526

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_527

><td class="source">          break;<br></td></tr
><tr
id=sl_svn20_528

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_529

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_530

><td class="source">  <br></td></tr
><tr
id=sl_svn20_531

><td class="source">    walk(node);<br></td></tr
><tr
id=sl_svn20_532

><td class="source">  <br></td></tr
><tr
id=sl_svn20_533

><td class="source">    return {<br></td></tr
><tr
id=sl_svn20_534

><td class="source">      source: chunks.join(&#39;&#39;).replace(/\n$/, &#39;&#39;),<br></td></tr
><tr
id=sl_svn20_535

><td class="source">      spans: spans<br></td></tr
><tr
id=sl_svn20_536

><td class="source">    };<br></td></tr
><tr
id=sl_svn20_537

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_538

><td class="source"><br></td></tr
><tr
id=sl_svn20_539

><td class="source"><br></td></tr
><tr
id=sl_svn20_540

><td class="source">  /**<br></td></tr
><tr
id=sl_svn20_541

><td class="source">   * Apply the given language handler to sourceCode and add the resulting<br></td></tr
><tr
id=sl_svn20_542

><td class="source">   * decorations to out.<br></td></tr
><tr
id=sl_svn20_543

><td class="source">   * @param {number} basePos the index of sourceCode within the chunk of source<br></td></tr
><tr
id=sl_svn20_544

><td class="source">   *    whose decorations are already present on out.<br></td></tr
><tr
id=sl_svn20_545

><td class="source">   */<br></td></tr
><tr
id=sl_svn20_546

><td class="source">  function appendDecorations(basePos, sourceCode, langHandler, out) {<br></td></tr
><tr
id=sl_svn20_547

><td class="source">    if (!sourceCode) { return; }<br></td></tr
><tr
id=sl_svn20_548

><td class="source">    var job = {<br></td></tr
><tr
id=sl_svn20_549

><td class="source">      source: sourceCode,<br></td></tr
><tr
id=sl_svn20_550

><td class="source">      basePos: basePos<br></td></tr
><tr
id=sl_svn20_551

><td class="source">    };<br></td></tr
><tr
id=sl_svn20_552

><td class="source">    langHandler(job);<br></td></tr
><tr
id=sl_svn20_553

><td class="source">    out.push.apply(out, job.decorations);<br></td></tr
><tr
id=sl_svn20_554

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_555

><td class="source"><br></td></tr
><tr
id=sl_svn20_556

><td class="source">  /** Given triples of [style, pattern, context] returns a lexing function,<br></td></tr
><tr
id=sl_svn20_557

><td class="source">    * The lexing function interprets the patterns to find token boundaries and<br></td></tr
><tr
id=sl_svn20_558

><td class="source">    * returns a decoration list of the form<br></td></tr
><tr
id=sl_svn20_559

><td class="source">    * [index_0, style_0, index_1, style_1, ..., index_n, style_n]<br></td></tr
><tr
id=sl_svn20_560

><td class="source">    * where index_n is an index into the sourceCode, and style_n is a style<br></td></tr
><tr
id=sl_svn20_561

><td class="source">    * constant like PR_PLAIN.  index_n-1 &lt;= index_n, and style_n-1 applies to<br></td></tr
><tr
id=sl_svn20_562

><td class="source">    * all characters in sourceCode[index_n-1:index_n].<br></td></tr
><tr
id=sl_svn20_563

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_564

><td class="source">    * The stylePatterns is a list whose elements have the form<br></td></tr
><tr
id=sl_svn20_565

><td class="source">    * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].<br></td></tr
><tr
id=sl_svn20_566

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_567

><td class="source">    * Style is a style constant like PR_PLAIN, or can be a string of the<br></td></tr
><tr
id=sl_svn20_568

><td class="source">    * form &#39;lang-FOO&#39;, where FOO is a language extension describing the<br></td></tr
><tr
id=sl_svn20_569

><td class="source">    * language of the portion of the token in $1 after pattern executes.<br></td></tr
><tr
id=sl_svn20_570

><td class="source">    * E.g., if style is &#39;lang-lisp&#39;, and group 1 contains the text<br></td></tr
><tr
id=sl_svn20_571

><td class="source">    * &#39;(hello (world))&#39;, then that portion of the token will be passed to the<br></td></tr
><tr
id=sl_svn20_572

><td class="source">    * registered lisp handler for formatting.<br></td></tr
><tr
id=sl_svn20_573

><td class="source">    * The text before and after group 1 will be restyled using this decorator<br></td></tr
><tr
id=sl_svn20_574

><td class="source">    * so decorators should take care that this doesn&#39;t result in infinite<br></td></tr
><tr
id=sl_svn20_575

><td class="source">    * recursion.  For example, the HTML lexer rule for SCRIPT elements looks<br></td></tr
><tr
id=sl_svn20_576

><td class="source">    * something like [&#39;lang-js&#39;, /&lt;[s]cript&gt;(.+?)&lt;\/script&gt;/].  This may match<br></td></tr
><tr
id=sl_svn20_577

><td class="source">    * &#39;&lt;script&gt;foo()&lt;\/script&gt;&#39;, which would cause the current decorator to<br></td></tr
><tr
id=sl_svn20_578

><td class="source">    * be called with &#39;&lt;script&gt;&#39; which would not match the same rule since<br></td></tr
><tr
id=sl_svn20_579

><td class="source">    * group 1 must not be empty, so it would be instead styled as PR_TAG by<br></td></tr
><tr
id=sl_svn20_580

><td class="source">    * the generic tag rule.  The handler registered for the &#39;js&#39; extension would<br></td></tr
><tr
id=sl_svn20_581

><td class="source">    * then be called with &#39;foo()&#39;, and finally, the current decorator would<br></td></tr
><tr
id=sl_svn20_582

><td class="source">    * be called with &#39;&lt;\/script&gt;&#39; which would not match the original rule and<br></td></tr
><tr
id=sl_svn20_583

><td class="source">    * so the generic tag rule would identify it as a tag.<br></td></tr
><tr
id=sl_svn20_584

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_585

><td class="source">    * Pattern must only match prefixes, and if it matches a prefix, then that<br></td></tr
><tr
id=sl_svn20_586

><td class="source">    * match is considered a token with the same style.<br></td></tr
><tr
id=sl_svn20_587

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_588

><td class="source">    * Context is applied to the last non-whitespace, non-comment token<br></td></tr
><tr
id=sl_svn20_589

><td class="source">    * recognized.<br></td></tr
><tr
id=sl_svn20_590

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_591

><td class="source">    * Shortcut is an optional string of characters, any of which, if the first<br></td></tr
><tr
id=sl_svn20_592

><td class="source">    * character, gurantee that this pattern and only this pattern matches.<br></td></tr
><tr
id=sl_svn20_593

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_594

><td class="source">    * @param {Array} shortcutStylePatterns patterns that always start with<br></td></tr
><tr
id=sl_svn20_595

><td class="source">    *   a known character.  Must have a shortcut string.<br></td></tr
><tr
id=sl_svn20_596

><td class="source">    * @param {Array} fallthroughStylePatterns patterns that will be tried in<br></td></tr
><tr
id=sl_svn20_597

><td class="source">    *   order if the shortcut ones fail.  May have shortcuts.<br></td></tr
><tr
id=sl_svn20_598

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_599

><td class="source">    * @return {function (Object)} a<br></td></tr
><tr
id=sl_svn20_600

><td class="source">    *   function that takes source code and returns a list of decorations.<br></td></tr
><tr
id=sl_svn20_601

><td class="source">    */<br></td></tr
><tr
id=sl_svn20_602

><td class="source">  function createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns) {<br></td></tr
><tr
id=sl_svn20_603

><td class="source">    var shortcuts = {};<br></td></tr
><tr
id=sl_svn20_604

><td class="source">    var tokenizer;<br></td></tr
><tr
id=sl_svn20_605

><td class="source">    (function () {<br></td></tr
><tr
id=sl_svn20_606

><td class="source">      var allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns);<br></td></tr
><tr
id=sl_svn20_607

><td class="source">      var allRegexs = [];<br></td></tr
><tr
id=sl_svn20_608

><td class="source">      var regexKeys = {};<br></td></tr
><tr
id=sl_svn20_609

><td class="source">      for (var i = 0, n = allPatterns.length; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_610

><td class="source">        var patternParts = allPatterns[i];<br></td></tr
><tr
id=sl_svn20_611

><td class="source">        var shortcutChars = patternParts[3];<br></td></tr
><tr
id=sl_svn20_612

><td class="source">        if (shortcutChars) {<br></td></tr
><tr
id=sl_svn20_613

><td class="source">          for (var c = shortcutChars.length; --c &gt;= 0;) {<br></td></tr
><tr
id=sl_svn20_614

><td class="source">            shortcuts[shortcutChars.charAt(c)] = patternParts;<br></td></tr
><tr
id=sl_svn20_615

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_616

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_617

><td class="source">        var regex = patternParts[1];<br></td></tr
><tr
id=sl_svn20_618

><td class="source">        var k = &#39;&#39; + regex;<br></td></tr
><tr
id=sl_svn20_619

><td class="source">        if (!regexKeys.hasOwnProperty(k)) {<br></td></tr
><tr
id=sl_svn20_620

><td class="source">          allRegexs.push(regex);<br></td></tr
><tr
id=sl_svn20_621

><td class="source">          regexKeys[k] = null;<br></td></tr
><tr
id=sl_svn20_622

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_623

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_624

><td class="source">      allRegexs.push(/[\0-\uffff]/);<br></td></tr
><tr
id=sl_svn20_625

><td class="source">      tokenizer = combinePrefixPatterns(allRegexs);<br></td></tr
><tr
id=sl_svn20_626

><td class="source">    })();<br></td></tr
><tr
id=sl_svn20_627

><td class="source"><br></td></tr
><tr
id=sl_svn20_628

><td class="source">    var nPatterns = fallthroughStylePatterns.length;<br></td></tr
><tr
id=sl_svn20_629

><td class="source">    var notWs = /\S/;<br></td></tr
><tr
id=sl_svn20_630

><td class="source"><br></td></tr
><tr
id=sl_svn20_631

><td class="source">    /**<br></td></tr
><tr
id=sl_svn20_632

><td class="source">     * Lexes job.source and produces an output array job.decorations of style<br></td></tr
><tr
id=sl_svn20_633

><td class="source">     * classes preceded by the position at which they start in job.source in<br></td></tr
><tr
id=sl_svn20_634

><td class="source">     * order.<br></td></tr
><tr
id=sl_svn20_635

><td class="source">     *<br></td></tr
><tr
id=sl_svn20_636

><td class="source">     * @param {Object} job an object like {@code<br></td></tr
><tr
id=sl_svn20_637

><td class="source">     *    source: {string} sourceText plain text,<br></td></tr
><tr
id=sl_svn20_638

><td class="source">     *    basePos: {int} position of job.source in the larger chunk of<br></td></tr
><tr
id=sl_svn20_639

><td class="source">     *        sourceCode.<br></td></tr
><tr
id=sl_svn20_640

><td class="source">     * }<br></td></tr
><tr
id=sl_svn20_641

><td class="source">     */<br></td></tr
><tr
id=sl_svn20_642

><td class="source">    var decorate = function (job) {<br></td></tr
><tr
id=sl_svn20_643

><td class="source">      var sourceCode = job.source, basePos = job.basePos;<br></td></tr
><tr
id=sl_svn20_644

><td class="source">      /** Even entries are positions in source in ascending order.  Odd enties<br></td></tr
><tr
id=sl_svn20_645

><td class="source">        * are style markers (e.g., PR_COMMENT) that run from that position until<br></td></tr
><tr
id=sl_svn20_646

><td class="source">        * the end.<br></td></tr
><tr
id=sl_svn20_647

><td class="source">        * @type {Array.&lt;number|string&gt;}<br></td></tr
><tr
id=sl_svn20_648

><td class="source">        */<br></td></tr
><tr
id=sl_svn20_649

><td class="source">      var decorations = [basePos, PR_PLAIN];<br></td></tr
><tr
id=sl_svn20_650

><td class="source">      var pos = 0;  // index into sourceCode<br></td></tr
><tr
id=sl_svn20_651

><td class="source">      var tokens = sourceCode.match(tokenizer) || [];<br></td></tr
><tr
id=sl_svn20_652

><td class="source">      var styleCache = {};<br></td></tr
><tr
id=sl_svn20_653

><td class="source"><br></td></tr
><tr
id=sl_svn20_654

><td class="source">      for (var ti = 0, nTokens = tokens.length; ti &lt; nTokens; ++ti) {<br></td></tr
><tr
id=sl_svn20_655

><td class="source">        var token = tokens[ti];<br></td></tr
><tr
id=sl_svn20_656

><td class="source">        var style = styleCache[token];<br></td></tr
><tr
id=sl_svn20_657

><td class="source">        var match = void 0;<br></td></tr
><tr
id=sl_svn20_658

><td class="source"><br></td></tr
><tr
id=sl_svn20_659

><td class="source">        var isEmbedded;<br></td></tr
><tr
id=sl_svn20_660

><td class="source">        if (typeof style === &#39;string&#39;) {<br></td></tr
><tr
id=sl_svn20_661

><td class="source">          isEmbedded = false;<br></td></tr
><tr
id=sl_svn20_662

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn20_663

><td class="source">          var patternParts = shortcuts[token.charAt(0)];<br></td></tr
><tr
id=sl_svn20_664

><td class="source">          if (patternParts) {<br></td></tr
><tr
id=sl_svn20_665

><td class="source">            match = token.match(patternParts[1]);<br></td></tr
><tr
id=sl_svn20_666

><td class="source">            style = patternParts[0];<br></td></tr
><tr
id=sl_svn20_667

><td class="source">          } else {<br></td></tr
><tr
id=sl_svn20_668

><td class="source">            for (var i = 0; i &lt; nPatterns; ++i) {<br></td></tr
><tr
id=sl_svn20_669

><td class="source">              patternParts = fallthroughStylePatterns[i];<br></td></tr
><tr
id=sl_svn20_670

><td class="source">              match = token.match(patternParts[1]);<br></td></tr
><tr
id=sl_svn20_671

><td class="source">              if (match) {<br></td></tr
><tr
id=sl_svn20_672

><td class="source">                style = patternParts[0];<br></td></tr
><tr
id=sl_svn20_673

><td class="source">                break;<br></td></tr
><tr
id=sl_svn20_674

><td class="source">              }<br></td></tr
><tr
id=sl_svn20_675

><td class="source">            }<br></td></tr
><tr
id=sl_svn20_676

><td class="source"><br></td></tr
><tr
id=sl_svn20_677

><td class="source">            if (!match) {  // make sure that we make progress<br></td></tr
><tr
id=sl_svn20_678

><td class="source">              style = PR_PLAIN;<br></td></tr
><tr
id=sl_svn20_679

><td class="source">            }<br></td></tr
><tr
id=sl_svn20_680

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_681

><td class="source"><br></td></tr
><tr
id=sl_svn20_682

><td class="source">          isEmbedded = style.length &gt;= 5 &amp;&amp; &#39;lang-&#39; === style.substring(0, 5);<br></td></tr
><tr
id=sl_svn20_683

><td class="source">          if (isEmbedded &amp;&amp; !(match &amp;&amp; typeof match[1] === &#39;string&#39;)) {<br></td></tr
><tr
id=sl_svn20_684

><td class="source">            isEmbedded = false;<br></td></tr
><tr
id=sl_svn20_685

><td class="source">            style = PR_SOURCE;<br></td></tr
><tr
id=sl_svn20_686

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_687

><td class="source"><br></td></tr
><tr
id=sl_svn20_688

><td class="source">          if (!isEmbedded) { styleCache[token] = style; }<br></td></tr
><tr
id=sl_svn20_689

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_690

><td class="source"><br></td></tr
><tr
id=sl_svn20_691

><td class="source">        var tokenStart = pos;<br></td></tr
><tr
id=sl_svn20_692

><td class="source">        pos += token.length;<br></td></tr
><tr
id=sl_svn20_693

><td class="source"><br></td></tr
><tr
id=sl_svn20_694

><td class="source">        if (!isEmbedded) {<br></td></tr
><tr
id=sl_svn20_695

><td class="source">          decorations.push(basePos + tokenStart, style);<br></td></tr
><tr
id=sl_svn20_696

><td class="source">        } else {  // Treat group 1 as an embedded block of source code.<br></td></tr
><tr
id=sl_svn20_697

><td class="source">          var embeddedSource = match[1];<br></td></tr
><tr
id=sl_svn20_698

><td class="source">          var embeddedSourceStart = token.indexOf(embeddedSource);<br></td></tr
><tr
id=sl_svn20_699

><td class="source">          var embeddedSourceEnd = embeddedSourceStart + embeddedSource.length;<br></td></tr
><tr
id=sl_svn20_700

><td class="source">          if (match[2]) {<br></td></tr
><tr
id=sl_svn20_701

><td class="source">            // If embeddedSource can be blank, then it would match at the<br></td></tr
><tr
id=sl_svn20_702

><td class="source">            // beginning which would cause us to infinitely recurse on the<br></td></tr
><tr
id=sl_svn20_703

><td class="source">            // entire token, so we catch the right context in match[2].<br></td></tr
><tr
id=sl_svn20_704

><td class="source">            embeddedSourceEnd = token.length - match[2].length;<br></td></tr
><tr
id=sl_svn20_705

><td class="source">            embeddedSourceStart = embeddedSourceEnd - embeddedSource.length;<br></td></tr
><tr
id=sl_svn20_706

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_707

><td class="source">          var lang = style.substring(5);<br></td></tr
><tr
id=sl_svn20_708

><td class="source">          // Decorate the left of the embedded source<br></td></tr
><tr
id=sl_svn20_709

><td class="source">          appendDecorations(<br></td></tr
><tr
id=sl_svn20_710

><td class="source">              basePos + tokenStart,<br></td></tr
><tr
id=sl_svn20_711

><td class="source">              token.substring(0, embeddedSourceStart),<br></td></tr
><tr
id=sl_svn20_712

><td class="source">              decorate, decorations);<br></td></tr
><tr
id=sl_svn20_713

><td class="source">          // Decorate the embedded source<br></td></tr
><tr
id=sl_svn20_714

><td class="source">          appendDecorations(<br></td></tr
><tr
id=sl_svn20_715

><td class="source">              basePos + tokenStart + embeddedSourceStart,<br></td></tr
><tr
id=sl_svn20_716

><td class="source">              embeddedSource,<br></td></tr
><tr
id=sl_svn20_717

><td class="source">              langHandlerForExtension(lang, embeddedSource),<br></td></tr
><tr
id=sl_svn20_718

><td class="source">              decorations);<br></td></tr
><tr
id=sl_svn20_719

><td class="source">          // Decorate the right of the embedded section<br></td></tr
><tr
id=sl_svn20_720

><td class="source">          appendDecorations(<br></td></tr
><tr
id=sl_svn20_721

><td class="source">              basePos + tokenStart + embeddedSourceEnd,<br></td></tr
><tr
id=sl_svn20_722

><td class="source">              token.substring(embeddedSourceEnd),<br></td></tr
><tr
id=sl_svn20_723

><td class="source">              decorate, decorations);<br></td></tr
><tr
id=sl_svn20_724

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_725

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_726

><td class="source">      job.decorations = decorations;<br></td></tr
><tr
id=sl_svn20_727

><td class="source">    };<br></td></tr
><tr
id=sl_svn20_728

><td class="source">    return decorate;<br></td></tr
><tr
id=sl_svn20_729

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_730

><td class="source"><br></td></tr
><tr
id=sl_svn20_731

><td class="source">  /** returns a function that produces a list of decorations from source text.<br></td></tr
><tr
id=sl_svn20_732

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_733

><td class="source">    * This code treats &quot;, &#39;, and ` as string delimiters, and \ as a string<br></td></tr
><tr
id=sl_svn20_734

><td class="source">    * escape.  It does not recognize perl&#39;s qq() style strings.<br></td></tr
><tr
id=sl_svn20_735

><td class="source">    * It has no special handling for double delimiter escapes as in basic, or<br></td></tr
><tr
id=sl_svn20_736

><td class="source">    * the tripled delimiters used in python, but should work on those regardless<br></td></tr
><tr
id=sl_svn20_737

><td class="source">    * although in those cases a single string literal may be broken up into<br></td></tr
><tr
id=sl_svn20_738

><td class="source">    * multiple adjacent string literals.<br></td></tr
><tr
id=sl_svn20_739

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_740

><td class="source">    * It recognizes C, C++, and shell style comments.<br></td></tr
><tr
id=sl_svn20_741

><td class="source">    *<br></td></tr
><tr
id=sl_svn20_742

><td class="source">    * @param {Object} options a set of optional parameters.<br></td></tr
><tr
id=sl_svn20_743

><td class="source">    * @return {function (Object)} a function that examines the source code<br></td></tr
><tr
id=sl_svn20_744

><td class="source">    *     in the input job and builds the decoration list.<br></td></tr
><tr
id=sl_svn20_745

><td class="source">    */<br></td></tr
><tr
id=sl_svn20_746

><td class="source">  function sourceDecorator(options) {<br></td></tr
><tr
id=sl_svn20_747

><td class="source">    var shortcutStylePatterns = [], fallthroughStylePatterns = [];<br></td></tr
><tr
id=sl_svn20_748

><td class="source">    if (options[&#39;tripleQuotedStrings&#39;]) {<br></td></tr
><tr
id=sl_svn20_749

><td class="source">      // &#39;&#39;&#39;multi-line-string&#39;&#39;&#39;, &#39;single-line-string&#39;, and double-quoted<br></td></tr
><tr
id=sl_svn20_750

><td class="source">      shortcutStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_751

><td class="source">          [PR_STRING,  /^(?:\&#39;\&#39;\&#39;(?:[^\&#39;\\]|\\[\s\S]|\&#39;{1,2}(?=[^\&#39;]))*(?:\&#39;\&#39;\&#39;|$)|\&quot;\&quot;\&quot;(?:[^\&quot;\\]|\\[\s\S]|\&quot;{1,2}(?=[^\&quot;]))*(?:\&quot;\&quot;\&quot;|$)|\&#39;(?:[^\\\&#39;]|\\[\s\S])*(?:\&#39;|$)|\&quot;(?:[^\\\&quot;]|\\[\s\S])*(?:\&quot;|$))/,<br></td></tr
><tr
id=sl_svn20_752

><td class="source">           null, &#39;\&#39;&quot;&#39;]);<br></td></tr
><tr
id=sl_svn20_753

><td class="source">    } else if (options[&#39;multiLineStrings&#39;]) {<br></td></tr
><tr
id=sl_svn20_754

><td class="source">      // &#39;multi-line-string&#39;, &quot;multi-line-string&quot;<br></td></tr
><tr
id=sl_svn20_755

><td class="source">      shortcutStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_756

><td class="source">          [PR_STRING,  /^(?:\&#39;(?:[^\\\&#39;]|\\[\s\S])*(?:\&#39;|$)|\&quot;(?:[^\\\&quot;]|\\[\s\S])*(?:\&quot;|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,<br></td></tr
><tr
id=sl_svn20_757

><td class="source">           null, &#39;\&#39;&quot;`&#39;]);<br></td></tr
><tr
id=sl_svn20_758

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn20_759

><td class="source">      // &#39;single-line-string&#39;, &quot;single-line-string&quot;<br></td></tr
><tr
id=sl_svn20_760

><td class="source">      shortcutStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_761

><td class="source">          [PR_STRING,<br></td></tr
><tr
id=sl_svn20_762

><td class="source">           /^(?:\&#39;(?:[^\\\&#39;\r\n]|\\.)*(?:\&#39;|$)|\&quot;(?:[^\\\&quot;\r\n]|\\.)*(?:\&quot;|$))/,<br></td></tr
><tr
id=sl_svn20_763

><td class="source">           null, &#39;&quot;\&#39;&#39;]);<br></td></tr
><tr
id=sl_svn20_764

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_765

><td class="source">    if (options[&#39;verbatimStrings&#39;]) {<br></td></tr
><tr
id=sl_svn20_766

><td class="source">      // verbatim-string-literal production from the C# grammar.  See issue 93.<br></td></tr
><tr
id=sl_svn20_767

><td class="source">      fallthroughStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_768

><td class="source">          [PR_STRING, /^@\&quot;(?:[^\&quot;]|\&quot;\&quot;)*(?:\&quot;|$)/, null]);<br></td></tr
><tr
id=sl_svn20_769

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_770

><td class="source">    var hc = options[&#39;hashComments&#39;];<br></td></tr
><tr
id=sl_svn20_771

><td class="source">    if (hc) {<br></td></tr
><tr
id=sl_svn20_772

><td class="source">      if (options[&#39;cStyleComments&#39;]) {<br></td></tr
><tr
id=sl_svn20_773

><td class="source">        if (hc &gt; 1) {  // multiline hash comments<br></td></tr
><tr
id=sl_svn20_774

><td class="source">          shortcutStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_775

><td class="source">              [PR_COMMENT, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, &#39;#&#39;]);<br></td></tr
><tr
id=sl_svn20_776

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn20_777

><td class="source">          // Stop C preprocessor declarations at an unclosed open comment<br></td></tr
><tr
id=sl_svn20_778

><td class="source">          shortcutStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_779

><td class="source">              [PR_COMMENT, /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,<br></td></tr
><tr
id=sl_svn20_780

><td class="source">               null, &#39;#&#39;]);<br></td></tr
><tr
id=sl_svn20_781

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_782

><td class="source">        fallthroughStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_783

><td class="source">            [PR_STRING,<br></td></tr
><tr
id=sl_svn20_784

><td class="source">             /^&lt;(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)&gt;/,<br></td></tr
><tr
id=sl_svn20_785

><td class="source">             null]);<br></td></tr
><tr
id=sl_svn20_786

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn20_787

><td class="source">        shortcutStylePatterns.push([PR_COMMENT, /^#[^\r\n]*/, null, &#39;#&#39;]);<br></td></tr
><tr
id=sl_svn20_788

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_789

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_790

><td class="source">    if (options[&#39;cStyleComments&#39;]) {<br></td></tr
><tr
id=sl_svn20_791

><td class="source">      fallthroughStylePatterns.push([PR_COMMENT, /^\/\/[^\r\n]*/, null]);<br></td></tr
><tr
id=sl_svn20_792

><td class="source">      fallthroughStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_793

><td class="source">          [PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null]);<br></td></tr
><tr
id=sl_svn20_794

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_795

><td class="source">    if (options[&#39;regexLiterals&#39;]) {<br></td></tr
><tr
id=sl_svn20_796

><td class="source">      var REGEX_LITERAL = (<br></td></tr
><tr
id=sl_svn20_797

><td class="source">          // A regular expression literal starts with a slash that is<br></td></tr
><tr
id=sl_svn20_798

><td class="source">          // not followed by * or / so that it is not confused with<br></td></tr
><tr
id=sl_svn20_799

><td class="source">          // comments.<br></td></tr
><tr
id=sl_svn20_800

><td class="source">          &#39;/(?=[^/*])&#39;<br></td></tr
><tr
id=sl_svn20_801

><td class="source">          // and then contains any number of raw characters,<br></td></tr
><tr
id=sl_svn20_802

><td class="source">          + &#39;(?:[^/\\x5B\\x5C]&#39;<br></td></tr
><tr
id=sl_svn20_803

><td class="source">          // escape sequences (\x5C),<br></td></tr
><tr
id=sl_svn20_804

><td class="source">          +    &#39;|\\x5C[\\s\\S]&#39;<br></td></tr
><tr
id=sl_svn20_805

><td class="source">          // or non-nesting character sets (\x5B\x5D);<br></td></tr
><tr
id=sl_svn20_806

><td class="source">          +    &#39;|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+&#39;<br></td></tr
><tr
id=sl_svn20_807

><td class="source">          // finally closed by a /.<br></td></tr
><tr
id=sl_svn20_808

><td class="source">          + &#39;/&#39;);<br></td></tr
><tr
id=sl_svn20_809

><td class="source">      fallthroughStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_810

><td class="source">          [&#39;lang-regex&#39;,<br></td></tr
><tr
id=sl_svn20_811

><td class="source">           new RegExp(&#39;^&#39; + REGEXP_PRECEDER_PATTERN + &#39;(&#39; + REGEX_LITERAL + &#39;)&#39;)<br></td></tr
><tr
id=sl_svn20_812

><td class="source">           ]);<br></td></tr
><tr
id=sl_svn20_813

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_814

><td class="source"><br></td></tr
><tr
id=sl_svn20_815

><td class="source">    var keywords = options[&#39;keywords&#39;].replace(/^\s+|\s+$/g, &#39;&#39;);<br></td></tr
><tr
id=sl_svn20_816

><td class="source">    if (keywords.length) {<br></td></tr
><tr
id=sl_svn20_817

><td class="source">      fallthroughStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_818

><td class="source">          [PR_KEYWORD,<br></td></tr
><tr
id=sl_svn20_819

><td class="source">           new RegExp(&#39;^(?:&#39; + keywords.replace(/\s+/g, &#39;|&#39;) + &#39;)\\b&#39;), null]);<br></td></tr
><tr
id=sl_svn20_820

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_821

><td class="source"><br></td></tr
><tr
id=sl_svn20_822

><td class="source">    shortcutStylePatterns.push([PR_PLAIN,       /^\s+/, null, &#39; \r\n\t\xA0&#39;]);<br></td></tr
><tr
id=sl_svn20_823

><td class="source">    fallthroughStylePatterns.push(<br></td></tr
><tr
id=sl_svn20_824

><td class="source">        // TODO(mikesamuel): recognize non-latin letters and numerals in idents<br></td></tr
><tr
id=sl_svn20_825

><td class="source">        [PR_LITERAL,     /^@[a-z_$][a-z_$@0-9]*/i, null],<br></td></tr
><tr
id=sl_svn20_826

><td class="source">        [PR_TYPE,        /^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/, null],<br></td></tr
><tr
id=sl_svn20_827

><td class="source">        [PR_PLAIN,       /^[a-z_$][a-z_$@0-9]*/i, null],<br></td></tr
><tr
id=sl_svn20_828

><td class="source">        [PR_LITERAL,<br></td></tr
><tr
id=sl_svn20_829

><td class="source">         new RegExp(<br></td></tr
><tr
id=sl_svn20_830

><td class="source">             &#39;^(?:&#39;<br></td></tr
><tr
id=sl_svn20_831

><td class="source">             // A hex number<br></td></tr
><tr
id=sl_svn20_832

><td class="source">             + &#39;0x[a-f0-9]+&#39;<br></td></tr
><tr
id=sl_svn20_833

><td class="source">             // or an octal or decimal number,<br></td></tr
><tr
id=sl_svn20_834

><td class="source">             + &#39;|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)&#39;<br></td></tr
><tr
id=sl_svn20_835

><td class="source">             // possibly in scientific notation<br></td></tr
><tr
id=sl_svn20_836

><td class="source">             + &#39;(?:e[+\\-]?\\d+)?&#39;<br></td></tr
><tr
id=sl_svn20_837

><td class="source">             + &#39;)&#39;<br></td></tr
><tr
id=sl_svn20_838

><td class="source">             // with an optional modifier like UL for unsigned long<br></td></tr
><tr
id=sl_svn20_839

><td class="source">             + &#39;[a-z]*&#39;, &#39;i&#39;),<br></td></tr
><tr
id=sl_svn20_840

><td class="source">         null, &#39;0123456789&#39;],<br></td></tr
><tr
id=sl_svn20_841

><td class="source">        // Don&#39;t treat escaped quotes in bash as starting strings.  See issue 144.<br></td></tr
><tr
id=sl_svn20_842

><td class="source">        [PR_PLAIN,       /^\\[\s\S]?/, null],<br></td></tr
><tr
id=sl_svn20_843

><td class="source">        [PR_PUNCTUATION, /^.[^\s\w\.$@\&#39;\&quot;\`\/\#\\]*/, null]);<br></td></tr
><tr
id=sl_svn20_844

><td class="source"><br></td></tr
><tr
id=sl_svn20_845

><td class="source">    return createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns);<br></td></tr
><tr
id=sl_svn20_846

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_847

><td class="source"><br></td></tr
><tr
id=sl_svn20_848

><td class="source">  var decorateSource = sourceDecorator({<br></td></tr
><tr
id=sl_svn20_849

><td class="source">        &#39;keywords&#39;: ALL_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_850

><td class="source">        &#39;hashComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_851

><td class="source">        &#39;cStyleComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_852

><td class="source">        &#39;multiLineStrings&#39;: true,<br></td></tr
><tr
id=sl_svn20_853

><td class="source">        &#39;regexLiterals&#39;: true<br></td></tr
><tr
id=sl_svn20_854

><td class="source">      });<br></td></tr
><tr
id=sl_svn20_855

><td class="source"><br></td></tr
><tr
id=sl_svn20_856

><td class="source">  /**<br></td></tr
><tr
id=sl_svn20_857

><td class="source">   * Given a DOM subtree, wraps it in a list, and puts each line into its own<br></td></tr
><tr
id=sl_svn20_858

><td class="source">   * list item.<br></td></tr
><tr
id=sl_svn20_859

><td class="source">   *<br></td></tr
><tr
id=sl_svn20_860

><td class="source">   * @param {Node} node modified in place.  Its content is pulled into an<br></td></tr
><tr
id=sl_svn20_861

><td class="source">   *     HTMLOListElement, and each line is moved into a separate list item.<br></td></tr
><tr
id=sl_svn20_862

><td class="source">   *     This requires cloning elements, so the input might not have unique<br></td></tr
><tr
id=sl_svn20_863

><td class="source">   *     IDs after numbering.<br></td></tr
><tr
id=sl_svn20_864

><td class="source">   */<br></td></tr
><tr
id=sl_svn20_865

><td class="source">  function numberLines(node, opt_startLineNum) {<br></td></tr
><tr
id=sl_svn20_866

><td class="source">    var nocode = /(?:^|\s)nocode(?:\s|$)/;<br></td></tr
><tr
id=sl_svn20_867

><td class="source">    var lineBreak = /\r\n?|\n/;<br></td></tr
><tr
id=sl_svn20_868

><td class="source">  <br></td></tr
><tr
id=sl_svn20_869

><td class="source">    var document = node.ownerDocument;<br></td></tr
><tr
id=sl_svn20_870

><td class="source">  <br></td></tr
><tr
id=sl_svn20_871

><td class="source">    var whitespace;<br></td></tr
><tr
id=sl_svn20_872

><td class="source">    if (node.currentStyle) {<br></td></tr
><tr
id=sl_svn20_873

><td class="source">      whitespace = node.currentStyle.whiteSpace;<br></td></tr
><tr
id=sl_svn20_874

><td class="source">    } else if (window.getComputedStyle) {<br></td></tr
><tr
id=sl_svn20_875

><td class="source">      whitespace = document.defaultView.getComputedStyle(node, null)<br></td></tr
><tr
id=sl_svn20_876

><td class="source">          .getPropertyValue(&#39;white-space&#39;);<br></td></tr
><tr
id=sl_svn20_877

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_878

><td class="source">    // If it&#39;s preformatted, then we need to split lines on line breaks<br></td></tr
><tr
id=sl_svn20_879

><td class="source">    // in addition to &lt;BR&gt;s.<br></td></tr
><tr
id=sl_svn20_880

><td class="source">    var isPreformatted = whitespace &amp;&amp; &#39;pre&#39; === whitespace.substring(0, 3);<br></td></tr
><tr
id=sl_svn20_881

><td class="source">  <br></td></tr
><tr
id=sl_svn20_882

><td class="source">    var li = document.createElement(&#39;LI&#39;);<br></td></tr
><tr
id=sl_svn20_883

><td class="source">    while (node.firstChild) {<br></td></tr
><tr
id=sl_svn20_884

><td class="source">      li.appendChild(node.firstChild);<br></td></tr
><tr
id=sl_svn20_885

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_886

><td class="source">    // An array of lines.  We split below, so this is initialized to one<br></td></tr
><tr
id=sl_svn20_887

><td class="source">    // un-split line.<br></td></tr
><tr
id=sl_svn20_888

><td class="source">    var listItems = [li];<br></td></tr
><tr
id=sl_svn20_889

><td class="source">  <br></td></tr
><tr
id=sl_svn20_890

><td class="source">    function walk(node) {<br></td></tr
><tr
id=sl_svn20_891

><td class="source">      switch (node.nodeType) {<br></td></tr
><tr
id=sl_svn20_892

><td class="source">        case 1:  // Element<br></td></tr
><tr
id=sl_svn20_893

><td class="source">          if (nocode.test(node.className)) { break; }<br></td></tr
><tr
id=sl_svn20_894

><td class="source">          if (&#39;BR&#39; === node.nodeName) {<br></td></tr
><tr
id=sl_svn20_895

><td class="source">            breakAfter(node);<br></td></tr
><tr
id=sl_svn20_896

><td class="source">            // Discard the &lt;BR&gt; since it is now flush against a &lt;/LI&gt;.<br></td></tr
><tr
id=sl_svn20_897

><td class="source">            if (node.parentNode) {<br></td></tr
><tr
id=sl_svn20_898

><td class="source">              node.parentNode.removeChild(node);<br></td></tr
><tr
id=sl_svn20_899

><td class="source">            }<br></td></tr
><tr
id=sl_svn20_900

><td class="source">          } else {<br></td></tr
><tr
id=sl_svn20_901

><td class="source">            for (var child = node.firstChild; child; child = child.nextSibling) {<br></td></tr
><tr
id=sl_svn20_902

><td class="source">              walk(child);<br></td></tr
><tr
id=sl_svn20_903

><td class="source">            }<br></td></tr
><tr
id=sl_svn20_904

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_905

><td class="source">          break;<br></td></tr
><tr
id=sl_svn20_906

><td class="source">        case 3: case 4:  // Text<br></td></tr
><tr
id=sl_svn20_907

><td class="source">          if (isPreformatted) {<br></td></tr
><tr
id=sl_svn20_908

><td class="source">            var text = node.nodeValue;<br></td></tr
><tr
id=sl_svn20_909

><td class="source">            var match = text.match(lineBreak);<br></td></tr
><tr
id=sl_svn20_910

><td class="source">            if (match) {<br></td></tr
><tr
id=sl_svn20_911

><td class="source">              var firstLine = text.substring(0, match.index);<br></td></tr
><tr
id=sl_svn20_912

><td class="source">              node.nodeValue = firstLine;<br></td></tr
><tr
id=sl_svn20_913

><td class="source">              var tail = text.substring(match.index + match[0].length);<br></td></tr
><tr
id=sl_svn20_914

><td class="source">              if (tail) {<br></td></tr
><tr
id=sl_svn20_915

><td class="source">                var parent = node.parentNode;<br></td></tr
><tr
id=sl_svn20_916

><td class="source">                parent.insertBefore(<br></td></tr
><tr
id=sl_svn20_917

><td class="source">                    document.createTextNode(tail), node.nextSibling);<br></td></tr
><tr
id=sl_svn20_918

><td class="source">              }<br></td></tr
><tr
id=sl_svn20_919

><td class="source">              breakAfter(node);<br></td></tr
><tr
id=sl_svn20_920

><td class="source">              if (!firstLine) {<br></td></tr
><tr
id=sl_svn20_921

><td class="source">                // Don&#39;t leave blank text nodes in the DOM.<br></td></tr
><tr
id=sl_svn20_922

><td class="source">                node.parentNode.removeChild(node);<br></td></tr
><tr
id=sl_svn20_923

><td class="source">              }<br></td></tr
><tr
id=sl_svn20_924

><td class="source">            }<br></td></tr
><tr
id=sl_svn20_925

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_926

><td class="source">          break;<br></td></tr
><tr
id=sl_svn20_927

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_928

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_929

><td class="source">  <br></td></tr
><tr
id=sl_svn20_930

><td class="source">    // Split a line after the given node.<br></td></tr
><tr
id=sl_svn20_931

><td class="source">    function breakAfter(lineEndNode) {<br></td></tr
><tr
id=sl_svn20_932

><td class="source">      // If there&#39;s nothing to the right, then we can skip ending the line<br></td></tr
><tr
id=sl_svn20_933

><td class="source">      // here, and move root-wards since splitting just before an end-tag<br></td></tr
><tr
id=sl_svn20_934

><td class="source">      // would require us to create a bunch of empty copies.<br></td></tr
><tr
id=sl_svn20_935

><td class="source">      while (!lineEndNode.nextSibling) {<br></td></tr
><tr
id=sl_svn20_936

><td class="source">        lineEndNode = lineEndNode.parentNode;<br></td></tr
><tr
id=sl_svn20_937

><td class="source">        if (!lineEndNode) { return; }<br></td></tr
><tr
id=sl_svn20_938

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_939

><td class="source">  <br></td></tr
><tr
id=sl_svn20_940

><td class="source">      function breakLeftOf(limit, copy) {<br></td></tr
><tr
id=sl_svn20_941

><td class="source">        // Clone shallowly if this node needs to be on both sides of the break.<br></td></tr
><tr
id=sl_svn20_942

><td class="source">        var rightSide = copy ? limit.cloneNode(false) : limit;<br></td></tr
><tr
id=sl_svn20_943

><td class="source">        var parent = limit.parentNode;<br></td></tr
><tr
id=sl_svn20_944

><td class="source">        if (parent) {<br></td></tr
><tr
id=sl_svn20_945

><td class="source">          // We clone the parent chain.<br></td></tr
><tr
id=sl_svn20_946

><td class="source">          // This helps us resurrect important styling elements that cross lines.<br></td></tr
><tr
id=sl_svn20_947

><td class="source">          // E.g. in &lt;i&gt;Foo&lt;br&gt;Bar&lt;/i&gt;<br></td></tr
><tr
id=sl_svn20_948

><td class="source">          // should be rewritten to &lt;li&gt;&lt;i&gt;Foo&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Bar&lt;/i&gt;&lt;/li&gt;.<br></td></tr
><tr
id=sl_svn20_949

><td class="source">          var parentClone = breakLeftOf(parent, 1);<br></td></tr
><tr
id=sl_svn20_950

><td class="source">          // Move the clone and everything to the right of the original<br></td></tr
><tr
id=sl_svn20_951

><td class="source">          // onto the cloned parent.<br></td></tr
><tr
id=sl_svn20_952

><td class="source">          var next = limit.nextSibling;<br></td></tr
><tr
id=sl_svn20_953

><td class="source">          parentClone.appendChild(rightSide);<br></td></tr
><tr
id=sl_svn20_954

><td class="source">          for (var sibling = next; sibling; sibling = next) {<br></td></tr
><tr
id=sl_svn20_955

><td class="source">            next = sibling.nextSibling;<br></td></tr
><tr
id=sl_svn20_956

><td class="source">            parentClone.appendChild(sibling);<br></td></tr
><tr
id=sl_svn20_957

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_958

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_959

><td class="source">        return rightSide;<br></td></tr
><tr
id=sl_svn20_960

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_961

><td class="source">  <br></td></tr
><tr
id=sl_svn20_962

><td class="source">      var copiedListItem = breakLeftOf(lineEndNode.nextSibling, 0);<br></td></tr
><tr
id=sl_svn20_963

><td class="source">  <br></td></tr
><tr
id=sl_svn20_964

><td class="source">      // Walk the parent chain until we reach an unattached LI.<br></td></tr
><tr
id=sl_svn20_965

><td class="source">      for (var parent;<br></td></tr
><tr
id=sl_svn20_966

><td class="source">           // Check nodeType since IE invents document fragments.<br></td></tr
><tr
id=sl_svn20_967

><td class="source">           (parent = copiedListItem.parentNode) &amp;&amp; parent.nodeType === 1;) {<br></td></tr
><tr
id=sl_svn20_968

><td class="source">        copiedListItem = parent;<br></td></tr
><tr
id=sl_svn20_969

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_970

><td class="source">      // Put it on the list of lines for later processing.<br></td></tr
><tr
id=sl_svn20_971

><td class="source">      listItems.push(copiedListItem);<br></td></tr
><tr
id=sl_svn20_972

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_973

><td class="source">  <br></td></tr
><tr
id=sl_svn20_974

><td class="source">    // Split lines while there are lines left to split.<br></td></tr
><tr
id=sl_svn20_975

><td class="source">    for (var i = 0;  // Number of lines that have been split so far.<br></td></tr
><tr
id=sl_svn20_976

><td class="source">         i &lt; listItems.length;  // length updated by breakAfter calls.<br></td></tr
><tr
id=sl_svn20_977

><td class="source">         ++i) {<br></td></tr
><tr
id=sl_svn20_978

><td class="source">      walk(listItems[i]);<br></td></tr
><tr
id=sl_svn20_979

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_980

><td class="source">  <br></td></tr
><tr
id=sl_svn20_981

><td class="source">    // Make sure numeric indices show correctly.<br></td></tr
><tr
id=sl_svn20_982

><td class="source">    if (opt_startLineNum === (opt_startLineNum|0)) {<br></td></tr
><tr
id=sl_svn20_983

><td class="source">      listItems[0].setAttribute(&#39;value&#39;, opt_startLineNum);<br></td></tr
><tr
id=sl_svn20_984

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_985

><td class="source">  <br></td></tr
><tr
id=sl_svn20_986

><td class="source">    var ol = document.createElement(&#39;OL&#39;);<br></td></tr
><tr
id=sl_svn20_987

><td class="source">    ol.className = &#39;linenums&#39;;<br></td></tr
><tr
id=sl_svn20_988

><td class="source">    var offset = Math.max(0, ((opt_startLineNum - 1 /* zero index */)) | 0) || 0;<br></td></tr
><tr
id=sl_svn20_989

><td class="source">    for (var i = 0, n = listItems.length; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn20_990

><td class="source">      li = listItems[i];<br></td></tr
><tr
id=sl_svn20_991

><td class="source">      // Stick a class on the LIs so that stylesheets can<br></td></tr
><tr
id=sl_svn20_992

><td class="source">      // color odd/even rows, or any other row pattern that<br></td></tr
><tr
id=sl_svn20_993

><td class="source">      // is co-prime with 10.<br></td></tr
><tr
id=sl_svn20_994

><td class="source">      li.className = &#39;L&#39; + ((i + offset) % 10);<br></td></tr
><tr
id=sl_svn20_995

><td class="source">      if (!li.firstChild) {<br></td></tr
><tr
id=sl_svn20_996

><td class="source">        li.appendChild(document.createTextNode(&#39;\xA0&#39;));<br></td></tr
><tr
id=sl_svn20_997

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_998

><td class="source">      ol.appendChild(li);<br></td></tr
><tr
id=sl_svn20_999

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1000

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1001

><td class="source">    node.appendChild(ol);<br></td></tr
><tr
id=sl_svn20_1002

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_1003

><td class="source"><br></td></tr
><tr
id=sl_svn20_1004

><td class="source">  /**<br></td></tr
><tr
id=sl_svn20_1005

><td class="source">   * Breaks {@code job.source} around style boundaries in {@code job.decorations}<br></td></tr
><tr
id=sl_svn20_1006

><td class="source">   * and modifies {@code job.sourceNode} in place.<br></td></tr
><tr
id=sl_svn20_1007

><td class="source">   * @param {Object} job like &lt;pre&gt;{<br></td></tr
><tr
id=sl_svn20_1008

><td class="source">   *    source: {string} source as plain text,<br></td></tr
><tr
id=sl_svn20_1009

><td class="source">   *    spans: {Array.&lt;number|Node&gt;} alternating span start indices into source<br></td></tr
><tr
id=sl_svn20_1010

><td class="source">   *       and the text node or element (e.g. {@code &lt;BR&gt;}) corresponding to that<br></td></tr
><tr
id=sl_svn20_1011

><td class="source">   *       span.<br></td></tr
><tr
id=sl_svn20_1012

><td class="source">   *    decorations: {Array.&lt;number|string} an array of style classes preceded<br></td></tr
><tr
id=sl_svn20_1013

><td class="source">   *       by the position at which they start in job.source in order<br></td></tr
><tr
id=sl_svn20_1014

><td class="source">   * }&lt;/pre&gt;<br></td></tr
><tr
id=sl_svn20_1015

><td class="source">   * @private<br></td></tr
><tr
id=sl_svn20_1016

><td class="source">   */<br></td></tr
><tr
id=sl_svn20_1017

><td class="source">  function recombineTagsAndDecorations(job) {<br></td></tr
><tr
id=sl_svn20_1018

><td class="source">    var isIE = /\bMSIE\b/.test(navigator.userAgent);<br></td></tr
><tr
id=sl_svn20_1019

><td class="source">    var newlineRe = /\n/g;<br></td></tr
><tr
id=sl_svn20_1020

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1021

><td class="source">    var source = job.source;<br></td></tr
><tr
id=sl_svn20_1022

><td class="source">    var sourceLength = source.length;<br></td></tr
><tr
id=sl_svn20_1023

><td class="source">    // Index into source after the last code-unit recombined.<br></td></tr
><tr
id=sl_svn20_1024

><td class="source">    var sourceIndex = 0;<br></td></tr
><tr
id=sl_svn20_1025

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1026

><td class="source">    var spans = job.spans;<br></td></tr
><tr
id=sl_svn20_1027

><td class="source">    var nSpans = spans.length;<br></td></tr
><tr
id=sl_svn20_1028

><td class="source">    // Index into spans after the last span which ends at or before sourceIndex.<br></td></tr
><tr
id=sl_svn20_1029

><td class="source">    var spanIndex = 0;<br></td></tr
><tr
id=sl_svn20_1030

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1031

><td class="source">    var decorations = job.decorations;<br></td></tr
><tr
id=sl_svn20_1032

><td class="source">    var nDecorations = decorations.length;<br></td></tr
><tr
id=sl_svn20_1033

><td class="source">    // Index into decorations after the last decoration which ends at or before sourceIndex.<br></td></tr
><tr
id=sl_svn20_1034

><td class="source">    var decorationIndex = 0;<br></td></tr
><tr
id=sl_svn20_1035

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1036

><td class="source">    // Simplify decorations.<br></td></tr
><tr
id=sl_svn20_1037

><td class="source">    var decPos = 0;<br></td></tr
><tr
id=sl_svn20_1038

><td class="source">    for (var i = 0; i &lt; nDecorations;) {<br></td></tr
><tr
id=sl_svn20_1039

><td class="source">      // Skip over any zero-length decorations.<br></td></tr
><tr
id=sl_svn20_1040

><td class="source">      var startPos = decorations[i];<br></td></tr
><tr
id=sl_svn20_1041

><td class="source">      var start = i;<br></td></tr
><tr
id=sl_svn20_1042

><td class="source">      while (start + 2 &lt; nDecorations &amp;&amp; decorations[start + 2] === startPos) {<br></td></tr
><tr
id=sl_svn20_1043

><td class="source">        start += 2;<br></td></tr
><tr
id=sl_svn20_1044

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1045

><td class="source">      // Conflate all adjacent decorations that use the same style.<br></td></tr
><tr
id=sl_svn20_1046

><td class="source">      var startDec = decorations[start + 1];<br></td></tr
><tr
id=sl_svn20_1047

><td class="source">      var end = start + 2;<br></td></tr
><tr
id=sl_svn20_1048

><td class="source">      while (end + 2 &lt;= nDecorations<br></td></tr
><tr
id=sl_svn20_1049

><td class="source">             &amp;&amp; (decorations[end + 1] === startDec<br></td></tr
><tr
id=sl_svn20_1050

><td class="source">                 || decorations[end] === decorations[end + 2])) {<br></td></tr
><tr
id=sl_svn20_1051

><td class="source">        end += 2;<br></td></tr
><tr
id=sl_svn20_1052

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1053

><td class="source">      decorations[decPos++] = startPos;<br></td></tr
><tr
id=sl_svn20_1054

><td class="source">      decorations[decPos++] = startDec;<br></td></tr
><tr
id=sl_svn20_1055

><td class="source">      i = end;<br></td></tr
><tr
id=sl_svn20_1056

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1057

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1058

><td class="source">    // Strip any zero-length decoration at the end.<br></td></tr
><tr
id=sl_svn20_1059

><td class="source">    if (decPos &amp;&amp; decorations[decPos - 2] === sourceLength) { decPos -= 2; }<br></td></tr
><tr
id=sl_svn20_1060

><td class="source">    nDecorations = decorations.length = decPos;<br></td></tr
><tr
id=sl_svn20_1061

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1062

><td class="source">    var decoration = null;<br></td></tr
><tr
id=sl_svn20_1063

><td class="source">    while (spanIndex &lt; nSpans) {<br></td></tr
><tr
id=sl_svn20_1064

><td class="source">      var spanStart = spans[spanIndex];<br></td></tr
><tr
id=sl_svn20_1065

><td class="source">      var spanEnd = spans[spanIndex + 2] || sourceLength;<br></td></tr
><tr
id=sl_svn20_1066

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1067

><td class="source">      var decStart = decorations[decorationIndex];<br></td></tr
><tr
id=sl_svn20_1068

><td class="source">      var decEnd = decorations[decorationIndex + 2] || sourceLength;<br></td></tr
><tr
id=sl_svn20_1069

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1070

><td class="source">      var end = Math.min(spanEnd, decEnd);<br></td></tr
><tr
id=sl_svn20_1071

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1072

><td class="source">      var textNode = spans[spanIndex + 1];<br></td></tr
><tr
id=sl_svn20_1073

><td class="source">      if (textNode.nodeType !== 1) {  // Don&#39;t muck with &lt;BR&gt;s or &lt;LI&gt;s<br></td></tr
><tr
id=sl_svn20_1074

><td class="source">        var styledText = source.substring(sourceIndex, end);<br></td></tr
><tr
id=sl_svn20_1075

><td class="source">        // This may seem bizarre, and it is.  Emitting LF on IE causes the<br></td></tr
><tr
id=sl_svn20_1076

><td class="source">        // code to display with spaces instead of line breaks.<br></td></tr
><tr
id=sl_svn20_1077

><td class="source">        // Emitting Windows standard issue linebreaks (CRLF) causes a blank<br></td></tr
><tr
id=sl_svn20_1078

><td class="source">        // space to appear at the beginning of every line but the first.<br></td></tr
><tr
id=sl_svn20_1079

><td class="source">        // Emitting an old Mac OS 9 line separator makes everything spiffy.<br></td></tr
><tr
id=sl_svn20_1080

><td class="source">        if (isIE) { styledText = styledText.replace(newlineRe, &#39;\r&#39;); }<br></td></tr
><tr
id=sl_svn20_1081

><td class="source">        textNode.nodeValue = styledText;<br></td></tr
><tr
id=sl_svn20_1082

><td class="source">        var document = textNode.ownerDocument;<br></td></tr
><tr
id=sl_svn20_1083

><td class="source">        var span = document.createElement(&#39;SPAN&#39;);<br></td></tr
><tr
id=sl_svn20_1084

><td class="source">        span.className = decorations[decorationIndex + 1];<br></td></tr
><tr
id=sl_svn20_1085

><td class="source">        var parentNode = textNode.parentNode;<br></td></tr
><tr
id=sl_svn20_1086

><td class="source">        parentNode.replaceChild(span, textNode);<br></td></tr
><tr
id=sl_svn20_1087

><td class="source">        span.appendChild(textNode);<br></td></tr
><tr
id=sl_svn20_1088

><td class="source">        if (sourceIndex &lt; spanEnd) {  // Split off a text node.<br></td></tr
><tr
id=sl_svn20_1089

><td class="source">          spans[spanIndex + 1] = textNode<br></td></tr
><tr
id=sl_svn20_1090

><td class="source">              // TODO: Possibly optimize by using &#39;&#39; if there&#39;s no flicker.<br></td></tr
><tr
id=sl_svn20_1091

><td class="source">              = document.createTextNode(source.substring(end, spanEnd));<br></td></tr
><tr
id=sl_svn20_1092

><td class="source">          parentNode.insertBefore(textNode, span.nextSibling);<br></td></tr
><tr
id=sl_svn20_1093

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_1094

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1095

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1096

><td class="source">      sourceIndex = end;<br></td></tr
><tr
id=sl_svn20_1097

><td class="source">  <br></td></tr
><tr
id=sl_svn20_1098

><td class="source">      if (sourceIndex &gt;= spanEnd) {<br></td></tr
><tr
id=sl_svn20_1099

><td class="source">        spanIndex += 2;<br></td></tr
><tr
id=sl_svn20_1100

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1101

><td class="source">      if (sourceIndex &gt;= decEnd) {<br></td></tr
><tr
id=sl_svn20_1102

><td class="source">        decorationIndex += 2;<br></td></tr
><tr
id=sl_svn20_1103

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1104

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1105

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_1106

><td class="source"><br></td></tr
><tr
id=sl_svn20_1107

><td class="source"><br></td></tr
><tr
id=sl_svn20_1108

><td class="source">  /** Maps language-specific file extensions to handlers. */<br></td></tr
><tr
id=sl_svn20_1109

><td class="source">  var langHandlerRegistry = {};<br></td></tr
><tr
id=sl_svn20_1110

><td class="source">  /** Register a language handler for the given file extensions.<br></td></tr
><tr
id=sl_svn20_1111

><td class="source">    * @param {function (Object)} handler a function from source code to a list<br></td></tr
><tr
id=sl_svn20_1112

><td class="source">    *      of decorations.  Takes a single argument job which describes the<br></td></tr
><tr
id=sl_svn20_1113

><td class="source">    *      state of the computation.   The single parameter has the form<br></td></tr
><tr
id=sl_svn20_1114

><td class="source">    *      {@code {<br></td></tr
><tr
id=sl_svn20_1115

><td class="source">    *        source: {string} as plain text.<br></td></tr
><tr
id=sl_svn20_1116

><td class="source">    *        decorations: {Array.&lt;number|string&gt;} an array of style classes<br></td></tr
><tr
id=sl_svn20_1117

><td class="source">    *                     preceded by the position at which they start in<br></td></tr
><tr
id=sl_svn20_1118

><td class="source">    *                     job.source in order.<br></td></tr
><tr
id=sl_svn20_1119

><td class="source">    *                     The language handler should assigned this field.<br></td></tr
><tr
id=sl_svn20_1120

><td class="source">    *        basePos: {int} the position of source in the larger source chunk.<br></td></tr
><tr
id=sl_svn20_1121

><td class="source">    *                 All positions in the output decorations array are relative<br></td></tr
><tr
id=sl_svn20_1122

><td class="source">    *                 to the larger source chunk.<br></td></tr
><tr
id=sl_svn20_1123

><td class="source">    *      } }<br></td></tr
><tr
id=sl_svn20_1124

><td class="source">    * @param {Array.&lt;string&gt;} fileExtensions<br></td></tr
><tr
id=sl_svn20_1125

><td class="source">    */<br></td></tr
><tr
id=sl_svn20_1126

><td class="source">  function registerLangHandler(handler, fileExtensions) {<br></td></tr
><tr
id=sl_svn20_1127

><td class="source">    for (var i = fileExtensions.length; --i &gt;= 0;) {<br></td></tr
><tr
id=sl_svn20_1128

><td class="source">      var ext = fileExtensions[i];<br></td></tr
><tr
id=sl_svn20_1129

><td class="source">      if (!langHandlerRegistry.hasOwnProperty(ext)) {<br></td></tr
><tr
id=sl_svn20_1130

><td class="source">        langHandlerRegistry[ext] = handler;<br></td></tr
><tr
id=sl_svn20_1131

><td class="source">      } else if (&#39;console&#39; in window) {<br></td></tr
><tr
id=sl_svn20_1132

><td class="source">        console[&#39;warn&#39;](&#39;cannot override language handler %s&#39;, ext);<br></td></tr
><tr
id=sl_svn20_1133

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1134

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1135

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_1136

><td class="source">  function langHandlerForExtension(extension, source) {<br></td></tr
><tr
id=sl_svn20_1137

><td class="source">    if (!(extension &amp;&amp; langHandlerRegistry.hasOwnProperty(extension))) {<br></td></tr
><tr
id=sl_svn20_1138

><td class="source">      // Treat it as markup if the first non whitespace character is a &lt; and<br></td></tr
><tr
id=sl_svn20_1139

><td class="source">      // the last non-whitespace character is a &gt;.<br></td></tr
><tr
id=sl_svn20_1140

><td class="source">      extension = /^\s*&lt;/.test(source)<br></td></tr
><tr
id=sl_svn20_1141

><td class="source">          ? &#39;default-markup&#39;<br></td></tr
><tr
id=sl_svn20_1142

><td class="source">          : &#39;default-code&#39;;<br></td></tr
><tr
id=sl_svn20_1143

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1144

><td class="source">    return langHandlerRegistry[extension];<br></td></tr
><tr
id=sl_svn20_1145

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_1146

><td class="source">  registerLangHandler(decorateSource, [&#39;default-code&#39;]);<br></td></tr
><tr
id=sl_svn20_1147

><td class="source">  registerLangHandler(<br></td></tr
><tr
id=sl_svn20_1148

><td class="source">      createSimpleLexer(<br></td></tr
><tr
id=sl_svn20_1149

><td class="source">          [],<br></td></tr
><tr
id=sl_svn20_1150

><td class="source">          [<br></td></tr
><tr
id=sl_svn20_1151

><td class="source">           [PR_PLAIN,       /^[^&lt;?]+/],<br></td></tr
><tr
id=sl_svn20_1152

><td class="source">           [PR_DECLARATION, /^&lt;!\w[^&gt;]*(?:&gt;|$)/],<br></td></tr
><tr
id=sl_svn20_1153

><td class="source">           [PR_COMMENT,     /^&lt;\!--[\s\S]*?(?:-\-&gt;|$)/],<br></td></tr
><tr
id=sl_svn20_1154

><td class="source">           // Unescaped content in an unknown language<br></td></tr
><tr
id=sl_svn20_1155

><td class="source">           [&#39;lang-&#39;,        /^&lt;\?([\s\S]+?)(?:\?&gt;|$)/],<br></td></tr
><tr
id=sl_svn20_1156

><td class="source">           [&#39;lang-&#39;,        /^&lt;%([\s\S]+?)(?:%&gt;|$)/],<br></td></tr
><tr
id=sl_svn20_1157

><td class="source">           [PR_PUNCTUATION, /^(?:&lt;[%?]|[%?]&gt;)/],<br></td></tr
><tr
id=sl_svn20_1158

><td class="source">           [&#39;lang-&#39;,        /^&lt;xmp\b[^&gt;]*&gt;([\s\S]+?)&lt;\/xmp\b[^&gt;]*&gt;/i],<br></td></tr
><tr
id=sl_svn20_1159

><td class="source">           // Unescaped content in javascript.  (Or possibly vbscript).<br></td></tr
><tr
id=sl_svn20_1160

><td class="source">           [&#39;lang-js&#39;,      /^&lt;script\b[^&gt;]*&gt;([\s\S]*?)(&lt;\/script\b[^&gt;]*&gt;)/i],<br></td></tr
><tr
id=sl_svn20_1161

><td class="source">           // Contains unescaped stylesheet content<br></td></tr
><tr
id=sl_svn20_1162

><td class="source">           [&#39;lang-css&#39;,     /^&lt;style\b[^&gt;]*&gt;([\s\S]*?)(&lt;\/style\b[^&gt;]*&gt;)/i],<br></td></tr
><tr
id=sl_svn20_1163

><td class="source">           [&#39;lang-in.tag&#39;,  /^(&lt;\/?[a-z][^&lt;&gt;]*&gt;)/i]<br></td></tr
><tr
id=sl_svn20_1164

><td class="source">          ]),<br></td></tr
><tr
id=sl_svn20_1165

><td class="source">      [&#39;default-markup&#39;, &#39;htm&#39;, &#39;html&#39;, &#39;mxml&#39;, &#39;xhtml&#39;, &#39;xml&#39;, &#39;xsl&#39;]);<br></td></tr
><tr
id=sl_svn20_1166

><td class="source">  registerLangHandler(<br></td></tr
><tr
id=sl_svn20_1167

><td class="source">      createSimpleLexer(<br></td></tr
><tr
id=sl_svn20_1168

><td class="source">          [<br></td></tr
><tr
id=sl_svn20_1169

><td class="source">           [PR_PLAIN,        /^[\s]+/, null, &#39; \t\r\n&#39;],<br></td></tr
><tr
id=sl_svn20_1170

><td class="source">           [PR_ATTRIB_VALUE, /^(?:\&quot;[^\&quot;]*\&quot;?|\&#39;[^\&#39;]*\&#39;?)/, null, &#39;\&quot;\&#39;&#39;]<br></td></tr
><tr
id=sl_svn20_1171

><td class="source">           ],<br></td></tr
><tr
id=sl_svn20_1172

><td class="source">          [<br></td></tr
><tr
id=sl_svn20_1173

><td class="source">           [PR_TAG,          /^^&lt;\/?[a-z](?:[\w.:-]*\w)?|\/?&gt;$/i],<br></td></tr
><tr
id=sl_svn20_1174

><td class="source">           [PR_ATTRIB_NAME,  /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],<br></td></tr
><tr
id=sl_svn20_1175

><td class="source">           [&#39;lang-uq.val&#39;,   /^=\s*([^&gt;\&#39;\&quot;\s]*(?:[^&gt;\&#39;\&quot;\s\/]|\/(?=\s)))/],<br></td></tr
><tr
id=sl_svn20_1176

><td class="source">           [PR_PUNCTUATION,  /^[=&lt;&gt;\/]+/],<br></td></tr
><tr
id=sl_svn20_1177

><td class="source">           [&#39;lang-js&#39;,       /^on\w+\s*=\s*\&quot;([^\&quot;]+)\&quot;/i],<br></td></tr
><tr
id=sl_svn20_1178

><td class="source">           [&#39;lang-js&#39;,       /^on\w+\s*=\s*\&#39;([^\&#39;]+)\&#39;/i],<br></td></tr
><tr
id=sl_svn20_1179

><td class="source">           [&#39;lang-js&#39;,       /^on\w+\s*=\s*([^\&quot;\&#39;&gt;\s]+)/i],<br></td></tr
><tr
id=sl_svn20_1180

><td class="source">           [&#39;lang-css&#39;,      /^style\s*=\s*\&quot;([^\&quot;]+)\&quot;/i],<br></td></tr
><tr
id=sl_svn20_1181

><td class="source">           [&#39;lang-css&#39;,      /^style\s*=\s*\&#39;([^\&#39;]+)\&#39;/i],<br></td></tr
><tr
id=sl_svn20_1182

><td class="source">           [&#39;lang-css&#39;,      /^style\s*=\s*([^\&quot;\&#39;&gt;\s]+)/i]<br></td></tr
><tr
id=sl_svn20_1183

><td class="source">           ]),<br></td></tr
><tr
id=sl_svn20_1184

><td class="source">      [&#39;in.tag&#39;]);<br></td></tr
><tr
id=sl_svn20_1185

><td class="source">  registerLangHandler(<br></td></tr
><tr
id=sl_svn20_1186

><td class="source">      createSimpleLexer([], [[PR_ATTRIB_VALUE, /^[\s\S]+/]]), [&#39;uq.val&#39;]);<br></td></tr
><tr
id=sl_svn20_1187

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1188

><td class="source">          &#39;keywords&#39;: CPP_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1189

><td class="source">          &#39;hashComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1190

><td class="source">          &#39;cStyleComments&#39;: true<br></td></tr
><tr
id=sl_svn20_1191

><td class="source">        }), [&#39;c&#39;, &#39;cc&#39;, &#39;cpp&#39;, &#39;cxx&#39;, &#39;cyc&#39;, &#39;m&#39;]);<br></td></tr
><tr
id=sl_svn20_1192

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1193

><td class="source">          &#39;keywords&#39;: &#39;null true false&#39;<br></td></tr
><tr
id=sl_svn20_1194

><td class="source">        }), [&#39;json&#39;]);<br></td></tr
><tr
id=sl_svn20_1195

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1196

><td class="source">          &#39;keywords&#39;: CSHARP_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1197

><td class="source">          &#39;hashComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1198

><td class="source">          &#39;cStyleComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1199

><td class="source">          &#39;verbatimStrings&#39;: true<br></td></tr
><tr
id=sl_svn20_1200

><td class="source">        }), [&#39;cs&#39;]);<br></td></tr
><tr
id=sl_svn20_1201

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1202

><td class="source">          &#39;keywords&#39;: JAVA_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1203

><td class="source">          &#39;cStyleComments&#39;: true<br></td></tr
><tr
id=sl_svn20_1204

><td class="source">        }), [&#39;java&#39;]);<br></td></tr
><tr
id=sl_svn20_1205

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1206

><td class="source">          &#39;keywords&#39;: SH_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1207

><td class="source">          &#39;hashComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1208

><td class="source">          &#39;multiLineStrings&#39;: true<br></td></tr
><tr
id=sl_svn20_1209

><td class="source">        }), [&#39;bsh&#39;, &#39;csh&#39;, &#39;sh&#39;]);<br></td></tr
><tr
id=sl_svn20_1210

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1211

><td class="source">          &#39;keywords&#39;: PYTHON_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1212

><td class="source">          &#39;hashComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1213

><td class="source">          &#39;multiLineStrings&#39;: true,<br></td></tr
><tr
id=sl_svn20_1214

><td class="source">          &#39;tripleQuotedStrings&#39;: true<br></td></tr
><tr
id=sl_svn20_1215

><td class="source">        }), [&#39;cv&#39;, &#39;py&#39;]);<br></td></tr
><tr
id=sl_svn20_1216

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1217

><td class="source">          &#39;keywords&#39;: PERL_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1218

><td class="source">          &#39;hashComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1219

><td class="source">          &#39;multiLineStrings&#39;: true,<br></td></tr
><tr
id=sl_svn20_1220

><td class="source">          &#39;regexLiterals&#39;: true<br></td></tr
><tr
id=sl_svn20_1221

><td class="source">        }), [&#39;perl&#39;, &#39;pl&#39;, &#39;pm&#39;]);<br></td></tr
><tr
id=sl_svn20_1222

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1223

><td class="source">          &#39;keywords&#39;: RUBY_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1224

><td class="source">          &#39;hashComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1225

><td class="source">          &#39;multiLineStrings&#39;: true,<br></td></tr
><tr
id=sl_svn20_1226

><td class="source">          &#39;regexLiterals&#39;: true<br></td></tr
><tr
id=sl_svn20_1227

><td class="source">        }), [&#39;rb&#39;]);<br></td></tr
><tr
id=sl_svn20_1228

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1229

><td class="source">          &#39;keywords&#39;: JSCRIPT_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1230

><td class="source">          &#39;cStyleComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1231

><td class="source">          &#39;regexLiterals&#39;: true<br></td></tr
><tr
id=sl_svn20_1232

><td class="source">        }), [&#39;js&#39;]);<br></td></tr
><tr
id=sl_svn20_1233

><td class="source">  registerLangHandler(sourceDecorator({<br></td></tr
><tr
id=sl_svn20_1234

><td class="source">          &#39;keywords&#39;: COFFEE_KEYWORDS,<br></td></tr
><tr
id=sl_svn20_1235

><td class="source">          &#39;hashComments&#39;: 3,  // ### style block comments<br></td></tr
><tr
id=sl_svn20_1236

><td class="source">          &#39;cStyleComments&#39;: true,<br></td></tr
><tr
id=sl_svn20_1237

><td class="source">          &#39;multilineStrings&#39;: true,<br></td></tr
><tr
id=sl_svn20_1238

><td class="source">          &#39;tripleQuotedStrings&#39;: true,<br></td></tr
><tr
id=sl_svn20_1239

><td class="source">          &#39;regexLiterals&#39;: true<br></td></tr
><tr
id=sl_svn20_1240

><td class="source">        }), [&#39;coffee&#39;]);<br></td></tr
><tr
id=sl_svn20_1241

><td class="source">  registerLangHandler(createSimpleLexer([], [[PR_STRING, /^[\s\S]+/]]), [&#39;regex&#39;]);<br></td></tr
><tr
id=sl_svn20_1242

><td class="source"><br></td></tr
><tr
id=sl_svn20_1243

><td class="source">  function applyDecorator(job) {<br></td></tr
><tr
id=sl_svn20_1244

><td class="source">    var opt_langExtension = job.langExtension;<br></td></tr
><tr
id=sl_svn20_1245

><td class="source"><br></td></tr
><tr
id=sl_svn20_1246

><td class="source">    try {<br></td></tr
><tr
id=sl_svn20_1247

><td class="source">      // Extract tags, and convert the source code to plain text.<br></td></tr
><tr
id=sl_svn20_1248

><td class="source">      var sourceAndSpans = extractSourceSpans(job.sourceNode);<br></td></tr
><tr
id=sl_svn20_1249

><td class="source">      /** Plain text. @type {string} */<br></td></tr
><tr
id=sl_svn20_1250

><td class="source">      var source = sourceAndSpans.source;<br></td></tr
><tr
id=sl_svn20_1251

><td class="source">      job.source = source;<br></td></tr
><tr
id=sl_svn20_1252

><td class="source">      job.spans = sourceAndSpans.spans;<br></td></tr
><tr
id=sl_svn20_1253

><td class="source">      job.basePos = 0;<br></td></tr
><tr
id=sl_svn20_1254

><td class="source"><br></td></tr
><tr
id=sl_svn20_1255

><td class="source">      // Apply the appropriate language handler<br></td></tr
><tr
id=sl_svn20_1256

><td class="source">      langHandlerForExtension(opt_langExtension, source)(job);<br></td></tr
><tr
id=sl_svn20_1257

><td class="source"><br></td></tr
><tr
id=sl_svn20_1258

><td class="source">      // Integrate the decorations and tags back into the source code,<br></td></tr
><tr
id=sl_svn20_1259

><td class="source">      // modifying the sourceNode in place.<br></td></tr
><tr
id=sl_svn20_1260

><td class="source">      recombineTagsAndDecorations(job);<br></td></tr
><tr
id=sl_svn20_1261

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn20_1262

><td class="source">      if (&#39;console&#39; in window) {<br></td></tr
><tr
id=sl_svn20_1263

><td class="source">        console[&#39;log&#39;](e &amp;&amp; e[&#39;stack&#39;] ? e[&#39;stack&#39;] : e);<br></td></tr
><tr
id=sl_svn20_1264

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1265

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1266

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_1267

><td class="source"><br></td></tr
><tr
id=sl_svn20_1268

><td class="source">  /**<br></td></tr
><tr
id=sl_svn20_1269

><td class="source">   * @param sourceCodeHtml {string} The HTML to pretty print.<br></td></tr
><tr
id=sl_svn20_1270

><td class="source">   * @param opt_langExtension {string} The language name to use.<br></td></tr
><tr
id=sl_svn20_1271

><td class="source">   *     Typically, a filename extension like &#39;cpp&#39; or &#39;java&#39;.<br></td></tr
><tr
id=sl_svn20_1272

><td class="source">   * @param opt_numberLines {number|boolean} True to number lines,<br></td></tr
><tr
id=sl_svn20_1273

><td class="source">   *     or the 1-indexed number of the first line in sourceCodeHtml.<br></td></tr
><tr
id=sl_svn20_1274

><td class="source">   */<br></td></tr
><tr
id=sl_svn20_1275

><td class="source">  function prettyPrintOne(sourceCodeHtml, opt_langExtension, opt_numberLines) {<br></td></tr
><tr
id=sl_svn20_1276

><td class="source">    var container = document.createElement(&#39;PRE&#39;);<br></td></tr
><tr
id=sl_svn20_1277

><td class="source">    // This could cause images to load and onload listeners to fire.<br></td></tr
><tr
id=sl_svn20_1278

><td class="source">    // E.g. &lt;img onerror=&quot;alert(1337)&quot; src=&quot;nosuchimage.png&quot;&gt;.<br></td></tr
><tr
id=sl_svn20_1279

><td class="source">    // We assume that the inner HTML is from a trusted source.<br></td></tr
><tr
id=sl_svn20_1280

><td class="source">    container.innerHTML = sourceCodeHtml;<br></td></tr
><tr
id=sl_svn20_1281

><td class="source">    if (opt_numberLines) {<br></td></tr
><tr
id=sl_svn20_1282

><td class="source">      numberLines(container, opt_numberLines);<br></td></tr
><tr
id=sl_svn20_1283

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1284

><td class="source"><br></td></tr
><tr
id=sl_svn20_1285

><td class="source">    var job = {<br></td></tr
><tr
id=sl_svn20_1286

><td class="source">      langExtension: opt_langExtension,<br></td></tr
><tr
id=sl_svn20_1287

><td class="source">      numberLines: opt_numberLines,<br></td></tr
><tr
id=sl_svn20_1288

><td class="source">      sourceNode: container<br></td></tr
><tr
id=sl_svn20_1289

><td class="source">    };<br></td></tr
><tr
id=sl_svn20_1290

><td class="source">    applyDecorator(job);<br></td></tr
><tr
id=sl_svn20_1291

><td class="source">    return container.innerHTML;<br></td></tr
><tr
id=sl_svn20_1292

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_1293

><td class="source"><br></td></tr
><tr
id=sl_svn20_1294

><td class="source">  function prettyPrint(opt_whenDone) {<br></td></tr
><tr
id=sl_svn20_1295

><td class="source">    function byTagName(tn) { return document.getElementsByTagName(tn); }<br></td></tr
><tr
id=sl_svn20_1296

><td class="source">    // fetch a list of nodes to rewrite<br></td></tr
><tr
id=sl_svn20_1297

><td class="source">    var codeSegments = [byTagName(&#39;pre&#39;), byTagName(&#39;code&#39;), byTagName(&#39;xmp&#39;)];<br></td></tr
><tr
id=sl_svn20_1298

><td class="source">    var elements = [];<br></td></tr
><tr
id=sl_svn20_1299

><td class="source">    for (var i = 0; i &lt; codeSegments.length; ++i) {<br></td></tr
><tr
id=sl_svn20_1300

><td class="source">      for (var j = 0, n = codeSegments[i].length; j &lt; n; ++j) {<br></td></tr
><tr
id=sl_svn20_1301

><td class="source">        elements.push(codeSegments[i][j]);<br></td></tr
><tr
id=sl_svn20_1302

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1303

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1304

><td class="source">    codeSegments = null;<br></td></tr
><tr
id=sl_svn20_1305

><td class="source"><br></td></tr
><tr
id=sl_svn20_1306

><td class="source">    var clock = Date;<br></td></tr
><tr
id=sl_svn20_1307

><td class="source">    if (!clock[&#39;now&#39;]) {<br></td></tr
><tr
id=sl_svn20_1308

><td class="source">      clock = { &#39;now&#39;: function () { return (new Date).getTime(); } };<br></td></tr
><tr
id=sl_svn20_1309

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1310

><td class="source"><br></td></tr
><tr
id=sl_svn20_1311

><td class="source">    // The loop is broken into a series of continuations to make sure that we<br></td></tr
><tr
id=sl_svn20_1312

><td class="source">    // don&#39;t make the browser unresponsive when rewriting a large page.<br></td></tr
><tr
id=sl_svn20_1313

><td class="source">    var k = 0;<br></td></tr
><tr
id=sl_svn20_1314

><td class="source">    var prettyPrintingJob;<br></td></tr
><tr
id=sl_svn20_1315

><td class="source"><br></td></tr
><tr
id=sl_svn20_1316

><td class="source">    function doWork() {<br></td></tr
><tr
id=sl_svn20_1317

><td class="source">      var endTime = (window[&#39;PR_SHOULD_USE_CONTINUATION&#39;] ?<br></td></tr
><tr
id=sl_svn20_1318

><td class="source">                     clock.now() + 250 /* ms */ :<br></td></tr
><tr
id=sl_svn20_1319

><td class="source">                     Infinity);<br></td></tr
><tr
id=sl_svn20_1320

><td class="source">      for (; k &lt; elements.length &amp;&amp; clock.now() &lt; endTime; k++) {<br></td></tr
><tr
id=sl_svn20_1321

><td class="source">        var cs = elements[k];<br></td></tr
><tr
id=sl_svn20_1322

><td class="source">        if (cs.className &amp;&amp; cs.className.indexOf(&#39;prettyprint&#39;) &gt;= 0) {<br></td></tr
><tr
id=sl_svn20_1323

><td class="source">          // If the classes includes a language extensions, use it.<br></td></tr
><tr
id=sl_svn20_1324

><td class="source">          // Language extensions can be specified like<br></td></tr
><tr
id=sl_svn20_1325

><td class="source">          //     &lt;pre class=&quot;prettyprint lang-cpp&quot;&gt;<br></td></tr
><tr
id=sl_svn20_1326

><td class="source">          // the language extension &quot;cpp&quot; is used to find a language handler as<br></td></tr
><tr
id=sl_svn20_1327

><td class="source">          // passed to PR.registerLangHandler.<br></td></tr
><tr
id=sl_svn20_1328

><td class="source">          var langExtension = cs.className.match(/\blang-(\w+)\b/);<br></td></tr
><tr
id=sl_svn20_1329

><td class="source">          if (langExtension) { langExtension = langExtension[1]; }<br></td></tr
><tr
id=sl_svn20_1330

><td class="source"><br></td></tr
><tr
id=sl_svn20_1331

><td class="source">          // make sure this is not nested in an already prettified element<br></td></tr
><tr
id=sl_svn20_1332

><td class="source">          var nested = false;<br></td></tr
><tr
id=sl_svn20_1333

><td class="source">          for (var p = cs.parentNode; p; p = p.parentNode) {<br></td></tr
><tr
id=sl_svn20_1334

><td class="source">            if ((p.tagName === &#39;pre&#39; || p.tagName === &#39;code&#39; ||<br></td></tr
><tr
id=sl_svn20_1335

><td class="source">                 p.tagName === &#39;xmp&#39;) &amp;&amp;<br></td></tr
><tr
id=sl_svn20_1336

><td class="source">                p.className &amp;&amp; p.className.indexOf(&#39;prettyprint&#39;) &gt;= 0) {<br></td></tr
><tr
id=sl_svn20_1337

><td class="source">              nested = true;<br></td></tr
><tr
id=sl_svn20_1338

><td class="source">              break;<br></td></tr
><tr
id=sl_svn20_1339

><td class="source">            }<br></td></tr
><tr
id=sl_svn20_1340

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_1341

><td class="source">          if (!nested) {<br></td></tr
><tr
id=sl_svn20_1342

><td class="source">            // Look for a class like linenums or linenums:&lt;n&gt; where &lt;n&gt; is the<br></td></tr
><tr
id=sl_svn20_1343

><td class="source">            // 1-indexed number of the first line.<br></td></tr
><tr
id=sl_svn20_1344

><td class="source">            var lineNums = cs.className.match(/\blinenums\b(?::(\d+))?/);<br></td></tr
><tr
id=sl_svn20_1345

><td class="source">            lineNums = lineNums<br></td></tr
><tr
id=sl_svn20_1346

><td class="source">                  ? lineNums[1] &amp;&amp; lineNums[1].length ? +lineNums[1] : true<br></td></tr
><tr
id=sl_svn20_1347

><td class="source">                  : false;<br></td></tr
><tr
id=sl_svn20_1348

><td class="source">            if (lineNums) { numberLines(cs, lineNums); }<br></td></tr
><tr
id=sl_svn20_1349

><td class="source"><br></td></tr
><tr
id=sl_svn20_1350

><td class="source">            // do the pretty printing<br></td></tr
><tr
id=sl_svn20_1351

><td class="source">            prettyPrintingJob = {<br></td></tr
><tr
id=sl_svn20_1352

><td class="source">              langExtension: langExtension,<br></td></tr
><tr
id=sl_svn20_1353

><td class="source">              sourceNode: cs,<br></td></tr
><tr
id=sl_svn20_1354

><td class="source">              numberLines: lineNums<br></td></tr
><tr
id=sl_svn20_1355

><td class="source">            };<br></td></tr
><tr
id=sl_svn20_1356

><td class="source">            applyDecorator(prettyPrintingJob);<br></td></tr
><tr
id=sl_svn20_1357

><td class="source">          }<br></td></tr
><tr
id=sl_svn20_1358

><td class="source">        }<br></td></tr
><tr
id=sl_svn20_1359

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1360

><td class="source">      if (k &lt; elements.length) {<br></td></tr
><tr
id=sl_svn20_1361

><td class="source">        // finish up in a continuation<br></td></tr
><tr
id=sl_svn20_1362

><td class="source">        setTimeout(doWork, 250);<br></td></tr
><tr
id=sl_svn20_1363

><td class="source">      } else if (opt_whenDone) {<br></td></tr
><tr
id=sl_svn20_1364

><td class="source">        opt_whenDone();<br></td></tr
><tr
id=sl_svn20_1365

><td class="source">      }<br></td></tr
><tr
id=sl_svn20_1366

><td class="source">    }<br></td></tr
><tr
id=sl_svn20_1367

><td class="source"><br></td></tr
><tr
id=sl_svn20_1368

><td class="source">    doWork();<br></td></tr
><tr
id=sl_svn20_1369

><td class="source">  }<br></td></tr
><tr
id=sl_svn20_1370

><td class="source"><br></td></tr
><tr
id=sl_svn20_1371

><td class="source">  window[&#39;prettyPrintOne&#39;] = prettyPrintOne;<br></td></tr
><tr
id=sl_svn20_1372

><td class="source">  window[&#39;prettyPrint&#39;] = prettyPrint;<br></td></tr
><tr
id=sl_svn20_1373

><td class="source">  window[&#39;PR&#39;] = {<br></td></tr
><tr
id=sl_svn20_1374

><td class="source">        &#39;createSimpleLexer&#39;: createSimpleLexer,<br></td></tr
><tr
id=sl_svn20_1375

><td class="source">        &#39;registerLangHandler&#39;: registerLangHandler,<br></td></tr
><tr
id=sl_svn20_1376

><td class="source">        &#39;sourceDecorator&#39;: sourceDecorator,<br></td></tr
><tr
id=sl_svn20_1377

><td class="source">        &#39;PR_ATTRIB_NAME&#39;: PR_ATTRIB_NAME,<br></td></tr
><tr
id=sl_svn20_1378

><td class="source">        &#39;PR_ATTRIB_VALUE&#39;: PR_ATTRIB_VALUE,<br></td></tr
><tr
id=sl_svn20_1379

><td class="source">        &#39;PR_COMMENT&#39;: PR_COMMENT,<br></td></tr
><tr
id=sl_svn20_1380

><td class="source">        &#39;PR_DECLARATION&#39;: PR_DECLARATION,<br></td></tr
><tr
id=sl_svn20_1381

><td class="source">        &#39;PR_KEYWORD&#39;: PR_KEYWORD,<br></td></tr
><tr
id=sl_svn20_1382

><td class="source">        &#39;PR_LITERAL&#39;: PR_LITERAL,<br></td></tr
><tr
id=sl_svn20_1383

><td class="source">        &#39;PR_NOCODE&#39;: PR_NOCODE,<br></td></tr
><tr
id=sl_svn20_1384

><td class="source">        &#39;PR_PLAIN&#39;: PR_PLAIN,<br></td></tr
><tr
id=sl_svn20_1385

><td class="source">        &#39;PR_PUNCTUATION&#39;: PR_PUNCTUATION,<br></td></tr
><tr
id=sl_svn20_1386

><td class="source">        &#39;PR_SOURCE&#39;: PR_SOURCE,<br></td></tr
><tr
id=sl_svn20_1387

><td class="source">        &#39;PR_STRING&#39;: PR_STRING,<br></td></tr
><tr
id=sl_svn20_1388

><td class="source">        &#39;PR_TAG&#39;: PR_TAG,<br></td></tr
><tr
id=sl_svn20_1389

><td class="source">        &#39;PR_TYPE&#39;: PR_TYPE<br></td></tr
><tr
id=sl_svn20_1390

><td class="source">      };<br></td></tr
><tr
id=sl_svn20_1391

><td class="source">})();<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn20_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn20_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/html5slides/source/detail?spec=svn20&amp;r=2">r2</a>
 by mwich...@google.com
 on May 20, 2011
 &nbsp; <a href="/p/html5slides/source/diff?spec=svn20&r=2&amp;format=side&amp;path=/trunk/prettify.js&amp;old_path=/trunk/prettify.js&amp;old=">Diff</a>
 </div>
 <pre>--</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/html5slides/source/detail?r=2&spec=svn20';
 var publish_url = '/p/html5slides/source/detail?r=2&spec=svn20#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/prettify.js');
 changed_urls.push('/p/html5slides/source/browse/trunk/prettify.js?r\x3d2\x26spec\x3dsvn20');
 
 var selected_path = '/trunk/prettify.js';
 
 
 changed_paths.push('/trunk/slides-local.js');
 changed_urls.push('/p/html5slides/source/browse/trunk/slides-local.js?r\x3d2\x26spec\x3dsvn20');
 
 
 changed_paths.push('/trunk/slides.js');
 changed_urls.push('/p/html5slides/source/browse/trunk/slides.js?r\x3d2\x26spec\x3dsvn20');
 
 
 changed_paths.push('/trunk/styles.css');
 changed_urls.push('/p/html5slides/source/browse/trunk/styles.css?r\x3d2\x26spec\x3dsvn20');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/html5slides/source/browse/trunk/prettify.js?r=2&amp;spec=svn20"
 selected="selected"
 >/trunk/prettify.js</option>
 
 <option value="/p/html5slides/source/browse/trunk/slides-local.js?r=2&amp;spec=svn20"
 
 >/trunk/slides-local.js</option>
 
 <option value="/p/html5slides/source/browse/trunk/slides.js?r=2&amp;spec=svn20"
 
 >/trunk/slides.js</option>
 
 <option value="/p/html5slides/source/browse/trunk/styles.css?r=2&amp;spec=svn20"
 
 >/trunk/styles.css</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fhtml5slides%2Fsource%2Fbrowse%2Ftrunk%2Fprettify.js&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fhtml5slides%2Fsource%2Fbrowse%2Ftrunk%2Fprettify.js"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/html5slides/source/list?path=/trunk/prettify.js&start=2">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 53996 bytes,
 1391 lines</div>
 
 <div><a href="//html5slides.googlecode.com/svn/trunk/prettify.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/17950784993885590195/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/17950784993885590195/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/17950784993885590195/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn20': '/trunk/prettify.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/17950784993885590195","projectHomeUrl":"/p/html5slides","relativeBaseUrl":"","projectName":"html5slides","loggedInUserEmail":null}, '', 'svn20', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/17950784993885590195/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/17950784993885590195/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 <div class="text">
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

