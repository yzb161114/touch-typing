<template>
	<div class='macbook'>
		<ul class='keyrow'>
			<keybutton :mainText='"`"' :subText='"~"' :buttonType='"mark"' :keyCode='192'></keybutton>
			<keybutton :mainText='"1"' :subText='"!"' :buttonType='"mark"' :keyCode='49'></keybutton>
			<keybutton :mainText='"2"' :subText='"@"' :buttonType='"mark"' :keyCode='50'></keybutton>
			<keybutton :mainText='"3"' :subText='"#"' :buttonType='"mark"' :keyCode='51'></keybutton>
			<keybutton :mainText='"4"' :subText='"$"' :buttonType='"mark"' :keyCode='52'></keybutton>
			<keybutton :mainText='"5"' :subText='"%"' :buttonType='"mark"' :keyCode='53'></keybutton>
			<keybutton :mainText='"6"' :subText='"^"' :buttonType='"mark"' :keyCode='54'></keybutton>
			<keybutton :mainText='"7"' :subText='"&"' :buttonType='"mark"' :keyCode='55'></keybutton>
			<keybutton :mainText='"8"' :subText='"*"' :buttonType='"mark"' :keyCode='56'></keybutton>
			<keybutton :mainText='"9"' :subText='"("' :buttonType='"mark"' :keyCode='57'></keybutton>
			<keybutton :mainText='"0"' :subText='")"' :buttonType='"mark"' :keyCode='48'></keybutton>
			<keybutton :mainText='"-"' :subText='"_"' :buttonType='"mark"' :keyCode='189'></keybutton>
			<keybutton :mainText='"="' :subText='"+"' :buttonType='"mark"' :keyCode='187'></keybutton>
			<keybutton :mainText='"delete"' :buttonType='"fnr"' :keyCode='8'></keybutton>
		</ul>
		<ul class='keyrow'>
			<keybutton :mainText='"tab"' :buttonType='"fnl"' :keyCode='9'></keybutton>
			<keybutton :mainText='"Q"' :keyCode='81'></keybutton>
			<keybutton :mainText='"W"' :keyCode='87'></keybutton>
			<keybutton :mainText='"E"' :keyCode='69'></keybutton>
			<keybutton :mainText='"R"' :keyCode='82'></keybutton>
			<keybutton :mainText='"T"' :keyCode='84'></keybutton>
			<keybutton :mainText='"Y"' :keyCode='89'></keybutton>
			<keybutton :mainText='"U"' :keyCode='85'></keybutton>
			<keybutton :mainText='"I"' :keyCode='73'></keybutton>
			<keybutton :mainText='"O"' :keyCode='79'></keybutton>
			<keybutton :mainText='"P"' :keyCode='80'></keybutton>
			<keybutton :mainText='"["' :subText='"{"' :buttonType='"mark"' :keyCode='219'></keybutton>
			<keybutton :mainText='"]"' :subText='"}"' :buttonType='"mark"' :keyCode='221'></keybutton>
			<keybutton :mainText='"\\"' :subText='"|"' :buttonType='"mark"' :keyCode='220'></keybutton>
		</ul>
		<ul class='keyrow'>
			<keybutton :mainText='"A"' :keyCode='65'></keybutton>
			<keybutton :mainText='"S"' :keyCode='83'></keybutton>
			<keybutton :mainText='"D"' :keyCode='68'></keybutton>
			<keybutton :mainText='"F"' :keyCode='70'></keybutton>
			<keybutton :mainText='"G"' :keyCode='71'></keybutton>
			<keybutton :mainText='"H"' :keyCode='72'></keybutton>
			<keybutton :mainText='"J"' :keyCode='74'></keybutton>
			<keybutton :mainText='"K"' :keyCode='75'></keybutton>
			<keybutton :mainText='"L"' :keyCode='76'></keybutton>
			<keybutton :mainText='";"' :subText='":"' :buttonType='"mark"' :keyCode='186'></keybutton>
			<keybutton :mainText="'\''" :subText='"\""' :buttonType='"mark"' :keyCode='222'></keybutton>
		</ul>
		<ul class='keyrow'>
			<keybutton :mainText='"shift"' :buttonType='"fnl"' :keyCode='1600'></keybutton>
			<keybutton :mainText='"Z"' :keyCode='90'></keybutton>
			<keybutton :mainText='"X"' :keyCode='88'></keybutton>
			<keybutton :mainText='"C"' :keyCode='67'></keybutton>
			<keybutton :mainText='"V"' :keyCode='86'></keybutton>
			<keybutton :mainText='"B"' :keyCode='66'></keybutton>
			<keybutton :mainText='"N"' :keyCode='78'></keybutton>
			<keybutton :mainText='"M"' :keyCode='77'></keybutton>
			<keybutton :mainText='","' :subText='"<"' :buttonType='"mark"' :keyCode='188'></keybutton>
			<keybutton :mainText='"."' :subText='">"' :buttonType='"mark"' :keyCode='190'></keybutton>
			<keybutton :mainText='"/"' :subText='"?"' :buttonType='"mark"' :keyCode='191'></keybutton>
			<keybutton :mainText='"shift"' :buttonType='"fnr"' :keyCode='1601'></keybutton>
		</ul>
		<ul class='keyrow'>
			<keybutton :mainText='""' :buttonType='"space"' :keyCode='32'></keybutton>
			<keybutton :mainText='""' :buttonType='"empty"'></keybutton>
		</ul>
	
  </div>
</template>

<script>
import keybutton from "./keybutton";
export default {
	components: {
		'Keybutton': keybutton
	}
}
</script>

<style scoped>
.macbook {
	display: table;
	margin: auto;
}
.keyrow {
	display: table-row;
}
</style>