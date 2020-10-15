<template>
    <div class="row">
        <div class="col-md-12">
            <div class="frame">
            <ul style="width:95%">
                <li v-for="(msg, index) in chat" :key="index" style="width:100%">
                <div :class="`${msg.isMine == true ? 'msj-rta' : 'msj'} macro`">
                    <div :class="`text ${msg.isMine == true ? 'text-r' : 'text-l'}`">
                    <p><strong>{{msg.nickname}}</strong></p>
                    <p>{{msg.text}}</p>
                    <p><small>{{msg.timestamp}}</small></p>
                    </div>
                </div>
                </li>
            </ul>
            <div style="width:95%">
                <div class="msj-rta macro" style="margin:auto">                        
                    <div class="text text-r" style="background:whitesmoke !important;width:100%!important">
                        <form v-on:submit.prevent="sendMessage">
                        <input v-model="inputMsg" class="mytext" placeholder="Scrivi un messaggio" style="width:100%!important"/>
                        </form>
                    </div> 
                </div>
            </div>
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            inputMsg: "",
        }
    },
    props: ["chat"],
    methods: {
        async sendMessage () {
            var chatRes = await this.$axios.$post(`${this.$config.LESSONS_BASE_URL}/lesson/${this.$route.params.id}/chat/message`, { text: this.inputMsg })
            this.chat.push({
            text: this.inputMsg,
            nickname: "",
            timestamp: new Date(chatRes.timestamp).toLocaleString(),
            isMine: true
            })
            this.inputMsg = ""
        },
    }
}
</script>
<style scoped>
.mytext{
    border:0;padding:10px;background:whitesmoke;
}
.text{
    width:75%;display:flex;flex-direction:column;
}
.text > p:first-of-type{
    width:100%;margin-top:0;margin-bottom:auto;line-height: 13px;font-size: 12px;
}
.text > p:last-of-type{
    width:100%;text-align:right;color:silver;margin-bottom:-7px;margin-top:auto;
}
.text-l{
    float:left;padding-right:10px;
}        
.text-r{
    float:right;padding-left:10px;
}
.avatar{
    display:flex;
    justify-content:center;
    align-items:center;
    width:25%;
    float:left;
    padding-right:10px;
}
.macro{
    margin-top:5px;width:85%;border-radius:5px;padding:5px;display:flex;
}
.msj-rta{
    float:right;background:whitesmoke;
}
.msj{
    float:left;background:white;
}
.frame{
    background:#e0e0de;
    height:450px;
    overflow:hidden;
    padding:0;
}
.frame > div:last-of-type{
    position:absolute;bottom:5px;width:100%;display:flex;
}
ul {
    width:100%;
    list-style-type: none;
    padding:18px;
    position:absolute;
    bottom:32px;
    display:flex;
    flex-direction: column;

}
input:focus{
    outline: none;
}        
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #d4d4d4;
}
::-moz-placeholder { /* Firefox 19+ */
    color: #d4d4d4;
}
:-ms-input-placeholder { /* IE 10+ */
    color: #d4d4d4;
}
:-moz-placeholder { /* Firefox 18- */
    color: #d4d4d4;
}   
</style>