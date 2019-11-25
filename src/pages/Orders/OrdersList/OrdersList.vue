<template>
  <div>
    <!-- 最外层的包裹 -->
    <el-card shadow="never">
      <div id="orderListContent">
        <!-- 上面的搜索列表 -->
        <el-card class="searchContent" shadow="never">
          <div class="el-card__body">
            <!--  1  原点，搜索，查询搜索区域 -->
            <div>
              <i class="el-icon-search"></i>
              <span>筛选搜索</span>
              <button
                type="button"
                class="el-button el-button--primary el-button--small"
                style="float: right;"
              >
                <span>查询搜索</span>
              </button>
              <button
                type="button"
                class="el-button el-button--default el-button--small"
                style="float: right; margin-right: 15px;"
              >
                <span>重置</span>
              </button>
            </div>
            <!-- 2   -->
            <div style="margin-top: 15px;">
              <form class="el-form el-form--inline">
                <div class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">输入搜索：</label>
                  <div class="el-form-item__content">
                    <div class="input-width el-input el-input--small">
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="订单编号"
                        class="el-input__inner"
                      />
                    </div>
                  </div>
                </div>
                <!-- 收货人 -->
                <div class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">收货人：</label>
                  <div class="el-form-item__content">
                    <div data-v-ebcc336a class="input-width el-input el-input--small">
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="收货人姓名/手机号码"
                        class="el-input__inner"
                      />
                    </div>
                  </div>
                </div>
                <!-- 提交时间 -->
                <div data-v-ebcc336a class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">提交时间：</label>
                  <div class="el-form-item__content">
                    <div
                      data-v-ebcc336a
                      class="el-date-editor input-width el-input el-input--small el-input--prefix el-input--suffix el-date-editor--date"
                    >
                      <input
                        type="text"
                        autocomplete="off"
                        name
                        placeholder="请选择时间"
                        class="el-input__inner"
                      />
                      <span class="el-input__prefix">
                        <i class="el-input__icon el-icon-date"></i>
                      </span>
                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-input__icon"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- 订单状态 -->
                <div class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单状态：</label>
                  <div class="el-form-item__content">
                    <div class="el-select input-width el-select--small">
                      <div class="el-input el-input--small el-input--suffix">
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="全部"
                          readonly="readonly"
                          class="el-input__inner"
                        />
                        <span class="el-input__suffix">
                          <span class="el-input__suffix-inner">
                            <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                          </span>
                        </span>
                      </div>
                      <div
                        class="el-select-dropdown el-popper"
                        style="display: none; min-width: 203px;"
                      >
                        <div class="el-scrollbar">
                          <div
                            class="el-select-dropdown__wrap el-scrollbar__wrap"
                            style="margin-bottom: -17px; margin-right: -17px;"
                          ></div>
                          <div class="el-scrollbar__bar is-horizontal">
                            <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                          </div>
                          <div class="el-scrollbar__bar is-vertical">
                            <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单分类：</label>
                  <div class="el-form-item__content">
                    <div class="el-select input-width el-select--small">
                      <div class="el-input el-input--small el-input--suffix">
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="全部"
                          readonly="readonly"
                          class="el-input__inner"
                        />
                        <span class="el-input__suffix">
                          <span class="el-input__suffix-inner">
                            <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                          </span>
                        </span>
                      </div>
                      <div
                        class="el-select-dropdown el-popper"
                        style="display: none; min-width: 203px;"
                      >
                        <div class="el-scrollbar" style>
                          <div
                            class="el-select-dropdown__wrap el-scrollbar__wrap"
                            style="margin-bottom: -17px; margin-right: -17px;"
                          ></div>
                          <div class="el-scrollbar__bar is-horizontal">
                            <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                          </div>
                          <div class="el-scrollbar__bar is-vertical">
                            <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 140px;">订单来源：</label>
                  <div class="el-form-item__content">
                    <div class="el-select input-width el-select--small">
                      <div class="el-input el-input--small el-input--suffix">
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="全部"
                          readonly="readonly"
                          class="el-input__inner"
                        />
                        <span class="el-input__suffix">
                          <span class="el-input__suffix-inner">
                            <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                          </span>
                        </span>
                      </div>
                      <div
                        class="el-select-dropdown el-popper"
                        style="display: none; min-width: 203px;"
                      >
                        <div class="el-scrollbar" style>
                          <div
                            class="el-select-dropdown__wrap el-scrollbar__wrap"
                            style="margin-bottom: -17px; margin-right: -17px;"
                          ></div>
                          <div class="el-scrollbar__bar is-horizontal">
                            <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                          </div>
                          <div class="el-scrollbar__bar is-vertical">
                            <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </el-card>

        <!-- 中间的内容 -->
        <el-card style="margin-top:25px" shadow="never">
          <span class="el-icon-date"></span>
          <span>数据列表</span>
          <button
              type="button"
              class="el-button el-button--primary el-button--large "
              style="float: right;margin-bottom:20px"
            @click="shou1 = !shou1"
            >
              添加
            </button>
        </el-card>
        <!-- 下面的数据列表 -->
        <div id="dataContent" style="margin-top:30px">
          <el-card shadow="never">
            <el-table   border    :data="this.orderDatas">
              <el-table-column type="selection"></el-table-column>
              <el-table-column label="编号" width="50">
                <template slot-scope="scope">{{ scope.row.id }}</template>
              </el-table-column>
              <el-table-column label="订单编号" width="150">
                <template slot-scope="scope">
                  <el-popover placement="top">
                    <div slot="reference" >{{ scope.row.dingdanbianhao}}</div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="提交时间" width="150">
                <template slot-scope="scope">
                  <el-popover placement="top">
                    <div slot="reference" class="name-wrapper">{{ scope.row.shijian }}</div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="用户账号" width="100">
                <template slot-scope="scope">
                  <el-popover placement="top">
                    <div slot="reference" class="name-wrapper">{{ scope.row.yonghuzhanghao }}</div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="订单金额" width="100">
                <template slot-scope="scope">
                  <el-popover placement="top">
                    <div slot="reference" class="name-wrapper">{{ scope.row.dingdanjine }}</div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="支付方式" width="150">
                <template slot-scope="scope">
                  <el-popover placement="top">
                    <div slot="reference" class="name-wrapper">{{ scope.row.zhifufangshi }}</div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="订单来源" width="100">
                <template slot-scope="scope">
                  <el-popover placement="top">
                    <div slot="reference" class="name-wrapper">{{ scope.row.dingdanlaiyuan }}</div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="订单状态" width="200">
                <template slot-scope="scope">
                  <el-popover placement="top">
                    <div slot="reference" class="name-wrapper">{{ scope.row.dingdanzhuangtai }}</div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini">查看</el-button>
                  <el-button size="mini" type="danger"  @click="deleteOrder( scope.row.id)"  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
    </el-card>
    <!-- 点击添加按钮弹出添加订单 -->
    <el-card shadow="never" v-if="shou1" class="yqq-dingdantianjia" @click="guanbizhezhao"  >
      <el-form ref="form" :model="form" label-width="80px" class="yqq-tianjia1"   >  
        <el-form-item label="编号">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="订单编号">
          <el-input v-model="form.dingdanbianhao"></el-input>
        </el-form-item>
        <el-form-item label="订单时间">
          <el-input v-model="form.shijian"></el-input>
        </el-form-item>
        <el-form-item label="用户账号">
          <el-input v-model="form.yonghuzhanghao"></el-input>
        </el-form-item>
        <el-form-item label="订单金额">
          <el-input v-model="form.dingdanjine"></el-input>
        </el-form-item>
        <el-form-item label="支付方式">
          <el-input v-model="form.zhifufangshi"></el-input>
        </el-form-item>
        <el-form-item label="订单来源">
          <el-input v-model="form.dingdanlaiyuan"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-input v-model="form.dingdanzhuangtai"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即添加</el-button>
          <el-button @click="shou1 = !shou1">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import { test } from "../../../api";
