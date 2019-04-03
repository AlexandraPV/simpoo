<template>
    <div class="root">
        {{ test }}

        <input v-model="input_value" type="text ">
        <grid-layout
                :layout.sync="layout"
                :col-num="12"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :is-mirrored="false"
                :vertical-compact="true"
                :margin="[10, 10]"
                :use-css-transforms="true"
                :autoSize='false'
        >

            <grid-item class="back-color" v-for="item in layout"
                       :key="item.i"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :i="item.i"
                       v-html="item.html"
            >
                {{ item.i }}

            </grid-item>
        </grid-layout>
        <button @click="test_function">Clock!</button>
    </div>
</template>

<script>
    import VueGridLayout from 'vue-grid-layout';

    var testLayout = [
        {"x": 0, "y": 0, "w": 12, "h": 5, "i": "0", 'html': '<p>  lorem ipsum 1</p>'},
        {"x": 2, "y": 0, "w": 2, "h": 10, "i": "1", 'html': '<p><input type="text "> lorem ipsum 2</p>'},
        {"x": 4, "y": 0, "w": 2, "h": 10, "i": "2", 'html': '<p> lorem ipsum 3</p>'},
        {"x": 6, "y": 0, "w": 2, "h": 10, "i": "3", 'html': '<p> lorem ipsum 4</p>'},
        {"x": 8, "y": 0, "w": 2, "h": 10, "i": "4", 'html': '<p> lorem ipsum 5</p>'},
        {"x": 10, "y": 0, "w": 2, "h": 10, "i": "5", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 0, "y": 5, "w": 2, "h": 10, "i": "6", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 2, "y": 5, "w": 2, "h": 10, "i": "7", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 4, "y": 5, "w": 2, "h": 10, "i": "8", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 6, "y": 4, "w": 2, "h": 10, "i": "9", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 8, "y": 4, "w": 2, "h": 10, "i": "10", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 10, "y": 4, "w": 2, "h": 10, "i": "11", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 0, "y": 10, "w": 2, "h": 10, "i": "12", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 2, "y": 10, "w": 2, "h": 10, "i": "13", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 4, "y": 8, "w": 2, "h": 10, "i": "14", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 6, "y": 8, "w": 2, "h": 10, "i": "15", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 8, "y": 10, "w": 2, "h": 10, "i": "16", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 10, "y": 4, "w": 2, "h": 10, "i": "17", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 0, "y": 9, "w": 2, "h": 10, "i": "18", 'html': '<p> lorem ipsum 1</p>'},
        {"x": 2, "y": 6, "w": 2, "h": 10, "i": "19", 'html': '<p> lorem ipsum 1</p>'}
    ];

    export default {

        data() {
            return {
                'test': 'vue component!',
                layout: testLayout,
                input_value: ''
            }
        },
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
        methods: {
            test_function() {
                alert(this.input_value);
            }
        }
    }
</script>