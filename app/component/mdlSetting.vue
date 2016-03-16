<template>
    <modal :show.sync="show" :backdrop="static" effect="zoom">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">设置</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label for="cbAutoUpdate" class="col-xs-3 control-label">自动更新：</label>
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label>
                                <input v-model="autoUpdate" type="checkbox" id="cbAutoUpdate"> 程序启动时自动更新
                          </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="txtWowPath" class="col-xs-3 control-label">设置目录：</label>
                    <div class="col-xs-6">
                        <input type="text" v-model="wowPath" id="txtWowPath" class="form-control" placeholder="选择 wow 所在目录">
                    </div>
                    <div class="col-xs-3">
                        <button class="btn btn-warning" @click="dirChoose">选择</button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="filePath" class="col-xs-3 control-label">同时下载数：</label>
                    <div class="col-xs-2">
                        <v-select placeholder="workerCount" :value.sync="workerCount">
                            <v-option value="5">5</v-option>
                            <v-option value="10">10</v-option>
                            <v-option value="15">15</v-option>
                            <v-option value="20">20</v-option>
                        </v-select>
                    </div>
                    <div class="col-xs-6">
                        <span class="help-block">程序同时下载数，设置过高可能导致错误。</span>
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
    import {
        modal,
        select,
        option
    } from 'vue-strap'
    import electron from 'electron'
    const remote = electron.remote
    const app = remote.app
    const dialog = remote.dialog

    export default {
        props: {
            show: {
                type: Boolean,
                twoWay: true,
            },
            workerCount: {
                twoWay: true,
            },
            wowPath: {
                twoWay: true,
            },
            autoUpdate: {
                type: Boolean,
                twoWay: true,
            },
        },
        methods: {
            close() {
                this.show = false
            },
            dirChoose() {
                dialog.showOpenDialog({
                    title: '选择 WOW 所在目录：',
                    properties: ['openDirectory']
                }, (paths) => {
                    if (typeof paths == 'undefined') {
                        dialog.showErrorBox('警告', '必须选择一个目录')
                    } else {
                        this.wowPath = paths.shift()
                    }
                })
            }
        },
        ready() {
            if (!this.workerCount) {
                this.workerCount = 10
            }
        },
        components: {
            modal,
            'v-select': select,
            'v-option': option
        }
    }

</script>
