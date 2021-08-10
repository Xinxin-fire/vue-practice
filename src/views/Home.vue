<template>
  <div class="home">
    表格
    <el-table row-key="date" ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[
          { text: '2016-05-01', value: '2016-05-01' },
          { text: '2016-05-02', value: '2016-05-02' },
          { text: '2016-05-03', value: '2016-05-03' },
          { text: '2016-05-04', value: '2016-05-04' },
        ]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[
          { text: '家', value: '家' },
          { text: '公司', value: '公司' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template #default="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  color: $--base-color;
}
@font-face {
  font-family: 'el-icon-arrow-down';  /* Project id 2721947 */
  src: url('//at.alicdn.com/t/font_2721947_bjwnxwkn017.woff2?t=1628069245371') format('woff2'),
       url('//at.alicdn.com/t/font_2721947_bjwnxwkn017.woff?t=1628069245371') format('woff'),
       url('//at.alicdn.com/t/font_2721947_bjwnxwkn017.ttf?t=1628069245371') format('truetype');
}
::v-deep(.el-table__column-filter-trigger .el-icon-arrow-down)  {
    font-family:"el-icon-arrow-down" !important;
    font-size:14px;
    margin-left: 2px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
::v-deep(.el-table__column-filter-trigger i) {
  color: rgba(0,0,0,0.25);
}
::v-deep(.el-icon-arrow-down::before) {
  content: '\e6af' !important;
}
</style>
