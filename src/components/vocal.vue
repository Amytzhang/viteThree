<template>
  <div>
    音频
    <div id="timeline"></div>
    <div id="waveform"></div>
    <div v-if="showMinimap" id="minimap"></div>
    <audio controls></audio>
    <br />
    <el-button type="primary" @click="playPause">Play/Pause</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js' // import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import Hover, { HoverPluginOptions } from 'wavesurfer.js/dist/plugins/hover.js'
import Regions, { RegionParams } from 'wavesurfer.js/dist/plugins/regions.js'
import Minimap from 'wavesurfer.js/dist/plugins/minimap.js'
import Spectrogram from 'wavesurfer.js/dist/plugins/spectrogram.js'
import Timeline, { TimelinePluginOptions } from 'wavesurfer.js/dist/plugins/timeline.js'

const random = (min: number, max: number) => Math.random() * (max - min) + min
const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`
interface AudioPropsType {
  showHover?: boolean
  showTimeline?: boolean
  showMinimap?: boolean
  showRegions?: boolean
  showSpectrogram?: boolean
  showAudio?: boolean
  wavesurferOptions?: WaveSurferOptions
  miniMapOptions?: WaveSurferOptions
  hoverOptions?: HoverPluginOptions
  timeLineOptions?: TimelinePluginOptions
}

const props = withDefaults(defineProps<AudioPropsType>(), {
  showHover: true,
  showTimeline: true,
  showMinimap: false,
  showRegions: true,
  showSpectrogram: false,
  showAudio: false,
  wavesurferOptions: () => {
    return {
      container: '#waveform',
      url: '/music.mp3',
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(200, 0, 200)',
      barWidth: 2,
      barRadius: 1,
      barGap: 1
    }
  },
  miniMapOptions: () => {
    return {
      container: '#minimap',
      height: 20,
      waveColor: '#ddd',
      progressColor: '#999'
    }
  },
  hoverOptions: () => {
    return {
      lineColor: '#ff0000',
      lineWidth: 2,
      labelBackground: '#555',
      labelColor: '#fff',
      labelSize: '11px'
    }
  },
  timeLineOptions: () => {
    return {
      container: '#timeline'
    }
  }
})

let wavesurfer: WaveSurfer | null = null
let wsRegions: Regions | undefined = undefined // let wsRegions: Regions = Regions.create()
let activeRegion: RegionParams | null = null
// 初始化音频和注册插件
async function initWaveSurfer() {
  if (wavesurfer) {
    wavesurfer.destroy()
  }

  let wsOpt = {
    url: '/music.mp3',
    ...props.wavesurferOptions,
    container: '#waveform' //不支持自定义
  }
  if (props.showAudio) {
    const audio = document.querySelector('audio')
    audio!.src = wsOpt.url as string
    wsOpt = { ...wsOpt, media: audio as HTMLMediaElement }
  }
  wavesurfer = WaveSurfer.create(wsOpt)
  await nextTick()
  updateSurfer()
  // {
  // container: '#waveform',
  // // container: document.querySelector('#waveform'),
  // waveColor: '#4F4A85',
  // progressColor: '#383351',
  // // url: 'http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
  // url: '/music.mp3',
  // autoCenter: false,
  // plugins: [
  //   Hover.create({
  //     lineColor: '#ff0000',
  //     lineWidth: 2,
  //     labelBackground: '#555',
  //     labelColor: '#fff',
  //     labelSize: '11px',
  //   }),
  //   Timeline.create({
  //     container: '#timeline',
  //   }),
  //   wsRegions,
  //   Minimap.create({
  //     container: '#minimap',
  //     height: 20,
  //     waveColor: '#ddd',
  //     progressColor: '#999',
  //   }),
  // ],
  // }
  // console.log('getActivePlugins', wavesurfer.getActivePlugins())
}
function updateSurfer() {
  if (props.showHover) {
    wavesurfer?.registerPlugin(Hover.create(props.hoverOptions))
  }
  if (props.showRegions) {
    wsRegions = wavesurfer?.registerPlugin(Regions.create())
    const regionsData = [
      {
        start: 0,
        end: 8,
        content: 'Resize me',
        color: randomColor(),
        drag: false,
        resize: true
      },
      {
        start: 49,
        end: 60,
        content: 'Cramped region',
        color: randomColor(),
        minLength: 1,
        drag: true,
        resize: true
        // maxLength: 10,
      }
    ]
    showWsRegion(regionsData)
    playActiveRegion()
    addWsRegion()
  }
  if (props.showTimeline) {
    const timelineOpt = { ...props.timeLineOptions, container: '#timeline' }
    wavesurfer?.registerPlugin(Timeline.create(timelineOpt))
  }
  if (props.showMinimap) {
    const minimapOpt = { ...props.miniMapOptions, container: '#minimap' }
    wavesurfer?.registerPlugin(Minimap.create(minimapOpt))
  }
  if (props.showSpectrogram) {
    wavesurfer?.registerPlugin(
      Spectrogram.create({
        labels: true,
        labelsBackground: 'lightgray',
        labelsColor: 'red',
        labelsHzColor: 'red',
        height: 260
      })
    )
  }
}
// 播放暂停
const playPause = () => {
  wavesurfer?.playPause()
}
// 显示区域
const showWsRegion = (regions: RegionParams[]) => {
  // wsRegions = wavesurfer?.registerPlugin(Regions.create())
  wavesurfer?.on('ready', () => {
    regions.forEach((region) => {
      wsRegions?.addRegion(region)
    })
  })
}
// 新增区域
const addWsRegion = () => {
  wsRegions?.enableDragSelection({ color: randomColor() })
  wsRegions?.on('region-created', (region) => {
    console.log('region-created', region)
    activeRegion = region
    region.play()
  })
  autoPause()
}
// 播放当前区域
const playActiveRegion = () => {
  wsRegions?.on('region-clicked', (region, e) => {
    e.stopPropagation()
    region.play()
    activeRegion = region
    console.log('region-clicked', region)
  })
  autoPause()
}
const autoPause = () => {
  wavesurfer?.on('timeupdate', (currentTime) => {
    if (activeRegion && currentTime >= activeRegion.end!) {
      wavesurfer?.pause()
      activeRegion = null
    }
  })
}
onMounted(() => {
  initWaveSurfer()
})

defineExpose({ initWaveSurfer })
</script>

<style lang="scss" scoped>
// #waveform {
//   background: black;
// }
#waveform ::part(region) {
  font-family: fantasy;
}
</style>
