<template>
    <div class="navbar navbar-inverse titlebar navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <div class="navbar-brand">{{ $t('Label.PluginBox') }}</div>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse">
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="{{ $t('Label.Search') }}" v-model="filterKey">
                    </div>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" @click="isShowAbout = !isShowAbout">
                            <span class="glyphicon glyphicon-info-sign"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" @click="isShowSetting = !isShowSetting">
                            <span class="glyphicon glyphicon-cog"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {tooltip} from 'vue-strap'

    export default {
        props: {
            isShowAbout: {
                type: Boolean,
                twoWay: true
            },
            isShowSetting: {
                type: Boolean,
                twoWay: true
            },
            filterKey: {
                type: String,
                twoWay: true
            }
        },
        components: {
            tooltip
        },
        data: () => {
            return {
            }
        }
    }
</script>
