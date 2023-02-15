

<template>
  <div class="main">
    <el-button ref="buttonRef" @click="initEmo" type="" plain>😋</el-button>
    <div class="tabs" :style="{ visibility: isShow ? 'visible' : 'hidden' }">
      <el-tabs v-model="activeName" class="tabs-main" v-loading="loading">
        <el-tab-pane v-for="(item, index) in emo.emoData" :key="index" :label="item.name" :name="item.id">
          <a :href="pic.icon" @click.stop="pushToComment($event, pic.icon)" :alt="pic.name" v-for="pic in item.list"
            :key="pic.id" target="_blank">
            <img :src="pic.icon" :alt="pic.name" class="emoji">
          </a>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGenshinEmo } from './store/index'
import { ref } from 'vue'
const buttonRef = ref()
const loading = ref(true)
const activeName = ref(0)
const emo = useGenshinEmo()
let loaded = false
const isShow = ref(false)
const initEmo = async () => {
  try {
    if (isShow.value) {
      isShow.value = false
      parent.postMessage({ frameHeight: buttonRef.value?.ref.offsetHeight }, "*")
    } else {
      isShow.value = true
      parent.postMessage({ frameHeight: document.body.offsetHeight }, "*")

    }
    if (!loaded) {
      await emo.getEmotion()
      emo.emoData.splice(0, 1)
      emo.emoData.pop()
      activeName.value = emo.emoData[0].id
      parent.postMessage({ frameHeight: document.body.offsetHeight }, "*")
      loading.value = false
      loaded = true
    }
  }
  catch (e) {
    console.warn('Genshin Emoji组件好像出问题咯!');
    console.warn(e);
  }
}
const pushToComment = (e: MouseEvent, icon: string) => {
  e.preventDefault()
  parent.postMessage({ emoUrl: icon }, "*")
}
</script>

<style scoped lang="less">
.main {
  overflow: hidden;
}

.emoji {
  width: 50px;
}

:deep(.el-tabs__item):hover,
:deep(.el-tabs__item).is-active {
  color: pink;
}

:deep(.el-tabs__active-bar) {
  background-color: pink;
}

:deep(.el-popper) {
  width: 97%;
}

:deep(.el-button) {
  background: transparent;
  border: 1px solid #ccc;
}

:deep(.el-button):focus,
:deep(.el-button):hover,
:deep(.el-button):active {
  border-color: pink;
}

:deep(.el-loading-mask) .circular circle {
  stroke: pink;
}

.tabs {
  overflow: hidden;

  :deep(.el-tabs__content) {
    height: 300px;
    overflow: auto;

  }

  :deep(.el-tabs__item) {
    font-weight: bold;
    color: rgba(0, 153, 255, 0.767);
  }
}
</style>