import {DELETE_ORDERDATA } from '../../../store/mutation-types'

export default {
  data() {
    return {
      shou1: false,
      form: {
        id: "",
        dingdanbianhao: "",
        shijian: "",
        yonghuzhanghao: "",
        dingdanjine: " ",
        zhifufangshi: " ",
        dingdanlaiyuan: "",
        dingdanzhuangtai: ""
      }
    };
  },

  methods: {
    // 点击按钮添加数据
    onSubmit() {
      const tianjiashuju = this.form;
      const yuanshuju = this.orderDatas;
      yuanshuju.unshift(tianjiashuju);
      this.shou1 = false;
    },
   guanbizhezhao(){
      this.shou1 = true;
   },
    deleteOrder(id) {
     this.$confirm('确认删除吗', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
            this.$store.commit(DELETE_ORDERDATA,{id})
        })
      }
  },

  //读取状态数据
  computed: {
    ...mapState({
      orderDatas: state => state.orders.orderDatas
    })
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
html, body {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

#orderListContent {
  width: 100%;
  height: 100%;

  // 搜索内容
  .searchContent {
    width: 100%;
    height: 300px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
}

.yqq-dingdantianjia {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  .yqq-tianjia1 {
    width: 30%;
    background: #fff;
    padding: 50px 100px;
    margin: 0 auto;
  }
}
</style>
