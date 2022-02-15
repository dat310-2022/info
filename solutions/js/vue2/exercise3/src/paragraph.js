let myPC = {
    props: ["paragraph"],
    template: /*html*/`
        <div>
            <p class="clickable"
                v-on:dblclick="isEdit= true"
                v-if="!isEdit">
                {{ text }}
            </p>
            <textarea rows="10"
                v-if="isEdit"
                v-model="text"
                v-on:keypress="close"
            ></textarea>
        </div>

    `,
    data: function(){
        return { 
            text: this.paragraph,
            isEdit: false
        }
    },
    methods: {
        close: function($event){
            if ($event.keyCode == 13){
                this.$emit("update",this.text);
                this.isEdit = false;
            }
        }
    }
}