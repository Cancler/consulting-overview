<script setup>

import TestView from "@/views/TestView";

// // ############################################################################
//
// import {computed, ref} from "vue";
// import {app} from '@electron/remote';
// import fs from 'fs';
// import pathModule from 'path';
// import FilesViewer from "@/components/FilesViewer";
//
// // ############################################################################
//
// const path = ref(app.getAppPath());
// const search_string = ref("");
//
// // ############################################################################
//
// const files = computed(() => {
//     const file_names = fs.readdirSync(path.value);
//
//     return file_names
//         .map(file => {
//             const stats = fs.statSync(pathModule.join(path.value, file));
//
//             return {
//                 name: file,
//                 size: stats.isFile() ? format_size(stats.size ?? 0) : null,
//                 directory: stats.isDirectory()
//             }
//         })
//         .sort((a, b) => {
//             if(a.directory === b.directory) {
//                 return a.name.localeCompare(b.name);
//             }
//
//             return a.directory ? -1 : 1
//         })
// });
// const filtered_files = computed(() => {
//     return search_string.value
//         ? files.value.filter(s => s.name.startsWith(search_string.value))
//         : files.value;
// });
//
// // ############################################################################
//
// const format_size = size => {
//     let i = Math.floor(Math.log(size) / Math.log(1024));
//
//     return (
//         (size / Math.pow(1024, i)).toFixed(2) * 1
//         + ' '
//         + ['B', 'kB', 'GB', 'TB'][i]
//     )
// };
//
// const open = folder => {
//     path.value = pathModule.join(path.value, folder);
// }
//
// const back = () => {
//     path.value = pathModule.dirname(path.value);
// }

// ############################################################################
</script>

<template>
    <TestView></TestView>
<!--    <div class="container mt-2">-->
<!--        <h4>{{ path }}</h4>-->
<!--        <div class="form-group mt-4 mb-2">-->
<!--            <input-->
<!--                v-model="search_string"-->
<!--                class="form-control form-control-sm"-->
<!--                placeholder="File search"-->
<!--            />-->
<!--        </div>-->
<!--        <FilesViewer-->
<!--            :files="filtered_files"-->
<!--            @back="back"-->
<!--            @on_folder_click="open($event.name)"-->
<!--        />-->
<!--    </div>-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
