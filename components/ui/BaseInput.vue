<template>
  <div class="input__container">
    <div class="input">
      <label class="input__label" :class="[{
          'input__label-filled': inputValue !== '',
          'input__label-error': isError || errorText !== ''
        }]">
        <input
          v-model="inputValue"
          :type="type"
          @input="$emit('input', inputValue)"
          @change="$emit('change', inputValue)"
          ref="input"
        />
        <div class="label-text" :class="[{'label-text-error': errorText}]"><span>{{ errorText ? errorText : placeholder }}</span></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
  },
  data(){
    return {
      inputValue: '',
    }
  },
  watch: {
    value(val){
      this.inputValue = val;
    }
  },
  mounted(){
    this.inputValue = this.value;
  },
}
</script>


<style scoped>

  .input {
    position: relative;
    width: 100%;
  }

  .input__container {
    width: 100%;
  }

  .input__label {
    display: block;
  }

  .input__label-error input {
    border: 1px solid #c44512!important;
  }

  .input__label input {
    border: 1px solid #dadada;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    outline: none;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .input__label .label-text {
    width: max-content;
    transform: translateY(-55px);
    transition: all 0.3s ease;
    cursor: text;
    margin-left: 11px;
    height: 0;
    color: #555;
    font-size: 18px;
  }

  .label-text span {
    background-color: white;
    padding: 0 5px;
  }

  .label-text-error {
    color: #c44512!important;
  }

  .input__label input:focus + .label-text, .input__label-filled .label-text {
    transform: translateY(-85px);

    color: #4b84da;
  }

  .input__label input:focus{
    outline: none;
  }

  .input__label input::-webkit-outer-spin-button,
  .input__label input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
