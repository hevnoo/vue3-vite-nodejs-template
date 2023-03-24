<template>
  <div class="wrapper-scaler">
    <div class="box" v-for="(item, index) in info" :key="item.sid">
      <div class="close" @click="close(index)">x</div>
      <section class="card">
        <span>NAME: 00{{ item.sid }}</span>
        <span>COUNT: {{ item.value }}</span>
      </section>
      <div class="btn-box" v-if="item.btn">
        <template v-for="(res, i) in item.btn" :key="i">
          <button
            class="btn"
            :class="res.label ? 'btn' : '_btn'"
            @click="action(res.label, res.action, item.sid)"
          >
            {{ res.label }}
          </button>
        </template>
      </div>
      <button class="addBtn" @click="adds(item.sid, index)">
        新增计数按钮
      </button>
    </div>
    <div class="box box1">
      <section class="up" @click="addBtn()">
        <span class="logo">+</span>
      </section>
    </div>
  </div>
  <!--  -->
  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <el-input v-model="input.label" placeholder="label" />
    <el-input v-model="input.action" placeholder="action plus/minus" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="add()"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue";
import storage from "@/utils/storage.js";
import { getScaler, scaler } from "@/api/scaler";

const dialogVisible = ref(false);
let input = reactive({ id: 0, label: "", action: "" });
let ind = ref(0);

let info: any = reactive([
  {
    sid: 1,
    value: 0,
    btn: [
      { label: "+1", action: "plus" },
      { label: "+3", action: "plus" },
      { label: "-1", action: "minus" },
    ],
  },
  {
    sid: 2,
    value: 0,
    btn: [
      { label: "+1", action: "plus" },
      { label: "+2", action: "plus" },
      { label: "-1", action: "minus" },
    ],
  },
  {
    sid: 3,
    value: 0,
    btn: [
      { label: "+1", action: "plus" },
      { label: "-1", action: "minus" },
      { label: "", action: "" },
    ],
  },
]);

const getinfo = async (sid: any, index: any) => {
  console.log(sid);
  let { data }: any = await getScaler(sid);
  console.log("-----", data.data[0]);
  info[index].value = data.data[0].value;
};
const init = (info: any) => {
  for (let i = 0; i < info.length; i++) {
    console.log("+++");
    getinfo(info[i].sid, i);
  }
};
init(info);
//
const action = async (label: any, action: any, sid: any) => {
  let value = Number(label.split("")[1]);
  await scaler({ value, action, sid });
  //
  init(info);
};
//新增计数
const add = () => {
  info[ind.value].btn.push(input);
  dialogVisible.value = false;
};
const adds = (sid: any, index: any) => {
  ind.value = index;
  dialogVisible.value = true;
};
//新增按钮
const addBtn = () => {
  let res = {
    sid: 1,
    value: 0,
    btn: [
      { label: "+1", action: "plus" },
      { label: "+2", action: "plus" },
      { label: "-1", action: "minus" },
    ],
  };
  info.push(res);
};

//关闭按钮
const close = (i: any) => {
  info.splice(i, 1);
};
</script>

<style lang="scss" scoped>
.wrapper-scaler {
  display: flex;
}

.box {
  position: relative;
  width: 200px;
  height: 350px;
  margin-left: 30px;
  border: 1px dashed gray;
  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
}
.close {
  position: absolute;
  font-size: 16px;
  right: 10px;
  top: 10px;
}
.card {
  margin-top: 40px;
  width: 90%;
  height: 100px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-box {
  width: 150px;
  //   width: 100%;
  height: auto;
  margin-top: 30px;
  //   border: 1px dashed gray;

  & :nth-child(2n + 1) {
    margin-right: 30px;
    margin-bottom: 20px;
  }
  & :nth-child(2n) {
    margin-left: 30px;
    margin-bottom: 20px;
  }
}
.btn {
  width: 45px;
  height: 25px;
}
._btn {
  visibility: hidden;
  width: 45px;
  height: 25px;
}
.addBtn {
  padding: 5px;
  margin-top: 30px;
}

//
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.up {
  width: 130px;
  height: 130px;
  border: 1px dashed gray;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  font-size: 60px;
  font-weight: 520;
}
</style>
