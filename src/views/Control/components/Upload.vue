<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import type { UploadRequestOptions } from 'element-plus'
import { Plus, UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

let form = ref({})

let imageUrl = ref('')

let formOption = ref<formOption[]>([
  {
    type: 'upload',
    formItem: {
      prop: 'key1',
      label: '基础用法',
    },
    control: {
      httpRequest: submitUpload,
      accept: '.jpg, .png',
      slot: {
        tip: () => <div class="el-upload__tip">文件格式：.jpg, .png</div>,
      }
    }
  },
  {
    type: 'upload',
    formItem: {
      prop: 'key2',
      label: '用户头像',
    },
    control: {
      showFileList: false,
      httpRequest: submitUpload,
      accept: '.jpg, .png',
      slot: {
        default: () => <>{imageUrl.value !== '' ? <img src={imageUrl.value} class="avatar" /> : <el-icon class="avatar-uploader-icon"><Plus /></el-icon>}</>,
      }
    }
  },
  {
    type: 'upload',
    formItem: {
      prop: 'key3',
      label: '照片墙',
    },
    control: {
      listType: "picture-card",
      httpRequest: submitUpload,
      accept: '.jpg, .png',
      slot: {
        default: () => <el-icon class="avatar-uploader-icon"><Plus /></el-icon>,
      }
    }
  },
  {
    type: 'upload',
    formItem: {
      prop: 'key4',
      label: '图片列表',
    },
    control: {
      listType: "picture",
      httpRequest: submitUpload,
      accept: '.jpg, .png',
    }
  },
  {
    type: 'upload',
    formItem: {
      prop: 'key5',
      label: '拖拽上传',
    },
    control: {
      drag: true,
      httpRequest: submitUpload,
      accept: '.jpg, .png',
      slot: {
        default: () => <>
          <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
        </>,
      }
    }
  },
])

async function submitUpload(content: UploadRequestOptions) {
  if (content.file.size / 1024 / 1024 > 20) return ElMessage.warning('上传文件大小不能超过 20MB')
  imageUrl.value = URL.createObjectURL(content.file)
}
</script>
<style lang="scss" scoped>
:deep(.el-upload.el-upload--text) {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    border: 1px dashed var(--el-border-color);
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
}
</style>
