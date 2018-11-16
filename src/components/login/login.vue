<template>
    <div class="loginbg">
        <div class="loginbox">
            <div class="content">
                <Form>
                    <FormItem>
                        <Input type="text"  placeholder="Username"></Input>
                    </FormItem>   
                    <FormItem>
                        <Input type="password"  placeholder="password"></Input>
                    </FormItem>
                    <FormItem class="signin">
                        <Button type="primary" >signin</Button>
                    </FormItem>                       
                </Form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
       data(){
           return {

           }
       },
       methods:{

       },
       mounted(){

       },
       components:{

       }
    }
</script>
<style lang='scss'>
    @import "../../style/common.scss";
    .loginbg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $blue;
    }
    .loginbox{
        width: 300px;
        padding: 30px;
        background: $white;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 4px;
    }
    .signin{
        margin-bottom:0
    }
</style>