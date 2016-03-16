<template>
    <modal :show.sync="show" effect="zoom">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">关于 {{ appName }}</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <div class="row">
                <div class="col-xs-6 col-xs-offset-3 centered">
                    <img v-animation animate="tada" src="../assets/avatar_2016.jpg" width="155" height="155" />
                </div>
            </div>
        </div>
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-success" @click='close'>关闭</button>
        </div>
    </modal>
</template>

<script>
    import {modal} from 'vue-strap'
    import electron from 'electron'
    const remote = electron.remote
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
        },
        data: () => {
            return {
                appName: remote.app.getName()
            }
        }
    }

</script>
