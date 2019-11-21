<template>
  <div id="app">
    <Category />
    <div>
      <!-- 数据列表 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- input框 -->
    <el-card>
      <div class="el-card filter-container is-never-shadow">
        <div class="el-card__body">
          <!-- 筛选搜索 -->
          <div>
            <i class="el-icon-search"></i>
            <span>筛选搜索</span>
            <button
              type="button"
              class="el-button el-button--primary el-button--small"
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
                <label class="el-form-item__label" style="width: 140px;">输入搜索：</label>
                <div class="el-form-item__content">
                  <div class="el-input el-input--small" style="width: 203px;">
                    <input
                      type="text"
                      autocomplete="off"
                      placeholder="商品名称"
                      class="el-input__inner"
                    />
                  </div>
                </div>
              </div>
              <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">商品货号：</label>
                <div class="el-form-item__content">
                  <div class="el-input el-input--small" style="width: 203px;">
                    <input
                      type="text"
                      autocomplete="off"
                      placeholder="商品货号"
                      class="el-input__inner"
                    />
                  </div>
                </div>
              </div>
              <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">商品分类：</label>
                <div class="el-form-item__content">
                  <span class="el-cascader el-cascader--small">
                    <div class="el-input el-input--small el-input--suffix">
                       
                      <input
                        type="text"
                        autocomplete="off"
                        readonly="readonly"
                        placeholder="请选择"
                        class="el-input__inner"
                        value
                      />
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
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="请选择品牌"
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
                            <li class="el-select-dropdown__item">
                              <span>七匹狼</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>海澜之家</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>苹果</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>三星</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>华为</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>格力</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>方太</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>万和</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>OPPO</span>
                            </li>
                            <li class="el-select-dropdown__item">
                              <span>NIKE</span>
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
                      style="display: none; min-width: 215px;"
                    >
                      <div class="el-scrollbar" style>
                        <div
                          class="el-select-dropdown__wrap el-scrollbar__wrap"
                          style="margin-bottom: -17px; margin-right: -17px;"
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
                <label class="el-form-item__label" style="width: 140px;">审核状态：</label>
                <div class="el-form-item__content">
                  <div class="el-select el-select--small">
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
    <!-- 表格 -->
    <el-card>
      <div class="table-container">
    <div class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
        <div class="hidden-columns">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="el-table__header-wrapper">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1180px;">
                <!-- <colgroup> -->
                    <col name="el-table_2_column_12" width="60">
                        <col name="el-table_2_column_13" width="100">
                            <col name="el-table_2_column_14" width="120">
                                <col name="el-table_2_column_15" width="80">
                                    <col name="el-table_2_column_16" width="120">
                                        <col name="el-table_2_column_17" width="140">
                                            <col name="el-table_2_column_18" width="100">
                                                <col name="el-table_2_column_19" width="100">
                                                    <col name="el-table_2_column_20" width="100">
                                                        <col name="el-table_2_column_21" width="100">
                                                            <col name="el-table_2_column_22" width="160">
                                                                <col name="gutter" width="0">
                <!-- </colgroup> -->
                <thead class="has-gutter">
                    <tr class="">
                        <th colspan="1" rowspan="1" class="el-table_2_column_12  is-center el-table-column--selection  is-leaf">
                            <div class="cell">
                                <label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><span class="el-checkbox__inner"></span>
                                    <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                                    </span>
                                     
                                </label>
                            </div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_13  is-center   is-leaf">
                            <div class="cell">编号</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_14  is-center   is-leaf">
                            <div class="cell">商品图片</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_15  is-center   is-leaf">
                            <div class="cell">商品名称</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_16  is-center   is-leaf">
                            <div class="cell">价格/货号</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_17  is-center   is-leaf">
                            <div class="cell">标签</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_18  is-center   is-leaf">
                            <div class="cell">排序</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_19  is-center   is-leaf">
                            <div class="cell">SKU库存</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_20  is-center   is-leaf">
                            <div class="cell">销量</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_21  is-center   is-leaf">
                            <div class="cell">审核状态</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_2_column_22  is-center   is-leaf">
                            <div class="cell">操作</div>
                        </th>
                        <th class="gutter" style="width: 0px; display: none;"></th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="el-table__body-wrapper is-scrolling-left">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1180px;">
                <colgroup>
                    <col name="el-table_2_column_12" width="60">
                        <col name="el-table_2_column_13" width="100">
                            <col name="el-table_2_column_14" width="120">
                                <col name="el-table_2_column_15" width="80">
                                    <col name="el-table_2_column_16" width="120">
                                        <col name="el-table_2_column_17" width="140">
                                            <col name="el-table_2_column_18" width="100">
                                                <col name="el-table_2_column_19" width="100">
                                                    <col name="el-table_2_column_20" width="100">
                                                        <col name="el-table_2_column_21" width="100">
                                                            <col name="el-table_2_column_22" width="160">
                </colgroup>
                <tbody>
                    <tr class="el-table__row">
                        <td class="el-table_2_column_12 is-center el-table-column--selection">
                            <div class="cell">
                                <label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><span class="el-checkbox__inner"></span>
                                    <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                                    </span>
                                     
                                </label>
                            </div>
                        </td>
                        <td class="el-table_2_column_13 is-center ">
                            <div class="cell">26</div>
                        </td>
                        <td class="el-table_2_column_14 is-center ">
                            <div class="cell">
                                <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg" style="height: 80px;">
                            </div>
                        </td>
                        <td class="el-table_2_column_15 is-center ">
                            <div class="cell">
                                <p>华为 HUAWEI P20</p>
                                <p>品牌：华为</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_16 is-center ">
                            <div class="cell">
                                <p>价格：￥3788</p>
                                <p>货号：6946605</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_17 is-center ">
                            <div class="cell">
                                <p>上架：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>新品：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>推荐：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_18 is-center ">
                            <div class="cell">100</div>
                        </td>
                        <td class="el-table_2_column_19 is-center ">
                            <div class="cell">
                                <button type="button" class="el-button el-button--primary is-circle">
                                     <i class="el-icon-edit"></i>
                                     
                                </button>
                            </div>
                        </td>
                        <td class="el-table_2_column_20 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_21 is-center ">
                            <div class="cell">
                                <p>未审核</p>
                                <p>
                                    <button type="button" class="el-button el-button--text">
                                         
                                         <span>审核详情
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_22 is-center ">
                            <div class="cell">
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>查看
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>编辑
            </span>
                                    </button>
                                </p>
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>日志
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--danger el-button--mini">
                                         
                                         <span>删除
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr class="el-table__row">
                        <td class="el-table_2_column_12 is-center el-table-column--selection">
                            <div class="cell">
                                <label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><span class="el-checkbox__inner"></span>
                                    <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                                    </span>
                                     
                                </label>
                            </div>
                        </td>
                        <td class="el-table_2_column_13 is-center ">
                            <div class="cell">27</div>
                        </td>
                        <td class="el-table_2_column_14 is-center ">
                            <div class="cell">
                                <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg" style="height: 80px;">
                            </div>
                        </td>
                        <td class="el-table_2_column_15 is-center ">
                            <div class="cell">
                                <p>小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待</p>
                                <p>品牌：小米</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_16 is-center ">
                            <div class="cell">
                                <p>价格：￥2699</p>
                                <p>货号：7437788</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_17 is-center ">
                            <div class="cell">
                                <p>上架：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>新品：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>推荐：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_18 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_19 is-center ">
                            <div class="cell">
                                <button type="button" class="el-button el-button--primary is-circle">
                                     <i class="el-icon-edit"></i>
                                     
                                </button>
                            </div>
                        </td>
                        <td class="el-table_2_column_20 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_21 is-center ">
                            <div class="cell">
                                <p>未审核</p>
                                <p>
                                    <button type="button" class="el-button el-button--text">
                                         
                                         <span>审核详情
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_22 is-center ">
                            <div class="cell">
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>查看
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>编辑
            </span>
                                    </button>
                                </p>
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>日志
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--danger el-button--mini">
                                         
                                         <span>删除
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr class="el-table__row">
                        <td class="el-table_2_column_12 is-center el-table-column--selection">
                            <div class="cell">
                                <label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><span class="el-checkbox__inner"></span>
                                    <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                                    </span>
                                     
                                </label>
                            </div>
                        </td>
                        <td class="el-table_2_column_13 is-center ">
                            <div class="cell">28</div>
                        </td>
                        <td class="el-table_2_column_14 is-center ">
                            <div class="cell">
                                <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg" style="height: 80px;">
                            </div>
                        </td>
                        <td class="el-table_2_column_15 is-center ">
                            <div class="cell">
                                <p>小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待</p>
                                <p>品牌：小米</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_16 is-center ">
                            <div class="cell">
                                <p>价格：￥649</p>
                                <p>货号：7437789</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_17 is-center ">
                            <div class="cell">
                                <p>上架：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>新品：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>推荐：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_18 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_19 is-center ">
                            <div class="cell">
                                <button type="button" class="el-button el-button--primary is-circle">
                                     <i class="el-icon-edit"></i>
                                     
                                </button>
                            </div>
                        </td>
                        <td class="el-table_2_column_20 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_21 is-center ">
                            <div class="cell">
                                <p>未审核</p>
                                <p>
                                    <button type="button" class="el-button el-button--text">
                                         
                                         <span>审核详情
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_22 is-center ">
                            <div class="cell">
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>查看
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>编辑
            </span>
                                    </button>
                                </p>
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>日志
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--danger el-button--mini">
                                         
                                         <span>删除
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr class="el-table__row">
                        <td class="el-table_2_column_12 is-center el-table-column--selection">
                            <div class="cell">
                                <label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><span class="el-checkbox__inner"></span>
                                    <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                                    </span>
                                     
                                </label>
                            </div>
                        </td>
                        <td class="el-table_2_column_13 is-center ">
                            <div class="cell">29</div>
                        </td>
                        <td class="el-table_2_column_14 is-center ">
                            <div class="cell">
                                <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5acc5248N6a5f81cd.jpg" style="height: 80px;">
                            </div>
                        </td>
                        <td class="el-table_2_column_15 is-center ">
                            <div class="cell">
                                <p>Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机</p>
                                <p>品牌：苹果</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_16 is-center ">
                            <div class="cell">
                                <p>价格：￥5499</p>
                                <p>货号：7437799</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_17 is-center ">
                            <div class="cell">
                                <p>上架：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>新品：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>推荐：
                                    <div role="switch" class="el-switch">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_18 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_19 is-center ">
                            <div class="cell">
                                <button type="button" class="el-button el-button--primary is-circle">
                                     <i class="el-icon-edit"></i>
                                     
                                </button>
                            </div>
                        </td>
                        <td class="el-table_2_column_20 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_21 is-center ">
                            <div class="cell">
                                <p>未审核</p>
                                <p>
                                    <button type="button" class="el-button el-button--text">
                                         
                                         <span>审核详情
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_22 is-center ">
                            <div class="cell">
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>查看
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>编辑
            </span>
                                    </button>
                                </p>
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>日志
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--danger el-button--mini">
                                         
                                         <span>删除
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr class="el-table__row">
                        <td class="el-table_2_column_12 is-center el-table-column--selection">
                            <div class="cell">
                                <label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><span class="el-checkbox__inner"></span>
                                    <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                                    </span>
                                     
                                </label>
                            </div>
                        </td>
                        <td class="el-table_2_column_13 is-center ">
                            <div class="cell">30</div>
                        </td>
                        <td class="el-table_2_column_14 is-center ">
                            <div class="cell">
                                <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5ad83a4fN6ff67ecd.jpg!cc_350x449.jpg" style="height: 80px;">
                            </div>
                        </td>
                        <td class="el-table_2_column_15 is-center ">
                            <div class="cell">
                                <p>HLA海澜之家简约动物印花短袖T恤</p>
                                <p>品牌：海澜之家</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_16 is-center ">
                            <div class="cell">
                                <p>价格：￥98</p>
                                <p>货号：HNTBJ2E042A</p>
                            </div>
                        </td>
                        <td class="el-table_2_column_17 is-center ">
                            <div class="cell">
                                <p>上架：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>新品：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                                <p>推荐：
                                    <div role="switch" aria-checked="true" class="el-switch is-checked">
                                        <input type="checkbox" name="" true-value="1" false-value="0" class="el-switch__input">
                                         <span class="el-switch__core" style="width: 40px;"></span>
                                         
                                    </div>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_18 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_19 is-center ">
                            <div class="cell">
                                <button type="button" class="el-button el-button--primary is-circle">
                                     <i class="el-icon-edit"></i>
                                     
                                </button>
                            </div>
                        </td>
                        <td class="el-table_2_column_20 is-center ">
                            <div class="cell">0</div>
                        </td>
                        <td class="el-table_2_column_21 is-center ">
                            <div class="cell">
                                <p>未审核</p>
                                <p>
                                    <button type="button" class="el-button el-button--text">
                                         
                                         <span>审核详情
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                        <td class="el-table_2_column_22 is-center ">
                            <div class="cell">
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>查看
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>编辑
            </span>
                                    </button>
                                </p>
                                <p>
                                    <button type="button" class="el-button el-button--default el-button--mini">
                                         
                                         <span>日志
            </span>
                                    </button>
                                    <button type="button" class="el-button el-button--danger el-button--mini">
                                         
                                         <span>删除
            </span>
                                    </button>
                                </p>
                            </div>
                        </td>
                    </tr>
                     
                </tbody>
            </table>
             
             
        </div>
         
         
         
         
        <div class="el-table__column-resize-proxy" style="display: none;"></div>
        <div class="el-loading-mask" style="display: none;">
            <div class="el-loading-spinner">
                <svg viewBox="25 25 50 50" class="circular">
                    <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
                </svg>
                 
            </div>
        </div>
     </div>
     </div>
    </el-card>
  </div>
</template>

<script>
import Category from "./components/Category/Category";
export default {
  name: "app",
  components: {
    Category
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
