<template>
  <li :class='["keybutton", buttonType, bgColor]' :style='{ "width": keyWidth + "px" }'>
    <span v-if='isLetter'>{{ mainText }}</span>
    <ul v-if='isMark' >
      <li>{{ subText }}</li> 
      <li>{{ mainText }}</li>
    </ul>
    <ul v-if='isFn'>
      <li>{{ subText }}</li> 
      <li>{{ mainText }}</li>
    </ul>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    buttonType: {
      type: String,
      default: 'letter'
    },
    mainText: {
      type: String,
      required: true
    },
    subText: {
      type: String
    },
    keyCode: {
      type: Number
    }
  },
  data: function () {
    return {
      normalWidth: 40,
      keyMargin: 2
    }
  },
  computed: {
    ...mapGetters ({
      currKey: 'getCurrKey',
      shiftKey: 'getShiftKey'
    }),
    isLetter: function () {
      return this.buttonType === 'letter'
    },
    isMark: function () {
      return this.buttonType === 'mark'
    },
    isFn: function () {
      return this.buttonType === 'fnl' || this.buttonType === 'fnr'
    },
    isSpace: function () {
      return this.buttonType === 'space'
    },
    isEmpty: function () {
      return this.buttonType === 'empty'
    },
    bgColor: function () {
      if( !this.currKey || !this.keyCode ){
        return 'black'
      }
      console.log(this.shiftKey)
      if ( this.shiftKey.keydown && this.keyCode === this.shiftKey.code ) {
        return 'green'
      }
      if ( this.keyCode !== this.currKey ) {
        return 'black'
      }
      return 'green'
    },
    keyWidth: function () {
      if ( this.mainText === 'delete' || this.mainText === 'tab' ){
        return 61
      } else if ( this.mainText === 'shift' ){
        return 90
      } else if ( this.isSpace ) {
        return 216
      }
      return 40
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin normal-size {
  height: 40px; 
  width: 40px; 
  margin: 2px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  line-height: 40px;
  display: inline-block;
}

.black {
  background-color: black;
}

.green {
  background-color: greenyellow;
}

.keybutton {
  display: table-cell;
}

.letter {
  @include normal-size();
  text-align: center;
  font-size: 16px;
}

.mark {
  @include normal-size();
  text-align: center;
  font-size: 14px;
  vertical-align: bottom;
  ul {
    height: 100%;
    li {
      width: 100%;
      height: 50%;
      margin: 0;
      display: block;
    }
    li:first-child {
      line-height: 150%;
    }
    li:last-child {
      line-height: 120%;
    }
  }
}

.fnl {
  text-align: left;
  padding-left: 10px;
}

.fnr {
  text-align: right;
  padding-right: 10px;
}

.fnl, .fnr {
  @include normal-size();
  font-size: 12px;
  vertical-align: bottom;
  font-weight: normal;
  ul {
    height: 100%;
    li {
      width: 100%;
      height: 50%;
      margin: 0;
      display: block;
    }
    li:first-child {
      line-height: 150%;
    }
    li:last-child {
      line-height: 120%;
    }
  }
}

.space {
  @include normal-size();
}

.empty {
  @include normal-size();
  opacity: 0;
}

</style>




