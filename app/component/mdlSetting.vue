<template>
    <modal :show.sync="show" :backdrop="static" effect="zoom">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">设置</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label for="cbAutoUpdate" class="col-xs-3 control-label"></label>
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" id="cbAutoUpdate"> 程序启动时自动更新
                          </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="filePath" class="col-xs-3 control-label"></label>
                    <div class="col-xs-6">
                        <input type="text" class="form-control" placeholder="选择 wow 所在目录">
                    </div>
                </div>
            </div>
        </div>
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-success" @click='close'>确定</button>
        </div>
    </modal>
</template>

<script>
    import {modal} from 'vue-strap'
    export default {
        props: {
            show: {
                type: Boolean,
                twoWay: true,
            },
        },
        methods: {
            close() {
                this.show = false
            }
        },
        ready() {
        },
        components: {
            modal
        }
    }

</script>
