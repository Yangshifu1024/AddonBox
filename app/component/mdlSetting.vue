<template>
    <modal :show.sync="show" :backdrop="static" effect="zoom">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">{{ $t('Label.Setting') }}</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label for="cbAutoUpdate" class="col-xs-3 control-label">{{ $t('Modals.Setting.AutoUpdate') }}：</label>
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label>
                                <input v-model="autoUpdate" type="checkbox" id="cbAutoUpdate"> {{ $t('Modals.Setting.HelpAutoUpdate') }}
                          </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="txtWowPath" class="col-xs-3 control-label">{{ $t('Modals.Setting.DirChoose') }}：</label>
                    <div class="col-xs-6">
                        <input type="text" v-model="wowPath" id="txtWowPath" class="form-control" placeholder="{{ $t('Modals.Setting.HelpDirChoose') }}">
                    </div>
                    <div class="col-xs-3">
                        <button class="btn btn-warning" @click="dirChoose">{{ $t('Button.Choose') }}</button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="filePath" class="col-xs-3 control-label">{{ $t('Modals.Setting.Concurrency') }}：</label>
                    <div class="col-xs-2">
                        <v-select placeholder="workerCount" :value.sync="workerCount">
                            <v-option value="5">5</v-option>
                            <v-option value="10">10</v-option>
                            <v-option value="15">15</v-option>
                            <v-option value="20">20</v-option>
                        </v-select>
                    </div>
                    <div class="col-xs-6">
                        <span class="help-block">{{ $t('Modals.Setting.HelpConcurrency') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-success" @click='close'>{{ $t('Button.Ok') }}</button>
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
                    title: Vue.t('Modals.Setting.HelpDirChoose'),
                    properties: ['openDirectory']
                }, (paths) => {
                    if (typeof paths == 'undefined') {
                        dialog.showErrorBox(Vue.t('Label.Warning'), Vue.t('Modals.Setting.ErrorDirChoose'))
                    } else {
                        this.wowPath = paths.shift()
                    }
                })
            }
        },
        components: {
            modal,
            'v-select': select,
            'v-option': option
        }
    }

</script>
