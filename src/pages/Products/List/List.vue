<template>
  <div id="yqq-shangpin">
    <!-- 筛选搜索 -->
    <el-card shadow="never" class="yqq-sousuo">
      <div class="el-card filter-container is-never-shadow">
        <div class="el-card__body">
          <div>
            <i class="el-icon-search"></i>
            <span>筛选搜索</span>
            <button
              type="button"
              class="el-button el-button--primary el-button--small chaxun"
              style="float: right;"
            >
              <span>查询结果</span>
            </button>
            <button
              type="button"
              class="el-button el-button--default el-button--small"
              style="float: right; margin-right: 15px;"
            >
              <span>重置</span>
            </button>
          </div>
          <div style="margin-top: 15px;">
            <form class="el-form el-form--inline">
              <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px">输入搜索：</label>
                <div class="el-form-item__content">
                  <div class="el-input el-input--small" style="width: 203px">
                    <input type="text" placeholder="商品名称" class="el-input__inner" />
                  </div>
                </div>
              </div>
              <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px">商品货号：</label>
                <div class="el-form-item__content">
                  <div class="el-input el-input--small" style="width: 203px">
                    <input type="text" placeholder="商品货号" class="el-input__inner" />
                  </div>
                </div>
              </div>
              <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">商品分类：</label>
                <div class="el-form-item__content">
                  <span class="el-cascader el-cascader--small">
                    <div class="el-input el-input--small el-input--suffix">
                      <input type="text" placeholder="请选择" class="el-input__inner" />

                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-input__icon el-icon-arrow-down"></i>
                        </span>
                      </span>
                    </div>
                    <span class="el-cascader__label"></span>
                  </span>
                </div>
              </div>
              <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">商品品牌：</label>
                <div class="el-form-item__content">
                  <div class="el-select el-select--small">
                    <div class="el-input el-input--small el-input--suffix">
                      <input type="text" placeholder="请选择品牌" class="el-input__inner" />

                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                    <div
                      class="el-select-dropdown el-popper"
                      style="display: none; min-width: 215px;"
                    >
                      <div class="el-scrollbar" style>
                        <div
                          class="el-select-dropdown__wrap el-scrollbar__wrap"
                          style="margin-bottom: -17px; margin-right: -17px;"
                        >
                          <ul class="el-scrollbar__view el-select-dropdown__list">
                            <li class="el-select-dropdown__item">
                              <span>小米</span>
                            </li>
                          </ul>
                        </div>
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
                <label class="el-form-item__label" style="width: 140px;">上架状态：</label>
                <div class="el-form-item__content">
                  <div class="el-select el-select--small">
                    <div class="el-input el-input--small el-input--suffix">
                      <input type="text" placeholder="全部" class="el-input__inner" />

                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                    <div
                      class="el-select-dropdown el-popper"
                      style="display: none; min-width: 215px;"
                    >
                      <div class="el-scrollbar">
                        <div
                          class="el-select-dropdown__wrap el-scrollbar__wrap"
                          style="margin-bottom: -17px; margin-right: -17px"
                        >
                          <ul class="el-scrollbar__view el-select-dropdown__list">
                            <li class="el-select-dropdown__item">
                              <span>上架</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>下架</span>
                            </li>
                          </ul>
                        </div>
                        <div class="el-scrollbar__bar is-horizontal">
                          <div class="el-scrollbar__thumb" style="transform: translateX(0%)"></div>
                        </div>
                        <div class="el-scrollbar__bar is-vertical">
                          <div class="el-scrollbar__thumb" style="transform: translateY(0%)"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px">审核状态：</label>
                <div class="el-form-item__content">
                  <div class="el-select el-select--small">
                    <div class="el-input el-input--small el-input--suffix">
                      <input type="text" placeholder="全部" class="el-input__inner" />

                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                    <div
                      class="el-select-dropdown el-popper"
                      style="display: none; min-width: 215px;"
                    >
                      <div class="el-scrollbar" style>
                        <div
                          class="el-select-dropdown__wrap el-scrollbar__wrap"
                          style="margin-bottom: -17px; margin-right: -17px;"
                        >
                          <ul class="el-scrollbar__view el-select-dropdown__list">
                            <li class="el-select-dropdown__item">
                              <span>审核通过</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>未审核</span>
                            </li>
                          </ul>
                        </div>
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
      </div>
    </el-card>
    <!-- 数据列表 -->
    <el-card shadow="never">
      <div class="el-card__body">
        <i class="el-icon-tickets"></i>
        <span>数据列表</span>
        <button
          type="button"
          style="float right"
          class="el-button btn-add el-button--default el-button--mini"
        >
          <span>添加</span>
        </button>
      </div>
    </el-card>

    <!-- 商品表格 -->
    <el-card shadow="never">
      <template>
        <el-table :data="this.$store.state.productsList.list" border style="width: 100%">
          <el-table-column fixed type="selection"></el-table-column>
          <el-table-column label="商品编号" >
            <template slot-scope="scope">{{scope.row._id}}</template>
          </el-table-column>
          <el-table-column label="商品图片">
            <el-popover trigger="hover" placement="top">
              <div slot="reference">
                <img
                  style="width:100px"
                  src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg"
                  alt
                />
              </div>
            </el-popover>
          </el-table-column>
          <el-table-column prop="name" label="商品名称" width="200">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">{{scope.row.name}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="价格/货号" width="80">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                {{scope.row.price}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="标签" width="60">
            <template slot-scope="scope">
              {{scope.row.status}}
            </template>
          </el-table-column>
          <el-table-column prop="desc" label="商品描述">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">{{scope.row.desc}}</div>
            </template>
          </el-table-column>
         
          <el-table-column label="销量" width="100">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">1</div>
            </template>
          </el-table-column>
          <el-table-column label="商品分类">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                数码产品
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button size="mini">查看</el-button>
              <el-button size="mini">编辑</el-button>
              <br />
              <el-button size="mini">日志</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>

    <!-- 底部 -->
    <div class="yqq-footer">
      <div class="footer-zuo">
        <el-select placeholder="请选择" value="1">
          <el-option value="1">吃饭</el-option>
          <el-option value="3">睡觉</el-option>
          <el-option value="4">打豆豆</el-option>
        </el-select>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <!-- 底部分页 -->
      <div class="footer-you">
        <div class="block">
          <el-pagination
            :current-page="pageNum"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totals"
            :page-count="page"
          ></el-pagination>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  data() {
    return {
      test:'',
      pageNum: 1,
      pageSize:10,
      productsDatas:[
        {
          _id:'',
          imgs:[],
          status:false,
          name:'',
          desc:'',
          price:0,
          categoryId:'',
        }
      ],
      totals:0,
      page:0

    }
  },
  methods: {
   
  },
  mounted(){
    const pageNum = Number(this.pageNum)
    const pageSize = this.pageSize
    // console.log(pageSize)
    this.$store.dispatch('getProductsListAction',{pageNum,pageSize})
    this.productsDatas = this.productsData
    console.log(this.productsData)
    console.log(this.productsDatas)
    this.page = this.pages
    this.totals = this.total
  },
  computed: {
    ...mapState({
      productsData: state => state.productsList.list,
      pages:state => state.productsList.pages,
      total:state => state.productsList.total,
    })
  }
  // computed:{
  //   ...mapState({
  //     productsList: state => state.productsList
  //   })
  // }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.yqq-footer {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

  
    .yqq-sku1
      width 35px
      height 35px
      background-color  #409EFF
      border-radius 50%
      text-align center
      line-height 35px
      color #fff

</style>