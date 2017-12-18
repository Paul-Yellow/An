<template>
    <div class="InformationMaintenance">
        <el-row class="contanier">
            <el-col :span="24">
                <div>
                    <el-card class="box-card ">
                        <div slot="header" class="clearfix title">
                            <span>报告机构基本信息</span>
                          
                        </div>
                        <div class="content">
                            

                        </div>
                        
                    </el-card>
                </div>
            </el-col>
        </el-row>
       
    
    </div>
</template>

<script>
    export default {
      name: 'InformationMaintenance',
      data() {
        return {
          list: [],
          msg: ''
        }
      }
    
    }
</script>

<style scope lang="scss">

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
.contanier{
    padding: 24px;
    .el-card__header{
    padding: 10px 20px;
}
}   



    
</style>