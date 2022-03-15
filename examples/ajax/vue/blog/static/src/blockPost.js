const blockPostC = {
    props: ['title'],
    template: `
    <div class="post">
        <h1 v-if="title">{{ title }}</h1>
        <p v-for="paragraph in paragraphs" v-if="!loading">{{ paragraph }}</p>
        <img v-if="loading" src='/static/images/loading.gif'/>
    </div>
    `,
    data: function() {
        return { 
            paragraphs: [], 
            loading: false, 
        }
    },
    // watch: {
    //     title: function(){
    //         // executed every time title changes
    //         this.load();
    //     }
    // },
    created: function(){
        this.load();
    },
    methods: {
        load: async function(){
            if (!this.title){
                return;
            }
            let response = await fetch('/post?title='+ this.title);
            if (response.status == 200){
                let result = await response.json();
                this.paragraphs = result;
                this.loading= false;
            }
        }
    }
}