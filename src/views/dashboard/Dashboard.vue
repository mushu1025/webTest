<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="12">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-message-solid grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-s-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
<!--                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>-->

                    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
                    <div id="myEcharts" style="width: 600px;height:400px;"></div>

                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Schart from "vue-schart";

export default {
    name: "dashboard",
    components: { Schart },
    setup() {
        const name = localStorage.getItem("ms_username");

        const options = {
            type: "bar",
            title: {
                text: "最近一周各品类销售图",
            },
            xRorate: 25,
            labels: ["周一", "周二", "周三", "周四", "周五"],
            datasets: [
                {
                    label: "家电",
                    data: [234, 278, 270, 190, 230],
                },
                {
                    label: "百货",
                    data: [164, 178, 190, 135, 160],
                },
                {
                    label: "食品",
                    data: [144, 198, 150, 235, 120],
                },
            ],
        };
        const options2 = {
            type: "line",
            title: {
                text: "最近几个月各品类销售趋势图",
            },
            labels: ["6月", "7月", "8月", "9月", "10月"],
            datasets: [
                {
                    label: "家电",
                    data: [234, 278, 270, 190, 230],
                },
                {
                    label: "百货",
                    data: [164, 178, 150, 135, 160],
                },
                {
                    label: "食品",
                    data: [74, 118, 200, 235, 90],
                },
            ],
        };
        return {
            name,
            options,
            options2,
        };
    },
  mounted () {
    var dom = document.getElementById('myEcharts');
    var myChart = this.$echarts.init(dom);
    var option;

    option = {
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          itemStyle: {
            //上方显示数值
            normal: {
              label: {
                show: true, //开启显示
                textStyle: {
                  //数值样式
                  color: 'black'
                }
              }
            }
          },
          data: [10, 11, 18, 34, 30, 30, 10]
        },
        {
          name: 'Union Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          itemStyle: {
            //上方显示数值
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: {
                  //数值样式
                  color: 'black'
                }
              }
            }
          },
          data: [1, 1, 1, 1, 1, 1, 1]
        }
      ]
    };

    option && myChart.setOption(option);

  }
};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
