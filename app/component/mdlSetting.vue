<template>
    <modal :show.sync="show" :backdrop="static" effect="zoom">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">Setting</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label for="cbAutoUpdate" class="col-xs-3 control-label"></label>
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" id="cbAutoUpdate"> Auto update when app started if checked.
                          </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="filePath" class="col-xs-3 control-label"></label>
                    <div class="col-xs-6">
                        <input type="text" class="form-control" placeholder="Choose the path to your WOW.">
                    </div>
                </div>
            </div>
        </div>
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-success" @click='close'>Close</button>
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
