

let app = Vue.createApp({
  template: /*html*/`
  <div>
      <button
      v-for="text in texts"
      v-bind:key="text.language"
      v-bind:class="['tab-button', { active: current.language === text.language }]"
      v-on:click="current = text"
    >
    {{ text.language }}
    </button>
    <div class="tab">
      <paragraph 
        v-for="p, index in current.paragraphs"
        v-bind:key="current.language + index"
        v-bind:paragraph="p"
        v-on:update="update($event, index);"
      >
      </paragraph>
    </div>
  </div>
  `,
  data() { 
    return {
      texts: texts,
      current: texts[0]
    }
  },
  methods: {
      update: function(newValue, index){
        this.current.paragraphs[index] = newValue;
      }
  }
});
app.component("paragraph", myPC);
app.mount("#app");

