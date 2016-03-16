<template>
    <nav class="navbar navbar-inverse titlebar">
        <div class="container-fluid">
            <div class="navbar-header">
                <div class="navbar-brand">PluginBox</div>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse">
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search" v-model="filterKey">
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
    </nav>
</template>

<script>
    export default {
        props: {
            isShowAbout: {
                type: Boolean,
                twoWay: true
            },
            isShowSetting: {
                type: Boolean,
                twoWay: true
            }
        },
        ready() {
            this.$watch('isShowAbout', (val) => {
                console.log('isShowAbout: ' + val)
            })
        }
    }
</script>
