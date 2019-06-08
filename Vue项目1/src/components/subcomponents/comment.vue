<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="最多输入120个字" maxlength="120"></textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间： 2019-5-20
                </div>
                <div class="cmt-body">
                    这是我评论的内容
                </div>
                <div class="cmt-title">
                    第1楼&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间： 2019-5-20
                </div>
                <div class="cmt-body">
                    这是我评论的内容
                </div>
                <div class="cmt-title">
                    第1楼&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间： 2019-5-20
                </div>
                <div class="cmt-body">
                    这是我评论的内容
                </div>
                <div class="cmt-title">
                    第1楼&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间： 2019-5-20
                </div>
                <div class="cmt-body">
                    这是我评论的内容
                </div>
                <div class="cmt-title">
                    第1楼&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间： 2019-5-20
                </div>
                <div class="cmt-body">
                    这是我评论的内容
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            pageIndex: 1,
            comments: []
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments() {
            this.$http.get('http://www.liulongbin.top:3005/api/getcomments/' + this.id + '?pageindex=' +
            this.pageIndex).then(result => {
                if(result.body.status === 0 ) {
                    // this.comments = result.body.message;
                    this.comments = this.comments.concat(result.body.message)
                }else {
                    Toast('获取评论失败');
                }
            })
        },
        getMore() {
            this.pageIndex++;
            this.getComments();
        }
    },
    props: ['id']
}
</script>

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                };
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>