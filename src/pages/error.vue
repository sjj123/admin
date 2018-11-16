<template>
    <div>
        <Row type="flex" justify="center" align="middle" class="errorbg">
            <Col span="4">
                <img src="../image/404.png" alt="" class="img">
            </Col>
            <Col span="8">
                <div class="tip">
                    <span class="type">404</span>
                    <div>LOOKS LIKE YOU’RE LOST </div>
                    <span>The page you are looking for not availble!</span>
                    <div class="back">
                        <router-link to="/">
                            <span>GO TO HOME </span>
                        </router-link>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang='scss' >
    @import '../style/common.scss';
    .errorbg{
        width: 100%;
        height: 100%;
        background: $white;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .img{
            width: 100%;
        }
        .tip{
            .type{
                font-size: 120px;
                color: #1951FC;
                font-weight: bold;
            }
            .back{
                font-size: 14px;
                margin-top: 40px;
            }
        }
    }

</style>


