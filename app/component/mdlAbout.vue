<template>
    <modal :show.sync="show" effect="zoom">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">{{ $t('Label.About' )}} {{ $t('Label.AddonBox') }}</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <div class="row">
                <div class="col-xs-6 col-xs-offset-3 centered">
                    <img v-animation animate="tada" src="../assets/avatar_2016.jpg" width="155" height="155" />
                    <div class="panel panel-default" style="margin-top:5px;">
                      <div class="panel-body">
                        <div class="btn-group btn-group-justified">
                          <a href="#" @click="visitGithub()" class="btn btn-warning">
                            {{ $t('Modals.About.Github') }}
                          </a>
                          <a href="#" @click="visitBlog()" class="btn btn-default">
                            {{ $t('Modals.About.Blog') }}
                          </a>
                        </div>
                      </div>
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
    import {modal} from 'vue-strap'
    import electron from 'electron'
    const remote = electron.remote
    const shell = remote.shell

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
            },
            visitGithub() {
                shell.openExternal('https://github.com/iFrankYang/AddonBox')
            },
            visitBlog() {
                shell.openExternal('https://codebear.xyz')
            }
        },
        ready() {
        },
        components: {
            modal
        },
        data: () => {
            return {
            }
        }
    }

</script>
