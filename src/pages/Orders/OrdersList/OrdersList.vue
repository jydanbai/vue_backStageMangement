<template>
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
        <el-button @click="shou1 = !shou1"  >添加</el-button>
      </el-card>

      <!-- 下面的数据列表 -->
      <div id="dataContent" style="margin-top:30px">
        <el-card shadow="never">
          <el-table border :data="this.orderDatas">
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="编号">
              <template slot-scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column label="订单编号">
              <template slot-scope="scope">
                <el-popover placement="top">
                  <div slot="reference" class="name-wrapper">{{ scope.row.dingdanbianhao}}</div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="提交时间">
              <template slot-scope="scope">
                <el-popover placement="top">
                  <div slot="reference" class="name-wrapper">{{ scope.row.shijian }}</div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="用户账号">
              <template slot-scope="scope">
                <el-popover placement="top">
                  <div slot="reference" class="name-wrapper">{{ scope.row.yonghuzhanghao }}</div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="订单金额">
              <template slot-scope="scope">
                <el-popover placement="top">
                  <div slot="reference" class="name-wrapper">{{ scope.row.dingdanjine }}</div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="支付方式">
              <template slot-scope="scope">
                <el-popover placement="top">
                  <div slot="reference" class="name-wrapper">{{ scope.row.zhifufangshi }}</div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="订单来源">
              <template slot-scope="scope">
                <el-popover placement="top">
                  <div slot="reference" class="name-wrapper">{{ scope.row.dingdanlaiyuan }}</div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="订单状态">
              <template slot-scope="scope">
                <el-popover placement="top">
                  <div slot="reference" class="name-wrapper">{{ scope.row.dingdanzhuangtai }}</div>
                </el-popover>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini">查看</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
    <!-- input确定 -->
    <div>
      <div class="el-select el-select--small" style="display:inline ; float:left ; margin-top:20px">
        <div class="el-input el-input--small el-input--suffix">
          <input
            type="text"
            autocomplete="off"
            placeholder="批量操作"
            readonly="readonly"
            class="el-input__inner"
          />
          <span class="el-input__suffix">
            <span class="el-input__suffix-inner">
              <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
            </span>
          </span>
        </div>
        <el-button type="primary" style="margin-left:20px ; margin-top:20px">确定</el-button>
        <!-- 分页器 -->
        <div class="block" style="display:inline ; float:right ;margin-top:20px">
          <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>

    <!-- 点击添加按钮弹出添加订单 -->
    <el-card shadow="never" v-if="shou1" class="yqq-dingdantianjia"  >  
        lala
    </el-card>
  </el-card>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import { test } from "../../../api";

export default {
  data(){
    return{
        shou1:true
    }
  },
  computed: {
    ...mapState({
      orderDatas: state => state.orders.orderDatas
    })
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#orderListContent {
  width: 100%;
  height: 100%;

  // 搜索内容
  .searchContent {
    width: 100%;
    height: 300px;
  }
  




    //  方法：
    // mounted() {
    //   this.$store.dispatch('getShopDatasAction')
    // },

    // 计算属性
    // computed: {
    //   ...mapState({
    //     shopDatas:state=>state.shop.shopDatas
    //   })
    // },

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
  
}
</style>
