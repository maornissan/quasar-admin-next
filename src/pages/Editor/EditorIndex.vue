<template>
  <q-page padding>
    <div class="row">
      <q-editor
        class="col-12"
        min-height="25rem"
        v-model="qeditor"
        :dense="$q.screen.lt.md"
        :definitions="{
          save: {
            tip: 'Save your work',
            icon: 'save',
            label: 'Save',
            handler: saveWork,
          },
          upload: {
            tip: 'Upload to cloud',
            icon: 'cloud_upload',
            label: 'Upload',
            handler: uploadIt,
          },
        }"
        :toolbar="[
          [
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              list: 'only-icons',
              options: ['left', 'center', 'right', 'justify'],
            },
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              options: ['left', 'center', 'right', 'justify'],
            },
          ],
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['token', 'hr', 'link', 'custom_btn'],
          ['print', 'fullscreen'],
          [
            {
              label: $q.lang.editor.formatting,
              icon: $q.iconSet.editor.formatting,
              list: 'no-icons',
              options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
            },
            {
              label: $q.lang.editor.fontSize,
              icon: $q.iconSet.editor.fontSize,
              fixedLabel: true,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'size-1',
                'size-2',
                'size-3',
                'size-4',
                'size-5',
                'size-6',
                'size-7',
              ],
            },
            {
              label: $q.lang.editor.defaultFont,
              icon: $q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
                'arial',
                'arial_black',
                'comic_sans',
                'courier_new',
                'impact',
                'lucida_grande',
                'times_new_roman',
                'verdana',
              ],
            },
            'removeFormat',
          ],
          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
          ['upload', 'save'],

          ['undo', 'redo'],
          ['viewsource'],
        ]"
        :fonts="{
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana',
        }"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const qeditor = ref(
  '<pre>View console to check out your input on save.' + '</pre> '
);

function saveWork() {
  console.log(qeditor.value);
}

function uploadIt() {
  null;
}
</script>

<style></style>
