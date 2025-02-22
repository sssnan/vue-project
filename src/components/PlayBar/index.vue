<template>
  <div class="play-bar-main">
    <!-- 播放器 -->
    <transition name="fade-bar">
      <Bar @audioHandler="playSongStates" @playAudioMode="playAudioMode" @setvolumeProgress="setvolumeProgress" @setAudioProgress="setAudioProgress" @setVolumeHandler="setVolumeHandler"></Bar>
    </transition>
    <!-- 音频 -->
    <AudioBox ref="audioRef" @setCurrentTime="setCurrentTime"></AudioBox>
  </div>
</template>

<script>
import AudioBox from "@/components/PlayBar/AudioBox.vue";
import Bar from "@/components/PlayBar/Bar.vue";
import { provide, ref } from "vue";

export default {
  name: "PlayBar",
  setup() {
    const audioRef = ref(null);
    // 当前播放时长
    const currentTime = ref(0);

    // 歌曲播放操作； 播放、暂停、上一首、下一首
    const playSongStates = state => {
      audioRef.value.playAudioType(state);
    };

    // 歌曲播放类型：循环、单曲、随机
    const playAudioMode = mode => {
      audioRef.value.playAudioMode(mode);
    };

    // 拖拽音量进度条
    const setvolumeProgress = progress => {
      audioRef.value.setvolumeProgress(progress);
    };

    // 设置音量
    const setVolumeHandler = state => {
      audioRef.value.setVolumeHandler(state);
    };

    // 拖拽音频进度条
    const setAudioProgress = t => {
      audioRef.value.setAudioProgress(t);
    };

    // 当前音频的播放时长
    const setCurrentTime = t => {
      currentTime.value = t;
    };

    // 下发当前音频时间戳
    provide("currentTime", currentTime);

    return {
      audioRef,
      setCurrentTime,
      playSongStates,
      playAudioMode,
      setVolumeHandler,
      setAudioProgress,
      setvolumeProgress,
    };
  },
  components: {
    AudioBox,
    Bar,
  },
};
</script>

<style scoped lang="less">
.play-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0 5px 40px -1px rgba(2, 10, 18, 0.1);
  transition: all 0.4s ease-out;
  transform: translateY(100%);

  &.active {
    transform: translateY(0);
  }
}
.fold {
  position: absolute;
  top: -30px;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 30px;

  .fold-btn {
    position: absolute;
    right: 200px;
    display: inline-block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50px 50px 0px 0px;
    background: #fff;
    box-shadow: 0 5px 40px -1px rgba(2, 10, 18, 0.1);
    cursor: pointer;

    .active {
      color: #2cdfff;
    }
  }
}
.audioProgress {
  position: absolute;
  top: -6px;
  z-index: 9;
}
.play-bar-inside {
  display: flex;
  font-size: 0;
  line-height: 0;
  justify-content: space-between;
  align-items: center;

  .bar-l {
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: center;
  }

  .bar-cover-img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    box-shadow: 0 0 15px 5px rgba(var(--color-text-height), 0.15);
  }

  .bar-name {
    flex: 1;
    font-size: 0;
    padding: 0 10px 6px 30px;
    overflow: hidden;

    .song_name {
      display: block;
      padding-bottom: 20px;
      line-height: 12px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      line-height: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .song_author {
      line-height: 12px;
      font-size: 12px;
      color: #999;
    }
  }

  .icon-collect,
  .icon-collect-active {
    font-size: 24px;
    line-height: 24px;
    margin: 0 15px;
    cursor: pointer;
  }

  .bar-time {
    width: 115px;
    line-height: 50px;
    font-size: 14px;
    color: #606266;
    text-align: center;
  }

  .bar-control {
    display: flex;
    padding: 10px 0;
    line-height: 1;
    align-items: center;
    justify-content: center;

    .iconfont {
      margin: 0 20px;
      font-size: 30px;
      cursor: pointer;
      color: #666;
    }

    .icon-bofang2,
    .icon-zanting1 {
      font-size: 50px;
      font-weight: bold;
      color: #2cdfff;
    }
  }

  .volumeLine {
    width: 150px;
    margin-left: 10px;
  }

  .bar-oper {
    position: relative;
    display: flex;
    font-size: 0;
    line-height: 50px;
    padding-left: 30px;
    align-items: center;
    justify-content: center;

    .iconfont {
      margin-left: 20px;
      font-size: 20px;
      cursor: pointer;
    }
  }

  .popver {
    position: relative;
  }

  .lyric {
    display: inline-block;
    padding: 26px 3px;
    margin-left: 20px;
    font-size: 18px;
    line-height: 18px;
    vertical-align: top;
    color: #999;
    cursor: pointer;
  }

  .playlist {
    position: relative;
    display: inline-block;
    line-height: 70px;
    height: 70px;
    color: #999;
    cursor: pointer;

    .playlist-num {
      position: absolute;
      top: 25%;
      left: 90%;
      font-size: 12px;
      line-height: 12px;
      color: #999;
    }
  }

  .volume-main {
    flex: 1;
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
}

.playlist-header {
  display: flex;
  line-height: 40px;

  span {
    display: inline-block;
    flex: 1;
  }

  em {
    display: inline-block;
    padding-left: 10px;
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
    font-weight: normal;
    color: #666;
    vertical-align: baseline;
  }

  .delSonglist {
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
  }

  .icon-del {
    margin-right: 5px;
    font-size: 16px;
    color: #333;
  }
}

.playlist-container {
  position: absolute;
  left: -250px;
  bottom: 75px;
  width: 500px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px 4px 0 0;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
}

.fade-bar-enter-active,
.fade-bar-leave-active {
  transition: all 0.3s ease;
}

.fade-bar-enter-from,
.fade-bar-leave-to {
  opacity: 0;
}
</style>
